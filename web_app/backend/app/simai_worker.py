# -*- coding: utf-8 -*-
"""常駐 SimAI 推論 worker——本工具能做到秒級互動的唯一原因。

此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。

**必須用 SimAI Pro 自己的 venv python 執行**（torch／stochos／pyvista 的版本綁得很緊）：
    "<SimAI>\\definitions\\simai_pro\\.venv\\Scripts\\python.exe" -u -m app.simai_worker

為什麼是常駐子行程，不是 FastAPI 直接呼叫（ADR-0003）：
  1. torch＋stochos 的 import 要 30~120 秒。載入一次、活著服務，才有 0.08 秒。
     SimAI Pro 官方的 predict_result 每次要 28~31 秒，因為 GLOW 的
     method_runner 是 multiprocessing spawn，每次都重新 import——那不是計算時間。
  2. SimAI 的套件在 Program Files 的 venv 裡，我們不該把 FastAPI 裝進廠商目錄。
  3. 商業 EDA/CAD 的 Python 綁定常常不釋放 GIL，放在 thread 會凍住整個伺服器。

授權：`load_model()` 與 `predict()` **不需要授權**，只有訓練（fit）需要。

協定：stdin 逐行收 JSON 請求，stdout 逐行回 JSON 回應（皆為 UTF-8 單行）。
"""

from __future__ import annotations

import json
import os
import sys
import time
import traceback
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parent.parent
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))


def _emit(payload: dict) -> None:
    sys.stdout.write(json.dumps(payload, ensure_ascii=False) + "\n")
    sys.stdout.flush()


class InferenceEngine:
    """握著一個已載入的 SimAI 模型。除了 __init__，其餘呼叫都是毫秒級。"""

    def __init__(self, model_dir: str, model_name: str, output_field: str,
                 input_fields: list[str] | None = None,
                 baseline_path: str = "", baseline_sha: str = "") -> None:
        self.model_dir = model_dir
        self.model_name = model_name
        self.output_field = output_field
        # 殘差學習：模型輸出的是「與乾淨平台的差」，推論後要把基準加回去。
        # 沒有設定就代表模型直接學絕對值（舊行為）。
        self.baseline_path = baseline_path
        self.baseline_sha = baseline_sha
        self.baseline = None
        self.baseline_by_shape: dict = {}
        # 節點輸入特徵（例如 region：接地板／天線／金屬件／遠場球）。
        # 必須與訓練時的 input_names 完全一致；VTP 才帶得動這些，STL 會直接拋錯。
        self.input_fields = list(input_fields or [])
        self.ready = False
        self.reason = ""
        self.load_seconds = 0.0
        self.global_width = 0
        self._gm = None
        self._out_fields = None
        self._loc = None

    def load(self) -> None:
        t0 = time.perf_counter()
        try:
            from ansys.solutions.simai_pro.datamodel.enums import VTKLocationEnum
            from ansys.solutions.simai_pro.datamodel.vtk import VTKField
            from ansys.solutions.simai_pro.logic.graph_model_util import GraphModel
        except Exception as exc:  # pragma: no cover - 環境問題
            self.reason = "無法 import SimAI Pro：%s。請確認是用 SimAI 的 venv python 執行。" % exc
            return

        self._loc = VTKLocationEnum.POINT
        self._out_fields = [VTKField(name=self.output_field,
                                     location=VTKLocationEnum.POINT, dimension=1)]

        if not self.model_dir or not Path(self.model_dir).is_dir():
            self.reason = "尚未設定訓練好的模型（SIMAI_MODEL_DIR=%r）" % self.model_dir
            return

        if self.baseline_path:
            p = Path(self.baseline_path)
            if not p.exists():
                self.reason = "找不到殘差基準檔：%s" % p
                return
            import numpy as np

            if self.baseline_sha:
                import hashlib

                actual = hashlib.sha256(p.read_bytes()).hexdigest()[:16]
                if actual != self.baseline_sha:
                    self.reason = (
                        "殘差基準檔與這個模型不符"
                        "（模型訓練時 %s，現在的檔案 %s）。\n"
                        "模型學的是「相對某個原點的差」，換掉原點卻沒重訓，"
                        "推論會加回錯的原點——數字看起來完全合理，但是錯的。\n"
                        "請重新執行 train_model.py 與 validate_model.py。"
                        % (self.baseline_sha, actual))
                    return
            data = json.loads(p.read_text(encoding="utf-8"))
            # 每種接地面外型各自的基準。共用一個基準會把「板型差異」
            # 混進殘差（實測放大 32~38%），推論時也會加回錯的原點。
            self.baseline_by_shape = {
                k: np.asarray(v, dtype="float32")
                for k, v in (data.get("by_shape") or {}).items()
            }
            self.baseline = np.asarray(data["gain_dbi"], dtype="float32")

        try:
            gm = GraphModel(model_path=self.model_dir, model_name=self.model_name)
            gm.load_model()          # 免授權
            self._gm = gm
            # 模型訓練時的全域特徵寬度。與推論時送的邊界條件數量不符，
            # numpy 只會丟 "operands could not be broadcast together"——
            # 那個訊息說不出問題在哪，所以先把數字留著（見 predict 的錯誤處理）。
            self.global_width = int(getattr(gm.core, "n_cov_l", 0) or 0)
            self.ready = True
            self.load_seconds = time.perf_counter() - t0
        except Exception as exc:
            self.reason = "載入模型失敗：%s" % exc

    def baseline_for(self, shape: str):
        """挑這個板型的殘差原點；沒有就用預設的。"""
        if self.baseline_by_shape:
            return self.baseline_by_shape.get(shape, self.baseline)
        return self.baseline

    def predict(self, geometry_path: str, bc: dict, with_ci: bool = True,
                ground_shape: str = "rect") -> dict:
        """回傳節點場（與信心區間）。這是熱路徑，實測 ~0.08 秒。"""
        from ansys.solutions.simai_pro.logic.graph_model_util import PredictionData

        t0 = time.perf_counter()
        data = PredictionData(
            geometry_path=geometry_path,
            entered_bc=bc,                # ★鍵順序必須與訓練時一致
            input_names=self.input_fields,
            output_fields=self._out_fields,
            data_location=self._loc,
        )
        t_prep = time.perf_counter() - t0

        t0 = time.perf_counter()
        try:
            raw = self._gm.predict(
                data.X_coords,
                X_node_feat=data.X_node_feat,
                X_global_feat=data.X_global_feat,
                **({"CI": 0.9} if with_ci else {}),
            )
        except ValueError as exc:
            # numpy 的廣播錯誤說不出問題在哪。把「送了什麼／模型要什麼」講清楚，
            # 否則下一個人（包括未來的自己）要花一小時才知道是邊界條件對不上。
            if "broadcast" in str(exc):
                raise RuntimeError(
                    "邊界條件與模型不符：本次送出 %d 個（%s），"
                    "但模型訓練時的全域特徵寬度是 %d。\n"
                    "請確認 vtp_builder.boundary_conditions() 的欄位"
                    "與這個模型訓練時使用的 boundary_conditions.json 一致"
                    "（數量與順序都要一致）。\n原始錯誤：%s"
                    % (len(bc), "、".join(bc.keys()), self.global_width, exc)
                ) from exc
            raise
        t_pred = time.perf_counter() - t0

        import numpy as np

        arr = np.asarray(raw[0] if isinstance(raw, list) else raw)
        # 帶 CI 時 shape=(3, n_nodes, n_out)：預測值、下界、上界
        if arr.ndim == 3 and arr.shape[0] == 3:
            value, lower, upper = arr[0, :, 0], arr[1, :, 0], arr[2, :, 0]
        else:
            flat = arr.reshape(-1)
            value, lower, upper = flat, None, None

        coords = np.asarray(data.X_coords[0], dtype="float32")

        # 遠場球節點是網格尾端連續的一段（build_surface 保證的順序），
        # 對應展平的 (phi, theta) 網格。前端只要這一段就能畫出輻射場型。
        from app.vtp_builder import farfield_angles, n_farfield_nodes

        n_ff = n_farfield_nodes()
        phi_ax, theta_ax = farfield_angles()
        ff_value = value[-n_ff:] if len(value) >= n_ff else value

        # 殘差 → 絕對值。基準是逐節點的常數位移，所以信心區間的**寬度**不變
        # （上下界一起平移），uncertainty 仍然可比。
        base = self.baseline_for(ground_shape)
        if base is not None and len(base) == len(ff_value):
            ff_value = ff_value + base

        out = {
            "n_nodes": int(coords.shape[0]),
            "peak": float(ff_value.max()),
            "mean": float(ff_value.mean()),
            "prep_seconds": round(t_prep, 4),
            "predict_seconds": round(t_pred, 4),
            "farfield": {
                "n_phi": len(phi_ax),
                "n_theta": len(theta_ax),
                "phi_deg": phi_ax.tolist(),
                "theta_deg": theta_ax.tolist(),
                # (phi 外層, theta 內層) 展平，與訓練資料同序
                "gain_dbi": ff_value.astype("float32").round(3).tolist(),
            },
        }
        if lower is not None:
            band = float(np.mean(upper[-n_ff:] - lower[-n_ff:]))
            # 信心指標：遠場節點上的平均區間寬度。
            # 寬 = 這個組態離訓練分布遠，預測不該被當真（見對照組決策）。
            out["uncertainty"] = round(band, 4)
        return out


def main() -> None:
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

    engine = InferenceEngine(
        model_dir=os.environ.get("SIMAI_MODEL_DIR", ""),
        model_name=os.environ.get("SIMAI_MODEL_NAME", "surface"),
        output_field=os.environ.get("SIMAI_OUTPUT_FIELD", "gain_dbi"),
        input_fields=[s for s in os.environ.get("SIMAI_INPUT_FIELDS", "").split(",") if s],
        baseline_path=os.environ.get("SIMAI_BASELINE", ""),
        baseline_sha=os.environ.get("SIMAI_BASELINE_SHA", ""),
    )
    engine.load()
    _emit({"type": "ready", "ready": engine.ready, "reason": engine.reason,
           "load_seconds": round(engine.load_seconds, 2),
           "global_width": engine.global_width,
           "residual": engine.baseline is not None,
           "model_dir": engine.model_dir})

    scratch = Path(os.environ.get("SIMAI_SCRATCH",
                                  str(BACKEND_ROOT / "runs" / "scratch")))
    scratch.mkdir(parents=True, exist_ok=True)

    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        try:
            req = json.loads(line)
        except Exception:
            _emit({"type": "error", "message": "請求不是合法的 JSON"})
            continue

        rid = req.get("id")
        cmd = req.get("cmd", "predict")

        if cmd == "ping":
            _emit({"type": "pong", "id": rid, "ready": engine.ready})
            continue
        if cmd == "shutdown":
            _emit({"type": "bye", "id": rid})
            return
        if cmd != "predict":
            _emit({"type": "error", "id": rid, "message": "未知指令：%s" % cmd})
            continue

        if not engine.ready:
            _emit({"type": "error", "id": rid, "message": engine.reason})
            continue

        try:
            geom = req.get("geometry_path")
            bc = req.get("bc") or {}
            if not geom:
                # 由組態即時產生幾何（劇本組態則直接給 geometry_path）
                from app.platform_model import PlatformConfig
                from app.vtp_builder import boundary_conditions, build_surface

                cfg = PlatformConfig.from_dict(req.get("config") or {})
                t0 = time.perf_counter()
                mesh = build_surface(cfg)
                geom = str(scratch / ("req_%s.vtp" % (rid or "x")))
                mesh.save(geom, binary=True)
                mesh_seconds = time.perf_counter() - t0
                bc = bc or boundary_conditions(cfg)
            else:
                mesh_seconds = 0.0

            result = engine.predict(
                geom, bc, with_ci=bool(req.get("with_ci", True)),
                ground_shape=(req.get("config") or {}).get("ground_shape", "rect"))
            result["mesh_seconds"] = round(mesh_seconds, 4)
            _emit({"type": "result", "id": rid, "result": result})
        except Exception as exc:
            _emit({"type": "error", "id": rid, "message": str(exc),
                   "trace": traceback.format_exc()[-1200:]})


if __name__ == "__main__":
    main()

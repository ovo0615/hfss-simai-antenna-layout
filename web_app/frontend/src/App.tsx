// 主畫面。此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  KeepoutResult,
  PredictResponse,
  ReportData,
  Scenario,
  SimAIStatus,
  SweepResult,
  UncertaintyCalibration,
} from "./api";
import {
  getHealth,
  getPlatform,
  getReport,
  getScenarios,
  keepout,
  predict,
  restartWorker,
  sweep,
} from "./api";
import Preview3D from "./components/Preview3D";
import ReportView from "./components/ReportView";
import KeepoutMap from "./components/KeepoutMap";
import SweepChart from "./components/SweepChart";
import type { GroundShape, MetalPart, PlatformConfig, PlatformSpec } from "./geometry";
import { buildScene, clearanceIntrusion, defaultMetal, setPlatform, topologyId } from "./geometry";

const CLEAN: PlatformConfig = { ground_shape: "rect", freq_ghz: 2.45, metals: [] };

// A_clean 的 HFSS 真解——殘差學習的基準，也是 demo 的比較原點
const BASELINE_GAIN_DBI = 3.44;

function StatusLine({ status }: { status: SimAIStatus | null }) {
  if (!status) return <span className="hint">連線中…</span>;
  const color = status.ready ? "var(--good)" : status.alive ? "var(--warn)" : "var(--bad)";
  const label = status.ready ? "模型已載入，推論就緒" : status.alive ? "worker 在但模型未就緒" : "worker 未啟動";
  return (
    <div>
      <div style={{ fontSize: 13 }}>
        <span className="status-dot" style={{ background: color }} />
        {label}
        {status.ready && status.load_seconds > 0 && (
          <span className="badge" style={{ marginLeft: 8 }}>載入 {status.load_seconds}s</span>
        )}
        {status.ready && status.residual && (
          <span className="badge" style={{ marginLeft: 6 }} title="模型學的是與乾淨平台的差，外插時會退化成乾淨天線的場型">
            殘差模式
          </span>
        )}
      </div>
      {!status.ready && status.reason && (
        <div className="hint" style={{ marginTop: 6, whiteSpace: "pre-wrap" }}>{status.reason}</div>
      )}
    </div>
  );
}

export default function App() {
  // 平台定義來自後端。載入完成前不渲染任何幾何——
  // 用過期或猜的值畫出來的預覽會騙人，那比沒有畫面更糟。
  const [spec, setSpec] = useState<PlatformSpec | null>(null);
  const [specError, setSpecError] = useState<string | null>(null);
  const [cfg, setCfg] = useState<PlatformConfig>(CLEAN);
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<SimAIStatus | null>(null);
  const [calib, setCalib] = useState<UncertaintyCalibration | null>(null);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [pred, setPred] = useState<PredictResponse | null>(null);
  const [predError, setPredError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [view, setView] = useState<"interactive" | "report">("interactive");
  const [showPattern, setShowPattern] = useState(true);
  const [showTruth, setShowTruth] = useState(true);
  const [sweepData, setSweepData] = useState<SweepResult | null>(null);
  const [sweeping, setSweeping] = useState(false);
  const [koData, setKoData] = useState<KeepoutResult | null>(null);
  const [koBusy, setKoBusy] = useState(false);
  const [report, setReport] = useState<ReportData | null>(null);
  const [reportError, setReportError] = useState<string | null>(null);

  // 拖動基準：拖動期間以起始位置 + 位移計算，避免累積誤差
  const dragBaseRef = useRef<Map<string, { x: number; y: number }>>(new Map());
  const debounceRef = useRef<number | null>(null);
  // 讓啟動時的 effect 能呼叫 runPredict（它定義在下面）
  const runPredictRef = useRef<((cfg: PlatformConfig) => void) | null>(null);

  useEffect(() => {
    getPlatform()
      .then((p) => {
        setPlatform(p);
        setSpec(p);
      })
      .catch((e: Error) => setSpecError(e.message));
    getHealth()
      .then((h) => {
        setStatus(h.simai);
        setCalib(h.uncertainty_calibration ?? null);
      })
      .catch(() => setStatus(null));
    getScenarios()
      .then((s) => {
        setScenarios(s.scenarios);
        // 開啟時就跑一次基準預測。先前初始的 activeScenario 寫死成舊的
        // 劇本名稱，換掉劇本之後就對不上，畫面一開是空的（數字全是「—」），
        // 看起來像壞掉。
        const base = s.scenarios.find((x) => x.in_training) ?? s.scenarios[0];
        if (base) {
          setCfg({
            ground_shape: base.config.ground_shape,
            freq_ghz: base.config.freq_ghz,
            metals: base.config.metals,
          });
          setActiveScenario(base.key);
          runPredictRef.current?.({
            ground_shape: base.config.ground_shape,
            freq_ghz: base.config.freq_ghz,
            metals: base.config.metals,
          });
        }
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    if (view !== "report" || report) return;
    getReport()
      .then((r) => {
        setReport(r);
        setReportError(null);
      })
      .catch((e: Error) => setReportError(e.message));
  }, [view, report]);

  // 幾何函式都需要平台定義，spec 還沒到就不要呼叫
  const scene = useMemo(() => (spec ? buildScene(cfg, selected) : null), [spec, cfg, selected]);
  const topo = useMemo(() => topologyId(cfg), [cfg]);
  const clearance = useMemo(() => (spec ? clearanceIntrusion(cfg) : Infinity), [spec, cfg]);

  const runPredict = useCallback((next: PlatformConfig) => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      setBusy(true);
      predict(next)
        .then((r) => {
          setPred(r);
          setPredError(null);
        })
        .catch((e: Error) => {
          setPred(null);
          setPredError(e.message);
        })
        .finally(() => setBusy(false));
    }, 120);
  }, []);
  runPredictRef.current = runPredict;

  const applyConfig = useCallback(
    (next: PlatformConfig, scenarioKey: string | null) => {
      setCfg(next);
      setActiveScenario(scenarioKey);
      runPredict(next);
    },
    [runPredict]
  );

  const handleDrag = useCallback(
    (name: string, dx: number, dy: number, done: boolean) => {
      setCfg((prev) => {
        let base = dragBaseRef.current.get(name);
        if (!base) {
          const m = prev.metals.find((x) => x.name === name);
          if (!m) return prev;
          base = { x: m.x, y: m.y };
          dragBaseRef.current.set(name, base);
        }
        const next = {
          ...prev,
          metals: prev.metals.map((m) =>
            m.name === name ? { ...m, x: base!.x + dx, y: base!.y + dy } : m
          ),
        };
        if (done) {
          dragBaseRef.current.delete(name);
          setActiveScenario(null);
          runPredict(next);
        }
        return next;
      });
    },
    [runPredict]
  );

  const addMetal = useCallback(() => {
    setCfg((prev) => {
      // 預設放在天線正下方（x 與天線臂 44~74 重疊），這樣第一次掃描
      // 就看得到有意義的曲線。金屬件離天線遠時任何軸都掃出平線，
      // 那會讓人誤以為「位置不重要」。
      // 每個新的錯開位置，否則連按幾次會全部疊在同一點、抓不出來。
      const n = prev.metals.length;
      const d0 = defaultMetal(n);
      const m: MetalPart = {
        name: `metal_${n + 1}`,
        kind: "solid",
        x: d0.x,
        y: d0.y,
        z: 0,
        w: d0.w,
        d: d0.d,
        h: d0.h,
      };
      const next = { ...prev, metals: [...prev.metals, m] };
      setActiveScenario(null);
      setSelected(m.name);
      runPredict(next);
      return next;
    });
  }, [runPredict]);

  const removeSelected = useCallback(() => {
    if (!selected) return;
    setCfg((prev) => {
      const next = { ...prev, metals: prev.metals.filter((m) => m.name !== selected) };
      setActiveScenario(null);
      runPredict(next);
      return next;
    });
    setSelected(null);
  }, [selected, runPredict]);

  const activeSc = activeScenario
    ? scenarios.find((s) => s.key === activeScenario) ?? null
    : null;
  const truth = activeSc?.hfss_truth ?? null;
  const truthPattern = activeSc?.truth_pattern ?? null;
  const gain = pred?.result.peak ?? null;
  const uncertainty = pred?.result.uncertainty ?? null;
  // 金屬件蓋到天線導體上 → 天線被實體短路，預測沒有物理意義
  const invalid = clearance < 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div className="top-bar">
        <div className="brand">
          天線佈局 AI 預測
          <span className="brand-sub">HFSS × SimAI｜虎門科技</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            className={`ghost-btn${view === "interactive" ? " active" : ""}`}
            onClick={() => setView("interactive")}
          >
            互動預測
          </button>
          <button
            className={`ghost-btn${view === "report" ? " active" : ""}`}
            onClick={() => setView("report")}
          >
            驗證報告
          </button>
        </div>
      </div>

      {view === "report" ? (
        report ? (
          <ReportView data={report} />
        ) : (
          <div style={{ padding: 30 }} className="hint">
            {reportError ? (
              <>
                <b style={{ color: "var(--warn)" }}>尚無報告：</b>
                <div style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>{reportError}</div>
              </>
            ) : (
              "載入報告中…"
            )}
          </div>
        )
      ) : specError ? (
        <div style={{ padding: 30 }} className="hint">
          <b style={{ color: "var(--bad)" }}>無法載入平台定義：</b>
          <div style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>{specError}</div>
          <div style={{ marginTop: 12 }}>
            幾何定義來自後端的 <code>platform.json</code>。
            沒有它就無法保證預覽與實際計算一致，所以工具刻意不畫任何東西——
            用猜的值畫出來的預覽會騙人。
          </div>
        </div>
      ) : !spec ? (
        <div style={{ padding: 30 }} className="hint">載入平台定義中…</div>
      ) : (
        <div className="app-container">
      <div className="canvas-area">
        <Preview3D
          scene={scene}
          fitKey={topo}
          onPick={setSelected}
          onDrag={handleDrag}
          pattern={pred?.result.farfield ?? null}
          showPattern={showPattern}
          truthPattern={truthPattern}
          showTruth={showTruth}
        />
        <div className="overlay-badge">
          {/* ★ 平台名稱一律取自組態，不要寫死。寫死的字串在換天線時
              不會出錯、也不會消失，只會**繼續顯示上一支天線的名字**——
              比拋例外更難發現。 */}
          <div style={{ fontWeight: 600, marginBottom: 2 }}>{spec?.name}</div>
          <div style={{ color: "var(--text-muted)" }}>
            拖動金屬件即時預測　·　拓樸 {topo}
          </div>
          {pred && (
            <div style={{ marginTop: 6, color: "var(--text-muted)" }}>
              SimAI 場型：低 <span style={{ color: "#2650d9" }}>■</span>
              <span style={{ color: "#1abfd9" }}>■</span>
              <span style={{ color: "#f2d933" }}>■</span>
              <span style={{ color: "#e64033" }}>■</span> 高
              {truthPattern && showTruth && "　·　白色線框＝HFSS 真解"}
            </div>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            display: "flex",
            gap: 8,
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <button
            className={`ghost-btn${showPattern ? " active" : ""}`}
            onClick={() => setShowPattern((v) => !v)}
          >
            {showPattern ? "隱藏 SimAI 場型" : "顯示 SimAI 場型"}
          </button>
          {truthPattern && (
            <button
              className={`ghost-btn${showTruth ? " active" : ""}`}
              onClick={() => setShowTruth((v) => !v)}
            >
              {showTruth ? "隱藏 HFSS 真解" : "疊上 HFSS 真解"}
            </button>
          )}
        </div>
        {invalid && (
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 16,
              right: 16,
              background: "rgba(60, 16, 16, 0.94)",
              border: "1px solid var(--bad)",
              borderRadius: 8,
              padding: "10px 14px",
              fontSize: 13,
            }}
          >
            <b style={{ color: "var(--bad)" }}>這個組態不合物理：</b>
            金屬件蓋到天線導體上了，等於把天線短路。
            訓練資料裡沒有這種組態（產生資料時就被排除），
            所以旁邊那個預測值**不能當真**。把金屬件拖開再看。
          </div>
        )}
      </div>

      <div className="right-panel">
        <div className="panel-section">
          <h3 className="panel-title">SimAI 推論引擎</h3>
          <StatusLine status={status} />
          <button
            className="ghost-btn"
            style={{ marginTop: 10 }}
            onClick={() => {
              setStatus(null);
              restartWorker().then(setStatus).catch(() => setStatus(null));
            }}
          >
            重新載入模型
          </button>
        </div>

        <div className="panel-section">
          <h3 className="panel-title">預測結果</h3>
          {predError && (
            <div className="hint" style={{ color: "var(--warn)", whiteSpace: "pre-wrap" }}>
              {predError}
            </div>
          )}
          {/* 定義域警告要排在數字前面：模型沒看過這種輸入，比它算出什麼更重要。
              信心指標抓不到這件事——它量的是「場型多難預測」，
              不是「這個輸入我看過沒有」。 */}
          {pred && pred.domain_warnings.length > 0 && (
            <div
              style={{
                border: "1px solid var(--bad)",
                background: "rgba(60,16,16,0.5)",
                borderRadius: 8,
                padding: "9px 11px",
                marginBottom: 10,
                fontSize: 12.5,
                lineHeight: 1.65,
              }}
            >
              <b style={{ color: "var(--bad)" }}>超出訓練範圍，預測不可信：</b>
              <ul style={{ margin: "6px 0 0", paddingLeft: 18 }}>
                {pred.domain_warnings.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
          )}
          {!predError && (
            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-label">峰值增益（SimAI）</div>
                <div className="stat-value">
                  {gain === null ? "—" : gain.toFixed(2)}
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}> dBi</span>
                </div>
                {gain !== null && (
                  <div className="stat-sub">
                    對照乾淨平台 {(gain - BASELINE_GAIN_DBI >= 0 ? "+" : "")}
                    {(gain - BASELINE_GAIN_DBI).toFixed(2)} dB
                  </div>
                )}
              </div>
              <div className="stat-card">
                <div className="stat-label">HFSS 真解</div>
                <div className="stat-value">
                  {truth ? truth.peak_gain_dbi.toFixed(2) : "—"}
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}> dBi</span>
                </div>
                <div className="stat-sub">
                  {truth && gain !== null
                    ? `誤差 ${Math.abs(gain - truth.peak_gain_dbi).toFixed(2)} dB · 求解 ${truth.solve_minutes} 分鐘`
                    : truth
                    ? `求解 ${truth.solve_minutes} 分鐘`
                    : "此組態無預存真解"}
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label">推論耗時</div>
                <div className="stat-value">
                  {pred ? pred.result.predict_seconds.toFixed(3) : "—"}
                  <span style={{ fontSize: 12, color: "var(--text-muted)" }}> s</span>
                </div>
                <div className="stat-sub">
                  {pred ? `整趟 ${pred.total_seconds.toFixed(2)} s · ${pred.result.n_nodes} 節點` : ""}
                </div>
              </div>
              {/* 信心指標。★ 門檻必須用**這個模型自己的**留出分布，不能寫死：
                  信心值的絕對尺度隨模型而變（實測同一支天線的不同訓練，
                  中位數從 0.55 到 4.4 都有），固定門檻會讓有的模型永遠綠、
                  有的永遠紅——兩種都等於沒有資訊。
                  而且它常常幾乎不變：實測某個模型 29 個留出樣本落在
                  1.350~1.354（變動 0.3%），同一批的場型 MAE 卻差 12.7 倍。
                  那種情況直說「沒有鑑別度」，比每次都亮紅燈誠實。 */}
              <div className="stat-card">
                <div className="stat-label">信心指標</div>
                <div
                  className="stat-value"
                  style={{
                    color:
                      uncertainty === null || !calib
                        ? undefined
                        : !calib.usable
                        ? "var(--text-dim)"
                        : uncertainty <= calib.p60
                        ? "var(--good)"
                        : uncertainty <= calib.p90
                        ? "var(--warn)"
                        : "var(--bad)",
                  }}
                >
                  {uncertainty === null ? "—" : uncertainty.toFixed(2)}
                </div>
                <div className="stat-sub">
                  {uncertainty === null
                    ? ""
                    : !calib
                    ? "尚未校準（跑過 validate_model.py 後才有）"
                    : !calib.usable
                    ? `這個模型沒有鑑別度（留出樣本只在 ${calib.min.toFixed(3)}~${calib.max.toFixed(3)} 之間變動，差 ${(100 * calib.relative_spread).toFixed(1)}%），請看其他三道守衛`
                    : uncertainty <= calib.p60
                    ? "比這個模型平常算的還穩"
                    : uncertainty <= calib.p90
                    ? "比平常難算一些"
                    : "這個模型算過最難的一類，建議跑 HFSS 確認"}
                </div>
              </div>
            </div>
          )}
          <div className="hint" style={{ marginTop: 10 }}>
            淨空區間距 {clearance === Infinity ? "—" : `${clearance.toFixed(1)} mm`}
            {clearance < 0 && "（金屬件已蓋到天線上）"}
          </div>
        </div>

        <div className="panel-section">
          <h3 className="panel-title">接地面外型（板子輪廓）</h3>
          <div className="hint" style={{ marginBottom: 8 }}>
            接地面本身就是天線的一部分，改它的效應往往比擺一塊金屬還大。
            天線的短路臂接在板子上緣，所以外型只在遠離天線的方向變化。
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {(Object.keys(spec?.ground_shapes ?? {}) as GroundShape[]).map((k) => (
              <button
                key={k}
                className={`ghost-btn${cfg.ground_shape === k ? " active" : ""}`}
                onClick={() => applyConfig({ ...cfg, ground_shape: k }, null)}
              >
                {spec?.ground_shapes[k].label}
              </button>
            ))}
          </div>
        </div>

        <div className="panel-section">
          <h3 className="panel-title">劇本組態（有 HFSS 真解）</h3>
          <div className="hint" style={{ marginBottom: 8 }}>
            除了基準之外，這些都是訓練時<b style={{ color: "var(--text-main)" }}>整組留出</b>的
            樣本——模型沒看過，比較才誠實。
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {scenarios.map((s) => (
              <button
                key={s.key}
                className={`ghost-btn${activeScenario === s.key ? " active" : ""}`}
                title={s.in_training ? "訓練集內（基準參考）" : "留出樣本：模型沒看過"}
                onClick={() =>
                  applyConfig(
                    {
                      ground_shape: s.config.ground_shape,
                      freq_ghz: s.config.freq_ghz,
                      metals: s.config.metals,
                    },
                    s.key
                  )
                }
              >
                {s.in_training ? s.key : `◆ ${s.key}`}
              </button>
            ))}
            {scenarios.length === 0 && <span className="hint">後端未回應</span>}
          </div>
        </div>

        <div className="panel-section" style={{ flex: 1 }}>
          <h3 className="panel-title">金屬件（{cfg.metals.length}）</h3>
          {cfg.metals.map((m) => (
            <div
              key={m.name}
              className={`metal-row${selected === m.name ? " selected" : ""}`}
              onClick={() => setSelected(m.name)}
            >
              <span
                className="swatch"
                style={{ background: selected === m.name ? "#58a6ff" : "#8892a4" }}
              />
              <span style={{ flex: 1 }}>{m.name}</span>
              <span className="badge">{m.kind}</span>
              <span className="badge">
                {m.x.toFixed(0)}, {m.y.toFixed(0)}
              </span>
            </div>
          ))}
          {cfg.metals.length === 0 && (
            <div className="hint">乾淨平台——沒有金屬件。這是殘差學習的基準組態。</div>
          )}
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <button className="premium-btn" onClick={addMetal} disabled={busy}>
              加入金屬件
            </button>
            <button className="ghost-btn" onClick={removeSelected} disabled={!selected}>
              刪除選取
            </button>
          </div>
          <div className="hint" style={{ marginTop: 12 }}>
            在 3D 視窗點選金屬件後可直接拖動；放開後自動重新預測。
          </div>

          {/* 位置敏感度掃描：HFSS 掃 21 個點要 13 分鐘，所以實務上沒人會為了
              「往下移 3mm 能拿回多少」跑一次掃描——大家只能猜。
              0.2 秒的推論把這個問題從「不值得問」變成「隨手就問」。 */}
          {selected && (
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--border-panel)" }}>
              <h3 className="panel-title">位置敏感度掃描</h3>
              <div className="hint" style={{ marginBottom: 8 }}>
                把「{selected}」沿某軸掃過去，看增益怎麼變。
                同樣的掃描用 HFSS 要十幾分鐘。
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {(["x", "y"] as const).map((ax) => (
                  <button
                    key={ax}
                    className="ghost-btn"
                    disabled={sweeping}
                    onClick={() => {
                      const m = cfg.metals.find((x) => x.name === selected);
                      if (!m) return;
                      // ★ 掃完整的物理有效範圍，不要掃「目前位置 ±18mm」。
                      // 效應只在金屬件伸進淨空區（y > 60）時出現；
                      // 從目前位置往兩邊掃，金屬件在板中央時會掃出一條平線，
                      // 看起來像「位置不重要」——那是取樣沒涵蓋到有效區域，
                      // 跟資料集第一版犯的是同一個錯。
                      const lo = ax === "x" ? 2 : 8;
                      const hi =
                        ax === "x"
                          ? Math.max(lo + 5, 100 - m.w - 2)
                          : Math.max(lo + 5, 63.5 - m.d);
                      setSweeping(true);
                      setSweepData(null);
                      sweep(cfg, selected, ax, lo, hi, 21)
                        .then(setSweepData)
                        .catch(() => setSweepData(null))
                        .finally(() => setSweeping(false));
                    }}
                  >
                    {sweeping ? "掃描中…" : `沿 ${ax} 掃描`}
                  </button>
                ))}
              </div>
              {sweepData && (
                <div style={{ marginTop: 10 }}>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border-panel)",
                      borderRadius: 8,
                      padding: 6,
                    }}
                  >
                    <SweepChart data={sweepData} />
                  </div>
                  <div className="hint" style={{ marginTop: 8, lineHeight: 1.7 }}>
                    增益跨度 <b style={{ color: "var(--text-main)" }}>{sweepData.span_db} dB</b>
                    {sweepData.best && (
                      <>
                        ，最佳位置 {sweepData.axis}={sweepData.best.value} mm
                        （{sweepData.best.peak_gain_dbi?.toFixed(2)} dBi）
                      </>
                    )}
                    <br />
                    {sweepData.points.length} 點只花 {sweepData.total_seconds} 秒，
                    同樣的掃描用 HFSS 約 {sweepData.hfss_equivalent_minutes} 分鐘。
                    {sweepData.points.some((p) => !p.valid) && (
                      <>
                        <br />
                        <span style={{ color: "var(--bad)" }}>紅點</span>
                        ＝該位置蓋到天線或超出訓練範圍，不可採用。
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* 淨空區地圖：把零件掃過整片板子，直接畫出「哪裡能放」。
                  16×16 = 256 個位置用 HFSS 要 2 小時，所以實務上沒有人算——
                  機構只能憑經驗抓一個保守的禁區，保守到犧牲了可用空間，
                  或不夠保守而在 EVT 才發現天線爛掉。 */}
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--border-panel)" }}>
                <h3 className="panel-title">淨空區地圖</h3>
                <div className="hint" style={{ marginBottom: 8 }}>
                  把「{selected}」掃過整片板子，畫出每個位置的增益。
                  這是機構可以直接拿去用的圖。
                </div>
                <button
                  className="ghost-btn"
                  disabled={koBusy}
                  onClick={() => {
                    setKoBusy(true);
                    setKoData(null);
                    keepout(cfg, selected, 16, 16, 1.0)
                      .then(setKoData)
                      .catch(() => setKoData(null))
                      .finally(() => setKoBusy(false));
                  }}
                >
                  {koBusy ? "計算中…（約 1~2 分鐘）" : "產生淨空區地圖"}
                </button>
                {koData && (
                  <div
                    style={{
                      marginTop: 10,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border-panel)",
                      borderRadius: 8,
                      padding: 8,
                    }}
                  >
                    <KeepoutMap data={koData} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
        </div>
      )}
    </div>
  );
}

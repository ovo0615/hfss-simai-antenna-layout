// 驗證報告檢視。此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
import { useMemo, useState } from "react";
import type { ReportData, ReportSample } from "../api";

const W = 720;
const H = 300;
const PAD = { l: 48, r: 16, t: 16, b: 34 };

function verdictColor(v: string): string {
  return v === "pass" ? "var(--good)" : v === "grey" ? "var(--warn)" : "var(--bad)";
}
function verdictLabel(v: string): string {
  return v === "pass" ? "通過" : v === "grey" ? "灰區" : "停損";
}

/** θ 切面：在固定的 φ 上，增益隨 θ 的變化。真解與預測疊圖。 */
function PatternCut({
  sample,
  nTheta,
  thetaAxis,
  phiIndex,
}: {
  sample: ReportSample;
  nTheta: number;
  thetaAxis: number[];
  phiIndex: number;
}) {
  const truth = sample.truth_pattern.slice(phiIndex * nTheta, (phiIndex + 1) * nTheta);
  const pred = sample.pred_pattern.slice(phiIndex * nTheta, (phiIndex + 1) * nTheta);
  const all = [...truth, ...pred];
  const lo = Math.floor(Math.min(...all) - 1);
  const hi = Math.ceil(Math.max(...all) + 1);

  const px = (i: number) => PAD.l + (i / (nTheta - 1)) * (W - PAD.l - PAD.r);
  const py = (v: number) => H - PAD.b - ((v - lo) / (hi - lo)) * (H - PAD.t - PAD.b);
  const path = (arr: number[]) =>
    arr.map((v, i) => `${i === 0 ? "M" : "L"}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ");

  const ticks = 5;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
      {Array.from({ length: ticks + 1 }, (_, k) => {
        const v = lo + ((hi - lo) * k) / ticks;
        return (
          <g key={k}>
            <line
              x1={PAD.l}
              x2={W - PAD.r}
              y1={py(v)}
              y2={py(v)}
              stroke="rgba(255,255,255,0.08)"
            />
            <text x={PAD.l - 8} y={py(v) + 4} fill="var(--text-muted)" fontSize="11" textAnchor="end">
              {v.toFixed(0)}
            </text>
          </g>
        );
      })}
      {thetaAxis.map((t, i) =>
        i % 3 === 0 ? (
          <text key={i} x={px(i)} y={H - 12} fill="var(--text-muted)" fontSize="11" textAnchor="middle">
            {t}
          </text>
        ) : null
      )}
      <text x={W / 2} y={H - 1} fill="var(--text-muted)" fontSize="11" textAnchor="middle">
        θ（度）
      </text>
      {/* 旋轉貼在最左側，避免與刻度數字疊在一起 */}
      <text
        x={14}
        y={(H - PAD.b + PAD.t) / 2}
        fill="var(--text-muted)"
        fontSize="11"
        textAnchor="middle"
        transform={`rotate(-90 14 ${(H - PAD.b + PAD.t) / 2})`}
      >
        增益（dBi）
      </text>
      <path d={path(truth)} fill="none" stroke="#3fb950" strokeWidth="2.2" />
      <path d={path(pred)} fill="none" stroke="#58a6ff" strokeWidth="2.2" strokeDasharray="6 4" />
    </svg>
  );
}

export default function ReportView({ data }: { data: ReportData }) {
  const s = data.summary;
  const [sel, setSel] = useState(0);
  const [phiIdx, setPhiIdx] = useState(0);
  const nTheta = s.farfield_grid.theta_deg.length;
  const sample = data.samples[Math.min(sel, data.samples.length - 1)];

  const skillNote = useMemo(() => {
    if (s.skill_score === null || s.skill_score === undefined) return null;
    if (s.skill_score >= 0.4) return { text: "明顯勝過笨基線", color: "var(--good)" };
    if (s.skill_score >= 0.15) return { text: "略勝笨基線", color: "var(--warn)" };
    return { text: "幾乎沒有勝過笨基線——通過門檻不代表學到東西", color: "var(--bad)" };
  }, [s.skill_score]);

  return (
    <div style={{ padding: "20px 26px", overflowY: "auto", height: "100%" }}>
      <h2 style={{ margin: "0 0 4px", fontSize: 20 }}>留一種拓樸驗證報告</h2>
      <div className="hint" style={{ marginBottom: 18 }}>
        留出拓樸 <b style={{ color: "var(--text-main)" }}>{s.holdout_topology}</b>
        　·　訓練 {s.n_train} 樣本 / 驗證 {s.n_test} 樣本　·　訓練耗時 {s.train_minutes} 分鐘
        <br />
        量的是模型<b style={{ color: "var(--text-main)" }}>沒看過的結構種類</b>，
        不是同一種拓樸內的內插——後者是傳統代理模型免費就有的能力。
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
        <div className="stat-card">
          <div className="stat-label">峰值增益平均誤差</div>
          <div className="stat-value" style={{ color: verdictColor(s.verdict_peak) }}>
            {s.peak_gain_mae_db.toFixed(2)}
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}> dB</span>
          </div>
          <div className="stat-sub">
            門檻 &lt;{s.thresholds.peak_gain_db.pass} 通過 · {verdictLabel(s.verdict_peak)}
            {s.baseline_peak_mae_db !== null && ` · 基線 ${s.baseline_peak_mae_db.toFixed(2)}`}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">場型逐點 MAE</div>
          <div className="stat-value" style={{ color: verdictColor(s.verdict_pattern) }}>
            {s.pattern_mae_db.toFixed(2)}
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}> dB</span>
          </div>
          <div className="stat-sub">
            門檻 &lt;{s.thresholds.pattern_mae_db.pass} 通過 · {verdictLabel(s.verdict_pattern)}
            {s.baseline_pattern_mae_db !== null && ` · 基線 ${s.baseline_pattern_mae_db.toFixed(2)}`}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Skill score</div>
          <div className="stat-value" style={{ color: skillNote?.color }}>
            {s.skill_score === null || s.skill_score === undefined ? "—" : s.skill_score.toFixed(3)}
          </div>
          <div className="stat-sub">{skillNote?.text ?? "無基線可比"}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">推論 vs HFSS</div>
          <div className="stat-value" style={{ color: "var(--accent)" }}>
            {s.speedup ? `${s.speedup}×` : "—"}
          </div>
          <div className="stat-sub">
            {s.median_predict_seconds.toFixed(3)} 秒 vs {s.mean_hfss_minutes} 分鐘
          </div>
        </div>
      </div>

      {skillNote && s.skill_score !== null && s.skill_score < 0.15 && (
        <div
          className="hint"
          style={{
            border: "1px solid var(--bad)",
            borderRadius: 8,
            padding: "10px 12px",
            marginBottom: 18,
            color: "var(--text-main)",
          }}
        >
          <b style={{ color: "var(--bad)" }}>誠實性提醒：</b>
          這支天線的場型本來就長得差不多，所以一個「永遠輸出訓練集平均場型」的模型
          也能通過 MAE 門檻。skill score 才是「模型比什麼都不學好多少」的指標；
          它太低時，漂亮的誤差數字不能拿來背書。
        </div>
      )}

      <h3 className="panel-title" style={{ marginTop: 4 }}>逐樣本比對</h3>
      <div style={{ overflowX: "auto", marginBottom: 22 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ color: "var(--text-muted)", textAlign: "right" }}>
              <th style={{ textAlign: "left", padding: "6px 8px" }}>樣本</th>
              <th style={{ padding: "6px 8px" }}>HFSS 峰值</th>
              <th style={{ padding: "6px 8px" }}>SimAI 峰值</th>
              <th style={{ padding: "6px 8px" }}>峰值誤差</th>
              <th style={{ padding: "6px 8px" }}>場型 MAE</th>
              <th style={{ padding: "6px 8px" }}>基線 MAE</th>
              <th style={{ padding: "6px 8px" }}>信心</th>
              <th style={{ padding: "6px 8px" }}>推論</th>
            </tr>
          </thead>
          <tbody>
            {data.samples.map((x, i) => (
              <tr
                key={x.id}
                onClick={() => setSel(i)}
                style={{
                  cursor: "pointer",
                  textAlign: "right",
                  background: i === sel ? "rgba(88,166,255,0.12)" : undefined,
                  borderTop: "1px solid var(--border-panel)",
                }}
              >
                <td style={{ textAlign: "left", padding: "6px 8px" }}>{x.id}</td>
                <td style={{ padding: "6px 8px" }}>{x.hfss_peak_dbi.toFixed(2)}</td>
                <td style={{ padding: "6px 8px" }}>{x.simai_peak_dbi.toFixed(2)}</td>
                <td
                  style={{
                    padding: "6px 8px",
                    color:
                      x.peak_error_db < s.thresholds.peak_gain_db.pass
                        ? "var(--good)"
                        : x.peak_error_db < s.thresholds.peak_gain_db.grey
                        ? "var(--warn)"
                        : "var(--bad)",
                  }}
                >
                  {x.peak_error_db.toFixed(2)}
                </td>
                <td style={{ padding: "6px 8px" }}>{x.pattern_mae_db.toFixed(2)}</td>
                <td style={{ padding: "6px 8px", color: "var(--text-muted)" }}>
                  {x.baseline_mae_db === null ? "—" : x.baseline_mae_db.toFixed(2)}
                </td>
                <td style={{ padding: "6px 8px", color: "var(--text-muted)" }}>
                  {x.uncertainty === null ? "—" : x.uncertainty.toFixed(2)}
                </td>
                <td style={{ padding: "6px 8px", color: "var(--text-muted)" }}>
                  {x.predict_seconds.toFixed(2)}s
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="panel-title">場型切面：{sample?.id}</h3>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
        <span className="hint">φ = {s.farfield_grid.phi_deg[phiIdx]}°</span>
        <input
          type="range"
          min={0}
          max={s.farfield_grid.phi_deg.length - 1}
          value={phiIdx}
          onChange={(e) => setPhiIdx(Number(e.target.value))}
          style={{ flex: 1, maxWidth: 320 }}
        />
        <span style={{ fontSize: 12, display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="26" height="10">
              <line x1="0" y1="5" x2="26" y2="5" stroke="#3fb950" strokeWidth="2.4" />
            </svg>
            HFSS 真解
          </span>
          <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <svg width="26" height="10">
              <line
                x1="0"
                y1="5"
                x2="26"
                y2="5"
                stroke="#58a6ff"
                strokeWidth="2.4"
                strokeDasharray="6 4"
              />
            </svg>
            SimAI 預測
          </span>
        </span>
      </div>
      {sample && (
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--border-panel)",
            borderRadius: 8,
            padding: 8,
          }}
        >
          <PatternCut
            sample={sample}
            nTheta={nTheta}
            thetaAxis={s.farfield_grid.theta_deg}
            phiIndex={phiIdx}
          />
        </div>
      )}
      <div className="hint" style={{ marginTop: 14, paddingBottom: 20 }}>
        模型：{s.model_fname}　·　節點輸入特徵 {s.input_names.join("、") || "無"}　·
        邊界條件 {s.boundary_conditions.join("、")}
      </div>
    </div>
  );
}

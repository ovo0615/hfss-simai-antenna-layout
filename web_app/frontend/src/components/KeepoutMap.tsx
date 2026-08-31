// 淨空區地圖：把一個金屬件掃過板面每一格，畫成「哪裡能放」的熱力圖。
// 此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
//
// ★ 這張圖是這個工具唯一「機構工程師可以直接拿去用」的輸出：
//   不必懂天線，看顏色就知道零件能放哪裡。
//   20×20 = 400 個位置用 HFSS 要 3.3 小時，所以實務上沒有人算——
//   大家只能憑經驗畫一個保守的禁區，然後在 EVT 才發現不夠或太保守。
import type { KeepoutResult } from "../api";

const W = 360;
const PAD = { l: 30, r: 10, t: 10, b: 24 };

/** 增益 → 顏色。藍（低）→ 綠 → 黃（高），與 3D 場型的色階同一套邏輯。 */
function heat(t: number): string {
  const c = Math.max(0, Math.min(1, t));
  const r = Math.round(255 * Math.min(1, c * 2));
  const g = Math.round(255 * Math.min(1, c * 1.4 + 0.15));
  const b = Math.round(255 * (1 - c) * 0.9);
  return `rgb(${r},${g},${b})`;
}

export default function KeepoutMap({ data }: { data: KeepoutResult }) {
  const ok = data.cells.filter((c) => c.peak_gain_dbi !== null);
  if (!ok.length) return <div className="hint">整片都超出模型的訓練範圍，沒有可用的格點。</div>;

  const lo = data.worst_dbi as number;
  const hi = data.best_dbi as number;
  const [xa, xb] = data.x_range;
  const [ya, yb] = data.y_range;
  const plotW = W - PAD.l - PAD.r;
  const H = PAD.t + PAD.b + Math.round((plotW * (yb - ya)) / (xb - xa || 1));
  const plotH = H - PAD.t - PAD.b;
  const cw = plotW / data.nx;
  const ch = plotH / data.ny;

  // y 往上為正（與 3D 視窗一致），所以畫的時候要翻轉
  const px = (ix: number) => PAD.l + (ix / data.nx) * plotW;
  const py = (iy: number) => PAD.t + plotH - ((iy + 1) / data.ny) * plotH;

  const [ax0, ay0, ax1, ay1] = data.antenna_bbox;
  const bx = (v: number) => PAD.l + ((v - xa) / (xb - xa || 1)) * plotW;
  const by = (v: number) => PAD.t + plotH - ((v - ya) / (yb - ya || 1)) * plotH;

  return (
    <div>
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
        {data.cells.map((c, i) => {
          const t = c.peak_gain_dbi === null ? 0 : (c.peak_gain_dbi - lo) / (hi - lo || 1);
          const fill =
            c.state === "invalid" ? "#3a1d2a" : heat(t);
          return (
            <rect
              key={i}
              x={px(c.ix)}
              y={py(c.iy)}
              width={cw + 0.5}
              height={ch + 0.5}
              fill={fill}
              opacity={c.state === "degraded" ? 0.55 : 1}
            >
              <title>
                {c.peak_gain_dbi === null
                  ? `x=${c.x} y=${c.y}　不可放：${c.reason ?? "超出範圍"}`
                  : `x=${c.x} y=${c.y}　${c.peak_gain_dbi.toFixed(2)} dBi` +
                    (c.state === "degraded" ? `（比最佳低 ${(hi - c.peak_gain_dbi).toFixed(2)} dB）` : "")}
              </title>
            </rect>
          );
        })}

        {/* 天線位置——沒有這個框，看圖的人不知道禁區為什麼在那裡 */}
        <rect
          x={bx(ax0)} y={by(ay1)} width={bx(ax1) - bx(ax0)} height={by(ay0) - by(ay1)}
          fill="none" stroke="#ffd166" strokeWidth={1.4} strokeDasharray="3 2"
        />
        <text x={bx(ax0)} y={by(ay1) - 3} fill="#ffd166" fontSize={8}>天線</text>

        <text x={PAD.l} y={H - 8} fill="#8b93a7" fontSize={9}>{xa.toFixed(0)}</text>
        <text x={W - PAD.r - 14} y={H - 8} fill="#8b93a7" fontSize={9}>{xb.toFixed(0)} mm</text>
        <text x={4} y={PAD.t + 8} fill="#8b93a7" fontSize={9}>{yb.toFixed(0)}</text>
        <text x={4} y={H - PAD.b} fill="#8b93a7" fontSize={9}>{ya.toFixed(0)}</text>
      </svg>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6, fontSize: 11 }}>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: heat(1), marginRight: 4 }} />最佳 {hi.toFixed(2)} dBi</span>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: heat(0), marginRight: 4 }} />最差 {lo.toFixed(2)} dBi</span>
        <span><span style={{ display: "inline-block", width: 10, height: 10, background: "#3a1d2a", marginRight: 4 }} />不可放</span>
      </div>

      <div className="hint" style={{ marginTop: 6 }}>
        {data.n_ok} / {data.n_total} 格可放，增益跨度 {data.span_db?.toFixed(2)} dB。
        算了 {data.total_seconds.toFixed(0)} 秒——
        <b>同樣的東西用 HFSS 要 {(data.hfss_equivalent_minutes / 60).toFixed(1)} 小時</b>，
        所以實務上沒有人會算，只能憑經驗抓一個保守的禁區。
      </div>
      <div className="hint" style={{ marginTop: 4 }}>
        深色格子是<b>不予預測</b>的位置（蓋到天線導體，或超出模型訓練範圍）——
        不是「預測為差」，是模型不該在那裡發言。
      </div>
    </div>
  );
}

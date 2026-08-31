// 位置敏感度掃描的結果圖。
// 此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
import type { SweepResult } from "../api";

const W = 360;
const H = 150;
const PAD = { l: 34, r: 8, t: 10, b: 22 };

export default function SweepChart({ data }: { data: SweepResult }) {
  const pts = data.points.filter((p) => p.peak_gain_dbi !== null);
  if (pts.length < 2) return <div className="hint">掃描沒有有效點。</div>;

  const gains = pts.map((p) => p.peak_gain_dbi as number);
  const lo = Math.floor(Math.min(...gains) - 0.5);
  const hi = Math.ceil(Math.max(...gains) + 0.5);
  const xs = pts.map((p) => p.value);
  const x0 = Math.min(...xs);
  const x1 = Math.max(...xs);

  const px = (v: number) => PAD.l + ((v - x0) / (x1 - x0 || 1)) * (W - PAD.l - PAD.r);
  const py = (v: number) => H - PAD.b - ((v - lo) / (hi - lo || 1)) * (H - PAD.t - PAD.b);

  const path = pts
    .map((p, i) => `${i === 0 ? "M" : "L"}${px(p.value).toFixed(1)},${py(p.peak_gain_dbi as number).toFixed(1)}`)
    .join(" ");

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
      {[lo, (lo + hi) / 2, hi].map((v, i) => (
        <g key={i}>
          <line x1={PAD.l} x2={W - PAD.r} y1={py(v)} y2={py(v)} stroke="rgba(255,255,255,0.08)" />
          <text x={PAD.l - 5} y={py(v) + 3.5} fill="var(--text-muted)" fontSize="9" textAnchor="end">
            {v.toFixed(0)}
          </text>
        </g>
      ))}
      {/* 超出範圍或蓋到天線的點標成紅色，不能混在曲線裡當有效資料 */}
      {data.points.map((p, i) =>
        p.peak_gain_dbi !== null && !p.valid ? (
          <circle key={i} cx={px(p.value)} cy={py(p.peak_gain_dbi)} r="3" fill="var(--bad)" />
        ) : null
      )}
      <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2" />
      {data.best && (
        <circle cx={px(data.best.value)} cy={py(data.best.peak_gain_dbi as number)} r="3.5" fill="var(--good)" />
      )}
      <text x={px(x0)} y={H - 6} fill="var(--text-muted)" fontSize="9">
        {x0.toFixed(0)}
      </text>
      <text x={px(x1)} y={H - 6} fill="var(--text-muted)" fontSize="9" textAnchor="end">
        {x1.toFixed(0)}
      </text>
      <text x={W / 2} y={H - 6} fill="var(--text-muted)" fontSize="9" textAnchor="middle">
        {data.axis} 位置（mm）
      </text>
    </svg>
  );
}

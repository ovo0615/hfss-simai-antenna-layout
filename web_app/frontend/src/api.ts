// 與 FastAPI 溝通。此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
import type { PlatformConfig, PlatformSpec } from "./geometry";

export interface SimAIStatus {
  /** 後端啟動時在背景載入模型；loading 期間要輪詢 /api/health */
  state: "idle" | "loading" | "ready" | "failed" | "stopped";
  alive: boolean;
  ready: boolean;
  reason: string;
  loading_seconds: number;
  load_timeout: number;
  python: string;
  model_dir: string;
  model_name: string;
  output_field: string;
  input_fields: string;
  load_seconds: number;
  /** true = 模型學的是與乾淨平台的殘差，推論時已加回基準 */
  residual: boolean;
}

export interface FarField {
  n_phi: number;
  n_theta: number;
  phi_deg: number[];
  theta_deg: number[];
  /** (phi 外層, theta 內層) 展平的增益值 */
  gain_dbi: number[];
}

export interface PredictResult {
  n_nodes: number;
  peak: number;
  mean: number;
  prep_seconds: number;
  predict_seconds: number;
  mesh_seconds: number;
  uncertainty?: number;
  farfield: FarField;
}

export interface PredictResponse {
  topology_id: string;
  clearance_mm: number | null;
  total_seconds: number;
  /** 逐項列出這個組態超出訓練範圍的地方；空陣列＝在範圍內 */
  domain_warnings: string[];
  result: PredictResult;
}

export interface Scenario {
  key: string;
  config: PlatformConfig & { topology_id?: string };
  hfss_truth: { peak_gain_dbi: number; solve_minutes: number | null } | null;
  /** HFSS 真解的遠場場型（與預測同序），可疊在 3D 上比對 */
  truth_pattern: number[] | null;
  /** false = 這個組態在訓練時被留出，模型沒看過 */
  in_training: boolean;
}

export interface ReportSample {
  id: string;
  topology: string;
  hfss_peak_dbi: number;
  simai_peak_dbi: number;
  peak_error_db: number;
  pattern_mae_db: number;
  baseline_mae_db: number | null;
  baseline_peak_error_db: number | null;
  uncertainty: number | null;
  predict_seconds: number;
  hfss_solve_minutes: number | null;
  truth_pattern: number[];
  pred_pattern: number[];
}

export interface ReportSummary {
  holdout_topology: string;
  n_train: number;
  n_test: number;
  train_minutes: number | null;
  peak_gain_mae_db: number;
  peak_gain_max_db: number;
  pattern_mae_db: number;
  baseline_pattern_mae_db: number | null;
  baseline_peak_mae_db: number | null;
  skill_score: number | null;
  median_predict_seconds: number;
  mean_hfss_minutes: number;
  speedup: number | null;
  thresholds: {
    peak_gain_db: { pass: number; grey: number };
    pattern_mae_db: { pass: number; grey: number };
  };
  verdict_peak: string;
  verdict_pattern: string;
  farfield_grid: { phi_deg: number[]; theta_deg: number[] };
  model_dir: string;
  model_fname: string;
  input_names: string[];
  boundary_conditions: string[];
}

export interface ReportData {
  summary: ReportSummary;
  samples: ReportSample[];
}

async function json<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let detail = `${res.status} ${res.statusText}`;
    try {
      const body = await res.json();
      if (body?.detail) detail = String(body.detail);
    } catch {
      /* 回應不是 JSON，沿用狀態碼 */
    }
    throw new Error(detail);
  }
  return (await res.json()) as T;
}

export async function getHealth(): Promise<{
  status: string;
  simai: SimAIStatus;
  uncertainty_calibration?: UncertaintyCalibration | null;
}> {
  return json(await fetch("/api/health"));
}

export async function getPlatform(): Promise<PlatformSpec> {
  return json(await fetch("/api/platform"));
}

export async function getScenarios(): Promise<{
  holdout: string | null;
  scenarios: Scenario[];
}> {
  return json(await fetch("/api/scripted"));
}

export async function predict(cfg: PlatformConfig): Promise<PredictResponse> {
  return json(
    await fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cfg),
    })
  );
}

export interface SweepPoint {
  value: number;
  peak_gain_dbi: number | null;
  clearance_mm: number | null;
  valid: boolean;
}

export interface SweepResult {
  axis: string;
  metal_name: string;
  points: SweepPoint[];
  best: SweepPoint | null;
  worst: SweepPoint | null;
  span_db: number | null;
  total_seconds: number;
  hfss_equivalent_minutes: number;
}

export async function sweep(
  config: PlatformConfig,
  metalName: string,
  axis: "x" | "y" | "z",
  start: number,
  stop: number,
  steps = 21
): Promise<SweepResult> {
  return json(
    await fetch("/api/sweep", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ config, metal_name: metalName, axis, start, stop, steps }),
    })
  );
}

export interface KeepoutCell {
  ix: number;
  iy: number;
  x: number;
  y: number;
  peak_gain_dbi: number | null;
  state: "ok" | "degraded" | "invalid";
  clearance_mm?: number;
  reason?: string;
}

export interface KeepoutResult {
  metal_name: string;
  nx: number;
  ny: number;
  x_range: [number, number];
  y_range: [number, number];
  cells: KeepoutCell[];
  best_dbi: number | null;
  worst_dbi: number | null;
  span_db: number | null;
  threshold_db: number;
  n_ok: number;
  n_total: number;
  antenna_bbox: [number, number, number, number];
  total_seconds: number;
  hfss_equivalent_minutes: number;
}

export async function keepout(
  config: PlatformConfig,
  metalName: string,
  nx = 16,
  ny = 16,
  thresholdDb = 1.0
): Promise<KeepoutResult> {
  return json(
    await fetch("/api/keepout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        config, metal_name: metalName, nx, ny, threshold_db: thresholdDb,
      }),
    })
  );
}

export interface UncertaintyCalibration {
  n: number;
  min: number;
  max: number;
  median: number;
  relative_spread: number;
  p60: number;
  p90: number;
  usable: boolean;
}

export async function getReport(): Promise<ReportData> {
  return json(await fetch("/api/report"));
}

export async function restartWorker(): Promise<SimAIStatus> {
  return json(await fetch("/api/worker/restart", { method: "POST" }));
}

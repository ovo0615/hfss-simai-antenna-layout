// 參數 → 圖元。此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
//
// ★ 本檔的數學必須與後端 app/platform_model.py 逐項對應，否則預覽會騙人。
// 單位一律 mm，接地板在 z=0，原點在接地板左下角。

export type Vec3 = [number, number, number];
export type MetalKind = "solid" | "slotted" | "lbracket";
export type GroundShape = string;

/** 接地面外型，由後端提供（來自 platform.json）。 */
export const groundShapes = () => P().ground_shapes;

/** 後端 /api/platform 回傳的平台定義。 */
export interface PlatformSpec {
  name: string;
  freq_ghz: number;
  ground: { w: number; h: number };
  antenna_traces: { name: string; x: number; y: number; w: number; h: number }[];
  ground_shapes: Record<
    string,
    { outer: [number, number, number, number]; cut: [number, number, number, number] | null; label: string }
  >;
  /** 每個種類拆成幾個長方體，比例相對於該件的 w/d/h */
  metal_kinds: Record<string, [number, number, number, number, number, number][]>;
}

// ★ 前端**不再自己抄一份幾何常數**。
// 抄的那一份會在改 platform.json 時悄悄過期，症狀是「預覽跟實際算的不一樣」——
// 畫面看起來正常，但它騙人。所以這裡只留一個由後端填入的參照，
// 沒填之前呼叫任何幾何函式都會直接拋錯，不會安靜地用過期的值。
let SPEC: PlatformSpec | null = null;

export function setPlatform(spec: PlatformSpec): void {
  SPEC = spec;
}

function P(): PlatformSpec {
  if (!SPEC) throw new Error("平台定義尚未從後端載入");
  return SPEC;
}

export const platformLoaded = (): boolean => SPEC !== null;
export const gndW = (): number => P().ground.w;
export const gndH = (): number => P().ground.h;

// ★ 這裡原本有一個 trace(name) 依名稱查走線的函式，已移除。
// 依名稱查走線就是把某一支天線的命名寫進通用程式碼：換一支天線
// （走線叫別的名字）就會拋例外、整個畫面空白。要用走線就走
// P().antenna_traces 全部跑一遍，不要挑名字。

/** 天線導體的外框（mm）。用來決定新金屬件該放哪、以及畫淨空區地圖的參考。 */
export function antennaBBox(): [number, number, number, number] {
  const ts = P().antenna_traces;
  return [
    Math.min(...ts.map((t) => t.x)),
    Math.min(...ts.map((t) => t.y)),
    Math.max(...ts.map((t) => t.x + t.w)),
    Math.max(...ts.map((t) => t.y + t.h)),
  ];
}

/** 新金屬件的預設尺寸與位置——**必須依平台尺寸推算，不可以寫死**。
 *
 * ★ 原本寫死成 24×12 mm、放在 (38, 26)，那是內建 PIFA 的 100×60 板挑的。
 * 換到客戶的 60×40 板，同一組數字會伸出板外、而且**超出模型的訓練範圍**
 * ——實測信心指標 1.39（紅色「外插，勿採信」）。
 * 使用者按下「加入金屬件」得到的第一個東西就是不可採信的，那很糟。
 */
export function defaultMetal(index: number): { x: number; y: number; w: number; d: number; h: number } {
  const bw = gndW();
  const bh = gndH();
  const [ax0, ay0] = antennaBBox();
  const w = Math.round(bw * 0.26 * 10) / 10;      // 板寬的 1/4 左右
  const d = Math.round(bh * 0.22 * 10) / 10;
  const h = Math.round(Math.min(bw, bh) * 0.12 * 10) / 10;
  // 放在天線下方一點的位置：有效應但不至於一開始就蓋住天線
  const x = Math.max(1, Math.min(bw - w - 1, ax0 + (index % 3) * (w * 0.7)));
  const y = Math.max(1, Math.min(bh - d - 1, ay0 - d - 4 + Math.floor(index / 3) * (d * 0.6)));
  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, w, d, h };
}

export const COLORS = {
  ground: 0x2f6f4f,
  antenna: 0xffc84a,
  metal: 0x8892a4,
  metalSelected: 0x58a6ff,
  grid: 0x99a4b5,
};

export interface MetalPart {
  name: string;
  kind: MetalKind;
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
}

export interface PlatformConfig {
  ground_shape: GroundShape;
  freq_ghz: number;
  metals: MetalPart[];
}

export type Prim =
  | { kind: "plate"; x: number; y: number; z: number; w: number; h: number; color: number; opacity?: number }
  /** 可帶開孔的板：outer/cut 為 (x0, y0, x1, y1) */
  | {
      kind: "ground";
      outer: [number, number, number, number];
      cut: [number, number, number, number] | null;
      z: number;
      color: number;
      opacity?: number;
    }
  | { kind: "box"; center: Vec3; size: Vec3; color: number; opacity?: number; pickId?: string };

export interface Bounds {
  min: Vec3;
  max: Vec3;
}

export interface Scene {
  prims: Prim[];
  fitBounds: Bounds;
}

/** 拓樸識別——必須與後端 PlatformConfig.topology_id 產生相同字串。 */
export function topologyId(cfg: PlatformConfig): string {
  const kinds = cfg.metals.map((m) => m.kind).sort().join("-") || "none";
  return `${cfg.ground_shape}__${kinds}__n${cfg.metals.length}`;
}

/** 金屬件侵入淨空區的最短距離（mm）；負值代表蓋到天線上。 */
export function clearanceIntrusion(cfg: PlatformConfig): number {
  // 量到**任何一片**天線導體的最短距離，與後端 clearance_intrusion 一致。
  // ★ 原本寫死 trace("arm")，那是把「天線＝一根叫 arm 的臂」寫進了前端。
  // 換成客戶天線（彎折單極，走線叫 riser/h1/v1/h2/v2）時，
  // trace() 找不到 "arm" 就直接拋例外——**整個畫面空白**，
  // 而後端一切正常（API 全部 200），所以從伺服器那一側完全看不出問題。
  let best = Infinity;
  for (const m of cfg.metals) {
    const x0 = m.x;
    const x1 = m.x + m.w;
    const y0 = m.y;
    const y1 = m.y + m.d;
    for (const t of P().antenna_traces) {
      const ax0 = t.x;
      const ax1 = t.x + t.w;
      const ay0 = t.y;
      const ay1 = t.y + t.h;
      const dx = Math.max(ax0 - x1, x0 - ax1, 0);
      const dy = Math.max(ay0 - y1, y0 - ay1, 0);
      if (dx === 0 && dy === 0) {
        best = Math.min(best, -Math.min(x1 - ax0, ax1 - x0, y1 - ay0, ay1 - y0));
      } else {
        best = Math.min(best, Math.hypot(dx, dy));
      }
    }
  }
  return best;
}

function pushMetalPrims(m: MetalPart, selected: boolean, out: Prim[]): void {
  const color = selected ? COLORS.metalSelected : COLORS.metal;
  const box = (x: number, y: number, z: number, w: number, d: number, h: number) =>
    out.push({
      kind: "box",
      center: [x + w / 2, y + d / 2, z + h / 2],
      size: [w, d, h],
      color,
      opacity: 0.92,
      pickId: m.name,
    });

  // 分解比例由後端提供（platform.json 的 metal_kinds），
  // 與 vtp_builder 和 HFSS 建模用的是同一份定義。
  const kinds = P().metal_kinds;
  const parts = kinds[m.kind] ?? kinds.solid;
  for (const [fx, fy, fz, fw, fd, fh] of parts) {
    box(m.x + fx * m.w, m.y + fy * m.d, m.z + fz * m.h, fw * m.w, fd * m.d, fh * m.h);
  }
}

export function buildScene(cfg: PlatformConfig, selectedName: string | null): Scene {
  const prims: Prim[] = [];

  // 接地板（外型可變，可能帶開孔）
  const shapes = groundShapes();
  const gs = shapes[cfg.ground_shape] ?? shapes.rect;
  prims.push({ kind: "ground", outer: gs.outer, cut: gs.cut, z: 0, color: COLORS.ground, opacity: 0.9 });

  // 天線（固定不變——泛化軸的定義）
  for (const t of P().antenna_traces) {
    const [x, y, w, h] = [t.x, t.y, t.w, t.h];
    prims.push({ kind: "plate", x, y, z: 0.02, w, h, color: COLORS.antenna });
  }

  for (const m of cfg.metals) {
    pushMetalPrims(m, m.name === selectedName, prims);
  }

  // 相機貼合用：只含實體本體
  let min: Vec3 = [0, 0, 0];
  let max: Vec3 = [gndW(), gndH() + 8, 2];
  for (const m of cfg.metals) {
    min = [Math.min(min[0], m.x), Math.min(min[1], m.y), Math.min(min[2], m.z)];
    max = [Math.max(max[0], m.x + m.w), Math.max(max[1], m.y + m.d), Math.max(max[2], m.z + m.h)];
  }
  return { prims, fitBounds: { min, max } };
}

// 即時 3D 平台預覽：可選取、可拖動金屬件。
// 此工具由虎門科技資深技術工程師Jeff Hong洪敬傑提供。
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { Prim, Scene as GeoScene, Vec3 } from "../geometry";
import { COLORS, gndH, gndW } from "../geometry";

interface Props {
  scene: GeoScene | null;
  fitKey: string;
  onPick: (name: string | null) => void;
  /** 拖動中持續回報（dx, dy 為 mm 位移量，相對於拖動起點）。 */
  onDrag: (name: string, dx: number, dy: number, done: boolean) => void;
  /** SimAI 預測的遠場增益（(phi 外層, theta 內層) 展平）。 */
  pattern: {
    n_phi: number;
    n_theta: number;
    phi_deg: number[];
    theta_deg: number[];
    gain_dbi: number[];
  } | null;
  showPattern: boolean;
  /** HFSS 真解場型（與 pattern 同序）。有值且開啟時疊成線框比對。 */
  truthPattern: number[] | null;
  showTruth: boolean;
}

// 場型的顯示半徑範圍（mm）。最低點不收到 0，否則零點會變成尖刺。
// 上限刻意小於接地板半徑（50 mm）：場型是結果，但**拖動金屬件才是操作**，
// 場型太大會把平台整個蓋住、讓人抓不到金屬件。
const PAT_RMIN = 7;
const PAT_RMAX = 40;
const PAT_DYNAMIC_RANGE = 22; // dB，低於峰值這麼多就壓到最小半徑
const PAT_OPACITY = 0.3;

/** 藍→青→黃→紅。低增益冷色、高增益暖色。 */
function gainColor(t: number): [number, number, number] {
  const stops: [number, number, number][] = [
    [0.15, 0.3, 0.85],
    [0.1, 0.75, 0.85],
    [0.95, 0.85, 0.2],
    [0.9, 0.25, 0.2],
  ];
  const x = Math.max(0, Math.min(1, t)) * (stops.length - 1);
  const i = Math.min(stops.length - 2, Math.floor(x));
  const f = x - i;
  return [
    stops[i][0] + (stops[i + 1][0] - stops[i][0]) * f,
    stops[i][1] + (stops[i + 1][1] - stops[i][1]) * f,
    stops[i][2] + (stops[i + 1][2] - stops[i][2]) * f,
  ];
}

/** 由遠場增益網格造出可著色的場型曲面。
 *
 * `scaleRef` 讓真解與預測用**同一個半徑對應關係**——否則兩個場型各自
 * 正規化，形狀看起來會很像，但那是假的相似。 */
function buildPatternMesh(
  p: NonNullable<Props["pattern"]>,
  center: [number, number, number],
  values?: number[],
  scaleRef?: { peak: number; floor: number }
) {
  const { n_phi, n_theta, phi_deg, theta_deg } = p;
  const gain_dbi = values ?? p.gain_dbi;
  const peak = scaleRef ? scaleRef.peak : Math.max(...gain_dbi);
  const floor = scaleRef ? scaleRef.floor : peak - PAT_DYNAMIC_RANGE;
  const pos: number[] = [];
  const col: number[] = [];

  for (let i = 0; i < n_phi; i++) {
    for (let j = 0; j < n_theta; j++) {
      const g = gain_dbi[i * n_theta + j];
      const t = Math.max(0, Math.min(1, (g - floor) / (peak - floor || 1)));
      const r = PAT_RMIN + t * (PAT_RMAX - PAT_RMIN);
      const ph = (phi_deg[i] * Math.PI) / 180;
      const th = (theta_deg[j] * Math.PI) / 180;
      pos.push(
        center[0] + r * Math.sin(th) * Math.cos(ph),
        center[1] + r * Math.sin(th) * Math.sin(ph),
        center[2] + r * Math.cos(th)
      );
      const c = gainColor(t);
      col.push(c[0], c[1], c[2]);
    }
  }

  const idx: number[] = [];
  for (let i = 0; i < n_phi; i++) {
    const i2 = (i + 1) % n_phi; // phi 首尾相接，場型才是封閉的
    for (let j = 0; j < n_theta - 1; j++) {
      const a = i * n_theta + j;
      const b = i2 * n_theta + j;
      const c = i2 * n_theta + j + 1;
      const d = i * n_theta + j + 1;
      idx.push(a, b, c, a, c, d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      transparent: true,
      opacity: PAT_OPACITY,
      side: THREE.DoubleSide,
      metalness: 0.1,
      roughness: 0.85,
      depthWrite: false,
    })
  );
  mesh.renderOrder = 2;   // 最後畫，透明排序才穩定
  return mesh;
}

/** HFSS 真解疊成白色線框，與預測的彩色曲面比對。 */
function buildTruthWireframe(
  p: NonNullable<Props["pattern"]>,
  center: [number, number, number],
  values: number[],
  scaleRef: { peak: number; floor: number }
) {
  const mesh = buildPatternMesh(p, center, values, scaleRef);
  const wire = new THREE.LineSegments(
    new THREE.WireframeGeometry(mesh.geometry),
    new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    })
  );
  wire.renderOrder = 3;
  mesh.geometry.dispose();
  (mesh.material as THREE.Material).dispose();
  return wire;
}

function material(color: number, opacity?: number): THREE.Material {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.5,
    roughness: 0.45,
    transparent: opacity !== undefined && opacity < 1,
    opacity: opacity ?? 1,
    side: THREE.DoubleSide,
  });
}

function primToObject(prim: Prim): THREE.Object3D | null {
  if (prim.kind === "ground") {
    // 用 Shape ＋ holes，開孔才畫得出來（PlaneGeometry 做不到）
    const [x0, y0, x1, y1] = prim.outer;
    const shape = new THREE.Shape();
    shape.moveTo(x0, y0);
    shape.lineTo(x1, y0);
    shape.lineTo(x1, y1);
    shape.lineTo(x0, y1);
    shape.closePath();
    if (prim.cut) {
      const [cx0, cy0, cx1, cy1] = prim.cut;
      const hole = new THREE.Path();
      hole.moveTo(cx0, cy0);
      hole.lineTo(cx1, cy0);
      hole.lineTo(cx1, cy1);
      hole.lineTo(cx0, cy1);
      hole.closePath();
      shape.holes.push(hole);
    }
    const geo = new THREE.ShapeGeometry(shape);
    const mesh = new THREE.Mesh(geo, material(prim.color, prim.opacity));
    mesh.position.z = prim.z;
    return mesh;
  }
  if (prim.kind === "plate") {
    const geo = new THREE.PlaneGeometry(prim.w, prim.h);
    const mesh = new THREE.Mesh(geo, material(prim.color, prim.opacity));
    mesh.position.set(prim.x + prim.w / 2, prim.y + prim.h / 2, prim.z);
    return mesh;
  }
  const geo = new THREE.BoxGeometry(prim.size[0], prim.size[1], prim.size[2]);
  const mesh = new THREE.Mesh(geo, material(prim.color, prim.opacity));
  mesh.position.set(prim.center[0], prim.center[1], prim.center[2]);
  if (prim.pickId) mesh.userData.pickId = prim.pickId;
  return mesh;
}

function disposeGroup(group: THREE.Group) {
  group.traverse((obj) => {
    const m = obj as THREE.Mesh;
    if (m.geometry) m.geometry.dispose();
    const mat = m.material;
    if (mat) (Array.isArray(mat) ? mat : [mat]).forEach((x) => x.dispose());
  });
  group.clear();
}

export default function Preview3D({
  scene,
  fitKey,
  onPick,
  onDrag,
  pattern,
  showPattern,
  truthPattern,
  showTruth,
}: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const patternRef = useRef<THREE.Group | null>(null);
  const lastFitKeyRef = useRef("");
  // 拖動狀態放 ref，避免每幀觸發 React 重繪
  const dragRef = useRef<{ name: string; startX: number; startY: number } | null>(null);
  const cbRef = useRef({ onPick, onDrag });
  cbRef.current = { onPick, onDrag };

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mount.clientWidth, Math.max(mount.clientHeight, 1));
    mount.appendChild(renderer.domElement);

    const three = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / Math.max(mount.clientHeight, 1),
      0.01,
      10000
    );
    camera.up.set(0, 0, 1); // 工程慣例：Z 朝上
    camera.position.set(gndW() * 0.5, -gndH() * 1.4, gndH() * 1.2);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.target.set(gndW() / 2, gndH() / 2, 0);
    controlsRef.current = controls;

    three.add(new THREE.AmbientLight(0xffffff, 0.8));
    const d1 = new THREE.DirectionalLight(0xffffff, 0.85);
    d1.position.set(1, -1, 1.4);
    three.add(d1);
    const d2 = new THREE.DirectionalLight(0xffffff, 0.35);
    d2.position.set(-1, 1, 0.6);
    three.add(d2);

    const grid = new THREE.GridHelper(300, 30, COLORS.grid, COLORS.grid);
    grid.rotation.x = Math.PI / 2;
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.14;
    grid.position.set(gndW() / 2, gndH() / 2, -0.05);
    three.add(grid);

    const group = new THREE.Group();
    groupRef.current = group;
    three.add(group);

    const patGroup = new THREE.Group();
    patternRef.current = patGroup;
    three.add(patGroup);

    // ── 拾取與拖動 ──────────────────────────────────────────────
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const hit = new THREE.Vector3();

    const toPointer = (ev: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const planePoint = (): THREE.Vector3 | null => {
      raycaster.setFromCamera(pointer, camera);
      return raycaster.ray.intersectPlane(dragPlane, hit) ? hit.clone() : null;
    };

    const onPointerDown = (ev: PointerEvent) => {
      if (ev.button !== 0) return;
      toPointer(ev);
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(group.children, false);
      const picked = hits.find((h) => h.object.userData.pickId);
      const name = picked ? String(picked.object.userData.pickId) : null;
      cbRef.current.onPick(name);
      if (!name) return;
      const p = planePoint();
      if (!p) return;
      // 拖動期間停掉 OrbitControls，否則會邊拖邊轉視角
      controls.enabled = false;
      dragRef.current = { name, startX: p.x, startY: p.y };
      renderer.domElement.setPointerCapture(ev.pointerId);
    };

    const onPointerMove = (ev: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;
      toPointer(ev);
      const p = planePoint();
      if (!p) return;
      cbRef.current.onDrag(drag.name, p.x - drag.startX, p.y - drag.startY, false);
    };

    const endDrag = (ev: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;
      toPointer(ev);
      const p = planePoint();
      dragRef.current = null;
      controls.enabled = true;
      try {
        renderer.domElement.releasePointerCapture(ev.pointerId);
      } catch {
        /* 指標已釋放 */
      }
      if (p) cbRef.current.onDrag(drag.name, p.x - drag.startX, p.y - drag.startY, true);
    };

    const dom = renderer.domElement;
    dom.addEventListener("pointerdown", onPointerDown);
    dom.addEventListener("pointermove", onPointerMove);
    dom.addEventListener("pointerup", endDrag);
    dom.addEventListener("pointercancel", endDrag);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      controls.update();
      renderer.render(three, camera);
    };
    animate();

    const ro = new ResizeObserver(() => {
      const w = mount.clientWidth;
      const h = Math.max(mount.clientHeight, 1);
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      dom.removeEventListener("pointerdown", onPointerDown);
      dom.removeEventListener("pointermove", onPointerMove);
      dom.removeEventListener("pointerup", endDrag);
      dom.removeEventListener("pointercancel", endDrag);
      controls.dispose();
      if (groupRef.current) disposeGroup(groupRef.current);
      if (patternRef.current) disposeGroup(patternRef.current);
      renderer.dispose();
      if (dom.parentNode === mount) mount.removeChild(dom);
    };
  }, []);

  useEffect(() => {
    const group = groupRef.current;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!group || !camera || !controls) return;

    disposeGroup(group);
    if (!scene) return;
    for (const prim of scene.prims) {
      const obj = primToObject(prim);
      if (obj) group.add(obj);
    }

    // 只在拓樸改變時重置視角，不打斷使用者的旋轉／縮放
    if (fitKey === lastFitKeyRef.current) return;
    lastFitKeyRef.current = fitKey;

    const { min, max } = scene.fitBounds;
    const center = new THREE.Vector3(
      (min[0] + max[0]) / 2,
      (min[1] + max[1]) / 2,
      (min[2] + max[2]) / 2
    );
    const diag = Math.hypot(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
    const radius = Math.max(diag / 2, 1e-3);
    const fov = (camera.fov * Math.PI) / 180;
    const fitH = radius / Math.sin(fov / 2);
    const fitW = radius / Math.sin(Math.atan(Math.tan(fov / 2) * camera.aspect));
    const dist = 1.25 * Math.max(fitH, fitW);
    const dir = new THREE.Vector3(0.15, -1.0, 0.75).normalize();
    camera.position.copy(center).add(dir.multiplyScalar(dist));
    camera.near = Math.max(dist / 1000, 0.01);
    camera.far = dist * 100;
    camera.updateProjectionMatrix();
    controls.target.copy(center);
    controls.update();
  }, [scene, fitKey]);

  // 場型獨立更新：拖動幾何時不重建場型，預測回來時不重置視角
  useEffect(() => {
    const g = patternRef.current;
    if (!g) return;
    disposeGroup(g);
    if (!pattern) return;
    const center: [number, number, number] = [gndW() / 2, gndH() / 2, 0];

    // ★ 真解與預測必須共用同一個半徑對應關係，否則兩者各自正規化，
    // 形狀看起來會很像——那是假的相似，比對就沒有意義了。
    const useTruth = showTruth && truthPattern && truthPattern.length === pattern.gain_dbi.length;
    const all = useTruth ? [...pattern.gain_dbi, ...truthPattern!] : pattern.gain_dbi;
    const peak = Math.max(...all);
    const ref = { peak, floor: peak - PAT_DYNAMIC_RANGE };

    if (showPattern) g.add(buildPatternMesh(pattern, center, undefined, ref));
    if (useTruth) g.add(buildTruthWireframe(pattern, center, truthPattern!, ref));
  }, [pattern, showPattern, truthPattern, showTruth]);

  return <div style={{ width: "100%", height: "100%" }} ref={mountRef} />;
}

export type { Vec3 };

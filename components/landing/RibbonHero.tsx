"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import LogoMark from "./LogoMark";

// Scroll-driven hero: a ribbon of live product screens sweeps around the viewer in 3D,
// then the first six cards land in a grid. Everything is driven by one smoothed number, p.

const PRODUCTS: [string, string][] = [
  ["Orbit", "Team workspace"],
  ["Pulse", "Product analytics"],
  ["Ledger", "Finance autopilot"],
  ["Nova", "AI companion"],
  ["Atlas", "Maps & data"],
  ["Signal", "Audio studio"],
  ["Forge", "Dev tools"],
  ["Halo", "Identity"],
];

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => t * t * (3 - 2 * t);
const out = (t: number) => 1 - (1 - t) ** 3;
const span = (p: number, a: number, b: number) => clamp((p - a) / (b - a));

const TW = 640, TH = 400;
const HUES = [270, 290, 250, 305, 225, 320, 260, 280];

// Animated product screens drawn on a canvas (swap for VideoTexture when real footage exists)
function paint(g: CanvasRenderingContext2D, i: number, t: number, font: string) {
  const hue = HUES[i];
  const bg = g.createLinearGradient(0, 0, TW, TH);
  bg.addColorStop(0, `hsl(${hue} 45% 10%)`);
  bg.addColorStop(1, `hsl(${hue + 25} 55% 3.5%)`);
  g.fillStyle = bg;
  g.fillRect(0, 0, TW, TH);
  const gx = TW * (0.5 + 0.28 * Math.sin(t * 0.4 + i)), gy = TH * 0.62;
  const rg = g.createRadialGradient(gx, gy, 0, gx, gy, 320);
  rg.addColorStop(0, `hsla(${hue} 85% 62% / .38)`);
  rg.addColorStop(1, "hsla(0 0% 0% / 0)");
  g.fillStyle = rg;
  g.fillRect(0, 0, TW, TH);

  const cream = "rgba(245,239,226,";
  const accent = `hsl(${hue} 90% 72%)`;
  const cx = TW / 2, cy = TH / 2 + 8;
  g.save();
  g.lineCap = "round";
  switch (i) {
    case 0: // orbit rings
      for (let k = 1; k <= 4; k++) {
        g.strokeStyle = cream + (0.5 - k * 0.08) + ")";
        g.lineWidth = 1.2;
        g.beginPath();
        g.ellipse(cx, cy, k * 52, k * 30, 0, 0, Math.PI * 2);
        g.stroke();
        const a = t * (1.2 / k) + k * 2;
        g.fillStyle = k % 2 ? accent : cream + "1)";
        g.beginPath();
        g.arc(cx + Math.cos(a) * k * 52, cy + Math.sin(a) * k * 30, 5 + k, 0, Math.PI * 2);
        g.fill();
      }
      g.shadowColor = accent;
      g.shadowBlur = 40;
      g.fillStyle = cream + "1)";
      g.beginPath();
      g.arc(cx, cy, 16, 0, Math.PI * 2);
      g.fill();
      break;
    case 1: { // bars + trend line
      const n = 16, bw = 22, x0 = cx - (n * bw * 1.5) / 2, base = TH - 80;
      g.beginPath();
      for (let k = 0; k < n; k++) {
        const h = 40 + 140 * (0.5 + 0.5 * Math.sin(t * 1.4 + k * 0.55)) * (0.4 + k / n);
        g.fillStyle = k === n - 3 ? accent : cream + ".18)";
        g.beginPath();
        g.roundRect(x0 + k * bw * 1.5, base - h, bw, h, 6);
        g.fill();
      }
      g.strokeStyle = accent;
      g.lineWidth = 3;
      g.beginPath();
      for (let k = 0; k <= 40; k++) {
        const x = x0 + (k / 40) * n * bw * 1.5, y = 150 - k * 1.6 + Math.sin(k * 0.5 + t * 2) * 14;
        if (k) g.lineTo(x, y);
        else g.moveTo(x, y);
      }
      g.stroke();
      break;
    }
    case 2: { // balance + transactions
      g.fillStyle = cream + "1)";
      g.font = `600 68px ${font}`;
      g.textAlign = "center";
      const v = 48210 + Math.floor(t * 47) % 9000;
      g.fillText("$" + v.toLocaleString("en-US"), cx, 165);
      g.font = `500 14px ${font}`;
      g.fillStyle = "#9ef0c0";
      g.fillText("▲ 12.4% this month · books closed", cx, 196);
      for (let k = 0; k < 3; k++) {
        const y = 228 + k * 34;
        g.fillStyle = cream + ".07)";
        g.beginPath();
        g.roundRect(120, y, 400, 24, 12);
        g.fill();
        g.fillStyle = k === 1 ? accent : cream + ".5)";
        g.beginPath();
        g.roundRect(120, y, 400 * (0.3 + 0.6 * (0.5 + 0.5 * Math.sin(t + k * 2))), 24, 12);
        g.fill();
      }
      break;
    }
    case 3: { // AI blobs + chat
      g.globalCompositeOperation = "screen";
      for (let k = 0; k < 3; k++) {
        const bx = cx + Math.sin(t * 0.8 + k * 2.1) * 70, by = cy + Math.cos(t * 0.6 + k * 1.7) * 40;
        const b = g.createRadialGradient(bx, by, 0, bx, by, 120);
        b.addColorStop(0, `hsla(${hue + k * 40} 90% 65% / .8)`);
        b.addColorStop(1, "hsla(0 0% 0% / 0)");
        g.fillStyle = b;
        g.fillRect(0, 0, TW, TH);
      }
      g.globalCompositeOperation = "source-over";
      const shown = Math.floor(t * 0.7) % 4;
      const msgs = [["Draft my launch post", 1], ["Here's a version in your voice…", 0], ["Make it shorter", 1]] as const;
      msgs.slice(0, shown).forEach(([m, me], k) => {
        g.font = `500 15px ${font}`;
        const w = g.measureText(m).width + 34, x = me ? TW - 40 - w : 40, y = 80 + k * 52;
        g.fillStyle = me ? cream + ".92)" : "rgba(10,8,20,.7)";
        g.beginPath();
        g.roundRect(x, y, w, 38, 19);
        g.fill();
        g.fillStyle = me ? "#151018" : cream + ".95)";
        g.fillText(m, x + 17, y + 24);
      });
      break;
    }
    case 4: { // dot globe
      const R = 130;
      for (let la = -80; la <= 80; la += 10) {
        for (let lo = 0; lo < 360; lo += 10) {
          const phi = (la * Math.PI) / 180, th = (lo * Math.PI) / 180 + t * 0.35;
          const z = Math.cos(phi) * Math.cos(th);
          if (z < 0) continue;
          const x = cx + R * Math.cos(phi) * Math.sin(th), y = cy - R * Math.sin(phi);
          const lit = Math.sin(phi * 3 + th * 2) > 0.6;
          g.fillStyle = lit ? accent : cream + (0.15 + z * 0.5) + ")";
          g.beginPath();
          g.arc(x, y, lit ? 2.6 : 1.6, 0, Math.PI * 2);
          g.fill();
        }
      }
      break;
    }
    case 5: // waveforms
      [accent, cream + ".8)", `hsl(${hue - 60} 90% 70%)`].forEach((c, k) => {
        g.strokeStyle = c;
        g.lineWidth = 3 - k * 0.6;
        g.beginPath();
        for (let x = 40; x <= TW - 40; x += 4) {
          const env = Math.sin(((x - 40) / (TW - 80)) * Math.PI);
          const y = cy + env * (Math.sin(x * 0.03 + t * (2 + k)) * 50 + Math.sin(x * 0.011 - t * 1.3 + k) * 34);
          if (x === 40) g.moveTo(x, y);
          else g.lineTo(x, y);
        }
        g.stroke();
      });
      break;
    case 6: { // terminal
      const lines = ["$ forge new infinitica-app", "✓ scaffolded in 0.8s", "$ forge ship --prod", "→ building 214 modules", "✓ deployed to 38 regions", "$ _"];
      const n = Math.floor(t * 1.5) % (lines.length + 3);
      g.font = `500 17px ui-monospace, Menlo, monospace`;
      lines.slice(0, n).forEach((l, k) => {
        g.fillStyle = l.startsWith("✓") ? "#9ef0c0" : l.startsWith("→") ? accent : cream + ".9)";
        g.fillText(l, 64, 100 + k * 36);
      });
      break;
    }
    default: // halo ripples
      for (let k = 0; k < 5; k++) {
        const r = ((t * 40 + k * 44) % 220) + 20;
        g.strokeStyle = `hsla(${hue} 90% 75% / ${1 - r / 240})`;
        g.lineWidth = 2;
        g.beginPath();
        g.arc(cx, cy, r, 0, Math.PI * 2);
        g.stroke();
      }
      g.fillStyle = cream + "1)";
      g.beginPath();
      g.arc(cx, cy - 10, 18, 0, Math.PI * 2);
      g.fill();
      g.beginPath();
      g.ellipse(cx, cy + 34, 32, 18, 0, Math.PI, 0);
      g.fill();
  }
  g.restore();

  // app chrome
  g.textAlign = "left";
  g.fillStyle = cream + ".95)";
  g.font = `600 24px ${font}`;
  g.fillText(PRODUCTS[i][0], 30, 48);
  g.font = `500 12px ui-monospace, Menlo, monospace`;
  g.fillStyle = cream + ".5)";
  g.textAlign = "right";
  g.fillText(PRODUCTS[i][1].toUpperCase(), TW - 30, 46);
  g.textAlign = "left";
  g.fillRect(30, TH - 50, TW - 60, 1);
  g.fillText(`0${i + 1} — INFINITICA`, 30, TH - 24);
  g.textAlign = "right";
  g.fillStyle = "#9ef0c0";
  g.fillText("● LIVE", TW - 30, TH - 24);
}

export default function RibbonHero({ soundOn, onSound }: { soundOn: boolean; onSound: () => void }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current!;
    const $ = (s: string) => track.querySelector<HTMLElement>(s)!;
    const canvas = $(".rh-gl") as HTMLCanvasElement;
    const font = getComputedStyle(document.documentElement).getPropertyValue("--font-manrope").trim() || "sans-serif";

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: devicePixelRatio < 2, alpha: true, powerPreference: "high-performance" });
    } catch {
      track.classList.add("no-gl"); // no WebGL: show a static headline instead
      return;
    }
    renderer.setClearColor(0, 0);
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    const scene = new THREE.Scene();
    const FOV = 35;
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);

    /* ribbon path */
    let PATH_L = 1;
    const SAMPLES = 1200, pathP: THREE.Vector3[] = [], pathT: THREE.Vector3[] = [];
    const PH0 = -1.5, PH1 = Math.PI * 2 + 1.35;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 160; i++) {
      const t = i / 160, ph = mix(PH0, PH1, t), cs = Math.cos(ph), u = 2 * t - 1;
      const depth = cs > 0 ? 7.6 + 16.4 * cs ** 0.9 : 7.6 + 2.2 * cs;
      const edge = 0.84 + 0.5 * span(0.14 - t, 0, 0.14) + 0.8 * span(t, 0.84, 1);
      pts.push(new THREE.Vector3(edge * Math.sin(ph) * depth * 0.561, 0.5 * Math.sign(u) * Math.abs(u) ** 1.4 * depth * 0.63, -depth));
    }
    const path = new THREE.CatmullRomCurve3(pts, false, "centripetal");
    path.arcLengthDivisions = 1500;
    PATH_L = path.getLength();
    for (let i = 0; i <= SAMPLES; i++) {
      pathP.push(path.getPointAt(i / SAMPLES));
      pathT.push(path.getTangentAt(i / SAMPLES));
    }
    const at = (s: number, op: THREE.Vector3, ot: THREE.Vector3) => {
      const f = clamp(s / PATH_L) * SAMPLES, i = Math.min(SAMPLES - 1, Math.floor(f)), k = f - i;
      op.lerpVectors(pathP[i], pathP[i + 1], k);
      ot.lerpVectors(pathT[i], pathT[i + 1], k).normalize();
    };

    /* cards */
    const CARD_W = 2.1, CARD_H = 1.32, GAP = 0.03, STEP = CARD_W + GAP, NX = 28, NY = 3;
    const vs = `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
    const fs = `uniform sampler2D map;uniform float aspect,radius,glow;varying vec2 vUv;
void main(){
  vec2 q=(abs(vUv-.5)-.5)*vec2(aspect,1.)+radius;
  float d=length(max(q,0.))+min(max(q.x,q.y),0.)-radius;
  float px=fwidth(d),a=1.-smoothstep(-px,px,d);
  if(a<.01)discard;
  vec2 uv=vUv;if(!gl_FrontFacing)uv.x=1.-uv.x;
  vec3 c=texture2D(map,uv).rgb;
  float edge=smoothstep(-.012-px,-.012,d);
  c=mix(c,vec3(.84,.6,1.),edge*(.14+glow*.5));
  gl_FragColor=vec4(c*(1.+glow*.12),a);
}`;
    const cards = PRODUCTS.map(([title], i) => {
      const cv = document.createElement("canvas");
      cv.width = TW;
      cv.height = TH;
      const ctx = cv.getContext("2d")!;
      const tex = new THREE.CanvasTexture(cv);
      tex.colorSpace = THREE.NoColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      tex.anisotropy = 4;
      const geo = new THREE.PlaneGeometry(1, 1, NX, NY);
      const mat = new THREE.ShaderMaterial({
        vertexShader: vs,
        fragmentShader: fs,
        transparent: true,
        side: THREE.DoubleSide,
        uniforms: { map: { value: tex }, aspect: { value: CARD_W / CARD_H }, radius: { value: 0.03 }, glow: { value: 0 } },
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);
      return { i, title, ctx, tex, geo, mat, mesh, rect: null as null | ReturnType<typeof grid> };
    });

    /* layout */
    const GZ = 8;
    let W = 1, H = 1, asp = 1, cols = 3, rows = 2, tanH = 0.3153;
    function resize() {
      W = innerWidth;
      H = innerHeight;
      asp = W / H;
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(W, H, false);
      camera.aspect = asp;
      camera.fov = asp < 16 / 9 ? (Math.atan(0.561 / asp) * 360) / Math.PI : FOV;
      camera.updateProjectionMatrix();
      tanH = Math.tan((camera.fov * Math.PI) / 360);
      cols = asp < 0.9 ? 2 : 3;
      rows = asp < 0.9 ? 3 : 2;
    }
    function grid(i: number) {
      const vh = 2 * GZ * tanH, vw = vh * asp, gw = vw * (cols === 3 ? 0.74 : 0.88), gap = gw * 0.017;
      const cw = (gw - gap * (cols - 1)) / cols, ch = cw / (CARD_W / CARD_H), gh = ch * rows + gap * 1.6 * (rows - 1);
      const c = i % cols, r = Math.floor(i / cols);
      return { x: -gw / 2 + cw / 2 + c * (cw + gap), y: gh / 2 - ch / 2 - r * (ch + gap * 1.6), w: cw, h: ch, vw, vh, c, r };
    }
    addEventListener("resize", resize);
    resize();

    /* scroll */
    let target = 0, p = 0;
    const readScroll = () => {
      const r = track.getBoundingClientRect();
      target = clamp(-r.top / (track.offsetHeight - innerHeight));
    };

    /* pose */
    const op = new THREE.Vector3(), ot = new THREE.Vector3(), up = new THREE.Vector3(), Y = new THREE.Vector3(0, 1, 0), vp = new THREE.Vector3();
    function poseRibbon(c: (typeof cards)[number], head: number) {
      const pos = c.geo.attributes.position, centre = head - c.i * STEP;
      for (let iy = 0; iy <= NY; iy++)
        for (let ix = 0; ix <= NX; ix++) {
          const k = iy * (NX + 1) + ix, lu = ix / NX - 0.5, lv = 0.5 - iy / NY;
          at(centre + lu * CARD_W, op, ot);
          up.copy(Y).addScaledVector(ot, -Y.dot(ot)).normalize();
          vp.copy(op).addScaledVector(up, lv * CARD_H);
          pos.setXYZ(k, vp.x, vp.y, vp.z);
        }
      pos.needsUpdate = true;
    }
    function poseGrid(c: (typeof cards)[number], q: number) {
      const g = grid(c.i), pos = c.geo.attributes.position;
      const dx = (g.c - (cols - 1) / 2) * 1.2, dy = g.r < rows / 2 ? 1 : -1;
      const ox = dx * g.vw * 0.62 * (1 - q), oy = dy * g.vh * (g.c === 1 ? 0.95 : 0.34) * (1 - q), tilt = (1 - q) * 0.22 * (g.c - 1 || 0.5) * dy;
      const cs = Math.cos(tilt), sn = Math.sin(tilt);
      const lift = c === hovered ? 0.25 : 0;
      for (let iy = 0; iy <= NY; iy++)
        for (let ix = 0; ix <= NX; ix++) {
          const k = iy * (NX + 1) + ix, x = (ix / NX - 0.5) * g.w, y = (0.5 - iy / NY) * g.h;
          pos.setXYZ(k, g.x + ox + x * cs - y * sn, g.y + oy + x * sn + y * cs, -GZ - (1 - q) * 0.6 * Math.sin((ix / NX) * Math.PI) + lift * q);
        }
      pos.needsUpdate = true;
      c.rect = g;
    }

    const l1 = track.querySelector<HTMLElement>(".rh-l1");
    const l2 = track.querySelector<HTMLElement>(".rh-l2");
    const cap = track.querySelector<HTMLElement>(".rh-cap");
    const rule = track.querySelector<HTMLElement>(".rh-rule");
    const outro = track.querySelector<HTMLElement>(".rh-outro");
    const intros = [".rh-hint", ".rh-cross", ".rh-glow"]
      .map((s) => track.querySelector<HTMLElement>(s))
      .filter((el): el is HTMLElement => el !== null);
    const RIB_A = 0.14, RIB_B = 0.63;
    let hovered: (typeof cards)[number] | null = null;
    const clock = new THREE.Clock();

    function render() {
      const pp = p, time = clock.getElapsedTime();
      const rise = 1 - out(span(pp, 0, 0.12));
      const run = mix(-50, 76, span(pp, 0, 0.58));
      if (l1) l1.style.transform = `translate3d(${run}vw,${rise * 34}vh,0)`;
      if (l2) l2.style.transform = `translate3d(${-run}vw,${rise * 34}vh,0)`;
      if (cap) {
        cap.style.opacity = String(1 - span(pp, 0.52, 0.57));
        cap.style.transform = `translate(-50%,calc(-50% + ${rise * 34}vh))`;
      }
      const intro = 1 - span(pp, 0, 0.05);
      intros.forEach((el) => {
        if (el) el.style.opacity = String(intro);
      });
      if (rule) rule.style.transform = `scaleX(${ease(span(pp, 0.72, 0.86))})`;
      const o = span(pp, 0.84, 0.94);
      if (outro) {
        outro.style.opacity = String(o);
        outro.style.transform = `translateY(${(1 - out(o)) * 30}px)`;
      }

      const pr = span(pp, RIB_A, RIB_B), head = mix(0, PATH_L + cards.length * STEP, pr);
      for (const c of cards) {
        const s = head - c.i * STEP, end = PATH_L - CARD_W;
        if (s < end) {
          c.mesh.visible = s > CARD_W;
          c.rect = null;
          if (c.mesh.visible) poseRibbon(c, head);
        } else if (c.i < cols * rows) {
          const st = mix(RIB_A, RIB_B, (end + c.i * STEP) / (PATH_L + cards.length * STEP)), q = out(span(pp, st, st + 0.13));
          c.mesh.visible = q > 0.001;
          if (c.mesh.visible) poseGrid(c, q);
        } else {
          c.mesh.visible = false;
          c.rect = null;
        }
        const gl = c.mat.uniforms.glow;
        gl.value += ((c === hovered ? 1 : 0) - gl.value) * 0.12;
        if (c.mesh.visible) {
          paint(c.ctx, c.i, time + c.i * 3, font);
          c.tex.needsUpdate = true;
        }
      }
      renderer.render(scene, camera);
    }

    /* hover */
    const nameEl = track.querySelector<HTMLElement>(".rh-name");
    const onMove = (e: PointerEvent) => {
      let hit: typeof hovered = null;
      if (p > 0.86) {
        const nx = e.clientX / W - 0.5, ny = 0.5 - e.clientY / H;
        for (const c of cards) {
          const g = c.rect;
          if (!g) continue;
          const x = nx * g.vw, y = ny * g.vh;
          if (Math.abs(x - g.x) < g.w / 2 && Math.abs(y - g.y) < g.h / 2) hit = c;
        }
      }
      hovered = hit;
      if (nameEl) {
        nameEl.style.opacity = hit ? "1" : "0";
        if (hit) {
          nameEl.textContent = `${hit.title} — ${PRODUCTS[hit.i][1]}  ↗`;
          nameEl.style.transform = `translate(${e.clientX + 16}px,${e.clientY + 18}px)`;
        }
      }
    };
    track.addEventListener("pointermove", onMove);

    /* loop — only runs work while the hero is on screen */
    let raf = 0, onScreen = true;
    const io = new IntersectionObserver(([e]) => (onScreen = e.isIntersecting));
    io.observe(track);
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!onScreen) return;
      readScroll();
      p += (target - p) * 0.09;
      if (Math.abs(target - p) < 0.00005) p = target;
      render();
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", resize);
      track.removeEventListener("pointermove", onMove);
      cards.forEach((c) => (c.geo.dispose(), c.mat.dispose(), c.tex.dispose()));
      renderer.dispose();
    };
  }, []);

  return (
    <div className="rh" ref={trackRef}>
      <section className="rh-stage">
        <h1 aria-label="Building infinite products">
          <div className="rh-hl rh-l1" aria-hidden="true">
            <span className="rh-in">BUILDING</span>
          </div>
          <div className="rh-hl rh-l2" aria-hidden="true">
            <span className="rh-in">INFINITE</span>
          </div>
        </h1>
        <div className="rh-cap rh-fade">Products we imagine, ship and run — every single day.</div>
        <div className="rh-glow" />
        <div className="rh-cross">
          <i>
            <LogoMark />
          </i>
        </div>
        <div className="rh-rule" />
        <canvas className="rh-gl" />
        <div className="rh-outro">
          <span>( 06 products · live )</span>
          <a href="#products">See them all →</a>
        </div>
        <footer className="rh-bot rh-fade">
          <p>An independent product company. No client work — only software we own and keep improving.</p>
        
        </footer>
        <div className="rh-name" />
      </section>
    </div>
  );
}

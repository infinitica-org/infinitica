import * as THREE from "three";

// An endless night field of glowing "flowers" the camera flies through.
// Scroll speeds the flight up, the mouse pushes points away and lights them,
// and setHover(true) eases the flight to a stop and scatters the flowers upward.

const DEPTH = 90;
const WIDTH = 46;

const vertex = /* glsl */ `
uniform float uTime, uTravel, uDisperse, uPixel, uAspect, uMouseStr, uIntro;
uniform vec2 uMouse;
attribute vec4 aRand;
varying float vAlpha;
varying vec3 vColor;
varying float vGlow;
varying float vKind;

float terrain(vec2 p){
  return sin(p.x*.16 + p.y*.04)*1.1
       + sin(p.y*.09 - p.x*.05)*1.6
       + sin((p.x + p.y)*.33)*.28;
}

void main(){
  vec3 p = position;
  float wz = p.z;                                   // fixed world coordinate
  p.z = mod(p.z + uTravel, ${DEPTH.toFixed(1)}) - ${DEPTH.toFixed(1)};
  float worldZ = p.z - uTravel;
  float side = abs(p.x) / ${WIDTH.toFixed(1)};
  p.y = terrain(vec2(p.x, worldZ)) + side*side*12. - 2.2;

  float flower = step(aRand.x, .2);
  vKind = flower;

  // gentle sway
  p.x += sin(uTime*.8 + aRand.y*6.28 + worldZ*.2) * .08;
  p.y += flower * (.25 + aRand.w*.35);

  // scatter into floating particles
  float d = uDisperse * (.6 + aRand.z*.8);
  p += vec3((aRand.y-.5)*7., 1.5 + aRand.z*6. + sin(uTime + aRand.x*20.)*.6, (aRand.w-.5)*5.) * d;

  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;

  // push away from the cursor in screen space
  vec2 ndc = gl_Position.xy / gl_Position.w;
  vec2 diff = ndc - uMouse; diff.x *= uAspect;
  float dist = length(diff);
  float push = exp(-dist*dist*14.) * uMouseStr;
  vec2 off = normalize(diff + 1e-5) * push * .16; off.x /= uAspect;
  gl_Position.xy += off * gl_Position.w;
  vGlow = exp(-dist*dist*26.) * uMouseStr;

  // flowers bloom as they approach, leaves grow in further back
  float near = smoothstep(-${DEPTH.toFixed(1)}, -10., p.z);
  float size = flower > .5 ? mix(.15, 1.25, near) * (.7 + aRand.y*.6) : mix(.35, .7, 1.-near*.5) * (.5 + aRand.w*.5);
  size *= mix(1., 1.6, uDisperse);
  gl_PointSize = size * uPixel * 26. / -mv.z * uIntro;

  vAlpha = smoothstep(-${DEPTH.toFixed(1)}, -${(DEPTH * 0.62).toFixed(1)}, p.z) * smoothstep(-.4, -3., p.z);

  vec3 violet = vec3(.675, .345, .914);
  vec3 pink   = vec3(.95, .62, 1.);
  vec3 cream  = vec3(.96, .94, .89);
  vec3 cyan   = vec3(.45, .7, 1.);
  vec3 fc = aRand.y < .45 ? violet : aRand.y < .7 ? pink : aRand.y < .9 ? cream : cyan;
  vec3 leaf = mix(vec3(.16,.12,.32), vec3(.28,.2,.5), aRand.z);
  vColor = mix(leaf, fc, flower);
  vColor = mix(vColor, mix(violet, cream, aRand.z), uDisperse*(1.-flower)*.7);
}
`;

const fragment = /* glsl */ `
varying float vAlpha;
varying vec3 vColor;
varying float vGlow;
varying float vKind;
void main(){
  vec2 c = gl_PointCoord - .5;
  float r = length(c);
  float a = atan(c.y, c.x);
  float petal = .3 + .14*cos(5.*a);
  float shape = vKind > .5 ? smoothstep(petal, petal-.12, r) : smoothstep(.5, .05, r);
  float halo = smoothstep(.5, 0., r) * .35;
  float core = smoothstep(.12, 0., r);
  float m = max(shape, halo);
  if(m < .01) discard;
  vec3 col = vColor * m + core * vKind * .7;
  col *= 1. + vGlow * 2.6;
  gl_FragColor = vec4(col, m * vAlpha);
}
`;

const dustVertex = /* glsl */ `
uniform float uTime, uPixel;
attribute float aSeed;
varying float vA;
void main(){
  vec3 p = position;
  p.x += sin(uTime*.2 + aSeed*30.)*1.2;
  p.y += mod(uTime*.25*(.3+aSeed) + aSeed*10., 10.) - 3.;
  vec4 mv = modelViewMatrix * vec4(p,1.);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = (2. + aSeed*3.) * uPixel * 3. / -mv.z;
  vA = (.25 + .5*sin(uTime*2. + aSeed*40.)*.5+.25) * smoothstep(-45., -10., mv.z);
}
`;
const dustFragment = /* glsl */ `
varying float vA;
void main(){
  float r = length(gl_PointCoord-.5);
  gl_FragColor = vec4(vec3(.9,.85,1.), smoothstep(.5,0.,r)*vA);
}
`;

export class FieldScene {
  private renderer?: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera!: THREE.PerspectiveCamera;
  private uniforms: Record<string, THREE.IUniform> = {};
  private dustUniforms: Record<string, THREE.IUniform> = {};
  private raf = 0;
  private clock = new THREE.Clock();
  private mouse = new THREE.Vector2(0, 0);
  private mouseTarget = new THREE.Vector2(0, 0);
  private mouseStrTarget = 0;
  private travel = 0;
  private speed = 0;
  private boost = 0;
  private hover = 0;
  private hoverTarget = 0;
  private visible = true;
  private container: HTMLElement;
  private observer?: IntersectionObserver;
  disabled = false;
  intro = { y: 16, pitch: -0.9, size: 0 };
  dive = 0;

  constructor(container: HTMLElement) {
    this.container = container;
    const mobile = window.innerWidth < 820;

    // Check if WebGL context can actually be created
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl2") || testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        this.disabled = true;
        return;
      }
    } catch {
      this.disabled = true;
      return;
    }

    try {
      this.renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
      });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 1.75));
      this.renderer.setClearColor(0x000000, 0);
      container.appendChild(this.renderer.domElement);

      // Handle WebGL context loss gracefully so browser never blocks the page
      this.renderer.domElement.addEventListener(
        "webglcontextlost",
        (event) => {
          event.preventDefault();
          this.visible = false;
          if (this.raf) cancelAnimationFrame(this.raf);
        },
        false
      );
    } catch {
      this.disabled = true;
      return;
    }

    this.camera = new THREE.PerspectiveCamera(mobile ? 72 : 58, 1, 0.1, 200);

    const count = mobile ? 24000 : 56000;
    const pos = new Float32Array(count * 3);
    const rnd = new Float32Array(count * 4);
    for (let i = 0; i < count; i++) {
      // bias points toward the valley floor
      const s = Math.random() * 2 - 1;
      pos[i * 3] = Math.sign(s) * Math.pow(Math.abs(s), 1.4) * WIDTH;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = -Math.random() * DEPTH;
      for (let k = 0; k < 4; k++) rnd[i * 4 + k] = Math.random();
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aRand", new THREE.BufferAttribute(rnd, 4));

    this.uniforms = {
      uTime: { value: 0 },
      uTravel: { value: 0 },
      uDisperse: { value: 0 },
      uPixel: { value: this.renderer.getPixelRatio() },
      uAspect: { value: 1 },
      uMouse: { value: this.mouse },
      uMouseStr: { value: 0 },
      uIntro: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    this.scene.add(points);

    const dustCount = mobile ? 250 : 600;
    const dPos = new Float32Array(dustCount * 3);
    const dSeed = new Float32Array(dustCount);
    for (let i = 0; i < dustCount; i++) {
      dPos[i * 3] = (Math.random() - 0.5) * 40;
      dPos[i * 3 + 1] = Math.random() * 6;
      dPos[i * 3 + 2] = -Math.random() * 45;
      dSeed[i] = Math.random();
    }
    const dGeo = new THREE.BufferGeometry();
    dGeo.setAttribute("position", new THREE.BufferAttribute(dPos, 3));
    dGeo.setAttribute("aSeed", new THREE.BufferAttribute(dSeed, 1));
    this.dustUniforms = { uTime: { value: 0 }, uPixel: { value: this.renderer.getPixelRatio() } };
    const dust = new THREE.Points(
      dGeo,
      new THREE.ShaderMaterial({
        vertexShader: dustVertex,
        fragmentShader: dustFragment,
        uniforms: this.dustUniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    dust.frustumCulled = false;
    this.camera.add(dust);
    this.scene.add(this.camera);

    window.addEventListener("resize", this.resize);
    window.addEventListener("pointermove", this.onPointer, { passive: true });
    window.addEventListener("pointerdown", this.onPointer, { passive: true });
    document.addEventListener("pointerleave", this.onLeave);
    this.observer = new IntersectionObserver(([e]) => (this.visible = e.isIntersecting));
    this.observer.observe(container);
    this.resize();
    this.loop();
  }

  private resize = () => {
    if (this.disabled || !this.renderer) return;
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.uniforms.uAspect.value = w / h;
  };

  private onPointer = (e: PointerEvent) => {
    this.mouseTarget.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    this.mouseStrTarget = 1;
  };
  private onLeave = () => (this.mouseStrTarget = 0);

  /** scroll velocity in px/frame from the smooth scroller */
  setVelocity(v: number) {
    if (this.disabled) return;
    this.boost = Math.min(Math.abs(v) * 0.9, 40);
  }
  setHover(on: boolean) {
    if (this.disabled) return;
    this.hoverTarget = on ? 1 : 0;
  }

  private loop = () => {
    if (this.disabled || !this.renderer) return;
    this.raf = requestAnimationFrame(this.loop);
    const dt = Math.min(this.clock.getDelta(), 0.05);
    if (!this.visible) return;
    const t = this.clock.elapsedTime;

    this.hover += (this.hoverTarget - this.hover) * Math.min(dt * 2.2, 1);
    const target = (1.4 + this.boost + this.dive * 4) * (1 - this.hover);
    this.speed += (target - this.speed) * Math.min(dt * 3, 1);
    this.boost *= 0.92;
    this.travel += this.speed * dt;

    this.mouse.lerp(this.mouseTarget, Math.min(dt * 6, 1));
    const ms = this.uniforms.uMouseStr.value as number;
    this.uniforms.uMouseStr.value = ms + (this.mouseStrTarget - ms) * Math.min(dt * 4, 1);
    if (window.matchMedia("(hover: none)").matches) this.mouseStrTarget *= 0.985; // touch glow fades out

    this.uniforms.uTime.value = t;
    this.uniforms.uTravel.value = this.travel;
    this.uniforms.uDisperse.value = this.hover;
    this.uniforms.uIntro.value = this.intro.size;
    this.dustUniforms.uTime.value = t;

    const cam = this.camera;
    cam.position.set(this.mouse.x * 0.6, this.intro.y - this.dive * 1.5 + Math.sin(t * 0.5) * 0.08, 0);
    cam.rotation.set(this.intro.pitch + this.mouse.y * 0.05, -this.mouse.x * 0.08, -this.mouse.x * 0.015, "YXZ");
    this.renderer.render(this.scene, cam);
  };

  dispose() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.visible = false;
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("pointermove", this.onPointer);
    window.removeEventListener("pointerdown", this.onPointer);
    document.removeEventListener("pointerleave", this.onLeave);
    this.observer?.disconnect();
    if (this.renderer) {
      try {
        this.renderer.forceContextLoss();
        this.renderer.dispose();
        this.renderer.domElement?.remove();
      } catch {}
    }
  }
}

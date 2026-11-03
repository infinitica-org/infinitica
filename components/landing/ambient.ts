// Soft generated night drone. Starts muted; toggle() fades in/out, muffle() lowers the filter.
export class Ambient {
  private ctx?: AudioContext;
  private gain?: GainNode;
  private filter?: BiquadFilterNode;
  on = false;

  private build() {
    const ctx = new AudioContext();
    const gain = ctx.createGain();
    gain.gain.value = 0;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1400;
    filter.connect(gain).connect(ctx.destination);

    [110, 164.8, 220.4, 329.6].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = i % 2 ? "triangle" : "sine";
      o.frequency.value = f;
      o.detune.value = (i - 1.5) * 6;
      const g = ctx.createGain();
      g.gain.value = 0.06 / (i + 1);
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.05 + i * 0.03;
      const lg = ctx.createGain();
      lg.gain.value = 0.03 / (i + 1);
      lfo.connect(lg).connect(g.gain);
      o.connect(g).connect(filter);
      o.start();
      lfo.start();
    });

    // airy noise bed
    const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * 0.5;
    const n = ctx.createBufferSource();
    n.buffer = buf;
    n.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 900;
    bp.Q.value = 0.6;
    const ng = ctx.createGain();
    ng.gain.value = 0.025;
    n.connect(bp).connect(ng).connect(filter);
    n.start();

    this.ctx = ctx;
    this.gain = gain;
    this.filter = filter;
  }

  toggle() {
    if (!this.ctx) this.build();
    const ctx = this.ctx!;
    ctx.resume();
    this.on = !this.on;
    const now = ctx.currentTime;
    this.gain!.gain.cancelScheduledValues(now);
    this.gain!.gain.setTargetAtTime(this.on ? 0.9 : 0, now, 0.6);
    return this.on;
  }

  muffle(on: boolean) {
    if (!this.ctx) return;
    this.filter!.frequency.setTargetAtTime(on ? 260 : 1400, this.ctx.currentTime, 0.4);
  }
}

// Web Audio Synthesizer for Traditional Kerala Temple & Nadaswaram Ambience
// Plays auspicious Carnatic Raga Kalyani / Mohanam melodic phrases + Tanpura drone + Temple Bell

class WeddingAudioPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.melodyTimer = null;
    this.bellTimer = null;
    this.tanpuraOscs = [];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Auspicious Raga Mohanam (Sa, Ri2, Ga3, Pa, Dha2) frequencies rooted in C4 (261.63 Hz)
  getScaleFrequencies() {
    const root = 261.63; // C4
    return [
      root,             // S
      root * (9 / 8),   // R2 (294.33 Hz)
      root * (5 / 4),   // G3 (327.04 Hz)
      root * (3 / 2),   // P  (392.44 Hz)
      root * (5 / 3),   // D2 (436.05 Hz)
      root * 2,         // S' (523.25 Hz)
      root * (9 / 4),   // R2' (588.67 Hz)
      root * (5 / 2),   // G3' (654.08 Hz)
    ];
  }

  startTanpura() {
    if (!this.ctx) return;
    const notes = [130.81, 196.00, 261.63]; // C3, G3, C4
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + idx * 80, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      // Subtle vibrato / slow chorus
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.2 + idx * 0.1, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(1.5, this.ctx.currentTime);
      lfo.connect(osc.frequency);
      lfo.start();

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      osc.start();

      this.tanpuraOscs.push({ osc, gain, lfo });
    });
  }

  playTempleBell(freq = 1174.66) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    
    // Metallic bell overtones
    const harmonics = [1, 2.76, 5.4, 8.9];
    harmonics.forEach((h, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * h, now);
      
      const decay = 2.5 / (i + 1);
      gain.gain.setValueAtTime(0.05 / (i + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);
      
      osc.connect(gain);
      gain.connect(this.masterGain);
      
      osc.start(now);
      osc.stop(now + decay);
    });
  }

  playNadaswaramNote(freq, duration = 0.8) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Reedy, rich double-reed nadaswaram texture
    osc1.type = 'sawtooth';
    osc2.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 1.002, now); // subtle detune

    // Graceful pitch bend (Gamaka - authentic Indian classical slide)
    osc1.frequency.exponentialRampToValueAtTime(freq * 1.01, now + duration * 0.3);
    osc1.frequency.exponentialRampToValueAtTime(freq, now + duration);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(2.5, now);

    // Envelope
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.09, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  }

  startMelody() {
    const scale = this.getScaleFrequencies();
    // Beautiful auspicious traditional Kerala melody phrases (Raga Mohanam)
    const melodyPhrases = [
      [0, 1, 2, 3, 2, 1, 0],
      [2, 3, 4, 5, 4, 3, 2],
      [3, 4, 5, 6, 5, 4, 3],
      [5, 4, 3, 2, 1, 2, 0],
      [0, 2, 3, 5, 4, 3, 2, 0],
      [3, 5, 4, 5, 7, 6, 5],
    ];

    let phraseIdx = 0;
    let noteIdx = 0;

    const tick = () => {
      if (!this.isPlaying) return;
      const currentPhrase = melodyPhrases[phraseIdx];
      const noteDegree = currentPhrase[noteIdx];
      const freq = scale[noteDegree];

      this.playNadaswaramNote(freq, 0.7);

      noteIdx++;
      if (noteIdx >= currentPhrase.length) {
        noteIdx = 0;
        phraseIdx = (phraseIdx + 1) % melodyPhrases.length;
        // Pause between phrases with a delicate temple bell
        this.playTempleBell(880);
        this.melodyTimer = setTimeout(tick, 1800);
      } else {
        this.melodyTimer = setTimeout(tick, 650);
      }
    };

    tick();
  }

  start() {
    this.init();
    this.isPlaying = true;
    this.startTanpura();
    this.startMelody();
    this.playTempleBell(1046.5);
  }

  stop() {
    this.isPlaying = false;
    clearTimeout(this.melodyTimer);
    clearTimeout(this.bellTimer);
    this.tanpuraOscs.forEach(({ osc, lfo }) => {
      try {
        osc.stop();
        lfo.stop();
      } catch (e) {}
    });
    this.tanpuraOscs = [];
  }

  setVolume(val) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(val * 0.4, this.ctx.currentTime);
    }
  }
}

export const weddingAudio = new WeddingAudioPlayer();

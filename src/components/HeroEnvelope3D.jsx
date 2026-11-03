import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, Clock, MapPin, Heart, Volume2, ArrowDown, ChevronRight } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';

export default function HeroEnvelope3D({ onMusicStart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Trigger festive auspicious flower shower confetti (saffron, marigold, gold, white)
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FF9800', '#FFD700', '#FFFDF4', '#8A1C14'],
      });
      weddingAudio.start();
      if (onMusicStart) onMusicStart(true);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Auspicious Traditional Invocation Header */}
      <div className="text-center z-10 mb-6 transition-all duration-700 animate-fadeIn">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50/90 border border-amber-300/60 shadow-sm backdrop-blur-sm mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-900 font-serif">
            || ശ്രീ ഗണേശായ നമഃ || ശുഭവിവാഹം ||
          </span>
        </div>
        <p className="text-sm md:text-base font-serif italic text-amber-950/80 max-w-lg mx-auto">
          "മാംഗല്യം തന്തുനാനേന മമ ജീവന ഹേതുനാ..."<br/>
          With the blessings of our ancestors and elders, we celebrate a sacred union.
        </p>
      </div>

      {/* 3D Interactive Invitation Stage */}
      <div
        className="relative z-10 w-full max-w-xl perspective-1500 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleOpen}
      >
        <div
          className={`relative transition-all duration-1000 preserve-3d ${
            isOpen ? 'scale-100' : 'hover:scale-[1.02]'
          }`}
          style={{
            transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
            boxShadow: isOpen
              ? '0 30px 60px -15px rgba(212, 175, 55, 0.35)'
              : '0 20px 40px -10px rgba(184, 134, 11, 0.25)',
          }}
        >
          {/* Main Card Container */}
          <div className="relative bg-gradient-to-br from-[#FFFDF8] via-[#FAF5E8] to-[#F5ECE0] rounded-2xl p-6 sm:p-10 border-2 border-amber-400/50 shadow-2xl overflow-hidden kasavu-border kasavu-border-bottom">
            {/* Kerala Traditional Kasavu Gold Corner Accents */}
            <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-amber-500/80 rounded-tl pointer-events-none" />
            <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-amber-500/80 rounded-tr pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-amber-500/80 rounded-bl pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-amber-500/80 rounded-br pointer-events-none" />

            {/* Glowing Nilavilakku (Kerala Oil Lamp) Emblem */}
            <div className="flex justify-center mb-4">
              <div className="relative w-16 h-20 flex items-center justify-center">
                {/* Flame */}
                <div className="absolute top-0 w-4 h-6 bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 rounded-full lamp-flame filter drop-shadow-md" />
                {/* Traditional Brass Lamp Body */}
                <svg className="w-14 h-16 mt-3 text-amber-700" viewBox="0 0 64 64" fill="currentColor">
                  {/* Oil Cup */}
                  <path d="M22 24 C22 20, 42 20, 42 24 C42 27, 36 29, 32 30 C28 29, 22 27, 22 24 Z" fill="#D4AF37" />
                  {/* Stem and rings */}
                  <rect x="30" y="29" width="4" height="22" fill="#B8860B" />
                  <ellipse cx="32" cy="36" rx="6" ry="2" fill="#D4AF37" />
                  <ellipse cx="32" cy="44" rx="7" ry="2.5" fill="#D4AF37" />
                  {/* Pedestal Base */}
                  <path d="M20 54 C24 50, 40 50, 44 54 L46 58 C46 60, 18 60, 18 58 Z" fill="#996515" />
                </svg>
              </div>
            </div>

            {/* Couple Announcement */}
            <div className="text-center space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-800 font-serif font-semibold">
                Together with their families
              </p>

              <div className="py-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-amber-950">
                  <span className="block gold-text-gradient drop-shadow-sm font-serif">
                    Abhin Rag
                  </span>
                  <span className="inline-block my-1 text-2xl sm:text-3xl font-script text-amber-700/90 font-normal">
                    weds
                  </span>
                  <span className="block gold-text-gradient drop-shadow-sm font-serif">
                    Arathi
                  </span>
                </h1>
              </div>

              {/* Family Lineage Details */}
              <div className="pt-2 pb-1 text-xs sm:text-sm text-stone-700 font-serif leading-relaxed">
                <p>
                  <strong className="text-amber-950 font-semibold">Groom:</strong> S/o Sri. Raghuraman & Smt. Mini (Kozhikode)
                </p>
                <p>
                  <strong className="text-amber-950 font-semibold">Bride:</strong> D/o Dr. Somanathan & Smt. Radhika (Ernakulam)
                </p>
              </div>

              {/* Decorative Floral Divider */}
              <div className="flex items-center justify-center gap-3 my-4">
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400" />
                <span className="text-amber-600">❀ ❦ ❀</span>
                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400" />
              </div>

              {/* Key Event Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-stone-800">
                <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/70 shadow-sm flex flex-col items-center">
                  <Calendar className="w-5 h-5 text-amber-700 mb-1" />
                  <span className="text-xs font-semibold text-amber-950 uppercase tracking-wider">Auspicious Date</span>
                  <span className="text-sm font-serif font-bold text-amber-900">Sunday, May 17, 2026</span>
                  <span className="text-[11px] text-amber-700/80">Midhunam 3, 1201 (ME)</span>
                </div>

                <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/70 shadow-sm flex flex-col items-center">
                  <Clock className="w-5 h-5 text-amber-700 mb-1" />
                  <span className="text-xs font-semibold text-amber-950 uppercase tracking-wider">Muhurtham</span>
                  <span className="text-sm font-serif font-bold text-amber-900">09:45 AM – 10:30 AM</span>
                  <span className="text-[11px] text-amber-700/80">Chithira Nakshatram</span>
                </div>

                <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/70 shadow-sm flex flex-col items-center">
                  <MapPin className="w-5 h-5 text-amber-700 mb-1" />
                  <span className="text-xs font-semibold text-amber-950 uppercase tracking-wider">The Mandapam</span>
                  <span className="text-sm font-serif font-bold text-amber-900">Gokulam Pavilion</span>
                  <span className="text-[11px] text-amber-700/80">Kaloor, Kochi, Kerala</span>
                </div>
              </div>

              {/* Interactive Unfolding Action */}
              {!isOpen ? (
                <div className="pt-5">
                  <button
                    type="button"
                    className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-amber-50 font-serif font-semibold text-sm tracking-widest uppercase shadow-lg shadow-amber-900/20 hover:shadow-xl hover:from-amber-600 hover:to-amber-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
                    <span>Unfold Royal Invitation</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[11px] text-amber-800/70 mt-2 font-serif italic">
                    Tap to unseal the card & play sacred nadaswaram ragas
                  </p>
                </div>
              ) : (
                <div className="pt-4 animate-fadeIn">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200 text-xs font-serif">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Invitation Unsealed • Nadaswaram Harmonies Playing</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#ceremonies"
        className="mt-12 flex flex-col items-center gap-2 text-amber-800/80 hover:text-amber-950 transition-colors z-10"
      >
        <span className="text-xs font-serif uppercase tracking-widest">Explore Wedding Events & Feast</span>
        <div className="w-8 h-8 rounded-full border border-amber-400/60 flex items-center justify-center animate-bounce bg-white/60">
          <ArrowDown className="w-4 h-4 text-amber-800" />
        </div>
      </a>
    </section>
  );
}

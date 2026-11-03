import React, { useState } from 'react';
import { Heart, Sparkles, Compass, MapPin, Feather, Music, Award } from 'lucide-react';

export default function CoupleStory() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      year: 'Dec 2024',
      title: 'A Sulaimani by Marine Drive',
      malayalam: 'ആദ്യ കൂടിക്കാഴ്ച',
      location: 'Kochi, Kerala',
      desc: 'Introduced through cherished family bonds, our first conversation started over hot spiced Sulaimani tea overlooking the gentle Arabian sea waves at Marine Drive. What was meant to be a 20-minute hello turned into three hours of laughter, dreams, and an unspoken sense of home.',
    },
    {
      year: 'April 2025',
      title: 'The Rhythm of the Melam',
      malayalam: 'മേളവും സംഗീതവും',
      location: 'Thrissur Vadakkumnathan',
      desc: 'Standing amidst the thunderous beats of the Panchavadyam and temple bells, we realized our deep shared reverence for Kerala’s timeless arts—her classical dance and his passion for storytelling and heritage.',
    },
    {
      year: 'Nov 2025',
      title: 'Golden Sunset on Vembanad Lake',
      malayalam: 'വേമ്പനാട്ടു കായലിലെ വാഗ്ദാനം',
      location: 'Alleppey Backwaters',
      desc: 'As golden twilight mirrored across the tranquil backwaters and temple conch shells echoed in the distance, Abhin asked the question that changed everything. With smiles, tears of joy, and our parents’ joyful consent, our forever began.',
    },
    {
      year: 'May 2026',
      title: 'The Sacred Thalikettu & Forever',
      malayalam: 'മംഗല്യസൂത്രം',
      location: 'Gokulam Mandapam, Kochi',
      desc: 'Surrounded by fragrant jasmine garlands, glowing brass nilavilakkus, and the warm smiles of everyone we love, we step into our new dawn hand in hand.',
    },
  ];

  return (
    <section id="story" className="py-20 px-4 relative z-10 bg-amber-50/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-serif uppercase tracking-widest mb-3">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
            <span>The Bride & Groom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-3">
            Two Souls, One Divine Journey
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-amber-900/80 max-w-xl mx-auto">
            "സ്നേഹപൂർവ്വം നമ്മൾ ഒന്നാകുന്ന പുണ്യ നിമിഷം..."
          </p>
        </div>

        {/* 3D Couple Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Groom: Abhin Rag */}
          <div className="relative group perspective-1000">
            <div className="relative bg-gradient-to-br from-[#FFFDF9] via-[#FAF4E6] to-[#F5EAD2] rounded-3xl p-8 border-2 border-amber-300/80 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 preserve-3d">
              {/* Kerala Motif Corner */}
              <div className="absolute top-4 right-4 text-amber-500/30 text-4xl font-serif select-none">
                ॐ
              </div>

              {/* Avatar / Portrait Styling */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md bg-gradient-to-tr from-amber-700 to-amber-500 flex items-center justify-center text-amber-50">
                  <span className="text-3xl font-serif font-bold">AR</span>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]" />
                </div>
                <div>
                  <span className="text-xs font-serif uppercase tracking-widest text-amber-700 font-semibold">
                    The Groom • വരൻ
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950">
                    Abhin Rag
                  </h3>
                  <p className="text-xs text-amber-900/80 font-serif mt-0.5">
                    Senior Software Architect & Technologist
                  </p>
                  <p className="text-xs text-stone-600 font-medium flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-amber-600" /> Kozhikode, Kerala
                  </p>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-3 text-sm text-stone-700 font-serif leading-relaxed border-t border-amber-200/80 pt-4">
                <p>
                  A visionary technologist with a calm soul, Abhin blends cutting-edge engineering with a profound love for Kerala’s temple architecture, soulful Carnatic violin melodies, and early morning bike rides along the Malabar coastline.
                </p>
                <div className="p-3 bg-white/70 rounded-xl border border-amber-200/70 text-xs">
                  <strong className="text-amber-950 font-semibold block mb-0.5">Family Heritage:</strong>
                  Son of Sri. <strong>Raghuraman</strong> (Retd. Chief Engineer) &amp; Smt. <strong>Mini Raghuraman</strong> (Educator), "Sreepadmam", Kozhikode.
                </div>
              </div>
            </div>
          </div>

          {/* Bride: Arathi */}
          <div className="relative group perspective-1000">
            <div className="relative bg-gradient-to-br from-[#FFFDF9] via-[#FAF4E6] to-[#F5EAD2] rounded-3xl p-8 border-2 border-amber-300/80 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 preserve-3d">
              {/* Kerala Motif Corner */}
              <div className="absolute top-4 right-4 text-amber-500/30 text-4xl font-serif select-none">
                ശ്രീ
              </div>

              {/* Avatar / Portrait Styling */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-amber-50">
                  <span className="text-3xl font-serif font-bold">A</span>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent)]" />
                </div>
                <div>
                  <span className="text-xs font-serif uppercase tracking-widest text-amber-700 font-semibold">
                    The Bride • വധു
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950">
                    Arathi
                  </h3>
                  <p className="text-xs text-amber-900/80 font-serif mt-0.5">
                    Pediatrician &amp; Classical Mohiniyattam Dancer
                  </p>
                  <p className="text-xs text-stone-600 font-medium flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-amber-600" /> Ernakulam, Kerala
                  </p>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-3 text-sm text-stone-700 font-serif leading-relaxed border-t border-amber-200/80 pt-4">
                <p>
                  Graceful, compassionate, and vivacious, Arathi dedicates her days to healing children and her evenings to classical dance expressions. She loves the scent of fresh mullapoo (jasmine), filter coffee, and Kerala monsoon rains.
                </p>
                <div className="p-3 bg-white/70 rounded-xl border border-amber-200/70 text-xs">
                  <strong className="text-amber-950 font-semibold block mb-0.5">Family Heritage:</strong>
                  Daughter of Dr. <strong>Somanathan</strong> (Senior Consultant Physician) &amp; Smt. <strong>Radhika Somanathan</strong>, "Anandam", Ernakulam.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Story Timeline with 3D Depth */}
        <div className="relative">
          <div className="text-center mb-8">
            <span className="text-xs font-serif uppercase tracking-widest text-amber-800 font-semibold">
              Our Journey of Love
            </span>
            <h3 className="text-2xl font-serif font-bold text-amber-950">
              Moments That Led Us To Today
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stories.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStory(idx)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                  activeStory === idx
                    ? 'bg-amber-100/90 border-amber-500 shadow-lg -translate-y-1 ring-2 ring-amber-400/40'
                    : 'bg-white/80 border-amber-200/70 hover:bg-amber-50/70 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-800 px-2 py-0.5 rounded-md bg-amber-200/60 font-serif">
                    {item.year}
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-600" /> {item.location}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-amber-950 text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-amber-700 font-malayalam mb-2">
                  {item.malayalam}
                </p>
                <p className="text-xs text-stone-600 font-serif leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Expanded Selected Story Display */}
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-amber-100/70 via-amber-50/90 to-amber-100/70 border border-amber-300 shadow-sm text-center">
            <span className="text-xs font-serif uppercase tracking-wider text-amber-800 font-semibold block mb-1">
              Chapter: {stories[activeStory].year} — {stories[activeStory].location}
            </span>
            <h4 className="text-xl font-serif font-bold text-amber-950 mb-2">
              "{stories[activeStory].title}"
            </h4>
            <p className="text-sm font-serif text-stone-800 max-w-2xl mx-auto leading-relaxed">
              {stories[activeStory].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

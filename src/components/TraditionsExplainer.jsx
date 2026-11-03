import React from 'react';
import { Heart, Sparkles, Sun, Shield, Compass } from 'lucide-react';

export default function TraditionsExplainer() {
  const rituals = [
    {
      title: "Thalikettu",
      malayalam: "താലികെട്ട് (മംഗല്യധാരണം)",
      icon: Heart,
      desc: "The sacred heart of the Kerala wedding. Amidst thunderous Panchavadyam beats, chanting of mantras, and sounding of the holy conch, Abhin ties the golden Thali around Arathi’s neck with three knots, sealing an eternal bond of souls.",
    },
    {
      title: "Pudavamuri",
      malayalam: "പുടവമുറി (വസ്ത്രദാനം)",
      icon: Shield,
      desc: "The groom lovingly presents the bride with an auspicious new traditional Kasavu saree (Pudava). This ancient Vedic rite symbolizes his solemn pledge to cherish, protect, and stand by her as an equal partner through all seasons of life.",
    },
    {
      title: "Maala Maattal",
      malayalam: "മാല മാറ്റൽ",
      icon: Sparkles,
      desc: "The exchange of fragrant, handcrafted garlands made of fresh white jasmine blossoms (mullapoo) and lotus buds, symbolizing mutual acceptance, respect, and eternal devotion.",
    },
    {
      title: "Pradakshinam Around the Nilavilakku",
      malayalam: "നിലവിളക്കിന് വലംവെക്കൽ",
      icon: Sun,
      desc: "Holding hands, the newlyweds circumambulate the glowing sacred bronze Nilavilakku three times, invoking Agni and divine grace as witnesses to their new shared journey together.",
    }
  ];

  return (
    <section className="py-20 px-4 relative z-10 bg-amber-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-serif uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Sacred Rites</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-3">
            Sacred Kerala Wedding Rituals
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-amber-900/80 max-w-xl mx-auto">
            "ആചാരങ്ങളുടെ പവിത്രതയോടെ ഒരു പുതിയ തുടക്കം..."<br />
            Understanding the timeless meaning behind our Vedic rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rituals.map((ritual, idx) => {
            const Icon = ritual.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#FFFDF9] via-[#FAF5E7] to-[#F5EAD4] rounded-2xl p-6 border-2 border-amber-300/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 kasavu-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-200/70 border border-amber-400 flex items-center justify-center text-amber-800">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-amber-950">
                      {ritual.title}
                    </h3>
                    <p className="text-xs font-malayalam text-amber-800 font-semibold">
                      {ritual.malayalam}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 font-serif leading-relaxed">
                  {ritual.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

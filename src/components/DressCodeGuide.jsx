import React from 'react';
import { Shirt, Sparkles, Check, AlertCircle } from 'lucide-react';

export default function DressCodeGuide() {
  const outfits = [
    {
      gender: "For Gentlemen • പുരുഷന്മാർക്ക്",
      title: "The Regal Kerala Kasavu & Silk",
      subtitle: "Traditional & Elegant",
      imageTag: "Kasavu Mundu & Kurta",
      bgColor: "from-amber-50 to-amber-100/60",
      recs: [
        { label: "Morning Muhurtham", text: "Traditional Kasavu Mundu (Dhoti with gold zari border) paired with an off-white, cream, or pastel raw-silk Kurta with Melmundu." },
        { label: "Sangeet & Evening Reception", text: "Classic Kurta Pajama with embroidered Nehru Jacket, Bandhgala, or tailored formal suits." },
        { label: "Footwear Note", text: "Comfortable traditional mojaris/slip-ons. Footwear is respectfully removed prior to entering the sacred Mandapam pavilion." }
      ],
      colors: [
        { name: "Kasavu Cream", hex: "#FFFDF0" },
        { name: "Zari Gold", hex: "#D4AF37" },
        { name: "Warm Amber", hex: "#E67E22" },
        { name: "Raw Silk Sand", hex: "#D2B48C" }
      ]
    },
    {
      gender: "For Ladies • സ്ത്രീകൾക്ക്",
      title: "The Divine Grace of Kerala Silk & Jasmine",
      subtitle: "Kasavu Sarees & Kanchipuram Silks",
      imageTag: "Set-Mundu & Temple Jewelry",
      bgColor: "from-amber-50 to-rose-50/70",
      recs: [
        { label: "Morning Muhurtham", text: "Authentic Kerala Kasavu Saree or Set-Mundu (Mundum Neriyathum) or pure Kanchipuram Silk with traditional temple jewelry." },
        { label: "Hair & Fragrance", text: "Fresh fragrant string of white Mullapoo (jasmine blossoms) gracefully woven into the hair." },
        { label: "Sangeet & Evening Gala", text: "Opulent Banarasi, Organza sarees, Indo-Western gowns, or festive lehengas." }
      ],
      colors: [
        { name: "Kasavu Ivory", hex: "#FFFEE9" },
        { name: "Temple Vermilion", hex: "#A91D22" },
        { name: "Peacock Green", hex: "#116952" },
        { name: "Haldi Yellow", hex: "#F59E0B" }
      ]
    }
  ];

  return (
    <section id="dresscode" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-serif uppercase tracking-widest mb-3">
            <Shirt className="w-3.5 h-3.5 text-amber-700" />
            <span>Attire &amp; Aesthetics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-3">
            Traditional Dress Code Guide
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-amber-900/80 max-w-xl mx-auto">
            "കേരളീയ പാരമ്പര്യ വസ്ത്രധാരണത്തിൽ പങ്കുചേരൂ..."<br />
            Join us in the timeless grace of Kerala Kasavu and temple silks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {outfits.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.bgColor} rounded-3xl p-7 border-2 border-amber-300/80 shadow-lg kasavu-border relative overflow-hidden`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-serif uppercase tracking-widest font-bold text-amber-900 px-3 py-1 bg-white/80 rounded-full border border-amber-200">
                  {item.gender}
                </span>
                <Sparkles className="w-4 h-4 text-amber-600" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-amber-950 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-amber-800 font-serif mb-5 italic">
                {item.subtitle}
              </p>

              {/* Recommendations */}
              <div className="space-y-3 mb-6">
                {item.recs.map((rec, rIdx) => (
                  <div key={rIdx} className="bg-white/80 rounded-xl p-3 border border-amber-200/70 text-xs font-serif">
                    <span className="font-bold text-amber-950 block mb-0.5">
                      {rec.label}
                    </span>
                    <span className="text-stone-700 leading-relaxed">
                      {rec.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Recommended Color Swatches */}
              <div className="pt-3 border-t border-amber-200/80">
                <span className="text-[11px] font-serif uppercase tracking-wider text-amber-900 font-semibold block mb-2">
                  Auspicious Palette:
                </span>
                <div className="flex items-center gap-3">
                  {item.colors.map((c, cIdx) => (
                    <div key={cIdx} className="flex flex-col items-center gap-1">
                      <div
                        className="w-7 h-7 rounded-full border border-stone-300 shadow-sm"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                      <span className="text-[9px] text-stone-600 font-serif text-center">
                        {c.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Traditional Culture Etiquette Notice */}
        <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-300 flex items-start gap-3 text-xs font-serif text-stone-700 max-w-2xl mx-auto shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong className="text-amber-950">Auspicious Tradition:</strong> In keeping with Kerala temple customs, we warmly invite guests to embrace vibrant, festive, and cream/gold tones for the sacred morning muhurtham.
          </p>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Utensils, Sparkles, Award, Heart, Info, ChevronRight } from 'lucide-react';

export default function SadyaInteractive3D() {
  const [selectedDish, setSelectedDish] = useState(0);

  const dishes = [
    {
      id: 0,
      name: 'Palada Pradhaman',
      malayalam: 'പാലട പ്രഥമൻ',
      tag: 'The Emperor of Payasams',
      flavor: 'Sweet, Caramelized, Rich',
      desc: 'Slow-simmered for 5 hours until the milk naturally caramelizes into a divine blush-pink nectar, loaded with soft rice ada. The crown jewel of any Kerala wedding banquet.',
      proTip: 'Crush a crispy pappadam and sweet yellow banana into this warm payasam for the quintessential Kerala feast climax!'
    },
    {
      id: 1,
      name: 'Parippu & Golden Neyyu',
      malayalam: 'പരിപ്പും നെയ്യും',
      tag: 'The First Course',
      flavor: 'Comforting, Nutty, Buttery',
      desc: 'Cooked small yellow moong lentils mashed smooth with cumin and coconut, served atop steaming red Kerala Matta rice with a generous spoonful of bubbling cow ghee.',
      proTip: 'Always eaten first with crushed papadum to awaken your palate.'
    },
    {
      id: 2,
      name: 'Avial',
      malayalam: 'അവിയൽ',
      tag: 'Grand Vegetable Melange',
      flavor: 'Mildly sour, Coconutty, Earthy',
      desc: 'Thirteen traditional Kerala vegetables gently cooked together with sour curd, coarse grated fresh coconut, green chilies, and finished with fragrant raw cold-pressed coconut oil and fresh curry leaves.',
      proTip: 'According to folklore, Avial was first invented by Bhima during the Pandavas exile in King Virata’s kitchen.'
    },
    {
      id: 3,
      name: 'Olan',
      malayalam: 'ഓലൻ',
      tag: 'Subtle Perfection',
      flavor: 'Delicate, Sweet-scented, Soothing',
      desc: 'Ash gourd (Kumbalanga) and red black-eyed peas gently simmered in pure virgin coconut milk and tempered only with green chilies and fresh curry leaves. Zero harsh spices.',
      proTip: 'Provides a refreshing, cooling balance to the spices of the sadya.'
    },
    {
      id: 4,
      name: 'Puli Inji / Inji Curry',
      malayalam: 'പുളിയിഞ്ചി (ഇഞ്ചിപ്പുളി)',
      tag: 'Equivalent to 100 Curries',
      flavor: 'Spicy, Sweet, Tangy, Piquant',
      desc: 'Deep-fried golden ginger slivers simmered in dark wild tamarind pulp, spiced with green chilies and sweetened with aged organic jaggery.',
      proTip: 'Tradition says: "ഇഞ്ചിപ്പുളി ഉണ്ടെങ്കിൽ നൂറുകൂട്ടം കറിക്ക് തുല്യം" (A dollop of Puli Inji equals a hundred curries for digestion).'
    },
    {
      id: 5,
      name: 'Kaalan',
      malayalam: 'കാളൻ',
      tag: 'Sour-Pepper Harmony',
      flavor: 'Tangy, Peppery, Thick Yogurt',
      desc: 'Elephant foot yam (Chena) and raw plantain slow-cooked in sour curd and thick roasted coconut paste with cracked black Tellicherry peppercorns.',
      proTip: 'Cooked until virtually moisture-free, Kaalan has an extraordinary shelf life and deep probiotic richness.'
    },
    {
      id: 6,
      name: 'Kaya Varuthathu & Sharkara Upperi',
      malayalam: 'കായ വറുത്തതും ശർക്കര ഉപ്പേരിയും',
      tag: 'Crispy Kerala Signatures',
      flavor: 'Crispy, Salty, Cardamom-Ginger Jaggery',
      desc: 'Golden thin plantain crisps fried in authentic coconut oil, accompanied by thick quarter-cut plantain wedges coated in caramelized jaggery, dried ginger (chukku), and powdered cumin.',
      proTip: 'Placed on the bottom-left corner of the plantain leaf to greet you as you sit down.'
    },
    {
      id: 7,
      name: 'Ada Pradhaman',
      malayalam: 'അട പ്രഥമൻ',
      tag: 'Jaggery & Coconut Elixir',
      flavor: 'Deep Smoky Jaggery, Cardamom',
      desc: 'Handcrafted steamed rice flour flakes bathed in reduced coconut milk and dark spiced palm jaggery, garnished with crunchy ghee-fried coconut slices and cashews.',
      proTip: 'Served after Palada as the second sweet finale course.'
    }
  ];

  return (
    <section id="sadya" className="py-20 px-4 relative z-10 bg-[#FAF6EC]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-serif uppercase tracking-widest mb-3">
            <Utensils className="w-3.5 h-3.5 text-emerald-700" />
            <span>Culinary Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-3">
            The Grand 28-Course Kalyana Sadya
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-amber-900/80 max-w-2xl mx-auto">
            "വാഴയിലയിലെ അമൃതേത്ത്..."<br />
            An authentic Kerala wedding is never complete without the joyous symphony of flavors served in sacred harmony on a fresh plantain leaf.
          </p>
        </div>

        {/* 3D Interactive Plantain Leaf Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Stylized Banana Leaf (7 cols) */}
          <div className="lg:col-span-7 relative perspective-1000">
            <div className="relative bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 rounded-[40px] p-6 sm:p-10 shadow-2xl border-4 border-emerald-800/80 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
              {/* Plantain Leaf Midrib and Veins */}
              <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-emerald-500/60 shadow-sm pointer-events-none transform -translate-y-1/2" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.04)_20px,rgba(255,255,255,0.04)_40px)] pointer-events-none" />

              <div className="relative z-10 text-center mb-6">
                <span className="text-xs uppercase tracking-widest font-serif font-semibold text-emerald-100/90 bg-emerald-900/60 px-4 py-1 rounded-full border border-emerald-400/40">
                  Interactive Leaf • Click any dish to explore
                </span>
              </div>

              {/* Plantain Leaf Layout Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
                {dishes.map((dish, idx) => {
                  const isSelected = selectedDish === idx;
                  return (
                    <button
                      key={dish.id}
                      type="button"
                      onClick={() => setSelectedDish(idx)}
                      className={`relative group p-3 rounded-2xl text-left transition-all duration-300 ${
                        isSelected
                          ? 'bg-amber-50 shadow-xl ring-4 ring-amber-400 transform -translate-y-1 scale-105'
                          : 'bg-emerald-900/50 hover:bg-emerald-900/80 border border-emerald-400/30 text-emerald-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-amber-200 text-amber-900' : 'bg-emerald-800 text-emerald-200'
                        }`}>
                          #{idx + 1}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          isSelected ? 'bg-amber-600 animate-ping' : 'bg-emerald-400'
                        }`} />
                      </div>

                      <h4 className={`text-xs font-serif font-bold leading-tight ${
                        isSelected ? 'text-amber-950' : 'text-emerald-100'
                      }`}>
                        {dish.name}
                      </h4>
                      <p className={`text-[10px] font-malayalam mt-0.5 ${
                        isSelected ? 'text-amber-800' : 'text-emerald-300'
                      }`}>
                        {dish.malayalam}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Leaf Bottom Label */}
              <div className="mt-6 pt-4 border-t border-emerald-500/40 flex items-center justify-between text-xs text-emerald-100 font-serif">
                <span>✦ Tip: Top row for curries & pickles</span>
                <span>Bottom row for Rice & Payasams ✦</span>
              </div>
            </div>
          </div>

          {/* Right: Selected Dish Detail Spotlight (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#FFFDF9] via-[#FAF5E7] to-[#F5EAD4] rounded-3xl p-6 sm:p-8 border-2 border-amber-300/80 shadow-xl kasavu-border relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-serif uppercase tracking-widest text-amber-800 font-semibold px-3 py-1 rounded-full bg-amber-100 border border-amber-300">
                  {dishes[selectedDish].tag}
                </span>
                <span className="text-xs font-serif font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Taste: {dishes[selectedDish].flavor}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950 mb-1">
                {dishes[selectedDish].name}
              </h3>
              <p className="text-sm font-malayalam font-semibold text-amber-800 mb-4">
                {dishes[selectedDish].malayalam}
              </p>

              <div className="p-4 bg-white/80 rounded-2xl border border-amber-200/80 mb-5">
                <p className="text-xs sm:text-sm text-stone-700 font-serif leading-relaxed">
                  {dishes[selectedDish].desc}
                </p>
              </div>

              {/* Cultural Pro-Tip */}
              <div className="p-4 bg-gradient-to-r from-amber-100/90 to-amber-50 rounded-2xl border border-amber-300/80">
                <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-xs uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Sadya Etiquette &amp; Secret:</span>
                </div>
                <p className="text-xs text-amber-950 font-serif leading-relaxed italic">
                  "{dishes[selectedDish].proTip}"
                </p>
              </div>

              {/* Quick Navigation Between Dishes */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-amber-200 text-xs font-serif">
                <button
                  type="button"
                  onClick={() => setSelectedDish((prev) => (prev > 0 ? prev - 1 : dishes.length - 1))}
                  className="text-amber-800 hover:text-amber-950 font-semibold"
                >
                  ← Previous Dish
                </button>
                <span className="text-stone-500 font-medium">
                  {selectedDish + 1} of {dishes.length}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedDish((prev) => (prev < dishes.length - 1 ? prev + 1 : 0))}
                  className="text-amber-800 hover:text-amber-950 font-semibold"
                >
                  Next Dish →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

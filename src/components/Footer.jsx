import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#FAF4E6] to-[#F0E4CA] text-stone-800 pt-16 pb-12 px-4 border-t-2 border-amber-300 kasavu-border">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Sacred Shloka */}
        <div className="space-y-2">
          <p className="text-sm sm:text-base font-serif font-bold text-amber-900 tracking-wider">
            || ॐ സർവ്വേ ഭവന്തു സുഖിനഃ സർവ്വേ സന്തു നിരാമയാഃ ||
          </p>
          <p className="text-xs font-serif italic text-stone-600 max-w-lg mx-auto">
            "May all beings everywhere be happy, healthy, and blessed with peace."
          </p>
        </div>

        {/* Family Gratitude Signatures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-amber-300/60 max-w-3xl mx-auto text-xs font-serif">
          <div className="p-4 bg-white/60 rounded-2xl border border-amber-200">
            <h4 className="font-bold text-amber-950 text-sm mb-1">
              The Groom’s Family
            </h4>
            <p className="text-stone-700">
              Sri. <strong>Raghuraman</strong> &amp; Smt. <strong>Mini Raghuraman</strong>
            </p>
            <p className="text-stone-500 mt-1">
              "Sreepadmam", Bilathikulam, Kozhikode, Kerala
            </p>
          </div>

          <div className="p-4 bg-white/60 rounded-2xl border border-amber-200">
            <h4 className="font-bold text-amber-950 text-sm mb-1">
              The Bride’s Family
            </h4>
            <p className="text-stone-700">
              Dr. <strong>Somanathan</strong> &amp; Smt. <strong>Radhika Somanathan</strong>
            </p>
            <p className="text-stone-500 mt-1">
              "Anandam", Panampilly Nagar, Ernakulam, Kerala
            </p>
          </div>
        </div>

        {/* Wedding Hospitality Helplines */}
        <div className="pt-4 text-xs font-serif text-stone-600 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>Hospitality Desk: +91 94471 23456 / +91 98470 65432</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-amber-700" />
            <span>celebrate@abhin-weds-arathi.com</span>
          </div>
        </div>

        {/* Copyright & Traditional Love */}
        <div className="pt-6 border-t border-amber-300/60 text-[11px] font-serif text-stone-600 space-y-1">
          <p className="flex items-center justify-center gap-1">
            Celebrating the union of <strong>Abhin Rag</strong> &amp; <strong>Arathi</strong>
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600 inline" />
            May 17, 2026 • Kochi, God's Own Country
          </p>
          <p className="text-stone-500">
            Designed with reverence for Kerala heritage, authentic traditions, and 3D visual harmony.
          </p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Send, MessageSquareHeart } from 'lucide-react';

export default function WishesGuestbook() {
  const initialWishes = [
    {
      id: 1,
      name: "Gopalakrishnan Uncle & Shylaja Aunty",
      relation: "Family Elder (Thrissur)",
      blessing: "ദീർഘ സുമംഗലീ ഭവ! May Lord Guruvayurappan shower His choicest blessings upon Abhin and Arathi. Wishing both of you a life filled with health, harmony, and eternal joy.",
      date: "Just now",
      likes: 12
    },
    {
      id: 2,
      name: "Dr. Ananya & Rohit",
      relation: "Childhood Friends (Kochi)",
      blessing: "From studying anatomy together to seeing you as the most gorgeous bride, Arathi! Abhin, take care of our dancer girl. Can't wait for the Chenda Melam and Palada payasam!",
      date: "2 hours ago",
      likes: 9
    },
    {
      id: 3,
      name: "Siddharth & Team",
      relation: "Architect Colleagues",
      blessing: "Congratulations Abhin & Arathi! Wishing the greatest architect a lifetime of building memories, adventures, and endless happiness together. Heartiest cheers from Bangalore!",
      date: "Yesterday",
      likes: 15
    }
  ];

  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('wedding_wishes');
    return saved ? JSON.parse(saved) : initialWishes;
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Friend & Well-wisher');
  const [blessing, setBlessing] = useState('');

  const quickBlessings = [
    "ദീർഘ സുമംഗലീ ഭവ! 🌸",
    "ഹൃദയം നിറഞ്ഞ വിവാഹമംഗളാശംസകൾ! 💖",
    "May Lord Guruvayurappan bless your union with peace & abundance! 🪔",
    "Wishing you both eternal love, laughter & sweet Payasam moments! ✨"
  ];

  const handlePostWish = (e) => {
    e.preventDefault();
    if (!name.trim() || !blessing.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      relation: relation.trim() || 'Well-wisher',
      blessing: blessing.trim(),
      date: 'Just now',
      likes: 1
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding_wishes', JSON.stringify(updated));

    setName('');
    setBlessing('');

    // Trigger flower confetti shower
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#FF9800', '#F43F5E', '#10B981']
    });
  };

  const handleLike = (id) => {
    const updated = wishes.map((w) =>
      w.id === id ? { ...w, likes: w.likes + 1 } : w
    );
    setWishes(updated);
    localStorage.setItem('wedding_wishes', JSON.stringify(updated));

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#F43F5E', '#D4AF37']
    });
  };

  const showerPetals = () => {
    confetti({
      particleCount: 90,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#D4AF37', '#FF9800', '#FFD700', '#FFF']
    });
  };

  return (
    <section id="wishes" className="py-20 px-4 relative z-10 bg-[#FAF7F0]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-serif uppercase tracking-widest mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-amber-700" />
            <span>Blessings Wall</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-3">
            Words of Love &amp; Blessings
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-amber-900/80 max-w-xl mx-auto">
            "നിങ്ങളുടെ അനുഗ്രഹങ്ങൾ ഞങ്ങളുടെ വഴികാട്ടിയാണ്..."<br />
            Leave your warm prayer or blessing for the bride and groom.
          </p>

          <div className="mt-4">
            <button
              type="button"
              onClick={showerPetals}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-amber-50 font-serif text-xs font-semibold tracking-wider shadow-md transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Shower Flower Petals 🌸</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#FFFDF9] via-[#FAF5E7] to-[#F5EAD4] rounded-3xl p-6 sm:p-7 border-2 border-amber-300/80 shadow-xl kasavu-border">
            <h3 className="text-xl font-serif font-bold text-amber-950 mb-1">
              Send Your Auspicious Wishes
            </h3>
            <p className="text-xs text-amber-800 font-serif mb-4">
              Your message will be displayed on the wedding screen for Abhin &amp; Arathi.
            </p>

            <form onSubmit={handlePostWish} className="space-y-4">
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-amber-950 font-bold mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Varma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-serif text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-amber-950 font-bold mb-1">
                  Relationship / City
                </label>
                <input
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="e.g. Cousin, Calicut / College Friend"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-serif text-xs sm:text-sm"
                />
              </div>

              {/* Quick Blessings Chips */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-amber-950 font-bold mb-1">
                  Quick Blessings:
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {quickBlessings.map((qb, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setBlessing(qb)}
                      className="text-[11px] font-serif px-2.5 py-1 bg-white hover:bg-amber-100 rounded-lg border border-amber-200 text-stone-700 text-left"
                    >
                      {qb}
                    </button>
                  ))}
                </div>

                <textarea
                  rows="3"
                  required
                  value={blessing}
                  onChange={(e) => setBlessing(e.target.value)}
                  placeholder="Write your prayers, advice, or love..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-serif text-xs sm:text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-amber-800 hover:bg-amber-900 text-amber-50 font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-amber-300" />
                <span>Publish Blessing Wall</span>
              </button>
            </form>
          </div>

          {/* Wishes Stream Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {wishes.map((w) => (
              <div
                key={w.id}
                className="bg-white rounded-2xl p-5 border border-amber-200 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-serif font-bold text-amber-950 text-sm">
                      {w.name}
                    </h4>
                    <span className="text-[11px] text-amber-700 font-serif">
                      {w.relation} • {w.date}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleLike(w.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-full border border-rose-200 transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500" />
                    <span>{w.likes}</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 font-serif leading-relaxed italic">
                  "{w.blessing}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

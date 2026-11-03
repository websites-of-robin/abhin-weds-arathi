import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageCircle, Heart, Users, Sparkles } from 'lucide-react';

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guestCount: '2',
    events: {
      haldi: true,
      wedding: true,
      reception: true,
    },
    assistance: 'none',
    blessing: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCheckbox = (key) => {
    setFormData((prev) => ({
      ...prev,
      events: {
        ...prev.events,
        [key]: !prev.events[key],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    existing.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('wedding_rsvps', JSON.stringify(existing));

    setSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FF9800', '#10B981', '#E11D48'],
    });
  };

  // WhatsApp One-Click Dispatch
  const sendWhatsApp = () => {
    const eventsAttending = [];
    if (formData.events.haldi) eventsAttending.push('Haldi & Madhuramveppu (May 16)');
    if (formData.events.wedding) eventsAttending.push('Wedding Muhurtham & Sadya (May 17)');
    if (formData.events.reception) eventsAttending.push('Reception Gala (May 17)');

    const message = encodeURIComponent(
      `Namaskaram Abhin & Arathi! 🌸\n\nI/We are delighted to confirm our attendance for your wedding celebration!\n\n` +
      `👤 Guest Name: ${formData.name}\n` +
      `👥 Total Guests: ${formData.guestCount}\n` +
      `🎉 Attending: ${eventsAttending.join(', ')}\n` +
      `✨ Special Requests: ${formData.assistance}\n` +
      `💌 Blessing: "${formData.blessing || 'Wishing you both a lifetime of happiness!'}"\n\n` +
      `See you soon in Kochi! 🙏`
    );

    window.open(`https://wa.me/919447123456?text=${message}`, '_blank');
  };

  return (
    <section id="rsvp" className="py-20 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-serif uppercase tracking-widest mb-3">
            <Send className="w-3.5 h-3.5 text-amber-700" />
            <span>Celebrate With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-3">
            RSVP &amp; Confirm Attendance
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-amber-900/80 max-w-lg mx-auto">
            "താങ്കളുടെ സാന്നിധ്യം ഞങ്ങൾക്ക് അത്യന്തം സന്തോഷകരമായിരിക്കും..."<br />
            Kindly grace us with your confirmation by May 5, 2026.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#FFFDF9] via-[#FAF5E7] to-[#F5EAD4] rounded-3xl p-6 sm:p-10 border-2 border-amber-300/80 shadow-2xl kasavu-border">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-amber-950 font-bold mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand & Sunitha Menon"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-serif text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-amber-950 font-bold mb-1.5">
                    WhatsApp Phone / Email
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98470 12345"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-serif text-sm"
                  />
                </div>
              </div>

              {/* Number of guests */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-amber-950 font-bold mb-1.5">
                  Number of Attendees
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {['1', '2', '3', '4', '5+'].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setFormData({ ...formData, guestCount: count })}
                      className={`py-2.5 rounded-xl font-serif text-sm font-semibold transition-all ${
                        formData.guestCount === count
                          ? 'bg-amber-800 text-amber-50 shadow-md ring-2 ring-amber-500'
                          : 'bg-white text-stone-700 hover:bg-amber-100 border border-amber-300'
                      }`}
                    >
                      {count} {count === '1' ? 'Person' : 'People'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ceremonies attending */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-amber-950 font-bold mb-2">
                  Ceremonies You Will Grace
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'haldi', title: 'Haldi & Madhuramveppu', time: 'Saturday, May 16, 4:00 PM' },
                    { key: 'wedding', title: 'Wedding Muhurtham & Kalyana Sadya', time: 'Sunday, May 17, 09:45 AM' },
                    { key: 'reception', title: 'Evening Gala Reception at Bolgatty', time: 'Sunday, May 17, 06:30 PM' }
                  ].map((evt) => (
                    <label
                      key={evt.key}
                      className="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-amber-200/80 cursor-pointer hover:bg-amber-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.events[evt.key]}
                        onChange={() => handleCheckbox(evt.key)}
                        className="w-4 h-4 text-amber-600 rounded border-amber-400 focus:ring-amber-500"
                      />
                      <div className="text-xs font-serif">
                        <span className="font-bold text-amber-950 block">{evt.title}</span>
                        <span className="text-stone-500">{evt.time}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Assistance / Dietary requirements */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-amber-950 font-bold mb-1.5">
                  Accessibility / Special Support
                </label>
                <select
                  value={formData.assistance}
                  onChange={(e) => setFormData({ ...formData, assistance: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-serif text-sm"
                >
                  <option value="none">No special requirements (All good!)</option>
                  <option value="wheelchair">Senior citizen wheelchair / elevator assistance</option>
                  <option value="airport_pickup">Need information regarding airport/station cab tie-ups</option>
                  <option value="pure_veg">Strict Jain / Pure Vegan requirement</option>
                </select>
              </div>

              {/* Personal Blessing Note */}
              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-amber-950 font-bold mb-1.5">
                  Blessings &amp; Wishes for Abhin &amp; Arathi
                </label>
                <textarea
                  rows="3"
                  value={formData.blessing}
                  onChange={(e) => setFormData({ ...formData, blessing: e.target.value })}
                  placeholder="Share your warm thoughts or prayers for the couple..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-serif text-sm"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-2xl bg-amber-800 hover:bg-amber-900 text-amber-50 font-serif font-bold text-sm tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  <span>Confirm RSVP on Website</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950">
                നന്ദി! Thank You, {formData.name}!
              </h3>
              <p className="text-sm font-serif text-stone-700 max-w-md mx-auto leading-relaxed">
                Your RSVP has been joyfully recorded. We eagerly await your arrival to celebrate our sacred day together!
              </p>

              {/* WhatsApp direct dispatch button */}
              <div className="pt-4 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Confirmation via WhatsApp</span>
                </button>
                <p className="text-[11px] text-stone-500 mt-2 font-serif">
                  Sends a pre-formatted message directly to the wedding hospitality coordinator.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-serif text-amber-800 hover:text-amber-950 underline"
                >
                  Edit or submit another response
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

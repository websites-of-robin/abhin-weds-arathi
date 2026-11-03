import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Shirt, Music, Utensils, Heart } from 'lucide-react';

export default function Ceremonies3D() {
  const [flippedCard, setFlippedCard] = useState(null);

  const ceremonies = [
    {
      id: 1,
      name: 'Madhuramveppu & Haldi',
      malayalam: 'മധുരംവെപ്പും മഞ്ഞൾ കല്യാണവും',
      date: 'Saturday, May 16, 2026',
      time: '04:00 PM – 06:30 PM',
      venue: 'Anandam Heritage Lawns, Kochi',
      locationUrl: 'https://maps.google.com/?q=Marine+Drive+Kochi',
      tag: 'Pre-Wedding Celebration',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-300',
      dressCode: 'Sunlit Yellows, Floral Pastels & Kasavu accents',
      icon: Sparkles,
      desc: 'The traditional Kerala ritual of blessing the bride and groom with sweet delicacies (madhuram) and holy sandalwood/turmeric paste, surrounded by rhythmic folk songs and heartfelt laughter.',
      highlights: [
        'Auspicious sweet feeding ritual',
        'Organic turmeric & floral petal showers',
        'Traditional mehendi artists & coconut mocktails'
      ]
    },
    {
      id: 2,
      name: 'Sangeet & Sandhya Melam',
      malayalam: 'സംഗീത സായാഹ്നം',
      date: 'Saturday, May 16, 2026',
      time: '07:00 PM – 11:00 PM',
      venue: 'The Grand Ballroom, Gokulam Convention Centre',
      locationUrl: 'https://maps.google.com/?q=Gokulam+Park+Hotel+and+Convention+Centre+Kochi',
      tag: 'Musical Night & Feasting',
      tagColor: 'bg-purple-100 text-purple-800 border-purple-300',
      dressCode: 'Rich Jewel Tones, Silk Kurtas & Festive Lehengas',
      icon: Music,
      desc: 'An evening of rhythm and melody where classical Carnatic fusion meets celebratory dance performances by close family and friends, accompanied by an opulent dinner buffet.',
      highlights: [
        'Live fusion band & Chenda melam overture',
        'Couple first dance & family choreographies',
        'Gourmet Malabar & Pan-Indian dinner feast'
      ]
    },
    {
      id: 3,
      name: 'The Auspicious Wedding & Thalikettu',
      malayalam: 'ശുഭവിവാഹവും താലികെട്ടും',
      date: 'Sunday, May 17, 2026',
      time: '09:45 AM – 10:30 AM (Muhurtham)',
      venue: 'Main Mandapam, Gokulam Convention Centre',
      locationUrl: 'https://maps.google.com/?q=Gokulam+Convention+Centre+Kaloor+Kochi',
      tag: 'The Sacred Muhurtham',
      tagColor: 'bg-red-100 text-red-800 border-red-300 font-bold',
      dressCode: 'Authentic Kerala Kasavu Mundu/Kurta (Men) & Kasavu/Kanchipuram Silk Saree (Women)',
      icon: Heart,
      desc: 'The sacred union under the canopy of holy Vedic mantras. Abhin ties the golden Thali around Arathi’s neck, followed by the Pudavamuri (gifting of auspicious wedding cloth) and garland exchange.',
      highlights: [
        'Midhunam Raashi • Chithira Nakshatram',
        'Nadaswaram & Panchavadyam orchestra',
        'Pudavamuri & Sapthapadi holy rounds'
      ]
    },
    {
      id: 4,
      name: 'The Royal 28-Course Kalyana Sadya',
      malayalam: 'വിഭവസമൃദ്ധമായ കല്യാണ സദ്യ',
      date: 'Sunday, May 17, 2026',
      time: '11:30 AM – 02:30 PM',
      venue: 'Grand Dining Pavilion, Gokulam Centre',
      locationUrl: 'https://maps.google.com/?q=Gokulam+Convention+Centre+Kochi',
      tag: 'Traditional Kerala Feast',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      dressCode: 'Traditional Wedding Attire continued',
      icon: Utensils,
      desc: 'A gastronomic journey of Kerala culinary mastery served on fresh green plantain leaves, featuring Parippu with pure ghee, Avial, Olan, Kaalan, and the legendary Palada Pradhaman Payasam.',
      highlights: [
        'Served on fresh banana leaves',
        'Authentic 28 traditional dishes & crispy papadams',
        'Two distinct heavenly Payasams (Ada & Palada)'
      ]
    },
    {
      id: 5,
      name: 'Evening Reception & Gala',
      malayalam: 'വിവാഹ സൽക്കാരം',
      date: 'Sunday, May 17, 2026',
      time: '06:30 PM onwards',
      venue: 'Waterfront Lawns, Bolgatty Palace Resort, Kochi',
      locationUrl: 'https://maps.google.com/?q=Bolgatty+Palace+and+Island+Resort+Kochi',
      tag: 'Royal Reception Celebration',
      tagColor: 'bg-blue-100 text-blue-800 border-blue-300',
      dressCode: 'Black Tie, Regal Sarees, Indo-Western Silk',
      icon: Sparkles,
      desc: 'An enchanting evening overlooking the serene Kochi backwaters. Celebrating the newly wedded couple beneath illuminated fairy canopies with live acoustic music and a grand dinner.',
      highlights: [
        'Historic waterfront palace ambience',
        'Live acoustic ensemble & photo lounges',
        'Grand multi-cuisine banquet & desserts'
      ]
    }
  ];

  return (
    <section id="ceremonies" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-serif uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Ceremony Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-3">
            Auspicious Ceremonies &amp; Feasts
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-amber-900/80 max-w-xl mx-auto">
            "മംഗളകരമായ ചടങ്ങുകളിൽ താങ്കളുടെ സാന്നിധ്യവും അനുഗ്രഹവും പ്രതീക്ഷിക്കുന്നു..."
          </p>
        </div>

        {/* 3D Grid of Ceremony Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ceremonies.map((event) => {
            const Icon = event.icon;
            const isFlipped = flippedCard === event.id;

            return (
              <div
                key={event.id}
                className="relative group perspective-1000 min-h-[440px]"
              >
                <div
                  className={`w-full h-full duration-700 preserve-3d transition-all rounded-3xl ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF5E7] to-[#F5EAD3] rounded-3xl p-6 sm:p-7 border-2 border-amber-300/80 shadow-lg group-hover:shadow-2xl transition-all duration-300 flex flex-col justify-between kasavu-border">
                    {/* Header: Tag & Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${event.tagColor}`}>
                          {event.tag}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-amber-200/60 border border-amber-300 flex items-center justify-center text-amber-800">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Title & Malayalam name */}
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-950 mb-1 leading-snug">
                        {event.name}
                      </h3>
                      <p className="text-xs text-amber-800 font-malayalam font-semibold mb-4">
                        {event.malayalam}
                      </p>

                      {/* Time, Date, Venue Details */}
                      <div className="space-y-2.5 bg-white/70 rounded-2xl p-4 border border-amber-200/80 mb-4 text-xs font-serif text-stone-700">
                        <div className="flex items-start gap-2.5">
                          <Calendar className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-amber-950 block">Date</span>
                            <span>{event.date}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-amber-950 block">Timing</span>
                            <span className="font-bold text-amber-900">{event.time}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-amber-950 block">Venue</span>
                            <span>{event.venue}</span>
                          </div>
                        </div>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs text-stone-600 font-serif leading-relaxed line-clamp-3">
                        {event.desc}
                      </p>
                    </div>

                    {/* Bottom Action buttons */}
                    <div className="pt-4 border-t border-amber-200/60 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setFlippedCard(event.id)}
                        className="text-xs font-serif font-semibold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>View Rituals &amp; Dress Code ↺</span>
                      </button>

                      <a
                        href={event.locationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-serif font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-full border border-amber-300 transition-colors"
                      >
                        Map ↗
                      </a>
                    </div>
                  </div>

                  {/* BACK SIDE (Flipped) */}
                  <div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#3D1414] via-[#5C1E1E] to-[#2B0E0E] rounded-3xl p-6 sm:p-7 border-2 border-amber-400 text-amber-50 shadow-2xl flex flex-col justify-between"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-serif uppercase tracking-widest text-amber-300 font-semibold">
                          Ritual Highlights
                        </span>
                        <button
                          type="button"
                          onClick={() => setFlippedCard(null)}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-300/40"
                        >
                          ✕ Close
                        </button>
                      </div>

                      <h4 className="text-xl font-serif font-bold text-amber-100 mb-2">
                        {event.name}
                      </h4>

                      {/* Dress Code Recommendation */}
                      <div className="bg-amber-950/60 rounded-xl p-3 border border-amber-400/40 mb-4">
                        <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-1">
                          <Shirt className="w-3.5 h-3.5" />
                          <span>Suggested Dress Code</span>
                        </div>
                        <p className="text-xs text-amber-100/90 font-serif leading-relaxed">
                          {event.dressCode}
                        </p>
                      </div>

                      {/* Ritual Bullets */}
                      <div className="space-y-2 text-xs font-serif text-amber-100/90">
                        <span className="font-semibold text-amber-300 block mb-1">Ceremonial Highlights:</span>
                        {event.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-amber-400">✦</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-amber-400/30">
                      <button
                        type="button"
                        onClick={() => setFlippedCard(null)}
                        className="w-full py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-serif font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                      >
                        Back to Overview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

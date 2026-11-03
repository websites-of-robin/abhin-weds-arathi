import React, { useState } from 'react';
import { MapPin, Navigation, Plane, Train, Car, Phone, ExternalLink } from 'lucide-react';

export default function VenueMaps() {
  const [activeVenue, setActiveVenue] = useState('wedding');

  const venues = {
    wedding: {
      name: "Gokulam Convention Centre & Mandapam",
      event: "Muhurtham & Kalyana Sadya (Sunday, May 17)",
      address: "Banerji Road, Kaloor, Ernakulam, Kochi, Kerala 682017",
      landmark: "Near JLN International Stadium / Kaloor Metro",
      phone: "+91 484 240 1234",
      mapUrl: "https://maps.google.com/?q=Gokulam+Convention+Centre+Kaloor+Kochi",
      embedQuery: "Gokulam+Park+Hotel+and+Convention+Centre+Kaloor+Kochi",
      transit: [
        { icon: Plane, label: "From Cochin Airport (COK)", text: "27 km (approx. 45 mins via Airport Seaport Rd / NH 544)" },
        { icon: Train, label: "From Railway Stations", text: "Ernakulam Town (North) is 2.5 km (8 mins); Ernakulam Jn (South) is 5 km" },
        { icon: Car, label: "Kochi Metro & Parking", text: "JLN Stadium Metro Station is 800m. Ample valet parking available for 500+ cars" }
      ]
    },
    reception: {
      name: "Bolgatty Palace & Island Resort",
      event: "Evening Reception & Gala (Sunday, May 17, 06:30 PM)",
      address: "Bolgatty Island, Mulavukad, Kochi, Kerala 682504",
      landmark: "Historic Dutch Heritage Waterfront Lawn overlooking backwaters",
      phone: "+91 484 275 0500",
      mapUrl: "https://maps.google.com/?q=Bolgatty+Palace+and+Island+Resort+Kochi",
      embedQuery: "Bolgatty+Palace+and+Island+Resort+Kochi",
      transit: [
        { icon: Plane, label: "From Cochin Airport (COK)", text: "30 km via Container Terminal Highway (approx. 40 mins)" },
        { icon: Train, label: "From Ernakulam Junction", text: "6.5 km via Goshree Bridges (approx. 15 mins)" },
        { icon: Car, label: "Scenic Island Access", text: "Connected via Goshree Bridges. Complimentary boat shuttle & vast lawn parking" }
      ]
    }
  };

  const current = venues[activeVenue];

  return (
    <section id="venue" className="py-20 px-4 relative z-10 bg-amber-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-serif uppercase tracking-widest mb-3">
            <Navigation className="w-3.5 h-3.5 text-amber-700" />
            <span>Directions &amp; Hospitality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-3">
            Venues &amp; Travel Guide
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-amber-900/80 max-w-xl mx-auto">
            "നിങ്ങളുടെ വരവ് ഞങ്ങൾക്ക് അനുഗ്രഹമാണ്..."<br />
            Everything you need for a comfortable journey to our celebrations.
          </p>
        </div>

        {/* Venue Selector Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            type="button"
            onClick={() => setActiveVenue('wedding')}
            className={`px-6 py-3 rounded-full font-serif text-xs sm:text-sm font-semibold transition-all shadow-sm ${
              activeVenue === 'wedding'
                ? 'bg-amber-800 text-amber-50 shadow-md ring-2 ring-amber-500'
                : 'bg-white text-stone-700 hover:bg-amber-100 border border-amber-300'
            }`}
          >
            🏛️ Wedding &amp; Sadya: Gokulam Centre
          </button>
          <button
            type="button"
            onClick={() => setActiveVenue('reception')}
            className={`px-6 py-3 rounded-full font-serif text-xs sm:text-sm font-semibold transition-all shadow-sm ${
              activeVenue === 'reception'
                ? 'bg-amber-800 text-amber-50 shadow-md ring-2 ring-amber-500'
                : 'bg-white text-stone-700 hover:bg-amber-100 border border-amber-300'
            }`}
          >
            🌴 Evening Gala: Bolgatty Palace
          </button>
        </div>

        {/* Venue Information Details & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#FFFDF9] via-[#FAF5E7] to-[#F5EAD4] rounded-3xl p-6 sm:p-8 border-2 border-amber-300/80 shadow-xl kasavu-border">
            <span className="text-xs font-serif uppercase tracking-widest text-amber-800 font-semibold px-3 py-1 bg-amber-100 rounded-full border border-amber-300 mb-3 inline-block">
              {current.event}
            </span>

            <h3 className="text-2xl font-serif font-bold text-amber-950 mb-2">
              {current.name}
            </h3>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-serif mb-4">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>{current.address}</span>
            </div>

            <p className="text-xs text-amber-900 font-serif bg-white/70 p-3 rounded-xl border border-amber-200 mb-6">
              <strong>Landmark:</strong> {current.landmark}
            </p>

            {/* Travel Guide List */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-serif uppercase tracking-wider text-amber-950 font-bold block">
                How to Reach:
              </span>
              {current.transit.map((t, i) => {
                const Icon = t.icon;
                return (
                  <div key={i} className="flex items-start gap-3 bg-white/80 p-3 rounded-xl border border-amber-200/70 text-xs font-serif">
                    <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-amber-950 block">{t.label}</span>
                      <span className="text-stone-600">{t.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Open in Google Maps Button */}
            <a
              href={current.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-amber-800 hover:bg-amber-900 text-amber-50 font-serif font-semibold text-xs tracking-wider uppercase transition-colors shadow-md"
            >
              <Navigation className="w-4 h-4 text-amber-300" />
              <span>Get Live GPS Directions ↗</span>
            </a>
          </div>

          {/* Interactive Map Visual (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border-2 border-amber-300 shadow-xl min-h-[460px] relative flex flex-col">
            <div className="p-4 bg-amber-100/70 border-b border-amber-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-serif text-amber-950 font-semibold">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Live Location Map: {current.name}</span>
              </div>
              <a
                href={current.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-800 hover:text-amber-950 font-serif flex items-center gap-1"
              >
                <span>Full Screen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full h-full min-h-[400px] relative bg-stone-100">
              <iframe
                title="Google Maps Location"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${current.embedQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

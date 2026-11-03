import React, { useState } from 'react';
import { Camera, Eye, X, Sparkles, MapPin } from 'lucide-react';

export default function PhotoGallery3D() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // High quality curated aesthetic photo placeholders representing Kerala backwaters, temple, and romance
  const gallery = [
    {
      id: 1,
      title: "Dawn on Vembanad Lake",
      location: "Alleppey Backwaters, Kerala",
      caption: "Tranquil morning mist mirroring our quiet beginnings on a traditional wooden boat.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Temple Chuttambalam Glow",
      location: "Vadakkumnathan Temple, Thrissur",
      caption: "Surrounded by thousand bronze lamps echoing the timeless blessings of centuries.",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Munnar Misty Hills",
      location: "Tea Gardens, Munnar",
      caption: "Emerald slopes and crisp highland breeze, celebrating shared laughs and endless walks.",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "Kasavu Grace & Heritage",
      location: "Kochi, Kerala",
      caption: "Embracing our roots in timeless Kerala golden handloom weave.",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      title: "Chinese Fishing Nets at Twilight",
      location: "Fort Kochi Promenade",
      caption: "Watching silhouettes of vintage cantilevers against the crimson Malabar sunset.",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      title: "Marine Drive Serenade",
      location: "Marine Drive, Kochi",
      caption: "Where our first conversation began over spiced Sulaimani and sweet promises.",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-serif uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            <span>Memories in Frame</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-950 mb-3">
            Glimpses of Our Journey
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-amber-900/80 max-w-xl mx-auto">
            "ഓർമ്മകളുടെ മനോഹര തീരങ്ങളിൽ..."<br />
            Pre-wedding moments captured across God's Own Country.
          </p>
        </div>

        {/* 3D Parallax Tilt Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden border-2 border-amber-300/80 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-amber-300 text-[11px] font-serif font-semibold text-amber-950 flex items-center gap-1 shadow-sm">
                  <MapPin className="w-3 h-3 text-amber-600" />
                  <span>{photo.location}</span>
                </div>

                {/* View Icon Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-amber-500/90 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-serif font-bold text-amber-100 mb-0.5">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-1 font-serif">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#FFFDF9] rounded-3xl overflow-hidden border-2 border-amber-400 shadow-2xl kasavu-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-gradient-to-b from-[#FFFDF9] to-[#FAF4E5]">
                <div className="flex items-center gap-2 text-xs font-serif text-amber-800 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{selectedPhoto.location}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-amber-950 mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm font-serif text-stone-700 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

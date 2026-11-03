import React, { useState } from 'react';
import { Menu, X, Sparkles, Heart } from 'lucide-react';

export default function Navbar({ isPlaying, onToggleMusic }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Ceremonies', href: '#ceremonies' },
    { name: 'Sadya Feast', href: '#sadya' },
    { name: 'Dress Code', href: '#dresscode' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Venues', href: '#venue' },
    { name: 'Blessings', href: '#wishes' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#FFFDF8]/90 backdrop-blur-md border-b border-amber-300/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-white font-serif font-bold text-sm shadow-sm">
              A&amp;A
            </div>
            <div className="text-left">
              <span className="block font-serif font-bold text-base text-amber-950 tracking-wide">
                Abhin &amp; Arathi
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-amber-700 font-serif font-semibold">
                May 17, 2026 • Kochi
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-serif font-semibold text-stone-700 hover:text-amber-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: RSVP Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#rsvp"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-amber-50 font-serif font-semibold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105"
            >
              RSVP Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#rsvp"
              className="px-3 py-1.5 rounded-full bg-amber-800 text-amber-50 font-serif font-semibold text-xs tracking-wider"
            >
              RSVP
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-amber-900 hover:bg-amber-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#FFFDF8] border-b border-amber-300 p-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-serif font-semibold text-stone-800 hover:text-amber-800 py-1.5 px-2 rounded-lg hover:bg-amber-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

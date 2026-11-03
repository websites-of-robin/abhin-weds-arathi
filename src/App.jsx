import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import HeroEnvelope3D from './components/HeroEnvelope3D';
import CountdownTimer from './components/CountdownTimer';
import CoupleStory from './components/CoupleStory';
import Ceremonies3D from './components/Ceremonies3D';
import SadyaInteractive3D from './components/SadyaInteractive3D';
import DressCodeGuide from './components/DressCodeGuide';
import TraditionsExplainer from './components/TraditionsExplainer';
import PhotoGallery3D from './components/PhotoGallery3D';
import VenueMaps from './components/VenueMaps';
import RSVPSection from './components/RSVPSection';
import WishesGuestbook from './components/WishesGuestbook';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative min-h-screen text-[#2C2117] overflow-x-hidden selection:bg-amber-300/40">
      {/* 3D Three.js Interactive Floating Petals & Gold Particle Canvas */}
      <ThreeBackground />

      {/* Floating Top Navbar */}
      <Navbar isPlaying={isPlaying} onToggleMusic={setIsPlaying} />

      {/* Hero 3D Interactive Invitation */}
      <main>
        <HeroEnvelope3D onMusicStart={setIsPlaying} />
        <CountdownTimer />
        <CoupleStory />
        <Ceremonies3D />
        <SadyaInteractive3D />
        <TraditionsExplainer />
        <DressCodeGuide />
        <PhotoGallery3D />
        <VenueMaps />
        <RSVPSection />
        <WishesGuestbook />
      </main>

      {/* Floating Traditional Nadaswaram Audio Player Widget */}
      <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

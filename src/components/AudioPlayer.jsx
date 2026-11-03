import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Bell, Sparkles } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';

export default function AudioPlayer({ isPlaying, setIsPlaying }) {
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      weddingAudio.stop();
      setIsPlaying(false);
    } else {
      weddingAudio.start();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    weddingAudio.setVolume(val);
    if (val === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  const toggleMute = () => {
    if (isMuted) {
      weddingAudio.setVolume(volume);
      setIsMuted(false);
    } else {
      weddingAudio.setVolume(0);
      setIsMuted(true);
    }
  };

  const ringBell = () => {
    weddingAudio.playTempleBell(1046.5);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Audio Visualizer & Controls Pill */}
      <div className="bg-[#FFFDF8]/95 backdrop-blur-md rounded-full px-4 py-2.5 border-2 border-amber-400 shadow-xl flex items-center gap-3">
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={togglePlay}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            isPlaying
              ? 'bg-gradient-to-tr from-amber-600 to-amber-500 text-white shadow-md'
              : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
          }`}
          title={isPlaying ? "Pause Traditional Raga" : "Play Auspicious Nadaswaram"}
        >
          {isPlaying ? (
            <div className="flex items-center gap-0.5 h-4">
              <span className="w-1 bg-white rounded-full h-3 animate-pulse" />
              <span className="w-1 bg-white rounded-full h-4 animate-pulse delay-75" />
              <span className="w-1 bg-white rounded-full h-2 animate-pulse delay-150" />
            </div>
          ) : (
            <Music className="w-4 h-4" />
          )}
        </button>

        {/* Status text */}
        <div className="hidden sm:block text-left">
          <p className="text-[11px] font-serif font-bold text-amber-950 leading-tight">
            {isPlaying ? "Raga Mohanam • Nadaswaram" : "Play Wedding Music"}
          </p>
          <p className="text-[9px] text-amber-700/80 font-malayalam leading-none">
            {isPlaying ? "മംഗള സംഗീതം തുടരുന്നു" : "ക്ലിക്ക് ചെയ്യുക"}
          </p>
        </div>

        {/* Ring Temple Bell button */}
        <button
          type="button"
          onClick={ringBell}
          className="w-8 h-8 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-300 transition-colors"
          title="Ring Sacred Temple Bell"
        >
          <Bell className="w-3.5 h-3.5" />
        </button>

        {/* Volume Toggle */}
        <button
          type="button"
          onClick={toggleMute}
          className="text-amber-800 hover:text-amber-950 transition-colors"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Expandable volume slider */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-16 sm:w-20 accent-amber-600 h-1.5 rounded-lg cursor-pointer bg-amber-200"
          title="Volume Control"
        />
      </div>
    </div>
  );
}

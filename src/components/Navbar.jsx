import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Volume2, VolumeX } from 'lucide-react';

/* =========================================================
   useAudio Hook (AMAN dari autoplay issue)
========================================================= */
const useAudio = (url) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(p => !p);

  useEffect(() => {
    audioRef.current = new Audio(url);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, [url]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch(() => setPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return [playing, toggle];
};

/* =========================================================
   NAVBAR
========================================================= */
const Navbar = () => {
  const [playing, toggle] = useAudio('/backsound.mp3');

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-white/10">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-black text-white tracking-tight">
          🍃 SmartKey <span className="text-emerald-400">Bio</span>
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="hidden md:block text-white/70 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/identify"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition shadow-lg"
          >
            <Search size={18} />
            Identify
          </Link>

          {/* AUDIO BUTTON */}
          <button
            onClick={toggle}
            className="p-2.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition"
            title={playing ? "Mute Music" : "Play Music"}
          >
            {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

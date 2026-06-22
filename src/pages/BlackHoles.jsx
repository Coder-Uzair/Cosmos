import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Info } from 'lucide-react';

export default function BlackHoles() {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden pt-24 pb-20">
      
      {/* Black hole visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] pointer-events-none opacity-50">
        <div className="absolute inset-0 rounded-full border-[100px] border-orange-500/20 blur-[100px] animate-spin-slow"></div>
        <div className="absolute inset-32 rounded-full border-[50px] border-yellow-500/30 blur-[60px] animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute inset-1/4 rounded-full bg-black shadow-[0_0_100px_rgba(0,0,0,1)] z-10"></div>
        <div className="absolute inset-0 rounded-full border-[2px] border-white/10 blur-[2px] animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-red-500/30 text-red-500 text-xs font-bold uppercase tracking-widest bg-red-500/10">
            <AlertTriangle className="w-4 h-4" /> Extreme Gravity Warning
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 text-white">
            Black Holes
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Regions of spacetime where gravity is so strong that nothing — no particles or even electromagnetic radiation such as light — can escape from it.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="glass-panel p-6 rounded-2xl border-white/5">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2 text-white">Event Horizon</h3>
              <p className="text-sm text-gray-400">The boundary defined by the point of no return. Once you cross this line, escape is mathematically impossible.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-white/5">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2 text-white">Singularity</h3>
              <p className="text-sm text-gray-400">The center of a black hole where matter is crushed to infinite density and the laws of physics break down.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-white/5">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2 text-white">Spaghettification</h3>
              <p className="text-sm text-gray-400">The extreme tidal forces that would stretch any object into a long, thin shape as it approaches the singularity.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border-white/5">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2 text-white">Time Dilation</h3>
              <p className="text-sm text-gray-400">Near a black hole, time moves slower compared to someone farther away due to the intense gravitational field.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
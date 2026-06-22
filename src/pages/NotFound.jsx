import React from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="text-[30rem] font-black">404</div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center glass-panel p-16 rounded-3xl"
      >
        <h1 className="text-6xl font-bold mb-4 uppercase text-gradient">Lost in Space</h1>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The coordinates you entered lead to an empty sector of the universe. This page does not exist.
        </p>
        <button 
          onClick={() => window.history.back()}
          className="px-8 py-3 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-themeAccent transition-colors"
        >
          Return to Orbit
        </button>
      </motion.div>
    </div>
  );
}
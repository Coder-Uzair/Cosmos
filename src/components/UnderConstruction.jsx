import React from 'react';

export default function UnderConstruction({ title }) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-20">
      <div className="text-center glass-panel p-16 rounded-3xl max-w-2xl mx-6">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-themeAccent">{title}</h1>
        <p className="text-gray-400 mb-8">This module is currently under construction in the orbital shipyard. Check back later for the full experience.</p>
        <button onClick={() => window.history.back()} className="px-8 py-3 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-themeAccent transition-colors">
          Return to Base
        </button>
      </div>
    </div>
  );
}
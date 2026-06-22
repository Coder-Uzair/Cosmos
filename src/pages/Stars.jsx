import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const starTypes = [
  { name: 'Yellow Dwarf', temp: '5,000 - 6,000 K', example: 'The Sun', color: 'bg-yellow-400', desc: 'Main sequence stars that are stable and long-lived. Our Sun is a prime example.' },
  { name: 'Red Dwarf', temp: '2,500 - 4,000 K', example: 'Proxima Centauri', color: 'bg-red-500', desc: 'The most common type of star in the universe. Small, cool, and extremely long-lived.' },
  { name: 'Blue Giant', temp: '10,000 - 50,000 K', example: 'Rigel', color: 'bg-blue-400', desc: 'Massive, extremely hot stars that burn through their fuel very quickly.' },
  { name: 'Red Giant', temp: '3,000 - 4,000 K', example: 'Betelgeuse', color: 'bg-orange-500', desc: 'Dying stars in the last stages of stellar evolution that have expanded massively.' },
  { name: 'White Dwarf', temp: '8,000 - 40,000 K', example: 'Sirius B', color: 'bg-white', desc: 'The dense, dim stellar corpse of a low- to medium-mass star.' },
  { name: 'Neutron Star', temp: '1,000,000 K+', example: 'Crab Pulsar', color: 'bg-cyan-300', desc: 'The incredibly dense core left behind after a massive star explodes as a supernova.' }
];

export default function Stars() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 border border-themeAccent/30 text-themeAccent text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Stellar Evolution
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">The Engines of the Universe</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Stars are the cosmic furnaces that forged the elements necessary for life. Explore the different classes of stars that illuminate our universe.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {starTypes.map((star, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={star.name} 
              className="glass-panel rounded-3xl p-8 group hover:-translate-y-2 transition-transform duration-300 border border-themeBorder hover:border-themeAccent/50"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 rounded-full ${star.color} shadow-[0_0_30px_rgba(255,255,255,0.2)] animate-pulse`} style={{ boxShadow: `0 0 40px ${star.color === 'bg-white' ? '#fff' : 'var(--tw-shadow-color)'}` }}></div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                  {star.temp}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 group-hover:text-themeAccent transition-colors">{star.name}</h3>
              <p className="text-sm text-themeAccent mb-4 uppercase tracking-widest font-bold">Example: {star.example}</p>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">{star.desc}</p>
              
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-themeAccent transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
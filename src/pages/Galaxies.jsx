import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye } from 'lucide-react';

const galaxiesData = [
  { name: 'Milky Way', type: 'Barred Spiral', distance: '0 ly (Home)', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop', desc: 'Our home galaxy containing an estimated 100-400 billion stars and at least that many planets.' },
  { name: 'Andromeda', type: 'Spiral', distance: '2.537 million ly', image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=800&auto=format&fit=crop', desc: 'The nearest major galaxy to the Milky Way, on a collision course with our galaxy in about 4.5 billion years.' },
  { name: 'Sombrero', type: 'Unbarred Spiral', distance: '31.1 million ly', image: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=800&auto=format&fit=crop', desc: 'Famous for its prominent central bulge and brilliant ring of dust.' },
  { name: 'Triangulum', type: 'Spiral', distance: '2.73 million ly', image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=800&auto=format&fit=crop', desc: 'The third-largest member of the Local Group of galaxies, behind the Milky Way and Andromeda.' }
];

export default function Galaxies() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-gradient">Galaxies</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Vast cosmic islands containing billions of stars, planets, gas, and dark matter.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {galaxiesData.map((galaxy, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={galaxy.name}
              className="group relative rounded-3xl overflow-hidden glass-panel h-[500px]"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80" style={{ backgroundImage: `url(${galaxy.image})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-themeAccent/20 backdrop-blur-md rounded-full border border-themeAccent/50 text-themeAccent text-xs font-bold uppercase tracking-widest">
                    {galaxy.type}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                    {galaxy.distance}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">{galaxy.name}</h2>
                <p className="text-gray-300 leading-relaxed max-w-md mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {galaxy.desc}
                </p>
                
                <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white hover:text-black transition-colors transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
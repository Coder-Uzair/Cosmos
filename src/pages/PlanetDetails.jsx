import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Thermometer, Ruler, Clock, Orbit, Info } from 'lucide-react';
import { planetsData } from '../data/planets.js';

export default function PlanetDetails() {
  const { id } = useParams();
  const planet = planetsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!planet) {
    return <div className="min-h-screen flex items-center justify-center">Planet not found</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <img src={planet.image} alt={planet.name} className="absolute inset-0 w-full h-full object-cover z-0" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-themeBg via-transparent to-transparent z-20"></div>
        
        <div className="container mx-auto px-6 relative z-30 flex flex-col items-center mt-20">
          <Link to="/solar-system" className="absolute left-6 top-0 flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to System
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-48 h-48 md:w-80 md:h-80 rounded-full mb-8 shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.9)] relative"
            style={{ backgroundColor: planet.color }}
          >
            <div className="absolute -inset-10 border border-white/10 rounded-full animate-spin-slow"></div>
            <div className="absolute -inset-20 border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter"
            style={{ color: planet.color }}
          >
            {planet.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl uppercase tracking-widest text-gray-400 mt-2"
          >
            {planet.type}
          </motion.p>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-6 py-20 relative z-40 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-panel p-8 md:p-12 rounded-3xl">
              <div className="flex items-center gap-3 mb-6 text-themeAccent">
                <Info className="w-6 h-6" />
                <h2 className="text-2xl font-bold uppercase tracking-widest">Overview</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">{planet.desc}</p>
              
              <div className="w-full h-[1px] bg-themeBorder mb-8"></div>
              
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6 text-white">Scientific Data</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Atmosphere", value: "Carbon Dioxide, Nitrogen", icon: Info },
                  { label: "Gravity", value: "3.721 m/s²", icon: Ruler },
                  { label: "Surface Pressure", value: "0.006 bar", icon: Info },
                  { label: "Axial Tilt", value: "25.19°", icon: Orbit },
                ].map((stat, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5">
                    <stat.icon className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{stat.label}</div>
                      <div className="font-bold text-white">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-3xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 border-b border-themeBorder pb-4">Key Characteristics</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Ruler className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-wider">Radius</span>
                  </div>
                  <span className="font-bold">{planet.radius}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Thermometer className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-wider">Temp</span>
                  </div>
                  <span className="font-bold">{planet.temp}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-wider">Day Length</span>
                  </div>
                  <span className="font-bold">{planet.rotation}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Orbit className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-wider">Year Length</span>
                  </div>
                  <span className="font-bold">{planet.orbit}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Orbit className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-wider">Moons</span>
                  </div>
                  <span className="font-bold px-3 py-1 bg-white/10 rounded-full text-xs">{planet.moons}</span>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-6 rounded-3xl bg-themeAccent/5 border-themeAccent/20">
              <h3 className="text-sm font-bold uppercase tracking-widest text-themeAccent mb-4">Did you know?</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {planet.name} was named after the Roman god of {planet.id === 'mars' ? 'war' : planet.id === 'venus' ? 'love and beauty' : planet.id === 'jupiter' ? 'sky and thunder' : 'the sea'}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
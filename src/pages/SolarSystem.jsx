import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Maximize, Orbit } from 'lucide-react';
import { planetsData } from '../data/planets.js';

export default function SolarSystem() {
  const [activePlanet, setActivePlanet] = useState(planetsData[2]); // Earth
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  return (
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-themeBorder/50 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Solar System</h1>
          <p className="text-gray-400 max-w-2xl text-lg">Our cosmic neighborhood. Explore the 8 planets orbiting our local star.</p>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row gap-12 items-center justify-center">
          
          {/* Orbital View */}
          <div className="lg:flex-1 w-full relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Sun */}
            <div className="absolute left-[-20%] md:left-[-10%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-200 blur-sm shadow-[0_0_100px_rgba(250,204,21,0.5)]"></div>
            
            {/* Planet Orbits */}
            <div className="absolute w-full h-full flex items-center pr-10 overflow-x-auto overflow-y-hidden hide-scrollbar">
              <div className="flex items-center gap-4 md:gap-8 lg:gap-12 min-w-max ml-[150px] md:ml-[250px] relative z-20 h-full">
                {planetsData.map((planet, index) => (
                  <div 
                    key={planet.id}
                    className="flex flex-col items-center justify-center cursor-pointer group h-full"
                    onMouseEnter={() => setHoveredPlanet(planet)}
                    onMouseLeave={() => setHoveredPlanet(null)}
                    onClick={() => setActivePlanet(planet)}
                  >
                    <div className="h-full w-[1px] bg-themeBorder/30 absolute z-0 group-hover:bg-themeAccent/50 transition-colors"></div>
                    
                    <motion.div 
                      layoutId={`planet-img-${planet.id}`}
                      className={`relative z-10 rounded-full transition-all duration-500 ease-out flex items-center justify-center shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.5)] bg-gray-800 ${activePlanet.id === planet.id ? 'ring-2 ring-themeAccent ring-offset-4 ring-offset-black' : ''}`}
                      style={{
                        width: 40 + (index * 8) + 'px',
                        height: 40 + (index * 8) + 'px',
                        backgroundColor: planet.color
                      }}
                    >
                      {activePlanet.id === planet.id && (
                        <motion.div layoutId="active-indicator" className="absolute -inset-4 border border-themeAccent/50 rounded-full animate-spin-slow"></motion.div>
                      )}
                    </motion.div>
                    
                    <span className={`absolute bottom-20 uppercase text-xs font-bold tracking-widest transition-colors ${activePlanet.id === planet.id ? 'text-themeAccent' : 'text-gray-500 group-hover:text-white'}`}>
                      {planet.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Planet Details Panel */}
          <div className="w-full lg:w-[450px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activePlanet.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-3xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-themeAccent/20 blur-[50px] rounded-full"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-themeBorder bg-black/50 text-gray-300">
                    {activePlanet.type}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] uppercase text-gray-500">
                    <Orbit className="w-3 h-3" /> {activePlanet.moons} Moons
                  </span>
                </div>
                
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4" style={{ color: activePlanet.color }}>{activePlanet.name}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{activePlanet.desc}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="glass-panel p-4 rounded-xl">
                    <div className="text-[10px] uppercase text-gray-500 mb-1">Distance from Sun</div>
                    <div className="text-sm font-bold">{activePlanet.distance}</div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl">
                    <div className="text-[10px] uppercase text-gray-500 mb-1">Orbital Period</div>
                    <div className="text-sm font-bold">{activePlanet.orbit}</div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl">
                    <div className="text-[10px] uppercase text-gray-500 mb-1">Radius</div>
                    <div className="text-sm font-bold">{activePlanet.radius}</div>
                  </div>
                  <div className="glass-panel p-4 rounded-xl">
                    <div className="text-[10px] uppercase text-gray-500 mb-1">Temperature</div>
                    <div className="text-sm font-bold">{activePlanet.temp}</div>
                  </div>
                </div>

                <Link 
                  to={`/planet/${activePlanet.id}`} 
                  className="w-full flex items-center justify-between px-6 py-4 bg-white text-black rounded-xl font-bold uppercase tracking-wider hover:bg-themeAccent transition-colors group"
                >
                  Explore {activePlanet.name}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
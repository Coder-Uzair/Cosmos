import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Calendar, MapPin } from 'lucide-react';

const missions = [
  { name: 'Apollo 11', year: '1969', agency: 'NASA', target: 'Moon', desc: 'The spaceflight that first landed humans on the Moon. Neil Armstrong and Buzz Aldrin formed the American crew.', img: 'https://images.unsplash.com/photo-1614728447081-30664d47d0e8?q=80&w=800&auto=format&fit=crop' },
  { name: 'Voyager 1', year: '1977', agency: 'NASA', target: 'Interstellar Space', desc: 'The most distant human-made object from Earth, currently exploring interstellar space.', img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop' },
  { name: 'James Webb', year: '2021', agency: 'NASA/ESA/CSA', target: 'Deep Space', desc: 'The largest optical telescope in space, designed to conduct infrared astronomy.', img: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=800&auto=format&fit=crop' },
  { name: 'Perseverance', year: '2020', agency: 'NASA', target: 'Mars', desc: 'A car-sized Mars rover designed to explore the crater Jezero on Mars.', img: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=800&auto=format&fit=crop' }
];

export default function Missions() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Space Missions</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Humanity's quest to explore the unknown. Discover the greatest missions that pushed the boundaries of our knowledge.
          </p>
        </header>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-themeBorder -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {missions.map((mission, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={mission.name} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="glass-panel rounded-3xl overflow-hidden aspect-video relative group">
                    <img src={mission.img} alt={mission.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-themeBg border-4 border-themeAccent items-center justify-center z-10" style={{ [index % 2 === 0 ? 'left' : 'right']: '-40px' }}>
                    <Rocket className="w-5 h-5 text-themeAccent" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-themeAccent">
                      <Calendar className="w-4 h-4" /> {mission.year}
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300">
                      {mission.agency}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">{mission.name}</h2>
                  
                  <div className="flex items-center gap-2 text-gray-400 uppercase tracking-widest text-sm font-bold mb-6">
                    <MapPin className="w-4 h-4" /> Target: {mission.target}
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {mission.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
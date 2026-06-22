import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Globe, Star, Zap } from 'lucide-react';
import Starfield from '../components/3d/Starfield.jsx';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  useEffect(() => {
    gsap.fromTo(heroRef.current.querySelectorAll('.hero-anim'), 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="w-full relative">
      <Starfield />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-themeAccent/20 rounded-full blur-[150px]" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="hero-anim inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-themeAccent/30">
             <span className="w-2 h-2 rounded-full bg-themeAccent animate-pulse"></span>
             <span className="text-xs font-bold tracking-widest uppercase">Explore the unknown</span>
          </div>
          
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter mb-6 leading-none">
            Beyond <br/> <span className="text-gradient">Horizons</span>
          </h1>
          
          <p className="hero-anim text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Embark on a cinematic journey through space and time. Discover planets, stars, and galaxies in a premium interactive experience designed for the future.
          </p>
          
          <div className="hero-anim flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/solar-system" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider overflow-hidden w-full sm:w-auto text-center">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Exploration <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-themeAccent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </Link>
            <Link to="/about" className="px-8 py-4 glass-panel rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
              Mission Briefing
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-32 relative z-10 bg-themeBg/80 backdrop-blur-3xl border-t border-themeBorder">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">Cosmic Database</h2>
            <div className="w-24 h-1 bg-themeAccent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Solar System", desc: "Interactive 3D exploration of our cosmic neighborhood.", icon: Globe, link: "/solar-system", img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000&auto=format&fit=crop" },
              { title: "Galaxies", desc: "Discover massive systems of stars, gas, and dark matter.", icon: Zap, link: "/galaxies", img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop" },
              { title: "Stars", desc: "Learn about stellar evolution from nebulas to supernovas.", icon: Star, link: "/stars", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1000&auto=format&fit=crop" }
            ].map((item, i) => (
              <Link key={i} to={item.link} className="group relative rounded-3xl overflow-hidden glass-panel aspect-[4/5] flex items-end p-8 border border-themeBorder hover:border-themeAccent/50 transition-colors">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-themeAccent/20 flex items-center justify-center mb-6 text-themeAccent backdrop-blur-md">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold uppercase mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Discovery Timeline Preview */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="glass-panel rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-themeBorder">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">Humanity's Reach</h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                From the first telescopes to the James Webb Space Telescope, explore the timeline of our greatest discoveries and missions pushing the boundaries of human knowledge.
              </p>
              <Link to="/missions" className="inline-flex items-center gap-2 px-6 py-3 border border-themeAccent text-themeAccent rounded-full hover:bg-themeAccent hover:text-black transition-colors uppercase text-sm font-bold tracking-widest">
                View Missions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video rounded-2xl overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop" alt="Space Mission" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
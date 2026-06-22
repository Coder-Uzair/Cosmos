import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Menu, X, Globe, Moon, Sun, Search, User } from 'lucide-react';
import { useTheme } from '../ThemeProvider.jsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { theme, setTheme, themes } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solar System', path: '/solar-system' },
    { name: 'Stars', path: '/stars' },
    { name: 'Galaxies', path: '/galaxies' },
    { name: 'Missions', path: '/missions' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-themeBg/80 backdrop-blur-lg border-b border-themeBorder py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Rocket className="w-8 h-8 text-themeAccent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span className="text-xl font-bold tracking-widest uppercase">Cosmos</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wider hover:text-themeAccent transition-colors ${location.pathname === link.path ? 'text-themeAccent' : 'text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 hover:bg-themeGlass rounded-full transition-colors relative" onClick={() => setIsThemeOpen(!isThemeOpen)}>
              <Moon className="w-5 h-5" />
              
              <AnimatePresence>
                {isThemeOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 right-0 glass-panel rounded-xl p-4 w-48 flex flex-col gap-2 shadow-2xl"
                  >
                    {themes.map(t => (
                      <button 
                        key={t.id}
                        onClick={() => { setTheme(t.id); setIsThemeOpen(false); }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 text-left text-sm transition-colors"
                      >
                        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: t.color }}></span>
                        {t.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <button className="p-2 hover:bg-themeGlass rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/auth" className="px-5 py-2 bg-themeAccent/10 text-themeAccent border border-themeAccent/30 hover:bg-themeAccent hover:text-black rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300">
              Explore
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-themeBg/95 backdrop-blur-xl absolute top-full left-0 w-full overflow-hidden flex flex-col items-center pt-10 gap-6 border-t border-themeBorder"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-2xl font-bold uppercase tracking-widest hover:text-themeAccent"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="grid grid-cols-2 gap-4 mt-10">
              {themes.map(t => (
                <button 
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`px-4 py-2 border rounded-full text-xs uppercase tracking-wider ${theme === t.id ? 'border-themeAccent text-themeAccent' : 'border-themeBorder text-gray-400'}`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
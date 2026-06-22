import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-themeBorder bg-themeBg/50 backdrop-blur-md pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <Rocket className="w-8 h-8 text-themeAccent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              <span className="text-2xl font-bold tracking-widest uppercase">Cosmos</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm mb-6">
              Experience the universe like never before. A premium educational platform exploring the depths of space, time, and cosmic phenomena.
            </p>
            <div className="flex gap-4">
              {[FaTwitter, FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-themeAccent hover:text-black transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'Solar System', path: '/solar-system' },
                { name: 'Stars', path: '/stars' },
                { name: 'Galaxies', path: '/galaxies' },
                { name: 'Black Holes', path: '/black-holes' },
                { name: 'Space Missions', path: '/missions' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-themeAccent text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: 'Astronomy Blog', path: '/blog' },
                { name: 'Space News', path: '/news' },
                { name: 'Timeline', path: '/timeline' },
                { name: 'Image Gallery', path: '/gallery' },
                { name: 'FAQ', path: '/faq' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-themeAccent text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">Join the Mission</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest cosmic discoveries.</p>
            <div className="flex glass-panel rounded-full overflow-hidden p-1">
              <input type="email" placeholder="Your email address" className="bg-transparent border-none outline-none px-4 py-2 text-sm w-full text-white placeholder-gray-500" />
              <button className="bg-themeAccent text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-themeBorder pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Cosmos Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
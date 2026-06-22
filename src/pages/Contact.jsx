import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Transmission sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-12 text-center">Establish Contact</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">Send Transmission</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Identifier</label>
                <input required type="text" className="w-full bg-black/50 border border-themeBorder rounded-xl px-4 py-3 text-white outline-none focus:border-themeAccent transition-colors" placeholder="Your name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Comms Frequency</label>
                <input required type="email" className="w-full bg-black/50 border border-themeBorder rounded-xl px-4 py-3 text-white outline-none focus:border-themeAccent transition-colors" placeholder="Your email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message Payload</label>
                <textarea required rows="4" className="w-full bg-black/50 border border-themeBorder rounded-xl px-4 py-3 text-white outline-none focus:border-themeAccent transition-colors resize-none" placeholder="Your message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="w-full bg-themeAccent text-black font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Transmit
              </button>
            </form>
          </div>
          
          {/* Info */}
          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-3xl flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-themeAccent/20 flex items-center justify-center text-themeAccent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Coordinates</h3>
                <p className="font-bold text-white">Earth, Milky Way Galaxy</p>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-themeAccent/20 flex items-center justify-center text-themeAccent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Email Channel</h3>
                <p className="font-bold text-white">comms@cosmos2026.app</p>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-themeAccent/20 flex items-center justify-center text-themeAccent">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Direct Line</h3>
                <p className="font-bold text-white">+1 (555) 000-SPACE</p>
              </div>
            </div>
            
            <div className="h-48 glass-panel rounded-3xl overflow-hidden relative mt-8">
              <img src="https://images.unsplash.com/photo-1614728447081-30664d47d0e8?q=80&w=800&auto=format&fit=crop" alt="Earth" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-sm font-bold uppercase tracking-widest">Base of Operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
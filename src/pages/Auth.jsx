import React, { useState } from 'react';
import { Rocket } from 'lucide-react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(isLogin ? 'Authentication successful!' : 'Account created successfully!');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-themeAccent/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="glass-panel p-10 md:p-16 rounded-3xl w-full max-w-md relative z-10 mx-6">
        <div className="flex justify-center mb-8">
          <Rocket className="w-12 h-12 text-themeAccent" />
        </div>
        
        <h1 className="text-3xl font-black uppercase tracking-tighter text-center mb-2">
          {isLogin ? 'Access Database' : 'Join the Mission'}
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          {isLogin ? 'Enter your credentials to continue.' : 'Create your explorer profile.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Username</label>
              <input required type="text" className="w-full bg-black/50 border border-themeBorder rounded-xl px-4 py-3 text-white outline-none focus:border-themeAccent transition-colors" />
            </div>
          )}
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input required type="email" className="w-full bg-black/50 border border-themeBorder rounded-xl px-4 py-3 text-white outline-none focus:border-themeAccent transition-colors" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Password</label>
            <input required type="password" className="w-full bg-black/50 border border-themeBorder rounded-xl px-4 py-3 text-white outline-none focus:border-themeAccent transition-colors" />
          </div>
          
          <button type="submit" className="w-full bg-themeAccent text-black font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-white transition-colors mt-4">
            {isLogin ? 'Initialize' : 'Register'}
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-themeBorder"></div>
          <span className="text-xs uppercase tracking-widest text-gray-500">Or connect with</span>
          <div className="flex-1 h-[1px] bg-themeBorder"></div>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="flex-1 py-3 border border-themeBorder rounded-xl hover:bg-white/5 transition-colors flex justify-center items-center">
            <FaGithub className="w-5 h-5" />
          </button>
          <button className="flex-1 py-3 border border-themeBorder rounded-xl hover:bg-white/5 transition-colors flex justify-center items-center">
            <FaTwitter className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-gray-400">
          {isLogin ? "Don't have an account? " : "Already registered? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-themeAccent font-bold uppercase tracking-widest hover:text-white transition-colors">
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}
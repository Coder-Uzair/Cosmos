import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-8 text-center">Privacy Policy</h1>
        <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 text-gray-300">
          <p className="text-sm text-gray-500 uppercase tracking-widest">Last Updated: Earth Date 2026.01.01</p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Data Collection</h2>
          <p>We collect telemetry data to improve your cosmic experience. This includes navigation patterns, preferred celestial bodies, and theme configurations.</p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Transmission Security</h2>
          <p>All communications with our servers are encrypted using quantum-resistant algorithms to ensure your exploration data remains secure from interception.</p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Cookie Policy</h2>
          <p>We use local storage mechanisms (akin to digital space dust) to remember your theme preferences and optimize the hyperspace rendering engines.</p>
        </div>
      </div>
    </div>
  );
}
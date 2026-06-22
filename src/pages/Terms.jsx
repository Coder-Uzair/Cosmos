import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-8 text-center">Terms of Service</h1>
        <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 text-gray-300">
          <p className="text-sm text-gray-500 uppercase tracking-widest">Effective Date: Earth Date 2026.01.01</p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing the Cosmos platform, you agree to abide by these universal laws and terms of service. Failure to comply may result in temporary exile from the system.</p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Educational Use</h2>
          <p>The stellar data provided is for educational and simulation purposes. We are not responsible for actual interstellar navigation errors resulting from the use of this platform.</p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Intellectual Property</h2>
          <p>All imagery, UI designs, and educational texts are property of the Cosmos Platform unless cited otherwise (e.g., NASA, Unsplash).</p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-8">About Cosmos</h1>
        <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-8 text-gray-300 leading-relaxed">
          <p className="text-xl">
            Cosmos is a premium educational platform dedicated to exploring the wonders of the universe. 
            Born in 2026, our mission is to bring the cosmos to everyone through interactive, cinematic, and scientifically accurate experiences.
          </p>
          <p>
            Combining data from NASA, ESA, and other space agencies, we provide an unparalleled view of our solar system, stars, galaxies, and the phenomenal mysteries of black holes.
          </p>
          <h2 className="text-3xl font-bold text-white mt-8 mb-4 uppercase">Our Vision</h2>
          <p>
            To inspire the next generation of astronauts, astrophysicists, and dreamers by making space exploration accessible, beautiful, and profoundly educational.
          </p>
        </div>
      </div>
    </div>
  );
}
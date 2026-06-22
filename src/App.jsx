import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import SolarSystem from './pages/SolarSystem.jsx';
import PlanetDetails from './pages/PlanetDetails.jsx';
import Stars from './pages/Stars.jsx';
import Galaxies from './pages/Galaxies.jsx';
import BlackHoles from './pages/BlackHoles.jsx';
import Missions from './pages/Missions.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Auth from './pages/Auth.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import News from './pages/News.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import Timeline from './pages/Timeline.jsx';
import Gallery from './pages/Gallery.jsx';
import Faq from './pages/Faq.jsx';
import NotFound from './pages/NotFound.jsx';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-space-bg text-space-text flex flex-col font-sans transition-colors duration-500 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
            <Navbar />
            <main className="flex-grow relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solar-system" element={<SolarSystem />} />
                <Route path="/planet/:id" element={<PlanetDetails />} />
                <Route path="/stars" element={<Stars />} />
                <Route path="/galaxies" element={<Galaxies />} />
                <Route path="/black-holes" element={<BlackHoles />} />
                <Route path="/missions" element={<Missions />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/news" element={<News />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="bottom-right" toastOptions={{
              style: {
                background: '#111',
                color: '#fff',
                border: '1px solid #333'
              }
            }}/>
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
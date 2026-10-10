import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WorkAndProcess } from './components/WorkAndProcess';
import { AboutAndTools } from './components/AboutAndTools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'what-i-do', 'process', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0708] text-[#F7EFE6] selection:bg-[#C5222E] selection:text-white relative">
      {/* Subtle fine editorial background grid overlay */}
      <div className="fixed inset-0 editorial-grid pointer-events-none opacity-40 -z-10" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero />
        <Services />
        <WorkAndProcess />
        <AboutAndTools />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

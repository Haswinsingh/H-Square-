import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import AboutSection from './components/AboutSection';
import VisionMission from './components/VisionMission';
import TechnologySection from './components/TechnologySection';
import ProductShowcase from './components/ProductShowcase';
import WhyHSquare from './components/WhyHSquare';
import InnovationLab from './components/InnovationLab';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AIChatConcierge from './components/AIChatConcierge';

export default function App() {
  const [prefilledContactMessage, setPrefilledContactMessage] = useState('');

  const handleSelectIdeaForContact = (message) => {
    setPrefilledContactMessage(message);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-space-950 text-slate-100 min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Interactive dynamic particle canvas background */}
      <ParticleBackground />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenContact={() => handleScrollToSection('contact')} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero 
          onExploreWork={() => handleScrollToSection('products')}
          onGetInTouch={() => handleScrollToSection('contact')}
        />

        {/* Ecosystem & Infrastructure Marquee */}
        <TrustMarquee />

        {/* 2. About H Square Section */}
        <AboutSection />

        {/* 3 & 4. Our Vision & Our Mission Section */}
        <VisionMission />

        {/* 5. Our Technology Capabilities Showcase */}
        <TechnologySection />

        {/* 6. Our Products (Flagship: ParkHere + Venture Pipeline) */}
        <ProductShowcase onOpenContact={() => handleScrollToSection('contact')} />

        {/* 7. Why H Square */}
        <WhyHSquare />

        {/* Interactive Innovation Lab & Architecture Blueprint Explorer */}
        <InnovationLab onSelectIdeaForContact={handleSelectIdeaForContact} />

        {/* 8. Contact Section: "Have an Idea? Let's Build It." */}
        <ContactSection prefilledMessage={prefilledContactMessage} />
      </main>

      {/* Floating AI Concierge Widget */}
      <AIChatConcierge onOpenContact={() => handleScrollToSection('contact')} />

      {/* Professional Footer & Final Brand Message ("Think Beyond. Build Beyond.") */}
      <Footer />
    </div>
  );
}


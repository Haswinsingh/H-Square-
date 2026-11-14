import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Volume2, 
  VolumeX, 
  Sparkles,
  Layers
} from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vision & Mission', href: '#vision-mission' },
    { name: 'Technology', href: '#technology' },
    { name: 'Products Portfolio', href: '#products' },
    { name: 'Why H Square', href: '#why-us' },
    { name: 'Innovation Lab', href: '#innovation-lab' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'vision-mission', 'technology', 'products', 'why-us', 'innovation-lab', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const enabled = soundManager.toggle();
    setSoundEnabled(enabled);
  };

  const handleLinkClick = (href) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-space-950/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => handleLinkClick('#hero')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            {/* Custom Geometric Logo Icon */}
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-space-800 to-space-900 border border-white/10 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400/50 shadow-lg shadow-cyan-500/10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <svg 
                className="w-full h-full relative z-10 text-cyan-400" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* H */}
                <path 
                  d="M26 24V76M54 24V76M26 50H54" 
                  stroke="currentColor" 
                  strokeWidth="10" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                {/* Squared 2 */}
                <path 
                  d="M66 32C66 27.5 70 24 74.5 24C79 24 82.5 27.5 82.5 31.5C82.5 36.5 77 41 72 45H83" 
                  stroke="#38bdf8" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <circle cx="82" cy="72" r="5" fill="#00f0ff" className="animate-pulse" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-white flex items-center gap-1">
                H SQUARE
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                Parent Tech Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-space-900/60 backdrop-blur-md border border-white/[0.06] shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => soundManager.playHover()}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/30 border border-cyan-400/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-glow" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Feedback Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Mute Interface Sound' : 'Enable Subtle Sci-Fi Audio'}
              className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1.5 ${
                soundEnabled
                  ? 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300'
                  : 'bg-space-900/50 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="hidden xl:inline text-[11px] font-mono">AUDIO ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden xl:inline text-[11px] font-mono">AUDIO OFF</span>
                </>
              )}
            </button>

            {/* Get In Touch CTA */}
            <a
              href="#contact"
              onClick={() => {
                soundManager.playClick();
                if (onOpenContact) onOpenContact();
              }}
              className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg bg-space-900 border border-white/10 text-slate-300"
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl bg-space-900 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-space-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-6 py-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-white/[0.04]"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-500 font-mono">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => {
                  handleLinkClick('#contact');
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


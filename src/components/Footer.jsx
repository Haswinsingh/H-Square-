import React, { useState } from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Send,
  Sparkles,
  CheckCircle2,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { BRAND_IDENTITY } from '../data/content';
import { soundManager } from '../utils/sound';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    soundManager.playClick();
    setSubscribed(true);
    soundManager.playChime();
  };

  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-space-950 border-t border-white/10 text-slate-400 text-xs overflow-hidden">

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">

        {/* Top Banner: Final Brand Message */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-space-900 via-space-850 to-space-900 border border-cyan-500/30 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>THE H SQUARE CREED</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              {BRAND_IDENTITY.name}
            </h3>
            <p className="text-lg sm:text-xl font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 font-bold mt-1">
              "{BRAND_IDENTITY.finalMessage}"
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => soundManager.playClick()}
              className="px-6 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              Start a Conversation
            </a>
            <button
              onClick={scrollToTop}
              title="Return to top"
              className="p-3.5 rounded-xl bg-space-950 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Column Footer Navigation & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/[0.08]">

          {/* Col 1: Brand Info & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-space-800 to-space-900 border border-cyan-400/40 flex items-center justify-center text-cyan-400 font-display font-black text-xs">
                H²
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">
                H SQUARE
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Parent technology and AI innovation startup focused on developing multiple digital products and solving real-world problems through technology.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-space-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-space-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-space-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Ecosystem
            </div>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-cyan-300 transition-colors">About H Square</a></li>
              <li><a href="#vision-mission" className="hover:text-cyan-300 transition-colors">Vision & Mission</a></li>
              <li><a href="#technology" className="hover:text-cyan-300 transition-colors">Core Technology</a></li>
              <li><a href="#products" className="hover:text-cyan-300 transition-colors">Products Portfolio</a></li>
              <li><a href="https://parkhere-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"><span>ParkHere (Live)</span><span className="text-[10px]">↗</span></a></li>
              <li><a href="#why-us" className="hover:text-cyan-300 transition-colors">Why H Square</a></li>
              <li><a href="#innovation-lab" className="hover:text-cyan-300 transition-colors">Innovation Lab</a></li>
            </ul>
          </div>

          {/* Col 3: Technology Domains */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Technology Domains
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Full-Stack Software Development</li>
              <li>Intelligent Automation</li>
              <li>Cloud Technologies</li>
              <li>IoT & Smart Solutions</li>
              <li>Digital Product Innovation</li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Early Access */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Venture Dispatch
            </div>
            <p className="text-xs text-slate-400">
              Receive quarterly breakthroughs in AI, venture launches, and technical architecture whitepapers.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="engineer@domain.com"
                    className="w-full px-3 py-2 rounded-lg bg-space-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-cyan-500 text-space-950 hover:bg-cyan-400 transition-colors shrink-0"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-500 font-mono block">Zero spam. Encrypted storage.</span>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 flex items-center gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Subscribed to H Square Dispatch</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Status, Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">

          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400">ALL SYSTEMS OPERATIONAL • ENGINEERING NEXT-GEN TECH</span>
          </div>

          {/* Copyright */}
          <div>
            © {new Date().getFullYear()} {BRAND_IDENTITY.name} Technologies Inc. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-slate-300 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#hero" className="hover:text-slate-300 transition-colors">Terms</a>
            <span>•</span>
            <a href="#hero" className="hover:text-slate-300 transition-colors">Security</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

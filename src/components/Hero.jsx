import React from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  ExternalLink,
  ChevronDown,
  Layers,
  Code
} from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function Hero({ onExploreWork, onGetInTouch }) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Cyber Grid Lines overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Category Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-space-850/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-6 shadow-lg shadow-cyan-950/50 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-semibold uppercase tracking-widest text-[11px]">
                PARENT TECHNOLOGY & AI INNOVATION STARTUP
              </span>
            </div>

            {/* Large Brand Identity Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono tracking-widest uppercase text-slate-400">
                Parent Studio
              </span>
              <div className="h-px w-8 bg-cyan-500/50" />
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white flex items-center gap-1.5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                  H SQUARE
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 font-mono">
                  H²
                </span>
              </h2>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Engineering Ideas.{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Building Tomorrow.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              We transform ambitious ideas into intelligent digital solutions through technology, artificial intelligence, and innovation. We engineer focused digital products solving real-world challenges.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#products"
                onClick={() => {
                  soundManager.playClick();
                  if (onExploreWork) onExploreWork();
                }}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-200 hover:bg-right transition-all duration-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={() => {
                  soundManager.playClick();
                  if (onGetInTouch) onGetInTouch();
                }}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide text-slate-200 bg-space-900/80 hover:bg-space-850 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
              >
                <span>Get in Touch</span>
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>

            {/* Trust Markers */}
            <div className="mt-10 pt-8 border-t border-white/[0.08] w-full flex flex-wrap items-center gap-y-4 gap-x-8 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>AI-First Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Sub-100ms Inference</span>
              </div>
            </div>

          </div>

          {/* Right Column: Holographic Tech Terminal & Telemetry Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient decorative glow around card */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-blue-600/20 to-purple-600/30 rounded-2xl blur-xl opacity-75 animate-pulse-subtle" />

            {/* Futuristic Tech Console Card */}
            <div className="relative rounded-2xl bg-space-900/90 border border-white/15 p-6 backdrop-blur-2xl shadow-2xl overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">hsquare-core-v2.6</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </div>
              </div>

              {/* Live Neural Pipeline Telemetry */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* Active Venture Pipeline */}
                <div className="p-3 rounded-xl bg-space-950/70 border border-white/[0.06]">
                  <div className="flex items-center justify-between text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                      <Terminal className="w-3.5 h-3.5" />
                      PRODUCT 01 IN PORTFOLIO
                    </span>
                    <a 
                      href="https://parkhere-seven.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800 hover:underline flex items-center gap-1"
                    >
                      <span>LIVE ON VERCEL</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-white font-display font-bold text-base">ParkHere</span>
                    <span className="text-slate-400 text-[11px]">AI Parking Marketplace</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-1">
                    "Your Spot. Right Here." • Developed by H SQUARE
                  </p>
                </div>

                {/* Real-time stats grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-space-950/60 border border-white/[0.06]">
                    <div className="text-slate-400 text-[10px] uppercase">Engineered Latency</div>
                    <div className="text-cyan-400 text-lg font-bold mt-0.5">&lt; 42ms</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                      <span>▲ Optimal</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-space-950/60 border border-white/[0.06]">
                    <div className="text-slate-400 text-[10px] uppercase">AI Model Accuracy</div>
                    <div className="text-cyan-400 text-lg font-bold mt-0.5">99.82%</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Zero-drift verified</div>
                  </div>
                </div>

                {/* Console Log Feed */}
                <div className="p-3 rounded-xl bg-space-950/80 border border-cyan-500/20 text-[11px] space-y-1.5">
                  <div className="text-slate-400 flex items-center justify-between border-b border-white/[0.06] pb-1">
                    <span className="text-[10px] uppercase text-cyan-400">Neural Activity Stream</span>
                    <span className="text-[10px] text-slate-500">Live</span>
                  </div>
                  <div className="text-emerald-400">
                    <span className="text-slate-500">&gt; </span>[DEPLOYED] Geospatial H3 Index loaded
                  </div>
                  <div className="text-cyan-300">
                    <span className="text-slate-500">&gt; </span>[OPTIMIZING] Dynamic surge algorithm
                  </div>
                  <div className="text-slate-300">
                    <span className="text-slate-500">&gt; </span>[ACTIVE] Ready for new venture acceleration
                  </div>
                </div>

                {/* Quick Interactive Button inside terminal */}
                <a
                  href="#products"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 transition-colors text-xs font-sans font-medium"
                >
                  <span>Explore ParkHere Architecture</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            onClick={() => soundManager.playHover()}
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <span>DISCOVER H SQUARE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
}


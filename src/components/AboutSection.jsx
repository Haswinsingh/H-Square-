import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp,
  Target,
  Zap
} from 'lucide-react';
import { ABOUT_PILLARS, BRAND_IDENTITY } from '../data/content';
import { soundManager } from '../utils/sound';

export default function AboutSection() {
  const [activePillar, setActivePillar] = useState(0);

  const getPillarIcon = (name) => {
    switch (name) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-indigo-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default: return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-space-950/70 border-t border-white/[0.05]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            ABOUT H SQUARE
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Building Practical, Scalable &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Intelligent Products
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            H SQUARE is an emerging technology and AI innovation startup focused on developing multiple digital products and solving real-world problems through technology. We operate as a parent venture studio, engineering practical, scalable, and intelligent digital solutions designed to endure.
          </p>
        </div>

        {/* Narrative & Brand Formula */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Left Narrative Box */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <div className="p-8 rounded-2xl bg-space-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
              
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <span>The H² Philosophy:</span>
                <span className="text-cyan-400 font-mono text-lg">Human × High-Tech</span>
              </h3>

              <p className="mb-4">
                At H SQUARE, we reject technology for technology's sake. The superscript <strong className="text-white">²</strong> in our identity symbolizes an exponential multiplier: when deep human ingenuity is multiplied by cutting-edge artificial intelligence, everyday barriers dissolve.
              </p>

              <p className="mb-6">
                As a parent technology brand, H SQUARE operates as an engine for multiple specialized ventures. Our first showcased product, <strong className="text-cyan-300">ParkHere</strong>, demonstrates this ethos by converting unused urban parking capacity into an AI-driven community marketplace. With additional digital products continually incubating across our pipeline, our engineering foundation remains uncompromising: fast execution, clean code, real-world utility, and bulletproof security.
              </p>

              {/* Trait Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {BRAND_IDENTITY.personality.map((trait) => (
                  <span 
                    key={trait} 
                    className="px-3 py-1 rounded-lg bg-space-950 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium"
                  >
                    ✦ {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Formula Visual */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-space-900 via-space-850 to-space-900 border border-cyan-500/30 shadow-2xl relative">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">
                VENTURE EQUATION
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-space-950/80 border border-white/10">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-semibold text-white">Authentic Problem Identification</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Step 01</span>
                </div>

                <div className="flex justify-center text-cyan-400 font-bold text-lg">
                  +
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-space-950/80 border border-white/10">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-semibold text-white">AI-Native Software Engineering</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Step 02</span>
                </div>

                <div className="flex justify-center text-cyan-400 font-bold text-lg">
                  =
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-cyan-300 uppercase">Outcome</div>
                      <div className="text-lg font-display font-bold text-white mt-0.5">High-Impact Market Products</div>
                    </div>
                    <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    Scalable, monetizable, and delighting users on day one.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              onMouseEnter={() => {
                soundManager.playHover();
                setActivePillar(idx);
              }}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-default flex flex-col justify-between ${
                activePillar === idx
                  ? 'bg-space-850/90 border-cyan-400/50 shadow-xl shadow-cyan-950/40 -translate-y-1'
                  : 'bg-space-900/50 border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-space-950 border border-white/10 flex items-center justify-center mb-5 shadow-inner">
                  {getPillarIcon(pillar.icon)}
                </div>

                <h4 className="text-lg font-display font-bold text-white mb-2">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-baseline justify-between">
                <div>
                  <div className="text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
                    {pillar.metric}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {pillar.metricLabel}
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-cyan-400/60" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


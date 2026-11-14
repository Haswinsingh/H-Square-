import React from 'react';
import { 
  Eye, 
  Target, 
  Compass, 
  Rocket, 
  Quote, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Globe2
} from 'lucide-react';
import { VISION_DATA, MISSION_DATA } from '../data/content';
import { soundManager } from '../utils/sound';

export default function VisionMission() {
  return (
    <section id="vision-mission" className="relative py-28 overflow-hidden bg-space-950">
      {/* Background radial lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            PURPOSE & DIRECTION
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Our Vision &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Our Mission
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every product we incubate, every line of neural architecture we optimize, and every partnership we form is guided by two unwavering North Stars.
          </p>
        </div>

        {/* Dual Monolith Cards: Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: OUR VISION */}
          <div 
            onMouseEnter={() => soundManager.playHover()}
            className="group relative rounded-3xl bg-gradient-to-b from-space-900/90 to-space-950/90 border border-white/10 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-950/50 flex flex-col justify-between"
          >
            {/* Top decorative accent */}
            <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              {/* Header with Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-950/50">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Direction</span>
                    <h3 className="text-2xl font-display font-bold text-white">OUR VISION</h3>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors" />
              </div>

              {/* Exact Vision Statement */}
              <div className="relative mb-8 p-6 rounded-2xl bg-space-950/80 border border-cyan-500/20">
                <p className="text-lg sm:text-xl font-display font-semibold text-white leading-relaxed italic">
                  "{VISION_DATA.quote}"
                </p>
              </div>

              {/* Key Tenets */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Strategic Horizon
                </div>
                {VISION_DATA.keyTenets.map((tenet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <Globe2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-slate-100 font-semibold">{tenet.title}: </strong>
                      <span className="text-slate-300">{tenet.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-cyan-400">
              <span>DESTINATION: 2030 & BEYOND</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Exploring Horizons →
              </span>
            </div>
          </div>

          {/* Card 2: OUR MISSION */}
          <div 
            onMouseEnter={() => soundManager.playHover()}
            className="group relative rounded-3xl bg-gradient-to-b from-space-900/90 to-space-950/90 border border-white/10 p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-950/50 flex flex-col justify-between"
          >
            {/* Top decorative accent */}
            <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              {/* Header with Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-950/50">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Execution</span>
                    <h3 className="text-2xl font-display font-bold text-white">OUR MISSION</h3>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" />
              </div>

              {/* Exact Mission Statement */}
              <div className="relative mb-8 p-6 rounded-2xl bg-space-950/80 border border-blue-500/20">
                <p className="text-lg sm:text-xl font-display font-semibold text-white leading-relaxed italic">
                  "{MISSION_DATA.quote}"
                </p>
              </div>

              {/* Key Tenets */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Execution Mandates
                </div>
                {MISSION_DATA.keyTenets.map((tenet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <Cpu className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-slate-100 font-semibold">{tenet.title}: </strong>
                      <span className="text-slate-300">{tenet.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-blue-400">
              <span>VELOCITY: ZERO TO ONE</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Driving Execution →
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { 
  Lightbulb, 
  Sparkles, 
  HeartHandshake, 
  TrendingUp, 
  Compass, 
  Check, 
  X, 
  Zap,
  Shield,
  Layers
} from 'lucide-react';
import { WHY_US } from '../data/content';
import { soundManager } from '../utils/sound';

export default function WhyHSquare() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const getPillarIcon = (name) => {
    switch (name) {
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-sky-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-indigo-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-purple-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-emerald-400" />;
      default: return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  const comparisonData = [
    {
      feature: "AI Integration Depth",
      conventional: "Superficial API wrappers over generic LLMs",
      hsquare: "Ground-up fine-tuned models, local SLMs & real-time telemetry",
    },
    {
      feature: "Product Velocity",
      conventional: "Months of bureaucratic discovery & rigid sprints",
      hsquare: "Rapid 0-to-1 prototyping; functional MVPs in 4-6 weeks",
    },
    {
      feature: "System Architecture",
      conventional: "Monolithic, difficult to scale, high technical debt",
      hsquare: "Cloud-native microservices, edge computing & auto-scaling",
    },
    {
      feature: "User Experience",
      conventional: "Generic dashboard templates with clunky navigation",
      hsquare: "Tailored, fluid interfaces with sub-100ms micro-interactions",
    },
    {
      feature: "Ownership & Code Quality",
      conventional: "Locked-in proprietary traps & opaque dependencies",
      hsquare: "Clean, auditable, fully documented enterprise-grade code",
    }
  ];

  return (
    <section id="why-us" className="relative py-28 overflow-hidden bg-space-950 border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            THE H SQUARE ADVANTAGE
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Why Visionaries Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              H SQUARE
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We reject the conventional agency playbook. We operate with the agility of a startup lab, the mathematical rigor of AI researchers, and the craft of master engineers.
          </p>
        </div>

        {/* 5 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {WHY_US.map((item, idx) => (
            <div
              key={item.title}
              onMouseEnter={() => {
                soundManager.playHover();
                setHoveredIdx(idx);
              }}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`p-8 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between ${
                hoveredIdx === idx
                  ? 'bg-space-850/90 border-cyan-400/50 shadow-2xl shadow-cyan-950/60 -translate-y-1'
                  : 'bg-space-900/50 border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-space-950 border border-white/10 flex items-center justify-center shadow-inner">
                    {getPillarIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 px-2 py-1 rounded bg-space-950 border border-white/5">
                    0{idx + 1}
                  </span>
                </div>

                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  {item.subtitle}
                </span>

                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>VERIFIED STANDARD</span>
                <span className="text-cyan-400">● ACTIVE</span>
              </div>
            </div>
          ))}

          {/* 6th Card: The Promise Summary */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-space-900 to-space-950 border border-cyan-500/40 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 block mb-1">
                OUR COMMITMENT
              </span>

              <h3 className="text-xl font-display font-bold text-white mb-3">
                Zero Fluff. Pure Execution.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We measure our worth by the resilience of our production systems, the delight of end-users, and the exponential growth of our ventures.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-cyan-500/20 text-xs font-mono text-cyan-300">
              "Think Beyond. Build Beyond."
            </div>
          </div>
        </div>

        {/* The Paradigm Comparison Table */}
        <div className="p-8 sm:p-10 rounded-3xl bg-space-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                BENCHMARK COMPARISON
              </span>
              <h3 className="text-2xl font-display font-bold text-white">
                The H Square Difference
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Evaluating the Shift to AI-Native Development
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono text-xs uppercase">
                  <th className="py-3.5 px-4">Evaluation Dimension</th>
                  <th className="py-3.5 px-4 text-slate-400">Conventional Tech Agencies</th>
                  <th className="py-3.5 px-4 text-cyan-400 bg-cyan-950/20 rounded-t-xl">H SQUARE Paradigm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                      <span>{row.conventional}</span>
                    </td>
                    <td className="py-4 px-4 text-cyan-200 bg-cyan-950/20 font-medium">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{row.hsquare}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}


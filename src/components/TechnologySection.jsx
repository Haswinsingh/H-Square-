import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Code2, 
  Workflow, 
  CloudFog, 
  RadioTower, 
  Rocket,
  CheckCircle,
  ExternalLink,
  Cpu,
  Layers,
  ChevronRight,
  Terminal
} from 'lucide-react';
import { TECHNOLOGIES } from '../data/content';
import { soundManager } from '../utils/sound';

export default function TechnologySection() {
  const [selectedTech, setSelectedTech] = useState(TECHNOLOGIES[0].id);

  const getTechIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className={className} />;
      case 'Code2': return <Code2 className={className} />;
      case 'Workflow': return <Workflow className={className} />;
      case 'CloudFog': return <CloudFog className={className} />;
      case 'RadioTower': return <RadioTower className={className} />;
      case 'Rocket': return <Rocket className={className} />;
      default: return <Cpu className={className} />;
    }
  };

  const currentTech = TECHNOLOGIES.find(t => t.id === selectedTech) || TECHNOLOGIES[0];

  return (
    <section id="technology" className="relative py-28 overflow-hidden bg-space-950 border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            ENGINEERING CAPABILITIES
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Our Technology{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Stack & Capabilities
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From deep neural networks to resilient cloud fabrics and edge IoT sensors, our multi-disciplinary engineering powers high-velocity product execution.
          </p>
        </div>

        {/* Interactive Capability Selector Tabs for Fast Scanning */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-12 gap-2 scrollbar-none">
          {TECHNOLOGIES.map((tech) => {
            const isSelected = selectedTech === tech.id;
            return (
              <button
                key={tech.id}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedTech(tech.id);
                }}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-950/60'
                    : 'bg-space-900/60 border-white/10 text-slate-400 hover:text-white hover:bg-space-850'
                }`}
              >
                {getTechIcon(tech.icon, "w-4 h-4")}
                <span>{tech.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Deep Dive Interactive Display for Selected Tech */}
        <div className="mb-16 p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-space-900/90 via-space-850/80 to-space-950/90 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Tech Overview & Capabilities */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center">
                  {getTechIcon(currentTech.icon, "w-6 h-6")}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {currentTech.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {currentTech.name}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {currentTech.summary}
              </p>

              {/* Detailed Breakdown */}
              <div className="space-y-3 mb-8">
                {currentTech.details.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Stat Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-space-950 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>BENCHMARK: {currentTech.highlightStat}</span>
              </div>
            </div>

            {/* Right Column: Tech Stack & Architecture Tags */}
            <div className="lg:col-span-5 bg-space-950/80 rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>PROVEN STACK & TOOLING</span>
                  </div>
                  <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
                    PRODUCTION
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5 mb-6">
                  {currentTech.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-space-900 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-slate-200 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-space-900/60 border border-cyan-500/20 text-xs text-slate-300">
                <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Deployment Readiness</span>
                </div>
                Fully integrated with automated testing, CI/CD telemetry, and SOC-2 compliant infrastructure standards.
              </div>
            </div>

          </div>
        </div>

        {/* 6 Technology Showcase Grid (All Domains) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGIES.map((tech) => {
            const isSelected = selectedTech === tech.id;
            return (
              <div
                key={tech.id}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedTech(tech.id);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-space-850/90 border-cyan-400/50 shadow-xl shadow-cyan-950/40'
                    : 'bg-space-900/40 border-white/[0.08] hover:bg-space-900/70 hover:border-white/20 hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-space-950 border border-white/10 flex items-center justify-center text-cyan-400">
                      {getTechIcon(tech.icon, "w-5 h-5")}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-space-950 border border-white/5">
                      {tech.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-bold text-white mb-2">
                    {tech.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                    {tech.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400">{tech.highlightStat}</span>
                  <span className="text-slate-400 flex items-center gap-1 group-hover:text-cyan-300">
                    Inspect <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


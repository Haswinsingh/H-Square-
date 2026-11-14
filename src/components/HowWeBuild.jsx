import React, { useState } from 'react';
import { 
  Compass, 
  Cpu, 
  CloudFog, 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Terminal,
  Zap
} from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function HowWeBuild() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: "01",
      title: "Problem Discovery & Modeling",
      subtitle: "Authentic Friction Analysis",
      icon: Compass,
      description: "We identify structural inefficiencies in urban spaces, enterprise workflows, and logistics. We mathematically model the market dynamics before writing a single line of production code.",
      deliverable: "Feasibility Model & System Blueprint",
      metrics: "100% Data-Validated",
      tags: ["Market Mapping", "Algorithmic Feasibility", "UX Journey Modeling"]
    },
    {
      step: "02",
      title: "AI-First Rapid Prototyping",
      subtitle: "0-to-1 Acceleration in 4-6 Weeks",
      icon: Cpu,
      description: "Rather than bolting AI on as an afterthought, we architect neural embeddings, spatial detection algorithms, or multi-agent workflows into the system core from day one.",
      deliverable: "High-Fidelity Functional MVP",
      metrics: "Sub-100ms Latency Target",
      tags: ["Domain LLMs/SLMs", "Computer Vision", "Reactive React/TypeScript"]
    },
    {
      step: "03",
      title: "Resilient Cloud & Edge Deployment",
      subtitle: "Zero-Downtime Infrastructure",
      icon: CloudFog,
      description: "Every product is containerized with Docker and orchestrated on multi-cloud Kubernetes clusters with automated CI/CD telemetry, real-time edge streaming, and strict encryption.",
      deliverable: "Production-Grade Distributed Cloud",
      metrics: "99.99% Uptime Architecture",
      tags: ["Multi-Region Failover", "Terraform IaC", "SOC-2 Ready"]
    },
    {
      step: "04",
      title: "Independent Venture Scaling",
      subtitle: "Self-Sustaining Digital Products",
      icon: Rocket,
      description: "Each digital product operates as an independent venture backed by H Square's centralized AI innovations and capital efficiency — scaling smoothly to millions of active users.",
      deliverable: "Autonomous Market Platform",
      metrics: "Global Market Reach",
      tags: ["Continuous Learning", "Product-Led Growth", "Ecosystem Synergy"]
    }
  ];

  return (
    <section id="how-we-build" className="relative py-28 overflow-hidden bg-space-950 border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE VENTURE LIFECYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            How H Square{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Engineers Digital Products
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our systematic 4-stage engineering lifecycle bridges the gap between raw imagination and production-grade products that simplify everyday life.
          </p>
        </div>

        {/* 4 Interactive Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;
            return (
              <div
                key={stage.step}
                onClick={() => {
                  soundManager.playClick();
                  setActiveStage(idx);
                }}
                onMouseEnter={() => soundManager.playHover()}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-space-850/95 border-cyan-400/60 shadow-2xl shadow-cyan-950/60 -translate-y-1.5'
                    : 'bg-space-900/40 border-white/10 hover:border-white/20 hover:bg-space-900/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-lg shadow-cyan-950/50'
                        : 'bg-space-950 border-white/10 text-slate-400'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-mono text-cyan-400 bg-space-950 px-2 py-0.5 rounded border border-white/5">
                      STAGE {stage.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    {stage.subtitle}
                  </span>

                  <h3 className="text-lg font-display font-bold text-white mb-3">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Deliverable:</span>
                    <span className="text-cyan-300 font-medium">{stage.deliverable}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">Target:</span>
                    <span className="text-emerald-400 font-semibold">{stage.metrics}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-space-900/90 via-space-850/90 to-space-900/90 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-cyan-400">
                ACTIVE FOCUS: STAGE {stages[activeStage].step} — {stages[activeStage].title}
              </div>
              <div className="text-sm font-display font-semibold text-white mt-0.5">
                Utilized across ParkHere, NeuroFlow, and upcoming H Square incubation cycles.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {stages[activeStage].tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-space-950 border border-white/10 text-xs font-mono text-slate-300"
              >
                ✦ {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

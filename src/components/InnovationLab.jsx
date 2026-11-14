import React, { useState } from 'react';
import { 
  Cpu, 
  Workflow, 
  Layers, 
  Terminal, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  CheckCircle,
  Code2,
  Database,
  Cloud
} from 'lucide-react';
import { SIMULATOR_ARCHETYPES } from '../data/content';
import { soundManager } from '../utils/sound';

export default function InnovationLab({ onSelectIdeaForContact }) {
  const [activeArchetypeId, setActiveArchetypeId] = useState(SIMULATOR_ARCHETYPES[0].id);
  const [customIdeaInput, setCustomIdeaInput] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedResult, setSimulatedResult] = useState(null);

  const activeArchetype = SIMULATOR_ARCHETYPES.find(a => a.id === activeArchetypeId) || SIMULATOR_ARCHETYPES[0];

  const handleSimulateCustom = (e) => {
    e.preventDefault();
    if (!customIdeaInput.trim()) return;
    soundManager.playClick();
    setIsSimulating(true);

    setTimeout(() => {
      setSimulatedResult({
        title: customIdeaInput,
        architecture: [
          { phase: "Data Ingestion", tech: "Event-driven Webhook + Stream Telemetry" },
          { phase: "Intelligence", tech: "Fine-tuned Domain LLM + Vector Search" },
          { phase: "Microservices", tech: "Serverless Edge Workers + Redis Cache" },
          { phase: "Client UI", tech: "Sub-100ms Reactive PWA with Push Notifications" }
        ],
        projectedTimeline: "4-6 Weeks to MVP",
        scalability: "1M+ Daily Transactions Ready"
      });
      setIsSimulating(false);
    }, 700);
  };

  return (
    <section id="innovation-lab" className="relative py-28 overflow-hidden bg-space-950/90 border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            INTERACTIVE SYSTEM BLUEPRINT
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            H Square Innovation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Lab & Architecture
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            See how we take an ambitious problem statement and engineer it into a resilient, production-ready system in weeks.
          </p>
        </div>

        {/* Archetype Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {SIMULATOR_ARCHETYPES.map((arch) => (
            <button
              key={arch.id}
              onClick={() => {
                soundManager.playClick();
                setActiveArchetypeId(arch.id);
                setSimulatedResult(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2.5 border ${
                activeArchetypeId === arch.id && !simulatedResult
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-950/60'
                  : 'bg-space-900/60 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>{arch.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Architecture Canvas */}
        <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-space-900/90 via-space-900/80 to-space-950 border border-cyan-500/30 shadow-2xl mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Problem & Target Solution */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>CASE BLUEPRINT: {activeArchetype.solution}</span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500">The Everyday Challenge</span>
                <p className="text-base font-semibold text-white mt-1">
                  "{activeArchetype.problem}"
                </p>
              </div>

              <div className="p-4 rounded-xl bg-space-950 border border-cyan-500/20">
                <span className="text-[10px] font-mono uppercase text-cyan-400">Engineered Impact</span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {activeArchetype.outcome}
                </p>
              </div>

              <button
                onClick={() => {
                  soundManager.playClick();
                  if (onSelectIdeaForContact) {
                    onSelectIdeaForContact(`Interested in building a solution similar to ${activeArchetype.solution}`);
                  }
                }}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300"
              >
                <span>Engineer This Architecture With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right: The 4-Stage Technical Flow Pipeline */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Production Pipeline Topology</span>
                <span className="text-cyan-400">Low-Latency Mesh</span>
              </div>

              <div className="space-y-3">
                {activeArchetype.architecture.map((node, i) => (
                  <div 
                    key={i}
                    className="p-4 rounded-2xl bg-space-950/80 border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
                        0{i + 1}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-cyan-400 block">
                          Phase: {node.phase}
                        </span>
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {node.tech}
                        </h4>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Optimized</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Live Idea Tester / Interactive Input Box */}
        <div className="p-8 rounded-3xl bg-space-900/60 border border-white/10 backdrop-blur-xl">
          <div className="max-w-2xl mx-auto text-center">
            <Sparkles className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Have a Custom Concept? Test the Architecture.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Enter your product idea to generate a rapid simulated engineering blueprint.
            </p>

            <form onSubmit={handleSimulateCustom} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={customIdeaInput}
                onChange={(e) => setCustomIdeaInput(e.target.value)}
                placeholder="e.g. AI-driven logistics tracker, smart clinic triage app..."
                className="flex-1 px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                disabled={isSimulating || !customIdeaInput.trim()}
                className="px-6 py-3 rounded-xl bg-cyan-500 text-space-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shrink-0"
              >
                {isSimulating ? (
                  <>
                    <Zap className="w-4 h-4 animate-spin" />
                    <span>Synthesizing...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {simulatedResult && (
              <div className="mt-6 p-6 rounded-2xl bg-space-950 border border-cyan-400/40 text-left animate-fadeIn">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                  <span className="text-xs font-mono text-cyan-400 uppercase">
                    SIMULATED ARCHITECTURE: "{simulatedResult.title}"
                  </span>
                  <span className="text-xs font-mono text-emerald-400">{simulatedResult.projectedTimeline}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {simulatedResult.architecture.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-space-900 border border-white/5 text-xs">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">{item.phase}</span>
                      <strong className="text-white mt-0.5 block">{item.tech}</strong>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400 font-mono">Status: Architecture Feasible & Validated</span>
                  <a
                    href="#contact"
                    onClick={() => {
                      if (onSelectIdeaForContact) {
                        onSelectIdeaForContact(`Let's build my idea: ${simulatedResult.title}`);
                      }
                    }}
                    className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Build this with H Square →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}


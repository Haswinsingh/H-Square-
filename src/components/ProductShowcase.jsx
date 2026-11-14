import React, { useState } from 'react';
import { 
  Car, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Smartphone, 
  Layers, 
  RadioTower, 
  Network,
  Clock,
  DollarSign,
  Maximize2,
  ExternalLink,
  Globe,
  PlusCircle,
  Cpu
} from 'lucide-react';
import { PRODUCTS } from '../data/content';
import { soundManager } from '../utils/sound';
import ParkHereModal from './ParkHereModal';

export default function ProductShowcase({ onOpenContact }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSpotPreview, setActiveSpotPreview] = useState(0);

  const parkHere = PRODUCTS.find(p => p.id === 'parkhere') || PRODUCTS[0];
  const pipelineProducts = PRODUCTS.filter(p => p.id !== 'parkhere');

  return (
    <section id="products" className="relative py-28 overflow-hidden bg-space-950/80 border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Parent Startup Brand Framing & Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            H SQUARE PRODUCT PORTFOLIO
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Multiple Products.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              One Innovation Engine.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            H SQUARE is a parent technology and AI startup focused on engineering multiple digital products that solve real-world problems. Discover our first showcased product and expanding venture portfolio.
          </p>
        </div>

        {/* Scalable Product Hierarchy Indicator Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-space-900/60 border border-white/10 mb-12 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
              H²
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 block">Parent Venture Studio</span>
              <span className="text-sm font-semibold text-white">H SQUARE Digital Product Ecosystem</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Product 01: ParkHere (Live)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-space-950 border border-white/10 text-slate-400 hidden sm:inline">
              Product 02: NeuroFlow (Incubating)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-space-950 border border-white/10 text-slate-400 hidden md:inline">
              Product 03: PulseSync (R&D)
            </span>
          </div>
        </div>

        {/* PRODUCT 01 SPOTLIGHT: PARKHERE */}
        <div className="mb-24 relative">
          
          {/* Subtle glowing halo border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/40 via-blue-600/30 to-purple-600/40 rounded-3xl blur-xl opacity-70" />

          <div className="relative rounded-3xl bg-gradient-to-b from-space-900/95 via-space-900/90 to-space-950/95 border border-cyan-400/50 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl">
            
            {/* Top Product Classification Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-950/50">
                  <Car className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800">
                      PRODUCT 01 • FIRST SHOWCASED VENTURE
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 font-mono font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Project Status: Deployed
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                      ParkHere
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      An H SQUARE Product
                    </span>
                  </div>
                </div>
              </div>

              {/* Tagline callout */}
              <div className="px-5 py-2.5 rounded-xl bg-space-950 border border-white/10 text-right">
                <span className="text-xs text-slate-400 font-mono block">Product Tagline</span>
                <span className="text-base sm:text-lg font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-200">
                  "Your Spot. Right Here."
                </span>
              </div>
            </div>

            {/* Main Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Product Narrative, Features & CTAs */}
              <div className="lg:col-span-7">
                
                {/* Official Description */}
                <div className="p-4 rounded-2xl bg-space-950/60 border border-cyan-500/20 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                    Product Description
                  </span>
                  <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
                    {parkHere.description}
                  </p>
                </div>

                {/* Key Product Features */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Key Features & Technical Capabilities
                  </span>
                  {parkHere.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-space-950/50 border border-white/[0.06] hover:border-cyan-500/30 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{feat.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Performance & Impact Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {parkHere.stats.map((stat, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-space-950 border border-white/10 text-center">
                      <div className="text-xl sm:text-2xl font-display font-extrabold text-cyan-400">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ACTION BUTTONS (Including Live Website Link) */}
                <div className="flex flex-wrap items-center gap-4">
                  {/* Primary CTA: Visit Live Website */}
                  <a
                    href="https://parkhere-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-200 hover:bg-right transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5"
                  >
                    <Globe className="w-4 h-4 text-cyan-200 animate-spin-slow" />
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Secondary CTA: Launch Interactive Simulator */}
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setModalOpen(true);
                    }}
                    className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-xs tracking-wider uppercase text-cyan-300 bg-space-950 hover:bg-space-850 border border-cyan-400/40 hover:border-cyan-300 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4 text-cyan-400" />
                    <span>Explore ParkHere Simulator</span>
                  </button>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-emerald-400">●</span>
                  <span>Direct URL: <a href="https://parkhere-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://parkhere-seven.vercel.app/</a></span>
                </div>

              </div>

              {/* Right Column: Attractive Product Preview Card & Radar Simulator */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-space-950/90 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
                  
                  {/* Live Web Banner Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono">
                    <span className="text-cyan-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      PARKHERE LIVE PREVIEW
                    </span>
                    <a 
                      href="https://parkhere-seven.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>parkhere-seven.vercel.app</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Simulated Map / Radar Screen */}
                  <div className="relative h-44 rounded-xl bg-space-900 border border-white/10 p-4 mb-4 flex flex-col justify-between overflow-hidden">
                    {/* Grid lines */}
                    <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none" />

                    {/* Spot Markers on Simulated Map */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-space-950/80 text-slate-300 border border-white/10">
                        GPS Active: 37.7749° N
                      </span>
                      <span className="text-emerald-400 font-semibold">● 3 Optimal Spots</span>
                    </div>

                    {/* Interactive Spot Selection Buttons */}
                    <div className="relative z-10 grid grid-cols-3 gap-2">
                      {parkHere.mockSpots.slice(0, 3).map((spot, idx) => (
                        <button
                          key={spot.id}
                          onClick={() => {
                            soundManager.playClick();
                            setActiveSpotPreview(idx);
                          }}
                          className={`p-2 rounded-lg text-center transition-all ${
                            activeSpotPreview === idx
                              ? 'bg-cyan-500/25 border border-cyan-400 text-cyan-300 shadow-md'
                              : 'bg-space-950/80 border border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          <div className="text-[10px] font-mono font-bold">{spot.id}</div>
                          <div className="text-xs font-display font-semibold text-white mt-0.5">{spot.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Selected Spot Details */}
                  {parkHere.mockSpots[activeSpotPreview] && (
                    <div className="p-3.5 rounded-xl bg-space-900/60 border border-white/[0.08] mb-4 text-xs">
                      <div className="flex items-center justify-between font-semibold text-white mb-1">
                        <span>{parkHere.mockSpots[activeSpotPreview].address}</span>
                        <span className="text-cyan-400 font-mono">{parkHere.mockSpots[activeSpotPreview].price}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>{parkHere.mockSpots[activeSpotPreview].type}</span>
                        <span className="text-emerald-400">{parkHere.mockSpots[activeSpotPreview].distance}</span>
                      </div>
                    </div>
                  )}

                  {/* Dual Action Inside Preview */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        setModalOpen(true);
                      }}
                      className="py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Simulator</span>
                    </button>

                    <a
                      href="https://parkhere-seven.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/40 text-blue-200 text-xs font-mono font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Web App</span>
                    </a>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* SCALABLE MULTI-PRODUCT PORTFOLIO ARCHITECTURE */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">
                EXPANDING DIGITAL VENTURES
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Upcoming Products in the H Square Portfolio
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Modular Architecture Built for Continuous Product Expansion
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Pipeline Products: NeuroFlow & PulseSync */}
            {pipelineProducts.map((prod) => (
              <div
                key={prod.id}
                onMouseEnter={() => soundManager.playHover()}
                className="p-6 rounded-2xl bg-space-900/40 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-space-950 border border-white/10 flex items-center justify-center text-cyan-400">
                      {prod.id === 'neuroflow' ? <Network className="w-5 h-5" /> : <RadioTower className="w-5 h-5" />}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-950 text-cyan-300 border border-cyan-800">
                      {prod.status}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono uppercase text-cyan-400 mb-1">
                    {prod.role}
                  </div>

                  <h4 className="text-xl font-display font-bold text-white mb-1">
                    {prod.name}
                  </h4>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {prod.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {prod.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    {prod.keyFeatures.map((f, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span><strong>{f.title}:</strong> {f.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex gap-4 text-xs font-mono text-slate-400">
                    {prod.stats.map((s, i) => (
                      <span key={i}><strong className="text-cyan-400">{s.value}</strong> {s.label}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Scalable Product Slot: Product #04 In Incubation */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-space-900/60 to-space-950 border border-dashed border-cyan-500/40 hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
                  <PlusCircle className="w-5 h-5" />
                </div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                  PORTFOLIO PRODUCT 04 • IN INCUBATION
                </span>
                <h4 className="text-xl font-display font-bold text-white mb-2">
                  Next H Square Venture
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Our lab is actively incubating additional intelligent digital products tackling enterprise workflows and autonomous urban services. Have an idea to co-build with H Square?
                </p>
              </div>

              <a
                href="#contact"
                onClick={() => {
                  soundManager.playClick();
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-space-900 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 text-cyan-300 text-xs font-mono text-center font-medium transition-colors flex items-center justify-center gap-2"
              >
                <span>Propose a Product Partnership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive Modal */}
      <ParkHereModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </section>
  );
}

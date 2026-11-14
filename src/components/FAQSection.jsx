import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  ArrowRight,
  MessageSquare,
  Bot
} from 'lucide-react';
import { FAQS } from '../data/content';
import { soundManager } from '../utils/sound';

export default function FAQSection({ onOpenContact }) {
  const [openIdx, setOpenIdx] = useState(0); // First item open by default

  const toggleAccordion = (idx) => {
    soundManager.playClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 overflow-hidden bg-space-950/90 border-t border-white/[0.05]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[400px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
            Understanding the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              H SQUARE Model
            </span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            Everything you need to know about our parent startup structure, multi-product development pipeline, and first showcased product ParkHere.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-space-900/90 border-cyan-500/40 shadow-xl shadow-cyan-950/40'
                    : 'bg-space-900/40 border-white/10 hover:border-white/20 hover:bg-space-900/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-display font-bold text-white flex items-center gap-3">
                    <span className="text-xs font-mono text-cyan-400 bg-space-950 px-2 py-0.5 rounded border border-white/5">
                      0{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>

                  <div
                    className={`w-8 h-8 rounded-xl bg-space-950 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyan-400 border-cyan-500/40' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Concierge Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-space-900/60 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-400/40">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Have a specific question not listed here?</div>
              <div className="text-xs text-slate-400">Ask our interactive H² Neural Assistant in the bottom right corner or message our team.</div>
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => {
              soundManager.playClick();
              if (onOpenContact) onOpenContact();
            }}
            className="px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-medium transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Ask the Leadership</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

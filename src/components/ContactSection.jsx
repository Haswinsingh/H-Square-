import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  MessageSquare,
  Lock
} from 'lucide-react';
import { BRAND_IDENTITY } from '../data/content';
import { soundManager } from '../utils/sound';

export default function ContactSection({ prefilledMessage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: 'Custom AI / ML Solution',
    budget: '$25k - $50k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({
        ...prev,
        message: prefilledMessage
      }));
    }
  }, [prefilledMessage]);

  const interestOptions = [
    'Flagship: ParkHere Marketplace',
    'Custom AI / ML Solution',
    'Full-Stack Web & Mobile App',
    'Venture Studio Co-Build',
    'Enterprise Automation',
    'General Partnership'
  ];

  const budgetOptions = [
    '< $25k',
    '$25k - $50k',
    '$50k - $100k',
    '$100k+',
    'Equity / Co-Venture'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playClick();
    setIsSubmitting(true);

    // Simulate fast reliable API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReferenceId(`HSQ-${Math.floor(100000 + Math.random() * 900000)}`);
      soundManager.playChime();
    }, 900);
  };

  const handleReset = () => {
    soundManager.playClick();
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      interest: 'Custom AI / ML Solution',
      budget: '$25k - $50k',
      message: '',
    });
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-space-950 border-t border-white/[0.05]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            INITIATE COLLABORATION
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            Have an Idea?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Let's Build It.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you are looking to deploy our flagship products, co-engineer a breakthrough venture, or transform your enterprise with custom AI — our engineering team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Pitch Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-space-900/90 to-space-950 border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Direct Engineering Partnership
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                You will collaborate directly with seasoned product architects, machine learning researchers, and full-stack builders. No endless account management layers.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-space-950 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Direct Inquiries</span>
                    <a href={`mailto:${BRAND_IDENTITY.email}`} className="text-white hover:text-cyan-400 font-mono transition-colors">
                      {BRAND_IDENTITY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-space-950 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Response Commitment</span>
                    <span className="text-white font-medium">&lt; 24 Hour Turnaround Guaranteed</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-space-950 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Headquarters</span>
                    <span className="text-white font-medium">Silicon Valley & Global Distributed Labs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* IP Security & NDA Badge */}
            <div className="p-6 rounded-2xl bg-space-900/40 border border-cyan-500/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">Full IP Protection & Mutual NDA</div>
                <div className="text-slate-400 mt-0.5">
                  All shared concepts are strictly confidential under standard mutual NDA safeguards.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-space-900/80 border border-white/15 backdrop-blur-2xl shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Work / Primary Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Company or Project Name
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Stealth AI Venture or Enterprise Org"
                      className="w-full px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Interest Category Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2.5">
                      Primary Area of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interestOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => {
                            soundManager.playClick();
                            setFormData(prev => ({ ...prev, interest: opt }));
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                            formData.interest === opt
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                              : 'bg-space-950 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Scope */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2.5">
                      Estimated Project Scope / Capital
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => {
                            soundManager.playClick();
                            setFormData(prev => ({ ...prev, budget: b }));
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                            formData.budget === b
                              ? 'bg-blue-600/30 text-blue-300 border-blue-400'
                              : 'bg-space-950 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Project Goals & Details <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your idea, technical requirements, or partnership vision..."
                      className="w-full px-4 py-3 rounded-xl bg-space-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-xs tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-200 hover:bg-right transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/40 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin text-white" />
                        <span>Transmitting Blueprint...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Direct encrypted routing to senior engineering partners</span>
                  </div>

                </form>
              ) : (
                /* Submission Confirmation State */
                <div className="py-12 px-6 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/40 shadow-xl shadow-emerald-950/60">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                      DISPATCH CONFIRMED
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mt-1">
                      Brief Received, {formData.name.split(' ')[0]}!
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Our lead venture engineer is reviewing your brief. We will reach back out to <strong className="text-cyan-300 font-mono">{formData.email}</strong> within 24 business hours.
                  </p>

                  <div className="p-4 rounded-xl bg-space-950 border border-white/10 max-w-sm mx-auto text-xs font-mono text-slate-400">
                    <div className="text-slate-500 text-[10px] uppercase">TRACKING REFERENCE</div>
                    <div className="text-cyan-400 font-bold text-sm mt-0.5">{referenceId}</div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:border-white/20 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


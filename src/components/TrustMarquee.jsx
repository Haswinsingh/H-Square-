import React from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Workflow, 
  Server, 
  Terminal, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function TrustMarquee() {
  const badges = [
    { label: "NVIDIA INCEPTION ECOSYSTEM", icon: Cpu },
    { label: "AWS CLOUD NATIVE SCALE", icon: Server },
    { label: "PYTORCH & TENSORFLOW ACCELERATED", icon: Zap },
    { label: "SOC-2 COMPLIANT POSTURE", icon: ShieldCheck },
    { label: "KUBERNETES MICROSERVICES MESH", icon: Layers },
    { label: "SUB-100MS P99 EDGE TELEMETRY", icon: Terminal },
    { label: "ZERO-DATA-LEAKAGE PRIVACY", icon: Sparkles },
    { label: "ENTERPRISE MULTI-TENANT READY", icon: Workflow },
  ];

  return (
    <div className="relative py-8 bg-space-950/90 border-y border-white/[0.06] overflow-hidden">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-space-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-space-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee space-x-10 text-slate-400 font-mono text-xs tracking-widest uppercase">
        {/* Double array for seamless endless scroll effect */}
        {[...badges, ...badges].map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div 
              key={idx}
              className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-space-900/60 border border-white/[0.08] hover:border-cyan-500/30 transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-medium text-slate-300">{badge.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}


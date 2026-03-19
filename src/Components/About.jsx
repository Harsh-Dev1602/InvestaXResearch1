import React from 'react';
import { Target, Eye, ShieldCheck, LineChart, Award, Users2, Layers, ChevronRight } from 'lucide-react';

/* ─── Timeline Item ─────────────────────────────────────── */
function TimelineItem({ year, title, description, side }) {
  const isLeft = side === 'left';
  return (
    <div className={`flex w-full mb-16 relative ${isLeft ? 'justify-start' : 'justify-end'}`}>
      {/* Center Dot */}
      <div className="absolute left-1/2 top-3 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-4 border-[#0f172a] z-10 hidden md:block" />
      
      <div className={`w-full md:w-[45%] p-8 bg-[#1e293b]/40 border border-white/5 rounded-3xl hover:border-emerald-500/30 transition-all duration-300 group ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="font-black text-3xl text-emerald-500 mb-2 font-mono tracking-tighter">{year}</div>
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ─── Value Card ────────────────────────────────────────── */
function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="p-10 text-center border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.02] transition-colors group">
      <div className="text-emerald-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-emerald-500/20">
            Our Story
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
            THE VANGUARD OF <br />
            <span className="text-emerald-500">FINANCIAL RESEARCH</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Investa-X was founded with a single mission: to provide institutional-grade market intelligence to the modern Indian investor — fully regulated and transparent.
          </p>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────── */}
      <section className="py-24 px-6 bg-[#0f172a]/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              icon: Target, 
              title: 'Our Mission', 
              text: 'To democratize professional equity research by making it accessible, transparent, and actionable for retail traders across India.' 
            },
            { 
              icon: Eye, 
              title: 'Our Vision', 
              text: "To become India's premier regulated advisory platform, setting the gold standard for integrity and precision-driven wealth creation." 
            },
          ].map((item, i) => (
            <div key={i} className="p-12 bg-[#1e293b]/30 border border-white/5 rounded-[2rem] hover:bg-[#1e293b]/50 transition-all duration-300">
              <item.icon size={48} className="text-emerald-500 mb-8" strokeWidth={1} />
              <h2 className="text-3xl font-bold text-white mb-6">{item.title}</h2>
              <p className="text-slate-400 leading-relaxed text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BADGES ─────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-12">Regulatory Credentials</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'SEBI Research Analyst', value: 'INH000022792' },
              { label: 'BSE Enlistment', value: '6643' },
              { label: 'Operating Since', value: '2019' },
            ].map((badge, i) => (
              <div key={i} className="flex-1 min-w-[280px] max-w-sm p-10 bg-gradient-to-b from-[#1e293b] to-transparent border border-white/5 rounded-3xl">
                <ShieldCheck size={32} className="text-emerald-500 mx-auto mb-6" />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{badge.label}</p>
                <p className="text-2xl font-black text-white font-mono">{badge.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────── */}
      <section className="border-y border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ValueCard icon={Award} title="Integrity First" description="Loyalty to our clients' wealth. Strict non-conflict policies in all recommendations." />
        <ValueCard icon={Users2} title="Client Success" description="We measure success by your portfolio performance, not by our internal revenue." />
        <ValueCard icon={LineChart} title="Data Rigor" description="Every advisory is vetted against multiple technical and fundamental checkpoints." />
        <ValueCard icon={Layers} title="Transparency" description="Past records and research methodology are always open for independent review." />
      </section>

      {/* ── TIMELINE ─────────────────────────────────── */}
      <section className="py-32 px-6 bg-[#0f172a]/30 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-24">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-500/50">The Journey</span>
            <h2 className="text-5xl font-bold text-white mt-4">Major Milestones</h2>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block" />
            
            <TimelineItem year="2019" title="Foundation" description="Investa-X started as a private research group focused on algorithmic equity strategies." side="left" />
            <TimelineItem year="2021" title="SEBI Registration" description="Formally registered as a Research Analyst (INH000022792), bringing regulated precision." side="right" />
            <TimelineItem year="2024" title="10,000+ Clients" description="Reached a landmark milestone of trust, serving investors and traders across India." side="left" />
          </div>
        </div>
      </section>
    </div>
  );
}
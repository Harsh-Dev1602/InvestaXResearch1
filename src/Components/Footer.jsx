import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Mail, Phone, ExternalLink,
  ShieldCheck, ArrowUpCircle, Globe, Award
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms & Conditions', path: '/terms-conditions' },
  { name: 'Refund Policy', path: '/refund-policy' },
];

const legalLinks = [
  { name: 'Investor Charter', path: '/investor-charter' },
  { name: 'MITC', path: '/mitc' },
  { name: 'Grievance Redressal', path: '/grievance-redressal' },
  { name: 'Disclaimer & Disclosures', path: '/disclaimer-disclosures' },
];

const complianceLinks = [
  { name: 'Commodities', path: '/commodities' },
  { name: 'Service Agreement', path: '/service-agreement' },
];

const FooterHeading = ({ children }) => (
  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6">
    {children}
  </h4>
);

const FooterLink = ({ to, children, external = false, onClick }) => {
  const Component = external ? 'a' : Link;
  const props = external ? { href: to, target: "_blank", rel: "noopener noreferrer" } : { to, onClick };

  return (
    <Component
      {...props}
      className="group flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-all duration-300 hover:translate-x-1"
    >
      <span className="w-1.5 h-[1px] bg-purple-500/30 group-hover:w-3 group-hover:bg-purple-500 transition-all" />
      {children}
      {external && <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
    </Component>
  );
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/5 relative overflow-hidden mt-auto">
      {/* ── GRADIENT TOP LINE ────────────────────────────── */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-600 to-blue-600 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* COL 1: BRAND */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center rotate-3 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                <TrendingUp size={22} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-2xl font-black italic tracking-tighter text-white uppercase">
                Investa<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">-X</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Next-generation research terminal for the modern Indian trader. Built on the MERN stack with institutional-grade security.
            </p>

            <div className="inline-block p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3 mb-1">
                <ShieldCheck size={16} className="text-purple-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  SEBI Registered Analyst
                </span>
              </div>
              <p className="text-white font-black italic tracking-widest text-sm ml-7">
                INH000022792
              </p>
            </div>
          </div>

          {/* COL 2: NAVIGATE */}
          <div className="lg:col-span-2">
            <FooterHeading>Navigate</FooterHeading>
            <nav className="flex flex-col gap-4">
              {quickLinks.map(link => (
                <FooterLink onClick={scrollTop} key={link.path} to={link.path}>{link.name}</FooterLink>
              ))}
            </nav>
          </div>

          {/* COL 3: GOVERNANCE */}
          <div className="lg:col-span-3">
            <FooterHeading>Governance</FooterHeading>
            <nav className="flex flex-col gap-4">
              {legalLinks.map(link => (
                <FooterLink onClick={scrollTop} key={link.path} to={link.path}>{link.name}</FooterLink>
              ))}
              {complianceLinks.map(link => (
                <FooterLink onClick={scrollTop} key={link.path} to={link.path}>{link.name}</FooterLink>
              ))}
            </nav>
          </div>

          {/* COL 4: CONNECT & ACTION */}
          <div className="lg:col-span-3 space-y-8">
            <FooterHeading>Connect</FooterHeading>
            <div className="space-y-4">
              <a href="mailto:info@investax.in" className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors text-sm">
                <Mail size={16} /> info@investax.in
              </a>
              <a href="tel:+916269202505" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                <Phone size={16} /> +91 62692 02505
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Globe size={16} className="text-blue-500/50" /> Madhya Pradesh, India
              </div>
            </div>

            {/* INTEGRATED PURPLE-BLUE ACTION BUTTON */}
            <button
              onClick={scrollTop}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] rounded-xl transition-all group"
            >
              Back to Terminal <ArrowUpCircle size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* BOTTOM COMPLIANCE SECTION */}
        <div className="pt-12 border-t border-white/5 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              © {year} Investa-X Research • Pavan Choubey
            </p>
            <div className="flex items-center gap-2 text-[10px] font-black text-white/40 group-hover:text-white transition-colors">
              <Award size={14} className="text-purple-500" /> NISM CERTIFIED SERIES XV
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 leading-relaxed">
            <p className="text-[10px] text-slate-500 text-justify leading-loose">
              <span className="text-purple-500 font-black mr-2 italic uppercase">Risk Disclosure:</span>
              Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are for illustration only and are not recommendatory.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Landmark, QrCode, ShieldCheck, Copy, 
  Info, CheckCircle2, ShieldAlert, Zap 
} from 'lucide-react';

export default function PaymentPortal() {
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    bankName: "PUNJAB NATIONAL BANK",
    accountHolder: "INVESTA - X RESEARCH",
    accountNumber: "0080302100000134",
    ifsc: "PUNB0008030",
    branch: "TILEHRI, JABALPUR"
  };

  const handleCopy = () => {
    const text = `Bank: ${bankDetails.bankName}\nHolder: ${bankDetails.accountHolder}\nAcc: ${bankDetails.accountNumber}\nIFSC: ${bankDetails.ifsc}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen selection:bg-emerald-500/30 font-sans pb-32">
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-[#0f172a] to-transparent">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-8">
            <ShieldCheck size={12} /> Official Payment Portal
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-8 italic uppercase">
            SECURE <span className="text-emerald-500 text-outline">SETTLEMENT</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Verify the institutional details below before proceeding. Investa-X never requests payments to personal accounts or via third-party individuals.
          </p>
        </motion.div>
      </section>

      {/* ── PAYMENT METHODS GRID ─────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        
        {/* UPI SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0f172a]/40 border border-white/5 p-10 md:p-16 rounded-[3rem] flex flex-col items-center text-center"
        >
          <div className="mb-10 p-5 bg-emerald-500/10 rounded-[2rem] text-emerald-500">
            <QrCode size={40} />
          </div>
          <h3 className="text-3xl font-black text-white italic uppercase tracking-tight mb-4">UPI Instant Pay</h3>
          <p className="text-slate-500 text-sm mb-10 uppercase tracking-widest font-bold">Scan to Pay Securely</p>
          
          <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl shadow-emerald-500/10 relative group">
            <div className="w-56 h-56 md:w-64 md:h-64 border-2 border-slate-100 rounded-2xl flex flex-col items-center justify-center overflow-hidden">
               <div className="text-slate-300 font-black text-[10px] uppercase tracking-[0.3em] mb-2">Investa-X</div>
               <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-2">
                 <Zap size={24} className="text-slate-300" />
               </div>
               <div className="text-slate-400 font-bold text-[8px] uppercase">Official QR Placeholder</div>
            </div>
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none" />
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             {['GPay', 'PhonePe', 'Paytm'].map(app => (
               <span key={app} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-slate-400 uppercase tracking-wider">
                 {app}
               </span>
             ))}
          </div>
        </motion.div>

        {/* BANK DETAILS SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-16 rounded-[3rem] text-[#020617] flex flex-col"
        >
          <div className="mb-10 p-5 bg-[#020617]/5 rounded-[2rem] text-[#020617] w-fit">
            <Landmark size={40} />
          </div>
          <h3 className="text-3xl font-black italic uppercase tracking-tight mb-2">NEFT / IMPS</h3>
          <p className="text-slate-500 text-sm mb-10 uppercase tracking-widest font-bold italic">Bank Wire Transfer</p>

          <div className="space-y-1 divide-y divide-slate-100">
            {[
              { label: "Bank Name", value: bankDetails.bankName },
              { label: "Account Holder", value: bankDetails.accountHolder, highlight: true },
              { label: "Account Number", value: bankDetails.accountNumber },
              { label: "IFSC Code", value: bankDetails.ifsc },
              { label: "Branch", value: bankDetails.branch }
            ].map((row, i) => (
              <div key={i} className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{row.label}</span>
                <span className={`text-base font-bold ${row.highlight ? 'text-emerald-600' : 'text-slate-900'}`}>{row.value}</span>
              </div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopy}
            className={`mt-10 w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${
              copied ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/20' : 'bg-[#020617] text-white hover:bg-slate-800'
            }`}
          >
            {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
            {copied ? 'Details Copied' : 'Copy Bank Details'}
          </motion.button>
        </motion.div>
      </div>

      {/* ── COMPLIANCE PROTOCOLS ─────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 mt-24">
        <div className="bg-emerald-500/5 border border-emerald-500/10 p-10 md:p-14 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-emerald-500/10 pointer-events-none">
            <ShieldCheck size={120} />
          </div>
          
          <div className="flex items-center gap-4 mb-8 text-emerald-500">
            <Info size={24} />
            <h4 className="text-lg font-black uppercase italic tracking-tight">Security Protocols</h4>
          </div>
          
          <div className="space-y-6 text-sm text-slate-400 leading-relaxed relative z-10">
            <div className="flex gap-4">
              <span className="text-emerald-500 font-black tracking-tighter">01</span>
              <p><strong>CeFCoM Compliance:</strong> In line with SEBI mandates, all advisory fees are strictly collected via institutional digital channels.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-emerald-500 font-black tracking-tighter">02</span>
              <p><strong>Verification:</strong> Ensure the recipient name displays "INVESTA-X RESEARCH" before confirming any UPI or Bank transaction.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-emerald-500 font-black tracking-tighter">03</span>
              <p className="text-red-400/80"><strong>No Cash Policy:</strong> Investa-X never accepts cash. If any associate requests cash, report it immediately to compliance@investaxresearch.com.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-emerald-500/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60">
             <div className="text-[10px] font-bold uppercase tracking-widest italic text-slate-500">
               RA Reg: INH000022792
             </div>
             <div className="text-[10px] font-bold uppercase tracking-widest italic text-slate-500">
               NISM-202200155259
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from 'react';
import { AlertCircle, Send, CheckCircle, Info, ExternalLink } from 'lucide-react';

/* ─── Styled Input Field ─────────────────────────────────── */
function Field({ label, type = 'text', value, onChange, required = true }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-200"
      />
    </div>
  );
}

export default function ComplaintBoard() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', description: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => { 
      setSubmitting(false); 
      setSuccess(true); 
      setForm({ name: '', email: '', phone: '', subject: '', description: '' }); 
    }, 1500);
  };

  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center bg-gradient-to-b from-[#0f172a] to-[#020617]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-emerald-500/20">
            Grievance Portal
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6 italic">
            COMPLAINT <span className="text-emerald-500">BOARD</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            We are committed to resolving your concerns with transparency. Submit a grievance below or escalate through official channels.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Form Area (8 Columns) */}
          <div className="lg:col-span-8 bg-[#1e293b]/30 border border-white/5 rounded-[2.5rem] p-8 md:p-12">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-emerald-500/10 rounded-2xl">
                <AlertCircle className="text-emerald-500" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Lodge a Complaint</h2>
            </div>

            {success ? (
              <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-2 italic">GRIEVANCE RECEIVED</h3>
                <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                  Tracking ID: <span className="text-emerald-500 font-mono font-bold">INV-X-88291</span>. Our compliance officer will review this within 24 hours.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-8 py-3 rounded-xl border border-white/10 text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  <Field label="Phone (Optional)" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} type="tel" required={false} />
                </div>
                <Field label="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} type="email" />
                <Field label="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
                
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Description of Grievance</label>
                  <textarea
                    rows="5"
                    required
                    value={form.description}
                    onChange={e => setForm({...form, description: e.target.value})}
                    className="bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                    placeholder="Provide detailed information regarding your concern..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-emerald-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {submitting ? 'Processing...' : <><Send size={16} /> Submit Grievance</>}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Area (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Timeline Card */}
            <div className="bg-[#1e293b]/20 border border-white/5 rounded-3xl p-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-8">Resolution Timeline</h4>
              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-3 top-2 bottom-2 w-px bg-white/5" />
                
                {[
                  { step: '01', title: 'Acknowledgement', time: 'Within 24 Hours' },
                  { step: '02', title: 'Investigation', time: '3 – 7 Working Days' },
                  { step: '03', title: 'Final Resolution', time: 'Max 30 Days' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#020617] border border-emerald-500/50 flex items-center justify-center text-[10px] font-black text-emerald-500 shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{item.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SEBI SCORES Info */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 group">
              <div className="flex items-start gap-4">
                <Info size={24} className="text-emerald-500 shrink-0" />
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-emerald-500 mb-3">SEBI SCORES</h4>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    If you are unsatisfied with our resolution, you may escalate directly to SEBI through the SCORES portal.
                  </p>
                  <a 
                    href="https://scores.sebi.gov.in" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-white font-bold text-xs group-hover:text-emerald-500 transition-colors"
                  >
                    Visit SCORES Platform <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { ArrowUpRight, TrendingUp, ShieldCheck, Globe, Play, ChevronRight } from 'lucide-react';

const partners = ["Tandov", "TreeFrh", "Birdseye", "breakHt", "KeddarN"];

const marketData = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$64,458.23', change: '+3.96%', cap: '$1.2T', action: 'Buy' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$3,245.12', change: '+2.14%', cap: '$380B', action: 'Buy' },
  { id: 3, name: 'Tether', symbol: 'USDT', price: '$1.00', change: '-0.01%', cap: '$100B', action: 'Sell' },
  { id: 4, name: 'Solana', symbol: 'SOL', price: '$145.00', change: '+5.20%', cap: '$64B', action: 'Buy' },
];

export default function Home() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">v2.0 Live Trading</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-white">
              FUTURE OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                FINANCE.
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed font-medium">
              A high-performance platform to trade digital assets with institutional-grade security. Join the global transition to decentralized economy.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20">
                Get Started <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button className="px-8 py-4 flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-2xl font-bold hover:bg-slate-800 transition-all">
                <div className="w-8 h-8 flex items-center justify-center bg-indigo-500/10 rounded-full text-indigo-400">
                  <Play size={14} fill="currentColor" />
                </div>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Visual Elements: Phone Mockup + Floating Cards */}
          <div className="relative flex justify-center items-center">
            {/* Main Phone Frame */}
            <div className="relative w-72 h-[580px] bg-slate-950 border-[10px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-slate-800">
              <div className="absolute top-0 w-full h-8 bg-slate-900 flex justify-center items-end pb-1">
                <div className="w-16 h-4 bg-black rounded-full mb-1"></div> {/* Dynamic Island */}
              </div>
              
              <div className="p-6 pt-12">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Current Balance</div>
                <div className="text-3xl font-black text-white mb-8 tracking-tight">$42,850.12</div>
                
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                          <TrendingUp size={18} className="text-indigo-400" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Trade #{i}48</div>
                          <div className="text-[10px] text-slate-500">Completed</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-green-400">+$240</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            <div className="absolute -right-4 top-20 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-emerald-400" />
                <div>
                  <div className="text-xs font-black text-white">SSL SECURED</div>
                  <div className="text-[10px] text-slate-400">Military Grade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARTNERS --- */}
      <div className="border-y border-white/5 bg-slate-950/50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-10">
          {partners.map(p => (
            <span key={p} className="text-xl font-black tracking-widest text-slate-600 hover:text-indigo-400 cursor-default transition-colors">
              {p.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* --- MARKET LIVE --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Market Pulse Live</h2>
            <p className="text-slate-500 max-w-md">Real-time data feeds from global exchanges. Trade instantly with deep liquidity.</p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
            View All Markets <ChevronRight size={16} />
          </button>
        </div>

        <div className="bg-slate-900/30 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Asset</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Price</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Change (24h)</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {marketData.map((coin) => (
                <tr key={coin.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg">
                        {coin.symbol[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white">{coin.name}</div>
                        <div className="text-xs text-slate-500 font-medium">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-bold text-slate-200">{coin.price}</td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold ${
                      coin.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {coin.change}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <button className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${
                      coin.action === 'Buy' 
                        ? 'bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600 hover:text-white' 
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}>
                      {coin.action.toUpperCase()}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
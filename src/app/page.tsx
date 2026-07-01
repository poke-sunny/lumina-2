'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Activity, ShieldCheck, Globe, Zap, Cpu } from 'lucide-react'

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#F3F4F6] selection:bg-[#FF5A00]/30 overflow-x-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF5A00]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF5A00]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center z-50 backdrop-blur-sm bg-black/20 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF5A00] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase">Lumina</span>
        </div>
        <Link href="/onboarding" className="glass px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 hover:border-[#FF5A00]/50 hover:bg-[#FF5A00] hover:text-black transition-all duration-700">
          Access Terminal
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Messaging */}
          <div className="lg:col-span-7 space-y-12 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A00]"></span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF5A00]">Kinexys Node Protocol LMN-01</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-[0.85] uppercase">
                Next-Gen <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] via-[#FF8A4D] to-white italic font-light">Real Estate</span> <br />
                Intelligence
              </h1>
              <p className="text-zinc-400 text-lg md:text-2xl max-w-xl leading-relaxed uppercase tracking-tight font-medium">
                Your personal AI companion for institutional-grade tokenized ownership. Seamless. Liquid. Unstoppable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-6 pt-6"
            >
              <Link href="/onboarding" className="bg-[#FF5A00] text-black px-12 py-6 rounded-2xl inline-flex items-center gap-6 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,90,0,0.3)] transition-all duration-500 group">
                <span className="font-black uppercase tracking-[0.15em] text-sm">Claim Your Stake</span>
                <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: High-End Asset Card */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#FF5A00]/20 to-transparent rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
              
              {/* Main Card */}
              <div className="relative glass rounded-[3.5rem] overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-3xl aspect-[4/5] shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-f1d3c5b5a261?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 group-hover:scale-110 transition-transform duration-[2000ms]" />
                
                {/* Floating Elements */}
                <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
                  <div className="glass px-4 py-2 rounded-full border-white/10 flex items-center gap-2">
                    <Activity size={14} className="text-[#FF5A00]" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Live Forecast</span>
                  </div>
                  <div className="bg-[#FF5A00] text-black px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest">
                    Premium A+
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/80 to-transparent space-y-8">
                  <div className="space-y-2">
                    <p className="text-[#FF5A00] font-mono text-[10px] font-black uppercase tracking-[0.3em]">Tokenized Asset LMN-SW</p>
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">Southampton <br/>Waterfront</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                    <div className="space-y-1">
                      <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">Target APY</p>
                      <p className="text-5xl font-black text-[#FF5A00] tracking-tighter shadow-[#FF5A00]/20 drop-shadow-lg">8.2%</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">Entry Point</p>
                      <p className="text-3xl font-black text-white tracking-tighter">£50,000</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                      <Globe size={20} className="text-[#FF5A00]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">Blockchain Network</p>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">J.P. Morgan Kinexys</p>
                    </div>
                    <div className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  </div>
                </div>
              </div>
              
              {/* Secondary decorative floating badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-8 top-1/4 glass p-6 rounded-3xl border-[#FF5A00]/20 backdrop-blur-2xl hidden xl:block"
              >
                <ShieldCheck className="text-[#FF5A00] mb-2" size={24} />
                <p className="text-white font-black text-[10px] uppercase tracking-widest">Multi-Sig<br/>Custody</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section: Premium Cards */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Architected for <span className="text-[#FF5A00]">Winners</span></h2>
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-[10px] font-black">Institutional Technology | Consumer Simplicity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Feature icon={<Zap size={32}/>} title="Instant Settlement" desc="T+0 liquidity cycles on-chain. Move from asset to capital in a single heartbeat." />
            <Feature icon={<ShieldCheck size={32}/>} title="Digital Vault" desc="Onyx-grade multi-layer security protocols protecting your fractional ownership 24/7." />
            <Feature icon={<Cpu size={32}/>} title="AI Diagnostics" desc="Predictive market modeling and real-time yield optimization via GPT-4o integration." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-2xl font-black tracking-tighter text-white uppercase">Lumina</div>
          <p className="text-zinc-600 text-[9px] uppercase tracking-[0.3em] font-black max-w-xl mx-auto">
            Lumina is an AI-integrated real estate investment platform. Tokenized assets are subject to market volatility. T+0 settlement available on verified Kinexys nodes.
          </p>
          <div className="pt-10 flex justify-center gap-8 text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-[#FF5A00] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FF5A00] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FF5A00] transition-colors">Network Status</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="glass p-12 rounded-[3rem] space-y-8 border-white/5 hover:border-[#FF5A00]/20 hover:bg-white/[0.02] transition-all duration-700 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A00]/5 blur-[60px] rounded-full group-hover:bg-[#FF5A00]/10 transition-all duration-700" />
      <div className="text-[#FF5A00] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">{icon}</div>
      <div className="space-y-4">
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-widest font-bold">{desc}</p>
      </div>
    </div>
  )
}

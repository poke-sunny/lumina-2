'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Shield, 
  Zap, 
  Activity, 
  Sparkles, 
  TrendingUp, 
  LayoutDashboard, 
  PieChart, 
  ChevronRight,
  Terminal,
  Globe,
  Lock,
  Cpu,
  Skull
} from 'lucide-react'

// --- Design System Constants ---
const THEME = {
  bg: '#08090a',
  surface: 'rgba(255,255,255,0.03)',
  surfaceElevated: 'rgba(255,255,255,0.05)',
  border: 'rgba(255,255,255,0.08)',
  accent: '#00ff9d',
  fontFeatures: '"cv01", "ss03", "tnum"'
}

// --- Types ---
type SurvivalTier = 'DEAD' | 'CRITICAL' | 'STABLE' | 'OPTIMAL'

// --- Components ---

const GlassCard = ({ children, className = "", delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-[24px] ${className}`}
  >
    {children}
  </motion.div>
)

const Slider = ({ label, value, onChange, min, max, step, prefix = "£" }: any) => (
  <div className="space-y-5">
    <div className="flex justify-between items-end">
      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">{label}</span>
      <span className="text-2xl font-medium tabular-nums text-white">{prefix}{value.toLocaleString()}</span>
    </div>
    <div className="relative h-6 flex items-center">
      <div className="absolute w-full h-[2px] bg-white/[0.05] rounded-full" />
      <div className="absolute h-[2px] bg-[#00ff9d] rounded-full" style={{ width: `${((value - min) / (max - min)) * 100}%` }} />
      <input 
        type="range" min={min} max={max} step={step} value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute w-full opacity-0 cursor-pointer z-10"
      />
      <div 
        className="absolute w-4 h-4 bg-white border-2 border-black rounded-full shadow-[0_0_15px_rgba(0,255,157,0.5)] pointer-events-none transition-transform"
        style={{ left: `calc(${((value - min) / (max - min)) * 100}% - 8px)` }}
      />
    </div>
  </div>
)

export default function GlobalRedesignLanding() {
  const [budget, setBudget] = useState(450000)
  const [savings, setSavings] = useState(65000)
  const [yieldSim, setYieldSim] = useState(50000)
  
  const projectedYield = yieldSim * Math.pow(1.0824, 10) - yieldSim

  return (
    <main className="min-h-screen bg-[#08090a] text-[#f7f8f8] selection:bg-[#00ff9d]/30 overflow-x-hidden w-full" style={{ fontFeatureSettings: THEME.fontFeatures }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        :root { --font-inter: 'Inter', sans-serif; }
        body { font-family: var(--font-inter); -webkit-font-smoothing: antialiased; }
        .text-glow { text-shadow: 0 0 30px rgba(0, 255, 157, 0.4); }
        .border-glow { box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.02); }
        h1, h2, h3 { letter-spacing: -1.056px; font-weight: 510; }
        input[type='range']::-webkit-slider-thumb { appearance: none; width: 24px; height: 24px; cursor: pointer; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-6 border-b border-white/[0.04] bg-[#08090a]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#00ff9d] rounded-xl flex items-center justify-center">
              <Lock size={18} className="text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">LUMINA</span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            <Link href="/mission-control" className="hover:text-[#00ff9d] transition-colors">Mission Control</Link>
            <Link href="/cli" className="hover:text-[#00ff9d] transition-colors">Terminal</Link>
            <a href="#vault" className="hover:text-[#00ff9d] transition-colors">Yield Vault</a>
            <a href="#sovereign" className="hover:text-[#00ff9d] transition-colors">Sovereignty</a>
          </div>
          <button className="px-6 py-2.5 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-[#00ff9d] transition-all">
            Unlock Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-56 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-10"
          >
            <Sparkles size={14} className="text-[#00ff9d]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#00ff9d]">Intelligence Layer Active</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-medium mb-8 leading-[0.9] tracking-[-0.04em]"
          >
            Sovereign finance <br /> for the <span className="text-[#00ff9d] text-glow italic">next generation.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Own fractional high-yield real estate shards. Track your financial soul. Scale your exit from the rental loop with Lumina's tier-1 intelligence.
          </motion.p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-10 py-5 bg-[#00ff9d] text-black font-black uppercase tracking-widest text-xs rounded-2xl shadow-[0_0_40px_rgba(0,255,157,0.3)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
              Start Onboarding <ArrowRight size={18} />
            </button>
            <Link href="/cli" className="px-10 py-5 bg-white/[0.03] border border-white/[0.08] text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/[0.05] transition-all flex items-center justify-center gap-3">
              Access Terminal <Terminal size={18} />
            </Link>
          </div>
        </div>

        {/* Ambient Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff9d]/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      </section>

      {/* Financial Soul Widget Section */}
      <section id="sovereign" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl">Financial Soul <br />Alignment</h2>
              <p className="text-zinc-500 text-lg">Your readiness is tracked via our sovereign agent engine. Reach "OPTIMAL" tier to unlock premium Southampton Shards.</p>
            </div>
            <div className="space-y-8">
              <Slider label="Target Real Estate Value" value={budget} onChange={setBudget} min={100000} max={2000000} step={10000} />
              <Slider label="Liquid Capital (Savings)" value={savings} onChange={setSavings} min={0} max={500000} step={1000} />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <GlassCard className="p-8 md:p-12 border-glow">
              <div className="flex justify-between items-start mb-12">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00ff9d]">Readiness Status</p>
                  <h3 className="text-3xl">STABLE_TIER</h3>
                </div>
                <div className="p-4 rounded-2xl bg-[#00ff9d]/10 border border-[#00ff9d]/20 text-[#00ff9d]">
                  <Activity size={24} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                    <span>Capital Integrity</span>
                    <span className="text-white">84.2%</span>
                  </div>
                  <div className="h-1 w-full bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '84.2%' }} className="h-full bg-[#00ff9d]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                    <span>Sovereignty Alignment</span>
                    <span className="text-white">62.1%</span>
                  </div>
                  <div className="h-1 w-full bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '62.1%' }} className="h-full bg-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Globe size={20} className="text-zinc-500" />
                  <span className="text-xs font-bold text-zinc-400">Southampton SWS-01 Eligibility</span>
                </div>
                <span className="px-3 py-1 rounded-md bg-white/10 text-white text-[10px] font-bold">LOCKED</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Yield Simulation Section */}
      <section id="vault" className="py-24 bg-white/[0.02] border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <GlassCard className="p-10 border-[#00ff9d]/20 shadow-[0_0_50px_rgba(0,255,157,0.05)]">
              <h3 className="text-2xl mb-10">Yield Simulation</h3>
              <div className="space-y-12">
                <Slider label="Initial Shard Investment" value={yieldSim} onChange={setYieldSim} min={5000} max={250000} step={1000} />
                
                <div className="flex flex-col items-center justify-center py-12 rounded-[24px] bg-[#00ff9d]/5 border border-[#00ff9d]/10">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">Estimated 10-Year Growth</p>
                  <motion.div 
                    key={projectedYield}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl md:text-7xl font-medium text-[#00ff9d] tabular-nums text-glow"
                  >
                    £{Math.round(projectedYield).toLocaleString()}
                  </motion.div>
                  <p className="mt-4 text-[11px] text-zinc-500 italic">Compounded @ 8.24% variable APY</p>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/20 text-[#00ff9d]">
              <TrendingUp size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Alpha Generated</span>
            </div>
            <h2 className="text-4xl md:text-6xl">Southampton <br /> Waterfront Shards</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Don't wait for the full mortgage. Buy shards of premium, income-generating real estate in high-growth corridors. Integrated with Lumina's auto-compounding vault.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Target APY</p>
                <p className="text-3xl font-medium">8.24%</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Asset Grade</p>
                <p className="text-3xl font-medium">AAA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl">Your Mission <br /> Control</h2>
            <p className="text-zinc-500 text-lg">Centralized oversight of your sovereign wealth.</p>
          </div>
          <Link href="/mission-control" className="flex items-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white/[0.05] transition-all">
            Full Experience <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Portfolio Value', value: '£142,500', trend: '+12.4%', icon: PieChart },
            { title: 'Sovereign Level', value: 'Level 14', trend: 'Scout', icon: Cpu },
            { title: 'Threat Level', value: 'Zero', trend: 'Secure', icon: Shield },
          ].map((card, i) => (
            <GlassCard key={i} className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{card.title}</p>
                <card.icon size={18} className="text-[#00ff9d]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-medium">{card.value}</p>
                <p className="text-xs text-zinc-500">{card.trend}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/[0.04] px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#00ff9d] rounded flex items-center justify-center">
              <Lock size={12} className="text-black" />
            </div>
            <span className="text-sm font-bold tracking-tight">LUMINA</span>
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
          </div>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">© 2026 Interaction Co.</p>
        </div>
      </footer>
    </main>
  )
}

'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Home, 
  Shield, 
  Zap, 
  Activity, 
  Sparkles, 
  TrendingUp, 
  ChevronRight,
  Terminal,
  Globe,
  Lock,
  Cpu,
  Building2,
  CalendarDays
} from 'lucide-react'

// --- Design System Constants ---
const THEME = {
  bg: '#ffffff',
  surface: '#f9fafb',
  border: 'rgba(0, 51, 102, 0.08)',
  accent: '#003366',
  fontFeatures: '"cv01", "ss03", "tnum"'
}

const JigsawCard = ({ children, className = "", delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`rounded-[24px] border border-[rgba(0,51,102,0.08)] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}
  >
    {children}
  </motion.div>
)

const Slider = ({ label, value, onChange, min, max, step, prefix = "£" }: any) => (
  <div className="space-y-5">
    <div className="flex justify-between items-end">
      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400">{label}</span>
      <span className="text-2xl font-medium tabular-nums text-[#003366]">{prefix}{value.toLocaleString()}</span>
    </div>
    <div className="relative h-6 flex items-center">
      <div className="absolute w-full h-[3px] bg-zinc-100 rounded-full" />
      <div className="absolute h-[3px] bg-[#003366] rounded-full" style={{ width: `${((value - min) / (max - min)) * 100}%` }} />
      <input 
        type="range" min={min} max={max} step={step} value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute w-full opacity-0 cursor-pointer z-10"
      />
      <div 
        className="absolute w-5 h-5 bg-white border-2 border-[#003366] rounded-full shadow-sm pointer-events-none transition-transform"
        style={{ left: `calc(${((value - min) / (max - min)) * 100}% - 10px)` }}
      />
    </div>
  </div>
)

export default function JigsawRedesignLanding() {
  const [budget, setBudget] = useState(450000)
  const [savings, setSavings] = useState(65000)
  const [yieldSim, setYieldSim] = useState(50000)
  
  const projectedYield = yieldSim * Math.pow(1.0824, 10) - yieldSim

  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-[#003366]/10 overflow-x-hidden w-full" style={{ fontFeatureSettings: THEME.fontFeatures }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { font-family: 'Inter', sans-serif; -webkit-font-smoothing: antialiased; }
        .heading-tight { letter-spacing: -1.056px; font-weight: 510; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-6 border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#003366] rounded-lg flex items-center justify-center">
              <Building2 size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#003366]">JIGSAW</span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <Link href="/mission-control" className="hover:text-[#003366] transition-colors">Mission Control</Link>
            <Link href="/cli" className="hover:text-[#003366] transition-colors">Terminal</Link>
            <a href="#" className="hover:text-[#003366] transition-colors">Venues</a>
            <a href="#" className="hover:text-[#003366] transition-colors">Global Network</a>
          </div>
          <button className="px-6 py-2.5 bg-[#003366] text-white text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-black transition-all">
            Secure Portal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-56 pb-20 px-4 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 mb-10 shadow-sm"
          >
            <CalendarDays size={14} className="text-[#003366]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#003366]">Enterprise Venue Intelligence</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl heading-tight mb-8 leading-[0.9] text-zinc-900"
          >
            Elite venue sourcing <br /> with <span className="text-[#003366] italic">AI precision.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            From Mayfair to the world. Access over 24,000 verified venues with Lumina's enterprise-grade matching engine. 100% free service for established organizations.
          </motion.p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-10 py-5 bg-[#003366] text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3">
              Request Proposals <ArrowRight size={18} />
            </button>
            <Link href="/cli" className="px-10 py-5 bg-white border border-zinc-200 text-[#003366] font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-zinc-50 transition-all flex items-center justify-center gap-3 shadow-sm">
              Launch Terminal <Terminal size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Readiness Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl heading-tight">Corporate <br />Readiness Audit</h2>
              <p className="text-zinc-500 text-lg">Align your event requirements with our global inventory. Reach "PREMIUM" status for priority Mayfair sourcing.</p>
            </div>
            <div className="space-y-8">
              <Slider label="Event Operating Budget" value={budget} onChange={setBudget} min={100000} max={2000000} step={10000} />
              <Slider label="Projected Attendance" value={savings} onChange={setSavings} min={0} max={500000} step={1000} prefix="" />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <JigsawCard className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-12">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#003366]">Verification Status</p>
                  <h3 className="text-3xl font-medium">ENTERPRISE_LEVEL</h3>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 text-[#003366]">
                  <Activity size={24} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                    <span>Data Integrity</span>
                    <span className="text-[#003366]">98.4%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '98.4%' }} className="h-full bg-[#003366]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                    <span>Sourcing Alignment</span>
                    <span className="text-[#003366]">74.1%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '74.1%' }} className="h-full bg-zinc-300" />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#f9fafb] border border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Globe size={20} className="text-[#003366]" />
                  <span className="text-xs font-bold text-zinc-600">Global ISO 27001 Protocol</span>
                </div>
                <span className="px-3 py-1 rounded-md bg-[#003366] text-white text-[10px] font-bold">CERTIFIED</span>
              </div>
            </JigsawCard>
          </div>
        </div>
      </section>

      {/* Yield/Savings Section */}
      <section className="py-24 bg-[#f9fafb] border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <JigsawCard className="p-10 bg-white">
              <h3 className="text-2xl mb-10 text-[#003366]">Savings Simulation</h3>
              <div className="space-y-12">
                <Slider label="Annual Event Spend" value={yieldSim} onChange={setYieldSim} min={5000} max={250000} step={1000} />
                
                <div className="flex flex-col items-center justify-center py-12 rounded-[24px] bg-zinc-50 border border-zinc-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Estimated Procurement Alpha</p>
                  <motion.div 
                    key={projectedYield}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-5xl md:text-7xl font-medium text-[#003366] tabular-nums"
                  >
                    £{Math.round(projectedYield).toLocaleString()}
                  </motion.div>
                  <p className="mt-4 text-[11px] text-zinc-500 italic">Based on average 35% negotiated savings</p>
                </div>
              </div>
            </JigsawCard>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003366]/5 border border-[#003366]/10 text-[#003366]">
              <TrendingUp size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Market Advantage</span>
            </div>
            <h2 className="text-4xl md:text-6xl heading-tight">Institutional <br />Buying Power</h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Consolidate your corporate travel and event spend. Jigsaw's £60M+ annual volume secures rates and availability that individual procurement teams cannot achieve alone.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Average Savings</p>
                <p className="text-3xl font-medium text-[#003366]">35%</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">Verified Venues</p>
                <p className="text-3xl font-medium text-[#003366]">24k+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-100 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#003366] rounded flex items-center justify-center">
              <Building2 size={12} className="text-white" />
            </div>
            <span className="text-sm font-bold tracking-tight text-[#003366]">JIGSAW</span>
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-[#003366] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#003366] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#003366] transition-colors">Security</a>
            <a href="#" className="hover:text-[#003366] transition-colors">ISO 27001</a>
          </div>
          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">© 2026 Jigsaw Conferences Ltd.</p>
        </div>
      </footer>
    </main>
  )
}

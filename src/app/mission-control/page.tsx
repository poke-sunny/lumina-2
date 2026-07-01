'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Layers, 
  ArrowUpRight,
  Info,
  Clock,
  PieChart,
  BarChart3,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

// --- Design System Constants ---
const THEME = {
  bg: '#08090a',
  surface: 'rgba(255,255,255,0.03)',
  border: 'rgba(255,255,255,0.08)',
  accent: '#00ff9d',
  fontFeatures: '"cv01", "ss03", "tnum"'
}

const KPICard = ({ title, value, unit = '', trend, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="group p-6 rounded-[24px] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-all"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-[#00ff9d]/30 transition-colors">
        <Icon size={18} className="text-[#00ff9d]" />
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-1 rounded-md">
          <ArrowUpRight size={10} />
          {trend}
        </div>
      )}
    </div>
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-1">{title}</p>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-medium tracking-tight tabular-nums">{value}</span>
      <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest">{unit}</span>
    </div>
  </motion.div>
)

export default function MissionControlDashboard() {
  return (
    <div className="min-h-screen bg-[#08090a] text-[#f7f8f8] selection:bg-[#00ff9d]/30 overflow-x-hidden w-full" style={{ fontFeatureSettings: THEME.fontFeatures }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-6 border-b border-white/[0.04] bg-[#08090a]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-zinc-900 border border-white/[0.08] rounded-lg flex items-center justify-center group-hover:border-[#00ff9d]/50 transition-colors">
              <ArrowLeft size={16} className="text-zinc-500 group-hover:text-white" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Back to Portal</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">Live Sync</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <header className="mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <Layers size={16} className="text-[#00ff9d]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00ff9d]">Simulation Node 04</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium tracking-[-0.04em]">Mission Control</h1>
          <p className="text-zinc-500 text-lg max-w-xl">Deep-intelligence oversight for the Southampton Waterfront asset cluster.</p>
        </header>

        {/* High Density Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <KPICard title="Total Asset Yield" value="8.24" unit="% APY" trend="+1.2%" icon={TrendingUp} delay={0.1} />
          <KPICard title="Financial Integrity" value="94.2" unit="SCORE" icon={ShieldCheck} delay={0.2} />
          <KPICard title="Equity Momentum" value="High" trend="Stable" icon={Zap} delay={0.3} />
          <KPICard title="Projected Exit" value="18.4" unit="MONTHS" trend="Accelerating" icon={Clock} delay={0.4} />
        </div>

        {/* Viz Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-8 rounded-[32px] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <BarChart3 size={16} className="text-zinc-500" />
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">Equity Accumulation Curve</h3>
              </div>
              <button className="text-zinc-600 hover:text-white transition-colors"><Info size={14} /></button>
            </div>
            <div className="h-[300px] w-full flex items-end justify-between gap-2 px-2">
              {[40, 45, 52, 48, 60, 75, 82, 90, 85, 95, 100, 110].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (i * 0.05), duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex-1 rounded-t-lg transition-colors ${i === 11 ? 'bg-[#00ff9d] shadow-[0_0_20px_rgba(0,255,157,0.3)]' : 'bg-white/[0.05] hover:bg-white/[0.1]'}`}
                />
              ))}
            </div>
            <div className="flex justify-between px-2 pt-6 border-t border-white/[0.04] mt-4">
              {['JAN', 'MAR', 'MAY', 'JUL', 'SEP', 'NOV'].map(m => (
                <span key={m} className="text-[10px] font-black text-zinc-600 tracking-widest">{m}</span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-[32px] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-10">
              <PieChart size={16} className="text-zinc-500" />
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">Asset Composition</h3>
            </div>
            <div className="relative w-48 h-48 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                <motion.circle 
                  cx="50" cy="50" r="40" fill="transparent" stroke="#00ff9d" strokeWidth="10" strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }} animate={{ strokeDashoffset: 251.2 * 0.25 }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }} strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-medium tabular-nums">75%</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Shards</span>
              </div>
            </div>
            <div className="space-y-4 mt-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00ff9d]" />
                  <span className="text-[10px] font-bold uppercase text-zinc-400">Waterfront Shards</span>
                </div>
                <span className="text-xs font-medium">75%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-[10px] font-bold uppercase text-zinc-400">Liquid Reserves</span>
                </div>
                <span className="text-xs font-medium">25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

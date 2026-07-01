'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ArrowUpRight,
  Info,
  Clock,
  PieChart,
  BarChart3,
  ArrowLeft,
  Building2
} from 'lucide-react'
import Link from 'next/link'

// --- Design System Constants ---
const THEME = {
  bg: '#ffffff',
  surface: '#f9fafb',
  border: 'rgba(0, 51, 102, 0.08)',
  accent: '#003366',
  fontFeatures: '"cv01", "ss03", "tnum"'
}

const KPICard = ({ title, value, unit = '', trend, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="group p-6 rounded-[24px] border border-[rgba(0,51,102,0.08)] bg-white shadow-sm hover:shadow-md transition-all"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 group-hover:border-[#003366]/30 transition-colors">
        <Icon size={18} className="text-[#003366]" />
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#003366] bg-[#003366]/5 px-2 py-1 rounded-md">
          <ArrowUpRight size={10} />
          {trend}
        </div>
      )}
    </div>
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-1">{title}</p>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-medium tracking-tight tabular-nums text-zinc-900">{value}</span>
      <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{unit}</span>
    </div>
  </motion.div>
)

export default function MissionControlDashboard() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-zinc-900 selection:bg-[#003366]/10 overflow-x-hidden w-full" style={{ fontFeatureSettings: THEME.fontFeatures }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .heading-tight { letter-spacing: -1.056px; font-weight: 510; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-6 border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center group-hover:border-[#003366]/50 transition-colors">
              <ArrowLeft size={16} className="text-zinc-400 group-hover:text-[#003366]" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Back to Portal</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#003366] rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#003366]">Live Network Sync</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <header className="mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-[#003366]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#003366]">Sourcing Hub 01</span>
          </div>
          <h1 className="text-4xl md:text-6xl heading-tight text-zinc-900">Mission Control</h1>
          <p className="text-zinc-500 text-lg max-w-xl">Deep-intelligence oversight for the Jigsaw Global Venue network.</p>
        </header>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <KPICard title="Negotatied Yield" value="35.2" unit="% SAVINGS" trend="+2.4%" icon={TrendingUp} delay={0.1} />
          <KPICard title="Sourcing Score" value="98.1" unit="POINTS" icon={ShieldCheck} delay={0.2} />
          <KPICard title="Market Velocity" value="High" trend="Stable" icon={Zap} delay={0.3} />
          <KPICard title="Venue Shards" value="1,402" unit="UNITS" trend="Scaling" icon={Layers} delay={0.4} />
        </div>

        {/* Viz Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-8 rounded-[32px] border border-[rgba(0,51,102,0.08)] bg-white shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <BarChart3 size={16} className="text-zinc-400" />
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">Sourcing Activity Curve</h3>
              </div>
              <button className="text-zinc-300 hover:text-[#003366] transition-colors"><Info size={14} /></button>
            </div>
            <div className="h-[300px] w-full flex items-end justify-between gap-2 px-2">
              {[30, 35, 48, 42, 55, 70, 78, 85, 80, 92, 98, 110].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (i * 0.05), duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex-1 rounded-t-lg transition-colors ${i === 11 ? 'bg-[#003366] shadow-lg' : 'bg-zinc-100 hover:bg-zinc-200'}`}
                />
              ))}
            </div>
            <div className="flex justify-between px-2 pt-6 border-t border-zinc-50 mt-4">
              {['JAN', 'MAR', 'MAY', 'JUL', 'SEP', 'NOV'].map(m => (
                <span key={m} className="text-[10px] font-black text-zinc-400 tracking-widest">{m}</span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-[32px] border border-[rgba(0,51,102,0.08)] bg-white shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-10">
              <PieChart size={16} className="text-zinc-400" />
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">Portfolio Mix</h3>
            </div>
            <div className="relative w-48 h-48 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                <motion.circle 
                  cx="50" cy="50" r="40" fill="transparent" stroke="#003366" strokeWidth="12" strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }} animate={{ strokeDashoffset: 251.2 * 0.15 }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }} strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-medium tabular-nums text-[#003366]">85%</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Verified</span>
              </div>
            </div>
            <div className="space-y-4 mt-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#003366]" />
                  <span className="text-[10px] font-bold uppercase text-zinc-500">Global Venues</span>
                </div>
                <span className="text-xs font-medium text-zinc-900">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                  <span className="text-[10px] font-bold uppercase text-zinc-500">Travel Shards</span>
                </div>
                <span className="text-xs font-medium text-zinc-900">15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

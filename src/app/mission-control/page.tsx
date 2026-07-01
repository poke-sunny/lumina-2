'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ArrowUpRight,
  BarChart3,
  ArrowLeft,
  Building2
} from 'lucide-react'
import Link from 'next/link'

const KPICard = ({ title, value, unit = '', trend, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="group p-6 rounded-[24px] border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-[#003366]/30 transition-colors">
        <Icon size={18} className="text-[#003366]" />
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#003366] bg-[#003366]/5 px-2 py-1 rounded-md">
          <ArrowUpRight size={10} />
          {trend}
        </div>
      )}
    </div>
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{title}</p>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-medium tracking-tight tabular-nums text-zinc-900">{value}</span>
      <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{unit}</span>
    </div>
  </motion.div>
)

export default function MissionControlDashboard() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-slate-900">
      <nav className="fixed top-0 w-full z-50 px-4 md:px-10 py-6 border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft size={16} className="text-zinc-400 group-hover:text-[#003366]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Back to Portal</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#003366] rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#003366]">Live Network Sync</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <header className="mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-[#003366]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#003366]">Sourcing Hub 01</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900">Mission Control</h1>
          <p className="text-zinc-500 text-lg max-w-xl">Deep-intelligence oversight for the Jigsaw Global Venue network.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <KPICard title="Negotatied Yield" value="35.2" unit="% SAVINGS" trend="+2.4%" icon={TrendingUp} delay={0.1} />
          <KPICard title="Sourcing Score" value="98.1" unit="POINTS" icon={ShieldCheck} delay={0.2} />
          <KPICard title="Market Velocity" value="High" trend="Stable" icon={Zap} delay={0.3} />
          <KPICard title="Venue Shards" value="1,402" unit="UNITS" trend="Scaling" icon={Layers} delay={0.4} />
        </div>

        <div className="p-8 rounded-[32px] border border-slate-100 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-10">
            <BarChart3 size={16} className="text-zinc-400" />
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">Sourcing Activity Curve</h3>
          </div>
          <div className="h-[300px] w-full flex items-end justify-between gap-2 px-2">
            {[30, 35, 48, 42, 55, 70, 78, 85, 80, 92, 98, 110].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className={`flex-1 rounded-t-lg transition-colors ${i === 11 ? 'bg-[#003366]' : 'bg-zinc-100'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

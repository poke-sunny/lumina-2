'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Layers, 
  ArrowUpRight,
  Info,
  Clock,
  PieChart,
  BarChart3,
  DollarSign
} from 'lucide-react'

// --- Design System Constants (Open Design / Linear Inspired) ---
const THEME = {
  bg: '#08090a',
  surface: 'rgba(255,255,255,0.03)',
  surfaceElevated: 'rgba(255,255,255,0.05)',
  border: 'rgba(255,255,255,0.08)',
  accent: '#00ff9d',
  textPrimary: '#f7f8f8',
  textSecondary: '#8a8f98',
  textMuted: '#62666d',
  fontFeatures: '"cv01", "ss03", "tnum"'
}

// --- Components ---

const KPICard = ({ 
  title, 
  value, 
  unit = '', 
  trend, 
  icon: Icon, 
  description,
  delay = 0 
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    className="group relative flex flex-col p-5 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
    style={{ fontFeatureSettings: THEME.fontFeatures }}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] group-hover:border-[#00ff9d]/30 transition-colors">
        <Icon size={18} className="text-[#00ff9d]" />
      </div>
      {trend && (
        <div className="flex items-center gap-1 text-[10px] font-bold text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-0.5 rounded-full">
          <ArrowUpRight size={10} />
          {trend}
        </div>
      )}
    </div>
    
    <div>
      <p className="text-[11px] font-bold uppercase tracking-widest text-[#8a8f98] mb-1">{title}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-medium tracking-tight text-[#f7f8f8]">{value}</span>
        {unit && <span className="text-sm text-[#62666d]">{unit}</span>}
      </div>
    </div>

    {description && (
      <p className="mt-4 text-[11px] leading-relaxed text-[#62666d] group-hover:text-[#8a8f98] transition-colors">
        {description}
      </p>
    )}

    {/* Decoration */}
    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-[#00ff9d]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.div>
)

const DataVizWidget = ({ title, children, icon: Icon }: any) => (
  <div className="flex flex-col p-5 md:p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        {Icon && <Icon size={14} className="text-[#8a8f98]" />}
        <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#8a8f98]">{title}</h3>
      </div>
      <button className="text-[#62666d] hover:text-[#f7f8f8] transition-colors">
        <Info size={14} />
      </button>
    </div>
    <div className="flex-1">
      {children}
    </div>
  </div>
)

export default function MissionControlDashboard() {
  const [activeTier, setActiveTier] = useState('OPTIMAL')

  const metrics = [
    {
      title: 'Compounded Yield',
      value: '8.24',
      unit: '% APY',
      trend: '+120bps',
      icon: TrendingUp,
      description: 'Outperforming regional residential growth benchmarks by 1.4%.'
    },
    {
      title: 'Target Savings Runway',
      value: '18.4',
      unit: 'mo',
      trend: 'Accelerating',
      icon: Clock,
      description: 'Time remaining until 100% equity stake in primary shard.'
    },
    {
      title: 'Sovereign Integrity',
      value: '94.2',
      unit: '%',
      icon: ShieldCheck,
      description: 'Financial resilience score based on debt-to-asset liquidity.'
    },
    {
      title: 'Tax Drag Projection',
      value: '1.2',
      unit: '%',
      trend: 'Minimized',
      icon: Zap,
      description: 'Optimized through fractional holding structure.'
    }
  ]

  return (
    <div 
      className="min-h-screen bg-[#08090a] text-[#f7f8f8] p-5 md:p-8 lg:p-12 selection:bg-[#00ff9d]/30 overflow-x-hidden w-full"
      style={{ fontFamily: 'Inter, system-ui, sans-serif', fontFeatureSettings: THEME.fontFeatures }}
    >
      {/* Header Area */}
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-2">
            <Layers size={16} className="text-[#00ff9d]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00ff9d]">Intelligence Layer v4.0</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#f7f8f8]">Mission Control</h1>
          <p className="text-[#8a8f98] max-w-sm mt-2 text-xs md:text-sm leading-relaxed">
            Real-time sovereign wealth simulation for the Southampton Waterfront Shards.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white/[0.03] p-1 rounded-lg border border-white/[0.08] w-full md:w-auto overflow-x-auto scrollbar-hide">
          {['OPTIMAL', 'HEALTHY', 'CAUTION'].map(tier => (
            <button
              key={tier}
              onClick={() => setActiveTier(tier)}
              className={`flex-1 md:flex-none px-3 md:px-4 py-1.5 rounded-md text-[9px] md:text-[10px] font-black tracking-widest transition-all whitespace-nowrap ${
                activeTier === tier 
                  ? 'bg-[#00ff9d] text-black shadow-[0_0_20px_rgba(0,255,157,0.3)]' 
                  : 'text-[#62666d] hover:text-[#8a8f98]'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </header>

      {/* KPI Wall (High Density) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:mb-8">
        {metrics.map((m, i) => (
          <KPICard key={m.title} {...m} delay={i * 0.1} />
        ))}
      </div>

      {/* Primary Data Viz Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wealth Projection Chart */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <DataVizWidget title="Equity Accumulation Projection" icon={BarChart3}>
            <div className="h-[250px] md:h-[300px] w-full flex flex-col justify-end gap-1 pb-4">
              <div className="flex items-end justify-between gap-1.5 h-full px-1">
                {[40, 45, 52, 48, 60, 75, 82, 90, 85, 95, 100, 110].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + (i * 0.05), duration: 1, ease: "circOut" }}
                    className={`flex-1 rounded-t-sm transition-colors duration-500 ${i === 11 ? 'bg-[#00ff9d] shadow-[0_0_15px_rgba(0,255,157,0.4)]' : 'bg-white/[0.1] hover:bg-white/[0.2]'}`}
                  />
                ))}
              </div>
              <div className="flex justify-between px-2 pt-4 border-t border-white/[0.05]">
                {['JAN', 'MAR', 'MAY', 'JUL', 'SEP', 'NOV'].map(m => (
                  <span key={m} className="text-[9px] md:text-[10px] font-bold text-[#62666d]">{m}</span>
                ))}
              </div>
            </div>
          </DataVizWidget>
        </div>

        {/* Asset Allocation */}
        <div className="order-1 lg:order-2">
          <DataVizWidget title="Asset Composition" icon={PieChart}>
            <div className="flex flex-col h-full justify-center">
              <div className="relative w-40 md:w-48 h-40 md:h-48 mx-auto mb-6 md:mb-8 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                  <motion.circle 
                    cx="50" cy="50" r="40" fill="transparent" 
                    stroke="#00ff9d" strokeWidth="12" 
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ strokeDashoffset: 251.2 * 0.25 }}
                    transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                    strokeLinecap="round"
                  />
                  <motion.circle 
                    cx="50" cy="50" r="40" fill="transparent" 
                    stroke="rgba(255,255,255,0.2)" strokeWidth="12" 
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ strokeDashoffset: 251.2 * 0.75 }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl md:text-3xl font-medium">75%</span>
                  <span className="text-[9px] md:text-[10px] text-[#62666d] font-bold uppercase tracking-widest text-center">SWS Shards</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00ff9d]" />
                    <span className="text-[10px] md:text-xs text-[#8a8f98]">Southampton Waterfront</span>
                  </div>
                  <span className="text-[10px] md:text-xs font-medium">75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="text-[10px] md:text-xs text-[#8a8f98]">Liquid Reserve</span>
                  </div>
                  <span className="text-[10px] md:text-xs font-medium">25%</span>
                </div>
              </div>
            </div>
          </DataVizWidget>
        </div>
      </div>

      {/* Footer Info */}
      <footer className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-[#00ff9d]" />
            <span className="text-[9px] md:text-[10px] text-[#62666d] font-black uppercase tracking-widest">Simulation Active</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={12} className="text-[#62666d]" />
            <span className="text-[9px] md:text-[10px] text-[#62666d] font-black uppercase tracking-widest">Encryption: AES-256-GCM</span>
          </div>
        </div>
        <div className="text-[9px] md:text-[10px] text-[#62666d] font-black uppercase tracking-[0.3em] text-center md:text-right">
          LUMINA // INTERACTION CO. 2026
        </div>
      </footer>
    </div>
  )
}

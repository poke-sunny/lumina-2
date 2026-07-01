'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Zap, 
  Activity, 
  TrendingUp, 
  ChevronRight,
  Terminal,
  Globe,
  Lock,
  Cpu,
  CalendarDays,
  Search,
  Users,
  Briefcase,
  PieChart,
  BarChart4,
  Network,
  Fingerprint
} from 'lucide-react'

// --- Utility: Safe Icon Clone ---
const renderIcon = (icon: React.ReactNode, size: number = 18, className: string = "") => {
  return React.isValidElement<{ size?: number; className?: string }>(icon) 
    ? React.cloneElement(icon, { size, className: `${icon.props.className || ''} ${className}`.trim() }) 
    : null;
}

// --- Components ---
const MetricCard = ({ label, value, sub, trend, icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-premium flex flex-col gap-4"
  >
    <div className="flex justify-between items-start">
      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-jigsaw-navy">
        {renderIcon(icon, 20)}
      </div>
      {trend && (
        <span className="text-[10px] font-black tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
          <TrendingUp size={10} /> {trend}
        </span>
      )}
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{label}</p>
      <h4 className="text-2xl font-medium tracking-tight text-slate-900 tnum">{value}</h4>
      <p className="text-[11px] text-slate-400 mt-1 font-medium">{sub}</p>
    </div>
  </motion.div>
)

const SliderWidget = ({ label, value, onChange, min, max, step, suffix = "" }: any) => (
  <div className="space-y-6 p-6 bg-slate-50/50 rounded-2xl border border-slate-100">
    <div className="flex justify-between items-end">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{label}</span>
      <span className="text-xl font-medium text-jigsaw-navy tnum">{value.toLocaleString()}{suffix}</span>
    </div>
    <div className="relative h-2 flex items-center group">
      <div className="absolute w-full h-full bg-slate-200 rounded-full" />
      <div 
        className="absolute h-full bg-jigsaw-navy rounded-full transition-all duration-300" 
        style={{ width: `${((value - min) / (max - min)) * 100}%` }} 
      />
      <input 
        type="range" min={min} max={max} step={step} value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute w-full opacity-0 cursor-pointer z-10"
      />
      <motion.div 
        className="absolute w-5 h-5 bg-white border-2 border-jigsaw-navy rounded-full shadow-md pointer-events-none"
        style={{ left: `calc(${((value - min) / (max - min)) * 100}% - 10px)` }}
      />
    </div>
  </div>
)

export default function JigsawPremiumPortal() {
  const [valuation, setValuation] = useState(100)
  const [yieldRate, setYieldRate] = useState(8.2)
  const [entry, setEntry] = useState(50000)

  return (
    <main className="min-h-screen bg-[#f8fafc] jigsaw-grid-bg text-slate-900 overflow-x-hidden selection:bg-jigsaw-navy/10">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-2xl">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-jigsaw-navy rounded-xl flex items-center justify-center shadow-lg shadow-jigsaw-navy/20">
                <Building2 size={18} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-jigsaw-navy leading-none">JIGSAW</span>
                <span className="text-[9px] font-black tracking-[0.3em] text-slate-400 mt-1">ENTERPRISE</span>
              </div>
            </Link>
            
            <nav className="hidden xl:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400">
              <Link href="/mission-control" className="hover:text-jigsaw-navy transition-colors flex items-center gap-2">
                <Activity size={14} /> Mission Control
              </Link>
              <Link href="/cli" className="hover:text-jigsaw-navy transition-colors flex items-center gap-2">
                <Terminal size={14} /> CLI Terminal
              </Link>
              <a href="#" className="hover:text-jigsaw-navy transition-colors">Global Inventory</a>
              <a href="#" className="hover:text-jigsaw-navy transition-colors">Yield Protocols</a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2.5 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Gateway Active // London-03</span>
            </div>
            <button className="px-6 py-2.5 bg-jigsaw-navy text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-jigsaw-navy/20 hover:bg-slate-900 transition-all active:scale-95">
              Access Portal
            </button>
          </div>
        </div>
      </header>

      {/* HERO / SKIN ON BONE */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-jigsaw-navy/5 border border-jigsaw-navy/10 rounded-2xl"
            >
              <ShieldCheck size={16} className="text-jigsaw-navy" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-jigsaw-navy">Tier-1 Institutional Venue Engine</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[92px] heading-elite text-slate-900 leading-[0.85]"
            >
              The architecture <br /> of <span className="text-jigsaw-navy italic">global sourcing.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 max-w-xl leading-relaxed"
            >
              Elite venue intelligence for sovereign organizations. High-density data matching across 24,000+ verified locations with zero commission leakage.
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-10 py-5 bg-jigsaw-navy text-white text-xs font-black uppercase tracking-widest rounded-3xl shadow-elevated hover:bg-slate-900 transition-all flex items-center gap-3 group">
                Request Briefing <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="/cli" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 text-xs font-black uppercase tracking-widest rounded-3xl shadow-premium hover:bg-slate-50 transition-all flex items-center gap-3">
                Source Terminal <Terminal size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-100">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inventory Value</p>
                <p className="text-2xl font-medium tnum text-jigsaw-navy">£60M+</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Alpha</p>
                <p className="text-2xl font-medium tnum text-jigsaw-navy">35%</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Nodes</p>
                <p className="text-2xl font-medium tnum text-jigsaw-navy">24k+</p>
              </div>
            </div>
          </div>

          {/* ASYMMETRICAL DATA WIDGETS */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="jigsaw-card p-6 rounded-[32px] space-y-6">
                <div className="flex justify-between items-center">
                  <div className="p-2.5 bg-jigsaw-navy/5 rounded-xl text-jigsaw-navy">
                    <Globe size={18} />
                  </div>
                  <span className="text-[9px] font-black text-slate-400 tracking-widest">UK_01</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Southampton Waterfront</h4>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">MICE_SECTOR // SHARD_21450</p>
                </div>
                <div className="pt-4 border-t border-slate-50 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Valuation</p>
                    <p className="text-sm font-bold tnum">£100M</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Target APY</p>
                    <p className="text-sm font-bold tnum text-emerald-600">8.2%</p>
                  </div>
                </div>
              </div>

              <div className="jigsaw-card p-6 rounded-[32px] bg-jigsaw-navy text-white border-none shadow-elevated">
                <div className="flex justify-between items-start mb-12">
                  <Cpu size={24} className="text-white/40" />
                  <div className="px-2 py-1 bg-white/10 rounded text-[8px] font-black tracking-widest">REALTIME_SYNC</div>
                </div>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] mb-1">Network Capacity</p>
                <h3 className="text-4xl font-medium tracking-tight mb-6 tnum">98.4<span className="text-white/30">%</span></h3>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '98.4%' }}
                    className="h-full bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-12 md:pt-0">
              <MetricCard label="Market Velocity" value="Critical" sub="High Demand Sector" icon={Zap} trend="+12.4%" />
              <div className="jigsaw-card p-6 rounded-[32px] bg-slate-50 border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <Activity size={16} className="text-jigsaw-navy" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Pulse</span>
                </div>
                <div className="h-24 flex items-end gap-1">
                  {[40, 60, 35, 70, 85, 45, 60, 90, 50, 65, 80, 55].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      className="flex-1 bg-jigsaw-navy/10 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
              <MetricCard label="Procurement Alpha" value="35.2%" sub="Avg negotiated savings" icon={TrendingUp} delay={0.2} />
            </div>
          </div>
        </div>
      </section>

      {/* PROCUREMENT INTERACTIVE */}
      <section className="py-24 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl heading-elite">Yield & Savings <br />Optimization.</h2>
              <p className="text-slate-500 text-lg">Simulate your institutional event spend to visualize procurement efficiency across our global network.</p>
            </div>
            <div className="space-y-4">
              <SliderWidget label="Annual Event Budget (£M)" value={valuation} onChange={setValuation} min={10} max={500} step={10} />
              <SliderWidget label="Negotiated Alpha (%)" value={yieldRate} onChange={setYieldRate} min={0} max={40} step={0.1} suffix="%" />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <motion.div 
              className="jigsaw-card p-8 md:p-12 rounded-[40px] bg-slate-50/50 flex flex-col items-center text-center space-y-12"
            >
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Projected Annual Savings</p>
                <motion.h3 
                  key={valuation * yieldRate}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-6xl md:text-8xl font-medium text-jigsaw-navy tracking-tighter tnum"
                >
                  £{(valuation * (yieldRate / 100)).toFixed(1)}M
                </motion.h3>
              </div>

              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-200/60">
                <div className="space-y-2">
                  <Fingerprint size={20} className="mx-auto text-slate-300" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Verified ID</p>
                  <p className="text-xs font-bold">JIGSAW_AUTH_V4</p>
                </div>
                <div className="space-y-2">
                  <Network size={20} className="mx-auto text-slate-300" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Node Sync</p>
                  <p className="text-xs font-bold">ACTIVE_98.4%</p>
                </div>
                <div className="space-y-2">
                  <Lock size={20} className="mx-auto text-slate-300" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Protocol</p>
                  <p className="text-xs font-bold">ISO_27001</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER / TELEMETRY */}
      <footer className="py-20 px-6 bg-slate-900 text-white selection:bg-white/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Building2 size={16} className="text-white" />
                </div>
                <span className="text-sm font-bold tracking-tight">JIGSAW</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                Elite venue intelligence and procurement infrastructure for global enterprise organizations. Headquartered in Mayfair, London.
              </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Infrastructure</h5>
              <div className="flex flex-col gap-2 text-xs font-medium text-slate-400">
                <a href="#" className="hover:text-white transition-colors">Mission Control</a>
                <a href="#" className="hover:text-white transition-colors">Sourcing Terminal</a>
                <a href="#" className="hover:text-white transition-colors">API Gateway</a>
                <a href="#" className="hover:text-white transition-colors">Node Health</a>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Compliance</h5>
              <div className="flex flex-col gap-2 text-xs font-medium text-slate-400">
                <a href="#" className="hover:text-white transition-colors">ISO 27001:2022</a>
                <a href="#" className="hover:text-white transition-colors">ISO 9001 Quality</a>
                <a href="#" className="hover:text-white transition-colors">Data Processing</a>
                <a href="#" className="hover:text-white transition-colors">GDPR / EU AI Act</a>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Network Status</h5>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-white/40 uppercase">Operational</span>
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-white/40 uppercase">Latency</span>
                  <span className="text-[10px] font-bold tnum">42ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-white/40 uppercase">Region</span>
                  <span className="text-[10px] font-bold">AWS_EU_WEST_2</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.25em] text-white/20">
              <span>SECURE_SESSION_v4.2</span>
              <span>ENC_AES_256</span>
              <span>TLS_1.3_READY</span>
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">© 2026 Jigsaw Conferences Ltd. London, W1S 4JL.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Zap, 
  Building2, 
  MapPin, 
  BarChart3, 
  Lock, 
  CheckCircle2,
  Navigation,
  Search,
  Plus,
  Home,
  Cpu,
  Terminal,
  Activity,
  ChevronRight,
  Info,
  Maximize2,
  ExternalLink,
  Target
} from 'lucide-react'

/**
 * LUMINA INSTITUTIONAL PORTAL v3.0
 * Design Specification: Mockup 09b5c31d-caa5-5fd8-949e-b0a4f78b2c68
 * Theme: Deep Charcoal (#13161A), Neon Green (#00D980)
 * Layout: Elite High-Density Institutional SPA
 */

export default function LuminaApp() {
  const [activeTab, setActiveTab] = useState('Home')

  return (
    <div className="min-h-screen bg-[#13161A] text-white selection:bg-[#00D980]/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pt-20 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[1440px] mx-auto px-8 lg:px-12"
          >
            {activeTab === 'Home' ? <HomeMockupView /> : <PlaceholderView title={activeTab} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

function Navbar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) {
  const tabs = ['Home', 'Southampton Waterfront', 'AI Intelligence', 'Mission Control', 'CLI']
  
  return (
    <nav className="fixed top-0 z-[100] w-full bg-[#13161A]/60 backdrop-blur-2xl border-b border-white/[0.05]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setActiveTab('Home')}>
          <div className="w-9 h-9 bg-[#00D980] rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(0,217,128,0.4)] transition-transform group-hover:scale-110">
            <span className="text-[#13161A] font-black text-lg italic">L</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-[-1px] leading-none">LUMINA</span>
            <span className="text-[10px] font-bold text-[#00D980] tracking-[2px] uppercase opacity-80">Institutional</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-1.5 bg-white/[0.03] p-1.5 rounded-2xl border border-white/[0.05]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 relative overflow-hidden group ${
                activeTab === tab 
                ? 'text-[#13161A]' 
                : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              {activeTab === tab && (
                <motion.div 
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-[#00D980] shadow-[0_0_15px_rgba(0,217,128,0.3)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        <button className="relative group overflow-hidden bg-white text-[#13161A] px-7 py-3 rounded-2xl text-sm font-black hover:bg-[#00D980] transition-colors duration-500">
          <span className="relative z-10">LAUNCH TERMINAL</span>
          <div className="absolute inset-0 bg-[#00D980] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
      </div>
    </nav>
  )
}

/**
 * EXACT MOCKUP REPLICATION: 09b5c31d-caa5-5fd8-949e-b0a4f78b2c68
 */
function HomeMockupView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
      {/* LEFT COLUMN: 5/12 - Headline, Tagline, Southampton Card */}
      <div className="lg:col-span-5 space-y-12">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#00D980] animate-pulse" />
            <span className="text-[10px] font-black tracking-[2px] text-[#00D980] uppercase">System Genesis Alpha</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl lg:text-8xl font-black tracking-[-3px] leading-[0.9] text-white"
          >
            Ownership, <br />
            <span className="text-white/40">Redefined.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-[#94A3B8] leading-relaxed max-w-md font-medium"
          >
            Lumina bridges ultra-high-yield real estate with a programmatic liquidity engine. Access the next epoch of global capital.
          </motion.p>
        </div>

        {/* Southampton Waterfront Card - Bottom of Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-br from-[#00D980]/40 to-transparent rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-[#1a1f26] border border-white/[0.08] rounded-[40px] p-10 overflow-hidden shadow-2xl">
            {/* High-Density Telemetry Header */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <div className="text-[10px] font-black text-[#00D980] tracking-[3px] uppercase mb-2">Institutional Asset v4</div>
                <h3 className="text-3xl font-black tracking-[-1px]">Southampton Waterfront <br /> <span className="text-white/50">Tokenized Development</span></h3>
              </div>
              <div className="w-16 h-16 rounded-full border-2 border-white/[0.05] flex items-center justify-center relative">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="32" cy="32" r="28" fill="transparent" stroke="#00D980" strokeWidth="3" strokeDasharray="176" strokeDashoffset="35" strokeLinecap="round" />
                </svg>
                <span className="absolute text-xs font-black tabular-nums text-[#00D980]">82%</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white/[0.03] border border-white/[0.05] p-6 rounded-3xl">
                <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[2px] mb-1">Minimum Entry</div>
                <div className="text-3xl font-black tabular-nums">$50,000</div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.05] p-6 rounded-3xl">
                <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[2px] mb-1">Target Potential</div>
                <div className="text-3xl font-black tabular-nums text-[#00D980]">8-12%</div>
              </div>
            </div>

            {/* High-Density Action Button */}
            <button className="w-full py-6 rounded-[24px] bg-[#00D980] text-[#13161A] text-sm font-black uppercase tracking-[3px] shadow-[0_10px_30px_rgba(0,217,128,0.2)] hover:shadow-[0_15px_45px_rgba(0,217,128,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              Explore Tokenized Ownership
            </button>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: 7/12 - Immersive Image + Holographic Data */}
      <div className="lg:col-span-7 relative h-[840px]">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 rounded-[60px] overflow-hidden border border-white/[0.05] shadow-2xl"
        >
          {/* Main Visual: Man observing modern architecture */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=2400')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13161A] via-transparent to-[#13161A]/40" />
          
          {/* Holographic UI Overlays */}
          
          {/* Top Panel: Live Intelligence */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-12 p-6 rounded-[32px] bg-white/[0.03] backdrop-blur-2xl border border-white/[0.1] shadow-2xl min-w-[320px]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00D980] animate-pulse" />
                <span className="text-[10px] font-black text-white/50 tracking-[2px] uppercase">Market Alpha Feed</span>
              </div>
              <Maximize2 size={14} className="text-white/30" />
            </div>
            <div className="space-y-4">
              {[
                { label: 'Asset Volatility', value: 'Low', color: '#00D980' },
                { label: 'Shard Liquidity', value: 'Institutional', color: '#FFFFFF' },
                { label: 'Sentiment Engine', value: 'Positive', color: '#00D980' }
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center pb-3 border-b border-white/[0.05]">
                  <span className="text-xs font-bold text-[#94A3B8]">{row.label}</span>
                  <span className="text-xs font-black tabular-nums" style={{ color: row.color }}>{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center Right Panel: Asset Performance Shard */}
          <motion.div 
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-12 p-8 rounded-[40px] bg-[#00D980]/10 backdrop-blur-3xl border border-[#00D980]/20 shadow-[0_0_50px_rgba(0,217,128,0.1)]"
          >
            <div className="text-[10px] font-black text-[#00D980] tracking-[3px] uppercase mb-4 text-center">Live Yield Accrual</div>
            <div className="text-6xl font-black tabular-nums tracking-[-4px] text-white text-center mb-6">12.42%</div>
            <div className="flex gap-1 items-end justify-center h-12">
              {[30, 50, 45, 80, 60, 95, 85].map((h, i) => (
                <div key={i} className="w-1.5 bg-[#00D980] rounded-full" style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>

          {/* Bottom Left: Portfolio Shards */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-12 left-12 right-12 p-8 rounded-[40px] bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] shadow-2xl flex items-center justify-between"
          >
            <div className="flex gap-8 items-center">
              <div>
                <div className="text-[10px] font-black text-white/40 tracking-[2px] uppercase mb-1">Global Shards</div>
                <div className="text-2xl font-black tabular-nums">4,821,092</div>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <div>
                <div className="text-[10px] font-black text-white/40 tracking-[2px] uppercase mb-1">Exit Volume</div>
                <div className="text-2xl font-black tabular-nums text-[#00D980]">£42.8M</div>
              </div>
            </div>
            <button className="flex items-center gap-3 text-[10px] font-black tracking-[2px] text-white/60 hover:text-[#00D980] transition-colors uppercase">
              Browse Asset Cloud
              <ChevronRight size={16} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function PlaceholderView({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-[#00D980]/10 rounded-3xl flex items-center justify-center text-[#00D980] mb-8 border border-[#00D980]/20">
        <Target size={40} />
      </div>
      <h2 className="text-5xl font-black tracking-tight mb-4">{title}</h2>
      <p className="text-[#94A3B8] max-w-lg mx-auto text-lg leading-relaxed mb-8">
        System module is currently initializing. The full high-density {title} interface will be online momentarily.
      </p>
      <button className="px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-sm font-bold hover:bg-white/[0.06] transition-all">
        Sync with Genesis Alpha
      </button>
    </div>
  )
}

function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-8 lg:px-12 border-t border-white/[0.05] pt-20 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#00D980] rounded-lg flex items-center justify-center">
              <span className="text-[#13161A] font-black text-xs italic">L</span>
            </div>
            <span className="text-xl font-black tracking-[-1px]">LUMINA INSTITUTIONAL</span>
          </div>
          <p className="text-[#94A3B8] text-sm max-w-sm leading-relaxed font-medium">
            The world's most defensive programmatic asset engine. Designed for the next epoch of global capital accumulation and exit protocols.
          </p>
          <div className="flex gap-4">
            {[Globe, Shield, Activity].map((Icon, i) => (
              <div key={i} className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[#00D980] hover:border-[#00D980]/30 transition-all cursor-pointer">
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-[10px] font-black text-[#00D980] tracking-[3px] uppercase">Engine</div>
          <ul className="space-y-4 text-sm font-bold text-[#94A3B8]">
            <li className="hover:text-white cursor-pointer transition-colors">Shard Procurement</li>
            <li className="hover:text-white cursor-pointer transition-colors">Yield Optimization</li>
            <li className="hover:text-white cursor-pointer transition-colors">Liquidity Vaults</li>
            <li className="hover:text-white cursor-pointer transition-colors">API Connectivity</li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="text-[10px] font-black text-[#00D980] tracking-[3px] uppercase">Security</div>
          <ul className="space-y-4 text-sm font-bold text-[#94A3B8]">
            <li className="flex items-center gap-3"><Lock size={16} /> ISO 27001</li>
            <li className="flex items-center gap-3"><CheckCircle2 size={16} /> SOC2 Type II</li>
            <li className="flex items-center gap-3"><Shield size={16} /> FCA Licensed</li>
            <li className="flex items-center gap-3"><Activity size={16} /> Real-time Audit</li>
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] font-black text-white/20 tracking-[2px] uppercase">
          © 2026 LUMINA INSTITUTIONAL. SYSTEM CORE v3.0.4.
        </div>
        <div className="flex gap-12 text-[10px] font-black text-white/30 tracking-[2px] uppercase">
          <span className="hover:text-white cursor-pointer transition-colors">Exit Protocol</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Shield</span>
          <span className="hover:text-white cursor-pointer transition-colors">Institutional Compliance</span>
        </div>
      </div>
    </footer>
  )
}

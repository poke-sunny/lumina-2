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
  Info
} from 'lucide-react'

// Spec: Inter Variable, Deep Charcoal #13161A, Neon Green #00D980
const headingStyles = "font-semibold tracking-[-1.056px] text-white"
const bodyStyles = "font-normal text-[#94A3B8]"
const accentColor = "#00D980"

export default function LuminaApp() {
  const [activeTab, setActiveTab] = useState('Home')

  const renderContent = () => {
    switch (activeTab) {
      case 'Home': return <HomeView />
      case 'Southampton Waterfront': return <SouthamptonView />
      case 'AI Intelligence': return <IntelligenceView />
      case 'Mission Control': return <MissionControlView />
      case 'CLI': return <CLIView />
      default: return <HomeView />
    }
  }

  return (
    <div className="min-h-screen bg-[#13161A] text-white selection:bg-[#00D980]/30 selection:text-white font-sans overflow-x-hidden">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
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
    <nav className="fixed top-0 z-50 w-full bg-[#13161A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('Home')}>
          <div className="w-7 h-7 bg-[#00D980] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,217,128,0.4)]">
            <span className="text-[#13161A] font-black text-sm">L</span>
          </div>
          <span className="text-xl font-bold tracking-[-0.5px]">LUMINA</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab 
                ? 'bg-[#00D980] text-[#13161A] shadow-[0_0_10px_rgba(0,217,128,0.3)]' 
                : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button className="bg-white text-[#13161A] px-5 py-2 rounded-xl text-sm font-bold hover:bg-[#f8fafc] transition-all">
          Launch App
        </button>
      </div>
    </nav>
  )
}

function HomeView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Hero Text */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D980]/10 border border-[#00D980]/20">
            <Zap size={14} className="text-[#00D980]" />
            <span className="text-[10px] font-bold tracking-wider text-[#00D980] uppercase">V2.0 Core Live</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-[-1.056px] leading-[1.05]">
            Ownership, <br /> <span className="text-[#00D980]">Redefined.</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-lg leading-relaxed">
            Lumina bridges high-yield institutional real estate with a programmatic liquidity engine. 
            Acquire fractional shards and watch your sovereignty scale.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#00D980] text-[#13161A] px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,217,128,0.2)]">
              Start Procurement
              <ChevronRight size={18} />
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors">
              View Asset Cloud
            </button>
          </div>
        </div>

        {/* Right: Holographic Panel */}
        <div className="relative">
          <div className="absolute -inset-10 bg-[#00D980]/10 rounded-full blur-[100px] opacity-30" />
          <div className="relative aspect-square rounded-3xl border border-white/10 bg-white/5 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13161A] via-transparent to-transparent" />
            
            {/* Holographic Overlays */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#00D980] animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">Live Yield</span>
              </div>
              <div className="text-2xl font-bold tabular-nums">12.42%</div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 left-8 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl w-64"
            >
              <div className="text-[10px] font-bold text-[#94A3B8] uppercase mb-2">Portfolio Density</div>
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-[#00D980]" />
                </div>
                <div className="flex justify-between text-[10px] font-bold">
                  <span>SHARD-229</span>
                  <span>85% OWNED</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SouthamptonView() {
  const [investment, setInvestment] = useState(250000)
  const yieldRate = 0.104
  const annualReturn = investment * yieldRate

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="relative bg-[#1a1f26] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-20 h-20 rounded-full border-4 border-white/5 flex items-center justify-center relative">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="40" cy="40" r="36" fill="transparent" stroke="#00D980" strokeWidth="4" strokeDasharray="226" strokeDashoffset="45" strokeLinecap="round" />
                </svg>
                <span className="absolute text-xs font-bold tabular-nums text-[#00D980]">80%</span>
              </div>
            </div>
            
            <div className="mb-10">
              <div className="text-[10px] font-bold text-[#00D980] uppercase tracking-[2px] mb-3">Asset ID: #SW-PHASE-II</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Southampton Waterfront</h2>
              <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
                <MapPin size={16} />
                <span>Premier Quayside, Southampton, UK</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
                <div className="text-[10px] text-[#94A3B8] uppercase mb-1">Entry Capital</div>
                <div className="text-2xl font-bold tabular-nums">£50,000</div>
              </div>
              <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
                <div className="text-[10px] text-[#94A3B8] uppercase mb-1">Target Yield</div>
                <div className="text-2xl font-bold tabular-nums text-[#00D980]">8-12%</div>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-[#94A3B8] uppercase tracking-widest">Shard Allocation</span>
                <span className="text-xl font-bold tabular-nums">£{investment.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="50000" 
                max="1000000" 
                step="50000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none accent-[#00D980] cursor-pointer"
              />
              <div className="flex justify-between mt-4 text-[10px] font-bold text-[#64748b]">
                <span>£50k</span>
                <span>£1.0M</span>
              </div>
            </div>

            <div className="bg-[#00D980] text-[#13161A] p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-all">
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider opacity-60">Estimated Passive Return</div>
                <div className="text-2xl font-black tabular-nums">£{annualReturn.toLocaleString()} /yr</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#13161A] flex items-center justify-center text-[#00D980] group-hover:translate-x-1 transition-transform">
                <ArrowRight size={20} />
              </div>
            </div>
            
            <button className="w-full mt-4 py-4 rounded-2xl border border-white/10 text-xs font-bold uppercase tracking-[2px] text-[#94A3B8] hover:text-white hover:bg-white/5 transition-all">
              Explore Tokenized Ownership
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-1.056px] leading-tight">
            High-Yield <br /> Waterfront Shards.
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            Southampton Waterfront Phase II represents the pinnacle of UK coastal redevelopment. 
            Through tokenization, we've broken this £45M asset into accessible institutional shards.
          </p>
          <div className="space-y-4">
            {[
              { icon: Shield, label: 'Asset Insurance', value: '100% Fully Backed' },
              { icon: Activity, label: 'Market Liquidity', value: 'Instant Exit Protocol' },
              { icon: Globe, label: 'Jurisdiction', value: 'UK Land Registry Integrated' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#00D980]/10 flex items-center justify-center text-[#00D980]">
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#94A3B8] uppercase">{item.label}</div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function IntelligenceView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <div className="w-16 h-16 bg-[#00D980]/10 text-[#00D980] rounded-2xl flex items-center justify-center mx-auto mb-8 border border-[#00D980]/20">
        <Cpu size={32} />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">AI Intelligence Engine</h2>
      <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg mb-12">
        Our proprietary LLM analyzes global real estate sentiment, zoning updates, and macro-economic shifts to source the most defensive asset shards.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Sentiment Analysis', desc: 'Processing 4M+ daily data points from news and public records.' },
          { title: 'Risk Scorecard', desc: 'Real-time volatility tracking across all tokenized jurisdictions.' },
          { title: 'Genesis Alpha', desc: 'Identifying off-market institutional opportunities before the curve.' }
        ].map((feat, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 text-left hover:border-[#00D980]/30 transition-all">
            <h3 className="text-xl font-bold mb-4">{feat.title}</h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MissionControlView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-2">Mission Control</h2>
          <p className="text-[#94A3B8]">Your sovereign asset dashboard.</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold tabular-nums">
            ACTIVE ASSETS: 14
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#00D980]/10 border border-[#00D980]/20 text-[#00D980] text-xs font-bold tabular-nums">
            TOTAL VALUE: £1,240,000
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 h-[400px] rounded-3xl bg-[#1a1f26] border border-white/10 p-8 flex items-end">
          <div className="w-full space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-[10px] font-bold text-[#94A3B8] uppercase mb-1">Portfolio Growth</div>
                <div className="text-3xl font-bold tracking-tighter text-[#00D980]">+24.8%</div>
              </div>
              <div className="flex gap-1 items-end h-32">
                {[40, 60, 35, 75, 55, 90, 80, 95].map((h, i) => (
                  <div key={i} className="w-8 bg-[#00D980]/20 border-t-2 border-[#00D980] rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Activity size={18} className="text-[#00D980]" />
              Recent Activity
            </h3>
            <div className="space-y-6">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#00D980] mt-1.5" />
                  <div>
                    <div className="text-xs font-bold">Yield Distribution Received</div>
                    <div className="text-[10px] text-[#94A3B8]">Asset #SHA-229 • 2 hours ago</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full py-4 rounded-2xl bg-white text-[#13161A] font-bold hover:scale-[1.02] transition-all">
            Execute Liquidity Event
          </button>
        </div>
      </div>
    </div>
  )
}

function CLIView() {
  const [input, setInput] = useState('')
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="rounded-2xl bg-[#08090a] border border-white/10 overflow-hidden shadow-2xl">
        <div className="bg-[#1a1f26] px-4 py-2 border-b border-white/5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <span className="text-[10px] font-bold text-[#64748b] tracking-widest uppercase">Lumina Terminal v2.0</span>
        </div>
        <div className="p-8 font-mono text-sm space-y-4 min-h-[400px]">
          <div className="text-[#00D980]">Welcome to Lumina Command Line.</div>
          <div className="text-[#94A3B8]">Type <span className="text-white">help</span> for available commands.</div>
          <div className="flex items-center gap-3">
            <span className="text-[#00D980]">lumina@sovereign:~$</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-white flex-1"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-[#13161A] border-t border-white/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-[#00D980] rounded-lg flex items-center justify-center">
                <span className="text-[#13161A] font-bold text-xs">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight">LUMINA</span>
            </div>
            <p className="text-[#94A3B8] text-sm max-w-sm mb-8 leading-relaxed">
              The elite portal for sovereign wealth and programmatic real estate. 
              Engineered for the next epoch of global capital.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00D980] hover:text-[#13161A] transition-all cursor-pointer">
                <Globe size={16} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#00D980] hover:text-[#13161A] transition-all cursor-pointer">
                <Shield size={16} />
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#00D980] uppercase tracking-[2px] mb-6">Platforms</div>
            <ul className="space-y-4 text-sm text-[#94A3B8]">
              <li className="hover:text-white cursor-pointer transition-colors">Shard Engine</li>
              <li className="hover:text-white cursor-pointer transition-colors">Liquidity Vaults</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sovereign Cloud</li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#00D980] uppercase tracking-[2px] mb-6">Security</div>
            <ul className="space-y-4 text-sm text-[#94A3B8]">
              <li className="flex items-center gap-2"><Lock size={14} /> ISO 27001</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} /> SOC2 Type II</li>
              <li className="flex items-center gap-2"><Shield size={14} /> FCA Registered</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-[#64748b] tracking-widest">
          <div>© 2026 LUMINA INSTITUTIONAL. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">TERMS OF USE</span>
            <span className="hover:text-white cursor-pointer transition-colors">PRIVACY PROTOCOL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

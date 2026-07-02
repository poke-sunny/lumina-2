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
  Plus
} from 'lucide-react'

// Spec: Inter Variable, 510 weight, -1.056px tracking for headings
const headingStyles = "font-medium tracking-[-1.056px] text-[#003366]"
const bodyStyles = "font-normal text-[#4a5568]"

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#ffffff] selection:bg-[#003366]/10 selection:text-[#003366]">
      <Header />
      <Hero />
      <SaaSMockup />
      <VenueShowcase />
      <YieldCalculator />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#ffffff]/80 backdrop-blur-md border-b border-[#f1f5f9]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#003366] rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-xs">J</span>
          </div>
          <span className={`text-xl ${headingStyles} !tracking-[-0.5px]`}>JIGSAW</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Portfolio', 'Institutional', 'Security', 'About'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-[#64748b] hover:text-[#003366] transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-[#003366]">Login</button>
          <button className="bg-[#003366] text-white px-5 py-2 rounded-sm text-sm font-medium hover:bg-[#002244] transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003366]/5 border border-[#003366]/10 mb-6">
            <Shield size={14} className="text-[#003366]" />
            <span className="text-[10px] font-bold tracking-wider text-[#003366] uppercase">ISO 27001 Certified Infrastructure</span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl mb-8 ${headingStyles} leading-[1.1] font-[510]`}>
            Institutional Asset <br /> Procurement Engine.
          </h1>
          
          <p className={`text-lg md:text-xl ${bodyStyles} max-w-xl mb-10 leading-relaxed`}>
            The elite portal for sovereign wealth and institutional investors. 
            Acquire fractional real estate shards with programmatic liquidity 
            and real-time financial sovereignty.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#003366] text-white px-8 py-4 rounded-sm font-medium flex items-center gap-3 hover:gap-4 transition-all group">
              Start Procurement
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border border-[#e2e8f0] text-[#003366] px-8 py-4 rounded-sm font-medium hover:bg-[#f8fafc] transition-colors">
              View Asset Cloud
            </button>
          </div>

          <div className="mt-16 flex items-center gap-12 border-t border-[#e2e8f0] pt-10">
            <div>
              <div className="text-2xl font-[510] text-[#003366] tabular-nums tracking-tighter">$4.2B+</div>
              <div className="text-xs text-[#94a3b8] uppercase font-bold tracking-widest mt-1">Managed Volume</div>
            </div>
            <div>
              <div className="text-2xl font-[510] text-[#003366] tabular-nums tracking-tighter">18ms</div>
              <div className="text-xs text-[#94a3b8] uppercase font-bold tracking-widest mt-1">Execution Speed</div>
            </div>
            <div>
              <div className="text-2xl font-[510] text-[#003366] tabular-nums tracking-tighter">0.0%</div>
              <div className="text-xs text-[#94a3b8] uppercase font-bold tracking-widest mt-1">Uptime Deviation</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block opacity-10 pointer-events-none">
        <div className="w-full h-full border-l border-t border-[#003366] bg-[linear-gradient(45deg,#003366_12.5%,transparent_12.5%,transparent_50%,#003366_50%,#003366_62.5%,transparent_62.5%,transparent_100%)] bg-[length:40px_40px]" />
      </div>
    </section>
  )
}

function SaaSMockup() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl ${headingStyles} font-[510] mb-4`}>Unified Command Center</h2>
          <p className={`${bodyStyles} max-w-2xl mx-auto`}>Total transparency over asset lifecycle, from initial shard discovery to institutional-grade yield distribution.</p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-[#003366]/5 rounded-[40px] blur-2xl group-hover:bg-[#003366]/10 transition-colors" />
          <div className="relative bg-[#ffffff] border border-[#e2e8f0] rounded-2xl shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[16/9]">
            {/* SaaS Header UI */}
            <div className="h-14 border-b border-[#f1f5f9] bg-[#f8fafc] px-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/20 border border-[#ff5f57]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/20 border border-[#febc2e]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/20 border border-[#28c840]/50" />
                </div>
                <div className="flex items-center gap-2 bg-white border border-[#e2e8f0] px-3 py-1 rounded text-[11px] text-[#64748b]">
                  <Search size={12} />
                  <span>jigsaw.io/procurement/shard-4492</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center">
                  <span className="text-[10px] text-[#003366] font-bold">AS</span>
                </div>
              </div>
            </div>

            <div className="flex h-full">
              {/* Sidebar UI */}
              <div className="w-48 border-r border-[#f1f5f9] p-4 hidden md:block">
                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest mb-3">Principal</div>
                    <div className="space-y-2">
                      {['Overview', 'Asset Shards', 'Liquidity'].map((t, i) => (
                        <div key={t} className={`text-xs px-3 py-2 rounded ${i === 1 ? 'bg-[#003366] text-white' : 'text-[#64748b]'}`}>{t}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest mb-3">Intelligence</div>
                    <div className="space-y-2 text-[#64748b] text-xs px-3 py-2">Risk Feed</div>
                    <div className="space-y-2 text-[#64748b] text-xs px-3 py-2">Projection Engine</div>
                  </div>
                </div>
              </div>

              {/* Main Content UI */}
              <div className="flex-1 p-8 overflow-hidden">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-[#003366] uppercase mb-1">Asset Reference: #SHA-21450</div>
                    <h3 className="text-xl font-[510] text-[#003366]">Southampton Waterfront Phase II</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-[#00c853]/10 text-[#00c853] text-[10px] font-bold px-2 py-1 rounded">ACTIVE</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#f8fafc] border border-[#f1f5f9] p-4 rounded-lg">
                    <div className="text-[10px] text-[#94a3b8] uppercase mb-1">Current Yield</div>
                    <div className="text-2xl font-[510] text-[#003366] tabular-nums">7.84%</div>
                  </div>
                  <div className="bg-[#f8fafc] border border-[#f1f5f9] p-4 rounded-lg">
                    <div className="text-[10px] text-[#94a3b8] uppercase mb-1">Token Price</div>
                    <div className="text-2xl font-[510] text-[#003366] tabular-nums">$14,220.00</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-4 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-[#003366]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-[#64748b]">
                    <span>78% ALLOCATED</span>
                    <span>$12,400,000 REMAINING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VenueShowcase() {
  const venues = [
    { name: "The Dorchester", location: "Mayfair, London", type: "Ultra-Luxury", yield: "4.2%", img: "bg-[#e2e8f0]" },
    { name: "Southampton Hub", location: "Southampton", type: "Commercial Elite", yield: "7.8%", img: "bg-[#f1f5f9]" },
    { name: "Temple View", location: "City of London", type: "Sovereign Asset", yield: "5.1%", img: "bg-[#f8fafc]" }
  ]

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className={`text-3xl md:text-4xl ${headingStyles} font-[510] mb-4`}>Verified Procurement Queue</h2>
            <p className={bodyStyles}>Direct institutional access to the most coveted asset classes in the UK portfolio.</p>
          </div>
          <button className="text-sm font-bold text-[#003366] flex items-center gap-2 group">
            Browse Full Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <div key={venue.name} className="group bg-white rounded-sm border border-[#e2e8f0] overflow-hidden hover:shadow-lg transition-all duration-500">
              <div className={`aspect-[4/3] ${venue.img} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[#003366]/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#003366] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-tighter">Premium</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-[510] text-[#003366] mb-1">{venue.name}</h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#94a3b8]">
                      <MapPin size={12} />
                      {venue.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#003366] tabular-nums">{venue.yield}</div>
                    <div className="text-[10px] text-[#94a3b8] uppercase">Target Yield</div>
                  </div>
                </div>
                <button className="w-full py-3 bg-[#f8fafc] border border-[#e2e8f0] text-[#003366] text-xs font-bold uppercase tracking-widest hover:bg-[#003366] hover:text-white hover:border-[#003366] transition-all">
                  Inspect Shards
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function YieldCalculator() {
  const [investment, setInvestment] = useState(250000)
  const yieldRate = 0.0784
  const annualReturn = investment * yieldRate

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className={`text-3xl md:text-4xl ${headingStyles} font-[510] mb-8`}>Southampton Waterfront <br /> Projection Engine</h2>
            <div className="space-y-8">
              <div className="p-6 bg-[#f8fafc] rounded-lg border border-[#f1f5f9]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold text-[#64748b] uppercase tracking-widest">Initial Shard Allocation</span>
                  <span className="text-xl font-[510] text-[#003366] tabular-nums">${investment.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="50000" 
                  max="5000000" 
                  step="50000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#e2e8f0] rounded-full appearance-none accent-[#003366] cursor-pointer"
                />
                <div className="flex justify-between mt-3 text-[10px] font-bold text-[#94a3b8]">
                  <span>MIN: $50,000</span>
                  <span>MAX: $5,000,000</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-[#f1f5f9] rounded-lg">
                  <div className="text-[10px] font-bold text-[#94a3b8] uppercase mb-1">Fixed Annual Yield</div>
                  <div className="text-3xl font-[510] text-[#003366] tabular-nums">7.84%</div>
                </div>
                <div className="p-6 border border-[#f1f5f9] rounded-lg">
                  <div className="text-[10px] font-bold text-[#94a3b8] uppercase mb-1">Forecasted Returns</div>
                  <div className="text-3xl font-[510] text-[#00c853] tabular-nums">${annualReturn.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#003366] rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <h3 className="text-2xl font-[510] mb-6 tracking-tight">Institutional Performance</h3>
            <p className="text-white/60 text-sm mb-10 leading-relaxed">Unlike retail real estate, Jigsaw assets are selected through an aggressive algorithmic filter ensuring only high-liquidity, high-yield institutional assets enter our cloud.</p>
            
            <div className="space-y-6">
              {[
                { label: 'Blockchain Settlement', status: 'Immediate' },
                { label: 'Asset Management', status: 'Jigsaw Direct' },
                { label: 'Liquidity Window', status: '24/7 Shard Trading' }
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{item.label}</span>
                  <span className="text-sm font-[510]">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t border-[#e2e8f0] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-[#003366] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs">J</span>
              </div>
              <span className={`text-xl ${headingStyles} !tracking-[-0.5px]`}>JIGSAW</span>
            </div>
            <p className={`${bodyStyles} text-sm max-w-sm mb-8`}>
              The first sovereign-aligned institutional asset engine. Engineered in Mayfair, London. Built for the next epoch of global capital.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center hover:bg-[#003366] hover:text-white transition-all cursor-pointer">
                <Globe size={16} />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center hover:bg-[#003366] hover:text-white transition-all cursor-pointer">
                <Shield size={16} />
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#003366] uppercase tracking-[2px] mb-6">Core Platforms</div>
            <ul className="space-y-4 text-sm text-[#64748b]">
              <li className="hover:text-[#003366] cursor-pointer">Asset Shard Engine</li>
              <li className="hover:text-[#003366] cursor-pointer">Liquidity Vaults</li>
              <li className="hover:text-[#003366] cursor-pointer">Sovereign Cloud</li>
              <li className="hover:text-[#003366] cursor-pointer">Enterprise Portal</li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-bold text-[#003366] uppercase tracking-[2px] mb-6">HQ / Compliance</div>
            <ul className="space-y-4 text-sm text-[#64748b]">
              <li className="flex items-center gap-2"><MapPin size={14} /> 45 Berkeley Square, Mayfair</li>
              <li className="flex items-center gap-2"><Lock size={14} /> ISO 27001 Certified</li>
              <li className="flex items-center gap-2"><Shield size={14} /> FCA Registered No. 92144</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} /> SOC2 Type II Compliant</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#e2e8f0] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest">
            © 2026 JIGSAW INSTITUTIONAL PORTAL. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-[#94a3b8] uppercase tracking-widest">
            <span className="hover:text-[#003366] cursor-pointer">Terms of Sovereign Use</span>
            <span className="hover:text-[#003366] cursor-pointer">Privacy Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Activity, 
  Globe,
  Terminal,
  Target,
  CheckCircle2,
  Mail,
  MapPin,
  ChevronRight
} from 'lucide-react'

const NavLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: any }) => (
  <Link href={href} className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-[#003366] transition-colors">
    <Icon size={14} className="text-slate-300 group-hover:text-[#003366] transition-colors" />
    {children}
  </Link>
)

const FeatureCard = ({ title, description, icon: Icon, delay = 0 }: { title: string; description: string; icon: any; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="p-8 rounded-[32px] border border-slate-100 bg-white hover:border-[#003366]/20 transition-all group"
  >
    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-[#003366]/5 transition-colors">
      <Icon size={24} className="text-[#003366]" />
    </div>
    <h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed font-medium">{description}</p>
  </motion.div>
)

const VenueCard = ({ title, location, cap, yieldRate, delay = 0 }: { title: string; location: string; cap: number; yieldRate: number; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-premium group cursor-pointer"
  >
    <div className="h-48 bg-slate-50 flex items-center justify-center relative">
      <Building2 size={48} className="text-slate-200" />
      <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-slate-100">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#003366]">Tier 1 Asset</span>
      </div>
    </div>
    <div className="p-6 space-y-4">
      <div>
        <h4 className="text-lg font-medium text-slate-900 mb-1">{title}</h4>
        <div className="flex items-center gap-1.5 text-slate-400">
          <MapPin size={12} />
          <span className="text-[10px] font-bold uppercase tracking-widest">{location}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
        <div className="space-y-1">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Delegates</p>
          <p className="text-sm font-bold tnum">{cap.toLocaleString()}</p>
        </div>
        <div className="space-y-1">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Efficiency</p>
          <p className="text-sm font-bold tnum text-emerald-600">{yieldRate}%</p>
        </div>
      </div>
    </div>
  </motion.div>
)

export default function JigsawCorporatePortal() {
  const [budget, setBudget] = useState(500000)
  const [alpha, setAlpha] = useState(35.2)

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-[#003366]/10">
      <header className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#003366] rounded-lg flex items-center justify-center">
                <Building2 size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-[#003366]">JIGSAW // LUMINA</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-10">
              <NavLink href="/mission-control" icon={Activity}>Mission Control</NavLink>
              <NavLink href="/cli" icon={Terminal}>Terminal</NavLink>
              <NavLink href="#" icon={Globe}>Venues</NavLink>
              <NavLink href="#" icon={ShieldCheck}>Security</NavLink>
            </nav>
          </div>
          <button className="px-7 py-2.5 bg-[#003366] text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-slate-900 transition-all">
            Enter Portal
          </button>
        </div>
      </header>

      <section className="relative pt-48 pb-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-2 h-2 bg-[#003366] rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#003366]">Enterprise Venue Sourcing</span>
            </div>
            <h1 className="text-6xl md:text-8xl heading-elite text-slate-900 leading-[0.9]">Corporate venue <br/>sourcing. <span className="text-[#003366] italic">Engineered.</span></h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl">The definitive platform for institutional procurement. Jigsaw Lumina combines algorithmic negotiation with a global network of 24,000+ verified locations.</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-[#003366] text-white text-[11px] font-black uppercase tracking-widest rounded-3xl shadow-xl hover:bg-slate-900 transition-all flex items-center gap-3 group">
                Access Portal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-900 text-[11px] font-black uppercase tracking-widest rounded-3xl hover:bg-slate-50 transition-all flex items-center gap-3 shadow-sm">
                Book Consultation <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[40px] border border-slate-200 bg-white p-4 shadow-2xl overflow-hidden">
              <div className="h-10 border-b border-slate-100 flex items-center gap-2 px-4 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
              </div>
              <div className="p-8 bg-slate-50 rounded-[24px] space-y-12">
                <div className="space-y-4 text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Yield Optimizer</p>
                  <h3 className="text-4xl font-medium text-[#003366] tnum">£{(budget * (alpha / 100)).toLocaleString()}</h3>
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-slate-400">Annual Budget</span>
                      <span className="text-[#003366]">£{budget.toLocaleString()}</span>
                    </div>
                    <input type="range" min="100000" max="1000000" step="10000" value={budget} onChange={e => setBudget(Number(e.target.value))} className="w-full accent-[#003366]" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-slate-400">Efficiency Alpha</span>
                      <span className="text-[#003366]">{alpha}%</span>
                    </div>
                    <input type="range" min="0" max="40" step="0.1" value={alpha} onChange={e => setAlpha(Number(e.target.value))} className="w-full accent-[#003366]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl heading-elite">Infrastructure for <br/>Global Procurement.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard title="Global Procurement" description="Access institutional rates and priority availability across 50+ countries." icon={Globe} delay={0.1} />
            <FeatureCard title="Algorithmic Negotiation" description="Lumina's engine benchmarks 24,000+ data points for every contract." icon={Target} delay={0.2} />
            <FeatureCard title="Enterprise Security" description="ISO 27001 certified data handling and EU AI Act compliant protocols." icon={ShieldCheck} delay={0.3} />
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-4xl md:text-5xl heading-elite">Premium Case Shards.</h2>
            <button className="text-[11px] font-black uppercase tracking-widest text-[#003366] flex items-center gap-2">View All Locations <ArrowRight size={14} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <VenueCard title="Southampton Waterfront" location="UK // SOUTH" cap={5000} yieldRate={8.2} delay={0.1} />
            <VenueCard title="Mayfair Executive Suite" location="UK // LONDON" cap={150} yieldRate={9.4} delay={0.2} />
            <VenueCard title="Shinjuku Business Hub" location="JP // TOKYO" cap={2500} yieldRate={7.1} delay={0.3} />
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-24">
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <Building2 size={24} className="text-[#003366]" />
              <span className="text-xl font-bold text-[#003366]">JIGSAW</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">3rd Floor, 45 Albemarle Street, <br/> Mayfair, London W1S 4JL, UK</p>
          </div>
          <div className="md:col-span-7 grid grid-cols-3 gap-12">
            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Services</h5>
              <div className="flex flex-col gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <a href="#">Procurement</a>
                <a href="#">Sourcing</a>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Technology</h5>
              <div className="flex flex-col gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <a href="#">Lumina Engine</a>
                <a href="#">Terminal CLI</a>
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Governance</h5>
              <div className="flex flex-col gap-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <a href="#">ISO 27001</a>
                <a href="#">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

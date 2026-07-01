'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Activity, ShieldCheck, Globe } from 'lucide-react'

export default function Landing() {
  return (
    <main className="min-h-screen bg-black text-foreground selection:bg-accent/30 overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <span className="text-3xl font-black tracking-tighter text-white uppercase">Lumina</span>
        <Link href="/onboarding" className="glass px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-black transition-all duration-500">
          Launch Terminal
        </Link>
      </nav>

      {/* Hero Section: Structural Copy from Mockup */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full border-accent/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Kinexys Node Active</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase">
                Your Personal <br /> 
                <span className="text-accent italic">AI Real Estate</span> <br />
                Companion
              </h1>
              <p className="text-zinc-500 text-lg md:text-xl max-w-lg leading-relaxed uppercase tracking-tight font-medium">
                Institutional-grade tokenization meets AI-driven intelligence. Ownership redefined for the next generation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Link href="/onboarding" className="bg-accent text-black px-10 py-5 rounded-2xl inline-flex items-center gap-4 hover:scale-[1.02] transition-all duration-500 group">
                <span className="font-black uppercase tracking-widest text-sm">Explore Tokenized Ownership</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Mockup Structural Card Section */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-[3.5rem] overflow-hidden border border-white/5 relative aspect-[4/5] md:aspect-square group"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* Floating Data Overlays from Mockup */}
              <div className="absolute top-12 left-12 glass p-6 rounded-3xl border-accent/20 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <Activity className="text-accent" size={18} />
                  <p className="text-white font-mono text-xs font-black uppercase">8.2% APY Live</p>
                </div>
              </div>

              <div className="absolute bottom-12 left-12 right-12 glass p-8 rounded-[2.5rem] border-white/10 backdrop-blur-3xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Southampton Waterfront</h3>
                    <span className="text-accent font-mono text-[10px] font-black">VERIFIED</span>
                  </div>
                  <div className="flex gap-8 pt-2">
                    <Metric label="Entry" value="£50k" />
                    <Metric label="Network" value="Kinexys" />
                    <Metric label="Class" value="A+" highlight />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements to match mockup complexity */}
            <div className="absolute -z-10 -right-20 -bottom-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature icon={<ShieldCheck size={32}/>} title="Multi-Sig Custody" desc="Secured via institutional-grade Onyx architecture with T+0 settlement." />
          <Feature icon={<Globe size={32}/>} title="Global Liquidity" desc="Access real estate markets worldwide through blockchain fractionalization." />
          <Feature icon={<Activity size={32}/>} title="AI Diagnostics" desc="Real-time performance metrics and predictive growth modeling for every asset." />
        </div>
      </section>
    </main>
  )
}

function Metric({ label, value, highlight }: any) {
  return (
    <div className="space-y-1">
      <p className="text-[8px] text-zinc-500 uppercase tracking-widest font-black">{label}</p>
      <p className={'text-xl font-black tracking-tighter ' + (highlight ? 'text-accent' : 'text-white')}>{value}</p>
    </div>
  )
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="glass p-10 rounded-[2.5rem] space-y-6 border-white/5 hover:border-accent/20 transition-all duration-500 group">
      <div className="text-accent group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <div className="space-y-3">
        <h3 className="text-xl font-black text-white uppercase tracking-tighter">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-widest font-bold">{desc}</p>
      </div>
    </div>
  )
}

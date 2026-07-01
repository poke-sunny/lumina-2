'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Activity, ShieldCheck, Globe, Zap, Cpu, Terminal, ShieldAlert, CheckCircle2 } from 'lucide-react'

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#F3F4F6] selection:bg-[#FF5A00]/30 overflow-x-hidden font-sans">
      {/* Sophisticated Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(255,90,0,0.03)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(255,90,0,0.03)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.01)_0%,transparent_80%)]" />
      </div>

      {/* Ultra-High-End Navigation */}
      <nav className="fixed top-0 w-full p-8 md:p-12 flex justify-between items-center z-50 mix-blend-difference">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-[#FF5A00] blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative w-full h-full bg-black border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
              <div className="w-5 h-5 border-2 border-[#FF5A00] rotate-45 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="text-2xl font-black tracking-[-0.08em] text-white uppercase">Lumina</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Protocol</a>
          <a href="#" className="hover:text-white transition-colors">Assets</a>
          <a href="#" className="hover:text-white transition-colors">Governance</a>
        </div>

        <Link href="/onboarding" className="relative group">
          <div className="absolute -inset-1 bg-[#FF5A00] rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity" />
          <div className="relative glass px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.25em] border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-700">
            Enter Terminal
          </div>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Messaging */}
          <div className="lg:col-span-7 space-y-12 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 bg-white/[0.03] backdrop-blur-3xl px-6 py-3 rounded-full border border-white/10"
            >
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#FF5A00]">Network Active</span>
              </div>
              <div className="h-4 w-[1px] bg-white/10" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">Validator LMN-7719</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <h1 className="text-7xl md:text-9xl font-black tracking-[-0.06em] text-white leading-[0.82] uppercase">
                Institutional <br /> 
                <span className="italic font-light text-zinc-500 opacity-50">Real Estate</span> <br />
                <span className="relative">
                  Companion
                  <div className="absolute -bottom-4 left-0 w-1/3 h-1 bg-[#FF5A00]" />
                </span>
              </h1>
              <p className="text-zinc-500 text-xl md:text-2xl max-w-2xl leading-relaxed uppercase tracking-[-0.02em] font-medium">
                The world’s first AI-integrated real estate protocol. Tokenized on J.P. Morgan Kinexys. Protected by multi-layer encryption.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              <Link href="/onboarding" className="group relative">
                <div className="absolute -inset-4 bg-[#FF5A00] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative bg-[#FF5A00] text-black px-12 py-7 rounded-2xl inline-flex items-center gap-8 transition-transform duration-500 group-hover:scale-[1.02] active:scale-[0.98]">
                  <span className="font-black uppercase tracking-[0.2em] text-sm">Explore Tokenized Assets</span>
                  <ArrowRight size={24} className="group-hover:translate-x-4 transition-transform duration-700" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Jaw-Dropping Southampton Card */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Ultra-Tactile Card */}
              <div className="relative glass rounded-[4rem] overflow-hidden border border-white/10 bg-[#050505]/90 backdrop-blur-3xl aspect-[3.8/5] shadow-[0_40px_100px_rgba(0,0,0,0.8)] group-hover:border-[#FF5A00]/30 transition-colors duration-1000">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-f1d3c5b5a261?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 group-hover:scale-105 transition-transform duration-[3000ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Protocol Telemetry Overlays */}
                <div className="absolute top-10 left-10 right-10 flex justify-between items-start z-10">
                  <div className="space-y-1">
                    <p className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-500">Asset Protocol</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">SOU-WF-2026</p>
                  </div>
                  <div className="glass px-4 py-2 rounded-xl border-white/10 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">On-Chain Verified</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-12 space-y-10">
                  <div className="space-y-4">
                    <h3 className="text-5xl font-black text-white uppercase tracking-[-0.06em] leading-none">Southampton<br/>Waterfront</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800" />
                        ))}
                      </div>
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">+4.2k Institutional Holders</span>
                    </div>
                  </div>
                  
                  {/* Tokenization Progress Widget */}
                  <div className="space-y-4 glass p-8 rounded-3xl border-white/5 bg-white/[0.02]">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <p className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.4em]">Tokenization Progress</p>
                        <p className="text-2xl font-black text-[#FF5A00] tracking-tighter">84.2%</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.4em]">Target APY</p>
                        <p className="text-2xl font-black text-white tracking-tighter">8.2%</p>
                      </div>
                    </div>
                    <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '84.2%' }}
                        transition={{ duration: 2, delay: 1 }}
                        className="absolute inset-y-0 left-0 bg-[#FF5A00] shadow-[0_0_15px_#FF5A00]" 
                      />
                    </div>
                    <div className="flex justify-between text-[8px] font-black text-zinc-600 uppercase tracking-widest">
                      <span>£50M Stake</span>
                      <span>£60M Hardcap</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-2">
                    <div className="space-y-1">
                      <p className="text-[8px] text-zinc-500 uppercase tracking-[0.4em] font-black">Min Entry</p>
                      <p className="text-2xl font-black text-white tracking-tighter">£50,000</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[8px] text-zinc-500 uppercase tracking-[0.4em] font-black">Settlement</p>
                      <div className="flex items-center gap-2">
                         <Zap size={14} className="text-[#FF5A00]" />
                         <p className="text-2xl font-black text-white tracking-tighter">T+0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid: Tier 1 Tactical Info */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/5 relative overflow-hidden">
         {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <FeatureCard 
            icon={<ShieldCheck size={32} />} 
            title="Protocol Integrity" 
            desc="Secured via multi-layer Onyx multi-sig architecture. Settlement layer handled by J.P. Morgan Kinexys nodes." 
            label="VERIFIED BLOCKCHAIN ASSETS"
          />
          <FeatureCard 
            icon={<Cpu size={32} />} 
            title="AI Diagnostics" 
            desc="GPT-4o powered predictive analytics for every asset class. 10-year yield modeling in 120ms." 
            label="0.12s RESPONSE TIME"
          />
          <FeatureCard 
            icon={<Globe size={32} />} 
            title="Infinite Liquidity" 
            desc="Secondary market fractionalization allows for seamless entry and exit. Traditional stability with crypto speed." 
            label="INSTANT SECONDARY TRADING"
          />
        </div>
      </section>

      {/* Institutional Footer & Compliance Terminal */}
      <footer className="bg-black border-t border-white/10 pt-24 pb-12 px-8 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 text-zinc-600">
             <div className="col-span-2 space-y-8">
                <div className="text-3xl font-black tracking-[-0.06em] text-white uppercase">Lumina</div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed max-w-xs">
                  Institutional real estate tokenization protocol. Regulated infrastructure for the generation alpha sovereign.
                </p>
             </div>
             <div className="space-y-6">
                <p className="text-[9px] font-black text-white uppercase tracking-[0.3em]">Platform</p>
                <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest">
                  <a href="#" className="hover:text-[#FF5A00]">Dashboard</a>
                  <a href="#" className="hover:text-[#FF5A00]">Marketplace</a>
                  <a href="#" className="hover:text-[#FF5A00]">Node Map</a>
                </div>
             </div>
             <div className="space-y-6">
                <p className="text-[9px] font-black text-white uppercase tracking-[0.3em]">Legal</p>
                <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest">
                  <a href="#" className="hover:text-[#FF5A00]">Privacy</a>
                  <a href="#" className="hover:text-[#FF5A00]">Terms</a>
                  <a href="#" className="hover:text-[#FF5A00]">Compliance</a>
                </div>
             </div>
             <div className="col-span-2 space-y-8">
                <p className="text-[9px] font-black text-white uppercase tracking-[0.3em]">Protocol Health</p>
                <div className="glass p-6 rounded-2xl border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-black uppercase tracking-widest">Uptime</span>
                    <span className="text-[8px] font-bold text-green-500 font-mono">99.999%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-black uppercase tracking-widest">Node Latency</span>
                    <span className="text-[8px] font-bold text-white font-mono">12ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-black uppercase tracking-widest">Contract Rev</span>
                    <span className="text-[8px] font-bold text-white font-mono">v2.4.0</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Compliance Labels Terminal */}
          <div className="border-y border-white/5 py-8 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-1000">
            <ComplianceBadge label="ISO 27001" sub="Information Security" />
            <ComplianceBadge label="ISO 9001" sub="Quality Mgmt" />
            <ComplianceBadge label="EU AI ACT" sub="Ethics Verified" />
            <ComplianceBadge label="SOC 2 TYPE II" sub="Trust Services" />
            <ComplianceBadge label="MiCA COMPLIANT" sub="EU Digital Assets" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8">
            <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-5 py-2 rounded-full">
               <Terminal size={14} className="text-[#FF5A00]" />
               <p className="text-[8px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Contract: 0x47A...f8E12 (Verified)</p>
            </div>
            <p className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.4em]">© 2026 LUMINA PROTOCOL | JIGSAW QUANTUM SOLUTIONS</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, desc, label }: any) {
  return (
    <div className="glass p-12 rounded-[3.5rem] space-y-10 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#FF5A00]/20 transition-all duration-700 group relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF5A00]/[0.02] blur-[80px] rounded-full group-hover:bg-[#FF5A00]/[0.05] transition-all" />
      <div className="space-y-4">
        <p className="text-[8px] font-black text-[#FF5A00] uppercase tracking-[0.4em]">{label}</p>
        <div className="text-white group-hover:scale-110 group-hover:translate-x-2 transition-transform duration-700">{icon}</div>
      </div>
      <div className="space-y-4">
        <h3 className="text-3xl font-black text-white uppercase tracking-[-0.05em]">{title}</h3>
        <p className="text-zinc-500 text-[13px] leading-relaxed uppercase tracking-widest font-bold">{desc}</p>
      </div>
    </div>
  )
}

function ComplianceBadge({ label, sub }: { label: string, sub: string }) {
  return (
    <div className="flex items-center gap-4 group cursor-default">
       <ShieldAlert size={18} className="text-zinc-700 group-hover:text-[#FF5A00] transition-colors" />
       <div className="flex flex-col">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{label}</span>
          <span className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest">{sub}</span>
       </div>
    </div>
  )
}

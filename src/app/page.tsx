'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Activity, ShieldCheck, Globe, Zap, Cpu, Terminal, ShieldAlert, CheckCircle2, Layout, Boxes, BarChart3, Database } from 'lucide-react'

function FeatureCard({ icon, title, desc, label }: { icon: React.ReactNode, title: string, desc: string, label: string }) {
  return (
    <div className="glass-panel p-12 rounded-[2.5rem] space-y-12 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#FF5A00]/30 transition-all duration-1000 group">
      <div className="space-y-6">
        <p className="text-[9px] font-black text-[#FF5A00] uppercase tracking-[0.5em]">{label}</p>
        <div className="text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-700">{icon}</div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-plus font-black text-white uppercase tracking-[-0.05em]">{title}</h3>
        <p className="text-zinc-600 text-[11px] leading-relaxed uppercase tracking-widest font-bold font-inter">{desc}</p>
      </div>
    </div>
  );
}

function FooterLinkGroup({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="space-y-8">
      <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">{title}</p>
      <div className="flex flex-col gap-5 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
        {links.map(l => (
          <a key={l} href="#" className="hover:text-[#FF5A00] transition-all duration-500 hover:translate-x-2">{l}</a>
        ))}
      </div>
    </div>
  );
}

function StatusLine({ label, value, isHighlighted }: { label: string, value: string, isHighlighted?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">{label}</span>
      <span className={`text-[9px] font-bold font-mono ${isHighlighted ? 'text-[#FF5A00]' : 'text-white'}`}>{value}</span>
    </div>
  );
}

function ComplianceBadge({ label, sub }: { label: string, sub: string }) {
  return (
    <div className="flex items-center gap-4 group cursor-default">
      <ShieldAlert size={20} className="text-zinc-800 group-hover:text-[#FF5A00] transition-colors duration-700" />
      <div className="flex flex-col">
        <span className="text-[10px] font-plus font-black text-white uppercase tracking-[0.3em]">{label}</span>
        <span className="text-[8px] font-black text-zinc-800 uppercase tracking-widest">{sub}</span>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#F3F4F6] selection:bg-[#FF5A00]/30 overflow-x-hidden font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;800&family=Inter:wght@300;400;600;900&display=swap');
        :root { --font-plus: 'Plus Jakarta Sans', sans-serif; --font-inter: 'Inter', sans-serif; }
        .font-plus { font-family: var(--font-plus); }
        .font-inter { font-family: var(--font-inter); }
        .glass-panel {
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(255,90,0,0.04)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(255,90,0,0.02)_0%,transparent_70%)]" />
      </div>

      <nav className="fixed top-0 w-full p-6 md:p-10 lg:p-14 flex justify-between items-center z-50">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <div className="absolute inset-0 bg-[#FF5A00] blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700" />
            <div className="relative w-full h-full bg-black border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
              <div className="w-5 h-5 border-[1.5px] border-[#FF5A00] rotate-45 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
          <span className="text-2xl md:text-3xl font-plus font-black tracking-[-0.08em] text-white uppercase">Lumina</span>
        </div>
        <div className="hidden lg:flex items-center gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
          <a href="#" className="hover:text-white transition-all duration-500 hover:tracking-[0.5em]">Protocol</a>
          <a href="#" className="hover:text-white transition-all duration-500 hover:tracking-[0.5em]">Assets</a>
          <a href="#" className="hover:text-white transition-all duration-500 hover:tracking-[0.5em]">Kinexys</a>
        </div>
        <Link href="/onboarding" className="relative group overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <div className="relative px-8 md:px-10 py-3 md:py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-white/10 bg-white/5 group-hover:text-black transition-colors duration-500">
            Access Terminal
          </div>
        </Link>
      </nav>

      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          <div className="lg:col-span-7 space-y-12 z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-4 bg-white/[0.03] backdrop-blur-3xl px-6 py-3 rounded-full border border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF5A00]">J.P. Morgan Kinexys Settlement</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="space-y-10">
              <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] font-plus font-black tracking-[-0.07em] text-white leading-[0.85] uppercase">Private <br /><span className="italic font-extralight text-zinc-600">Inventory</span> <br />Control</h1>
              <p className="font-inter text-zinc-500 text-lg md:text-2xl max-w-2xl leading-relaxed uppercase tracking-tight font-light">The absolute benchmark in digital real estate. High-fidelity tokenization for the Mayfair sovereign. Institutional liquidity meets architectural precision.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }} className="flex flex-wrap gap-10 pt-8">
              <Link href="/onboarding" className="group relative">
                <div className="absolute -inset-8 bg-[#FF5A00] blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
                <div className="relative flex items-center gap-12 border-b-[1.5px] border-white/10 pb-4 group-hover:border-[#FF5A00] transition-colors duration-700">
                  <span className="font-plus font-black uppercase tracking-[0.3em] text-xs">Explore Active Shards</span>
                  <ArrowRight size={24} className="group-hover:translate-x-6 transition-transform duration-700 text-[#FF5A00]" />
                </div>
              </Link>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 60 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="relative group">
              <div className="glass-panel rounded-[3rem] overflow-hidden aspect-[4/5.5] relative p-1">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-soft-light opacity-30 group-hover:scale-110 transition-transform duration-[5000ms]" />
                <div className="relative h-full flex flex-col justify-between p-12 md:p-16 z-10">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <p className="text-[9px] font-black uppercase tracking-[0.5em] text-[#FF5A00]">Asset Class AA+</p>
                      <p className="text-xs font-inter font-bold text-white/50 tracking-widest">SOU-WF-100M</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-xl"><p className="text-[10px] font-black text-white tracking-[0.2em] uppercase italic">Verified</p></div>
                  </div>
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <h3 className="text-5xl md:text-6xl font-plus font-black text-white uppercase tracking-[-0.06em] leading-none">Southampton<br/>Waterfront</h3>
                      <p className="text-xs font-black text-zinc-500 uppercase tracking-[0.4em]">Valuation: £100,000,000</p>
                    </div>
                    <div className="space-y-8 bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] backdrop-blur-2xl">
                      <div className="flex justify-between items-end">
                        <div className="space-y-2">
                          <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.4em]">Tokenized</p>
                          <p className="text-3xl font-plus font-black text-[#FF5A00] tracking-tighter">84.2%</p>
                        </div>
                        <div className="text-right space-y-2">
                          <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.4em]">Target Yield</p>
                          <p className="text-3xl font-plus font-black text-white tracking-tighter">8.2%<span className="text-sm font-light text-zinc-500 ml-1 italic">APY</span></p>
                        </div>
                      </div>
                      <div className="relative h-[2px] w-full bg-white/10 rounded-full">
                        <motion.div initial={{ width: 0 }} animate={{ width: '84.2%' }} transition={{ duration: 2.5, delay: 1 }} className="absolute inset-y-0 left-0 bg-[#FF5A00] shadow-[0_0_20px_#FF5A00]" />
                      </div>
                      <div className="grid grid-cols-2 gap-8 pt-4">
                        <div className="space-y-1">
                          <p className="text-[8px] text-zinc-600 uppercase tracking-[0.4em] font-black">Floor Entry</p>
                          <p className="text-2xl font-plus font-black text-white tracking-tighter">£50,000</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[8px] text-zinc-600 uppercase tracking-[0.4em] font-black">Settlement</p>
                          <p className="text-2xl font-plus font-black text-white tracking-tighter italic">Atomic</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-[1.5px] border-b-[1.5px] border-[#FF5A00]/40 rounded-br-[4rem] pointer-events-none" />
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-[1.5px] border-t-[1.5px] border-white/10 rounded-tl-[4rem] pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 px-6 md:px-12 lg:px-20 border-t border-white/5 relative bg-[#050505]">
        <div className="max-w-[1400px] mx-auto space-y-32">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b border-white/5 pb-20">
            <h2 className="text-5xl md:text-7xl font-plus font-black uppercase tracking-[-0.06em] leading-[0.9] text-white">Institutional <br /> Standards</h2>
            <p className="font-inter text-zinc-500 text-sm md:text-lg max-w-xl uppercase tracking-widest font-medium text-right italic">Absolute structural integrity for the generation of sovereign wealth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureCard icon={<Boxes size={32} />} title="Kinexys Nodes" desc="J.P. Morgan's private blockchain backbone for atomic settlement." label="SETTLEMENT LAYER" />
            <FeatureCard icon={<BarChart3 size={32} />} title="AI Modelling" desc="Dynamic yield forecasting powered by proprietary LLM diagnostics." label="DIAGNOSTIC ENGINE" />
            <FeatureCard icon={<Database size={32} />} title="Onyx Vaults" desc="Cold-storage asset containment with multi-sig architectural control." label="CUSTODY PROTOCOL" />
            <FeatureCard icon={<Layout size={32} />} title="Elite Access" desc="Whitelisted entry for HNWIs and institutional real estate desks." label="GOVERNANCE" />
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-20">
            <div className="lg:col-span-2 space-y-10">
              <div className="text-4xl font-plus font-black tracking-[-0.08em] text-white uppercase">Lumina</div>
              <p className="text-[10px] font-inter font-bold uppercase tracking-[0.4em] leading-loose text-zinc-600 max-w-sm">Regulated real estate tokenization for the sovereign era. Built by Jigsaw Quantum Solutions in collaboration with institutional finance.</p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-12">
              <FooterLinkGroup title="Intelligence" links={['Asset Shards', 'Market Data', 'Node Latency']} />
              <FooterLinkGroup title="Security" links={['Audit Reports', 'Onyx Multi-Sig', 'Encryption']} />
              <div className="space-y-8">
                <p className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Protocol Status</p>
                <div className="glass-panel p-6 rounded-2xl space-y-4">
                  <StatusLine label="Uptime" value="99.999%" isHighlighted={true} />
                  <StatusLine label="Node Latency" value="12ms" />
                  <StatusLine label="Validator" value="LMN-7719" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-y border-white/5 py-12 flex flex-wrap justify-center lg:justify-between items-center gap-10 opacity-30 hover:opacity-100 transition-opacity duration-1000 grayscale hover:grayscale-0">
            <ComplianceBadge label="ISO 27001" sub="Security" />
            <ComplianceBadge label="ISO 9001" sub="Quality" />
            <ComplianceBadge label="EU AI ACT" sub="Compliance" />
            <ComplianceBadge label="SOC 2 TYPE II" sub="Trust" />
            <ComplianceBadge label="MiCA COMPLIANT" sub="Regulatory" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-full">
              <Terminal size={14} className="text-[#FF5A00]" />
              <p className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">System: 0x47A...f8E12 (Protocol Verified)</p>
            </div>
            <p className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.5em]">© 2026 LUMINA PROTOCOL | JIGSAW ARCHITECTURAL FINANCE</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

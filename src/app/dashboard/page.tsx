'use client'
import Simulator from '@/components/Simulator'
import Calculator from '@/components/Calculator'
import Chat from '@/components/Chat'
import PWAInstallPrompt from '@/components/PWAInstallPrompt'
import { ShieldCheck, Activity, Globe, Wallet } from 'lucide-react'

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-[#F3F4F6] p-6 lg:p-12 selection:bg-[#FF5A00]/30">
      <PWAInstallPrompt />
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase">System <span className="text-[#FF5A00]">Core</span></h1>
            <div className="flex items-center gap-3 text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-bold">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A00]/70 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A00]"></span>
              </div>
              Live: Southampton Waterfront Node
            </div>
          </div>
          <div className="flex gap-4">
            <HeaderMetric icon={<Wallet size={14}/>} label="Portfolio" value="£1,240,500" />
            <HeaderMetric icon={<Globe size={14}/>} label="Network" value="Kinexys" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass rounded-[3rem] overflow-hidden relative group border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                <div className="md:col-span-3 p-12 space-y-8 relative z-10">
                  <div className="inline-flex bg-[#FF5A00] text-black text-[9px] uppercase font-black tracking-[0.2em] px-4 py-1.5 rounded-full">
                    Priority Access
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-5xl font-black text-white tracking-tighter leading-none">SOUTHAMPTON<br/>WATERFRONT</h2>
                    <p className="text-zinc-400 leading-relaxed text-lg max-w-md">
                      Institutional real estate tokenized on J.P. Morgan Kinexys. High-yield liquidity meets physical stability.
                    </p>
                  </div>
                  <div className="flex gap-10 pt-6">
                    <Stat label="Entry" value="£50,000" />
                    <Stat label="Target APY" value="8.2%" highlight />
                    <Stat label="Liquidity" value="T+0" />
                  </div>
                </div>
                <div className="md:col-span-2 relative min-h-[300px] bg-gradient-to-br from-zinc-800 to-black">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-50" />
                   <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent" />
                   <div className="absolute bottom-8 right-8 glass p-6 rounded-3xl border-[#FF5A00]/20">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-[#FF5A00] rounded-full animate-pulse" />
                        <p className="text-white font-mono text-xs font-bold">Yield Active</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              <Simulator />
              <Calculator />
            </div>
          </div>

          <div className="space-y-8">
            <Chat />
            <div className="glass p-10 rounded-[3rem] space-y-8 border border-white/5 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#FF5A00]/10 blur-[80px] rounded-full" />
              <h3 className="font-black flex items-center gap-3 text-white text-2xl uppercase tracking-tighter">
                <ShieldCheck className="text-[#FF5A00]" size={28} /> 
                Security
              </h3>
              <div className="space-y-4">
                <p className="text-zinc-500 leading-relaxed text-sm">
                  Assets are cryptographically secured via Onyx Multi-sig custody. Institutional-grade settlement ensured by JPM nodes.
                </p>
                <div className="h-[1px] w-full bg-zinc-900" />
                <button className="w-full py-4 rounded-2xl border border-zinc-800 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-white hover:text-black transition-all duration-500">
                  View Audit Trail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Stat({ label, value, highlight }: any) {
  return (
    <div className="space-y-1">
      <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">{label}</p>
      <p className={'text-2xl font-black tracking-tighter ' + (highlight ? 'text-[#FF5A00]' : 'text-white')}>{value}</p>
    </div>
  )
}

function HeaderMetric({ icon, label, value }: any) {
  return (
    <div className="glass px-6 py-3 rounded-2xl border-white/5 flex items-center gap-4 group hover:border-[#FF5A00]/30 transition-colors">
      <div className="text-[#FF5A00]">{icon}</div>
      <div>
        <span className="text-[8px] text-zinc-500 uppercase tracking-[0.2em] block font-black">{label}</span>
        <span className="text-sm font-black text-white tracking-tight">{value}</span>
      </div>
    </div>
  )
}

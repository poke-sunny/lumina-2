'use client'
import Simulator from '@/components/Simulator'
import Calculator from '@/components/Calculator'
import Chat from '@/components/Chat'
import { ShieldCheck, Activity } from 'lucide-react'

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-foreground p-6 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="flex justify-between items-end">
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tighter text-white">SYSTEM <span className="text-accent">CORE</span></h1>
            <div className="flex items-center gap-2 text-zinc-500 text-xs tracking-widest uppercase">
              <Activity size={14} className="text-green-500 animate-pulse" />
              Live feed: Southampton Waterfront Node
            </div>
          </div>
          <div className="hidden md:block glass px-6 py-3 rounded-2xl border-accent/20">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">Portfolio Value</span>
            <span className="text-xl font-bold text-white">£1,240,500.00</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass rounded-[2.5rem] p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <span className="bg-accent text-black text-[10px] uppercase font-black tracking-widest px-4 py-1.5 rounded-full">
                  Verified Asset
                </span>
              </div>
              <div className="space-y-6 max-w-xl">
                <h2 className="text-4xl font-bold text-white tracking-tight">Southampton Waterfront</h2>
                <p className="text-zinc-400 leading-relaxed text-lg">
                  Institutional-grade tokenized development on J.P. Morgan Kinexys. 
                  Real-time yield distribution with T+0 settlement cycles.
                </p>
                <div className="flex gap-12 pt-4">
                  <Stat label="Floor" value="£450k" />
                  <Stat label="Target APY" value="8.2%" highlight />
                  <Stat label="Cap Class" value="Institutional" />
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
            <div className="glass p-10 rounded-[2.5rem] space-y-6 border-accent/10">
              <h3 className="font-bold flex items-center gap-3 text-white text-xl">
                <ShieldCheck className="text-accent" size={24} /> 
                Security
              </h3>
              <p className="text-zinc-500 leading-relaxed">
                Assets are cryptographically secured on the Onyx architecture. 
                Multi-sig custody via institutional-grade providers.
              </p>
              <button className="w-full py-4 rounded-2xl border border-zinc-800 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all">
                Audit Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Stat({ label, value, highlight }: { label: string, value: string, highlight?: boolean }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">{label}</p>
      <p className={`text-2xl font-bold ${highlight ? 'text-accent' : 'text-white'}`}>{value}</p>
    </div>
  )
}

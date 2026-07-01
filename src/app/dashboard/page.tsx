'use client'
import Simulator from '@/components/Simulator'
import Chat from '@/components/Chat'
import { ShieldCheck } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-white">System Overview</h1>
        <p className="text-zinc-500">Live feed from Southampton Waterfront Node.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass rounded-[2rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <span className="bg-accent/20 text-accent text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-accent/30">Tokenized</span>
            </div>
            <div className="space-y-6 max-w-lg">
              <h2 className="text-3xl font-bold text-white">Southampton Waterfront Development</h2>
              <p className="text-zinc-400 leading-relaxed">
                A premier £100M residential development tokenized on the Kinexys blockchain. Offering 8.2% projected yields with instant liquidity.
              </p>
              <div className="flex gap-8">
                <div><p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Floor Price</p><p className="text-xl font-bold text-white">£450k</p></div>
                <div><p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">APY</p><p className="text-xl font-bold text-accent">8.2%</p></div>
                <div><p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Liquidity</p><p className="text-xl font-bold text-white">Instant</p></div>
              </div>
            </div>
          </div>
          
          <Simulator />
        </div>

        <div className="space-y-8">
          <Chat />
          <div className="glass p-8 rounded-3xl space-y-6">
            <h3 className="font-bold flex items-center gap-2 text-white"><ShieldCheck className="text-accent" size={20} /> Security Protocol</h3>
            <p className="text-sm text-zinc-500">Assets are cryptographically secured on J.P. Morgan's Onyx architecture with T+0 settlement cycles.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
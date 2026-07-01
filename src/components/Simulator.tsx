'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, BarChart, Clock } from 'lucide-react'

export default function Simulator() {
  const [years, setYears] = useState(10)
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const newData = Array.from({ length: years + 1 }, (_, i) => ({
      year: 2026 + i,
      value: Math.round(100 * Math.pow(1.082, i)),
      yield: Math.round(8.2 * Math.pow(1.04, i) * 10) / 10
    }))
    setData(newData)
  }, [years])

  return (
    <div className="glass p-10 rounded-[3rem] space-y-10 border border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <TrendingUp size={120} className="text-accent" />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Yield Simulator</h3>
        </div>
        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Compounding Performance | 8.2% Base APY</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 space-y-8">
           <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">Horizon</label>
                <span className="text-white font-mono font-bold">{years}Y</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))} 
                className="w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-accent" 
              />
           </div>

           <div className="glass p-6 rounded-2xl border-white/5 space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <BarChart size={14} />
                <span className="text-[9px] font-black uppercase tracking-widest">Projection</span>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] text-zinc-500 uppercase tracking-widest font-black">Est. Growth</p>
                <p className="text-2xl font-black text-white tracking-tighter">+{Math.round((Math.pow(1.082, years) - 1) * 100)}%</p>
              </div>
           </div>
        </div>

        <div className="md:col-span-3 flex items-end gap-1 h-[250px] pt-10">
          {data.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
              <div className="relative w-full flex items-end justify-center h-full">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.value / data[data.length - 1].value) * 100}%` }}
                  className="w-full bg-gradient-to-t from-accent/20 to-accent rounded-t-lg relative group-hover:shadow-[0_0_20px_rgba(255,90,0,0.4)] transition-all duration-500"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-white font-mono">
                    {d.value}%
                  </div>
                </motion.div>
              </div>
              <span className="text-[8px] text-zinc-600 font-black uppercase tracking-tighter group-hover:text-zinc-400">{d.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

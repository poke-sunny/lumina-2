'use client'
import { useState, ChangeEvent } from 'react'

export default function Simulator() {
  const [investment, setInvestment] = useState(50000)
  
  const stake = (investment / 100000000 * 100).toFixed(6)
  const monthlyYield = (investment * 0.082 / 12).toFixed(2)
  const yearlyYield = (investment * 0.082).toFixed(2)

  return (
    <div className="glass p-10 rounded-[2rem] space-y-8">
      <div className="flex justify-between items-end">
        <h3 className="text-2xl font-bold text-white">Ownership Simulator</h3>
        <span className="text-accent font-mono text-sm tracking-widest uppercase">Live Forecast</span>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-zinc-500">
          <span>Investment Amount</span>
          <span className="text-white font-bold">£{investment.toLocaleString()}</span>
        </div>
        <input 
          type="range" 
          min="1000" 
          max="1000000" 
          step="1000"
          value={investment}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInvestment(parseInt(e.target.value))}
          className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-accent"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
        <Metric label="Protocol Stake" value={\`\${stake}%\`} />
        <Metric label="Monthly Est." value={\`£\${monthlyYield}\`} />
        <Metric label="Yearly Est." value={\`£\${yearlyYield}\`} />
      </div>
    </div>
  )
}

function Metric({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{label}</p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  )
}
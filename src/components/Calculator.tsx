'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Calculator() {
  const [price, setPrice] = useState(500000)
  const [deposit, setDeposit] = useState(50000)
  const [interestRate, setInterestRate] = useState(4.5)

  const yieldAPY = 8.2
  const loanAmount = price - deposit
  const appreciation = price * Math.pow(1.04, 10)
  const equity = appreciation - loanAmount

  const monthlyRate = interestRate / 100 / 12
  const n = 10 * 12
  const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n))

  const yearlyPassiveIncome = deposit * (yieldAPY / 100)

  return (
    <div className="glass p-10 rounded-[2.5rem] space-y-10 relative overflow-hidden border border-white/5">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Financial Engine</h3>
          <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">Southampton Waterfront | 8.2% APY</p>
        </div>
        <span className="text-accent font-mono text-[10px] tracking-widest uppercase px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">Kinexys Verified</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Slider label="Entry Point" value={price} min={100000} max={2000000} step={10000} format="currency" onChange={setPrice} />
          <Slider label="Liquidity Stake" value={deposit} min={50000} max={price * 0.9} step={5000} format="currency" onChange={setDeposit} />
          <Slider label="Leverage Rate" value={interestRate} min={0.5} max={10} step={0.1} format="percent" onChange={setInterestRate} />
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-3xl border-accent/10 bg-accent/[0.02]">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mb-2">Estimated Passive Income (Yearly)</p>
            <p className="text-4xl font-black text-accent tracking-tighter">£{Math.round(yearlyPassiveIncome).toLocaleString()}</p>
            <div className="mt-4 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
              <motion.div className="h-full bg-accent" initial={{ width: 0 }} animate={{ width: '82%' }} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <MiniMetric label="Equity Y10" value={'£' + Math.round(equity/1000).toLocaleString() + 'k'} />
            <MiniMetric label="Monthly P&I" value={'£' + Math.round(monthlyPayment).toLocaleString()} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Slider({ label, value, min, max, step, format, onChange }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-sm">
        <label className="text-zinc-500 uppercase tracking-widest text-[10px] font-black">{label}</label>
        <span className="text-white font-mono font-bold">{format === 'currency' ? '£' + value.toLocaleString() : value + '%'}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-accent" />
    </div>
  )
}

function MiniMetric({ label, value }: { label: string, value: string }) {
  return (
    <div className="glass p-4 rounded-2xl border-white/5">
      <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">{label}</p>
      <p className="text-lg font-bold text-white">{value}</p>
    </div>
  )
}

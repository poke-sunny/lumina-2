'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Calculator() {
  const [price, setPrice] = useState(500000)
  const [deposit, setDeposit] = useState(50000)
  const [interestRate, setInterestRate] = useState(4.5)

  // 10-Year Growth Logic
  const loanAmount = price - deposit
  const appreciation = price * Math.pow(1.04, 10) // 4% annual appreciation
  const equity = appreciation - loanAmount

  // 10-Year Cost Logic
  const monthlyRate = interestRate / 100 / 12
  const n = 10 * 12
  const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n))
  const totalPaid = monthlyPayment * n
  const totalInterest = totalPaid - loanAmount

  return (
    <div className="glass p-10 rounded-[2rem] space-y-10 relative overflow-hidden">
      <div className="flex justify-between items-end">
        <h3 className="text-2xl font-bold text-white">10-Year Growth Projection</h3>
        <span className="text-accent font-mono text-[10px] tracking-widest uppercase px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">Pro Logic</span>
      </div>

      <div className="space-y-8">
        <Slider 
          label="Property Value" 
          value={price} 
          min={100000} 
          max={2000000} 
          step={10000} 
          format="currency" 
          onChange={setPrice} 
        />
        <Slider 
          label="Initial Deposit" 
          value={deposit} 
          min={10000} 
          max={price * 0.8} 
          step={5000} 
          format="currency" 
          onChange={setDeposit} 
        />
        <Slider 
          label="Interest Rate" 
          value={interestRate} 
          min={0.5} 
          max={10} 
          step={0.1} 
          format="percent" 
          onChange={setInterestRate} 
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-zinc-900">
        <Metric label="Y10 Valuation" value={`£${Math.round(appreciation).toLocaleString()}`} highlight />
        <Metric label="Net Equity" value={`£${Math.round(equity).toLocaleString()}`} />
        <Metric label="Monthly Mortgage" value={`£${Math.round(monthlyPayment).toLocaleString()}`} />
        <Metric label="Total Interest" value={`£${Math.round(totalInterest).toLocaleString()}`} />
      </div>
    </div>
  )
}

function Slider({ label, value, min, max, step, format, onChange }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center text-sm">
        <label className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">{label}</label>
        <span className="text-white font-mono font-bold">
          {format === 'currency' ? `£${value.toLocaleString()}` : `${value}%`}
        </span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-accent"
      />
    </div>
  )
}

function Metric({ label, value, highlight }: { label: string, value: string, highlight?: boolean }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{label}</p>
      <p className={`text-xl font-bold ${highlight ? 'text-accent' : 'text-white'}`}>{value}</p>
    </div>
  )
}

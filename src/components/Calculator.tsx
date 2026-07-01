'use client'
import { useState } from 'react'

export default function Calculator() {
  const [price, setPrice] = useState(500000)
  const [deposit, setDeposit] = useState(50000)
  const [years, setYears] = useState(10)

  const loanAmount = price - deposit
  const appreciation = price * Math.pow(1.04, years)
  const equity = appreciation - loanAmount

  return (
    <div className="glass p-10 rounded-[2rem] space-y-8">
      <h3 className="text-2xl font-bold">10-Year Growth Projection</h3>
      <div className="grid gap-6">
        <div className="space-y-2">
          <label className="text-xs text-zinc-500 uppercase tracking-widest">Property Value</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs text-zinc-500 uppercase tracking-widest">Initial Deposit</label>
          <input 
            type="number" 
            value={deposit} 
            onChange={(e) => setDeposit(Number(e.target.value))}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white"
          />
        </div>
      </div>
      <div className="pt-6 border-t border-zinc-900 grid grid-cols-2 gap-8">
        <div>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Est. Valuation (Y10)</p>
          <p className="text-2xl font-bold text-accent">£{Math.round(appreciation).toLocaleString()}</p>
        </div>
        <div>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Net Equity</p>
          <p className="text-2xl font-bold text-white">£{Math.round(equity).toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Wallet, 
  MapPin, 
  Calendar, 
  User, 
  TrendingUp, 
  MessageSquare, 
  Send,
  PieChart,
  LayoutDashboard,
  Sparkles,
  Zap
} from 'lucide-react'
import { useChat } from '@ai-sdk/react'

// --- Components ---

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
      <motion.div 
        className="h-full bg-[#00ff9d]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

function Slider({ label, min, max, step, value, onChange, prefix = "", suffix = "" }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-zinc-400 text-sm font-medium">{label}</span>
        <span className="text-[#00ff9d] font-bold text-lg">{prefix}{value.toLocaleString()}{suffix}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step} 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#00ff9d]"
      />
    </div>
  )
}

// --- Main Page ---

export default function ConsumerLanding() {
  // State for Onboarding
  const [step, setStep] = useState(1)
  const [onboardingData, setOnboardingData] = useState({
    goal: '',
    income: 5000,
    budget: 500000,
    location: '',
    timeframe: ''
  })

  // State for Simulation
  const [investment, setInvestment] = useState(50000)
  
  // State for Affordability Calculator
  const [calcMonthlyIncome, setCalcMonthlyIncome] = useState(4000)
  const [calcSavings, setCalcSavings] = useState(25000)
  const [calcTargetPrice, setCalcTargetPrice] = useState(350000)

  // AI Chat with SDK v4 compatibility (using local state for input)
  const [localInput, setLocalInput] = useState('');
  const { messages, append } = useChat({
    initialMessages: [
      { id: '1', role: 'assistant', content: 'Hi! I am Lumina, your AI home-buying companion. How can I help you today?' }
    ]
  })

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!localInput.trim()) return;
    append({ role: 'user', content: localInput });
    setLocalInput('');
  };

  const chatEndRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Calculations
  const yield10Year = investment * Math.pow(1 + 0.082, 10) - investment
  const wealthProjection = (calcSavings + (calcMonthlyIncome * 0.3 * 12 * 10)) * 1.05 // 5% growth assumption

  return (
    <main className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-[#00ff9d]/30 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&family=Inter:wght@300;400;500;700&display=swap');
        :root { --font-plus: 'Plus Jakarta Sans', sans-serif; --font-inter: 'Inter', sans-serif; }
        .font-plus { font-family: var(--font-plus); }
        .font-inter { font-family: var(--font-inter); }
        .glass-card {
          background: rgba(20, 20, 22, 0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
        }
        .green-glow {
          box-shadow: 0 0 40px -10px rgba(0, 255, 157, 0.15);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#00ff9d] rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
            <Home size={18} className="text-black" />
          </div>
          <span className="text-xl font-plus font-bold tracking-tight">Lumina</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#onboarding" className="hover:text-[#00ff9d] transition-colors">Start Here</a>
          <a href="#simulator" className="hover:text-[#00ff9d] transition-colors">Yield Lab</a>
          <a href="#dashboard" className="hover:text-[#00ff9d] transition-colors">Dashboard</a>
        </div>
        <button className="px-5 py-2 bg-[#00ff9d] text-black text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles size={14} className="text-[#00ff9d]" />
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your AI Home Buying Companion</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-plus font-extrabold tracking-tight mb-6 leading-tight"
        >
          Own your future, <br /><span className="text-[#00ff9d]">one shard at a time.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-inter"
        >
          Lumina helps Gen Z and first-time buyers navigate the real estate market with AI intelligence and premium fractional investment opportunities.
        </motion.p>
      </section>

      {/* Interactive Onboarding */}
      <section id="onboarding" className="py-20 px-6 max-w-3xl mx-auto">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden border-[#00ff9d]/10 green-glow">
          <div className="absolute top-0 left-0 w-full">
            <ProgressBar progress={(step / 5) * 100} />
          </div>
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-plus font-bold">What is your goal?</h2>
                  <p className="text-zinc-400">Choose the path that fits your vision.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {['First-time Purchase', 'Investment Strategy', 'Fractional Ownership'].map((goal) => (
                    <button 
                      key={goal}
                      onClick={() => { setOnboardingData((prev) => ({...prev, goal})); setStep(2); }}
                      className={`p-6 rounded-2xl border text-left transition-all ${onboardingData.goal === goal ? 'border-[#00ff9d] bg-[#00ff9d]/5' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{goal}</span>
                        <ArrowRight size={18} className={onboardingData.goal === goal ? 'text-[#00ff9d]' : 'text-zinc-600'} />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-plus font-bold">Money matters.</h2>
                  <p className="text-zinc-400">Let us set your budget parameters.</p>
                </div>
                <Slider label="Target Budget" min={100000} max={2000000} step={10000} value={onboardingData.budget} onChange={(v: number) => setOnboardingData((prev) => ({...prev, budget: v}))} prefix="£" />
                <button onClick={() => setStep(3)} className="w-full py-4 bg-[#00ff9d] text-black font-bold rounded-2xl hover:scale-[1.02] transition-transform">Next Step</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-plus font-bold">Location vibe?</h2>
                  <p className="text-zinc-400">Where are we looking to plant roots?</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['London', 'Manchester', 'Bristol', 'Southampton'].map((loc) => (
                    <button 
                      key={loc}
                      onClick={() => { setOnboardingData((prev) => ({...prev, location: loc})); setStep(4); }}
                      className={`p-6 rounded-2xl border text-center transition-all ${onboardingData.location === loc ? 'border-[#00ff9d] bg-[#00ff9d]/5' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                    >
                      <span className="font-bold">{loc}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-plus font-bold">The timeline.</h2>
                  <p className="text-zinc-400">When do you want to unlock your door?</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {['ASAP', 'Within 6 Months', 'Next Year', 'Just Exploring'].map((time) => (
                    <button 
                      key={time}
                      onClick={() => { setOnboardingData((prev) => ({...prev, timeframe: time})); setStep(5); }}
                      className={`p-4 rounded-2xl border text-left transition-all ${onboardingData.timeframe === time ? 'border-[#00ff9d] bg-[#00ff9d]/5' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                    >
                      <span className="font-bold">{time}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 text-center">
                <div className="w-20 h-20 bg-[#00ff9d]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-[#00ff9d]" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-plus font-bold">Profile Ready!</h2>
                  <p className="text-zinc-400">Here is your Lumina profile summary.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Goal</p>
                    <p className="font-bold">{onboardingData.goal}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Budget</p>
                    <p className="font-bold">£{onboardingData.budget.toLocaleString()}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Location</p>
                    <p className="font-bold">{onboardingData.location}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Timeline</p>
                    <p className="font-bold">{onboardingData.timeframe}</p>
                  </div>
                </div>
                <button onClick={() => setStep(1)} className="w-full py-4 bg-white/5 border border-white/10 text-zinc-400 font-bold rounded-2xl hover:bg-white/10 transition-all">Restart Profile</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Showcase & Yield Simulator */}
      <section id="simulator" className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff9d]/10 border border-[#00ff9d]/20">
            <TrendingUp size={14} className="text-[#00ff9d]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00ff9d]">Hot Opportunity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-plus font-bold">Southampton <br />Waterfront Shards</h2>
          <p className="text-zinc-400 text-lg leading-relaxed font-inter">
            Join a £100M landmark project with as little as £50k. Earn passive yield while you save for your own full front door.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Target yield</p>
              <p className="text-3xl font-plus font-extrabold text-[#00ff9d]">8.2% <span className="text-sm font-normal text-zinc-500">APY</span></p>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Minimum entry</p>
              <p className="text-3xl font-plus font-extrabold">£50,000</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 space-y-10 border-[#00ff9d]/20 green-glow">
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-plus">Yield Simulator</h3>
            <Slider label="Investment Amount" min={50000} max={1000000} step={5000} value={investment} onChange={setInvestment} prefix="£" />
          </div>

          <div className="p-8 rounded-3xl bg-[#00ff9d]/5 border border-[#00ff9d]/10 flex flex-col items-center gap-4">
            <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest">Estimated 10-Year Profit</p>
            <motion.p 
              key={yield10Year}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-plus font-black text-[#00ff9d]"
            >
              £{Math.round(yield10Year).toLocaleString()}
            </motion.p>
            <p className="text-zinc-500 text-xs italic">Based on compounded 8.2% annual growth</p>
          </div>
        </div>
      </section>

      {/* Affordability Calculator */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-zinc-900/30 rounded-[3rem] border border-white/5 my-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff9d]/5 blur-[120px]" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center p-8 md:p-16">
          <div className="lg:col-span-5 space-y-10">
            <h2 className="text-4xl font-plus font-bold">Is your goal <br /> within reach?</h2>
            <div className="space-y-8">
              <Slider label="Monthly Income" min={1000} max={20000} step={100} value={calcMonthlyIncome} onChange={setCalcMonthlyIncome} prefix="£" />
              <Slider label="Current Savings" min={0} max={500000} step={1000} value={calcSavings} onChange={setCalcSavings} prefix="£" />
              <Slider label="Target House Price" min={100000} max={2000000} step={10000} value={calcTargetPrice} onChange={setCalcTargetPrice} prefix="£" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="glass-card p-10 bg-black/40 space-y-8 border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-2xl"><PieChart size={24} className="text-[#00ff9d]" /></div>
                <div>
                  <h3 className="font-bold">10-Year Wealth Projection</h3>
                  <p className="text-sm text-zinc-500">Savings + 30% income contribution at 5% growth</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <p className="text-xs text-zinc-500 uppercase font-bold">Projected Capital</p>
                  <p className="text-4xl font-plus font-black text-white">£{Math.round(wealthProjection).toLocaleString()}</p>
                </div>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <p className="text-xs text-zinc-500 uppercase font-bold">House Price Fit</p>
                  <p className={`text-4xl font-plus font-black ${wealthProjection >= calcTargetPrice ? 'text-[#00ff9d]' : 'text-orange-500'}`}>
                    {Math.round((wealthProjection / calcTargetPrice) * 100)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Component */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-8 text-center mb-12">
          <h2 className="text-4xl font-plus font-bold">Chat with Lumina</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Ask anything about mortgages, property yields, or how to get started.</p>
        </div>
        <div className="glass-card h-[600px] flex flex-col border-white/10 overflow-hidden relative">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
                  <Sparkles size={20} className="text-[#00ff9d]" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#00ff9d] rounded-full border-2 border-black animate-pulse" />
              </div>
              <div>
                <p className="font-bold text-sm">Lumina AI</p>
                <p className="text-[10px] text-[#00ff9d] uppercase font-black tracking-widest">Active Intelligence</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#00ff9d] text-black rounded-tr-none' 
                    : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-white/5'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleChatSubmit} className="p-6 bg-black/40 border-t border-white/5">
            <div className="relative">
              <input 
                value={localInput}
                onChange={(e) => setLocalInput(e.target.value)}
                placeholder="Ask me anything..."
                className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 px-6 pr-14 focus:outline-none focus:border-[#00ff9d]/50 transition-all text-sm font-medium"
              />
              <button type="submit" className="absolute right-3 top-2 w-10 h-10 bg-[#00ff9d] text-black rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Personal Dashboard Preview */}
      <section id="dashboard" className="py-20 px-6 max-w-7xl mx-auto mb-40">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-plus font-bold">My Lumina</h2>
            <p className="text-zinc-500 font-medium">Your real estate mission control.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold hover:bg-white/10 transition-all">
            <LayoutDashboard size={18} />
            Full Dashboard
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 space-y-6 bg-[#00ff9d]/[0.02]">
            <div className="flex justify-between items-start">
              <p className="text-xs text-zinc-500 uppercase font-black tracking-widest">Active Simulation</p>
              <TrendingUp size={16} className="text-[#00ff9d]" />
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-plus font-bold">Southampton Shards</p>
              <p className="text-zinc-400 text-sm">£{investment.toLocaleString()} Invested</p>
            </div>
            <div className="h-1 w-full bg-zinc-800 rounded-full">
              <div className="h-full bg-[#00ff9d] w-[65%]" />
            </div>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="flex justify-between items-start">
              <p className="text-xs text-zinc-500 uppercase font-black tracking-widest">Next Step</p>
              <Zap size={16} className="text-yellow-500" />
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-plus font-bold">Identity Verification</p>
              <p className="text-zinc-400 text-sm">Required for fractional access</p>
            </div>
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#00ff9d] hover:text-black transition-all">Verify Now</button>
          </div>

          <div className="glass-card p-8 space-y-6">
            <div className="flex justify-between items-start">
              <p className="text-xs text-zinc-500 uppercase font-black tracking-widest">Lumina Level</p>
              <User size={16} className="text-blue-500" />
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-plus font-bold">Tier 1: Scout</p>
              <p className="text-zinc-400 text-sm">Exploring opportunities</p>
            </div>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={`h-1.5 flex-1 rounded-full ${i === 1 ? 'bg-[#00ff9d]' : 'bg-zinc-800'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-zinc-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#00ff9d] rounded flex items-center justify-center">
              <Home size={14} className="text-black" />
            </div>
            <span className="text-white font-plus font-bold">Lumina</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>
          <p>© 2026 Lumina Home Technology. Built for the next generation.</p>
        </div>
      </footer>
    </main>
  )
}

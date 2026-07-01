'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react'

const steps = [
  { id: 1, title: 'Vision', q: 'What is your investment philosophy?', options: ['Growth', 'Income', 'Speculative', 'Stable'] },
  { id: 2, title: 'Capital', q: 'Initial investment range?', options: ['£1k - £10k', '£10k - £50k', '£50k - £250k', 'Institutional'] },
  { id: 3, title: 'Horizon', q: 'Planned exit strategy?', options: ['3 Years', '5 Years', '10 Years', 'Legacy Holder'] },
  { id: 4, title: 'Asset Type', q: 'Preferred residential style?', options: ['Waterfront', 'Urban High-rise', 'Suburban', 'Co-living'] },
  { id: 5, title: 'Risk', q: 'Comfort with volatility?', options: ['Conservative', 'Moderate', 'Aggressive', 'Max Alpha'] },
]

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState<Record<number, string>>({})
  const [isFinishing, setIsFinishing] = useState(false)
  const router = useRouter()

  const handleOptionSelect = (opt: string) => {
    setSelections(prev => ({ ...prev, [currentStep]: opt }))
    
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(s => s + 1), 300)
    } else {
      setIsFinishing(true)
      setTimeout(() => router.push('/dashboard'), 1500)
    }
  }

  if (isFinishing) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <div className="flex justify-center">
            <CheckCircle2 size={64} className="text-accent animate-pulse" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-white uppercase">Syncing Profile</h1>
          <p className="text-zinc-500 tracking-widest text-xs uppercase">Initializing J.P. Morgan Kinexys Node...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full glass p-12 rounded-[3rem] space-y-10 relative overflow-hidden border-accent/5">
        {/* Step Indicator */}
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase font-black">Step {currentStep + 1} / {steps.length}</p>
            <h3 className="text-white font-bold text-lg tracking-tight uppercase italic">{steps[currentStep].title}</h3>
          </div>
          <div className="h-12 w-12 rounded-full border border-zinc-800 flex items-center justify-center">
            <span className="text-accent font-mono text-xs">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-zinc-900 w-full rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent shadow-[0_0_10px_rgba(255,90,0,0.5)]" 
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 50 }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-black tracking-tighter text-white leading-tight">
              {steps[currentStep].q}
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {steps[currentStep].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOptionSelect(opt)}
                  className={`
                    group flex justify-between items-center p-8 rounded-2xl transition-all duration-500
                    ${selections[currentStep] === opt 
                      ? 'bg-accent/10 border-accent/50 border-2' 
                      : 'glass border border-white/5 hover:border-accent/30 hover:bg-white/[0.02]'}
                  `}
                >
                  <span className={`text-lg font-medium transition-colors ${selections[currentStep] === opt ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                    {opt}
                  </span>
                  <div className={`
                    w-6 h-6 rounded-full border flex items-center justify-center transition-all
                    ${selections[currentStep] === opt ? 'bg-accent border-accent' : 'border-zinc-800 group-hover:border-accent/50'}
                  `}>
                    <ChevronRight size={14} className={selections[currentStep] === opt ? 'text-black' : 'text-zinc-600'} />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="pt-4 flex items-center justify-between">
          {currentStep > 0 ? (
            <button 
              onClick={() => setCurrentStep(s => s - 1)}
              className="text-zinc-600 hover:text-white transition-all flex items-center gap-2 text-xs uppercase tracking-widest font-black"
            >
              <ArrowLeft size={14} /> Previous
            </button>
          ) : <div />}
          
          <p className="text-[10px] text-zinc-700 uppercase tracking-widest font-mono">
            Secure Node: LMN-00{currentStep + 1}
          </p>
        </div>
      </div>
    </main>
  )
}

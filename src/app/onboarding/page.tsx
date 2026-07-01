'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronRight, ArrowLeft } from 'lucide-react'

const steps = [
  { id: 1, title: 'Vision', q: 'What is your investment philosophy?', options: ['Growth', 'Income', 'Speculative', 'Stable'] },
  { id: 2, title: 'Capital', q: 'Initial investment range?', options: ['£1k - £10k', '£10k - £50k', '£50k - £250k', 'Institutional'] },
  { id: 3, title: 'Horizon', q: 'Planned exit strategy?', options: ['3 Years', '5 Years', '10 Years', 'Legacy Holder'] },
  { id: 4, title: 'Asset Type', q: 'Preferred residential style?', options: ['Waterfront', 'Urban High-rise', 'Suburban', 'Co-living'] },
  { id: 5, title: 'Risk', q: 'Comfort with volatility?', options: ['Conservative', 'Moderate', 'Aggressive', 'Max Alpha'] },
]

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s: number) => s + 1)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full glass p-10 rounded-[2.5rem] space-y-8 relative overflow-hidden">
        <div className="flex justify-between items-center text-xs tracking-widest text-zinc-500 uppercase">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span className="text-white font-bold">{steps[currentStep].title}</span>
        </div>
        
        <div className="h-1 bg-zinc-900 w-full rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent" 
            initial={{ width: 0 }}
            animate={{ width: \`\${((currentStep + 1) / steps.length) * 100}%\` }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white">{steps[currentStep].q}</h2>
            <div className="grid gap-4">
              {steps[currentStep].options.map((opt) => (
                <button
                  key={opt}
                  onClick={handleNext}
                  className="glass text-left p-6 rounded-2xl hover:bg-accent/10 hover:border-accent/30 transition-all group flex justify-between items-center"
                >
                  <span className="text-zinc-300 group-hover:text-white">{opt}</span>
                  <ChevronRight size={18} className="text-zinc-600 group-hover:text-accent" />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        
        {currentStep > 0 && (
          <button 
            onClick={() => setCurrentStep((s: number) => s - 1)}
            className="text-zinc-600 hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <ArrowLeft size={16} /> Back
          </button>
        )}
      </div>
    </div>
  )
}
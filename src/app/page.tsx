'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black">
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center max-w-7xl">
        <span className="text-2xl font-bold tracking-tighter text-white">LUMINA</span>
        <Link href="/onboarding" className="text-sm font-medium hover:text-accent transition-colors">Launch App</Link>
      </nav>
      
      <div className="max-w-4xl text-center space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500"
        >
          Ownership, <br /> Redefined.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Institutional-grade real estate meets blockchain liquidity. Obsidian dark. AI driven. Generation Alpha ready.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/onboarding" className="glass px-8 py-4 rounded-full inline-flex items-center gap-3 hover:bg-accent transition-all duration-500 group">
            Start Journey
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        <FeatureCard title="Tokenized Assets" desc="Fractional ownership on J.P. Morgan's Kinexys blockchain." />
        <FeatureCard title="AI Intelligence" desc="Next-gen GPT-4o analysis for every property." />
        <FeatureCard title="Zero Friction" desc="10-year financial projections in seconds." />
      </div>
    </main>
  )
}

function FeatureCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="glass p-8 rounded-3xl space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-zinc-500">{desc}</p>
    </div>
  )
}
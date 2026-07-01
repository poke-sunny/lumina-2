'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Smartphone } from 'lucide-react'

export default function PWAInstallPrompt() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    const dismissed = localStorage.getItem('pwa_dismissed')

    if (!isStandalone && !dismissed) {
      const timer = setTimeout(() => setShow(true), 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    setShow(false)
    localStorage.setItem('pwa_dismissed', 'true')
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:w-[400px] z-[100]"
        >
          <div className="glass p-6 rounded-[2rem] border border-accent/20 relative overflow-hidden shadow-[0_20px_50px_rgba(255,90,0,0.15)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
            
            <button onClick={dismiss} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
              <X size={16} />
            </button>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,90,0,0.3)]">
                <Smartphone size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-black uppercase tracking-tighter text-sm">Claim Your Node</h4>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest leading-relaxed">Add Lumina to home screen for T+0 access.</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-accent text-black text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:scale-[1.02] transition-transform active:scale-95">
                Install App
              </button>
              <div className="glass px-4 flex items-center justify-center rounded-xl border-white/5">
                <Download size={14} className="text-accent" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

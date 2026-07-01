'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Terminal as TerminalIcon, 
  Sparkles, 
  Lock, 
  Building2
} from 'lucide-react'

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: React.ReactNode;
}

export default function JigsawCLI() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { id: '0', type: 'system', content: 'JIGSAW_CORE_V4 INITIALIZED (ISO_27001_COMPLIANT)' },
    { id: '1', type: 'system', content: 'HANDSHAKE... [SUCCESS] NODE_MAYFAIR_03 READY.' },
    { id: '2', type: 'output', content: 'Type "@jigsaw help" for protocol directives.' }
  ])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setHistory(prev => [...prev, {
      id: Date.now().toString(),
      type: 'input',
      content: `procurement@jigsaw:~$ ${input}`
    }])
    setInput('')

    setTimeout(() => {
      setHistory(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: 'Processing protocol directive...'
      }])
    }, 400)
  }

  return (
    <main className="h-screen bg-white text-slate-900 font-mono selection:bg-[#003366]/10 overflow-hidden flex flex-col w-full">
      <nav className="p-4 md:px-10 border-b border-zinc-100 bg-white/80 backdrop-blur-xl flex justify-between items-center shrink-0">
        <Link href="/" className="flex items-center gap-4 group">
          <ArrowLeft size={16} className="text-zinc-400 group-hover:text-[#003366]" />
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-[#003366]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#003366]">JIGSAW_TERMINAL</span>
          </div>
        </Link>
        <Lock size={16} className="text-zinc-300" />
      </nav>

      <div className="flex-1 overflow-y-auto p-4 md:p-10 space-y-3 bg-[#f9fafb]" onClick={() => inputRef.current?.focus()}>
        <AnimatePresence initial={false}>
          {history.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-[12px] md:text-[13px] leading-relaxed break-words whitespace-pre-wrap font-medium ${
                line.type === 'input' ? 'text-slate-500' : 
                line.type === 'error' ? 'text-red-600' : 
                line.type === 'system' ? 'text-blue-600' : 'text-zinc-800'
              }`}
            >
              {line.content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-6 md:px-10 bg-white border-t border-zinc-100 shrink-0">
        <form onSubmit={handleCommand} className="flex items-center gap-3">
          <span className="text-[#003366] font-black text-[12px]">procurement@jigsaw:~$</span>
          <input
            ref={inputRef} autoFocus type="text" value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[#003366] caret-[#003366] text-[12px] font-bold"
            spellCheck={false} autoComplete="off"
          />
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded border border-zinc-100 shrink-0">
            <Sparkles size={12} className="text-[#003366]" />
            <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest">Core Active</span>
          </div>
        </form>
      </div>
    </main>
  )
}

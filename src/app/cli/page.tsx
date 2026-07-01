'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Terminal as TerminalIcon, 
  Command, 
  Sparkles, 
  Lock, 
  Shield, 
  Activity, 
  Zap,
  Globe,
  ChevronRight
} from 'lucide-react'

// --- Types ---
interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: React.ReactNode;
  timestamp: Date;
}

export default function CLIView() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { id: '0', type: 'system', content: 'LUMINA_CORE v4.0.0 (SECURE_ENVIRONMENT)', timestamp: new Date() },
    { id: '1', type: 'system', content: 'AUTHENTICATING_USER... [GRANTED]', timestamp: new Date() },
    { id: '2', type: 'output', content: 'Type "@lumina help" for protocol list.', timestamp: new Date() }
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const fullCommand = input.trim()
    const parts = fullCommand.split(' ')
    const trigger = parts[0].toLowerCase()
    const cmd = parts[1]?.toLowerCase()

    setHistory(prev => [...prev, {
      id: Date.now().toString(),
      type: 'input',
      content: `guest@lumina:~$ ${fullCommand}`,
      timestamp: new Date()
    }])
    setInput('')

    setTimeout(() => {
      let response: TerminalLine;
      const responseId = (Date.now() + 1).toString();

      if (trigger === '@lumina') {
        switch (cmd) {
          case 'status':
            response = {
              id: responseId, type: 'output',
              content: (
                <div className="space-y-3 py-2 border-l border-[#00ff9d]/30 pl-4">
                  <div className="flex items-center gap-2 text-[#00ff9d]">
                    <Shield size={14} />
                    <span className="text-[11px] font-black uppercase tracking-widest">SOVEREIGNTY_LEVEL: OPTIMAL</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 font-medium">Global Integrity: 98.2% | Threat Detection: 0</p>
                  <div className="flex gap-1">
                    {[1,2,3,4,5,6].map(i => <div key={i} className="h-1 w-4 bg-[#00ff9d]" />)}
                    {[1,2,3,4].map(i => <div key={i} className="h-1 w-4 bg-white/[0.05]" />)}
                  </div>
                </div>
              ),
              timestamp: new Date()
            }
            break
          case 'help':
            response = {
              id: responseId, type: 'output',
              content: (
                <div className="space-y-1 py-1 text-[11px] font-medium text-zinc-400">
                  <p className="text-[#00ff9d]">@lumina status   <span className="text-zinc-600">- Readiness audit</span></p>
                  <p className="text-[#00ff9d]">@lumina yield    <span className="text-zinc-600">- Analyze SWS-01 alpha</span></p>
                  <p className="text-[#00ff9d]">@lumina exit     <span className="text-zinc-600">- Exit loop simulation</span></p>
                  <p className="text-[#00ff9d]">clear            <span className="text-zinc-600">- Reset node</span></p>
                </div>
              ),
              timestamp: new Date()
            }
            break
          default:
            response = { id: responseId, type: 'error', content: `Protocol "${cmd}" undefined.`, timestamp: new Date() }
        }
      } else if (trigger === 'clear') {
        setHistory([{ id: Date.now().toString(), type: 'system', content: 'Session reset.', timestamp: new Date() }])
        return
      } else {
        response = { id: responseId, type: 'error', content: `Unknown command: ${trigger}`, timestamp: new Date() }
      }
      setHistory(prev => [...prev, response])
    }, 400)
  }

  return (
    <main className="h-screen bg-[#08090a] text-[#f7f8f8] font-mono selection:bg-[#00ff9d]/30 overflow-hidden flex flex-col w-full">
      {/* CLI Header */}
      <nav className="p-4 md:px-10 border-b border-white/[0.04] bg-[#08090a]/80 backdrop-blur-xl flex justify-between items-center shrink-0">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center group-hover:border-[#00ff9d]/50 transition-all">
            <ArrowLeft size={16} className="text-zinc-500 group-hover:text-white" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">LUMINA_CLI</span>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:block text-right">
            <p className="text-[8px] font-black uppercase tracking-widest text-zinc-600">Connection</p>
            <p className="text-[9px] font-bold text-[#00ff9d]">ENCRYPTED_V4</p>
          </div>
          <Lock size={16} className="text-zinc-700" />
        </div>
      </nav>

      {/* Terminal Area */}
      <div 
        className="flex-1 overflow-y-auto p-4 md:p-10 space-y-3 scrollbar-hide bg-[#08090a]" 
        onClick={() => inputRef.current?.focus()}
      >
        <AnimatePresence initial={false}>
          {history.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-[12px] md:text-[13px] leading-relaxed break-words whitespace-pre-wrap font-medium ${
                line.type === 'input' ? 'text-zinc-400' : 
                line.type === 'error' ? 'text-red-400/80' : 
                line.type === 'system' ? 'text-blue-400/80' : 'text-zinc-200'
              }`}
            >
              {line.content}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={scrollRef} className="h-10" />
      </div>

      {/* Input Area */}
      <div className="p-6 md:px-10 bg-[#08090a] border-t border-white/[0.04] shrink-0">
        <form onSubmit={handleCommand} className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[#00ff9d] font-black text-[12px]">guest@lumina:~$</span>
          </div>
          <div className="flex-1 w-full flex items-center gap-4">
            <input
              ref={inputRef} autoFocus type="text" value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-[#00ff9d] caret-[#00ff9d] text-[12px] w-full font-bold"
              spellCheck={false} autoComplete="off"
            />
            <div className="flex items-center gap-2 px-2 py-1 bg-white/[0.03] rounded border border-white/[0.08] shrink-0">
              <Sparkles size={12} className="text-[#00ff9d]" />
              <span className="text-[9px] font-black uppercase text-zinc-600 tracking-widest">Agent Active</span>
            </div>
          </div>
        </form>
      </div>
      
      {/* Decor */}
      <div className="fixed bottom-0 right-0 p-12 opacity-[0.02] pointer-events-none">
        <TerminalIcon size={400} />
      </div>
    </main>
  )
}

'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Terminal as TerminalIcon, 
  Sparkles, 
  Lock, 
  Shield, 
  Activity, 
  Globe,
  Building2
} from 'lucide-react'

// --- Types ---
interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: React.ReactNode;
  timestamp: Date;
}

export default function JigsawCLI() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { id: '0', type: 'system', content: 'JIGSAW_CORE_V4 INITIALIZED (ISO_27001_COMPLIANT)', timestamp: new Date() },
    { id: '1', type: 'system', content: 'HANDSHAKE... [SUCCESS] NODE_MAYFAIR_03 READY.', timestamp: new Date() },
    { id: '2', type: 'output', content: 'Type "@jigsaw help" for protocol directives.', timestamp: new Date() }
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
      content: `procurement@jigsaw:~$ ${fullCommand}`,
      timestamp: new Date()
    }])
    setInput('')

    setTimeout(() => {
      let response: TerminalLine;
      const responseId = (Date.now() + 1).toString();

      if (trigger === '@jigsaw') {
        switch (cmd) {
          case 'status':
            response = {
              id: responseId, type: 'output',
              content: (
                <div className="space-y-3 py-2 border-l-2 border-[#003366] pl-4">
                  <div className="flex items-center gap-2 text-[#003366]">
                    <Shield size={14} />
                    <span className="text-[11px] font-black uppercase tracking-widest">NETWORK_STATUS: OPTIMAL</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 font-medium">Availability Scan: 24,032 Venues | Latency: 42ms</p>
                  <div className="flex gap-1">
                    {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="h-1 w-4 bg-[#003366]" />)}
                    {[1,2].map(i => <div key={i} className="h-1 w-4 bg-zinc-100" />)}
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
                <div className="space-y-1 py-1 text-[11px] font-medium text-zinc-600">
                  <p className="text-[#003366]">@jigsaw status   <span className="text-zinc-400">- Real-time network audit</span></p>
                  <p className="text-[#003366]">@jigsaw find     <span className="text-zinc-400">- Source verified venues</span></p>
                  <p className="text-[#003366]">@jigsaw yields   <span className="text-zinc-400">- Negotiated alpha scan</span></p>
                  <p className="text-[#003366]">clear            <span className="text-zinc-400">- Reset node session</span></p>
                </div>
              ),
              timestamp: new Date()
            }
            break
          default:
            response = { id: responseId, type: 'error', content: `Protocol directive "${cmd}" unknown.`, timestamp: new Date() }
        }
      } else if (trigger === 'clear') {
        setHistory([{ id: Date.now().toString(), type: 'system', content: 'Session reset.', timestamp: new Date() }])
        return
      } else {
        response = { id: responseId, type: 'error', content: `Unauthorized command: ${trigger}`, timestamp: new Date() }
      }
      setHistory(prev => [...prev, response])
    }, 400)
  }

  return (
    <main className="h-screen bg-white text-zinc-900 font-mono selection:bg-[#003366]/10 overflow-hidden flex flex-col w-full">
      {/* CLI Header */}
      <nav className="p-4 md:px-10 border-b border-zinc-100 bg-white/80 backdrop-blur-xl flex justify-between items-center shrink-0">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:border-[#003366]/50 transition-all">
            <ArrowLeft size={16} className="text-zinc-400 group-hover:text-[#003366]" />
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-[#003366]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#003366]">JIGSAW_TERMINAL</span>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:block text-right">
            <p className="text-[8px] font-black uppercase tracking-widest text-zinc-400">Security</p>
            <p className="text-[9px] font-bold text-[#003366]">ISO_27001_ACTIVE</p>
          </div>
          <Lock size={16} className="text-zinc-300" />
        </div>
      </nav>

      {/* Terminal Area */}
      <div 
        className="flex-1 overflow-y-auto p-4 md:p-10 space-y-3 scrollbar-hide bg-[#f9fafb]" 
        onClick={() => inputRef.current?.focus()}
      >
        <AnimatePresence initial={false}>
          {history.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-[12px] md:text-[13px] leading-relaxed break-words whitespace-pre-wrap font-medium ${
                line.type === 'input' ? 'text-zinc-500' : 
                line.type === 'error' ? 'text-red-600' : 
                line.type === 'system' ? 'text-blue-600' : 'text-zinc-800'
              }`}
            >
              {line.content}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={scrollRef} className="h-10" />
      </div>

      {/* Input Area */}
      <div className="p-6 md:px-10 bg-white border-t border-zinc-100 shrink-0">
        <form onSubmit={handleCommand} className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[#003366] font-black text-[12px]">procurement@jigsaw:~$</span>
          </div>
          <div className="flex-1 w-full flex items-center gap-4">
            <input
              ref={inputRef} autoFocus type="text" value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-[#003366] caret-[#003366] text-[12px] w-full font-bold"
              spellCheck={false} autoComplete="off"
            />
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded border border-zinc-100 shrink-0">
              <Sparkles size={12} className="text-[#003366]" />
              <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest">Core Active</span>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

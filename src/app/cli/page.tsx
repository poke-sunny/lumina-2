'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  Terminal as TerminalIcon, 
  ArrowLeft, 
  Shield, 
  Activity, 
  Cpu, 
  Zap, 
  Skull, 
  TrendingUp, 
  Home,
  ChevronRight,
  Command,
  Sparkles
} from 'lucide-react'

// --- Types ---
interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: React.ReactNode;
  timestamp: Date;
}

// --- Constants ---
const USERNAME = 'scout'
const HOSTNAME = 'lumina'

export default function CLIView() {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: '0',
      type: 'system',
      content: 'Lumina CLI v1.4.0 (Goose-Engine Powered)',
      timestamp: new Date()
    },
    {
      id: '1',
      type: 'system',
      content: 'Authenticating scout... Connection: SECURE.',
      timestamp: new Date()
    },
    {
      id: '2',
      type: 'output',
      content: 'Type "@lumina help" for available commands.',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const focusInput = () => inputRef.current?.focus()

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const fullCommand = input.trim()
    const parts = fullCommand.split(' ')
    const trigger = parts[0].toLowerCase()
    const cmd = parts[1]?.toLowerCase()

    // Add user input to history
    const userLine: TerminalLine = {
      id: Date.now().toString(),
      type: 'input',
      content: `${USERNAME}@${HOSTNAME}:~$ ${fullCommand}`,
      timestamp: new Date()
    }

    setHistory(prev => [...prev, userLine])
    setInput('')

    // Process Lumina specific commands
    setTimeout(() => {
      let response: TerminalLine;
      const responseId = (Date.now() + 1).toString();

      if (trigger === '@lumina') {
        switch (cmd) {
          case 'status':
            response = {
              id: responseId,
              type: 'output',
              content: (
                <div className="space-y-2 py-2">
                  <div className="flex items-center gap-2 text-[#00ff9d]">
                    <Shield size={14} />
                    <span className="font-bold uppercase tracking-wider">Mission Control: OPTIMAL</span>
                  </div>
                  <div className="text-zinc-400 text-xs md:text-sm">
                    Target: £500,000 | Current Projection: £720,000
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="h-1 w-3 md:w-4 bg-[#00ff9d]" />)}
                    {[1,2].map(i => <div key={i} className="h-1 w-3 md:w-4 bg-zinc-800" />)}
                  </div>
                  <p className="text-[10px] md:text-xs italic text-zinc-500">Your "Financial SOUL" is aligned with the Southampton Waterfront Shards.</p>
                </div>
              ),
              timestamp: new Date()
            }
            break
          case 'yield':
            response = {
              id: responseId,
              type: 'output',
              content: (
                <div className="space-y-3 py-2 border-l-2 border-[#00ff9d]/30 pl-4">
                  <p className="text-[#00ff9d] text-xs md:text-sm font-bold">ASSET: Southampton Waterfront Shards (SWS-01)</p>
                  <div className="grid grid-cols-2 gap-4 text-[10px] md:text-xs">
                    <div>
                      <p className="text-zinc-500">Target APY</p>
                      <p className="text-white font-mono">8.24%</p>
                    </div>
                    <div>
                      <p className="text-zinc-500">Liquidity Tier</p>
                      <p className="text-white font-mono">T-0 High</p>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-[10px] md:text-xs leading-relaxed">
                    Intelligence Analysis: SWS-01 is outperforming local residential growth by 140bps. Shard demand is high due to the recent Google campus announcement nearby.
                  </p>
                </div>
              ),
              timestamp: new Date()
            }
            break
          case 'analyze':
            response = {
              id: responseId,
              type: 'output',
              content: (
                <div className="space-y-2 py-2">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Activity size={14} />
                    <span className="font-bold text-xs md:text-sm">AGENT_LOG: Market Intelligence Scan...</span>
                  </div>
                  <p className="text-[10px] md:text-xs text-zinc-400">Comparing Bristol (6.2%) vs Manchester (7.1%) vs Southampton (8.2%)...</p>
                  <p className="text-[#00ff9d] text-[10px] md:text-xs">RECOMMENDATION: Diversify 20% of capital into Manchester Core for stability, keep 80% in Southampton for growth alpha.</p>
                </div>
              ),
              timestamp: new Date()
            }
            break
          case 'help':
            response = {
              id: responseId,
              type: 'output',
              content: (
                <div className="space-y-1 py-1 text-xs md:text-sm">
                  <p className="text-zinc-400 italic mb-2">Available protocols:</p>
                  <p className="text-[#00ff9d]">@lumina status   <span className="text-zinc-500">- Check readiness tier</span></p>
                  <p className="text-[#00ff9d]">@lumina yield    <span className="text-zinc-500">- Inspect prime asset metrics</span></p>
                  <p className="text-[#00ff9d]">@lumina analyze  <span className="text-zinc-500">- Run agentic market scan</span></p>
                  <p className="text-[#00ff9d]">clear            <span className="text-zinc-500">- Reset session state</span></p>
                </div>
              ),
              timestamp: new Date()
            }
            break
          default:
            response = {
              id: responseId,
              type: 'error',
              content: `Error: Command protocol "${cmd || ''}" not recognized. Try "@lumina help".`,
              timestamp: new Date()
            }
        }
      } else if (trigger === 'clear') {
        setHistory([
          { id: Date.now().toString(), type: 'system', content: 'Session cleared.', timestamp: new Date() }
        ])
        return
      } else {
        response = {
          id: responseId,
          type: 'error',
          content: `Shell: command not found: ${trigger}. All intelligence commands must be prefixed with @lumina.`,
          timestamp: new Date()
        }
      }

      setHistory(prev => [...prev, response])
    }, 400)
  }

  return (
    <main className="h-screen bg-[#08080a] text-zinc-100 font-mono selection:bg-[#00ff9d]/30 overflow-hidden flex flex-col w-full">
      {/* Header */}
      <nav className="p-4 border-b border-white/5 flex justify-between items-center bg-black/40 backdrop-blur-md shrink-0">
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-[#00ff9d]/50 transition-colors">
            <ArrowLeft size={16} className="text-zinc-400 group-hover:text-[#00ff9d]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse" />
            <span className="text-[10px] md:text-sm font-bold tracking-tight uppercase">Lumina CLI</span>
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex flex-col items-end">
            <p className="text-[8px] md:text-[10px] text-zinc-500 font-black uppercase tracking-widest">Connection</p>
            <p className="text-[8px] md:text-[10px] text-[#00ff9d] font-bold">STABLE // GOOSE_V1</p>
          </div>
          <Command size={16} className="text-zinc-500" />
        </div>
      </nav>

      {/* Terminal Area */}
      <div 
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3 scrollbar-hide bg-black/20" 
        onClick={focusInput}
      >
        <AnimatePresence initial={false}>
          {history.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-[11px] md:text-sm leading-relaxed break-words whitespace-pre-wrap ${
                line.type === 'input' ? 'text-zinc-300' : 
                line.type === 'error' ? 'text-red-400' : 
                line.type === 'system' ? 'text-blue-400' : 'text-zinc-200'
              }`}
            >
              {line.content}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={scrollRef} className="h-4" />
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-black/60 border-t border-white/5 shrink-0">
        <form onSubmit={handleCommand} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[#00ff9d] font-bold text-[11px] md:text-sm">{USERNAME}@{HOSTNAME}:~$</span>
          </div>
          <div className="flex-1 w-full flex items-center gap-2">
            <input
              ref={inputRef}
              autoFocus
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-[#00ff9d] caret-[#00ff9d] text-[11px] md:text-sm w-full"
              spellCheck={false}
              autoComplete="off"
            />
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 rounded border border-white/10 shrink-0">
              <Sparkles size={10} className="text-[#00ff9d]" />
              <span className="text-[8px] md:text-[10px] font-bold uppercase text-zinc-500 whitespace-nowrap">Agent Active</span>
            </div>
          </div>
        </form>
      </div>

      {/* Background Decor - Scaled for mobile */}
      <div className="fixed bottom-0 right-0 p-8 md:p-12 opacity-[0.03] pointer-events-none overflow-hidden">
        <TerminalIcon className="w-48 h-48 md:w-[400px] md:h-[400px]" />
      </div>
    </main>
  )
}

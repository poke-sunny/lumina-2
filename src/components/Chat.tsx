'use client'
import { useChat } from '@ai-sdk/react'
import { Send, Bot, User } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="glass h-[600px] flex flex-col rounded-3xl overflow-hidden">
      <div className="p-6 border-b border-zinc-900 flex items-center gap-3">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="font-bold text-sm tracking-tight text-white">LUMINA AI v1.0.4</span>
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 && (
          <div className="h-full flex items-center justify-center text-center p-8">
            <p className="text-zinc-600 text-sm">Ask about property matching, affordability, or the Southampton development.</p>
          </div>
        )}
        {messages.map(m => (
          <div key={m.id} className={`flex gap-4 ${m.role === 'user' ? 'justify-end' : ''}`}>
            {m.role !== 'user' && <Bot size={20} className="text-accent mt-1" />}
            <div className={`p-4 rounded-2xl max-w-[80%] text-sm ${m.role === 'user' ? 'bg-accent text-white' : 'glass text-zinc-300'}`}>
              {m.content}
            </div>
            {m.role === 'user' && <User size={20} className="text-zinc-600 mt-1" />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-6 pt-0">
        <div className="relative">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Search terminal..."
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:border-accent/50 transition-all text-sm text-white"
          />
          <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-accent">
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  )
}
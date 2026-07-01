'use client'
import { LayoutDashboard, Wallet, BarChart3, MessageSquare, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: Wallet, label: 'Portfolios', href: '#' },
  { icon: BarChart3, label: 'Analytics', href: '#' },
  { icon: MessageSquare, label: 'Lumina AI', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-72 border-r border-zinc-900 bg-black flex flex-col p-8 fixed h-full z-50">
      <div className="text-3xl font-black tracking-tighter text-white px-4 mb-12">LUMINA</div>
      <nav className="flex-1 space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={clsx(
              "flex items-center gap-5 px-5 py-4 rounded-2xl transition-all duration-500 group",
              pathname === item.href 
                ? "bg-accent/10 text-accent border border-accent/20" 
                : "text-zinc-500 hover:text-white hover:bg-zinc-900/50 border border-transparent"
            )}
          >
            <item.icon size={22} className={clsx(
               "transition-transform duration-500 group-hover:scale-110",
               pathname === item.href ? "text-accent" : "text-zinc-600 group-hover:text-white"
            )} />
            <span className="font-bold text-[13px] uppercase tracking-[0.1em]">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="pt-8 border-t border-zinc-900">
        <button className="w-full flex items-center gap-5 px-5 py-4 text-zinc-600 hover:text-red-500 transition-all duration-300 group">
          <LogOut size={22} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-[13px] uppercase tracking-[0.1em]">Exit System</span>
        </button>
      </div>
    </aside>
  )
}

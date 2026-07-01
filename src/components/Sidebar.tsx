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
    <aside className="w-64 border-r border-zinc-900 bg-black/50 backdrop-blur-xl flex flex-col p-6 space-y-12">
      <div className="text-2xl font-black tracking-tighter text-white px-4">LUMINA</div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={clsx(
              "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300",
              pathname === item.href ? "bg-accent/10 text-accent" : "text-zinc-500 hover:text-white hover:bg-zinc-900"
            )}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
      <button className="flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-red-400 transition-colors mt-auto">
        <LogOut size={20} />
        <span>Exit Term</span>
      </button>
    </aside>
  )
}
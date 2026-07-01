'use client'
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Fixed Sidebar wrapper to preserve space */}
      <div className="hidden md:block w-72 flex-shrink-0">
        <Sidebar />
      </div>
      <main className="flex-1 p-8 lg:p-12 overflow-x-hidden">
        {children}
      </main>
    </div>
  )
}

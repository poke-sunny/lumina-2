import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lumina | Premium Dark Real Estate',
  description: 'Next-gen property platform for Gen Z investors.',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
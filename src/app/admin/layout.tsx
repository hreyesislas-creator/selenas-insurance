import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Admin — Selena\'s Insurance',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Admin header */}
      <header className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
            <span className="font-display font-800 text-brand-purple text-base">S</span>
          </div>
          <div>
            <span className="font-display font-700 text-white">Selena&apos;s Insurance</span>
            <span className="ml-2 text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">Admin</span>
          </div>
        </div>
        <Link
          href="/site"
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          ← Volver al sitio
        </Link>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}

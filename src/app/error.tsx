'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/utils'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to monitoring service in production (e.g., Sentry)
    console.error('[GlobalError]', error)
  }, [error])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: 'var(--off-white)' }}
    >
      <div className="max-w-md w-full">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="font-display font-800 text-3xl mb-3" style={{ color: 'var(--purple-dark)' }}>
          Algo salió mal
        </h1>
        <p className="text-lg mb-8" style={{ color: 'var(--gray-500)' }}>
          Ocurrió un error inesperado. Por favor intenta de nuevo o
          contáctanos directamente.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={reset}
            className="btn-primary w-full justify-center"
          >
            <RefreshCw size={16} /> Intentar de nuevo
          </button>
          <Link href="/site" className="btn-secondary w-full justify-center">
            Volver al inicio
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center justify-center gap-2 font-display font-700 py-3 rounded-xl transition-all"
            style={{ background: 'var(--off-white)', color: 'var(--purple-dark)', border: '1.5px solid var(--gray-100)' }}
          >
            <Phone size={16} /> {BUSINESS.phone}
          </a>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <pre className="mt-6 p-4 rounded-xl text-left text-xs overflow-auto" style={{ background: 'var(--purple-dark)', color: '#ff6b6b' }}>
            {error.message}
            {error.stack ? `\n\n${error.stack}` : ''}
          </pre>
        )}
      </div>
    </div>
  )
}

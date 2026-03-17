import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { BUSINESS, getWhatsAppUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Página no encontrada — Selena\'s Insurance',
}

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: 'var(--purple-dark)' }}
    >
      {/* Top accent */}
      <div className="fixed top-0 left-0 right-0 h-1.5" style={{ background: 'var(--yellow)' }} />

      <div className="max-w-md w-full">
        {/* Logo */}
        <Link href="/site" className="inline-flex items-center gap-3 mb-10">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ background: 'var(--yellow)' }}
          >
            <span className="font-display font-800 text-2xl" style={{ color: 'var(--purple-dark)' }}>S</span>
          </div>
          <span className="font-display font-700 text-white text-xl">Selena&apos;s Insurance</span>
        </Link>

        {/* 404 */}
        <div
          className="text-8xl font-display font-800 mb-4 leading-none"
          style={{ color: 'var(--yellow)' }}
        >
          404
        </div>
        <h1 className="font-display font-800 text-3xl text-white mb-3">
          Página no encontrada
        </h1>
        <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Lo sentimos, esta página no existe. Pero podemos ayudarte
          a encontrar lo que necesitas.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link
            href="/site"
            className="btn-primary-lg w-full justify-center"
          >
            Volver al inicio
          </Link>
          <Link
            href="/site/get-a-quote"
            className="btn-ghost w-full justify-center"
          >
            Obtener cotización gratis
          </Link>
          <div className="flex gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex-1 flex items-center justify-center gap-2 font-display font-700 text-white py-3 rounded-xl transition-all"
              style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.20)' }}
            >
              <Phone size={16} /> Llamar
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 font-display font-700 text-white py-3 rounded-xl transition-all"
              style={{ background: '#22C55E' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

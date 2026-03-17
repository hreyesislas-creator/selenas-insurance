'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { BUSINESS, getWhatsAppUrl } from '@/lib/utils'

const WA_ICON = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export function MobileCTABar() {
  const [visible, setVisible] = useState(false)

  // Slide in after a short delay on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-500"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      {/* Frosted background */}
      <div
        className="grid grid-cols-3"
        style={{
          background: 'rgba(250,250,248,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(30,13,64,0.10)',
          boxShadow: '0 -4px 24px rgba(30,13,64,0.12)',
          paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
        }}
      >
        {/* Call */}
        <a
          href={`tel:${BUSINESS.phone}`}
          className="flex flex-col items-center justify-center gap-1.5 py-3 transition-all active:scale-95"
          style={{ color: 'var(--purple)' }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(74,32,128,0.08)' }}
          >
            <Phone size={18} />
          </div>
          <span className="text-[10px] font-700 tracking-wide uppercase" style={{ color: 'var(--purple)' }}>
            Llamar
          </span>
        </a>

        {/* QUOTE — dominant center button */}
        <Link
          href="/get-a-quote"
          className="flex flex-col items-center justify-center gap-1.5 py-2 transition-all active:scale-95"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg pulse-yellow"
            style={{
              background: 'var(--yellow)',
              boxShadow: '0 3px 0 var(--yellow-deep), 0 6px 20px rgba(245,196,0,0.40)',
              marginTop: '-18px',
              border: '3px solid white',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--purple-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
            </svg>
          </div>
          <span className="text-[10px] font-800 tracking-wide uppercase" style={{ color: 'var(--purple-dark)' }}>
            Cotizar
          </span>
        </Link>

        {/* WhatsApp */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1.5 py-3 transition-all active:scale-95"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center pulse-green"
            style={{ background: '#22C55E', color: 'white' }}
          >
            <WA_ICON />
          </div>
          <span className="text-[10px] font-700 tracking-wide uppercase text-green-700">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  )
}

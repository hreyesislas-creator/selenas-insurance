'use client'

import { useEffect, useState } from 'react'
import { getWhatsAppUrl } from '@/lib/utils'

const WA_ICON = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export function WhatsAppButton() {
  const [show, setShow] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed z-50 flex items-center transition-all duration-500"
      style={{
        bottom: 'max(100px, calc(env(safe-area-inset-bottom) + 100px))',
        right: '16px',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
      }}
    >
      {/* Tooltip label */}
      <span
        className="mr-3 whitespace-nowrap text-sm font-700 text-white rounded-xl px-3.5 py-2 transition-all duration-200 pointer-events-none select-none"
        style={{
          background: 'rgba(22,101,52,0.95)',
          backdropFilter: 'blur(8px)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(6px)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        }}
      >
        ¡Escríbenos por WhatsApp!
      </span>

      {/* Button */}
      <div className="relative">
        {/* Ping ring */}
        <span
          className="absolute inset-0 rounded-full bg-green-500"
          style={{ animation: 'waPing 2s ease-out infinite' }}
          aria-hidden
        />
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center pulse-green"
          style={{
            background: 'linear-gradient(135deg, #22C55E 0%, #16a34a 100%)',
            boxShadow: '0 4px 20px rgba(34,197,94,0.50), 0 2px 0 #15803d',
          }}
        >
          <WA_ICON />
        </div>
      </div>
    </a>
  )
}

// Keyframe must be in globals.css (already defined as waPing)

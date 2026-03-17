import type { ReactNode } from 'react'
import Link from 'next/link'
import { Phone, CheckCircle } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { BUSINESS, getWhatsAppUrl } from '@/lib/utils'

const WA_ICON = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

interface LandingHeroProps {
  badge?: string
  headline: ReactNode
  subheadline: string
  trustItems?: string[]
  sourcePage: string
  landingPage?: string
  bgColor?: string
  accentColor?: string
}

export function LandingHero({
  badge,
  headline,
  subheadline,
  trustItems,
  sourcePage,
  landingPage,
  bgColor = 'var(--purple-dark)',
  accentColor = 'var(--yellow)',
}: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: bgColor }}>
      {/* Top stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'var(--yellow)' }} />

      {/* Texture */}
      <div className="absolute inset-0 stripe-pattern" />

      {/* Radial glow */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 80% at 85% 30%, ${accentColor}18 0%, transparent 70%)` }}
      />

      <div className="relative max-w-5xl mx-auto px-4 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — copy */}
          <div className="text-white pt-2">
            {badge && (
              <div
                className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-widest rounded-full px-4 py-2 mb-5"
                style={{
                  background: 'rgba(245,196,0,0.12)',
                  border: '1px solid rgba(245,196,0,0.30)',
                  color: 'var(--yellow)',
                }}
              >
                {badge}
              </div>
            )}

            <h1
              className="font-display font-800 text-white mb-5"
              style={{
                fontSize: 'clamp(2.25rem,5vw,3.75rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
              }}
            >
              {headline}
            </h1>

            <p className="text-lg leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '440px' }}>
              {subheadline}
            </p>

            {trustItems && (
              <ul className="space-y-2.5 mb-8">
                {trustItems.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-500" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    <CheckCircle size={15} style={{ color: 'var(--yellow)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Direct contact CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-secondary flex-1 justify-center"
                style={{ padding: '16px 20px', borderRadius: 'var(--radius-lg)' }}
              >
                <Phone size={17} /> {BUSINESS.phone}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1 justify-center"
                style={{ padding: '16px 20px', borderRadius: 'var(--radius-lg)' }}
              >
                <WA_ICON /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form card */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{
              background: 'white',
              boxShadow: '0 20px 60px rgba(0,0,0,0.30)',
            }}
          >
            {/* Form header bar */}
            <div
              className="px-6 py-4"
              style={{ background: 'var(--yellow)' }}
            >
              <h2 className="font-display font-800 text-lg" style={{ color: 'var(--purple-dark)' }}>
                Cotización Gratis — Sin Compromiso
              </h2>
              <p className="text-xs font-600 mt-0.5" style={{ color: 'rgba(50,22,92,0.65)' }}>
                Solo 2 minutos · Respuesta el mismo día
              </p>
            </div>
            <div className="p-6">
              <LeadForm sourcePage={sourcePage} landingPage={landingPage} />
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="relative h-10 md:h-14" style={{ background: bgColor }}>
        <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
          <path d="M0 56 C480 0 960 0 1440 56 L1440 56 L0 56 Z" fill="#FAFAF8"/>
        </svg>
      </div>
    </section>
  )
}

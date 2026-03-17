import Link from 'next/link'
import { Phone, Shield, Star, Clock, CheckCircle } from 'lucide-react'
import { BUSINESS, getWhatsAppUrl } from '@/lib/utils'

const WA_ICON = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

const trustPills = [
  { icon: Shield, label: 'Licenciados en CA' },
  { icon: Star, label: '5 Estrellas Google' },
  { icon: Clock, label: 'Respuesta el Mismo Día' },
]

const highlights = [
  'Desde $0 de enganche',
  'Póliza activa hoy mismo',
  'SR22 tramitado en horas',
  'Atención 100% en español',
]

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--purple-dark)' }}
    >
      {/* ── Background layers ── */}
      {/* California stripe: the thick yellow top bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'var(--yellow)' }} />

      {/* Subtle diagonal texture */}
      <div className="absolute inset-0 stripe-pattern opacity-100" />

      {/* Right-side purple gradient glow */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 85% 40%, rgba(115,64,176,0.35) 0%, transparent 70%)',
        }}
      />

      {/* Bottom left warm glow */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 20% 100%, rgba(245,196,0,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-0 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── LEFT: Copy ──────────────────────────────── */}
          <div className="text-white pt-2 pb-10 lg:pb-16">

            {/* Location badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-widest rounded-full px-4 py-2 mb-6 animate-fade-up"
              style={{
                background: 'rgba(245,196,0,0.12)',
                border: '1px solid rgba(245,196,0,0.30)',
                color: 'var(--yellow)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Moreno Valley, CA — Atención en Español
            </div>

            {/* Main headline */}
            <h1
              className="font-display font-800 text-white mb-5 animate-fade-up delay-75"
              style={{
                fontSize: 'clamp(2.6rem, 6.5vw, 4.75rem)',
                lineHeight: '1.0',
                letterSpacing: '-0.03em',
              }}
            >
              Seguros de Auto<br />
              <span style={{ color: 'var(--yellow)' }}>y Servicios DMV</span><br />
              en un Solo Lugar
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl leading-relaxed mb-7 animate-fade-up delay-150"
              style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '480px' }}
            >
              Ayuda rápida. Precios accesibles. Atención personalizada en español.
              Cotiza por teléfono, WhatsApp o en línea — como prefieras.
            </p>

            {/* Highlight checklist */}
            <ul className="grid grid-cols-2 gap-2 mb-8 animate-fade-up delay-250">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-500" style={{ color: 'rgba(255,255,255,0.80)' }}>
                  <CheckCircle size={14} style={{ color: 'var(--yellow)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA cluster */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-up delay-350">
              <Link href="/site/get-a-quote" className="btn-primary-lg pulse-yellow text-center">
                Cotización Gratis
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-center"
                style={{ padding: '17px 28px', borderRadius: 'var(--radius-lg)', fontSize: '1.0625rem' }}
              >
                <WA_ICON /> WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-ghost text-center"
                style={{ padding: '16px 24px', borderRadius: 'var(--radius-lg)', fontSize: '1rem' }}
              >
                <Phone size={17} /> Llamar
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 animate-fade-up delay-500">
              {trustPills.map(({ icon: Icon, label }) => (
                <span key={label} className="trust-pill">
                  <Icon size={13} style={{ color: 'var(--yellow)' }} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Plate visual card ──────────────── */}
          <div
            className="hidden lg:block relative self-end animate-fade-up delay-250"
            style={{ marginBottom: '0' }}
          >
            {/* Shadow platform */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-12 rounded-full blur-2xl opacity-40"
              style={{ background: 'rgba(0,0,0,0.5)' }}
            />

            {/* Main plate card */}
            <div
              className="relative mx-auto w-[380px]"
              style={{
                background: 'white',
                borderRadius: '20px 20px 0 0',
                overflow: 'hidden',
                boxShadow: '0 -6px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              {/* CA plate top stripe */}
              <div
                className="h-10 flex items-center justify-center relative"
                style={{ background: 'var(--blue-ca)' }}
              >
                <span
                  className="font-display font-800 text-white text-xs tracking-[0.5em] uppercase"
                  style={{ letterSpacing: '0.45em' }}
                >
                  California
                </span>
                <div
                  className="absolute left-3 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <span className="text-white text-[8px] font-800">CA</span>
                </div>
              </div>

              {/* Plate body */}
              <div className="py-8 px-6 flex flex-col items-center text-center bg-white">
                <div
                  className="font-display font-800 text-center tracking-[0.18em] mb-1"
                  style={{
                    fontSize: '3.5rem',
                    color: 'var(--purple-dark)',
                    letterSpacing: '0.18em',
                    lineHeight: 1,
                  }}
                >
                  SELENA
                </div>
                <div
                  className="font-display font-700 tracking-widest text-base mb-4"
                  style={{ color: 'var(--gray-500)', letterSpacing: '0.12em' }}
                >
                  Insurance &amp; DMV
                </div>

                {/* Service pills on plate */}
                <div className="flex gap-2 flex-wrap justify-center">
                  {[
                    { label: 'Seguros', bg: 'var(--yellow)', color: 'var(--purple-dark)' },
                    { label: 'DMV', bg: 'var(--purple)', color: 'white' },
                    { label: 'SR22', bg: 'var(--red)', color: 'white' },
                    { label: 'Notario', bg: 'var(--blue-ca)', color: 'white' },
                  ].map(({ label, bg, color }) => (
                    <span
                      key={label}
                      className="text-xs font-800 uppercase tracking-wider px-3 py-1.5 rounded-full"
                      style={{ background: bg, color }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Plate bottom stripe */}
              <div className="h-3" style={{ background: 'var(--yellow)' }} />
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -left-12 top-12 rounded-2xl p-3.5 animate-fade-up delay-500"
              style={{
                background: 'white',
                boxShadow: 'var(--shadow-lift)',
                border: '3px solid var(--yellow)',
                minWidth: '130px',
              }}
            >
              <div className="text-[10px] font-600 uppercase tracking-wide mb-0.5" style={{ color: 'var(--gray-500)' }}>
                Pago inicial desde
              </div>
              <div
                className="font-display font-800 text-2xl leading-none"
                style={{ color: 'var(--purple-dark)' }}
              >
                $0 Down
              </div>
            </div>

            <div
              className="absolute -right-8 top-1/3 rounded-2xl p-3.5 animate-fade-up delay-650"
              style={{
                background: 'var(--yellow)',
                boxShadow: 'var(--shadow-yellow)',
                minWidth: '120px',
              }}
            >
              <div className="text-[10px] font-600 uppercase tracking-wide mb-0.5" style={{ color: 'var(--purple-dark)', opacity: 0.7 }}>
                Respuesta
              </div>
              <div
                className="font-display font-800 text-xl leading-none"
                style={{ color: 'var(--purple-dark)' }}
              >
                Hoy Mismo
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Curved separator ── */}
      <div className="relative h-10 md:h-14" style={{ background: 'var(--purple-dark)' }}>
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
        >
          <path d="M0 56 C480 0 960 0 1440 56 L1440 56 L0 56 Z" fill="#FAFAF8"/>
        </svg>
      </div>
    </section>
  )
}

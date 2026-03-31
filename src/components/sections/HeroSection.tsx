import { Phone, Shield, Star, Clock, CheckCircle } from 'lucide-react'
import { BUSINESS, getWhatsAppUrl } from '@/lib/utils'
import { LeadForm } from '@/components/forms/LeadForm'

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
      {/* ── Yellow top stripe ── */}
      <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'var(--yellow)' }} />

      {/* ── Background layers ── */}
      <div className="absolute inset-0 stripe-pattern" />
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 85% 40%, rgba(115,64,176,0.30) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 20% 100%, rgba(245,196,0,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 pt-10 pb-0 md:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── LEFT: Headline + copy + CTAs ─────────── */}
          <div className="text-white pt-2 pb-8 lg:pb-14">

            {/* Location badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-widest rounded-full px-4 py-2 mb-5 animate-fade-up"
              style={{
                background: 'rgba(245,196,0,0.12)',
                border: '1px solid rgba(245,196,0,0.30)',
                color: 'var(--yellow)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Bakersfield, CA — Atención en Español
            </div>

            {/* Main headline */}
            <h1
              className="font-display font-800 text-white mb-4 animate-fade-up delay-75"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.25rem)',
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
              className="text-lg leading-relaxed mb-6 animate-fade-up delay-150"
              style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '460px' }}
            >
              Ayuda rápida, precios accesibles y atención personalizada en español.
              Cotiza por teléfono, WhatsApp o en línea.
            </p>

            {/* Highlight checklist */}
            <ul className="grid grid-cols-2 gap-y-2 gap-x-3 mb-7 animate-fade-up delay-250">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-500" style={{ color: 'rgba(255,255,255,0.82)' }}>
                  <CheckCircle size={14} style={{ color: 'var(--yellow)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Secondary CTA buttons — phone + WA for visitors who want to call now */}
            <div className="flex flex-wrap gap-3 mb-7 animate-fade-up delay-350">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: '13px 22px', borderRadius: 'var(--radius-md)', fontSize: '0.9375rem' }}
              >
                <WA_ICON /> WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-ghost"
                style={{ padding: '12px 22px', borderRadius: 'var(--radius-md)', fontSize: '0.9375rem' }}
              >
                <Phone size={16} /> {BUSINESS.phone}
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

            {/* ── Plate accent — desktop only, below trust pills ── */}
            {/* Kept as a compact brand detail, not replacing the form */}
            <div
              className="hidden lg:flex items-center gap-3 mt-8 animate-fade-up delay-650"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: 'var(--radius-md)',
                padding: '10px 16px',
                maxWidth: 'max-content',
              }}
            >
              {/* Mini CA plate */}
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{ background: 'white' }}
              >
                <div
                  className="w-4 h-4 rounded-sm flex items-center justify-center"
                  style={{ background: 'var(--blue-ca)' }}
                >
                  <span className="text-white text-[7px] font-800 leading-none">CA</span>
                </div>
                <span
                  className="font-display font-800 tracking-widest"
                  style={{ color: 'var(--purple-dark)', fontSize: '0.9rem', letterSpacing: '0.2em' }}
                >
                  SELENA
                </span>
                <div className="w-2 h-full" style={{ background: 'var(--yellow)', borderRadius: '1px' }} />
              </div>
              <div className="flex gap-1.5">
                {['Seguros', 'DMV', 'SR22'].map((label, i) => (
                  <span
                    key={label}
                    className="text-[10px] font-800 uppercase tracking-wider px-2 py-1 rounded-full"
                    style={{
                      background: i === 0 ? 'var(--yellow)' : i === 1 ? 'var(--purple)' : 'var(--red)',
                      color: i === 0 ? 'var(--purple-dark)' : 'white',
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Lead capture form — THE conversion engine ── */}
          <div className="animate-fade-up delay-150 pb-0 lg:pb-0">
            {/* Form card — raised, prominent */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'white',
                boxShadow: '0 24px 64px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.12)',
              }}
            >
              {/* Form header bar */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ background: 'var(--yellow)' }}
              >
                <div>
                  <h2 className="font-display font-800 text-lg leading-none" style={{ color: 'var(--purple-dark)' }}>
                    Cotización Gratis
                  </h2>
                  <p className="text-xs font-600 mt-0.5" style={{ color: 'rgba(50,22,92,0.65)' }}>
                    2 minutos · Sin compromiso · Respuesta hoy
                  </p>
                </div>
                {/* Small CA plate badge on form header */}
                <div
                  className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg"
                  style={{ background: 'rgba(50,22,92,0.12)' }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-sm flex items-center justify-center"
                    style={{ background: 'var(--blue-ca)' }}
                  >
                    <span className="text-white text-[6px] font-800 leading-none">CA</span>
                  </div>
                  <span className="font-display font-800 text-xs tracking-widest" style={{ color: 'var(--purple-dark)', letterSpacing: '0.18em' }}>
                    SELENA
                  </span>
                </div>
              </div>

              {/* Form body */}
              <div className="p-5 md:p-6">
                <LeadForm sourcePage="hero-form" />
              </div>
            </div>

            {/* Floating stat pills below the form card */}
            <div className="flex items-center justify-center gap-3 mt-4 pb-6 flex-wrap">
              {[
                { value: '$0', label: 'enganche disponible' },
                { value: '+200', label: 'clientes felices' },
                { value: '<1hr', label: 'tiempo de respuesta' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex items-baseline gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.14)',
                  }}
                >
                  <span className="font-display font-800 text-sm" style={{ color: 'var(--yellow)' }}>
                    {value}
                  </span>
                  <span className="text-xs font-500" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Curved separator into next section ── */}
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

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const spotlights = [
  {
    emoji: '💸',
    title: 'Pago Inicial\nDesde $0',
    description: 'Opciones de seguro sin enganche. Pagos mensuales que se adaptan a tu bolsillo real.',
    cta: 'Cotizar seguro',
    href: '/site/get-a-quote',
    style: 'yellow',
  },
  {
    emoji: '⚡',
    title: 'SR22\nel Mismo Día',
    description: '¿Licencia suspendida? Lo tramitamos y enviamos al DMV en horas.',
    cta: 'Obtener SR22',
    href: '/landing/sr22-insurance',
    style: 'purple',
  },
  {
    emoji: '🏛️',
    title: 'DMV\nSin Filas',
    description: 'Títulos, transferencias, registro. Nosotros hacemos el trámite por ti.',
    cta: 'Ver servicios DMV',
    href: '/site/dmv-services',
    style: 'blue',
  },
  {
    emoji: '🪪',
    title: 'Placas\ny Registro',
    description: 'Renovamos tus placas rápido. Sin esperas, sin complicaciones.',
    cta: 'Renovar placas',
    href: '/landing/plates-registration',
    style: 'dark',
  },
]

const styleMap = {
  yellow: {
    bg: 'var(--yellow)',
    title: 'var(--purple-dark)',
    body: 'rgba(50,22,92,0.70)',
    cta: 'var(--purple-dark)',
    ctaBg: 'rgba(50,22,92,0.10)',
    circle: 'rgba(50,22,92,0.06)',
  },
  purple: {
    bg: 'var(--purple)',
    title: 'white',
    body: 'rgba(255,255,255,0.70)',
    cta: 'var(--yellow)',
    ctaBg: 'rgba(245,196,0,0.12)',
    circle: 'rgba(255,255,255,0.06)',
  },
  blue: {
    bg: 'var(--blue-ca)',
    title: 'white',
    body: 'rgba(255,255,255,0.70)',
    cta: 'var(--yellow)',
    ctaBg: 'rgba(245,196,0,0.12)',
    circle: 'rgba(255,255,255,0.06)',
  },
  dark: {
    bg: 'var(--purple-dark)',
    title: 'white',
    body: 'rgba(255,255,255,0.70)',
    cta: 'var(--yellow)',
    ctaBg: 'rgba(245,196,0,0.12)',
    circle: 'rgba(255,255,255,0.06)',
  },
}

export function SpotlightSection() {
  return (
    <section className="py-20 md:py-24" style={{ background: 'var(--off-white)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label block mb-3">Servicios destacados</span>
          <h2
            className="font-display font-800"
            style={{
              fontSize: 'clamp(1.875rem,4vw,3rem)',
              color: 'var(--purple-dark)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}
          >
            Lo que hacemos mejor
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {spotlights.map((spot) => {
            const s = styleMap[spot.style as keyof typeof styleMap]
            return (
              <Link
                key={spot.title}
                href={spot.href}
                className="group relative rounded-2xl p-6 overflow-hidden flex flex-col gap-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
                style={{ background: s.bg }}
              >
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full" style={{ background: s.circle }} />
                <div className="absolute -bottom-10 -left-6 w-24 h-24 rounded-full" style={{ background: s.circle }} />

                <span className="text-4xl relative z-10 select-none">{spot.emoji}</span>

                <div className="relative z-10 flex-1">
                  <h3
                    className="font-display font-800 text-xl mb-2.5 leading-tight"
                    style={{ color: s.title, whiteSpace: 'pre-line' }}
                  >
                    {spot.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: s.body }}>
                    {spot.description}
                  </p>
                </div>

                <div
                  className="relative z-10 inline-flex items-center gap-1.5 text-sm font-700 rounded-full px-3.5 py-2 self-start transition-all duration-200 group-hover:gap-2.5"
                  style={{ background: s.ctaBg, color: s.cta }}
                >
                  {spot.cta}
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

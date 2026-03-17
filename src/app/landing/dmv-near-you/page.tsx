import type { Metadata } from 'next'
import { LandingHero } from '@/components/sections/LandingHero'
import { CTAStrip } from '@/components/sections/CTAStrip'
import { Phone, MapPin, Clock } from 'lucide-react'
import { BUSINESS } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Servicios DMV Cerca de Mí — Selena\'s Insurance | Moreno Valley, CA',
  description:
    'Servicios de DMV en Moreno Valley, CA. Placas, registros, títulos, transferencias y más sin hacer filas. Atención en español. Inland Empire.',
}

const trustItems = [
  'Ubicados en Moreno Valley, CA',
  'Servimos todo el Inland Empire',
  'Sin filas — atendemos con cita o sin cita',
  'Todos los trámites DMV disponibles',
  'Atención en español',
]

const areas = [
  'Moreno Valley', 'Riverside', 'Perris', 'Hemet',
  'San Jacinto', 'Beaumont', 'Banning', 'Redlands',
  'Colton', 'Fontana', 'Corona', 'Menifee',
]

export default function DMVNearYouLanding() {
  return (
    <>
      <LandingHero
        badge="📍 DMV Cerca de Mí — Moreno Valley"
        headline={
          <>
            Servicios DMV<br />
            <span style={{ color: 'var(--yellow)' }}>Cerca de Ti</span><br />
            en el Inland Empire
          </>
        }
        subheadline="En Selena's Insurance en Moreno Valley manejamos todos tus trámites del DMV — sin filas, en español y con resultados el mismo día."
        trustItems={trustItems}
        sourcePage="landing-dmv-near-you"
        landingPage="dmv-near-you"
        bgColor="var(--blue-ca)"
      />

      {/* ── Location info ── */}
      <section className="py-20" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-3">Nuestra ubicación</span>
              <h2
                className="font-display font-800 mb-6"
                style={{ fontSize: 'clamp(1.875rem,3.5vw,2.75rem)', color: 'var(--purple-dark)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
              >
                Estamos en<br />Moreno Valley
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, label: 'Dirección', value: BUSINESS.address, href: BUSINESS.googleMapsUrl, external: true, color: 'var(--red)' },
                  { icon: Phone, label: 'Teléfono', value: BUSINESS.phone, href: `tel:${BUSINESS.phone}`, external: false, color: 'var(--yellow-deep)' },
                  { icon: Clock, label: 'Horario', value: BUSINESS.hours, href: null, external: false, color: 'var(--blue-ca)' },
                ].map(({ icon: Icon, label, value, href, external, color }) => {
                  const inner = (
                    <div
                      className="flex items-start gap-4 p-4 rounded-2xl transition-all"
                      style={{ background: 'var(--off-white)', border: '1.5px solid rgba(30,13,64,0.06)' }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'white', boxShadow: 'var(--shadow-card)' }}
                      >
                        <Icon size={17} style={{ color }} />
                      </div>
                      <div>
                        <div className="text-xs font-700 uppercase tracking-widest mb-0.5" style={{ color: 'var(--gray-300)' }}>{label}</div>
                        <div className="font-600 text-sm" style={{ color: 'var(--gray-900)' }}>{value}</div>
                      </div>
                    </div>
                  )
                  return href
                    ? <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{inner}</a>
                    : <div key={label}>{inner}</div>
                })}
              </div>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MapPin size={16} /> Ver en Google Maps
              </a>
            </div>

            {/* Areas served */}
            <div
              className="rounded-2xl p-8"
              style={{ background: 'var(--purple-dark)' }}
            >
              <h3
                className="font-display font-800 text-white mb-2"
                style={{ fontSize: '1.625rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                Áreas que servimos
              </h3>
              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Atendemos a clientes de todo el Inland Empire y alrededores.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-sm font-600 rounded-xl px-3 py-2.5"
                    style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.80)' }}
                  >
                    <span style={{ color: 'var(--yellow)' }}>📍</span>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services list ── */}
      <section className="py-16" style={{ background: 'var(--off-white)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="font-display font-800 mb-8"
            style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: 'var(--purple-dark)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
          >
            Todos los trámites que necesitas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: '🪪', label: 'Placas' },
              { emoji: '📋', label: 'Registro' },
              { emoji: '🔄', label: 'Títulos' },
              { emoji: '📄', label: 'Transferencias' },
              { emoji: '📝', label: 'Duplicados' },
              { emoji: '🔎', label: 'VIN Verify' },
              { emoji: '✏️', label: 'Cambio Datos' },
              { emoji: '🏍️', label: 'Motos' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-5 text-center"
                style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className="font-display font-700 text-sm" style={{ color: 'var(--purple-dark)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title="¿Buscas servicios DMV cerca de ti?" subtitle="Estamos en Moreno Valley — te atendemos hoy." />
    </>
  )
}

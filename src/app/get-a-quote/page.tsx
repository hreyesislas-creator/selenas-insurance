import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import { LeadForm } from '@/components/forms/LeadForm'
import { BUSINESS, getWhatsAppUrl } from '@/lib/utils'
import SiteShell from '@/components/layout/SiteShell'


export const metadata: Metadata = {
  title: 'Cotización Gratis — Selena\'s Insurance',
  description:
    'Obtén tu cotización gratuita de seguro de auto o solicita cualquier servicio en Selena\'s Insurance. Rápido, sin compromiso, atención en español.',
}

const WA_ICON = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

const sideItems = [
  {
    emoji: '📋',
    title: '¿Qué necesitas para cotizar?',
    bullets: [
      'Nombre completo',
      'Número de teléfono',
      'Año, marca y modelo del vehículo',
      'Código postal o ciudad',
    ],
  },
  {
    emoji: '⚡',
    title: 'Tiempo de respuesta',
    bullets: [
      'Respuesta en menos de 1 hora',
      'Durante nuestro horario de atención',
      'Por teléfono, SMS o WhatsApp',
      'Sin presión, sin compromiso',
    ],
  },
]

export default function GetAQuotePage() {
  return (
    <SiteShell>
      {/* ── Page hero ── */}
      <section
        className="py-14 md:py-16 relative"
        style={{ background: 'var(--yellow)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--purple-dark)', opacity: 0.15 }} />
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="section-label block mb-3" style={{ color: 'rgba(50,22,92,0.55)' }}>
            Sin costo · Sin compromiso
          </span>
          <h1
            className="font-display font-800 mb-3"
            style={{
              fontSize: 'clamp(2.25rem,5vw,3.75rem)',
              color: 'var(--purple-dark)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
            }}
          >
            Cotización Gratuita
          </h1>
          <p className="text-lg font-500 max-w-xl mx-auto" style={{ color: 'rgba(50,22,92,0.65)' }}>
            Completa el formulario y te contactamos con tu cotización personalizada. Solo 2 minutos.
          </p>
        </div>
      </section>

      {/* ── Main layout ── */}
      <section className="py-14 md:py-20" style={{ background: 'var(--white)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Form card — dominant ── */}
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 16px 48px rgba(30,13,64,0.12)', border: '1px solid rgba(30,13,64,0.06)' }}
              >
                <div className="px-8 py-5" style={{ background: 'var(--purple-dark)' }}>
                  <h2 className="font-display font-800 text-xl text-white">Solicitud de Cotización</h2>
                  <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.50)' }}>
                    Todos los campos con * son requeridos
                  </p>
                </div>
                <div className="p-6 md:p-8 bg-white">
                  <LeadForm sourcePage="get-a-quote-page" />
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5">
              {/* Call now */}
              <div
                className="rounded-2xl p-5"
                style={{ border: '2px solid var(--yellow)', background: 'var(--yellow-light)' }}
              >
                <p className="font-display font-700 text-base mb-1" style={{ color: 'var(--purple-dark)' }}>
                  ¿Prefieres llamar?
                </p>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2 font-display font-800 text-2xl leading-none mb-1"
                  style={{ color: 'var(--purple-dark)' }}
                >
                  <Phone size={20} style={{ color: 'var(--yellow-deep)' }} />
                  {BUSINESS.phone}
                </a>
                <p className="text-xs font-600" style={{ color: 'var(--gray-500)' }}>{BUSINESS.hours}</p>
              </div>

              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl p-5 transition-all"
                style={{ background: 'rgba(34,197,94,0.08)', border: '2px solid rgba(34,197,94,0.25)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ background: '#22C55E' }}
                >
                  <WA_ICON />
                </div>
                <div>
                  <div className="font-display font-700 text-base" style={{ color: '#15803d' }}>WhatsApp</div>
                  <div className="text-xs font-600" style={{ color: 'var(--gray-500)' }}>Respuesta inmediata</div>
                </div>
              </a>

              {/* Info cards */}
              {sideItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-5"
                  style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)', boxShadow: 'var(--shadow-card)' }}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <h3 className="font-display font-700 text-base" style={{ color: 'var(--purple-dark)' }}>
                      {item.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm" style={{ color: 'var(--gray-700)' }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--yellow)' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Privacy note */}
              <div
                className="rounded-xl p-4 text-center"
                style={{ background: 'var(--off-white)', border: '1px solid var(--gray-100)' }}
              >
                <p className="text-xs font-600" style={{ color: 'var(--gray-500)' }}>
                  🔒 Tu información es 100% privada y segura. Nunca la compartimos ni vendemos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

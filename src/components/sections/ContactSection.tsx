import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import Link from 'next/link'
import { BUSINESS, getWhatsAppUrl } from '@/lib/utils'

const WA_ICON = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

const contactItems = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: BUSINESS.phone,
    href: `tel:${BUSINESS.phone}`,
    iconBg: 'var(--yellow)',
    iconColor: 'var(--purple-dark)',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: BUSINESS.address,
    href: BUSINESS.googleMapsUrl,
    iconBg: 'rgba(176,48,32,0.10)',
    iconColor: 'var(--red)',
    external: true,
  },
  {
    icon: Clock,
    label: 'Horario',
    value: BUSINESS.hours,
    href: null,
    iconBg: 'rgba(26,58,107,0.10)',
    iconColor: 'var(--blue-ca)',
  },
  {
    icon: Mail,
    label: 'Email',
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    iconBg: 'var(--off-white)',
    iconColor: 'var(--gray-700)',
  },
]

export function ContactSection() {
  return (
    <section className="py-20 md:py-24" style={{ background: 'var(--white)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <div>
            <span className="section-label block mb-3">Contáctanos</span>
            <h2
              className="font-display font-800 mb-5"
              style={{
                fontSize: 'clamp(2rem,4vw,3rem)',
                color: 'var(--purple-dark)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              Estamos aquí<br />para ayudarte
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--gray-500)' }}>
              Visítanos en persona, llámanos o comunícate por WhatsApp.
              Siempre hay alguien disponible para atenderte en español.
            </p>

            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href, iconBg, iconColor, external }) => {
                const content = (
                  <div
                    className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-150 group"
                    style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)', boxShadow: 'var(--shadow-card)' }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: iconBg }}
                    >
                      <Icon size={18} style={{ color: iconColor }} />
                    </div>
                    <div>
                      <div className="text-xs font-700 uppercase tracking-widest mb-0.5" style={{ color: 'var(--gray-300)' }}>
                        {label}
                      </div>
                      <div className="font-600 text-sm leading-snug" style={{ color: 'var(--gray-900)' }}>
                        {value}
                      </div>
                    </div>
                  </div>
                )

                if (href) {
                  return (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  )
                }
                return <div key={label}>{content}</div>
              })}

              {/* WhatsApp row */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-150 group"
                style={{ background: 'white', border: '1.5px solid rgba(34,197,94,0.25)', boxShadow: 'var(--shadow-card)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ background: '#22C55E' }}
                >
                  <WA_ICON />
                </div>
                <div>
                  <div className="text-xs font-700 uppercase tracking-widest mb-0.5" style={{ color: 'var(--gray-300)' }}>
                    WhatsApp
                  </div>
                  <div className="font-600 text-sm" style={{ color: '#16a34a' }}>
                    ¡Escríbenos un mensaje ahora!
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — CTA card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--purple-dark)', boxShadow: 'var(--shadow-purple)' }}
          >
            <div className="p-8 md:p-10">
              <div
                className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-widest rounded-full px-3.5 py-2 mb-6"
                style={{ background: 'rgba(245,196,0,0.12)', border: '1px solid rgba(245,196,0,0.25)', color: 'var(--yellow)' }}
              >
                ✦ Cotización gratuita
              </div>
              <h3
                className="font-display font-800 mb-4 text-white"
                style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
              >
                ¿Listo para<br />
                <span style={{ color: 'var(--yellow)' }}>empezar hoy?</span>
              </h3>
              <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Obtén tu cotización gratis. Sin compromiso, sin presión.
                Te ayudamos a encontrar la mejor opción para ti y tu familia.
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/site/get-a-quote"
                  className="btn-primary-lg w-full justify-center pulse-yellow"
                >
                  Cotizar Gratis Ahora
                </Link>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="btn-ghost w-full justify-center"
                >
                  <Phone size={17} /> {BUSINESS.phone}
                </a>
              </div>

              {/* Mini trust row */}
              <div
                className="mt-8 pt-6 grid grid-cols-3 gap-2 text-center"
                style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
              >
                {[
                  { label: 'Licenciados', sub: 'en California' },
                  { label: 'Misma hora', sub: 'de respuesta' },
                  { label: 'Atención', sub: 'en español' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="font-display font-800 text-sm" style={{ color: 'var(--yellow)' }}>{item.label}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

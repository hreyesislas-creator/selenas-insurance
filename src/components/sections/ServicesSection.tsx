import Link from 'next/link'
import { Car, FileText, CreditCard, ClipboardList, BookOpen, Calculator, ArrowRight } from 'lucide-react'
import { BUSINESS } from '@/lib/utils'

const services = [
  {
    icon: Car,
    title: 'Seguro de Auto',
    spanish: 'Auto Insurance',
    description: 'Cobertura básica y completa desde $0 de enganche. Comparamos múltiples compañías para darte el mejor precio.',
    href: '/site/auto-insurance',
    accent: 'var(--yellow)',
    accentText: 'var(--purple-dark)',
    badge: 'Más solicitado',
    badgeBg: 'var(--red)',
  },
  {
    icon: FileText,
    title: 'SR22',
    spanish: 'SR22 Certificate',
    description: 'Certificado SR22 tramitado el mismo día. Lo enviamos directamente al DMV para que recuperes tu licencia.',
    href: '/landing/sr22-insurance',
    accent: 'var(--purple)',
    accentText: 'white',
    badge: null,
    badgeBg: null,
  },
  {
    icon: ClipboardList,
    title: 'Servicios DMV',
    spanish: 'DMV Services',
    description: 'Títulos, transferencias, registros y más — sin hacer filas. Manejamos tus trámites de principio a fin.',
    href: '/site/dmv-services',
    accent: 'var(--blue-ca)',
    accentText: 'white',
    badge: null,
    badgeBg: null,
  },
  {
    icon: CreditCard,
    title: 'Placas y Registro',
    spanish: 'Plates & Registration',
    description: 'Renueva tus placas y registro vehicular rápido. Sin esperar, sin complicaciones.',
    href: '/landing/plates-registration',
    accent: 'var(--yellow)',
    accentText: 'var(--purple-dark)',
    badge: null,
    badgeBg: null,
  },
  {
    icon: BookOpen,
    title: 'Notario Público',
    spanish: 'Notary Public',
    description: 'Poderes notariales, cartas de consentimiento, documentos legales certificados y más.',
    href: '/site/notary-tax',
    accent: 'var(--purple-light)',
    accentText: 'white',
    badge: null,
    badgeBg: null,
  },
  {
    icon: Calculator,
    title: 'Preparación de Taxes',
    spanish: 'Tax Preparation',
    description: 'Declaración de impuestos individuales y de negocios. ITIN disponible. Maximizamos tu reembolso.',
    href: '/site/notary-tax#taxes',
    accent: 'var(--red)',
    accentText: 'white',
    badge: null,
    badgeBg: null,
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: 'var(--white)' }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="section-label block mb-3">Lo que hacemos</span>
          <h2
            className="font-display font-800 mb-4"
            style={{
              fontSize: 'clamp(2rem,4vw,3rem)',
              color: 'var(--purple-dark)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}
          >
            Todo lo que necesitas,<br />
            en un solo lugar
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--gray-500)' }}>
            Seguros accesibles, trámites de DMV, notaría y taxes — atendidos por
            personas reales que hablan español.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative rounded-[20px] p-6 flex flex-col gap-4 overflow-hidden transition-all duration-200"
                style={{
                  background: 'white',
                  border: '1.5px solid rgba(30,13,64,0.07)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {/* Hover accent fill */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{ background: `${service.accent}06` }}
                />

                {/* Badge */}
                {service.badge && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-800 uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: service.badgeBg!, color: 'white' }}
                  >
                    {service.badge}
                  </span>
                )}

                {/* Icon container */}
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: service.accent }}
                >
                  <Icon size={20} style={{ color: service.accentText }} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <h3
                      className="font-display font-800 text-xl"
                      style={{ color: 'var(--purple-dark)', lineHeight: 1.1 }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-500)' }}>
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="flex items-center gap-1.5 font-700 text-sm transition-all duration-200 group-hover:gap-2.5"
                  style={{ color: service.accent === 'var(--yellow)' ? 'var(--yellow-deep)' : service.accent }}
                >
                  Más información
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ background: 'var(--yellow-light)', border: '2px solid rgba(245,196,0,0.30)' }}
        >
          <div>
            <p className="font-display font-800 text-xl" style={{ color: 'var(--purple-dark)' }}>
              ¿No ves lo que necesitas?
            </p>
            <p className="text-sm mt-0.5" style={{ color: 'var(--gray-700)' }}>
              Llámanos o mándanos WhatsApp — probablemente te podemos ayudar.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="btn-secondary shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  )
}

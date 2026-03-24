import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { BUSINESS, getWhatsAppUrl } from '@/lib/utils'

const WA_ICON = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

const services = [
  { href: '/auto-insurance', label: 'Seguro de Auto' },
  { href: '/landing/sr22-insurance', label: 'SR22' },
  { href: '/dmv-services', label: 'Servicios DMV' },
  { href: '/landing/plates-registration', label: 'Placas y Registro' },
  { href: '/notary-tax', label: 'Notario Público' },
  { href: '/notary-tax#taxes', label: 'Preparación de Taxes' },
]

const resources = [
  { href: '/landing/cheap-auto-insurance', label: 'Seguro de Auto Barato' },
  { href: '/landing/sr22-insurance', label: 'SR22 en California' },
  { href: '/landing/plates-registration', label: 'Renovar Placas' },
  { href: '/landing/dmv-near-you', label: 'DMV Cerca de Mí' },
  { href: '/get-a-quote', label: 'Obtener Cotización' },
]

export function Footer() {
  return (
    <footer style={{ background: 'var(--purple-ink)' }}>
      <div style={{ background: 'var(--purple-dark)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-800 text-white text-xl leading-none">
              ¿Tienes preguntas? Estamos aquí.
            </p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Lunes a viernes · Atención en español
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 font-display font-700 text-sm px-5 py-2.5 rounded-xl transition-all"
              style={{ background: 'var(--yellow)', color: 'var(--purple-dark)' }}
            >
              <Phone size={14} /> {BUSINESS.phone}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display font-700 text-sm px-5 py-2.5 rounded-xl transition-all text-white"
              style={{ background: '#22C55E' }}
            >
              <WA_ICON /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center mb-5">
            <Image
              src="/logo.png"
              alt="Selena's Insurance"
              width={190}
              height={60}
              className="h-auto w-[170px] sm:w-[180px] lg:w-[190px]"
            />
          </Link>

          <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Seguros accesibles y servicios de DMV con atención personalizada
            en español. Sirviendo al Inland Empire con orgullo.
          </p>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-700 text-sm text-white transition-colors"
            style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.25)' }}
          >
            <WA_ICON /> Escríbenos por WhatsApp
          </a>
        </div>

        <div>
          <h4 className="font-display font-700 text-sm uppercase tracking-widest mb-5" style={{ color: 'var(--yellow)' }}>
            Servicios
          </h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-sm font-500 transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.50)' }}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-700 text-sm uppercase tracking-widest mb-5" style={{ color: 'var(--yellow)' }}>
            Recursos
          </h4>
          <ul className="space-y-3">
            {resources.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="text-sm font-500 transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.50)' }}
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-700 text-sm uppercase tracking-widest mb-5" style={{ color: 'var(--yellow)' }}>
            Contacto
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-start gap-3 transition-colors group"
              >
                <Phone size={14} className="mt-0.5 shrink-0" style={{ color: 'var(--yellow)' }} />
                <span className="text-sm font-600 group-hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {BUSINESS.phone}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-start gap-3 transition-colors group"
              >
                <Mail size={14} className="mt-0.5 shrink-0" style={{ color: 'var(--yellow)' }} />
                <span className="text-sm group-hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {BUSINESS.email}
                </span>
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors group"
              >
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: 'var(--yellow)' }} />
                <span className="text-sm group-hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.60)' }}>
                  {BUSINESS.address}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={14} className="mt-0.5 shrink-0" style={{ color: 'var(--yellow)' }} />
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                {BUSINESS.hours}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Selena&apos;s Insurance. Todos los derechos reservados.
          </span>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.20)' }}>
            selenasinsurance.com · Moreno Valley, CA
          </span>
        </div>
      </div>
    </footer>
  )
}
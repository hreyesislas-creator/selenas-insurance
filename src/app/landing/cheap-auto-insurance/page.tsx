import type { Metadata } from 'next'
import { LandingHero } from '@/components/sections/LandingHero'
import { CTAStrip } from '@/components/sections/CTAStrip'

export const metadata: Metadata = {
  title: 'Seguro de Auto Barato en California — Selena\'s Insurance',
  description:
    'Seguro de auto barato en California desde $0 de enganche. Comparamos múltiples aseguradoras para encontrarte el mejor precio. Atención en español. Bakersfield, CA.',
}

const trustItems = [
  'Opciones desde $0 de enganche',
  'Comparamos múltiples compañías por ti',
  'Póliza activa el mismo día',
  'Sin penalidades por cancelación en muchos planes',
  'Atención 100% en español',
]

const faqs = [
  {
    q: '¿Cuánto cuesta el seguro mínimo en California?',
    a: 'El seguro mínimo requerido por California es cobertura de responsabilidad civil. El precio varía según tu vehículo, historial y código postal. Comparamos opciones para darte el precio más accesible disponible.',
  },
  {
    q: '¿Puedo obtener seguro si no tengo licencia de California?',
    a: 'Sí. Aceptamos matrícula consular, licencias de otros estados y otras formas de identificación. Contáctanos y revisamos qué opciones están disponibles para tu situación.',
  },
  {
    q: '¿Por qué es más barato con ustedes?',
    a: 'Comparamos múltiples aseguradoras en tiempo real. Trabajamos con diferentes compañías y encontramos la que ofrece el mejor precio para tu perfil específico — sin que tú tengas que llamar a varias empresas.',
  },
  {
    q: '¿Qué necesito para cotizar?',
    a: 'Solo tu nombre, teléfono y la información básica de tu vehículo (año, marca, modelo). ¡Es todo! Te damos una cotización rápida sin complicaciones.',
  },
]

export default function CheapAutoInsuranceLanding() {
  return (
    <>
      <LandingHero
        badge="🚗 Seguro Barato — California"
        headline={
          <>
            Seguro de Auto<br />
            <span style={{ color: 'var(--yellow)' }}>Barato</span> en<br />
            California
          </>
        }
        subheadline="Comparamos múltiples compañías de seguros para encontrarte el precio más accesible. Desde $0 de enganche. Póliza activa hoy mismo."
        trustItems={trustItems}
        sourcePage="landing-cheap-auto"
        landingPage="cheap-auto-insurance"
        bgColor="var(--purple-dark)"
      />

      {/* ── Why cheaper ── */}
      <section className="py-20" style={{ background: 'var(--white)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">¿Cómo ahorramos?</span>
            <h2
              className="font-display font-800"
              style={{ fontSize: 'clamp(1.875rem,3.5vw,2.75rem)', color: 'var(--purple-dark)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
            >
              Por qué somos más accesibles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🔄', title: 'Comparamos por ti', desc: 'Revisamos múltiples compañías y te traemos el mejor precio sin que tengas que llamar a nadie más.' },
              { emoji: '🤝', title: 'Relación directa', desc: 'Trabajamos directamente con aseguradoras para elimininar intermediarios y reducir tu costo.' },
              { emoji: '💳', title: 'Planes flexibles', desc: 'Opciones de pago mensual diseñadas para distintos presupuestos. Sin compromiso a largo plazo.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 text-center"
                style={{ background: 'var(--off-white)', border: '1.5px solid rgba(30,13,64,0.06)' }}
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-display font-700 text-xl mb-2" style={{ color: 'var(--purple-dark)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-500)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16" style={{ background: 'var(--off-white)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="font-display font-800 text-center mb-8"
            style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: 'var(--purple-dark)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
          >
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl p-6"
                style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)', boxShadow: 'var(--shadow-card)' }}
              >
                <h3 className="font-display font-700 text-base mb-2" style={{ color: 'var(--purple-dark)' }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-500)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title="¿Listo para ahorrar en tu seguro?" subtitle="Cotiza gratis y empieza a ahorrar desde el primer mes." />
    </>
  )
}

import type { Metadata } from 'next'
import { LandingHero } from '@/components/sections/LandingHero'
import { CTAStrip } from '@/components/sections/CTAStrip'

export const metadata: Metadata = {
  title: 'Placas y Registro en California — Selena\'s Insurance | Sin Filas',
  description:
    'Renueva tus placas y registro vehicular en California sin hacer filas. Rápido, conveniente y en español. Moreno Valley, CA.',
}

const trustItems = [
  'Sin hacer fila en el DMV',
  'Atendemos en nuestra oficina en Moreno Valley',
  'Renovamos el mismo día en muchos casos',
  'Aceptamos múltiples formas de pago',
  'Atención en español',
]

const services = [
  { emoji: '🪪', title: 'Renovación de placas', desc: 'Renueva las placas de tu vehículo sin complicaciones ni filas en el DMV.' },
  { emoji: '📋', title: 'Registro vehicular', desc: 'Trámites de registro para vehículos nuevos, usados o importados.' },
  { emoji: '🔄', title: 'Transferencia de título', desc: 'Cambio de propietario entre personas o concesionarios de forma rápida.' },
  { emoji: '📄', title: 'Duplicado de título', desc: '¿Perdiste tu título? Te ayudamos a obtener un duplicado del DMV.' },
  { emoji: '✏️', title: 'Cambio de nombre / dirección', desc: 'Actualiza tus datos en el registro del DMV de California.' },
  { emoji: '🔎', title: 'VIN Verification', desc: 'Verificación del número de identificación vehicular para trámites especiales.' },
]

export default function PlatesRegistrationLanding() {
  return (
    <>
      <LandingHero
        badge="🪪 Placas y Registro — California"
        headline={
          <>
            Renueva tus Placas<br />
            <span style={{ color: 'var(--yellow)' }}>Sin Hacer Fila</span><br />
            en el DMV
          </>
        }
        subheadline="Tramitamos tu renovación de placas y registro vehicular en California sin que tengas que ir al DMV. Rápido, conveniente y en español."
        trustItems={trustItems}
        sourcePage="landing-plates"
        landingPage="plates-registration"
        bgColor="var(--purple-dark)"
      />

      {/* ── Services ── */}
      <section className="py-20" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">Trámites disponibles</span>
            <h2
              className="font-display font-800"
              style={{ fontSize: 'clamp(1.875rem,3.5vw,2.75rem)', color: 'var(--purple-dark)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
            >
              Manejamos todos<br />tus trámites vehiculares
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ background: 'var(--off-white)', border: '1.5px solid rgba(30,13,64,0.06)' }}
              >
                <span className="text-3xl">{s.emoji}</span>
                <h3 className="font-display font-700 text-lg" style={{ color: 'var(--purple-dark)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-500)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="py-16" style={{ background: 'var(--off-white)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '⏱️', title: 'Ahorra tiempo', desc: 'Sin hacer cola en el DMV. Nosotros gestionamos todo por ti.' },
              { emoji: '🗣️', title: 'En español', desc: 'Te explicamos cada paso del proceso en tu idioma.' },
              { emoji: '💰', title: 'Precios claros', desc: 'Tarifas justas y transparentes. Sin cargos escondidos.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 text-center"
                style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-display font-700 text-xl mb-2" style={{ color: 'var(--purple-dark)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--gray-500)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title="¿Necesitas renovar tus placas?" subtitle="Contáctanos hoy y lo hacemos por ti — sin filas." />
    </>
  )
}

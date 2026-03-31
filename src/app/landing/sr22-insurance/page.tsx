import type { Metadata } from 'next'
import { LandingHero } from '@/components/sections/LandingHero'
import { CTAStrip } from '@/components/sections/CTAStrip'

export const metadata: Metadata = {
  title: 'SR22 en California el Mismo Día — Selena\'s Insurance',
  description:
    '¿Licencia suspendida? Tramitamos tu SR22 en California el mismo día y lo enviamos directamente al DMV. Rápido, accesible, atención en español. Bakersfield, CA.',
}

const trustItems = [
  'SR22 procesado y enviado al DMV el mismo día',
  'Enviamos electrónicamente — sin papeleo lento',
  'Opciones para licencias suspendidas',
  'Sin historial perfecto requerido',
  'Atención en español — sin términos complicados',
]

const faqs = [
  {
    q: '¿Qué es exactamente el SR22?',
    a: 'El SR22 no es un seguro por sí solo — es un certificado que adjuntamos a tu póliza y que prueba al DMV de California que tienes seguro activo. Generalmente se requiere si tu licencia fue suspendida, tuviste un accidente sin seguro, acumulaste infracciones o el tribunal lo ordenó.',
  },
  {
    q: '¿Cuánto tiempo tarda en tramitarse?',
    a: 'Procesamos el SR22 y lo enviamos electrónicamente al DMV el mismo día que activas tu póliza, durante nuestro horario de atención. En la mayoría de casos el DMV recibe la confirmación en pocas horas.',
  },
  {
    q: '¿Cuánto tiempo necesito mantener el SR22?',
    a: 'En California generalmente se requiere por 3 años continuos. Si cancelas tu seguro durante ese período, la aseguradora notifica automáticamente al DMV y tu licencia puede ser suspendida de nuevo. Es importante mantener tu póliza activa.',
  },
  {
    q: '¿Puedo obtener SR22 sin vehículo propio?',
    a: 'Sí. El "Non-Owner SR22" es para personas que necesitan el certificado pero no tienen vehículo. Es más económico y te permite conducir vehículos de terceros con cobertura.',
  },
  {
    q: '¿Cuánto cuesta el SR22?',
    a: 'La presentación del SR22 cuesta entre $15–$35. El costo principal es el seguro adjunto. Comparamos opciones para darte el precio más accesible según tu situación.',
  },
]

export default function SR22LandingPage() {
  return (
    <>
      <LandingHero
        badge="📄 SR22 California — Urgente"
        headline={
          <>
            SR22 Tramitado<br />
            <span style={{ color: 'var(--yellow)' }}>el Mismo Día</span><br />
            en California
          </>
        }
        subheadline="¿Licencia suspendida o necesitas SR22 urgente? Lo tramitamos y enviamos al DMV de California hoy mismo. Rápido, accesible y en español."
        trustItems={trustItems}
        sourcePage="landing-sr22"
        landingPage="sr22-insurance"
        bgColor="var(--blue-ca)"
      />

      {/* ── When you need SR22 ── */}
      <section className="py-20" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-3">¿Cuándo lo necesitas?</span>
              <h2
                className="font-display font-800 mb-6"
                style={{ fontSize: 'clamp(1.875rem,3.5vw,2.75rem)', color: 'var(--purple-dark)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
              >
                Situaciones que<br />requieren SR22
              </h2>
              <div className="space-y-3">
                {[
                  'Conducir sin seguro activo',
                  'Licencia suspendida o revocada',
                  'Accidente con daños graves',
                  'Infracción por DUI / DWI',
                  'Acumulación de puntos en la licencia',
                  'Orden judicial que lo requiere',
                  'Primera infracción grave de tráfico',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl p-4"
                    style={{ background: 'var(--off-white)', border: '1.5px solid rgba(30,13,64,0.06)' }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'var(--yellow)' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--purple-dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="text-sm font-600" style={{ color: 'var(--gray-700)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--blue-ca)', boxShadow: 'var(--shadow-purple)' }}
            >
              <div className="p-8">
                <h3
                  className="font-display font-800 text-white mb-6"
                  style={{ fontSize: '1.875rem', lineHeight: 1.05, letterSpacing: '-0.02em' }}
                >
                  Proceso<br />
                  <span style={{ color: 'var(--yellow)' }}>en 4 pasos</span>
                </h3>
                <div className="space-y-5">
                  {[
                    { n: '01', title: 'Contáctanos', desc: 'Llama, WhatsApp o llena el formulario.' },
                    { n: '02', title: 'Te cotizamos', desc: 'Buscamos la opción más accesible para ti.' },
                    { n: '03', title: 'Activas tu póliza', desc: 'Primer pago y queda activa de inmediato.' },
                    { n: '04', title: 'Enviamos al DMV', desc: 'Lo mandamos electrónicamente hoy mismo.' },
                  ].map((step) => (
                    <div key={step.n} className="flex items-start gap-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-display font-800 text-sm"
                        style={{ background: 'var(--yellow)', color: 'var(--purple-dark)' }}
                      >
                        {step.n}
                      </div>
                      <div>
                        <div className="font-display font-700 text-white text-base">{step.title}</div>
                        <div className="text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: 'var(--off-white)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-label block mb-3">Preguntas frecuentes</span>
            <h2
              className="font-display font-800"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', color: 'var(--purple-dark)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
            >
              Todo sobre el SR22
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl p-6"
                style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)', boxShadow: 'var(--shadow-card)' }}
              >
                <h3 className="font-display font-700 text-base mb-2" style={{ color: 'var(--purple-dark)' }}>
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-500)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title="¿Necesitas SR22 hoy mismo?" subtitle="Contáctanos y lo tramitamos el mismo día. Sin esperas." />
    </>
  )
}

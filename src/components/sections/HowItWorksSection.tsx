import Link from 'next/link'

const steps = [
  {
    number: '01',
    emoji: '📋',
    title: 'Cuéntanos lo que necesitas',
    description: 'Llena el formulario, llámanos o mándanos WhatsApp. Solo 2 minutos. Sin papeles, sin complicaciones.',
  },
  {
    number: '02',
    emoji: '🔍',
    title: 'Revisamos tu caso',
    description: 'Nuestro equipo revisa tu información y busca las mejores opciones disponibles para tu situación y presupuesto.',
  },
  {
    number: '03',
    emoji: '📞',
    title: 'Te contactamos rápido',
    description: 'Te llamamos, mandamos texto o WhatsApp con tu cotización personalizada. Sin presión, sin letra pequeña.',
  },
  {
    number: '04',
    emoji: '✅',
    title: '¡Listo para avanzar!',
    description: 'Eliges tu opción y te ayudamos a completar todo el proceso para que quedes cubierto hoy mismo.',
  },
]

export function HowItWorksSection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'var(--purple-dark)' }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'var(--yellow)' }} />

      {/* Background subtle texture */}
      <div className="absolute inset-0 stripe-pattern" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(115,64,176,0.25) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label-white block mb-3">El proceso</span>
          <h2
            className="font-display font-800 text-white mb-4"
            style={{
              fontSize: 'clamp(1.875rem,4vw,3rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}
          >
            Obtener ayuda es<br />
            <span style={{ color: 'var(--yellow)' }}>más fácil de lo que crees</span>
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Sin citas. Sin esperas. Sin confusión. Así de simple.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector — desktop only */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] right-[-50%] h-px"
                  style={{ borderTop: '2px dashed rgba(245,196,0,0.25)', zIndex: 0 }}
                />
              )}

              <div
                className="relative z-10 rounded-2xl p-6 flex flex-col gap-4 h-full"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Step badge + emoji */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'var(--yellow)' }}
                  >
                    <span
                      className="font-display font-800 text-sm"
                      style={{ color: 'var(--purple-dark)' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <span className="text-2xl">{step.emoji}</span>
                </div>

                <div>
                  <h3
                    className="font-display font-700 text-lg text-white mb-2 leading-snug"
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.60)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/get-a-quote"
            className="btn-primary-lg pulse-yellow inline-flex"
          >
            Comenzar Ahora — Es Completamente Gratis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
            Sin compromiso · Sin costo · Respuesta el mismo día
          </p>
        </div>
      </div>
    </section>
  )
}

const reasons = [
  {
    emoji: '⚡',
    stat: '<1hr',
    title: 'Respuesta Rapidísima',
    description: 'Te contactamos dentro de la primera hora durante nuestro horario de atención. Sin esperas interminables.',
  },
  {
    emoji: '💸',
    stat: '$0',
    title: 'Pago Inicial Bajo',
    description: 'Opciones desde cero de enganche. Planes de pago mensuales diseñados para caber en tu presupuesto real.',
  },
  {
    emoji: '🗣️',
    stat: '100%',
    title: 'Atención en Español',
    description: 'Todo nuestro equipo habla español. Te explicamos cada detalle en tu idioma, sin términos complicados.',
  },
  {
    emoji: '📍',
    stat: '+10',
    title: 'Servicio Local y Personal',
    description: 'Somos parte de la comunidad del Inland Empire. Nos importa tu familia, no solo tu póliza.',
  },
  {
    emoji: '🏆',
    stat: '6+',
    title: 'Todo en un Solo Lugar',
    description: 'Auto, SR22, DMV, placas, notario, taxes. No necesitas ir a ningún otro lado.',
  },
  {
    emoji: '🔒',
    stat: 'CA',
    title: 'Licenciados y Confiables',
    description: 'Agentes licenciados en California con años de experiencia ayudando a conductores como tú.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'white' }}>
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 90% 50%, rgba(245,196,0,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — headline + statement */}
          <div>
            <span className="section-label block mb-3">¿Por qué Selena&apos;s?</span>
            <h2
              className="font-display font-800 mb-6"
              style={{
                fontSize: 'clamp(2rem,4vw,3.25rem)',
                color: 'var(--purple-dark)',
                lineHeight: 1.0,
                letterSpacing: '-0.025em',
              }}
            >
              Más que un seguro —<br />
              <span style={{ color: 'var(--yellow-deep)' }}>alguien de confianza</span><br />
              en tu comunidad
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--gray-500)' }}>
              Llevamos años ayudando a familias del Inland Empire a encontrar seguros
              accesibles y resolver trámites complicados. Hablamos tu idioma, conocemos
              tu situación y trabajamos para ti — no para las aseguradoras.
            </p>

            {/* Feature callout */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'var(--purple-dark)',
                boxShadow: 'var(--shadow-purple)',
              }}
            >
              <p
                className="font-display font-700 text-lg leading-snug mb-3"
                style={{ color: 'white' }}
              >
                &ldquo;Ayuda rápida, precios accesibles y atención personalizada en español — en un solo lugar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-display font-800 text-sm"
                  style={{ background: 'var(--yellow)', color: 'var(--purple-dark)' }}
                >
                  S
                </div>
                <div>
                  <div className="text-sm font-700 text-white">Selena&apos;s Insurance</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.50)' }}>Bakersfield, CA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map(({ emoji, stat, title, description }) => (
              <div
                key={title}
                className="rounded-2xl p-5 flex flex-col gap-3 group transition-all duration-200"
                style={{
                  border: '1.5px solid rgba(30,13,64,0.07)',
                  background: 'var(--off-white)',
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-3xl">{emoji}</span>
                  <span
                    className="font-display font-800 text-xl leading-none text-right"
                    style={{ color: 'var(--yellow-deep)' }}
                  >
                    {stat}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-display font-700 text-base mb-1.5 leading-tight"
                    style={{ color: 'var(--purple-dark)' }}
                  >
                    {title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--gray-500)' }}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

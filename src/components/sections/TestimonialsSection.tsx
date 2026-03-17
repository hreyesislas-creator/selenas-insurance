import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'María G.',
    location: 'Moreno Valley, CA',
    since: 'Cliente desde 2022',
    avatar: 'MG',
    text: 'Excelente servicio. Me ayudaron a conseguir mi seguro el mismo día y a un precio que nunca pensé que podría encontrar. Muy atentos, siempre en español, y sin complicaciones. 100% recomendados.',
    rating: 5,
    service: 'Seguro de Auto',
    serviceEmoji: '🚗',
  },
  {
    name: 'Carlos R.',
    location: 'Riverside, CA',
    since: 'Cliente desde 2021',
    avatar: 'CR',
    text: 'Necesitaba mi SR22 urgente y Selena\'s me lo tramitaron en menos de una hora. Sin preguntas difíciles, rápido y profesional. Recuperé mi licencia sin problemas.',
    rating: 5,
    service: 'SR22',
    serviceEmoji: '📄',
  },
  {
    name: 'Ana L.',
    location: 'Perris, CA',
    since: 'Cliente desde 2023',
    avatar: 'AL',
    text: 'Vine a renovar mis placas y me atendieron súper bien. También me ayudaron con mis taxes. Es muy conveniente tener todo en un solo lugar y que hablen español.',
    rating: 5,
    service: 'Placas + Taxes',
    serviceEmoji: '🪪',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="var(--yellow)" color="var(--yellow)" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24" style={{ background: 'var(--off-white)' }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <span className="section-label block mb-3">Reseñas de clientes</span>
            <h2
              className="font-display font-800"
              style={{
                fontSize: 'clamp(2rem,4vw,3rem)',
                color: 'var(--purple-dark)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              Lo que dicen<br />nuestros clientes
            </h2>
          </div>
          <div className="flex items-center gap-4 lg:justify-end">
            <div
              className="rounded-2xl px-5 py-4 text-center"
              style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)', boxShadow: 'var(--shadow-card)' }}
            >
              <div className="font-display font-800 text-3xl" style={{ color: 'var(--purple-dark)' }}>5.0</div>
              <Stars count={5} />
              <div className="text-xs mt-1 font-600" style={{ color: 'var(--gray-500)' }}>Google Reviews</div>
            </div>
            <div
              className="rounded-2xl px-5 py-4 text-center"
              style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)', boxShadow: 'var(--shadow-card)' }}
            >
              <div className="font-display font-800 text-3xl" style={{ color: 'var(--purple-dark)' }}>200+</div>
              <div className="text-xs mt-1 font-600" style={{ color: 'var(--gray-500)' }}>Clientes felices</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 flex flex-col gap-5"
              style={{
                background: 'white',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid rgba(30,13,64,0.05)',
              }}
            >
              {/* Top: rating + service badge */}
              <div className="flex items-start justify-between">
                <Stars count={t.rating} />
                <span
                  className="text-[10px] font-800 uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    background: 'var(--yellow-light)',
                    color: 'var(--yellow-deep)',
                    border: '1px solid rgba(245,196,0,0.30)',
                  }}
                >
                  {t.serviceEmoji} {t.service}
                </span>
              </div>

              {/* Quote text */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: 'var(--gray-700)' }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-4"
                style={{ borderTop: '1px solid var(--gray-100)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-800 text-sm shrink-0"
                  style={{ background: 'var(--purple)', color: 'white' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-700 text-sm" style={{ color: 'var(--gray-900)' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: 'var(--gray-300)' }}>{t.location} · {t.since}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-6" style={{ color: 'var(--gray-300)' }}>
          * Testimonios representativos. Reemplazar con reseñas reales de clientes verificados.
        </p>
      </div>
    </section>
  )
}

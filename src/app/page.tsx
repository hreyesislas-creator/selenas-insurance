import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyChooseSection } from '@/components/sections/WhyChooseSection'
import { SpotlightSection } from '@/components/sections/SpotlightSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTAStrip } from '@/components/sections/CTAStrip'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { LeadForm } from '@/components/forms/LeadForm'
import { BUSINESS } from '@/lib/utils'
import SiteShell from '@/components/layout/SiteShell'


export const metadata: Metadata = {
  title: "Selena's Insurance — Seguros de Auto y Servicios DMV en Bakersfield, CA",
  description:
    'Seguros de auto accesibles desde $0 de enganche, SR22, servicios de DMV, placas, notario y taxes. Atención en español. Bakersfield, CA. ¡Cotiza gratis hoy!',
}

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />

      {/* ── Inline quote form section ── */}
      <section
        id="cotizar"
        className="py-20 md:py-24"
        style={{ background: 'var(--off-white)' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — headline + proof */}
            <div>
              <span className="section-label block mb-3">Cotización gratis</span>
              <h2
                className="font-display font-800 mb-5"
                style={{
                  fontSize: 'clamp(2rem,4vw,3rem)',
                  color: 'var(--purple-dark)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.025em',
                }}
              >
                Obtén tu cotización<br />
                <span style={{ color: 'var(--yellow-deep)' }}>en 2 minutos</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--gray-500)' }}>
                Sin visitar nuestra oficina. Sin costo. Sin presión.
                Solo completa el formulario y te contactamos con tu cotización personalizada.
              </p>

              {/* Social proof numbers */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { number: '200+', label: 'Clientes felices' },
                  { number: '$0', label: 'Costo de cotización' },
                  { number: '<1hr', label: 'Tiempo de respuesta' },
                ].map(({ number, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl p-4 text-center"
                    style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)' }}
                  >
                    <div className="font-display font-800 text-2xl" style={{ color: 'var(--purple-dark)' }}>
                      {number}
                    </div>
                    <div className="text-xs font-600 mt-0.5" style={{ color: 'var(--gray-500)' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call CTA */}
              <div
                className="rounded-2xl p-5 flex items-center gap-4"
                style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl"
                  style={{ background: 'var(--yellow-light)' }}
                >
                  📞
                </div>
                <div>
                  <p className="font-700 text-sm" style={{ color: 'var(--gray-700)' }}>
                    ¿Prefieres llamar directamente?
                  </p>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="font-display font-800 text-lg leading-none"
                    style={{ color: 'var(--purple-dark)' }}
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(30,13,64,0.14)', border: '1px solid rgba(30,13,64,0.06)' }}
            >
              <div className="px-6 py-4" style={{ background: 'var(--yellow)' }}>
                <h3 className="font-display font-800 text-lg" style={{ color: 'var(--purple-dark)' }}>
                  Solicitud de Cotización
                </h3>
                <p className="text-xs font-600 mt-0.5" style={{ color: 'rgba(50,22,92,0.65)' }}>
                  Todos los servicios · Respuesta el mismo día
                </p>
              </div>
              <div className="p-6 bg-white">
                <LeadForm sourcePage="homepage-inline-form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SpotlightSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTAStrip />
      <FAQSection />
      <ContactSection />
    </SiteShell>
  )
}

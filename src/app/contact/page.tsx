import type { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'
import { CTAStrip } from '@/components/sections/CTAStrip'
import SiteShell from '@/components/layout/SiteShell'


export const metadata: Metadata = {
  title: 'Contacto — Selena\'s Insurance',
  description:
    'Visítanos en Bakersfield, CA o contáctanos por teléfono, WhatsApp o email. Atención en español.',
}

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="bg-brand-purple py-12 relative">
        <div className="h-2 bg-brand-yellow absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="font-display font-800 text-5xl md:text-6xl mb-3">Contáctanos</h1>
          <p className="text-white/70 text-xl">
            Estamos aquí para ayudarte. Llámanos, escríbenos o visítanos.
          </p>
        </div>
      </section>

      <ContactSection />
      <CTAStrip />
    </SiteShell>
  )
}

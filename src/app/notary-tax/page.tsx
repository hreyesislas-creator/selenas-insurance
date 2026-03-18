import type { Metadata } from 'next'
import Link from 'next/link'
import { LeadForm } from '@/components/forms/LeadForm'
import { CTAStrip } from '@/components/sections/CTAStrip'
import SiteShell from '@/components/layout/SiteShell'


export const metadata: Metadata = {
  title: 'Notario Público y Preparación de Taxes — Selena\'s Insurance',
  description:
    'Servicios de notaría pública y preparación de impuestos en Moreno Valley. ITIN disponible. Atención en español.',
}

const notaryServices = [
  'Poderes notariales (Power of Attorney)',
  'Cartas de consentimiento para menores',
  'Documentos de bienes raíces',
  'Affidavits y declaraciones',
  'Documentos de inmigración',
  'Contratos y acuerdos',
  'Certificación de documentos',
  'Otros documentos legales',
]

const taxServices = [
  'Declaración de impuestos individuales (Form 1040)',
  'Declaración para trabajadores por cuenta propia',
  'ITIN (Individual Taxpayer Identification Number)',
  'Declaraciones de años anteriores',
  'Taxes para pequeños negocios',
  'Enmiendas de declaraciones',
  'Preparación de W-7',
  'Consultas sobre reembolsos',
]

export default function NotaryTaxPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="bg-brand-purple py-16 md:py-20 relative">
        <div className="h-2 bg-brand-yellow absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow rounded-full px-4 py-1.5 text-sm font-600 mb-5">
                ✍️ Notario y Taxes
              </div>
              <h1 className="font-display font-800 text-5xl md:text-6xl text-white leading-none mb-4">
                Notario y Taxes<br />
                <span className="text-brand-yellow">en Español</span>
              </h1>
              <p className="text-white/75 text-xl leading-relaxed mb-6">
                Documentos notariados y preparación de impuestos con atención personal en español.
                ITIN disponible.
              </p>
              <Link href="#cotizar" className="btn-primary text-lg px-7 py-4">
                Solicitar Servicio
              </Link>
            </div>

            <div id="cotizar" className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="font-display font-700 text-brand-purple text-xl mb-1">Solicitar Servicio</h2>
              <p className="text-gray-500 text-sm mb-5">Te contactamos con los detalles.</p>
              <LeadForm sourcePage="notary-tax-page" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Notary */}
            <div>
              <div className="yellow-line mb-4" />
              <div className="text-4xl mb-3">✍️</div>
              <h2 className="section-title mb-4">Notario Público</h2>
              <p className="text-gray-600 mb-6">
                Ofrecemos servicios de notaría pública para documentos legales. Atendemos en persona en nuestra oficina.
              </p>
              <ul className="space-y-2">
                {notaryServices.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Taxes */}
            <div id="taxes">
              <div className="yellow-line mb-4" />
              <div className="text-4xl mb-3">🧾</div>
              <h2 className="section-title mb-4">Preparación de Taxes</h2>
              <p className="text-gray-600 mb-6">
                Preparamos tu declaración de impuestos de forma correcta y maximizando tu reembolso. ITIN disponible.
              </p>
              <ul className="space-y-2">
                {taxServices.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip title="¿Necesitas notario o preparar tus taxes?" subtitle="Llámanos o mándanos WhatsApp — te atendemos en español." />
    </SiteShell>
  )
}

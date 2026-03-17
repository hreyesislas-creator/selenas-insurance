import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { CTAStrip } from '@/components/sections/CTAStrip'
import { BUSINESS } from '@/lib/utils'
import SiteShell from '@/components/layout/SiteShell'


export const metadata: Metadata = {
  title: 'Servicios de DMV — Selena\'s Insurance',
  description:
    'Trámites de DMV sin hacer filas. Títulos, transferencias, registro, placas y más. Atención en español. Moreno Valley, CA.',
}

const dmvServices = [
  { emoji: '🪪', title: 'Renovación de Placas', desc: 'Renovamos tus placas de California rápido y sin complicaciones.' },
  { emoji: '📋', title: 'Transferencia de Título', desc: 'Transferencia de título entre particulares o concesionarios.' },
  { emoji: '🚗', title: 'Registro de Vehículo Nuevo', desc: 'Registro inicial para vehículos nuevos o importados.' },
  { emoji: '📄', title: 'Duplicado de Título', desc: '¿Perdiste tu título? Te ayudamos a obtener un duplicado.' },
  { emoji: '✏️', title: 'Cambio de Nombre / Dirección', desc: 'Actualización de información en el DMV de California.' },
  { emoji: '🔎', title: 'VIN Verification', desc: 'Verificación del número de identificación vehicular.' },
  { emoji: '🏍️', title: 'Motocicletas', desc: 'Registro y trámites para motos y otros vehículos de motor.' },
  { emoji: '📝', title: 'Otros Trámites DMV', desc: '¿Necesitas otro trámite? Pregúntanos — probablemente te ayudamos.' },
]

export default function DMVServicesPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-20 relative overflow-hidden">
        <div className="h-2 bg-brand-yellow absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow rounded-full px-4 py-1.5 text-sm font-600 mb-5">
                🏛️ Servicios DMV
              </div>
              <h1 className="font-display font-800 text-5xl md:text-6xl text-white mb-4 leading-none">
                Trámites DMV<br />
                <span className="text-brand-yellow">Sin Hacer Fila</span>
              </h1>
              <p className="text-white/75 text-xl mb-6 leading-relaxed">
                Nos encargamos de tus trámites del DMV. Placas, títulos, transferencias, registros y más — rápido y en español.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#cotizar" className="btn-primary text-lg px-7 py-4 text-center">
                  Solicitar Servicio
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-600 text-lg px-7 py-4 rounded-xl transition-colors">
                  <Phone size={18} /> {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div id="cotizar" className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="font-display font-700 text-brand-purple text-xl mb-1">Solicitar Servicio DMV</h2>
              <p className="text-gray-500 text-sm mb-5">Te contactamos para darte todos los detalles.</p>
              <LeadForm sourcePage="dmv-services-page" />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-brand-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="yellow-line mx-auto mb-4" />
            <h2 className="section-title mb-3">Trámites que Realizamos</h2>
            <p className="text-gray-600 text-lg">Sin filas, sin esperas. Nosotros lo hacemos por ti.</p>
          </div>

          <div id="plates" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dmvServices.map((s) => (
              <div key={s.title} className="card text-center hover:border-brand-yellow hover:border-2">
                <div className="text-4xl mb-3">{s.emoji}</div>
                <h3 className="font-display font-700 text-brand-purple text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="yellow-line mx-auto mb-4" />
          <h2 className="section-title mb-6">¿Por qué tramitar con nosotros?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: '⏱️', title: 'Ahorra Tiempo', desc: 'Sin hacer cola en el DMV. Nosotros esperamos por ti.' },
              { emoji: '🗣️', title: 'En Español', desc: 'Te explicamos todo claramente en tu idioma.' },
              { emoji: '💰', title: 'Precios Justos', desc: 'Tarifas transparentes sin cargos escondidos.' },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-display font-700 text-brand-purple text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title="¿Necesitas un trámite de DMV?" subtitle="Contáctanos hoy y lo resolvemos rápido." />
    </SiteShell>
  )
}

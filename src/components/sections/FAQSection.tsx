'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn, BUSINESS, getWhatsAppUrl } from '@/lib/utils'

const faqs = [
  {
    q: '¿Cuánto cuesta un seguro de auto en California?',
    a: 'El precio depende del vehículo, tu historial de manejo, dónde vives y la cobertura que elijas. En Selena\'s Insurance comparamos múltiples compañías para encontrarte el precio más accesible, con opciones desde $0 de enganche. ¡Cotiza gratis hoy y ve cuánto puedes ahorrar!',
  },
  {
    q: '¿Qué es el SR22 y cómo lo obtengo?',
    a: 'El SR22 es un certificado de responsabilidad financiera que el DMV de California requiere en situaciones como licencia suspendida, accidentes sin seguro, o ciertas infracciones. No es un seguro — es un documento que va adjunto a tu póliza. Lo tramitamos y enviamos al DMV el mismo día que lo solicitas.',
  },
  {
    q: '¿Necesito licencia de California para asegurar mi carro?',
    a: 'No necesariamente. Existen opciones de seguro para conductores con matrícula consular, licencia de otro estado o sin licencia local. Contáctanos y revisamos tu situación para encontrar la mejor solución.',
  },
  {
    q: '¿Puedo renovar mis placas sin ir al DMV?',
    a: 'Sí. Nosotros manejamos la renovación de placas y registro vehicular sin que hagas fila en el DMV. Es rápido, conveniente y lo hacemos desde nuestra oficina en Moreno Valley.',
  },
  {
    q: '¿Cuánto tiempo tarda en activarse mi seguro?',
    a: 'En muchos casos podemos activar tu póliza el mismo día. Una vez que completas tu solicitud y primer pago, recibes tu tarjeta de seguro de inmediato — ya sea en papel o digital.',
  },
  {
    q: '¿Ofrecen atención completamente en español?',
    a: '¡Absolutamente! Todo nuestro equipo habla español. Puedes comunicarte por teléfono, WhatsApp, texto o en persona. Te explicamos todo en tu idioma, sin términos complicados.',
  },
  {
    q: '¿Qué documentos necesito para cotizar?',
    a: 'Para comenzar solo necesitas: tu identificación (licencia, matrícula consular o pasaporte) y la información de tu vehículo (año, marca, modelo). Para registrar el seguro, podríamos pedir documentos adicionales dependiendo del tipo de cobertura.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        border: isOpen ? '1.5px solid rgba(245,196,0,0.40)' : '1.5px solid rgba(30,13,64,0.07)',
        background: isOpen ? 'var(--yellow-light)' : 'white',
        boxShadow: isOpen ? '0 4px 20px rgba(245,196,0,0.12)' : 'var(--shadow-card)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span
          className="font-display font-700 text-base leading-snug"
          style={{ color: 'var(--purple-dark)' }}
        >
          {q}
        </span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
          style={{
            background: isOpen ? 'var(--yellow)' : 'var(--off-white)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
          }}
        >
          <Plus size={16} style={{ color: isOpen ? 'var(--purple-dark)' : 'var(--gray-500)' }} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 animate-fade-in">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-700)' }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-24" style={{ background: 'white' }}>
      <div className="max-w-5xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Left sticky header */}
          <div className="lg:sticky lg:top-28 self-start">
            <span className="section-label block mb-3">Preguntas frecuentes</span>
            <h2
              className="font-display font-800 mb-5"
              style={{
                fontSize: 'clamp(1.75rem,3.5vw,2.5rem)',
                color: 'var(--purple-dark)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Resolvemos<br />tus dudas
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--gray-500)' }}>
              ¿Tienes una pregunta que no ves aquí? Contáctanos — respondemos en minutos.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-secondary text-sm justify-center"
                style={{ padding: '12px 20px', borderRadius: 'var(--radius-md)' }}
              >
                Llamar ahora
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm justify-center"
                style={{ padding: '12px 20px', borderRadius: 'var(--radius-md)' }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — FAQ accordion */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

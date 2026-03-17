import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, Phone, ArrowRight } from 'lucide-react'
import { LeadForm } from '@/components/forms/LeadForm'
import { CTAStrip } from '@/components/sections/CTAStrip'
import { FAQSection } from '@/components/sections/FAQSection'
import { BUSINESS } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Seguro de Auto — Selena\'s Insurance | Moreno Valley, CA',
  description:
    'Seguro de auto accesible en California desde $0 de enganche. Cobertura básica y completa. SR22 disponible. Póliza activa el mismo día. Atención en español.',
}

const coverageTypes = [
  {
    emoji: '🛡️',
    name: 'Responsabilidad Civil',
    tag: 'Requerido por CA',
    tagColor: 'var(--red)',
    desc: 'La cobertura mínima exigida por California. Cubre daños a terceros — personas y propiedad — en caso de accidente.',
  },
  {
    emoji: '🚗',
    name: 'Cobertura Completa',
    tag: 'Más popular',
    tagColor: 'var(--purple)',
    desc: 'Cubre tu vehículo y a terceros. Ideal si tu auto tiene valor alto o tiene pagos pendientes.',
  },
  {
    emoji: '📄',
    name: 'SR22',
    tag: 'Mismo día',
    tagColor: 'var(--blue-ca)',
    desc: 'Certificado de responsabilidad financiera para licencias suspendidas o situaciones especiales. Lo enviamos al DMV hoy.',
  },
  {
    emoji: '👤',
    name: 'Non-Owner / Sin Vehículo',
    tag: null,
    tagColor: null,
    desc: 'Para conductores que no tienen vehículo propio pero necesitan cobertura o mantener su licencia activa.',
  },
]

const benefits = [
  'Desde $0 de enganche',
  'Póliza activa el mismo día',
  'SR22 disponible inmediatamente',
  'Aceptamos múltiples formas de pago',
  'Atención 100% en español',
  'Sin penalidades por cancelación en muchos planes',
  'Comparamos múltiples compañías por ti',
  'Agentes locales, no un call center',
]

export default function AutoInsurancePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: 'var(--purple-dark)' }}>
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'var(--yellow)' }} />
        <div className="absolute inset-0 stripe-pattern" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 90% 40%, rgba(115,64,176,0.30) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left */}
            <div className="text-white pt-2">
              <div
                className="inline-flex items-center gap-2 text-xs font-700 uppercase tracking-widest rounded-full px-4 py-2 mb-5"
                style={{ background: 'rgba(245,196,0,0.12)', border: '1px solid rgba(245,196,0,0.30)', color: 'var(--yellow)' }}
              >
                <Shield size={12} /> Seguro de Auto
              </div>
              <h1
                className="font-display font-800 text-white mb-5"
                style={{ fontSize: 'clamp(2.5rem,5.5vw,4.25rem)', lineHeight: 1.0, letterSpacing: '-0.03em' }}
              >
                Seguro de Auto<br />
                <span style={{ color: 'var(--yellow)' }}>Accesible</span><br />
                en California
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.70)', maxWidth: '440px' }}>
                Desde $0 de enganche. Póliza activa el mismo día. Comparamos múltiples compañías para encontrarte el mejor precio.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-8 max-w-sm">
                {benefits.slice(0, 4).map(b => (
                  <div key={b} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.80)' }}>
                    <CheckCircle size={13} style={{ color: 'var(--yellow)', flexShrink: 0 }} />
                    {b}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#cotizar" className="btn-primary-lg">Cotizar Gratis</Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn-ghost" style={{ padding: '16px 24px', borderRadius: 'var(--radius-lg)' }}>
                  <Phone size={17} /> {BUSINESS.phone}
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div
              id="cotizar"
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.30)' }}
            >
              <div className="px-6 py-4" style={{ background: 'var(--yellow)' }}>
                <h2 className="font-display font-800 text-lg" style={{ color: 'var(--purple-dark)' }}>
                  Cotiza tu Seguro — Es Gratis
                </h2>
                <p className="text-xs font-600 mt-0.5" style={{ color: 'rgba(50,22,92,0.65)' }}>
                  2 minutos · Sin compromiso · Respuesta el mismo día
                </p>
              </div>
              <div className="p-6 bg-white">
                <LeadForm sourcePage="auto-insurance-page" />
              </div>
            </div>
          </div>
        </div>

        {/* Curved separator */}
        <div className="relative h-10 md:h-14" style={{ background: 'var(--purple-dark)' }}>
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
            <path d="M0 56 C480 0 960 0 1440 56 L1440 56 L0 56 Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* ── Coverage types ── */}
      <section className="py-20" style={{ background: 'var(--white)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">Tipos de cobertura</span>
            <h2
              className="font-display font-800"
              style={{ fontSize: 'clamp(1.875rem,3.5vw,2.75rem)', color: 'var(--purple-dark)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
            >
              Encontramos la cobertura<br />que se adapta a ti
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coverageTypes.map((ct) => (
              <div
                key={ct.name}
                className="rounded-2xl p-6 flex gap-5"
                style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.07)', boxShadow: 'var(--shadow-card)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-2xl"
                  style={{ background: 'var(--off-white)' }}
                >
                  {ct.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                    <h3 className="font-display font-800 text-lg" style={{ color: 'var(--purple-dark)' }}>
                      {ct.name}
                    </h3>
                    {ct.tag && (
                      <span
                        className="text-[10px] font-800 uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                        style={{ background: ct.tagColor! }}
                      >
                        {ct.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-500)' }}>{ct.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits + SR22 spotlight ── */}
      <section className="py-20" style={{ background: 'var(--off-white)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-3">¿Por qué elegirnos?</span>
              <h2
                className="font-display font-800 mb-7"
                style={{ fontSize: 'clamp(1.875rem,3.5vw,2.75rem)', color: 'var(--purple-dark)', lineHeight: 1.05, letterSpacing: '-0.025em' }}
              >
                Tu seguro, tus condiciones
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-3 rounded-xl p-3.5"
                    style={{ background: 'white', border: '1.5px solid rgba(30,13,64,0.06)' }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'var(--yellow)' }}
                    >
                      <CheckCircle size={14} style={{ color: 'var(--purple-dark)' }} />
                    </div>
                    <span className="text-sm font-600" style={{ color: 'var(--gray-700)' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SR22 card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--purple-dark)', boxShadow: 'var(--shadow-purple)' }}
            >
              <div className="p-8 md:p-10">
                <div className="text-5xl mb-4">📄</div>
                <h3
                  className="font-display font-800 mb-4 text-white"
                  style={{ fontSize: 'clamp(1.75rem,3vw,2.25rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
                >
                  ¿Necesitas SR22?<br />
                  <span style={{ color: 'var(--yellow)' }}>Lo tramitamos hoy.</span>
                </h3>
                <p className="leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Licencia suspendida o accidente previo — no importa. Procesamos tu SR22
                  y lo enviamos directamente al DMV de California. Rápido y sin complicaciones.
                </p>
                <Link
                  href="/landing/sr22-insurance"
                  className="inline-flex items-center gap-2 font-display font-700 text-base px-6 py-3.5 rounded-xl transition-all"
                  style={{ background: 'var(--yellow)', color: 'var(--purple-dark)' }}
                >
                  Más info sobre SR22 <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
      <FAQSection />
    </>
  )
}

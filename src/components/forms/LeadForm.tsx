'use client'

import { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ChevronRight, ChevronLeft, Loader2, CheckCircle, Phone } from 'lucide-react'
import { cn, getWhatsAppUrl, BUSINESS } from '@/lib/utils'
import type { ServiceType, ContactMethod } from '@/types'

// ── Schemas ──────────────────────────────────────────────────────────────

const step1Schema = z.object({
  full_name: z.string().min(2, 'Ingresa tu nombre completo'),
  phone: z.string()
    .min(10, 'Ingresa un número válido de 10 dígitos')
    .regex(/^[\d\s\(\)\-\+]+$/, 'Solo números, paréntesis y guiones'),
  email: z.string().email('Email no válido').optional().or(z.literal('')),
})

const step2Schema = z.object({
  service_type: z.enum(['auto_insurance','sr22','dmv_services','plates_registration','notary_public','tax_services'], {
    required_error: 'Selecciona un servicio',
  }),
})

const step3InsuranceSchema = z.object({
  vehicle_year:             z.string().optional(),
  vehicle_make:             z.string().optional(),
  vehicle_model:            z.string().optional(),
  currently_insured:        z.boolean().optional(),
  needs_sr22:               z.boolean().optional(),
  preferred_contact_method: z.enum(['call','sms','whatsapp'], { required_error: 'Selecciona cómo contactarte' }),
})

const step3OtherSchema = z.object({
  sub_service:              z.string().optional(),
  notes:                    z.string().optional(),
  preferred_contact_method: z.enum(['call','sms','whatsapp'], { required_error: 'Selecciona cómo contactarte' }),
})

const step4Schema = z.object({
  city:     z.string().optional(),
  zip_code: z.string().max(10).optional(),
  notes:    z.string().max(500).optional(),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>
type Step3InsuranceData = z.infer<typeof step3InsuranceSchema>
type Step3OtherData = z.infer<typeof step3OtherSchema>
type Step4Data = z.infer<typeof step4Schema>

// ── Constants ─────────────────────────────────────────────────────────────

const SERVICE_OPTIONS: { value: ServiceType; label: string; sublabel: string; emoji: string }[] = [
  { value: 'auto_insurance',    label: 'Seguro de Auto',      sublabel: 'Auto Insurance',        emoji: '🚗' },
  { value: 'sr22',              label: 'SR22',                sublabel: 'SR22 Certificate',      emoji: '📄' },
  { value: 'dmv_services',      label: 'Servicios DMV',       sublabel: 'DMV Services',          emoji: '🏛️' },
  { value: 'plates_registration', label: 'Placas / Registro', sublabel: 'Plates & Registration', emoji: '🪪' },
  { value: 'notary_public',     label: 'Notario Público',     sublabel: 'Notary Public',         emoji: '✍️' },
  { value: 'tax_services',      label: 'Taxes',               sublabel: 'Tax Preparation',       emoji: '🧾' },
]

const CONTACT_OPTIONS: { value: ContactMethod; label: string; sublabel: string; emoji: string }[] = [
  { value: 'call',     label: 'Llamada',    sublabel: 'Call',     emoji: '📞' },
  { value: 'sms',      label: 'SMS/Texto',  sublabel: 'Text',     emoji: '💬' },
  { value: 'whatsapp', label: 'WhatsApp',   sublabel: 'WhatsApp', emoji: '📱' },
]

const DMV_SUB_SERVICES = [
  'Transferencia de título',
  'Registro de vehículo nuevo',
  'Duplicado de título',
  'Cambio de nombre / dirección',
  'VIN verification',
  'Renovación de registro',
  'Placas personalizadas',
  'Otro trámite',
]

// ── Sub-components ─────────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100)
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-700 uppercase tracking-widest" style={{ color: 'var(--gray-500)' }}>
          Paso {step} de {total}
        </span>
        <span className="text-xs font-700" style={{ color: 'var(--yellow-deep)' }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--gray-100)' }}>
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%`, background: 'var(--yellow)' }}
        />
      </div>
    </div>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="field-error animate-fade-in">{message}</p>
}

// ── Main Form ──────────────────────────────────────────────────────────────

interface LeadFormProps {
  sourcePage?: string
  landingPage?: string
}

export function LeadForm({ sourcePage, landingPage }: LeadFormProps) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<Record<string, unknown>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalSteps = 4
  const serviceType = data.service_type as ServiceType | undefined
  const isInsurance = serviceType === 'auto_insurance' || serviceType === 'sr22'

  // Scroll to top of form on step change
  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [step])

  const form1 = useForm<Step1Data>({ resolver: zodResolver(step1Schema), mode: 'onBlur' })
  const form2 = useForm<Step2Data>({ resolver: zodResolver(step2Schema) })
  const form3i = useForm<Step3InsuranceData>({ resolver: zodResolver(step3InsuranceSchema) })
  const form3o = useForm<Step3OtherData>({ resolver: zodResolver(step3OtherSchema) })
  const form4 = useForm<Step4Data>({ resolver: zodResolver(step4Schema) })

  const mergeAndNext = (stepData: Record<string, unknown>) => {
    setData(prev => ({ ...prev, ...stepData }))
    setStep(s => s + 1)
  }

  const onStep4Submit = form4.handleSubmit(async (stepData) => {
    const payload = {
      ...data,
      ...stepData,
      source_page: sourcePage,
      landing_page: landingPage,
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Error al enviar. Intenta de nuevo.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  })

  // ── Success state ──────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="text-center py-6 px-2">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 animate-check-pop"
          style={{ background: 'linear-gradient(135deg, #22C55E, #16a34a)' }}
        >
          <CheckCircle size={40} color="white" strokeWidth={2.5} />
        </div>
        <h3
          className="font-display font-800 text-2xl mb-2"
          style={{ color: 'var(--purple-dark)' }}
        >
          ¡Solicitud Enviada!
        </h3>
        <p className="mb-1 leading-relaxed" style={{ color: 'var(--gray-500)' }}>
          Gracias, <strong style={{ color: 'var(--purple-dark)' }}>{data.full_name as string}</strong>. Nos comunicaremos contigo muy pronto.
        </p>
        <p className="text-sm mb-7" style={{ color: 'var(--gray-300)' }}>
          Revisa tu teléfono — te enviaremos un SMS de confirmación.
        </p>
        <div className="flex flex-col gap-2.5">
          <a
            href={`tel:${(data.phone as string) || BUSINESS.phone}`}
            className="btn-primary w-full justify-center"
          >
            <Phone size={16} /> Llamar para más información
          </a>
          <a
            href={getWhatsAppUrl(`Hola, acabo de enviar una solicitud para ${data.service_type as string}. Me gustaría más información.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full justify-center"
          >
            WhatsApp
          </a>
        </div>
      </div>
    )
  }

  const inputClass = 'field-input'
  const labelClass = 'field-label'

  return (
    <div ref={containerRef}>
      <ProgressBar step={step} total={totalSteps} />

      {/* ── Step 1: Contact Info ──────────────────────────────────────── */}
      {step === 1 && (
        <form
          onSubmit={form1.handleSubmit(d => mergeAndNext(d))}
          className="space-y-4 animate-fade-up"
          noValidate
        >
          <div className="mb-5">
            <h3 className="font-display font-800 text-xl" style={{ color: 'var(--purple-dark)' }}>
              ¿Cómo te contactamos?
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--gray-500)' }}>
              Tu información es privada y segura.
            </p>
          </div>

          <div>
            <label className={labelClass}>Nombre completo <span style={{ color: 'var(--red)' }}>*</span></label>
            <input
              {...form1.register('full_name')}
              className={inputClass}
              placeholder="Tu nombre y apellido"
              autoComplete="name"
            />
            <FieldError message={form1.formState.errors.full_name?.message} />
          </div>

          <div>
            <label className={labelClass}>Teléfono <span style={{ color: 'var(--red)' }}>*</span></label>
            <input
              {...form1.register('phone')}
              className={inputClass}
              placeholder={BUSINESS.phone}
              type="tel"
              autoComplete="tel"
              inputMode="tel"
            />
            <FieldError message={form1.formState.errors.phone?.message} />
          </div>

          <div>
            <label className={labelClass}>
              Email <span className="font-normal text-xs" style={{ color: 'var(--gray-300)' }}>(opcional)</span>
            </label>
            <input
              {...form1.register('email')}
              className={inputClass}
              placeholder="tu@email.com"
              type="email"
              autoComplete="email"
              inputMode="email"
            />
            <FieldError message={form1.formState.errors.email?.message} />
          </div>

          <button type="submit" className="btn-primary w-full justify-center pulse-yellow mt-2" style={{ padding: '15px', borderRadius: 'var(--radius-md)' }}>
            Continuar <ChevronRight size={18} />
          </button>

          <p className="text-center text-xs" style={{ color: 'var(--gray-300)' }}>
            🔒 Tu información es privada y nunca será vendida
          </p>
        </form>
      )}

      {/* ── Step 2: Service ────────────────────────────────────────────── */}
      {step === 2 && (
        <form
          onSubmit={form2.handleSubmit(d => mergeAndNext(d))}
          className="animate-fade-up"
          noValidate
        >
          <div className="mb-5">
            <h3 className="font-display font-800 text-xl" style={{ color: 'var(--purple-dark)' }}>
              ¿Qué servicio necesitas?
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--gray-500)' }}>Selecciona uno para continuar.</p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {SERVICE_OPTIONS.map((opt) => {
              const selected = form2.watch('service_type') === opt.value
              return (
                <label
                  key={opt.value}
                  className={cn('service-chip', selected && 'selected')}
                >
                  <input
                    type="radio"
                    value={opt.value}
                    {...form2.register('service_type')}
                    className="sr-only"
                  />
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className="font-display font-700 text-sm leading-tight" style={{ color: 'var(--purple-dark)' }}>
                    {opt.label}
                  </span>
                  <span className="text-[10px] font-500" style={{ color: 'var(--gray-300)' }}>
                    {opt.sublabel}
                  </span>
                </label>
              )
            })}
          </div>
          <FieldError message={form2.formState.errors.service_type?.message} />

          <div className="flex gap-2.5 mt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn-ghost flex-1 justify-center"
              style={{ background: 'var(--off-white)', color: 'var(--gray-700)', border: '1.5px solid var(--gray-100)', backdropFilter: 'none' }}
            >
              <ChevronLeft size={16} /> Atrás
            </button>
            <button type="submit" className="btn-primary flex-[2] justify-center" style={{ padding: '14px', borderRadius: 'var(--radius-md)' }}>
              Continuar <ChevronRight size={18} />
            </button>
          </div>
        </form>
      )}

      {/* ── Step 3A: Insurance details ─────────────────────────────────── */}
      {step === 3 && isInsurance && (
        <form
          onSubmit={form3i.handleSubmit(d => mergeAndNext(d))}
          className="animate-fade-up"
          noValidate
        >
          <div className="mb-5">
            <h3 className="font-display font-800 text-xl" style={{ color: 'var(--purple-dark)' }}>
              Datos del vehículo
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--gray-500)' }}>
              Todos los campos son opcionales — solo nos ayudan a cotizar mejor.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 mb-4">
            <div>
              <label className={labelClass}>Año</label>
              <input {...form3i.register('vehicle_year')} className={inputClass} placeholder="2020" inputMode="numeric" />
            </div>
            <div>
              <label className={labelClass}>Marca</label>
              <input {...form3i.register('vehicle_make')} className={inputClass} placeholder="Toyota" />
            </div>
            <div>
              <label className={labelClass}>Modelo</label>
              <input {...form3i.register('vehicle_model')} className={inputClass} placeholder="Camry" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mb-5">
            <label
              className="flex items-center gap-3 rounded-[14px] p-3.5 cursor-pointer transition-colors"
              style={{ border: '1.5px solid var(--gray-100)', background: 'var(--off-white)' }}
            >
              <input
                type="checkbox"
                {...form3i.register('currently_insured')}
                className="w-4 h-4 rounded cursor-pointer"
                style={{ accentColor: 'var(--yellow)' }}
              />
              <span className="text-sm font-600" style={{ color: 'var(--gray-700)' }}>
                ¿Tienes seguro activo?
              </span>
            </label>
            <label
              className="flex items-center gap-3 rounded-[14px] p-3.5 cursor-pointer transition-colors"
              style={{ border: '1.5px solid var(--gray-100)', background: 'var(--off-white)' }}
            >
              <input
                type="checkbox"
                {...form3i.register('needs_sr22')}
                className="w-4 h-4 rounded cursor-pointer"
                style={{ accentColor: 'var(--yellow)' }}
              />
              <span className="text-sm font-600" style={{ color: 'var(--gray-700)' }}>¿Necesitas SR22?</span>
            </label>
          </div>

          <div className="mb-5">
            <label className={labelClass}>
              ¿Cómo prefieres que te contactemos? <span style={{ color: 'var(--red)' }}>*</span>
            </label>
            <div className="flex gap-2.5">
              {CONTACT_OPTIONS.map((opt) => {
                const selected = form3i.watch('preferred_contact_method') === opt.value
                return (
                  <label key={opt.value} className={cn('contact-chip', selected && 'selected')}>
                    <input type="radio" value={opt.value} {...form3i.register('preferred_contact_method')} className="sr-only" />
                    <span className="text-2xl">{opt.emoji}</span>
                    <span className="text-xs font-700" style={{ color: 'var(--purple-dark)' }}>{opt.label}</span>
                  </label>
                )
              })}
            </div>
            <FieldError message={form3i.formState.errors.preferred_contact_method?.message} />
          </div>

          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 justify-center flex items-center gap-2 font-700 py-3.5 rounded-[14px] transition-colors"
              style={{ background: 'var(--off-white)', color: 'var(--gray-700)', border: '1.5px solid var(--gray-100)' }}
            >
              <ChevronLeft size={16} /> Atrás
            </button>
            <button type="submit" className="btn-primary flex-[2] justify-center" style={{ padding: '14px', borderRadius: 'var(--radius-md)' }}>
              Continuar <ChevronRight size={18} />
            </button>
          </div>
        </form>
      )}

      {/* ── Step 3B: Other service details ─────────────────────────────── */}
      {step === 3 && !isInsurance && (
        <form
          onSubmit={form3o.handleSubmit(d => mergeAndNext(d))}
          className="animate-fade-up"
          noValidate
        >
          <div className="mb-5">
            <h3 className="font-display font-800 text-xl" style={{ color: 'var(--purple-dark)' }}>Detalles del servicio</h3>
            <p className="text-sm mt-1" style={{ color: 'var(--gray-500)' }}>Cuéntanos un poco más sobre lo que necesitas.</p>
          </div>

          {serviceType === 'dmv_services' && (
            <div className="mb-4">
              <label className={labelClass}>¿Qué trámite necesitas?</label>
              <select {...form3o.register('sub_service')} className={inputClass}>
                <option value="">Selecciona un trámite...</option>
                {DMV_SUB_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          )}

          <div className="mb-5">
            <label className={labelClass}>Cuéntanos más (opcional)</label>
            <textarea
              {...form3o.register('notes')}
              className={inputClass}
              style={{ resize: 'none', minHeight: '90px' }}
              placeholder={serviceType === 'notary_public'
                ? 'Ejemplo: necesito un poder notarial para mi mamá...'
                : serviceType === 'tax_services'
                ? 'Ejemplo: soy trabajador independiente, necesito ITIN...'
                : 'Cualquier información adicional que nos ayude...'
              }
              rows={3}
            />
          </div>

          <div className="mb-5">
            <label className={labelClass}>
              ¿Cómo prefieres que te contactemos? <span style={{ color: 'var(--red)' }}>*</span>
            </label>
            <div className="flex gap-2.5">
              {CONTACT_OPTIONS.map((opt) => {
                const selected = form3o.watch('preferred_contact_method') === opt.value
                return (
                  <label key={opt.value} className={cn('contact-chip', selected && 'selected')}>
                    <input type="radio" value={opt.value} {...form3o.register('preferred_contact_method')} className="sr-only" />
                    <span className="text-2xl">{opt.emoji}</span>
                    <span className="text-xs font-700" style={{ color: 'var(--purple-dark)' }}>{opt.label}</span>
                  </label>
                )
              })}
            </div>
            <FieldError message={form3o.formState.errors.preferred_contact_method?.message} />
          </div>

          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 justify-center flex items-center gap-2 font-700 py-3.5 rounded-[14px] transition-colors"
              style={{ background: 'var(--off-white)', color: 'var(--gray-700)', border: '1.5px solid var(--gray-100)' }}
            >
              <ChevronLeft size={16} /> Atrás
            </button>
            <button type="submit" className="btn-primary flex-[2] justify-center" style={{ padding: '14px', borderRadius: 'var(--radius-md)' }}>
              Continuar <ChevronRight size={18} />
            </button>
          </div>
        </form>
      )}

      {/* ── Step 4: Location + Submit ─────────────────────────────────── */}
      {step === 4 && (
        <form onSubmit={onStep4Submit} className="animate-fade-up" noValidate>
          <div className="mb-5">
            <h3 className="font-display font-800 text-xl" style={{ color: 'var(--purple-dark)' }}>
              Casi listo 🎉
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--gray-500)' }}>
              Solo un poco más de información para ayudarte mejor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mb-4">
            <div>
              <label className={labelClass}>Ciudad</label>
              <input
                {...form4.register('city')}
                className={inputClass}
                placeholder="Moreno Valley"
                autoComplete="address-level2"
              />
            </div>
            <div>
              <label className={labelClass}>Código Postal</label>
              <input
                {...form4.register('zip_code')}
                className={inputClass}
                placeholder="92551"
                inputMode="numeric"
                maxLength={5}
              />
            </div>
          </div>

          <div className="mb-5">
            <label className={labelClass}>Notas adicionales (opcional)</label>
            <textarea
              {...form4.register('notes')}
              className={inputClass}
              style={{ resize: 'none', minHeight: '80px' }}
              placeholder="¿Algo más que debamos saber?"
              rows={3}
            />
          </div>

          {error && (
            <div
              className="rounded-xl p-4 mb-4 text-sm font-600 animate-fade-in"
              style={{ background: 'rgba(176,48,32,0.08)', border: '1px solid rgba(176,48,32,0.20)', color: 'var(--red)' }}
            >
              {error}
            </div>
          )}

          <div className="flex gap-2.5 mb-4">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex-1 justify-center flex items-center gap-2 font-700 py-3.5 rounded-[14px] transition-colors"
              style={{ background: 'var(--off-white)', color: 'var(--gray-700)', border: '1.5px solid var(--gray-100)' }}
            >
              <ChevronLeft size={16} /> Atrás
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex-[2] justify-center pulse-yellow"
              style={{ padding: '14px', borderRadius: 'var(--radius-md)', opacity: loading ? 0.8 : 1 }}
            >
              {loading
                ? <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                : <>Enviar Solicitud <ChevronRight size={18} /></>
              }
            </button>
          </div>

          <p className="text-center text-xs" style={{ color: 'var(--gray-300)' }}>
            🔒 Tu información es privada. Nunca será vendida ni compartida.
          </p>
        </form>
      )}
    </div>
  )
}

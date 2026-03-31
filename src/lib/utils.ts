import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * BUSINESS constants
 *
 * Priority: env vars → hardcoded defaults
 *
 * For production, set these in Vercel environment variables:
 *   NEXT_PUBLIC_BUSINESS_PHONE   — e.g. (661) 900-3820
 *   NEXT_PUBLIC_BUSINESS_WHATSAPP — e.g. 16619003820  (no + or spaces)
 *   NEXT_PUBLIC_BUSINESS_ADDRESS — e.g. Bakersfield, CA
 *   NEXT_PUBLIC_BUSINESS_HOURS   — e.g. Lun–Vie 9am–6pm · Sáb 9am–3pm
 *   NEXT_PUBLIC_BUSINESS_EMAIL   — e.g. info@selenasinsurance.com
 *   NEXT_PUBLIC_BUSINESS_MAPS_URL — full Google Maps URL for the business
 *
 * If env vars are not set, the hardcoded values below are used as fallbacks.
 * Update the hardcoded values before launch so the site works even without env vars.
 */
export const BUSINESS = {
  name: "Selena's Insurance",

  // ── REPLACE THESE BEFORE LAUNCH ──────────────────────────────────────
  phone:        process.env.NEXT_PUBLIC_BUSINESS_PHONE     ?? '(661) 900-3820',
  whatsapp:     process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP  ?? '16619003820',
  address:      process.env.NEXT_PUBLIC_BUSINESS_ADDRESS   ?? 'Bakersfield, CA',
  hours:        process.env.NEXT_PUBLIC_BUSINESS_HOURS     ?? 'Lun–Vie 9am–6pm · Sáb 9am–3pm',
  email:        process.env.NEXT_PUBLIC_BUSINESS_EMAIL     ?? 'info@selenasinsurance.com',
  googleMapsUrl:process.env.NEXT_PUBLIC_BUSINESS_MAPS_URL  ?? 'https://maps.google.com/?q=Selenas+Insurance+Moreno+Valley+CA',
} as const

export function formatPhoneForTel(phone: string): string {
  return phone.replace(/\D/g, '')
}

export function getWhatsAppUrl(message?: string): string {
  const text = message ?? 'Hola, me gustaría obtener información sobre sus servicios.'
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`
}

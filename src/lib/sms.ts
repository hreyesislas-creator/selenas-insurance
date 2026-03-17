/**
 * SMS utility using Twilio
 *
 * Twilio is OPTIONAL — if env vars are not set, SMS is silently skipped.
 * The lead submission still works; the owner just won't receive SMS alerts.
 *
 * Setup (all optional):
 *   TWILIO_ACCOUNT_SID     — from console.twilio.com
 *   TWILIO_AUTH_TOKEN      — from console.twilio.com
 *   TWILIO_PHONE_NUMBER    — your Twilio number, e.g. +19515550000
 *   BUSINESS_OWNER_PHONE   — owner's phone for notifications, e.g. +19515551234
 *   NEXT_PUBLIC_BUSINESS_PHONE — shown in the SMS confirmation message
 */

interface SMSPayload {
  to: string
  body: string
}

/**
 * Core send function — returns true on success, false on skip or failure.
 * Never throws; all errors are caught and logged.
 */
async function sendSMS({ to, body }: SMSPayload): Promise<boolean> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken  = process.env.TWILIO_AUTH_TOKEN
  const fromNumber = process.env.TWILIO_PHONE_NUMBER

  if (!accountSid || !authToken || !fromNumber) {
    // Graceful no-op — Twilio not configured
    console.info('[SMS] Twilio not configured — skipping. Set TWILIO_* env vars to enable.')
    return false
  }

  // Normalize phone — ensure it starts with +
  const normalizedTo = to.trim().startsWith('+') ? to.trim() : `+${to.trim().replace(/\D/g, '')}`
  if (normalizedTo.replace(/\D/g, '').length < 10) {
    console.warn(`[SMS] Invalid phone number: ${to}`)
    return false
  }

  try {
    const twilio = await import('twilio')
    const client = twilio.default(accountSid, authToken)

    const msg = await client.messages.create({
      body,
      from: fromNumber,
      to: normalizedTo,
    })

    console.info(`[SMS] Sent ${msg.sid} to ${normalizedTo}`)
    return true
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error(`[SMS] Failed to send to ${normalizedTo}: ${message}`)
    return false
  }
}

/**
 * Lead confirmation SMS — sent to the person who filled the form.
 */
export async function sendLeadConfirmationSMS(
  phone: string,
  name: string
): Promise<boolean> {
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? '(951) 000-0000'
  const body =
    `Hola ${name}, recibimos tu solicitud en Selena's Insurance. ` +
    `Nos comunicaremos contigo muy pronto. ` +
    `Si necesitas ayuda inmediata, llámanos al ${businessPhone} ` +
    `o mándanos WhatsApp.`

  return sendSMS({ to: phone, body })
}

/**
 * Owner notification SMS — sent to the business owner for each new lead.
 */
export async function sendOwnerNotificationSMS(
  leadName: string,
  phone: string,
  serviceType: string
): Promise<boolean> {
  const ownerPhone = process.env.BUSINESS_OWNER_PHONE
  if (!ownerPhone) {
    console.info('[SMS] BUSINESS_OWNER_PHONE not set — skipping owner notification.')
    return false
  }

  const SERVICE_LABELS: Record<string, string> = {
    auto_insurance:     'Seguro de Auto',
    sr22:               'SR22',
    dmv_services:       'Servicios DMV',
    plates_registration:'Placas / Registro',
    notary_public:      'Notario Público',
    tax_services:       'Preparación de Taxes',
  }
  const label = SERVICE_LABELS[serviceType] ?? serviceType

  const body =
    `🔔 Nuevo lead — Selena's Insurance\n` +
    `Nombre: ${leadName}\n` +
    `Tel: ${phone}\n` +
    `Servicio: ${label}\n` +
    `⚡ Responde rápido!`

  return sendSMS({ to: ownerPhone, body })
}

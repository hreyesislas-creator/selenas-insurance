import { NextRequest, NextResponse } from 'next/server'

// Force Node.js runtime — Twilio requires Node, not Edge
export const runtime = 'nodejs'

/**
 * Twilio inbound SMS webhook
 * Set your Twilio number's Messaging webhook to:
 *   https://selenasinsurance.com/api/sms
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const params = new URLSearchParams(body)

    const from = params.get('From') ?? ''
    const messageBody = params.get('Body') ?? ''
    const to = params.get('To') ?? ''

    console.log(`[SMS Inbound] From: ${from} → ${to}: "${messageBody.slice(0, 80)}"`)

    // TODO: Match phone to lead in Supabase, update status, notify owner, etc.

    const twiml = `<?xml version="1.0" encoding="UTF-8"?><Response></Response>`

    return new NextResponse(twiml, {
      status: 200,
      headers: { 'Content-Type': 'text/xml' },
    })
  } catch (err) {
    console.error('[SMS Webhook] Error:', err)
    return new NextResponse('Error', { status: 500 })
  }
}

export async function GET() {
  return new NextResponse('SMS webhook active', { status: 200 })
}

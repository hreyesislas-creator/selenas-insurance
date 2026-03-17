import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { sendLeadConfirmationSMS, sendOwnerNotificationSMS } from '@/lib/sms'

// Force Node.js runtime — required for Twilio (CommonJS module) and Supabase
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      full_name,
      phone,
      email,
      service_type,
      sub_service,
      vehicle_year,
      vehicle_make,
      vehicle_model,
      currently_insured,
      needs_sr22,
      preferred_contact_method,
      city,
      zip_code,
      notes,
      source_page,
      landing_page,
    } = body

    // Validate required fields
    if (!full_name || typeof full_name !== 'string' || full_name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Nombre completo es requerido.' },
        { status: 400 }
      )
    }
    if (!phone || typeof phone !== 'string') {
      return NextResponse.json(
        { error: 'Teléfono es requerido.' },
        { status: 400 }
      )
    }
    if (!service_type || typeof service_type !== 'string') {
      return NextResponse.json(
        { error: 'Tipo de servicio es requerido.' },
        { status: 400 }
      )
    }

    const supabase = createServerClient()

    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          full_name: full_name.trim(),
          phone: phone.trim(),
          email:                    email                    ? String(email).trim()    : null,
          service_type:             String(service_type),
          sub_service:              sub_service              ? String(sub_service)     : null,
          vehicle_year:             vehicle_year             ? String(vehicle_year)    : null,
          vehicle_make:             vehicle_make             ? String(vehicle_make)    : null,
          vehicle_model:            vehicle_model            ? String(vehicle_model)   : null,
          currently_insured:        typeof currently_insured === 'boolean' ? currently_insured : null,
          needs_sr22:               typeof needs_sr22 === 'boolean'        ? needs_sr22        : null,
          preferred_contact_method: preferred_contact_method ? String(preferred_contact_method) : null,
          city:                     city                     ? String(city).trim()     : null,
          zip_code:                 zip_code                 ? String(zip_code).trim() : null,
          notes:                    notes                    ? String(notes).trim()    : null,
          source_page:              source_page              ? String(source_page)     : null,
          landing_page:             landing_page             ? String(landing_page)    : null,
          status: 'new',
        },
      ])
      .select('id')
      .single()

    if (error) {
      console.error('[Leads API] Supabase insert error:', error.message)
      return NextResponse.json(
        { error: 'Error al guardar la solicitud. Por favor intenta de nuevo.' },
        { status: 500 }
      )
    }

    // Fire SMS non-blocking — never let SMS failure affect the response
    Promise.allSettled([
      sendLeadConfirmationSMS(phone.trim(), full_name.trim()),
      sendOwnerNotificationSMS(full_name.trim(), phone.trim(), service_type),
    ]).catch((err) => console.error('[SMS] allSettled error:', err))

    return NextResponse.json({ success: true, id: data?.id ?? null }, { status: 201 })
  } catch (err) {
    console.error('[Leads API] Unexpected error:', err)
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const adminKey = request.headers.get('x-admin-key')

    if (!process.env.ADMIN_SECRET_KEY || adminKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: 'No autorizado.' }, { status: 401 })
    }

    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const statusFilter = searchParams.get('status')
    const limitRaw = parseInt(searchParams.get('limit') ?? '50', 10)
    const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? Math.min(limitRaw, 500) : 50

    // Build query without reassigning — avoids Supabase TypeScript chaining issues
    const { data, error } = await (
      statusFilter
        ? supabase
            .from('leads')
            .select('*')
            .eq('status', statusFilter)
            .order('created_at', { ascending: false })
            .limit(limit)
        : supabase
            .from('leads')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(limit)
    )

    if (error) {
      console.error('[Leads GET] Supabase error:', error.message)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ leads: data ?? [] })
  } catch (err) {
    console.error('[Leads GET] Unexpected error:', err)
    return NextResponse.json({ error: 'Error interno.' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const adminKey = request.headers.get('x-admin-key')

    if (!process.env.ADMIN_SECRET_KEY || adminKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: 'No autorizado.' }, { status: 401 })
    }

    const body = await request.json()
    const { id, status, assigned_to, follow_up_date, tags } = body

    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'ID de lead requerido.' }, { status: 400 })
    }

    const supabase = createServerClient()
    const updateData: Record<string, unknown> = {}

    if (status !== undefined)          updateData.status = status
    if (assigned_to !== undefined)     updateData.assigned_to = assigned_to
    if (follow_up_date !== undefined)  updateData.follow_up_date = follow_up_date
    if (tags !== undefined)            updateData.tags = tags

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: 'No hay campos para actualizar.' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('leads')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('[Leads PATCH] Supabase error:', error.message)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, lead: data })
  } catch (err) {
    console.error('[Leads PATCH] Unexpected error:', err)
    return NextResponse.json({ error: 'Error interno.' }, { status: 500 })
  }
}

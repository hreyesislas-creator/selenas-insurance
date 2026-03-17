'use client'

import { useState, useEffect, useCallback } from 'react'
import type { FormEvent, ElementType, ChangeEvent } from 'react'
import { RefreshCw, Phone, MessageSquare, Filter, ChevronDown, Search, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Lead, LeadStatus } from '@/types'

// ── Constants ─────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<LeadStatus, { label: string; color: string; bg: string }> = {
  new:              { label: 'Nuevo',            color: 'text-blue-400',   bg: 'bg-blue-400/10 border-blue-400/30' },
  contacted:        { label: 'Contactado',        color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/30' },
  quote_in_progress:{ label: 'Cotizando',         color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/30' },
  quote_sent:       { label: 'Cotización enviada',color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/30' },
  won:              { label: 'Ganado ✓',          color: 'text-green-400',  bg: 'bg-green-400/10 border-green-400/30' },
  lost:             { label: 'Perdido',           color: 'text-red-400',    bg: 'bg-red-400/10 border-red-400/30' },
  follow_up_needed: { label: 'Seguimiento',       color: 'text-pink-400',   bg: 'bg-pink-400/10 border-pink-400/30' },
}

const SERVICE_LABELS: Record<string, string> = {
  auto_insurance:     'Seguro de Auto',
  sr22:               'SR22',
  dmv_services:       'DMV',
  plates_registration:'Placas',
  notary_public:      'Notario',
  tax_services:       'Taxes',
}

const CONTACT_ICONS: Record<string, string> = {
  call: '📞',
  sms: '💬',
  whatsapp: '📱',
}

// ── Auth gate ─────────────────────────────────────────────────────────────

function AuthGate({ onAuth }: { onAuth: (key: string) => void }) {
  const [key, setKey] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (key.trim()) {
      onAuth(key.trim())
    } else {
      setError(true)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-sm">
        <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center mx-auto mb-5">
          <span className="font-display font-800 text-brand-purple text-xl">S</span>
        </div>
        <h1 className="font-display font-800 text-white text-2xl text-center mb-1">Panel Admin</h1>
        <p className="text-gray-500 text-sm text-center mb-6">Ingresa tu clave de acceso</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={key}
            onChange={(e: ChangeEvent<HTMLInputElement>) => { setKey(e.target.value); setError(false) }}
            placeholder="Clave de administrador"
            className={cn(
              'w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-yellow',
              error ? 'border-red-500' : 'border-gray-700'
            )}
          />
          {error && <p className="text-red-400 text-xs">Ingresa una clave válida.</p>}
          <button type="submit" className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-brand-purple font-700 py-3 rounded-xl transition-colors">
            Entrar
          </button>
        </form>
        <p className="text-gray-600 text-xs text-center mt-4">
          La clave se configura en ADMIN_SECRET_KEY (.env)
        </p>
      </div>
    </div>
  )
}

// ── Stat card ─────────────────────────────────────────────────────────────

function StatCard({ label, value, icon: Icon, color }: { label: string; value: number; icon: ElementType; color: string }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center`}>
          <Icon size={18} className="text-white" />
        </div>
      </div>
      <div className="font-display font-800 text-white text-3xl mb-0.5">{value}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  )
}

// ── Lead row ──────────────────────────────────────────────────────────────

function LeadRow({ lead, adminKey, onUpdate }: { lead: Lead; adminKey: string; onUpdate: () => void }) {
  const [updating, setUpdating] = useState(false)
  const statusCfg = STATUS_CONFIG[lead.status || 'new']
  const created = lead.created_at ? new Date(lead.created_at) : null
  const timeAgo = created
    ? formatTimeAgo(created)
    : '—'

  async function updateStatus(newStatus: LeadStatus) {
    setUpdating(true)
    try {
      await fetch('/api/leads', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey,
        },
        body: JSON.stringify({ id: lead.id, status: newStatus }),
      })
      onUpdate()
    } finally {
      setUpdating(false)
    }
  }

  return (
    <tr className="border-t border-gray-800 hover:bg-gray-800/50 transition-colors">
      {/* Time */}
      <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{timeAgo}</td>

      {/* Name + contact */}
      <td className="px-4 py-3">
        <div className="font-600 text-white text-sm">{lead.full_name}</div>
        <div className="flex items-center gap-3 mt-0.5">
          <a href={`tel:${lead.phone}`} className="text-brand-yellow text-xs hover:underline flex items-center gap-1">
            <Phone size={10} /> {lead.phone}
          </a>
          {lead.preferred_contact_method && (
            <span className="text-gray-500 text-xs">
              {CONTACT_ICONS[lead.preferred_contact_method]} prefiere {lead.preferred_contact_method}
            </span>
          )}
        </div>
      </td>

      {/* Service */}
      <td className="px-4 py-3">
        <span className="text-xs font-600 bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
          {SERVICE_LABELS[lead.service_type] || lead.service_type}
        </span>
        {lead.needs_sr22 && (
          <span className="ml-1 text-xs font-600 bg-orange-400/10 text-orange-400 px-2 py-1 rounded-full border border-orange-400/20">
            SR22
          </span>
        )}
      </td>

      {/* Vehicle */}
      <td className="px-4 py-3 text-gray-400 text-xs">
        {lead.vehicle_year && lead.vehicle_make
          ? `${lead.vehicle_year} ${lead.vehicle_make} ${lead.vehicle_model || ''}`
          : lead.sub_service || '—'}
      </td>

      {/* Location */}
      <td className="px-4 py-3 text-gray-400 text-xs">
        {lead.city || lead.zip_code || '—'}
      </td>

      {/* Source */}
      <td className="px-4 py-3 text-gray-600 text-xs">
        {lead.landing_page || lead.source_page || 'direct'}
      </td>

      {/* Status */}
      <td className="px-4 py-3">
        <div className="relative">
          <select
            value={lead.status || 'new'}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => { void updateStatus(e.target.value as LeadStatus) }}
            disabled={updating}
            className={cn(
              'text-xs font-600 rounded-full px-3 py-1 border appearance-none cursor-pointer pr-6 bg-transparent',
              statusCfg.bg,
              statusCfg.color,
              'focus:outline-none focus:ring-1 focus:ring-brand-yellow'
            )}
          >
            {Object.entries(STATUS_CONFIG).map(([value, cfg]) => (
              <option key={value} value={value} className="bg-gray-900 text-white">
                {cfg.label}
              </option>
            ))}
          </select>
          <ChevronDown size={10} className={cn('absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none', statusCfg.color)} />
        </div>
      </td>

      {/* Quick actions */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <a
            href={`tel:${lead.phone}`}
            title="Llamar"
            className="w-7 h-7 bg-gray-800 hover:bg-brand-yellow/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-brand-yellow transition-colors"
          >
            <Phone size={12} />
          </a>
          <a
            href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="w-7 h-7 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 transition-colors"
          >
            <MessageSquare size={12} />
          </a>
        </div>
      </td>
    </tr>
  )
}

function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000)
  if (diff < 60) return 'Hace un momento'
  if (diff < 3600) return `Hace ${Math.floor(diff / 60)}m`
  if (diff < 86400) return `Hace ${Math.floor(diff / 3600)}h`
  return `Hace ${Math.floor(diff / 86400)}d`
}

// ── Main dashboard ────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const [adminKey, setAdminKey] = useState<string | null>(null)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterService, setFilterService] = useState<string>('all')
  const [search, setSearch] = useState('')

  const fetchLeads = useCallback(async (key: string) => {
    setLoading(true)
    setError(null)
    try {
      const url = filterStatus !== 'all' ? `/api/leads?status=${filterStatus}&limit=200` : '/api/leads?limit=200'
      const res = await fetch(url, { headers: { 'x-admin-key': key } })
      if (!res.ok) {
        if (res.status === 401) {
          setError('Clave incorrecta. Verifica tu ADMIN_SECRET_KEY.')
          setAdminKey(null)
          return
        }
        throw new Error('Error al cargar leads.')
      }
      const data = await res.json()
      setLeads(data.leads || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido.')
    } finally {
      setLoading(false)
    }
  }, [filterStatus])

  useEffect(() => {
    if (adminKey) fetchLeads(adminKey)
  }, [adminKey, fetchLeads])

  if (!adminKey) {
    return <AuthGate onAuth={(key) => setAdminKey(key)} />
  }

  // Filtered leads
  const filtered = leads.filter((l) => {
    const matchService = filterService === 'all' || l.service_type === filterService
    const matchSearch = !search ||
      l.full_name.toLowerCase().includes(search.toLowerCase()) ||
      l.phone.includes(search) ||
      (l.city || '').toLowerCase().includes(search.toLowerCase())
    return matchService && matchSearch
  })

  // Stats
  const stats = {
    total: leads.length,
    newLeads: leads.filter((l) => l.status === 'new').length,
    inProgress: leads.filter((l) => ['contacted', 'quote_in_progress', 'quote_sent'].includes(l.status || '')).length,
    won: leads.filter((l) => l.status === 'won').length,
  }

  return (
    <div>
      {/* Page header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="font-display font-800 text-white text-3xl mb-1">Panel de Leads</h1>
          <p className="text-gray-500 text-sm">Gestiona solicitudes de clientes</p>
        </div>
        <button
          onClick={() => fetchLeads(adminKey)}
          disabled={loading}
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm px-4 py-2 rounded-lg transition-colors"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          Actualizar
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total de leads" value={stats.total} icon={Users} color="bg-blue-600" />
        <StatCard label="Nuevos" value={stats.newLeads} icon={TrendingUp} color="bg-brand-yellow" />
        <StatCard label="En proceso" value={stats.inProgress} icon={Clock} color="bg-orange-500" />
        <StatCard label="Ganados" value={stats.won} icon={CheckCircle} color="bg-green-600" />
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 mb-6 text-sm">
          {error}
        </div>
      )}

      {/* Filters */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-4 flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            placeholder="Buscar por nombre, teléfono o ciudad..."
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-9 pr-4 py-2 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-yellow"
          />
        </div>

        {/* Status filter */}
        <div className="relative">
          <Filter size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
          <select
            value={filterStatus}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilterStatus(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg pl-8 pr-8 py-2 text-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-brand-yellow cursor-pointer"
          >
            <option value="all">Todos los estados</option>
            {Object.entries(STATUS_CONFIG).map(([value, cfg]) => (
              <option key={value} value={value}>{cfg.label}</option>
            ))}
          </select>
        </div>

        {/* Service filter */}
        <div className="relative">
          <select
            value={filterService}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilterService(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-brand-yellow cursor-pointer"
          >
            <option value="all">Todos los servicios</option>
            {Object.entries(SERVICE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="text-gray-500 text-xs mb-3 px-1">
        Mostrando {filtered.length} de {leads.length} leads
      </div>

      {/* Leads table */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-40 text-gray-500">
            <RefreshCw size={20} className="animate-spin mr-2" />
            Cargando leads...
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-gray-600">
            <Users size={32} className="mb-2 opacity-50" />
            <p className="text-sm">No hay leads que coincidan con los filtros.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800/50">
                  {['Tiempo', 'Cliente', 'Servicio', 'Vehículo / Detalle', 'Ciudad', 'Fuente', 'Estado', 'Acciones'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-600 text-gray-500 uppercase tracking-wide whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <LeadRow
                    key={lead.id}
                    lead={lead}
                    adminKey={adminKey}
                    onUpdate={() => fetchLeads(adminKey)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer note */}
      <p className="text-center text-gray-700 text-xs mt-6">
        Panel admin interno · Selena&apos;s Insurance · No compartir esta URL
      </p>
    </div>
  )
}

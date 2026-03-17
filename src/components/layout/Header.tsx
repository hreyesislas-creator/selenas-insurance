'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { BUSINESS, getWhatsAppUrl } from '@/lib/utils'
import { cn } from '@/lib/utils'

const WA_ICON = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

const navLinks = [
  { href: '/auto-insurance', label: 'Seguro de Auto' },
  { href: '/dmv-services', label: 'Servicios DMV' },
  { href: '/notary-tax', label: 'Notario y Taxes' },
  { href: '/contact', label: 'Contacto' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-200',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(30,13,64,0.08),0_4px_16px_rgba(30,13,64,0.06)]'
            : 'bg-white shadow-[0_1px_0_rgba(30,13,64,0.06)]'
        )}
      >
        {/* Announcement bar */}
        <div style={{ background: 'var(--purple-dark)' }}>
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
            <span className="hidden sm:flex items-center gap-2 text-white/70 text-xs font-500">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
              {BUSINESS.hours}
            </span>
            <div className="flex items-center gap-4 ml-auto">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-1.5 text-xs font-700 transition-colors"
                style={{ color: 'var(--yellow)' }}
              >
                <Phone size={12} />
                {BUSINESS.phone}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-white/70 text-xs font-500 hover:text-white transition-colors"
              >
                <WA_ICON /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center shadow-sm"
              style={{ background: 'var(--yellow)' }}
            >
              <span
                className="font-display font-800 text-xl leading-none"
                style={{ color: 'var(--purple-dark)' }}
              >
                S
              </span>
            </div>
            <div className="leading-none">
              <div
                className="font-display font-800 text-[15px] leading-tight tracking-tight"
                style={{ color: 'var(--purple-dark)' }}
              >
                Selena&apos;s Insurance
              </div>
              <div className="text-[10px] font-500 mt-0.5" style={{ color: 'var(--gray-500)' }}>
                Seguros · DMV · Notario · Taxes
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-600 text-sm px-3.5 py-2 rounded-lg transition-colors"
                style={{ color: 'var(--gray-700)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm"
              style={{ padding: '9px 16px', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}
            >
              <WA_ICON /> WhatsApp
            </a>
            <Link
              href="/get-a-quote"
              className="btn-primary pulse-yellow"
              style={{ padding: '9px 20px', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}
            >
              Cotizar Gratis
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
            style={{ color: 'var(--purple)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden animate-fade-in"
          style={{ background: 'var(--purple-ink)' }}
        >
          {/* Close button */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center" style={{ background: 'var(--yellow)' }}>
                <span className="font-display font-800 text-xl" style={{ color: 'var(--purple-dark)' }}>S</span>
              </div>
              <span className="font-display font-700 text-white text-base">Selena&apos;s Insurance</span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          <div className="px-4 pt-6 pb-8 flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-4 py-4 rounded-2xl text-white font-display font-700 text-xl animate-fade-up"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  animationDelay: `${i * 60}ms`
                }}
              >
                {link.label}
                <ChevronDown size={16} className="text-white/30 -rotate-90" />
              </Link>
            ))}

            <div className="mt-6 grid grid-cols-1 gap-3">
              <Link
                href="/get-a-quote"
                onClick={() => setMenuOpen(false)}
                className="btn-primary-lg text-center animate-fade-up delay-250"
              >
                Cotización Gratis — Sin Costo
              </Link>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="btn-ghost text-center animate-fade-up delay-350"
              >
                <Phone size={18} /> {BUSINESS.phone}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-center animate-fade-up delay-500"
              >
                <WA_ICON /> WhatsApp
              </a>
            </div>

            <div
              className="mt-8 rounded-2xl p-4 text-center animate-fade-up delay-650"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <p className="text-white/50 text-sm font-500">{BUSINESS.hours}</p>
              <p className="text-white/30 text-xs mt-1">{BUSINESS.address}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

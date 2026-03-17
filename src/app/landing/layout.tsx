import type { ReactNode } from 'react'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { BUSINESS } from '@/lib/utils'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { MobileCTABar } from '@/components/ui/MobileCTABar'

const WA_ICON = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Minimal sticky header */}
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'rgba(30,13,64,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-[9px] flex items-center justify-center"
              style={{ background: 'var(--yellow)' }}
            >
              <span className="font-display font-800 text-lg leading-none" style={{ color: 'var(--purple-dark)' }}>S</span>
            </div>
            <span className="font-display font-700 text-white text-sm hidden sm:block">
              Selena&apos;s Insurance
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="hidden sm:flex items-center gap-1.5 text-sm font-700 px-4 py-2 rounded-xl transition-all"
              style={{ background: 'rgba(255,255,255,0.10)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <Phone size={13} /> {BUSINESS.phone}
            </a>
            <Link
              href="/get-a-quote"
              className="btn-primary text-sm"
              style={{ padding: '9px 18px', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}
            >
              Cotizar Gratis
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      {/* Minimal footer */}
      <footer style={{ background: 'var(--purple-ink)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Selena&apos;s Insurance · {BUSINESS.address}
          </span>
          <Link href="/" className="text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.35)' }}>
            ← Volver al sitio principal
          </Link>
        </div>
      </footer>

      <WhatsAppButton />
      <MobileCTABar />
    </>
  )
}

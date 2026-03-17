import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

/**
 * SiteShell — wraps every main site page with the shared Header and Footer.
 * Used by page.tsx, auto-insurance/page.tsx, dmv-services/page.tsx, etc.
 * NOT used by /admin or /landing pages (they have their own layouts).
 */
export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

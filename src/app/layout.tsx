import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Barlow_Condensed, Barlow } from 'next/font/google'
import './globals.css'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { MobileCTABar } from '@/components/ui/MobileCTABar'
import { LocalBusinessSchema } from '@/components/ui/LocalBusinessSchema'

const displayFont = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const bodyFont = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://selenasinsurance.com'),
  title: {
    default: "Selena's Insurance — Seguros de Auto y Servicios DMV en Bakersfield, CA",
    template: "%s | Selena's Insurance",
  },
  description:
    'Seguros de auto accesibles, SR22, servicios de DMV, placas, notario y taxes en Bakersfield, CA. Atención en español. ¡Llama o mándanos WhatsApp ahora!',
  keywords: [
    'seguros de auto',
    'auto insurance',
    'SR22',
    'DMV services',
    'placas California',
    'seguro barato',
    'Bakersfield',
    'Riverside County',
    'seguro en español',
    'notario',
    'taxes',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_US',
    url: 'https://selenasinsurance.com',
    siteName: "Selena's Insurance",
    title: "Selena's Insurance — Seguros de Auto y Servicios DMV",
    description:
      'Seguros accesibles y servicios de DMV en un solo lugar. Atención en español. Bakersfield, CA.',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body bg-brand-white text-gray-900 antialiased">
        <LocalBusinessSchema />
        {children}
        <WhatsAppButton />
        <MobileCTABar />
      </body>
    </html>
  )
}

import { BUSINESS } from '@/lib/utils'

/**
 * JSON-LD Local Business schema for SEO.
 * Coordinates: set NEXT_PUBLIC_BUSINESS_LAT and NEXT_PUBLIC_BUSINESS_LNG
 * to your real GPS coords. Default is approximate Bakersfield center.
 */
export function LocalBusinessSchema() {
  const lat = parseFloat(process.env.NEXT_PUBLIC_BUSINESS_LAT ?? '33.9425')
  const lng = parseFloat(process.env.NEXT_PUBLIC_BUSINESS_LNG ?? '-117.2297')

  // Parse street address from the full BUSINESS.address string
  const addressParts = BUSINESS.address.split(',').map(s => s.trim())
  const streetAddress = addressParts[0] ?? '1234 Main St'
  const city          = addressParts[1] ?? 'Bakersfield'
  const stateZip      = (addressParts[2] ?? 'CA 92551').split(' ')
  const state         = stateZip[0] ?? 'CA'
  const postalCode    = stateZip[1] ?? '92551'

  const schema = {
    '@context':   'https://schema.org',
    '@type':      'InsuranceAgency',
    name:         BUSINESS.name,
    description:
      'Seguros de auto accesibles, SR22, servicios de DMV, placas, notario y taxes en Bakersfield, CA. Atención en español.',
    url:          'https://selenasinsurance.com',
    telephone:    BUSINESS.phone,
    email:        BUSINESS.email,
    address: {
      '@type':          'PostalAddress',
      streetAddress,
      addressLocality:  city,
      addressRegion:    state,
      postalCode,
      addressCountry:   'US',
    },
    geo: {
      '@type':    'GeoCoordinates',
      latitude:   lat,
      longitude:  lng,
    },
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-15:00'],
    priceRange:   '$$',
    areaServed: [
      'Bakersfield, CA',
      'Riverside, CA',
      'Perris, CA',
      'Hemet, CA',
      'San Jacinto, CA',
      'Beaumont, CA',
      'Banning, CA',
    ],
    hasMap:            BUSINESS.googleMapsUrl,
    sameAs:            [],
    availableLanguage: ['Spanish', 'English'],
    currenciesAccepted:'USD',
    paymentAccepted:   'Cash, Credit Card, Debit Card',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

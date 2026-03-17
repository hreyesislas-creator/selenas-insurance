import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://selenasinsurance.com'

  return [
    { url: base,                                     lastModified: new Date(), changeFrequency: 'weekly',  priority: 1    },
    { url: `${base}/auto-insurance`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9  },
    { url: `${base}/dmv-services`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9  },
    { url: `${base}/notary-tax`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8  },
    { url: `${base}/get-a-quote`,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/contact`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7  },
    { url: `${base}/landing/cheap-auto-insurance`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/landing/sr22-insurance`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/landing/plates-registration`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8  },
    { url: `${base}/landing/dmv-near-you`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8  },
  ]
}

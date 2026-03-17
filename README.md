# Selena's Insurance — Production Codebase

A full-stack bilingual (Spanish-first) lead generation website for a Latino insurance and DMV services business in Moreno Valley, CA. Built for high mobile conversion, local SEO, and Vercel deployment.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + CSS custom properties |
| Database | Supabase (PostgreSQL) |
| SMS | Twilio (optional) |
| Forms | react-hook-form + zod |
| Deployment | Vercel |

---

## Quick Start

### 1. Clone and install

```bash
git clone <your-repo-url>
cd selenas-insurance
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in every value (see [Environment Variables](#environment-variables) below).

### 3. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the schema below
3. Copy your **Project URL** and **API Keys** from **Settings → API**

```sql
-- Run this in the Supabase SQL Editor
create table leads (
  id                       uuid default gen_random_uuid() primary key,
  created_at               timestamptz default now(),
  full_name                text not null,
  phone                    text not null,
  email                    text,
  service_type             text not null,
  sub_service              text,
  vehicle_year             text,
  vehicle_make             text,
  vehicle_model            text,
  currently_insured        boolean,
  needs_sr22               boolean,
  preferred_contact_method text,
  city                     text,
  zip_code                 text,
  notes                    text,
  source_page              text,
  landing_page             text,
  status                   text default 'new',
  assigned_to              text,
  follow_up_date           date,
  tags                     text[]
);

-- Indexes for admin dashboard queries
create index on leads (status);
create index on leads (created_at desc);

-- Row Level Security
alter table leads enable row level security;

-- Allow service role full access (used by API routes)
create policy "Service role full access" on leads
  using (true)
  with check (true);
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

The root `/` redirects to `/site` (the main homepage).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, global meta, WA/mobile CTAs
│   ├── page.tsx                # Root redirect → /site
│   ├── not-found.tsx           # 404 page
│   ├── error.tsx               # Global error boundary
│   ├── loading.tsx             # Global loading state
│   ├── globals.css             # Design system — tokens, utilities, animations
│   ├── robots.ts               # robots.txt generation
│   ├── sitemap.ts              # sitemap.xml generation
│   │
│   ├── site/                   # Main website (with header + footer)
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Homepage
│   │   ├── auto-insurance/     # Auto insurance service page
│   │   ├── dmv-services/       # DMV services page
│   │   ├── notary-tax/         # Notary + tax services page
│   │   ├── get-a-quote/        # Dedicated quote page
│   │   └── contact/            # Contact page
│   │
│   ├── landing/                # Conversion landing pages (minimal nav)
│   │   ├── layout.tsx
│   │   ├── cheap-auto-insurance/
│   │   ├── sr22-insurance/
│   │   ├── plates-registration/
│   │   └── dmv-near-you/
│   │
│   ├── admin/                  # Internal lead management dashboard
│   │   ├── layout.tsx
│   │   └── page.tsx            # Protected by ADMIN_SECRET_KEY header
│   │
│   └── api/
│       ├── leads/route.ts      # POST/GET/PATCH leads (Node.js runtime)
│       └── sms/route.ts        # Twilio inbound SMS webhook
│
├── components/
│   ├── forms/
│   │   └── LeadForm.tsx        # 4-step multi-form with validation
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav with mobile full-screen menu
│   │   └── Footer.tsx          # Full footer with pre-footer CTA bar
│   ├── sections/               # Homepage and page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── SpotlightSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── CTAStrip.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── LandingHero.tsx     # Reusable landing page hero + form
│   └── ui/
│       ├── WhatsAppButton.tsx  # Floating WA button (bottom right)
│       ├── MobileCTABar.tsx    # Sticky 3-button bar (mobile only)
│       └── LocalBusinessSchema.tsx  # JSON-LD SEO schema
│
├── lib/
│   ├── utils.ts                # BUSINESS constants (env-driven) + helpers
│   ├── supabase.ts             # Supabase client (lazy init, guarded)
│   └── sms.ts                  # Twilio SMS (optional, graceful no-op)
│
└── types/
    └── index.ts                # Lead, ServiceType, LeadStatus types
```

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/site` |
| `/site` | Homepage |
| `/site/auto-insurance` | Auto insurance service page |
| `/site/dmv-services` | DMV services page |
| `/site/notary-tax` | Notary + tax page |
| `/site/get-a-quote` | Dedicated quote form page |
| `/site/contact` | Contact page |
| `/landing/cheap-auto-insurance` | Ad landing page — cheap auto |
| `/landing/sr22-insurance` | Ad landing page — SR22 |
| `/landing/plates-registration` | Ad landing page — plates |
| `/landing/dmv-near-you` | Local SEO landing page |
| `/admin` | Internal CRM dashboard (password protected) |
| `/api/leads` | POST/GET/PATCH leads |
| `/api/sms` | Twilio inbound webhook |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Auto-generated robots.txt |

---

## Environment Variables

### Required — app will not function without these

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |
| `ADMIN_SECRET_KEY` | Protects `/admin` and `/api/leads` GET/PATCH |

### Required for correct business info — set before launch

| Variable | Example |
|----------|---------|
| `NEXT_PUBLIC_BUSINESS_PHONE` | `(951) 555-1234` |
| `NEXT_PUBLIC_BUSINESS_WHATSAPP` | `19515551234` (no + or spaces) |
| `NEXT_PUBLIC_BUSINESS_ADDRESS` | `123 Main St, Moreno Valley, CA 92551` |
| `NEXT_PUBLIC_BUSINESS_HOURS` | `Lun–Vie 9am–6pm · Sáb 9am–3pm` |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | `info@selenasinsurance.com` |
| `NEXT_PUBLIC_BUSINESS_MAPS_URL` | Full Google Maps URL |

### Optional — recommended for production

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_BUSINESS_LAT` | GPS latitude for JSON-LD schema |
| `NEXT_PUBLIC_BUSINESS_LNG` | GPS longitude for JSON-LD schema |

### Optional — SMS (silently skipped if not set)

| Variable | Description |
|----------|-------------|
| `TWILIO_ACCOUNT_SID` | Twilio Account SID |
| `TWILIO_AUTH_TOKEN` | Twilio Auth Token |
| `TWILIO_PHONE_NUMBER` | Your Twilio number (e.g. `+19510000000`) |
| `BUSINESS_OWNER_PHONE` | Owner's phone for lead notifications (e.g. `+19515551234`) |

---

## Admin Dashboard

Access at `/admin`. Enter the value of `ADMIN_SECRET_KEY` when prompted.

Features:
- View all leads with real-time filtering by status and service type
- Search by name, phone, or city
- Update lead status (new → contacted → quote sent → won/lost)
- One-click call and WhatsApp from any lead row
- Stats: total, new, in-progress, won

The admin uses the `x-admin-key` header to authenticate against the `/api/leads` endpoints. In production, consider adding proper auth (Next-Auth, Supabase Auth) for team access.

---

## Lead Form Flow

The 4-step multi-form at `/site/get-a-quote` and embedded on every major page:

1. **Contact info** — name, phone, email (optional)
2. **Service selection** — 6 service types via visual chips
3. **Service details** — vehicle info (insurance) or sub-service + notes (DMV/notary/tax)
4. **Location + submit** — city, zip, additional notes

On submission:
- Lead saved to Supabase `leads` table with `status: 'new'`
- Confirmation SMS sent to lead (if Twilio configured)
- Notification SMS sent to owner (if Twilio + `BUSINESS_OWNER_PHONE` configured)
- Success state shown with personalized message and WhatsApp/call CTAs

---

## Twilio Setup (Optional)

1. Create account at [twilio.com](https://twilio.com)
2. Purchase a US phone number
3. For inbound SMS webhook: set your number's messaging webhook to `https://yourdomain.com/api/sms`
4. Add the four `TWILIO_*` environment variables

If Twilio is not configured, the app works normally — just without SMS. No errors, no broken states.

---

## Deploying to Vercel

```bash
# Option 1: Vercel CLI
npx vercel --prod

# Option 2: Connect GitHub in Vercel dashboard
# Push to main → auto-deploys
```

**Important Vercel settings:**
1. Go to **Project → Settings → Environment Variables**
2. Add ALL variables from the "Required" sections above
3. Set `SUPABASE_SERVICE_ROLE_KEY` as **Server-side only** (no NEXT_PUBLIC_ prefix)
4. Redeploy after adding env vars

**Build command:** `npm run build` (default)  
**Output directory:** `.next` (default)  
**Node.js version:** 20.x (recommended)

---

## Before Launch Checklist

### Content placeholders to replace
- [ ] `NEXT_PUBLIC_BUSINESS_PHONE` — real phone number
- [ ] `NEXT_PUBLIC_BUSINESS_WHATSAPP` — real WhatsApp number
- [ ] `NEXT_PUBLIC_BUSINESS_ADDRESS` — real address
- [ ] `NEXT_PUBLIC_BUSINESS_HOURS` — real business hours
- [ ] `NEXT_PUBLIC_BUSINESS_EMAIL` — real email
- [ ] `NEXT_PUBLIC_BUSINESS_MAPS_URL` — real Google Maps URL
- [ ] `NEXT_PUBLIC_BUSINESS_LAT` / `LNG` — real GPS coordinates
- [ ] Testimonials in `src/components/sections/TestimonialsSection.tsx` — replace with real customer reviews
- [ ] `src/components/ui/LocalBusinessSchema.tsx` — verify `openingHours` matches real schedule
- [ ] `src/app/sitemap.ts` — update if domain changes from `selenasinsurance.com`

### Infrastructure
- [ ] Supabase project created and SQL schema applied
- [ ] All required env vars set in Vercel
- [ ] Admin secret key generated: `openssl rand -base64 32`
- [ ] Custom domain configured in Vercel
- [ ] DNS pointing to Vercel

### Optional but recommended
- [ ] Twilio set up for SMS lead notifications
- [ ] Google Analytics or Plausible added to layout
- [ ] Google Search Console connected (submit sitemap)
- [ ] Google Business Profile updated with website URL

---

## Design System

Colors are defined as CSS custom properties in `globals.css` and referenced throughout:

| Token | Value | Use |
|-------|-------|-----|
| `--yellow` | `#F5C400` | Primary CTA, highlights |
| `--purple-dark` | `#32165C` | Headings, hero backgrounds |
| `--purple` | `#4A2080` | Buttons, accents |
| `--blue-ca` | `#1A3A6B` | DMV/California references |
| `--red` | `#B03020` | Badges, urgency |
| `--off-white` | `#F4F3EF` | Section backgrounds |

Fonts: **Barlow Condensed** (display/headings) + **Barlow** (body) via Google Fonts.

---

## License

Private — all rights reserved. Built for Selena's Insurance, Moreno Valley CA.

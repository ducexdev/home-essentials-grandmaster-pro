# Grandmaster Pro — Sales Landing Page & Order Funnel
**Brand**: Home Essentials Nigeria  
**Slogan**: *“Grandmaster pro.... Built to Last.”*  
**Production Domain**: `https://homeessentials.com.ng`  
**Primary Order Email**: `order@homeessentials.com.ng`  
**WhatsApp Conversion Hotline**: `+234 704 578 7045` (`wa.me/2347045787045`)

---

## 1. Architecture Overview

Built with **Next.js 15 App Router**, **React 19**, **TypeScript (Strict Mode)**, **Tailwind CSS**, and **Supabase Database (PostgreSQL with Row Level Security)**.

```
grandmaster-pro/
├── src/
│   ├── app/
│   │   ├── api/orders/route.ts        # Server-authoritative order handler & price calculation
│   │   ├── grandmaster-pro/page.tsx   # Grandmaster Pro sales landing page
│   │   ├── privacy/page.tsx           # Privacy Policy
│   │   ├── returns/page.tsx           # Returns & Replacements Policy
│   │   ├── terms/page.tsx             # Terms of Service
│   │   ├── globals.css                # Brand tokens, animations, accessible focus rings
│   │   ├── layout.tsx                 # Root layout with SEO & Open Graph meta
│   │   └── page.tsx                   # Redirect to /grandmaster-pro
│   ├── components/grandmaster-pro/
│   │   ├── SiteHeader.tsx             # Sticky navigation with order CTA & WhatsApp
│   │   ├── HeroSection.tsx            # High-conversion hero with dual CTA
│   │   ├── TrustStrip.tsx             # Trust reassurance strip (genuine, support, delivery)
│   │   ├── ProblemSolution.tsx        # Household problem vs Grandmaster Pro solution
│   │   ├── ProductShowcase.tsx        # Product gallery & demonstration video container
│   │   ├── KeyBenefits.tsx            # 6 verified benefit cards
│   │   ├── HowItWorks.tsx             # 4-step workflow with connector line
│   │   ├── UseCases.tsx               # Household vs Small Business applications
│   │   ├── PricingSection.tsx         # Variant selector & verified pricing cards
│   │   ├── SpecsSection.tsx           # Product specs & delivery/warranty breakdown
│   │   ├── FAQSection.tsx             # Accessible accordion FAQ
│   │   ├── FinalCTA.tsx               # Pulsing closing CTA section
│   │   ├── SiteFooter.tsx             # Legal, contact & brand footer
│   │   ├── OrderModal.tsx             # Keyboard-accessible order modal with live kobo totals
│   │   ├── MobileStickyBar.tsx        # Mobile-only sticky bottom CTA bar
│   │   ├── WhatsAppFloat.tsx          # Floating WhatsApp button (desktop)
│   │   └── AttributionCapture.tsx     # UTM & Meta/TikTok click ID capture
│   ├── lib/
│   │   ├── product-config.ts          # Central source of truth for variants & policies
│   │   ├── order-schema.ts            # Zod validation schema (shared client/server)
│   │   ├── supabase.ts                # Public anon client + server-only admin client
│   │   └── email.ts                   # Resend HTML email dispatcher
│   └── types/
│       └── order.ts                   # Order, variant, and API type definitions
├── supabase/
│   └── migrations/
│       └── 20261001000000_create_orders.sql  # Supabase migration (RLS & constraints)
├── test/
│   └── order-validation.test.mjs      # Unit tests (phone regex, quantity, kobo math)
├── .env.example                       # Documented environment variables
└── README.md                          # Documentation
```

---

## 2. Brand Identity & Design Tokens

- **Dominant Deep Navy**: `#0B1F3A`
- **Brand Premium Blue**: `#155EEF`
- **Electric Accent Blue**: `#3B82F6`
- **Conversion Orange**: `#FF6B1A`
- **Orange Hover**: `#E9560C`
- **Light Grey Background**: `#F4F6F8`
- **Body Text**: `#344054`
- **Typography**: Poppins (headings), Inter (body, UI, forms)

---

## 3. Product Fact-Checking & Content Approval Guide

⚠️ **MANDATORY POLICY**: Under no circumstances should unverified claims (such as speculative wattage, unconfirmed warranties, or copied prices) be presented as facts.

All customizable product data resides in:
📁 `src/lib/product-config.ts`

### Fields Awaiting Business Owner Approval:
1. `variants`: Current variants are configured with safe `available: false` placeholders until Home Essentials specifies the exact names, package sizes, and prices in kobo (e.g. `₦45,000` = `4500000` kobo).
2. `wattage`: Currently `null`. Update once technical documentation is provided.
3. `material`: Currently `null`. Update once certified specs are confirmed.
4. `deliveryPolicy.freeDelivery`: Set according to business rules.
5. `deliveryPolicy.paymentOnDelivery`: Currently `false`. Set to `true` once courier agreement is active.
6. `warrantyPolicy`: Update duration once customer terms are formalized.
7. Official Media:
   - High-res product images: Replace placeholders in `ProductShowcase.tsx` and `HeroSection.tsx`.
   - Demonstration video: Embed in `ProductShowcase.tsx` (`<iframe src="...">` or `<video>`).

---

## 4. Supabase Database Setup

1. Log into your [Supabase Dashboard](https://supabase.com).
2. Create or select your project.
3. Open **SQL Editor** and run the contents of:
   `supabase/migrations/20261001000000_create_orders.sql`
4. The migration will:
   - Create `public.orders` with UUID primary keys and checks on quantity (1–100) and kobo prices.
   - Enable **Row Level Security (RLS)** with policies blocking all public `anon` read/write operations.
   - Index `order_reference`, `customer_phone`, `created_at`, and `product_slug`.
   - Allow writes only via the server-side service role key.

---

## 5. Environment Variables Configuration

Copy `.env.example` to `.env.local` and populate:

```bash
cp .env.example .env.local
```

| Variable | Description | Client Exposed? |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (`https://xyz.supabase.co`) | Yes (Browser) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | Yes (Browser) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase secret service-role key | **NO** (Server Only) |
| `RESEND_API_KEY` | API Key from Resend.com | **NO** (Server Only) |
| `ORDER_NOTIFICATION_EMAIL` | Default: `order@homeessentials.com.ng` | **NO** (Server Only) |
| `EMAIL_FROM_ADDRESS` | Default: `noreply@homeessentials.com.ng` | **NO** (Server Only) |
| `EMAIL_FROM_NAME` | Default: `Home Essentials Orders` | **NO** (Server Only) |
| `NEXT_PUBLIC_SITE_URL` | Default: `https://homeessentials.com.ng` | Yes (Metadata) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Default: `2347045787045` | Yes (Browser) |

---

## 6. Running Locally and Verification

```bash
cd grandmaster-pro

# Run type check
npm run type-check

# Run automated tests
npm test

# Run ESLint
npm run lint

# Run production build
npm run build

# Start local server
npm run dev
```

---

## 7. Security & Conversion Guardrails

1. **Client Can Never Set Prices**: All monetary math is executed exclusively on the server in `src/app/api/orders/route.ts` against `product-config.ts`.
2. **Kobo Arithmetic**: All money values use integer kobo (`1 NGN = 100 kobo`) to eliminate floating-point inaccuracies.
3. **Bot Protection**: Hidden honeypot field (`_hp`) silently intercepts automated spam submissions.
4. **Rate Limiting**: IP-based rate limiting prevents abusive rapid submissions.
5. **Double-Submission Prevention**: The order form button disables immediately and indicates processing status.
6. **WhatsApp Attribution**: URL parameters (`utm_source`, `utm_medium`, `utm_campaign`, `fbclid`, `ttclid`) are captured on page entry and persisted through the order confirmation cycle.
7. **Mobile Optimization**: Total shared JS bundle is under 135 kB, designed for instant loading on 3G/4G networks across Nigeria.

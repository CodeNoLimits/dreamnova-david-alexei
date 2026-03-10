# DreamNova Consult - Audit Complet (Feb 2026)

## Performance
- Bundle: ~740KB JS for single page (too heavy)
- framer-motion listed in package.json but NEVER imported - dead weight (~140KB)
- 3 Google Fonts via CSS @import (render-blocking) - should use next/font/google
- Zero real images, only default Next.js SVGs in public/
- Entire site is single 400-line "use client" component - no SSR

## SEO
- Good: Meta tags, JSON-LD Organization, dynamic OG image, robots.ts, sitemap.ts
- Missing: canonical URLs, hreflang, analytics, Search Console verification
- JSON-LD incomplete: missing ProfessionalService, Service, Review, FAQPage schemas
- OG image stats mismatch with hero section stats

## Content Gaps vs Competitors
- Missing pages: /services/[slug], /portfolio, /blog, /a-propos, /contact, /faq
- LEGALLY REQUIRED in France: /mentions-legales, /politique-confidentialite, CGV
- RGPD: Cookie consent banner mandatory
- Missing: client logos, real founder photos, video demo, trust badges, live chat

## Competitor Pricing (France 2026)
| Agency | Pricing |
|--------|---------|
| Koino | 2,000-50,000€/project |
| Stema Partners | 1,500-50,000€ |
| OptimIA | 79€/mo SaaS; 2,000+ custom |
| Mozza | 15,000-20,000€ |
| Support Flow | 3,500+/month |
| DreamNova | 490-13,800€/mois |

## Top 20 Improvements (Prioritized)
1. **CRITICAL** Add legal pages (mentions legales, CGV, politique confidentialite)
2. **CRITICAL** Add cookie consent banner (RGPD)
3. Remove unused framer-motion (-140KB)
4. Replace Google Fonts @import with next/font/google
5. Replace mailto: CTAs with Calendly/Cal.com booking
6. Add Google Analytics or Vercel Analytics
7. Buy custom domain (dreamnova-consult.com)
8. Add contact form (Brevo/Resend)
9. Upload real founder photos
10. Fix OG image stat mismatch
11. Add client logo wall section
12. Refactor page.tsx into components
13. Fix accessibility (main landmark, aria-labels, focus trap)
14. Create /services/[slug] pages
15. Create /portfolio with 3-5 case studies
16. Enrich JSON-LD schema
17. Add FAQ section
18. Integrate Stripe Payment Links (replace mailto:)
19. Add blog (/blog)
20. Add AI chatbot widget

## Stripe Integration Plan
- Use Stripe Payment Links for MVP (zero backend)
- Or create checkout sessions with webhook handling
- Products: Solo 490€, Starter 2300€, Growth 5400€, Enterprise 13800€

## Execution Phases
- Phase 1 (Day 1-2): Legal, performance, analytics, domain, photos
- Phase 2 (Day 3-5): Conversion, trust signals, Stripe, FAQ
- Phase 3 (Week 2): Architecture, components, service pages, portfolio
- Phase 4 (Week 3+): Blog, chatbot, growth engine

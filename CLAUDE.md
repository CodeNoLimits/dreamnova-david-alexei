# CLAUDE.md — DreamNova Consult
# ================================
# Instructions pour Claude Code (Terminal Mac)
# Design: "Space Crystals" — Deep space + crystal geometry

## TU ES LES MAINS
Cloud Core Work (Cowork) = le CERVEAU qui planifie.
TOI (Claude Code) = les MAINS qui exécutent.
Cursor = l'ORCHESTRE qui polish.

## QUICK START
```bash
cd ~/Desktop/"Dream Nova David Alexei"
bash setup.sh
# Then build components one by one (see order below)
```

## TECH STACK
- Next.js 15 (App Router, TypeScript strict)
- Tailwind CSS v4
- next-intl (locales: he, en, fr — default: he)
- Framer Motion (animations)
- Stripe (Phase 2)
- lucide-react (icons)
- Deploy: Vercel

## PROJECT STRUCTURE
```
Dream Nova David Alexei/
├── .cursorrules              ← Cursor AI config
├── CLAUDE.md                 ← THIS FILE (your instructions)
├── setup.sh                  ← Run this first
├── docs/
│   ├── SPEC.md               ← Full specifications
│   ├── DESIGN-SYSTEM.md      ← Design tokens
│   └── WORKFLOW.md           ← Team workflow
├── config/
│   ├── env.example
│   └── deploy.md
├── messages/
│   ├── he.json               ← Hebrew (RTL, default)
│   ├── en.json               ← English (LTR)
│   └── fr.json               ← French (LTR)
├── styles/
│   └── globals.css           ← Space Crystals design tokens
├── app/
│   └── [locale]/
│       ├── layout.tsx        ← Root layout
│       ├── page.tsx          ← Main page
│       └── api/checkout/route.ts ← Stripe (Phase 2)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Pricing.tsx
│   ├── Process.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   └── ui/
│       ├── GlassCard.tsx
│       ├── CrystalIcon.tsx
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── SectionHeader.tsx
│       └── CrystalParticles.tsx
├── lib/
│   └── stripe.ts
└── public/
    └── images/portfolio/
```

## BUILD ORDER (follow this exact sequence)
1. Run `bash setup.sh` → initializes Next.js + deps
2. Create `styles/globals.css` (already provided by Cloud Core Work)
3. Create `messages/*.json` (already provided by Cloud Core Work)
4. Create `app/[locale]/layout.tsx`:
   - Import Outfit, Space Mono, Heebo via next/font/google
   - Set `dir={locale === 'he' ? 'rtl' : 'ltr'}`
   - Wrap with NextIntlClientProvider
   - Include background layers (nebula orbs, noise, grid)
   - Meta tags + OG tags
5. Create UI components first:
   - `components/ui/GlassCard.tsx` — reusable glass container
   - `components/ui/Button.tsx` — Primary/Secondary variants
   - `components/ui/Badge.tsx` — Pill with pulse dot
   - `components/ui/SectionHeader.tsx` — Label + Title + Subtitle
   - `components/ui/CrystalIcon.tsx` — Rotated diamond shape
   - `components/ui/CrystalParticles.tsx` — Floating background particles
6. Create sections in order:
   - `components/Navbar.tsx` — fixed, glass bg, language switcher, hamburger mobile
   - `components/Hero.tsx` — badge, h1 crystal-text, CTAs, stats, crystal decorative
   - `components/Services.tsx` — 3 glass cards with crystal icons
   - `components/Portfolio.tsx` — 4 glass cards with mock browsers
   - `components/Pricing.tsx` — 3 tiers, featured middle, WhatsApp onClick
   - `components/Process.tsx` — 4 steps, constellation line connecting
   - `components/CTA.tsx` — glass box, WhatsApp + Email buttons
   - `components/Footer.tsx` — single line, copyright, email
7. Assemble in `app/[locale]/page.tsx`
8. Test: `npm run dev` → check desktop, mobile, RTL
9. Build: `npm run build` → 0 errors
10. Deploy: `npx vercel`

## DESIGN TOKENS (Space Crystals)
```css
--bg-deep: #06060C
--glass-bg: rgba(255,255,255,0.04)
--glass-border: rgba(255,255,255,0.08)
--glass-highlight: rgba(255,255,255,0.12)
--accent-lavender: #8B7FFF
--accent-teal: #64DFDF
--accent-coral: #FF8A80
--accent-gold: #FFD93D
--text-primary: #EEEEF5
--text-secondary: rgba(238,238,245,0.5)
--text-muted: rgba(238,238,245,0.3)
--radius-card: 24px
--radius-button: 14px
--radius-pill: 100px
```

## CODING RULES
- TAM CODING: exhaustif, production-ready, zéro blabla
- AZAMRA DEBUGGING: jamais réécrire tout, trouver le bon point, itérer
- ALL text via `useTranslations()` from next-intl, NEVER hardcoded
- Mobile-first (390px → 1440px)
- RTL Hebrew + LTR English/French
- Animations: GPU-only (transform, opacity) via Framer Motion
- TypeScript strict, no `any`
- Tailwind utilities, custom CSS only in globals.css
- No localStorage/sessionStorage

## SECTION SPECS QUICK REFERENCE

### Navbar
- Logo: "DREAMNOVA" (Space Mono bold lavender) + ".consult" (muted)
- Links: smooth scroll to #services, #portfolio, #pricing, #process
- Language: 3 pills (עב | EN | FR)
- CTA: lavender filled button → scroll to #contact
- Mobile: hamburger → overlay menu
- Glass bg, fixed top, opacity increases after 100px scroll

### Hero
- Badge: pulse dot + localized text
- H1: 3 lines, line 2 has crystal-text shimmer
- Subtitle paragraph
- 2 CTAs: Primary + Secondary
- 3 stats in Space Mono (12+ / 3x / 48h)
- Decorative: large crystal diamond (desktop: right side, mobile: behind text)

### Services (3 cards)
1. Sites — crystal gem icon (lavender) — tag: "From ₪2,000"
2. AI Automation — constellation icon (teal) — tag: "Save 20+ hrs/week"
3. Social Media — prism icon (coral) — tag: "From 10 posts/month"
Each: top border gradient on hover (2px, scaleX 0→1)

### Portfolio (4 cards, 2×2 grid)
1. Barukh Sagit — gold/coral gradient
2. Kavkom Solar — teal/lavender gradient
3. Esther Ifrah — coral/gold gradient
4. HaEsh Sheli — lavender/teal gradient
Each: mock browser preview, info, tech tags

### Pricing (3 tiers)
- STARTER ₪2,000 — 5 features, glass outline button
- BUSINESS ₪5,000 — FEATURED, badge "Most Popular", 6 features, lavender button
- PREMIUM ₪10,000 — 6 features, glass outline button
onClick: WhatsApp with pre-filled message (locale-aware)

### Process (4 steps, constellation)
Desktop: horizontal, nodes connected by glowing line
Mobile: vertical, line going down
Each: crystal diamond node (16px), step number faded, title, description

### CTA
Glass box 800px centered, gradient tint, crystal decoration
H2 + subtitle + WhatsApp button + Email button

### Footer
Single line centered, copyright 2026, email link, tagline

## COMMANDS
```bash
npm run dev       # localhost:3000
npm run build     # production build
npm run lint      # lint check
npx vercel        # deploy
```

## CONTACTS
- Email: dreamnovaultimate@gmail.com
- WhatsApp: 972XXXXXXXXX (replace in .env.local)
- GitHub: codenolimits

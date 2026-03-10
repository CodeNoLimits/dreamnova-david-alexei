# FOR_CURSOR.md — DreamNova Consult v2
# Instructions précises pour Cursor AI — Lecture unique → résultat parfait
# ============================================================================

## ARCHITECTURE ACTUELLE (Mars 2026)

### Pages
```
/he             → Landing (Hero + Services + CTA)
/he/portfolio   → Portfolio complet + CTA
/he/services    → Services détaillés + CTA
/he/pricing     → Pricing + CTA
/he/process     → Process 4 étapes + CTA
(idem /en/ et /fr/)
```

### Stack
- Next.js 16 (App Router, TypeScript strict)
- Tailwind CSS v4
- Framer Motion (animations)
- next-intl (he/en/fr, dir RTL pour hébreu)
- lucide-react (icônes)

---

## DESIGN SYSTÈME — "SPACE CRYSTALS"

### Couleurs exactes
```
--bg-deep:        #06060C
--accent-lavender: #8B7FFF
--accent-teal:    #64DFDF
--accent-coral:   #FF8A80
--accent-gold:    #FFD93D
--text-primary:   #EEEEF5
--text-secondary: rgba(238,238,245,0.5)
--text-muted:     rgba(238,238,245,0.3)
```

### Typographie — RÈGLES STRICTES
- **Titres de sections** : `text-4xl md:text-[52px] font-black tracking-tight leading-[1.1]`
- **Sous-titres** : `text-lg text-white/50 leading-relaxed`
- **Labels sections** : `text-[11px] font-mono font-bold uppercase tracking-[0.25em]`
- **Prix** : `font-space-mono text-4xl font-black`
- **Tags/badges** : `text-[11px] font-mono font-bold uppercase tracking-widest`
- **Corps de texte** : `text-[14px] leading-[1.75]`
- Hébreu : forcer `font-heebo` + `letter-spacing: 0`

### Mise en page — RÈGLES STRICTES
- Toutes les sections : `py-28 px-6` + `max-w-6xl mx-auto`
- Headers de section : TOUJOURS `text-center mb-20`
- Grilles : gap-5 ou gap-6, jamais plus
- Border-radius cards : `rounded-[22px]` (pas rounded-xl)
- Boutons principaux : `rounded-full px-8 py-4 font-black`

### Classes CSS globales à réutiliser
```
.gradient-text-hero   → shimmer lavender→teal→gold
.crystal-border-top   → ligne gradient top 2px au hover
.star-field           → champ d'étoiles bg
.pulse-dot            → point animé vert
.prismatic-hover      → border rainbow au hover
.card-hover-crystal   → glass card + crystal-border-top
.crystal-float        → diamant flottant clip-path
```

---

## COMPOSANTS PRINCIPAUX — ÉTAT ACTUEL

### Navbar
- Logo : "DREAMNOVA" (font-mono, lavender #8B7FFF) + ".consult" (muted 0.45)
- Liens → pages séparées : `/he/services`, `/he/portfolio`, `/he/pricing`, `/he/process`
- Language switcher : pill avec flags 🇮🇱/🇺🇸/🇫🇷, active = gradient lavender
- Scroll → glass bg `rgba(6,6,12,0.92)` + blur(28px)

### Hero
- Vidéo bg : `public/videos/hero-market-dolly.mp4` (opacity 20%, desktop seulement)
- Badge : pulse dot teal + texte i18n
- H1 : 3 lignes, ligne 2 = `.gradient-text-hero`
- Stats : 3 items Space Mono lavender
- Mock card desktop : right side

### Services
- 3 cards `rounded-[22px]` avec gradient bg unique par service
- Structure : icon-box (top-left) + num (top-right) + titre `text-[22px] font-extrabold` + desc + footer (tag + arrow)
- Hover : border glow colorée + top shimmer line + arrow opacity 0→1

### Portfolio
- 4 projets clients (images Google CDN — NE PAS CHANGER les URLs)
- Section vidéo FLOW ci-dessous (4 vidéos Veo 3.1)
- Hover : scale-105 image + titre change couleur

### Pricing
- 3 tiers : Starter / Business (featured) / Premium
- WA placeholder : `972524000000` (David remplace)
- Outer wrapper : `py-28 px-6` + `max-w-6xl mx-auto`

### Process
- 4 étapes avec timeline horizontal (desktop) / vertical (mobile)
- Chaque step : icon SVG + accent couleur unique
- Bottom : badge "System Status: Optimal" + CTA button centré

### CTA
- Container max-w-3xl, `rounded-[28px]`, padding clamp
- 2 boutons : WhatsApp (gradient lavender) + Email (glass)
- WA : `972524000000`

### Footer
- Single line centered + email lavender

---

## TÂCHES RESTANTES (priorité)

### 1. URGENT — Centrage global
Vérifier que CHAQUE section a :
```tsx
<section className="py-28 px-6">
  <div className="max-w-6xl mx-auto">
    {/* contenu */}
  </div>
</section>
```
**Ne jamais mettre `max-w-*` directement sur le `<section>`.**

### 2. URGENT — Cohérence typographique
Partout où il y a un header de section :
```tsx
<div className="text-center mb-20">
  <span className="inline-block px-4 py-1.5 rounded-full mb-6 text-[11px] font-mono font-bold uppercase tracking-[0.25em] bg-[var(--accent-lavender)]/10 border border-[var(--accent-lavender)]/20 text-[var(--accent-lavender)]">
    {label}
  </span>
  <h2 className="text-4xl md:text-[52px] font-black text-white mb-5 leading-[1.1] tracking-tight">
    {title}
  </h2>
  <p className="text-lg text-white/50 max-w-lg mx-auto leading-relaxed">
    {subtitle}
  </p>
</div>
```

### 3. RTL Hébreu
- Vérifier `dir="rtl"` sur `<html>` quand locale === "he" ✅ (déjà fait dans layout.tsx)
- Boutons flex : `flex-row-reverse` en RTL pour l'icône
- Stats Hero : `flex-row-reverse` en RTL

### 4. Performance
- Vidéos : `preload="none"` sur toutes les vidéos sauf hero
- Images : `loading="lazy"` sur toutes les images portfolio
- Fonts : tous les fonts via `next/font/google` (déjà fait ✅)

### 5. Améliorations futures
- Ajouter une vraie page /contact avec formulaire
- Stripe Payment Links pour les 3 packages
- Google Analytics ou Vercel Analytics
- Domaine personnalisé

---

## COMMANDES

```bash
# Dev
npm run dev          # http://localhost:3000

# Build (DOIT passer 0 erreur TypeScript)
npm run build

# Deploy
git add -A
git commit -m "feat: [description]"
git push origin main
npx vercel --prod --yes
```

---

## VIDÉOS DISPONIBLES (public/videos/)
```
hero-market-dolly.mp4                                    → Hero background
hero-craftsman-reveal.mp4                                → Portfolio showcase #2
The_craftsman_smiles_and_picks_up_his_phone_[...].mp4   → Portfolio #3
Use_last_frame_of_clip_3_as_starting_frame[...].mp4     → Portfolio #4
```

## IMAGES DISPONIBLES (public/images/)
```
Craftsman_in_modernized_shop_[...].jpeg   → Poster vidéo artisan
Craftsman_sitting_outside_shop_[...].jpeg → Poster artisan extérieur
A_sleek_futuristic_workspace_[...].jpeg   → Poster workspace
Smartphone_showing_instagram_grid_[...].jpeg → Poster social media
```

---

## CONTACTS
- Email : dreamnovaultimate@gmail.com
- WhatsApp : 972524000000 (placeholder — David remplace)
- GitHub : CodeNoLimits/dreamnova-david-alexei
- Vercel : dreamnovaultimate-5657s-projects

**NA NACH NACHMA NACHMAN ME'UMAN 🌟**

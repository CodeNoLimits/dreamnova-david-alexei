# FOR_CURSOR.md — DreamNova Consult
# Instructions complètes pour Cursor AI (lecture unique → résultat parfait)
# =========================================================================

## CONTEXTE RAPIDE
Tu travailles sur **dreamnova-site** — landing page trilingue (HE/EN/FR) pour DreamNova Consult, agence AI à Jérusalem.
Stack: Next.js 15, TypeScript strict, Tailwind CSS v4, next-intl, Veo 3.1 (vidéos AI).

**Design système**: "Space Crystals" — fond deep space `#06060C`, glass cards, accent lavender `#8B7FFF` + teal `#64DFDF`.

---

## CE QUI EST DÉJÀ FAIT (ne pas retoucher sauf mention)
- ✅ Structure Next.js complète (`app/[locale]/`, middleware, i18n)
- ✅ Traductions complètes: `messages/he.json`, `messages/en.json`, `messages/fr.json`
- ✅ Tous les composants: Navbar, Hero, Services, Portfolio, Pricing, Process, CTA, Footer
- ✅ Design Space Crystals dans `app/globals.css`
- ✅ Fonts: Space Grotesk + Space Mono + Heebo (RTL hébreu)
- ✅ Images portfolio réelles (4 projets clients avec photos Google-hosted)
- ✅ Vidéos AI dans `public/videos/` (Veo 3.1, Mahane Yehuda)
- ✅ Screenshots Stitch dans `public/stitch-refs/` (4 fichiers PNG = références visuelles)

---

## RÉFÉRENCES VISUELLES (OBLIGATOIRE — regarde ces fichiers)
```
public/stitch-refs/stitch-1.png  → Design Hero + Navbar
public/stitch-refs/stitch-2.png  → Design Services + Portfolio
public/stitch-refs/stitch-3.png  → Design Pricing + Process
public/stitch-refs/stitch-4.png  → Design CTA + Footer
```
Ces screenshots Stitch = le look EXACT à reproduire. Chaque composant doit correspondre pixel par pixel à ces références.

---

## VIDÉOS AI DISPONIBLES
```
public/videos/hero-market-dolly.mp4     → Plan dolly Mahane Yehuda, arches pierre, golden hour
public/videos/hero-craftsman-reveal.mp4 → Bijoutier + smartphone + pull-back Jérusalem
```
Ces vidéos sont des plans cinématiques de Jérusalem/Mahane Yehuda générés avec Veo 3.1 (Google Flow).

---

## TÂCHES À FAIRE (dans cet ordre exact)

### 1. HERO — Ajouter la vidéo en arrière-plan
Dans `components/Hero.tsx`, ajoute un lecteur vidéo en fond de la section hero (desktop seulement):
```tsx
// Dans la section hero, AVANT le contenu texte:
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-20 hidden lg:block"
  style={{ zIndex: -1 }}
>
  <source src="/videos/hero-market-dolly.mp4" type="video/mp4" />
</video>
```
La section hero doit avoir `position: relative` et `overflow: hidden`.
La vidéo doit être en fondu (opacity 15-25%) derrière le texte, jamais au-dessus.

### 2. PORTFOLIO — Section vidéo après les 4 projets clients
Dans `components/Portfolio.tsx`, ajoute une card supplémentaire APRÈS la grille 2x2 existante:
```tsx
{/* Video showcase — Cinematic AI videos */}
<div className="mt-12 rounded-xl overflow-hidden" style={{
  border: "1px solid rgba(139,127,255,0.3)",
  background: "rgba(139,127,255,0.05)",
}}>
  <video
    controls
    playsInline
    className="w-full"
    style={{ maxHeight: "480px", objectFit: "cover" }}
    poster="/stitch-refs/stitch-1.png"
  >
    <source src="/videos/hero-craftsman-reveal.mp4" type="video/mp4" />
  </video>
  <div className="p-6">
    <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#8B7FFF" }}>
      AI Cinematic Video
    </span>
    <h3 className="text-xl font-bold mt-2" style={{ color: "#EEEEF5" }}>
      Jerusalem — Mahane Yehuda Transform
    </h3>
    <p className="text-sm mt-1" style={{ color: "rgba(238,238,245,0.5)" }}>
      Generated with Veo 3.1 · 32 seconds · 4 segments extended
    </p>
  </div>
</div>
```

### 3. POLISH GLOBAL — Match Stitch references exactement
**Regarde les 4 screenshots Stitch** et ajuste chaque composant:

#### Navbar (`components/Navbar.tsx`)
- Logo: "DREAMNOVA" en Space Mono bold lavender `#8B7FFF` + ".consult" en muted
- Background: `rgba(6,6,12,0.85)` + `backdropFilter: blur(24px)` au scroll
- Mobile: hamburger menu fonctionnel avec overlay dark
- Language switcher: 3 pills `עב | EN | FR` — actif = border lavender

#### Hero (`components/Hero.tsx`)
- Badge animé: pulse dot teal + texte traduit
- H1: ligne 2 avec `gradient-text-hero` (lavender→teal, déjà défini dans globals.css)
- Stats: Space Mono, couleur lavender, `12+ | 3x | 48h`
- CTA primaire: `background: linear-gradient(135deg, #6961ff, #8B7FFF)` + glow shadow

#### Services (`components/Services.tsx`)
- 3 cards glass avec `crystal-border-top` hover (déjà en globals.css)
- Icons: ◆ (lavender) | ✦ (teal) | ▲ (coral `#FF8A80`)
- Tags en bas: pill monospace avec border colored

#### Portfolio (`components/Portfolio.tsx`)
- 4 cards existantes: images réelles (lh3.googleusercontent.com URLs — NE PAS CHANGER)
- Hover: `group-hover:scale-110` sur l'image + accent color sur le titre
- `prismatic-hover` class sur chaque card (déjà en globals.css)

#### Pricing (`components/Pricing.tsx`)
- 3 tiers: STARTER ₪2,000 | BUSINESS ₪5,000 (featured) | PREMIUM ₪10,000
- Featured card: ring lavender + badge "Most Popular"
- Bouton WhatsApp: ouvre `https://wa.me/972XXXXXXXXX` avec message pré-rempli localisé
- **IMPORTANT**: remplace `972XXXXXXXXX` par `972524000000` (placeholder — David change après)

#### Process (`components/Process.tsx`)
- 4 steps avec numéros faded en arrière-plan (01→04)
- Connecting lines: SVG ou div avec gradient lavender→teal (desktop seulement)
- "System Status: Optimal" badge en bas avec pulse dot teal

#### CTA (`components/CTA.tsx`)
- Box glass centré max-w 800px
- 2 boutons: WhatsApp (lavender filled) + Email (glass outline)
- Crystal decorations dans les coins (divs avec clip-path diamond, déjà dans globals.css)

#### Footer (`components/Footer.tsx`)
- Single line: `© 2026 DreamNova Consult · dreamnovaultimate@gmail.com · Jerusalem, Israel`
- Email en lavender linkable

### 4. RTL HÉBREU — Vérification
- Quand locale = `he`: `dir="rtl"` sur `<html>` (déjà dans layout.tsx ✅)
- Tous les flex/grid doivent fonctionner en RTL
- Tester avec `?locale=he` en URL

### 5. MOBILE RESPONSIVE
- Tester 390px (iPhone 15) sur chaque section
- Navbar mobile: hamburger → overlay fullscreen dark avec les 3 liens
- Hero: 1 colonne, vidéo cachée, texte centré
- Portfolio: 1 colonne
- Pricing: 1 colonne, featured en premier

### 6. PERFORMANCE
- Vidéos: `loading="lazy"` + `preload="none"` pour ne pas bloquer le LCP
- Images: balises `<img>` avec `loading="lazy"` (déjà en place)
- CSS animations: GPU-only (`transform`, `opacity`) — pas de `top/left`

---

## DESIGN TOKENS EXACTS (copier-coller dans le code)
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
```

## CLASSES CSS CLÉS (déjà dans globals.css — utilise-les)
```css
.gradient-text-hero     → shimmer lavender→teal→gold
.prismatic-hover        → border rainbow au hover
.crystal-border-top     → ligne gradient top 2px au hover (scaleX 0→1)
.crystal-float          → diamant flottant animé (clip-path)
.star-field             → champ d'étoiles en arrière-plan
.pulse-dot              → point vert animé (badge statut)
.card-hover-crystal     → glass card avec crystal-border-top
```

---

## BUILD & VÉRIFICATION
```bash
# Depuis dreamnova-site/
npm run build    # DOIT passer sans erreur TypeScript ni ESLint
npm run dev      # Tester sur http://localhost:3000
# Vérifier: ?locale=he (RTL), ?locale=en, ?locale=fr
```

**Erreurs fréquentes à éviter:**
- Ne pas utiliser `new Stripe()` au niveau module (lazy init dans route handler seulement)
- Toujours `"use client"` sur les composants avec hooks
- `useTranslations()` côté client seulement (pas dans layout.tsx server)
- Images externes: ajouter le domaine dans `next.config.ts` si nécessaire

---

## DÉPLOIEMENT (après build propre)
```bash
# GitHub
cd /Users/codenolimits-dreamai-nanach/Desktop/"Dream Nova David Alexei"/dreamnova-site
git add -A
git commit -m "feat: polish final Space Crystals + vidéos AI Veo 3.1"
git push origin main

# Vercel (token dans ~/.zshrc VERCEL_TOKEN ou demander à David)
vercel --prod
```

**Vercel config:**
- Token: voir David (stocké dans CLAUDE.md global, jamais dans le code)
- Team: `dream-ais-projects`
- Framework: Next.js (auto-détecté)
- Désactiver Vercel Auth (public access)

---

## RÉSULTAT ATTENDU
- Site en production sur Vercel (URL fournie après deploy)
- Lighthouse > 90 (performance, accessibilité, SEO)
- RTL hébreu parfait
- Vidéo Mahane Yehuda visible en hero (desktop) + dans portfolio
- Toutes les sections matchent exactement les screenshots Stitch

---

## CONTACTS / INFOS
- Email: dreamnovaultimate@gmail.com
- WhatsApp: 972524000000 (placeholder — David remplace le vrai numéro)
- GitHub: codenolimits
- Vercel: dream-ais-projects team

**NA NACH NACHMA NACHMAN ME'UMAN — EIN YE'UCH BA'OLAM KLAL** 🌟

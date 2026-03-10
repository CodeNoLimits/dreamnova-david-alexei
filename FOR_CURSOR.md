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

### 3. POLISH GLOBAL — Match Stitch references + ÉLEVER CHAQUE SECTION

⚠️ **CRITIQUE**: Le Hero est beau MAIS les sections en dessous (Services, Portfolio, Pricing, Process) sont trop plates et ternes. Chaque section doit être AUSSI spectaculaire que le Hero. Pas d'excuse. Référence: les 4 Stitch screenshots.

**Regarde les 4 screenshots Stitch** et applique ces améliorations OBLIGATOIRES:

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

#### Services (`components/Services.tsx`) — ⚠️ SECTION LA PLUS IMPORTANTE À FIXER
Le problème actuel: cards trop sombres, trop plates, pas de profondeur. Fix OBLIGATOIRE:
```tsx
// Chaque card doit avoir:
// 1. Un fond glass vrai avec highlight en haut
style={{
  background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "24px",
  backdropFilter: "blur(20px)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
}}
// 2. L'icône doit avoir un glow coloré:
// Card 1 (lavender): filter: drop-shadow(0 0 12px rgba(139,127,255,0.6))
// Card 2 (teal):     filter: drop-shadow(0 0 12px rgba(100,223,223,0.6))
// Card 3 (coral):    filter: drop-shadow(0 0 12px rgba(255,138,128,0.6))
// 3. Au hover: border-color → accent color + box-shadow avec glow accent
// 4. Tag en bas: fond rgba(accent, 0.15) + border 1px solid rgba(accent, 0.3) + font-mono
// 5. Section background: ajouter un orbe de lumière colored derrière chaque card
```
- Icons: ◆ (lavender 28px) | ✦ (teal 28px) | ▲ (coral 28px) — avec glow comme ci-dessus
- Titre card: 20px bold, `color: #EEEEF5`
- Description: 14px, `color: rgba(238,238,245,0.6)`, line-height 1.7
- Tags en bas: pill monospace avec border colored (voir code ci-dessus)

#### Portfolio (`components/Portfolio.tsx`)
- **METTRE À JOUR avec les vraies URLs des projets clients:**
  1. **Barukh Sagit** → `https://barukh-sagit-jewelry.vercel.app` — bijouterie artisanale
  2. **HaEsh Sheli** → `https://haesh-sheli-new.vercel.app` — LE PLUS BEAU — le mettre en featured/premier
  3. **Esther Ifrah** → `https://ultime-esther-ifra-breslev.vercel.app` — mode feminine Breslev
  4. **Moulin d'Ore** → `https://moulindore.co.il` — nouveau client à ajouter
- Chaque card: `overflow: hidden`, `border-radius: 20px`, border glass
- Image wrapper: `aspect-ratio: 16/10`, overflow hidden
- Hover: `group-hover:scale-105` sur l'image (PAS 110 — trop agressif) + accent color sur le titre
- Overlay gradient sur l'image au hover: `linear-gradient(to top, rgba(6,6,12,0.8), transparent)`
- Info section sous l'image: titre bold + tech tags pills colorés + lien "Voir →" en lavender
- `prismatic-hover` class sur chaque card (déjà en globals.css)

#### Pricing (`components/Pricing.tsx`) — ⚠️ CARTE FEATURED DOIT BRILLER
- 3 tiers: STARTER ₪2,000 | BUSINESS ₪5,000 (featured) | PREMIUM ₪10,000
- Cartes normales: glass simple `rgba(255,255,255,0.04)` border `rgba(255,255,255,0.08)`
- Featured card OBLIGATOIRE:
  ```css
  background: linear-gradient(135deg, rgba(139,127,255,0.12), rgba(100,223,223,0.06));
  border: 1px solid rgba(139,127,255,0.4);
  box-shadow: 0 0 40px rgba(139,127,255,0.15), 0 20px 60px rgba(0,0,0,0.5);
  transform: scale(1.04);
  ```
- Badge "Most Popular": fond lavender, texte blanc, position absolute top -14px centré
- Prix: font-size 48px bold, gradient lavender→teal via `gradient-text-hero`
- Features list: checkmark ✓ en teal, texte lisible, spacing correct
- Bouton featured: `background: linear-gradient(135deg, #6961ff, #8B7FFF)` + glow + hover scale(1.02)
- Bouton WhatsApp: ouvre `https://wa.me/972524000000` avec message pré-rempli localisé

#### Process (`components/Process.tsx`) — ⚠️ NUMÉROS FADED + LIGNE LUMINEUSE
- 4 steps avec numéros GÉANTS faded en arrière-plan: `font-size: 120px, opacity: 0.06, font-weight: 900`
- Node diamond: `clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`, 16px, bg lavender
- Connecting line desktop: `background: linear-gradient(90deg, #8B7FFF, #64DFDF)`, height 2px, opacity 0.4
- Titre step: 16px bold lavender
- "System Status: Operational" badge en bas: pulse dot teal + border teal

#### CTA (`components/CTA.tsx`) — ⚠️ DOIT ÊTRE LE CLIMAX VISUEL
- Box glass centré max-w 800px avec:
  ```css
  background: linear-gradient(135deg, rgba(139,127,255,0.08), rgba(100,223,223,0.04));
  border: 1px solid rgba(139,127,255,0.25);
  box-shadow: 0 0 80px rgba(139,127,255,0.08);
  border-radius: 32px;
  padding: 64px;
  ```
- H2: gradient text lavender→teal
- Subtitle: muted, max-width 480px, centré
- 2 boutons côte à côte: WhatsApp (lavender filled, glow) + Email (glass outline avec hover glow)
- Crystal decorations dans les coins (divs avec clip-path diamond, déjà dans globals.css)
- Fond de section: orbe lavender diffus centré derrière la box

#### Footer (`components/Footer.tsx`)
- Single line: `© 2026 DreamNova Consult · dreamnovaultimate@gmail.com · Jerusalem, Israel`
- Email en lavender linkable
- Tagline Na Nach en muted très petit, centré sous le copyright

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

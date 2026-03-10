# DreamNova Consult — Design System
# ====================================

## COLOR PALETTE

### Backgrounds
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-deep` | `#0a0a0f` | Page background |
| `--bg-surface` | `rgba(255,255,255,0.03)` | Subtle surface |
| `--glass-bg` | `rgba(255,255,255,0.06)` | Glass card fill |
| `--glass-border` | `rgba(255,255,255,0.1)` | Glass card border |
| `--glass-highlight` | `rgba(255,255,255,0.15)` | Hover state border |

### Accents
| Token | Value | Usage |
|-------|-------|-------|
| `--accent-primary` | `#6C63FF` | Primary purple (buttons, links) |
| `--accent-glow` | `#8B83FF` | Hover state purple |
| `--accent-warm` | `#FF6B6B` | Warm red (alerts, emphasis) |
| `--accent-gold` | `#FFD93D` | Gold (premium, stars) |
| `--accent-teal` | `#4ECDC4` | Teal (success, tags) |

### Text
| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `#f0f0f5` | Main text |
| `--text-secondary` | `rgba(240,240,245,0.6)` | Body text |
| `--text-muted` | `rgba(240,240,245,0.35)` | Labels, hints |

## TYPOGRAPHY

### Font Families
- **Display/Body (Latin):** Outfit (300-800)
- **Display/Body (Hebrew):** Heebo (300-800)
- **Monospace:** Space Mono (400, 700)

### Font Sizes
| Name | Size | Weight | Usage |
|------|------|--------|-------|
| Hero H1 | clamp(2.8rem, 6vw, 4.5rem) | 800 | Main headline |
| Section Title | clamp(2rem, 4vw, 3rem) | 700 | Section headers |
| Card Title | 1.25rem | 700 | Card headers |
| Body | 1rem | 400 | Paragraphs |
| Small | 0.9rem | 400-500 | Descriptions |
| Label | 0.8rem | 600 | Tags, badges |
| Mono Label | 0.8rem | 600 | Section labels |

## SPACING & RADIUS

### Border Radius
| Token | Value |
|-------|-------|
| `--radius-sm` | 12px |
| `--radius-md` | 20px |
| `--radius-lg` | 32px |

### Spacing
- Section padding: 100px vertical
- Container max-width: 1200px
- Card padding: 32-40px
- Grid gap: 24px

## GLASS CARD RECIPE
```css
.glass {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.glass:hover {
  border-color: rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.08);
}
```

## BACKGROUND EFFECTS

### Animated Orbs
3 orbs with blur(120px), opacity 0.15, float animation 20s
- Orb 1: Purple (#6C63FF), 600px, top-left
- Orb 2: Red (#FF6B6B), 500px, mid-right
- Orb 3: Teal (#4ECDC4), 400px, bottom-center

### Noise Overlay
SVG noise texture, opacity 0.03

### Grid Overlay
80px grid lines, opacity 0.02

## ANIMATIONS

### Scroll Reveal
```css
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.16,1,0.3,1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Fade Up (Hero)
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Pulse (Badge dot)
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}
```

## GRADIENT TEXT
```css
.gradient-text {
  background: linear-gradient(135deg, #6C63FF, #4ECDC4, #FFD93D);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## RESPONSIVE BREAKPOINTS
| Breakpoint | Behavior |
|------------|----------|
| > 900px | Full desktop layout |
| 600-900px | 2-col grids, hide nav links, show hamburger |
| < 600px | 1-col everything, stacked stats |

## RTL/LTR HANDLING
- Hebrew (he): dir="rtl", font-family: Heebo first
- English/French: dir="ltr", font-family: Outfit first
- Process step numbers: position based on dir attribute

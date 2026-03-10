# Deployment Guide — DreamNova Consult
# ======================================

## Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_WHATSAPP_NUMBER
vercel env add NEXT_PUBLIC_CONTACT_EMAIL

# Production deploy
vercel --prod
```

## Option 2: Netlify (Simple HTML)
For the standalone HTML version:
1. Drag & drop `dreamnova-landing.html` to netlify.com/drop
2. Set custom domain in Netlify dashboard
3. Enable HTTPS (automatic)

## Domain Setup
- Buy domain: dreamnova.co.il or dreamnova-consult.com
- Point DNS to Vercel/Netlify
- Enable SSL certificate

## Post-Deploy Checklist
- [ ] WhatsApp number replaced (972XXXXXXXXX → real number)
- [ ] Email verified
- [ ] Google Analytics connected
- [ ] Google Search Console submitted
- [ ] OG image and meta tags verified
- [ ] Mobile responsiveness tested
- [ ] Lighthouse score > 90
- [ ] All three languages working (HE/EN/FR)

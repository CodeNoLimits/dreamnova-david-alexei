"use client"

import { motion } from "framer-motion"

const plans = [
  {
    name: "Solo",
    price: "490",
    period: "one-shot",
    desc: "Formation IA personnalisée pour démarrer",
    features: [
      "5 sessions de formation IA (1h)",
      "Setup ChatGPT/Claude personnalisé",
      "Workflow automatisé de base",
      "Support WhatsApp 30 jours",
    ],
    cta: "Commencer",
    popular: false,
  },
  {
    name: "Starter",
    price: "2 300",
    period: "projet",
    desc: "Site web premium + présence digitale",
    features: [
      "Site web Next.js (5-8 pages)",
      "Design premium responsive",
      "SEO technique + contenu",
      "Hébergement Vercel 1 an",
      "Chatbot WhatsApp basique",
      "Support 60 jours",
    ],
    cta: "Choisir Starter",
    popular: false,
  },
  {
    name: "Growth",
    price: "5 400",
    period: "projet",
    desc: "Système d'acquisition complet",
    features: [
      "Tout Starter inclus",
      "Machine à leads IA (80/jour)",
      "Voice bot / chatbot avancé",
      "CRM automatisé",
      "Dashboard analytics",
      "Campagnes email IA",
      "Support prioritaire 90 jours",
    ],
    cta: "Choisir Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "13 800",
    period: "trimestre",
    desc: "Infrastructure TerraMind complète",
    features: [
      "Tout Growth inclus",
      "7 agents IA dédiés 24/7",
      "Architecture CEO/CTO/COO",
      "Acquisition multi-canal",
      "Voice agents illimités",
      "Infrastructure cloud gérée",
      "Reporting hebdo + call mensuel",
      "SLA 99.9% uptime",
    ],
    cta: "Contacter David",
    popular: false,
  },
]

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-24 bg-[#06060C]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">
            Tarifs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Investissez dans votre Empire
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ROI moyen x3.4 sur 12 mois. Chaque euro investi travaille pour vous 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.popular
                  ? "border-[#D4AF37]/40 bg-[#D4AF37]/5 scale-[1.02]"
                  : "border-white/5 bg-[#0D0D16]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-black text-xs font-bold rounded-full uppercase tracking-wider">
                  Populaire
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-600 text-sm">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-[#D4AF37]">{plan.price}€</span>
                <span className="text-gray-600 text-sm ml-1">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-[#D4AF37] mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/972584921492?text=Bonjour%20David%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20forfait%20${plan.name}%20%F0%9F%9A%80`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#D4AF37] text-black hover:bg-[#F5D78E]"
                    : "border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

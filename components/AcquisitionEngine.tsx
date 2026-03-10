"use client"

import { motion } from "framer-motion"

const cards = [
  {
    icon: "⚡",
    title: "Extraction Asymétrique",
    desc: "80 leads qualifiés/jour via scraping légal + enrichissement IA. Zero publicité payante.",
    stat: "80 leads/jour",
    color: "#D4AF37",
  },
  {
    icon: "🧠",
    title: "Filtrage TerraMind",
    desc: "Scoring comportemental temps réel. Seuls les prospects à 78%+ d'intention d'achat passent.",
    stat: "78% intent score",
    color: "#3B82F6",
  },
  {
    icon: "🎙️",
    title: "Infiltration Vocale IA",
    desc: "Voix synthétique indiscernable, scripts dynamiques, 340 appels/jour. Coût marginal: 0€.",
    stat: "340 appels/jour",
    color: "#8B5CF6",
  },
  {
    icon: "🛡️",
    title: "Commandement Autonome",
    desc: "Dashboard temps réel. Alertes Telegram. Self-healing si crash. Supervision 0 heure.",
    stat: "24/7 autonomous",
    color: "#10B981",
  },
]

export default function AcquisitionEngine() {
  return (
    <section id="acquisition" className="py-24 bg-[#06060C]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">
            Acquisition Engine
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            La Machine à Clients
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Quatre systèmes autonomes qui travaillent pendant que vous dormez.
            Architecture propriétaire TerraMind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative p-8 rounded-2xl border border-white/5 bg-[#0D0D16] overflow-hidden group cursor-default"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${card.color}18 0%, transparent 70%)`,
                }}
              />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{card.icon}</div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-3 font-mono"
                  style={{ color: card.color }}
                >
                  {card.stat}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

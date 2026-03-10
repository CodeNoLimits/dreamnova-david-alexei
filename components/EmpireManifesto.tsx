"use client"

import { motion } from "framer-motion"

const protocols = [
  {
    number: "01",
    title: "Ein Ye'ush Ba'olam Klal",
    subtitle: "Il n'y a pas de désespoir dans le monde",
    desc: "Chaque projet lancé, même imparfait, génère du signal. Le signal génère de la donnée. La donnée génère du revenu. Nous ne nous arrêtons jamais.",
    source: "Rabbi Nahman de Breslev",
  },
  {
    number: "02",
    title: "Cash-First Filter",
    subtitle: "Revenue en < 7 jours ou MVP en < 15 lignes",
    desc: "Avant chaque décision technique : est-ce que ça génère un paiement cette semaine ? Si non → MVP rapide → valider → scaler. Zéro engineering spéculatif.",
    source: "TerraMind Protocol v2",
  },
  {
    number: "03",
    title: "ADHD Multithreading",
    subtitle: "Vision macro × exécution IA parallèle",
    desc: "L'ADHD n'est pas un bug, c'est une feature. Vision systémique + 7 agents IA en parallèle = vitesse d'exécution impossible pour une équipe classique.",
    source: "David Amor, Jerusalem 2026",
  },
]

export default function EmpireManifesto() {
  return (
    <section id="manifesto" className="py-24 bg-[#06060C] relative overflow-hidden">
      {/* HAFATSA watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[18vw] font-black tracking-widest text-white"
          style={{ opacity: 0.018, fontStretch: "ultra-condensed" as const }}
        >
          HAFATSA
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">
            Le Manifeste
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-4">
            63,000,000$
          </h2>
          <p className="text-gray-400 text-lg">
            Mission Hafatsa · Rabbi Nachman · 7 ans · 1 homme · 7 agents IA
          </p>
        </motion.div>

        <div className="space-y-5">
          {protocols.map((protocol, i) => (
            <motion.div
              key={protocol.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group flex gap-8 p-8 rounded-2xl border border-white/5 bg-[#0D0D16] hover:border-[#D4AF37]/20 transition-all duration-300"
            >
              <div
                className="text-7xl font-black text-transparent shrink-0 leading-none"
                style={{ WebkitTextStroke: "1px rgba(212,175,55,0.25)" }}
              >
                {protocol.number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{protocol.title}</h3>
                <div className="text-[#D4AF37] text-sm font-mono mb-3">{protocol.subtitle}</div>
                <p className="text-gray-500 leading-relaxed mb-3">{protocol.desc}</p>
                <div className="text-xs text-gray-700 font-mono">— {protocol.source}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5"
        >
          <p className="text-[#D4AF37] text-xl font-mono mb-3">Na Nach Nachma Nachman MeUman</p>
          <p className="text-gray-500">
            1,000,000 Nova Keys × 63$ = 63,000,000$
          </p>
          <p className="text-gray-700 text-sm mt-2">
            Hafatsa · Spreading the light of Rabbi Nachman to the world
          </p>
        </motion.div>
      </div>
    </section>
  )
}

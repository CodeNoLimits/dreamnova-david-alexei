"use client"

import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0A0A12] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Construire votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F5D78E]">
              Empire Digital
            </span>
            ?
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Audit ROI gratuit · Résultats en 72h · ROI moyen ×3.4
            <br />
            Un seul appel suffit pour tout lancer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/972584921492?text=Bonjour%20David%2C%20je%20veux%20lancer%20mon%20projet%20avec%20TerraMind%20%F0%9F%9A%80"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#F5D78E] transition-all duration-300 hover:scale-105 text-lg"
            >
              💬 WhatsApp David
            </a>
            <a
              href="mailto:dreamnovaultimate@gmail.com?subject=Projet%20TerraMind"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:border-[#D4AF37]/50 hover:bg-white/5 transition-all duration-300 text-lg"
            >
              ✉️ dreamnovaultimate@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: "84+", label: "Projets live" },
              { value: "<72h", label: "Délai moyen" },
              { value: "×3.4", label: "ROI 12 mois" },
              { value: "24/7", label: "Support IA" },
            ].map(s => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-[#D4AF37]">{s.value}</p>
                <p className="text-xs text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

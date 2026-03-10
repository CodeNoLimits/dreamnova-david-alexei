"use client"

import { motion } from "framer-motion"

const projects = [
  {
    name: "Keren Rabbi Yisrael",
    type: "E-commerce Breslev",
    url: "https://haesh-sheli-new.vercel.app",
    desc: "43 livres sacrés · 6 langues · RTL/LTR · Stripe + PayPal · 100/100 tâches",
    tag: "LIVE ✓",
    color: "#FF6B00",
  },
  {
    name: "Barukh Sagit Jewelry",
    type: "E-commerce Luxe",
    url: "https://barukh-sagit-jewelry.vercel.app",
    desc: "341 produits · 2078 images WebP · 3 langues · Design Cartier/Tiffany",
    tag: "LIVE ✓",
    color: "#D4AF37",
  },
  {
    name: "Breslev Books",
    type: "Bibliothèque digitale",
    url: "https://ultime-esther-ifra-breslev.vercel.app",
    desc: "Catalogue complet Esther Ifrah · Téléchargements PDF · Multi-langue",
    tag: "LIVE ✓",
    color: "#8B5CF6",
  },
  {
    name: "DreamNova Portfolio",
    type: "Vitrine agence",
    url: "https://dreamnova-portfolio.vercel.app",
    desc: "Portfolio ultra-premium · Animations Framer Motion · Thème luxe noir/or",
    tag: "LIVE ✓",
    color: "#10B981",
  },
  {
    name: "Nachman Science",
    type: "Plateforme académique",
    url: "https://nachman-science.vercel.app",
    desc: "Recherche H(F)=1.846 bits · 185 références · Paper académique interactif",
    tag: "LIVE ✓",
    color: "#F59E0B",
  },
  {
    name: "DreamNova Status Hub",
    type: "Dashboard infrastructure",
    url: "https://dreamnova-status-hub.vercel.app",
    desc: "8 sites live · Monitoring temps réel · 84 projets Vercel · Stripe actif",
    tag: "LIVE ✓",
    color: "#3B82F6",
  },
]

export default function EcosystemShowcase() {
  return (
    <section id="ecosystem" className="py-24 bg-[#0A0A12]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">
            Portfolio Live
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            L&apos;Écosystème en Action
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pas des maquettes. Des systèmes en production.
            84 déploiements Vercel actifs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group block p-6 rounded-2xl border border-white/5 bg-[#0D0D16] hover:border-[#D4AF37]/20 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span
                  className="text-xs font-mono font-bold px-2 py-1 rounded-full"
                  style={{ color: project.color, background: `${project.color}18` }}
                >
                  {project.tag}
                </span>
                <span className="text-xs text-gray-600 font-mono">{project.type}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
              <div className="mt-4 text-[#D4AF37] text-sm opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                Voir le projet →
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center p-6 rounded-2xl border border-white/5 bg-[#0D0D16]"
        >
          <span className="text-gray-500 font-mono text-sm">
            + 80 autres déploiements actifs ·{" "}
            <a
              href="https://dreamnova-project-map.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline"
            >
              Voir la carte complète →
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

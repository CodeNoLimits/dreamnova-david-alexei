"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Lock } from "lucide-react"

export default function TerminalROI() {
  const [revenue, setRevenue] = useState(50000)
  const [hours, setHours] = useState(40)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const roi = Math.round(revenue * 3.4)
  const savedHours = Math.round(hours * 0.6)
  const gain = Math.round(revenue * 0.4)

  const logs = [
    "$ esther.init() → TerraMind Core v2.1 ready",
    `$ analyzing.revenue(${revenue.toLocaleString()}€) → impact: +${gain.toLocaleString()}€`,
    `$ scanning.ops(${hours}h/week) → automation: ${savedHours}h freed`,
    `$ projecting.roi() → 12-month estimate: ${roi.toLocaleString()}€`,
    "$ status: ACQUISITION_ENGINE_READY",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, revenue, hours, roi }),
      })
    } catch {
      // Silent fail — UX must not be blocked
    }
    setSubmitted(true)
  }

  return (
    <section id="audit-roi" className="py-24 bg-[#06060C]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Audit R.O.I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F5D78E]">IA</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Simulez l&apos;impact TerraMind sur votre business en 60 secondes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#06060C] border border-[#D4AF37]/20 rounded-2xl overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0D0D16] border-b border-[#D4AF37]/10">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-gray-500 text-sm font-mono">esther.terramind.sh</span>
          </div>

          {/* Terminal logs */}
          <div className="p-6 font-mono text-sm bg-[#060609]">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12 }}
                className="text-green-400 mb-2"
              >
                {log}
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="px-6 pb-6 space-y-6 border-t border-[#D4AF37]/10 pt-6 bg-[#0A0A12]">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Revenus annuels actuels</span>
                <span className="text-[#D4AF37] font-bold">{revenue.toLocaleString()}€</span>
              </div>
              <input
                type="range" min="10000" max="500000" step="5000"
                value={revenue} onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full accent-[#D4AF37]"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Heures opérationnelles/semaine</span>
                <span className="text-[#D4AF37] font-bold">{hours}h</span>
              </div>
              <input
                type="range" min="5" max="80" step="5"
                value={hours} onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-[#D4AF37]"
              />
            </div>

            {/* ROI display */}
            <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-5 text-center">
              <div className="text-gray-400 text-sm mb-1">Projection ROI 12 mois (×3.4)</div>
              <div className="text-5xl font-bold text-[#D4AF37]">{roi.toLocaleString()}€</div>
              <div className="text-green-400 text-sm mt-2">+{savedHours}h/semaine libérées par l&apos;automatisation</div>
            </div>

            {/* Email capture */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-[#0D0D16] border border-[#D4AF37]/30 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] placeholder-gray-600 text-sm"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-bold rounded-lg hover:bg-[#F5D78E] transition-all text-sm whitespace-nowrap"
                >
                  <Lock size={15} />
                  Recevoir le rapport
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-3"
              >
                <div className="text-center py-3 text-green-400 font-mono text-sm">
                  ✓ Rapport envoyé à {email} — réponse sous 24h
                </div>
                <a
                  href={`https://wa.me/972584921492?text=Bonjour%20David%2C%20j%27ai%20utilis%C3%A9%20le%20calculateur%20TerraMind%20%E2%80%94%20ROI%20projet%C3%A9%20${roi.toLocaleString()}%E2%82%AC%20%F0%9F%9A%80`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all text-sm"
                >
                  💬 Discuter maintenant sur WhatsApp
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Sparkles } from "lucide-react";

export default function CTA() {
  const t = useTranslations("cta");
  const locale = useLocale();

  const WHATSAPP = "972544636377";

  const waMsg = locale === "he"
    ? "\u05e9\u05dc\u05d5\u05dd DreamNova, \u05d0\u05e0\u05d9 \u05e8\u05d5\u05e6\u05d4 \u05dc\u05d3\u05d1\u05e8 \u05e2\u05dc \u05d4\u05e4\u05e8\u05d5\u05d9\u05e7\u05d8 \u05e9\u05dc\u05d9"
    : locale === "fr"
    ? "Bonjour DreamNova, je voudrais parler de mon projet"
    : "Hi DreamNova, I'd like to talk about my project";

  const badgeText = locale === "he"
    ? "\u05e9\u05d9\u05d7\u05ea \u05d4\u05d9\u05db\u05e8\u05d5\u05ea \u05d7\u05d9\u05e0\u05dd"
    : locale === "fr"
    ? "Appel D\u00e9couverte Gratuit"
    : "Free Discovery Call";

  return (
    <section id="cta" className="relative z-10 py-24 px-4 sm:px-6">
      {/* Section divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,138,128,0.4), transparent)" }}
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[28px] overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, rgba(139,127,255,0.1) 0%, rgba(100,223,223,0.06) 50%, rgba(139,127,255,0.06) 100%)",
            border: "1px solid rgba(139,127,255,0.2)",
            backdropFilter: "blur(30px)",
            padding: "clamp(2.5rem, 6vw, 4.5rem)",
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 -translate-y-1/2 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(139,127,255,0.25) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* Decorative crystal */}
          <div
            className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-[0.06]"
            style={{
              background: "linear-gradient(135deg, #8B7FFF, #64DFDF)",
              transform: "rotate(45deg) translate(30%, -30%)",
              borderRadius: "24px",
              animation: "crystalRotate 60s linear infinite",
            }}
          />
          {/* Second crystal — bottom left */}
          <div
            className="absolute bottom-0 left-0 w-28 h-28 pointer-events-none opacity-[0.04]"
            style={{
              background: "linear-gradient(135deg, #64DFDF, #FFD93D)",
              transform: "rotate(45deg) translate(-30%, 30%)",
              borderRadius: "18px",
              animation: "crystalRotate 45s linear infinite reverse",
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-[11px] font-mono font-bold uppercase tracking-[0.2em]"
              style={{
                background: "rgba(100,223,223,0.1)",
                border: "1px solid rgba(100,223,223,0.2)",
                color: "#64DFDF",
              }}
            >
              <Sparkles size={12} />
              {badgeText}
            </div>

            <h2
              className="font-black gradient-text-hero leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {t("title")}
            </h2>

            <p className="text-white/50 leading-relaxed mb-10 max-w-lg mx-auto" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center text-sm"
                style={{
                  background: "linear-gradient(135deg, #8B7FFF, #6A5FFF)",
                  boxShadow: "0 6px 30px rgba(139,127,255,0.35)",
                }}
              >
                <MessageSquare size={16} strokeWidth={2} />
                {t("whatsapp")}
              </a>

              <a
                href="mailto:dreamnovaultimate@gmail.com"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:border-white/25 w-full sm:w-auto justify-center text-sm"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#EEEEF5",
                }}
              >
                <Mail size={16} strokeWidth={2} />
                {t("email")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

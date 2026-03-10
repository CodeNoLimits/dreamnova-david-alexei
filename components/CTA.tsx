"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { MessageSquare, Mail } from "lucide-react";

export default function CTA() {
  const t = useTranslations("cta");
  const locale = useLocale();

  const WHATSAPP = "972524000000";

  const waMsg = locale === "he"
    ? "שלום DreamNova, אני רוצה לדבר על הפרויקט שלי"
    : locale === "fr"
    ? "Bonjour DreamNova, je voudrais parler de mon projet"
    : "Hi DreamNova, I'd like to talk about my project";

  return (
    <section id="cta" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              background: "radial-gradient(ellipse, rgba(139,127,255,0.3) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* Decorative crystal — top right */}
          <div
            className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-[0.07]"
            style={{
              background: "linear-gradient(135deg, #8B7FFF, #64DFDF)",
              transform: "rotate(45deg) translate(30%, -30%)",
              borderRadius: "24px",
              animation: "crystalRotate 60s linear infinite",
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
              <span className="pulse-dot" />
              Free Discovery Call
            </div>

            <h2
              className="font-black text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {t("title")}
            </h2>

            <p className="text-white/55 leading-relaxed mb-10" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}>
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
                style={{
                  background: "linear-gradient(135deg, #8B7FFF, #6A5FFF)",
                  boxShadow: "0 6px 30px rgba(139,127,255,0.4)",
                  fontSize: "15px",
                }}
              >
                <MessageSquare size={18} strokeWidth={2} />
                {t("whatsapp")}
              </a>

              <a
                href="mailto:dreamnovaultimate@gmail.com"
                className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:border-white/30 w-full sm:w-auto justify-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#EEEEF5",
                  fontSize: "15px",
                }}
              >
                <Mail size={18} strokeWidth={2} />
                {t("email")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

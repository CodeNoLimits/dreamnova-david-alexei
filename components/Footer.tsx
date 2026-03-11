"use client";

import { useTranslations, useLocale } from "next-intl";
import { Mail } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 pt-12 pb-8 px-4 sm:px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Top row: logo + email */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <button onClick={scrollToTop} className="group flex items-center gap-1 transition-opacity hover:opacity-80">
            <span
              className="text-base font-black tracking-tight"
              style={{ fontFamily: "var(--font-space-mono)", color: "#8B7FFF" }}
            >
              DREAMNOVA
            </span>
            <span
              className="text-base font-light"
              style={{ fontFamily: "var(--font-space-mono)", color: "rgba(238,238,245,0.35)" }}
            >
              .consult
            </span>
          </button>

          <a
            href="mailto:dreamnovaultimate@gmail.com"
            className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-[var(--accent-lavender)]"
            style={{ color: "rgba(238,238,245,0.45)" }}
          >
            <Mail size={14} />
            dreamnovaultimate@gmail.com
          </a>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.04)" }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(238,238,245,0.25)" }}>
            {t("text")}
          </p>
          <p
            className="text-xs font-mono tracking-wide"
            style={{ color: "rgba(238,238,245,0.15)" }}
            dir="rtl"
          >
            {"\u05E0 \u05E0\u05D7 \u05E0\u05D7\u05DE \u05E0\u05D7\u05DE\u05DF \u05DE\u05D0\u05D5\u05DE\u05DF \u2014 \u05D0\u05D9\u05DF \u05D9\u05D0\u05D5\u05E9 \u05D1\u05E2\u05D5\u05DC\u05DD \u05DB\u05DC\u05DC"}
          </p>
        </div>
      </div>
    </footer>
  );
}

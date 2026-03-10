"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer
      className="relative z-10 py-10 text-center"
      style={{ borderTop: "1px solid var(--glass-border)" }}
    >
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        {t("text")}{" "}
        <a
          href="mailto:dreamnovaultimate@gmail.com"
          className="transition-colors duration-200"
          style={{ color: "var(--accent-lavender)" }}
        >
          {t("tagline")}
        </a>
      </p>
      <p className="text-xs font-mono mt-3" style={{ color: "rgba(238,238,245,0.18)" }}>
        נ נח נחמ נחמן מאומן — אין יאוש בעולם כלל
      </p>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setMobileOpen(false);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navLinks = [
    { label: t("services"), id: "services" },
    { label: t("portfolio"), id: "portfolio" },
    { label: t("pricing"), id: "pricing" },
    { label: t("process"), id: "process" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,6,12,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--glass-border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => scrollTo("hero")}>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-mono)", color: "var(--accent-lavender)" }}
          >
            DREAMNOVA
          </span>
          <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-space-mono)" }}>.consult</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm transition-colors duration-200 cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Language switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {["he", "en", "fr"].map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className="text-xs px-3 py-1 rounded-full transition-all duration-200"
              style={{
                fontFamily: "var(--font-space-mono)",
                background: locale === l ? "var(--accent-lavender)" : "var(--glass-bg)",
                border: "1px solid",
                borderColor: locale === l ? "var(--accent-lavender)" : "var(--glass-border)",
                color: locale === l ? "#fff" : "var(--text-secondary)",
              }}
            >
              {l === "he" ? "עב" : l.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => scrollTo("cta")}
            className="px-5 py-2 rounded-[var(--radius-button)] text-sm font-semibold text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, var(--accent-lavender), #6A5FFF)",
              boxShadow: "0 4px 15px rgba(139,127,255,0.3)",
            }}
          >
            {t("cta")}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "var(--text-primary)" }}
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden flex flex-col gap-4 px-6 py-8"
          style={{ background: "rgba(6,6,12,0.97)", borderTop: "1px solid var(--glass-border)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-lg py-2"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </button>
          ))}
          <div className="flex gap-2 pt-4">
            {["he", "en", "fr"].map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  background: locale === l ? "var(--accent-lavender)" : "var(--glass-bg)",
                  border: "1px solid",
                  borderColor: locale === l ? "var(--accent-lavender)" : "var(--glass-border)",
                  color: locale === l ? "#fff" : "var(--text-secondary)",
                }}
              >
                {l === "he" ? "עב" : l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("cta")}
            className="mt-2 px-6 py-3 rounded-[var(--radius-button)] font-semibold text-white"
            style={{ background: "linear-gradient(135deg, var(--accent-lavender), #6A5FFF)" }}
          >
            {t("cta")}
          </button>
        </div>
      )}
    </nav>
  );
}

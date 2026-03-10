"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    if (segments.length > 1) segments[1] = newLocale;
    else segments.push(newLocale);
    router.push(segments.join("/") || `/${newLocale}`);
    setMobileOpen(false);
  };

  const scrollTo = (id: string) => {
    // If we're on the home page, scroll to the section
    if (typeof window !== "undefined" && (window.location.pathname === `/${locale}` || window.location.pathname === `/${locale}/`)) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const navLinks = [
    { label: t("services"), id: "services", href: `/${locale}/services` },
    { label: t("portfolio"), id: "portfolio", href: `/${locale}/portfolio` },
    { label: t("pricing"), id: "pricing", href: `/${locale}/pricing` },
    { label: t("process"), id: "process", href: `/${locale}/process` },
  ];

  const langConfig = [
    { code: "he", label: "עב", flag: "🇮🇱" },
    { code: "en", label: "EN", flag: "🇺🇸" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(6,6,12,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(28px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-1 shrink-0 group"
        >
          <span
            className="dreamnova-logo-text text-lg font-black tracking-tight leading-none group-hover:brightness-125 transition-all"
            style={{ fontFamily: "var(--font-space-mono)", color: "#8B7FFF" }}
          >
            DREAMNOVA
          </span>
          <span
            className="dreamnova-logo-suffix text-lg font-light leading-none group-hover:text-white/60 transition-all"
            style={{ fontFamily: "var(--font-space-mono)", color: "rgba(238,238,245,0.45)" }}
          >
            .consult
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 relative group"
              style={{
                color: pathname.includes(`/${link.id}`) ? "#EEEEF5" : "rgba(238,238,245,0.55)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#EEEEF5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname.includes(`/${link.id}`) ? "#EEEEF5" : "rgba(238,238,245,0.55)")}
            >
              {link.label}
              {pathname.includes(`/${link.id}`) && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, #8B7FFF, transparent)" }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Language Switcher — Beautiful pill */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="flex items-center p-0.5 rounded-full gap-0.5"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {langConfig.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className="relative px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest transition-all duration-300 flex items-center gap-1.5"
                style={{
                  color: locale === lang.code ? "#fff" : "rgba(238,238,245,0.4)",
                  background: locale === lang.code
                    ? "linear-gradient(135deg, #8B7FFF, #6A5FFF)"
                    : "transparent",
                  boxShadow: locale === lang.code
                    ? "0 2px 12px rgba(139,127,255,0.4)"
                    : "none",
                  fontFamily: "var(--font-space-mono)",
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("cta")}
            className="px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #8B7FFF, #6A5FFF)",
              boxShadow: "0 4px 20px rgba(139,127,255,0.35)",
              fontFamily: "var(--font-space-mono)",
              letterSpacing: "0.05em",
            }}
          >
            {t("cta")}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{
            color: "#EEEEF5",
            background: mobileOpen ? "rgba(139,127,255,0.15)" : "transparent",
          }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
            style={{
              background: "rgba(6,6,12,0.98)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-start text-base font-medium py-1"
                  style={{ color: "#EEEEF5", textDecoration: "none" }}
                >
                  {link.label}
                </a>
              ))}

              <div className="h-px" style={{ background: "rgba(255,255,255,0.07)" }} />

              {/* Mobile Language Switcher */}
              <div
                className="flex items-center self-start p-1 rounded-full gap-1"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {langConfig.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all duration-300"
                    style={{
                      color: locale === lang.code ? "#fff" : "rgba(238,238,245,0.4)",
                      background: locale === lang.code ? "linear-gradient(135deg, #8B7FFF, #6A5FFF)" : "transparent",
                      fontFamily: "var(--font-space-mono)",
                    }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollTo("cta")}
                className="px-6 py-3 rounded-full font-bold text-white self-start transition-all"
                style={{
                  background: "linear-gradient(135deg, #8B7FFF, #6A5FFF)",
                  boxShadow: "0 4px 20px rgba(139,127,255,0.35)",
                }}
              >
                {t("cta")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

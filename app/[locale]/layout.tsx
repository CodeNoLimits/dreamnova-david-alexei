import type { Metadata } from "next";
import { Outfit, Space_Mono, Heebo, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DreamNova Consult — AI Agency Jerusalem",
  description:
    "We build AI-powered websites, automation systems, and social media strategies for small businesses. Based in Jerusalem.",
  openGraph: {
    title: "DreamNova Consult",
    description: "AI Agency Jerusalem — Websites, Automation, Social Media",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "he" ? "rtl" : "ltr"}
      className={`${outfit.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${heebo.variable}`}
    >
      <body
        style={{
          fontFamily:
            locale === "he"
              ? "var(--font-heebo), var(--font-space-grotesk), sans-serif"
              : "var(--font-space-grotesk), var(--font-outfit), sans-serif",
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* ── Fixed background layers ── */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Nebula */}
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(circle at 20% 30%, rgba(105,97,255,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(45,212,191,0.1) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(255,126,95,0.05) 0%, transparent 50%)",
              filter: "blur(80px)",
            }} />
            {/* Star field */}
            <div className="absolute inset-0 star-field" />
            {/* Noise overlay */}
            <div className="absolute inset-0 noise-overlay" />
            {/* Floating crystal diamonds */}
            <div className="crystal-float" style={{ width: 16, height: 24, top: "25%", left: "15%", animationDelay: "0s" }} />
            <div className="crystal-float" style={{ width: 12, height: 20, top: "50%", left: "5%", animationDelay: "2s" }} />
            <div className="crystal-float" style={{ width: 20, height: 32, top: "80%", left: "25%", animationDelay: "1s" }} />
            <div className="crystal-float" style={{ width: 16, height: 24, top: "20%", right: "15%", animationDelay: "3s" }} />
            <div className="crystal-float" style={{ width: 12, height: 16, top: "60%", right: "10%", animationDelay: "0.5s" }} />
            <div className="crystal-float" style={{ width: 8, height: 14, top: "40%", right: "25%", animationDelay: "1.5s" }} />
          </div>

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

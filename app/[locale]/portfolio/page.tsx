import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio — DreamNova Consult",
  description: "Real projects built for real businesses. AI-powered websites, automation systems, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

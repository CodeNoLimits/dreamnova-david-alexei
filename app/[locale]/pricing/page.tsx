import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — DreamNova Consult",
  description: "Transparent pricing for AI-powered websites and automation. Starter ₪2,000 · Business ₪5,000 · Premium ₪10,000",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-10">
        <section className="py-20 px-6">
          <Pricing />
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}

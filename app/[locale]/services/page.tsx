import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — DreamNova Consult",
  description: "Websites, AI Automation, and Social Media Marketing for small businesses in Jerusalem and worldwide.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works — DreamNova Consult",
  description: "From discovery call to launch in 4 clear steps. We build your digital presence fast.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

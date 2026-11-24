import { JsonLd } from "@/components/JsonLd";
import { Comparison } from "@/components/sections/Comparison";
import { Faq, FinalCta } from "@/components/sections/Closing";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LeadForm } from "@/components/sections/LeadForm";
import { Problem } from "@/components/sections/Problem";
import { Project } from "@/components/sections/Project";
import { Services } from "@/components/sections/Services";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <Project />
        <Comparison />
        <LeadForm />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <JsonLd />
    </>
  );
}

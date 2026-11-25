import { JsonLd } from "@/components/JsonLd";
import { About } from "@/components/sections/About";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Faq } from "@/components/sections/Closing";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LeadForm } from "@/components/sections/LeadForm";
import { LiveDemo } from "@/components/sections/LiveDemo";
import { Project } from "@/components/sections/Project";
import { Services } from "@/components/sections/Services";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <BeforeAfter />
        <Services />
        <LiveDemo />
        <About />
        <Project />
        <HowItWorks />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppFloat />
      <JsonLd />
    </>
  );
}

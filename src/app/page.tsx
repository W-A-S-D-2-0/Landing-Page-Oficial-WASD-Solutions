import { JsonLd } from "@/components/JsonLd";
import { Comparison } from "@/components/sections/Comparison";
import { Demos } from "@/components/sections/Demos";
import { Faq, FinalCta } from "@/components/sections/Closing";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LeadForm } from "@/components/sections/LeadForm";
import { OneTeam } from "@/components/sections/OneTeam";
import { Pricing } from "@/components/sections/Pricing";
import { Services } from "@/components/sections/Services";
import { Statement } from "@/components/sections/Statement";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Statement />
        <OneTeam />
        <Services />
        <HowItWorks />
        <Demos />
        <Pricing />
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

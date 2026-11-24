import { faq } from "@/data/faq";
import { site } from "@/data/site";

/** Datos estructurados: ProfessionalService (área Lima, Perú) y FAQPage. */
export function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    image: new URL(site.seo.ogImage, site.url).toString(),
    telephone: `+${site.contact.whatsappNumber}`,
    address: { "@type": "PostalAddress", addressLocality: "Lima", addressRegion: "Lima", addressCountry: "PE" },
    areaServed: [
      { "@type": "City", name: "Lima" },
      { "@type": "Country", name: "Perú" },
    ],
    knowsLanguage: "es",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}

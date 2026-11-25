import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { guarantee } from "@/data/content";

export const metadata: Metadata = {
  title: "Condiciones de la garantía | Kodena",
  description: "Condiciones de la garantía de resultados de Kodena.",
  alternates: { canonical: "/garantia/" },
};

export default function GarantiaPage() {
  return (
    <LegalPage title="Condiciones de la garantía" updated="[FECHA]">
      <p className="lead">{guarantee.text}</p>
      <p>[CONDICIONES DE LA GARANTÍA]</p>
    </LegalPage>
  );
}

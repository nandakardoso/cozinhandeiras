import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/sections/LeadForm";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contato | ${brand.name}`,
  description:
    "Solicite uma proposta para eventos corporativos, coffee breaks, brunches, almoços e coquetéis com a Cozinhandeiras.",
  alternates: {
    canonical: "/contato",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

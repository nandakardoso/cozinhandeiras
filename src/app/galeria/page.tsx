import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `Galeria | ${brand.name}`,
  description:
    "Veja mesas, coffee breaks, coquetéis e ambientações da Cozinhandeiras para eventos corporativos em São Paulo.",
  alternates: {
    canonical: "/galeria",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <h1 className="sr-only">Galeria de eventos | Cozinhandeiras Buffet</h1>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

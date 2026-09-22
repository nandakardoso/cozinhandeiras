import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `Quem somos | ${brand.name}`,
  description:
    "Conheça a Cozinhandeiras, especializada em catering corporativo, gastronomia e ambientação para eventos empresariais em São Paulo.",
  alternates: {
    canonical: "/quem-somos",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <div className="pt-16 sm:pt-20">
          <Container>
            <h1 className="font-heading text-4xl leading-[1.1] text-[color:var(--color-chocolate)] sm:text-5xl">
              Quem somos
            </h1>
          </Container>
        </div>
        <About />
      </main>
      <Footer />
    </>
  );
}

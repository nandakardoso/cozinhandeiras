import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Differentiators } from "@/components/sections/Differentiators";
import { LeadForm } from "@/components/sections/LeadForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { coffeeBreakPage } from "@/lib/content";

export const metadata: Metadata = {
  title: coffeeBreakPage.metadata.title,
  description: coffeeBreakPage.metadata.description,
  alternates: {
    canonical: "/coffee-break-corporativo",
  },
  openGraph: {
    title: coffeeBreakPage.metadata.title,
    description: coffeeBreakPage.metadata.description,
  },
};

export default function CoffeeBreakCorporativoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
          <Container className="max-w-3xl">
            <Reveal>
              <h1 className="font-heading text-4xl leading-[1.1] text-[color:var(--color-chocolate)] sm:text-5xl">
                {coffeeBreakPage.h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-graphite)]/85">
                {coffeeBreakPage.intro}
              </p>
              <div className="mt-8">
                <LinkButton href="/contato">Solicite seu orçamento</LinkButton>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {coffeeBreakPage.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading text-xl text-[color:var(--color-chocolate)]">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-graphite)]/80">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Differentiators />

        <section className="py-12 sm:py-16">
          <Container className="max-w-3xl text-sm text-[color:var(--color-graphite)]/80">
            <p>
              Veja também:{" "}
              <a href="/catering-corporativo" className="underline hover:text-[color:var(--color-terracotta)]">
                catering corporativo
              </a>{" "}
              e{" "}
              <a href="/eventos-corporativos" className="underline hover:text-[color:var(--color-terracotta)]">
                eventos corporativos
              </a>
              .
            </p>
          </Container>
        </section>

        <LeadForm />
      </main>
      <Footer />
    </>
  );
}

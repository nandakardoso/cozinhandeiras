import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Differentiators } from "@/components/sections/Differentiators";
import { LeadForm } from "@/components/sections/LeadForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { cateringCorporativoPage, serviceOptions } from "@/lib/content";

export const metadata: Metadata = {
  title: cateringCorporativoPage.metadata.title,
  description: cateringCorporativoPage.metadata.description,
  alternates: {
    canonical: "/catering-corporativo",
  },
  openGraph: {
    title: cateringCorporativoPage.metadata.title,
    description: cateringCorporativoPage.metadata.description,
  },
};

export default function CateringCorporativoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
          <Container className="max-w-3xl">
            <Reveal>
              <h1 className="font-heading text-4xl leading-[1.1] text-[color:var(--color-chocolate)] sm:text-5xl">
                {cateringCorporativoPage.h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-graphite)]/85">
                {cateringCorporativoPage.intro}
              </p>
              <div className="mt-8">
                <LinkButton href="/contato">Solicite seu orçamento</LinkButton>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {cateringCorporativoPage.sections.map((section) => (
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

            <div className="mt-14">
              <h2 className="font-heading text-xl text-[color:var(--color-chocolate)]">
                {cateringCorporativoPage.eventTypesLabel}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {serviceOptions
                  .filter((option) => option !== "Ainda não sei")
                  .map((option) => (
                    <li
                      key={option}
                      className="rounded-full border border-[color:var(--color-chocolate)]/15 px-4 py-2 text-sm text-[color:var(--color-graphite)]/80"
                    >
                      {option}
                    </li>
                  ))}
              </ul>
            </div>
          </Container>
        </section>

        <Differentiators />

        <section className="py-12 sm:py-16">
          <Container className="max-w-3xl text-sm text-[color:var(--color-graphite)]/80">
            <p>
              Veja também:{" "}
              <a href="/eventos-corporativos" className="underline hover:text-[color:var(--color-terracotta)]">
                eventos corporativos
              </a>{" "}
              e{" "}
              <a href="/coffee-break-corporativo" className="underline hover:text-[color:var(--color-terracotta)]">
                coffee break corporativo
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

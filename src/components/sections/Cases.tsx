"use client";

import { useState } from "react";
import { cases, CaseStudy } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { CaseModal } from "@/components/CaseModal";

export function Cases() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <section id="cases" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Cases de sucesso"
            title="Eventos que já receberam o cuidado da Cozinhandeiras"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => setSelected(c)}
                className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"
              >
                <ImagePlaceholder label={c.imageAlt} ratio="aspect-[4/3]" className="w-full transition-opacity group-hover:opacity-90" />
                <h3 className="mt-4 font-heading text-lg text-[color:var(--color-chocolate)]">
                  {c.client}
                </h3>
                <p className="mt-1 text-sm text-[color:var(--color-graphite)]/70">{c.format}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {selected && <CaseModal caseStudy={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

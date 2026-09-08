"use client";

import { useEffect, useState } from "react";
import { services, servicesSection } from "@/lib/content";
import { track } from "@/lib/tracking";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  useEffect(() => {
    track.viewService(activeId);
  }, [activeId]);

  return (
    <section id="servicos" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={servicesSection.eyebrow} title={servicesSection.title} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12">
          <Reveal delay={0.05}>
            <div
              role="tablist"
              aria-label="Serviços da Cozinhandeiras"
              className="flex flex-col gap-1 border-l border-[color:var(--color-chocolate)]/15"
            >
              {services.map((service) => {
                const isActive = service.id === activeId;
                return (
                  <button
                    key={service.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(service.id)}
                    className={`-ml-px border-l-2 px-5 py-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] ${
                      isActive
                        ? "border-[color:var(--color-terracotta)] font-medium text-[color:var(--color-chocolate)]"
                        : "border-transparent text-[color:var(--color-graphite)]/65 hover:text-[color:var(--color-chocolate)]"
                    }`}
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              role="tabpanel"
              className="grid gap-8 rounded-3xl bg-[color:var(--color-creme)] p-6 sm:p-10 md:grid-cols-2 md:items-center"
            >
              <ImagePlaceholder label={active.imageAlt} ratio="aspect-[4/3]" />
              <div>
                <h3 className="font-heading text-2xl text-[color:var(--color-chocolate)]">
                  {active.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-[color:var(--color-terracotta)]">
                  {active.benefit}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite)]/80">
                  {active.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 text-center">
            <a
              href="#contato"
              onClick={() => track.clickBudget("services")}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-chocolate)] px-7 py-3.5 text-sm font-medium tracking-wide text-[color:var(--color-offwhite)] transition-colors hover:bg-[color:var(--color-terracotta)]"
            >
              {servicesSection.cta}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

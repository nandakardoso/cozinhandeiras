"use client";

import { ArrowRight } from "lucide-react";
import { hero } from "@/lib/content";
import { track } from "@/lib/tracking";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-terracotta)]">
            gerando deliciosas lembranças
          </p>
          <h1 className="font-heading text-4xl leading-[1.1] text-[color:var(--color-chocolate)] sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-graphite)]/85">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contato"
              onClick={() => track.clickBudget("hero")}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-chocolate)] px-7 py-3.5 text-sm font-medium tracking-wide text-[color:var(--color-offwhite)] transition-colors hover:bg-[color:var(--color-terracotta)]"
            >
              {hero.ctaPrimary}
              <ArrowRight size={16} />
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-chocolate)]/30 px-7 py-3.5 text-sm font-medium tracking-wide text-[color:var(--color-chocolate)] transition-colors hover:bg-[color:var(--color-chocolate)]/5"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-6 text-xs text-[color:var(--color-graphite)]/60">
            {hero.trustedByLabel}:{" "}
            <span className="text-[color:var(--color-graphite)]/85">
              {hero.trustedByClients.join(" · ")}
            </span>
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {hero.signature.map((item) => (
              <div key={item.label}>
                <dt className="font-heading text-lg text-[color:var(--color-chocolate)]">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm text-[color:var(--color-graphite)]/70">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <ImagePlaceholder
            label={hero.imageAlt}
            src={hero.image}
            ratio="aspect-[4/5]"
            className="w-full"
          />
        </Reveal>
      </Container>
    </section>
  );
}

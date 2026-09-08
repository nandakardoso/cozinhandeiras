import { UtensilsCrossed, SlidersHorizontal, ClipboardCheck, Users, Building2 } from "lucide-react";
import { differentiators } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons = [UtensilsCrossed, SlidersHorizontal, ClipboardCheck, Users, Building2];

export function Differentiators() {
  return (
    <section className="bg-[color:var(--color-creme)] py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={differentiators.eyebrow}
            title={differentiators.title}
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-[color:var(--color-chocolate)]/10 bg-[color:var(--color-offwhite)] p-7 shadow-[0_1px_2px_rgba(45,45,45,0.04)]">
                  <Icon className="text-[color:var(--color-terracotta)]" size={28} strokeWidth={1.5} />
                  <h3 className="mt-5 font-heading text-lg text-[color:var(--color-chocolate)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-graphite)]/80">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="bg-[color:var(--color-creme)] py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading title="O que nossos clientes dizem" align="center" />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center rounded-3xl bg-[color:var(--color-offwhite)] p-8 text-center shadow-[0_1px_2px_rgba(45,45,45,0.04)]">
                <ImagePlaceholder
                  label={t.imageAlt}
                  src={t.image}
                  ratio="aspect-square"
                  className="w-20 rounded-full"
                  sizes="80px"
                />
                <div className="mt-4 flex gap-1 text-[color:var(--color-gold)]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite)]/85">
                  “{t.quote}”
                </p>
                <p className="mt-5 font-heading text-sm text-[color:var(--color-chocolate)]">
                  {t.name}
                </p>
                <p className="text-xs text-[color:var(--color-graphite)]/60">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

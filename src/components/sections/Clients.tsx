import { clients } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Clients() {
  return (
    <section className="bg-[color:var(--color-creme)] py-12 sm:py-16">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Clientes"
            title="Empresas que confiam na nossa excelência."
            align="left"
          />
        </Reveal>
      </Container>

      <Reveal delay={0.1}>
        <div className="group relative mt-8 overflow-hidden border-y border-[color:var(--color-chocolate)]/10 bg-[color:var(--color-offwhite)]/60 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, i) => (
              <li key={`${client}-${i}`} className="flex items-center gap-16">
                <span className="whitespace-nowrap font-heading text-xl text-[color:var(--color-chocolate)]/50 transition-colors hover:text-[color:var(--color-chocolate)]">
                  {client}
                </span>
                {i % clients.length === clients.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="text-xl text-[color:var(--color-chocolate)]/30"
                  >
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

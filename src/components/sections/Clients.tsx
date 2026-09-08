import { clients } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Clients() {
  return (
    <section className="bg-[color:var(--color-creme)] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading title="Empresas que confiam na nossa excelência." align="center" />
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {clients.map((client) => (
              <li
                key={client}
                className="rounded-full border border-[color:var(--color-chocolate)]/15 bg-[color:var(--color-offwhite)] px-5 py-2 font-heading text-sm text-[color:var(--color-chocolate)]/85"
              >
                {client}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

import { about } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="quem-somos" className="bg-[color:var(--color-creme)] py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <ImagePlaceholder
            label={about.leaderImageAlt}
            src={about.leaderImage}
            ratio="aspect-[4/5]"
            className="w-full lg:max-w-md"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-terracotta)]">
            {about.eyebrow}
          </p>
          <h2 className="font-heading text-3xl leading-tight text-[color:var(--color-chocolate)] sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--color-graphite)]/85">
            {about.body.split(about.leaderName).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <strong className="font-semibold">{about.leaderName}</strong>
                )}
              </span>
            ))}
          </p>

          <p className="mt-6 text-sm font-medium text-[color:var(--color-chocolate)]">
            {about.leaderName}
            <span className="block font-normal text-[color:var(--color-graphite)]/70">
              {about.leaderRole}
            </span>
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[color:var(--color-chocolate)]/15 pt-8">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-2xl text-[color:var(--color-chocolate)] sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-[color:var(--color-graphite)]/70">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}

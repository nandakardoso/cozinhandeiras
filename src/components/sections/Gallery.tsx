"use client";

import { useState } from "react";
import { galleryCategories, galleryItems, GalleryCategory } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function Gallery() {
  const [category, setCategory] = useState<GalleryCategory>("Todos");

  const filtered =
    category === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  return (
    <section id="galeria" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Galeria"
            title="Fotos reais dos nossos eventos"
            description="Todas as imagens desta galeria são registros reais da Cozinhandeiras em eventos corporativos."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar galeria por categoria">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={category === cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] ${
                  category === cat
                    ? "bg-[color:var(--color-chocolate)] text-[color:var(--color-offwhite)]"
                    : "bg-[color:var(--color-creme)] text-[color:var(--color-graphite)]/75 hover:bg-[color:var(--color-champagne)]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 0.05}>
              <ImagePlaceholder
                label={item.imageAlt}
                src={item.image}
                ratio="aspect-[3/4]"
                className="w-full break-inside-avoid"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

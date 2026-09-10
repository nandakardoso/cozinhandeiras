"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8 * (direction === "left" ? -1 : 1);
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length)),
    []
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <section id="galeria" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Galeria"
            title="Cada detalhe pensado para o seu evento"
            description="Do buffet à decoração, cuidamos de cada escolha para criar uma experiência única, saborosa e especial."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative mt-8">
            <div
              ref={trackRef}
              className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
            >
              {galleryItems.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openLightbox(i)}
                  aria-label={`Ampliar foto: ${item.imageAlt}`}
                  className="w-[75%] shrink-0 snap-start cursor-zoom-in transition-opacity hover:opacity-90 sm:w-[45%] lg:w-[30%]"
                >
                  <ImagePlaceholder
                    label={item.imageAlt}
                    src={item.image}
                    ratio="aspect-[3/4]"
                    rounded="rounded-2xl"
                    className="w-full"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              aria-label="Ver fotos anteriores"
              className="absolute left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--color-graphite)]/70 p-2 text-[color:var(--color-offwhite)] transition-colors hover:bg-[color:var(--color-graphite)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] sm:flex"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              aria-label="Ver próximas fotos"
              className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--color-graphite)]/70 p-2 text-[color:var(--color-offwhite)] transition-colors hover:bg-[color:var(--color-graphite)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] sm:flex"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>
      </Container>

      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.imageAlt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fechar"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] sm:left-6"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="relative aspect-[3/4] max-h-[85vh] w-full max-w-xl sm:max-w-2xl lg:max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {activeItem.image ? (
              <Image
                src={activeItem.image}
                alt={activeItem.imageAlt}
                fill
                sizes="(min-width: 1024px) 48rem, (min-width: 640px) 42rem, 100vw"
                className="rounded-2xl object-contain"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-white/30 p-6 text-center text-sm text-white/70">
                {activeItem.imageAlt}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] sm:right-6"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}

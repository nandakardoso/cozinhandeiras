import { galleryItems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function Gallery() {
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

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryItems.map((item, i) => (
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

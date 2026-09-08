import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `Política de privacidade | ${brand.name}`,
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-20 sm:py-28">
        <Container className="max-w-2xl">
          <h1 className="font-heading text-3xl text-[color:var(--color-chocolate)]">
            Política de privacidade
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-[color:var(--color-graphite)]/80">
            [CONFIRMAR TEXTO OFICIAL DA POLÍTICA DE PRIVACIDADE DA COZINHANDEIRAS]
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-graphite)]/80">
            Os dados enviados pelo formulário de contato deste site (nome, empresa, e-mail,
            WhatsApp e detalhes do evento) são utilizados exclusivamente para a elaboração de
            propostas comerciais pela equipe da {brand.name}.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}

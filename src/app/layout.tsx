import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { seo, brand } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: siteUrl,
    siteName: brand.name,
    locale: "pt_BR",
    type: "website",
    // [INSERIR IMAGEM OG REAL — 1200x630]
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: { google: "2jZ4rO81OLFLH164sXpqk6Qep2NO8KNEbIioMczkZvI" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: brand.name,
  description: seo.description,
  areaServed: "São Paulo, SP",
  // Dados abaixo devem ser preenchidos somente com informações oficiais confirmadas.
  // telephone: "[INSERIR TELEFONE OFICIAL]",
  // address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
  sameAs: [brand.instagramUrl, brand.linkedinUrl],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Catering corporativo",
  provider: {
    "@type": "Organization",
    name: brand.name,
  },
  areaServed: "São Paulo, SP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

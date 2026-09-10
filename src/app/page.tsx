import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Differentiators } from "@/components/sections/Differentiators";
import { Clients } from "@/components/sections/Clients";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { SocialProof } from "@/components/sections/SocialProof";
import { LeadForm } from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Differentiators />
        <Gallery />
        <Testimonials />
        <Clients />
        <SocialProof />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

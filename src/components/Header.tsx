"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { brand } from "@/lib/content";
import { track } from "@/lib/tracking";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          setActiveHref(`#${mostVisible.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[color:var(--color-offwhite)]/95 backdrop-blur transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-[color:var(--color-chocolate)]/12 shadow-[0_8px_24px_-18px_rgba(37,61,91,0.45)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
        <a href="#topo" className="flex shrink-0 origin-left items-center" aria-label={brand.name}>
          <Image
            src="/logo-cozinhandeiras.png"
            alt={brand.name}
            width={770}
            height={1066}
            priority
            className={`h-20 w-auto origin-left transition-transform duration-300 ease-out will-change-transform sm:h-24 ${
              scrolled ? "scale-[0.72]" : "scale-100"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`group relative py-2 text-[15px] font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-[color:var(--color-terracotta)]"
                    : "text-[color:var(--color-graphite)]/75 hover:text-[color:var(--color-terracotta)]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[color:var(--color-terracotta)] transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    isActive ? "scale-x-100" : ""
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => {
              track.clickBudget("header");
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="gap-2 px-6 py-3 text-sm shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Solicite seu orçamento
            <ArrowRight size={16} />
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-[color:var(--color-chocolate)] transition-colors hover:bg-[color:var(--color-chocolate)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        className={`grid overflow-hidden border-t border-[color:var(--color-chocolate)]/10 bg-[color:var(--color-offwhite)] transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="flex flex-col gap-1 overflow-hidden px-6 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`block rounded-lg px-3 py-3 text-base transition-colors ${
                  activeHref === item.href
                    ? "bg-[color:var(--color-chocolate)]/5 text-[color:var(--color-terracotta)]"
                    : "text-[color:var(--color-graphite)]/80 hover:bg-[color:var(--color-chocolate)]/5"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contato"
              className="flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-chocolate)] px-6 py-3.5 text-sm font-medium tracking-wide text-[color:var(--color-offwhite)] transition-colors hover:bg-[color:var(--color-terracotta)]"
              onClick={() => {
                setOpen(false);
                track.clickBudget("header-mobile");
              }}
            >
              Solicite seu orçamento
              <ArrowRight size={16} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

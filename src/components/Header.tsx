"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { brand } from "@/lib/content";
import { track } from "@/lib/tracking";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-chocolate)]/10 bg-[color:var(--color-offwhite)]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 sm:px-8">
        <a href="#topo" className="flex items-center" aria-label={brand.name}>
          <Image
            src="/logo-cozinhandeiras.png"
            alt={brand.name}
            width={770}
            height={1066}
            priority
            className="h-20 w-auto sm:h-24"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-[color:var(--color-graphite)]/80 transition-colors hover:text-[color:var(--color-terracotta)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => {
              track.clickBudget("header");
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm"
          >
            Solicite seu orçamento
          </Button>
        </div>

        <button
          type="button"
          className="p-2 text-[color:var(--color-chocolate)] md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[color:var(--color-chocolate)]/10 bg-[color:var(--color-offwhite)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-sm text-[color:var(--color-graphite)]/80"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                className="block text-sm font-medium text-[color:var(--color-terracotta)]"
                onClick={() => {
                  setOpen(false);
                  track.clickBudget("header-mobile");
                }}
              >
                Solicite seu orçamento
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

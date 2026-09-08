"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { CaseStudy } from "@/lib/content";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { track } from "@/lib/tracking";

export function CaseModal({
  caseStudy,
  onClose,
}: {
  caseStudy: CaseStudy;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[color:var(--color-graphite)]/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-modal-title"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[color:var(--color-offwhite)] p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="case-modal-title" className="font-heading text-2xl text-[color:var(--color-chocolate)]">
            {caseStudy.client}
          </h3>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-full p-1.5 text-[color:var(--color-chocolate)] transition-colors hover:bg-[color:var(--color-chocolate)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mt-1 text-sm font-medium text-[color:var(--color-terracotta)]">
          {caseStudy.format}
        </p>

        <div className="mt-6">
          <ImagePlaceholder label={caseStudy.imageAlt} ratio="aspect-[16/9]" className="w-full" />
        </div>

        <dl className="mt-6 space-y-5">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-graphite)]/60">
              Desafio
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-[color:var(--color-graphite)]/85">
              {caseStudy.challenge}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-graphite)]/60">
              Solução entregue
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-[color:var(--color-graphite)]/85">
              {caseStudy.solution}
            </dd>
          </div>
          {caseStudy.guests && (
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-graphite)]/60">
                Convidados
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-[color:var(--color-graphite)]/85">
                {caseStudy.guests}
              </dd>
            </div>
          )}
        </dl>

        <a
          href="#contato"
          onClick={() => {
            track.clickBudget(`case-modal-${caseStudy.id}`);
            onClose();
          }}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--color-chocolate)] px-7 py-3.5 text-sm font-medium tracking-wide text-[color:var(--color-offwhite)] transition-colors hover:bg-[color:var(--color-terracotta)]"
        >
          Quero uma proposta parecida
        </a>
      </div>
    </div>
  );
}

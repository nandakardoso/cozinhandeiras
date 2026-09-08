# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev          # Start dev server (Turbopack) at http://localhost:3000
npm run build         # Production build (also runs the TypeScript check)
npm run start          # Serve the production build
npm run lint            # ESLint (flat config, eslint-config-next)
npx tsc --noEmit          # Type-check only, no build

npm run db:generate        # Generate Drizzle migrations from src/db/schema.ts
npm run db:migrate           # Apply migrations to DATABASE_URL
```

There is no test runner configured. To exercise the lead form end to end, run `npm run dev` and either submit the form at `/#contato` or POST directly:

```bash
curl -X POST http://localhost:3000/api/leads -H "Content-Type: application/json" -d '{...}'
```

Field values for `service` and `guestRange` must exactly match the enums in `src/lib/content.ts` (`serviceOptions`, `guestRangeOptions`) — the API validates against those exact strings.

## Architecture

This is a single-page marketing/lead-gen site for **Cozinhandeiras**, a B2B corporate catering company. Next.js App Router, TypeScript, Tailwind v4.

**Content is centralized, not scattered.** `src/lib/content.ts` is the single source of truth for every piece of copy, service, case study, client name, testimonial, and gallery item on the page. Section components import from it rather than hardcoding text. When the business provides real information (photos, testimonials, confirmed case details), update `content.ts` — don't edit copy inline in components.

**Unconfirmed content uses explicit placeholders**, not invented data — strings like `[INSERIR FOTO REAL — ...]` or `[CONFIRMAR DESCRIÇÃO DO CASE]` throughout `content.ts`. These render via `src/components/ui/ImagePlaceholder.tsx` (a labeled dashed-border box standing in for a real photo) or directly as placeholder text. Never replace a placeholder with fabricated content — only with real data the business supplies. `src/app/page.tsx` composes all sections in the mandated order (Hero → About → Services → Differentiators → Cases → Clients → Gallery → Testimonials → SocialProof → LeadForm → Footer); that order is a deliberate conversion-funnel decision, not arbitrary.

**Lead persistence is decoupled from the API route** via `src/lib/leads-store.ts`: if `DATABASE_URL` is set, it writes through Drizzle ORM (`src/db/client.ts`, `src/db/schema.ts`) to Postgres; otherwise it falls back to appending JSON to `data/leads.json` (gitignored) so the form works in any environment without faking success. `src/app/api/leads/route.ts` wires this to validation (`src/lib/lead-schema.ts`, a Zod schema shared with the client form in `src/components/sections/LeadForm.tsx`), a honeypot field (`website`), and per-IP rate limiting (`src/lib/rate-limit.ts`, in-memory — swap for Redis if deployed across multiple instances).

**Tracking events go through one module**: `src/lib/tracking.ts` pushes to `window.dataLayer` (GTM-ready). The required event set is `view_service`, `click_whatsapp`, `click_instagram`, `click_linkedin`, `click_budget`, `form_start`, `generate_lead`. `generate_lead` fires only after the API confirms the lead was persisted (in `LeadForm.tsx`, after a successful `fetch` response) — never optimistically. To wire in GA4/GTM for real, inject the loader script in `src/app/layout.tsx` and adjust `sendEvent` in `tracking.ts`.

**Design tokens live in `src/app/globals.css`** as CSS variables (`--color-chocolate`, `--color-terracotta`, `--color-champagne`, `--color-creme`, `--color-offwhite`, `--color-olive`, `--color-gold`, `--color-graphite`) exposed to Tailwind v4 via `@theme inline`. Headings use Playfair Display (`--font-heading`), body text uses Inter (`--font-body`) — both loaded via `next/font/google` in `src/app/layout.tsx`. Use the CSS variables (`text-[color:var(--color-chocolate)]`) rather than introducing new hex values or Tailwind's default palette.

**SEO/metadata is centralized in `layout.tsx`**: canonical Metadata API config plus two `application/ld+json` blocks (FoodEstablishment + Service schema.org types) — both only populated with confirmed data; commented-out fields (phone, address) are placeholders pending confirmation. `sitemap.ts` and `robots.ts` use the `NEXT_PUBLIC_SITE_URL` env var, which must be set to the real production domain before deploy.

`lucide-react` no longer ships Instagram/LinkedIn brand glyphs — those are hand-drawn as inline SVG in `src/components/icons/BrandIcons.tsx` rather than pulled from a dependency.

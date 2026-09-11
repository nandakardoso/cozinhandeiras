"use client";

import { FormEvent, ReactNode, useRef, useState } from "react";
import { ZodError } from "zod";
import { guestRangeOptions, leadForm, serviceOptions } from "@/lib/content";
import { leadSchema, type LeadInput } from "@/lib/lead-schema";
import { track } from "@/lib/tracking";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type FormState = Omit<LeadInput, "website">;

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  service: "Ainda não sei",
  eventDate: "",
  location: "",
  guestRange: "Até 30",
  details: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const startedRef = useRef(false);

  function handleFieldStart() {
    if (!startedRef.current) {
      startedRef.current = true;
      track.formStart();
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    handleFieldStart();
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function validateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    const shape = leadSchema.shape[key];
    if (!shape) return;
    const result = shape.safeParse(value);
    setErrors((prev) => ({
      ...prev,
      [key]: result.success ? undefined : result.error.issues[0]?.message,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setFormError(null);

    const parsed = leadSchema.safeParse({ ...values, website: "" });
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of (parsed.error as ZodError).issues) {
        const key = issue.path[0] as keyof FormState;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setFormError(
          body?.error ?? "Não foi possível enviar seus dados agora. Tente novamente.",
        );
        setStatus("error");
        return;
      }

      const body = await res.json();
      track.generateLead(body.id ?? "unknown");
      setStatus("success");
    } catch {
      setFormError("Falha de conexão. Verifique sua internet e tente novamente.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="contato" className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl bg-[color:var(--color-creme)] p-10 text-center">
            <h2 className="font-heading text-2xl text-[color:var(--color-chocolate)]">
              {leadForm.successMessage}
            </h2>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contato" className="bg-[color:var(--color-creme)] py-20 sm:py-28">
      <Container className="max-w-2xl">
        <Eyebrow className="mb-3 text-center">{leadForm.eyebrow}</Eyebrow>
        <h2 className="text-center font-heading text-3xl leading-tight text-[color:var(--color-chocolate)] sm:text-4xl">
          {leadForm.title}
        </h2>
        <p className="mt-3 text-center text-base text-[color:var(--color-graphite)]/80">
          {leadForm.subtitle}
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 grid gap-5 rounded-3xl bg-[color:var(--color-offwhite)] p-6 sm:p-10"
        >
          {/* Honeypot — invisível para humanos, ignorado por leitores de tela */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Não preencha este campo</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <Field label="Nome completo" htmlFor="name" error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => updateField("name", e.target.value)}
              onBlur={(e) => validateField("name", e.target.value)}
              className={inputClass(!!errors.name)}
            />
          </Field>

          <Field label="Empresa" htmlFor="company" error={errors.company}>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={(e) => updateField("company", e.target.value)}
              onBlur={(e) => validateField("company", e.target.value)}
              className={inputClass(!!errors.company)}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="E-mail corporativo" htmlFor="email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => updateField("email", e.target.value)}
                onBlur={(e) => validateField("email", e.target.value)}
                className={inputClass(!!errors.email)}
              />
            </Field>

            <Field label="WhatsApp" htmlFor="whatsapp" error={errors.whatsapp}>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                placeholder="(11) 90000-0000"
                value={values.whatsapp}
                onChange={(e) => updateField("whatsapp", e.target.value)}
                onBlur={(e) => validateField("whatsapp", e.target.value)}
                className={inputClass(!!errors.whatsapp)}
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Serviço desejado" htmlFor="service" error={errors.service}>
              <select
                id="service"
                name="service"
                value={values.service}
                onChange={(e) => updateField("service", e.target.value as FormState["service"])}
                onBlur={(e) => validateField("service", e.target.value as FormState["service"])}
                className={inputClass(!!errors.service)}
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Data prevista" htmlFor="eventDate" error={errors.eventDate}>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                value={values.eventDate}
                onChange={(e) => updateField("eventDate", e.target.value)}
                onBlur={(e) => validateField("eventDate", e.target.value)}
                min={new Date().toISOString().slice(0, 10)}
                className={inputClass(!!errors.eventDate)}
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Cidade e local do evento" htmlFor="location" error={errors.location}>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Ex.: São Paulo — MASP"
                autoComplete="address-level2"
                value={values.location}
                onChange={(e) => updateField("location", e.target.value)}
                onBlur={(e) => validateField("location", e.target.value)}
                className={inputClass(!!errors.location)}
              />
            </Field>

            <Field label="Número estimado de convidados" htmlFor="guestRange" error={errors.guestRange}>
              <select
                id="guestRange"
                name="guestRange"
                value={values.guestRange}
                onChange={(e) => updateField("guestRange", e.target.value as FormState["guestRange"])}
                onBlur={(e) => validateField("guestRange", e.target.value as FormState["guestRange"])}
                className={inputClass(!!errors.guestRange)}
              >
                {guestRangeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <p className="text-xs text-[color:var(--color-graphite)]/60">
            Atendimento presencial em São Paulo/SP e região.
          </p>

          <Field label="Conte um pouco sobre o evento" htmlFor="details" error={errors.details}>
            <textarea
              id="details"
              name="details"
              rows={4}
              placeholder={leadForm.detailsPlaceholder}
              value={values.details}
              onChange={(e) => updateField("details", e.target.value)}
              onBlur={(e) => validateField("details", e.target.value)}
              className={inputClass(!!errors.details)}
            />
          </Field>

          {formError && (
            <p role="alert" className="text-sm font-medium text-red-700">
              {formError}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:var(--color-chocolate)] px-7 py-4 text-sm font-medium tracking-wide text-[color:var(--color-offwhite)] shadow-[0_0_0_0_rgba(201,162,39,0.4)] transition-all duration-200 hover:bg-[color:var(--color-terracotta)] hover:shadow-[0_0_24px_2px_rgba(201,162,39,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Enviando..." : leadForm.submitLabel}
          </button>
        </form>
      </Container>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-[color:var(--color-offwhite)] px-4 py-3 text-sm text-[color:var(--color-graphite)] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] ${
    hasError ? "border-red-400" : "border-[color:var(--color-chocolate)]/20"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-[color:var(--color-graphite)]">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

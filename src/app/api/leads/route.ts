import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { leadSchema } from "@/lib/lead-schema";
import { saveLead } from "@/lib/leads-store";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde um instante e tente novamente." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição inválido." },
      { status: 400 },
    );
  }

  let input;
  try {
    input = leadSchema.parse(body);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Dados inválidos.", fieldErrors: error.flatten().fieldErrors },
        { status: 422 },
      );
    }
    throw error;
  }

  // Honeypot preenchido => provável bot. Responde sucesso "falso" sem persistir,
  // para não revelar ao bot que a submissão foi bloqueada.
  if (input.website) {
    return NextResponse.json({ id: "ignored" }, { status: 200 });
  }

  try {
    const lead = await saveLead(input);
    return NextResponse.json({ id: lead.id }, { status: 201 });
  } catch (error) {
    console.error("Falha ao salvar lead:", error);
    return NextResponse.json(
      { error: "Não foi possível registrar sua solicitação agora. Tente novamente em instantes." },
      { status: 500 },
    );
  }
}

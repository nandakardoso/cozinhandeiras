// Rate limiting básico em memória, por IP, para o endpoint de leads.
// Suficiente para desabafar bots simples; em produção com múltiplas instâncias
// substitua por um armazenamento compartilhado (ex: Redis).

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(identifier) ?? []).filter(
    (t) => now - t < WINDOW_MS,
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(identifier, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(identifier, timestamps);
  return false;
}

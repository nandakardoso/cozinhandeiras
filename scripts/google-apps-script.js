/**
 * Cole este código em Extensões > Apps Script na sua Google Sheet.
 * Depois: Implantar > Nova implantação > tipo "App da Web".
 *   - Executar como: Eu (sua conta)
 *   - Quem pode acessar: Qualquer pessoa
 * Copie a URL gerada (termina em /exec) e coloque na Vercel como
 * a variável de ambiente GOOGLE_SHEETS_WEBHOOK_URL.
 *
 * Defina também um "segredo" simples aqui embaixo (SHARED_SECRET) e
 * coloque o mesmo valor na Vercel como GOOGLE_SHEETS_WEBHOOK_SECRET —
 * isso impede que qualquer pessoa na internet grave linhas na sua planilha.
 */

const SHARED_SECRET = "TROQUE_ESTE_VALOR_POR_ALGO_SECRETO";

const HEADERS = [
  "createdAt",
  "id",
  "name",
  "company",
  "email",
  "whatsapp",
  "service",
  "eventDate",
  "location",
  "guestRange",
  "details",
];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  const data = JSON.parse(e.postData.contents);

  if (data.secret !== SHARED_SECRET) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: "unauthorized" })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow(HEADERS.map((key) => data[key] || ""));

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}

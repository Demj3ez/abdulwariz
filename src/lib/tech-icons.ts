import {
  siWordpress,
  siWoocommerce,
  siGithub,
  siVercel,
  siNotion,
  siN8n,
  siMake,
  siZapier,
  siClaude,
  siGooglegemini,
  siMeta,
  siGoogle,
  siWhatsapp,
  siGoogledrive,
  siGooglecalendar,
  siGooglesheets,
  siTelegram,
  siQdrant,
} from "simple-icons";

export type TechIcon = { title: string; hex: string; path: string };

// Only skills/tools with an accurate, official mark are mapped here.
// Anything not listed (e.g. ChatGPT, OpenAI API, Canva, CapCut, CRM,
// "Strategic Planning" etc.) intentionally has no icon rather than a
// mismatched or invented one — the badge just renders as plain text.
export const techIcons: Record<string, TechIcon> = {
  WordPress: siWordpress,
  WooCommerce: siWoocommerce,
  GitHub: siGithub,
  Vercel: siVercel,
  Notion: siNotion,
  n8n: siN8n,
  Make: siMake,
  Zapier: siZapier,
  Claude: siClaude,
  Gemini: siGooglegemini,
  "Meta Business Suite": siMeta,
  "Google Business Profile Optimization": siGoogle,
  "Google Business Profile": siGoogle,
  "WhatsApp Business": siWhatsapp,
  "Google Drive": siGoogledrive,
  "Google Calendar": siGooglecalendar,
  "Google Sheets": siGooglesheets,
  Telegram: siTelegram,
  "Pinecone / Qdrant Vector DB": siQdrant,
  "Qdrant VectorDB": siQdrant,
};

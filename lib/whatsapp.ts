export const WHATSAPP_NUMBER = "528148136201";
export const WHATSAPP_DEMO_TEXT = "Visite su página web y me interesa una demo";

export function getWhatsAppLink(text: string = WHATSAPP_DEMO_TEXT): string {
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}


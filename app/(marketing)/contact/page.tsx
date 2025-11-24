import { generateSEOMetadata } from "@/lib/seo";
import ContactForm from "./ContactForm";

export const metadata = generateSEOMetadata({
  title: "Contacto - Calcula el Costo de tu Caos Operativo | Insquid",
  description:
    "Hablemos de cuánto te está costando el caos operativo. Agenda una sesión gratuita donde calcularemos el impacto real y cómo Insquid lo elimina.",
});

export default function ContactPage() {
  return <ContactForm />;
}


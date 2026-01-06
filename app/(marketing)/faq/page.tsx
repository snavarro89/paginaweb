import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { HelpCircle, MessageCircle } from "lucide-react";

export const metadata = generateSEOMetadata({
  title: "Preguntas Frecuentes - Insquid | IA⁺ y Control Operativo",
  description:
    "Resuelve tus dudas sobre Agentes IA⁺, gestión de activos, precios por uso y cómo eliminar el caos operativo en tu empresa industrial.",
});

export default function FAQPage() {
  const faqs = [
    {
      question: "¿Qué es exactamente un Agente IA⁺ en Insquid?",
      answer:
        "Un Agente IA⁺ es un modelo de inteligencia artificial entrenado específicamente para el sector industrial. A diferencia de un chatbot genérico, nuestros agentes están integrados en tu flujo de trabajo: validan que los técnicos tomen las fotos correctas, analizan manuales para dar diagnósticos en segundos y predicen fallas en tus activos basándose en datos históricos.",
    },
    {
      question: "¿Mis técnicos 'no tecnológicos' podrán usar la app?",
      answer:
        "Absolutamente. Insquid ha sido diseñado para el técnico que está en el techo de una planta o en un cuarto de máquinas. La interfaz es visual, los checklists se llenan con un par de clics y la IA⁺ asiste por voz si es necesario. Si saben usar WhatsApp, saben usar Insquid.",
    },
    {
      question: "¿Cómo funciona el cobro por volumen?",
      answer:
        "No cobramos por usuario. Creemos que todos en tu empresa (y tus clientes) deben tener acceso. Cobramos por el volumen de tu operación: cuántas órdenes de servicio procesas al mes y cuántos activos gestionas. Esto te permite crecer tu equipo sin que tu factura de software se dispare linealmente.",
    },
    {
      question: "¿Es seguro tener mis datos en la nube?",
      answer:
        "Utilizamos infraestructura de grado bancario (AWS/Google Cloud) con encriptación de punto a punto. Tus datos se respaldan cada hora y solo tú eres el dueño de la información. Cumplimos con estándares de privacidad internacionales para proteger la información de tus clientes y activos.",
    },
    {
      question: "¿Cuánto tarda la implementación?",
      answer:
        "Una empresa promedio está operativa en 7 a 14 días. Nuestro Agente de Implementación ayuda a cargar tus bases de datos de clientes y activos automáticamente. Ofrecemos sesiones de capacitación guiadas para asegurar que el cambio de cultura operativa sea exitoso.",
    },
    {
      question: "¿Tienen garantía de satisfacción?",
      answer:
        "Sí. Tenemos una garantía de 'Cero Riesgo' de 30 días. Si después de configurar y usar la plataforma para tus primeros servicios no ves una mejora real en tu control operativo, te devolvemos el 100% de tu dinero.",
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            Centro de <span className="text-primary-600">Ayuda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance">
            Todo lo que necesitas saber sobre la nueva era de gestión industrial con IA⁺.
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ Grid */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                      {faq.question}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Support */}
      <SectionWrapper className="bg-primary-600 text-white text-center overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-8">¿Aún tienes dudas?</h2>
          <p className="text-xl text-primary-100 mb-12">
            Nuestros ingenieros de soluciones están listos para explicarte cómo Insquid se adapta a tu operación específica.
          </p>
          <CTAButton href={getWhatsAppLink()} className="bg-white text-primary-600 hover:bg-gray-100 rounded-full px-12 py-6 text-xl">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-6 h-6" />
              <span>Chatear por WhatsApp</span>
            </div>
          </CTAButton>
        </div>
      </SectionWrapper>
    </div>
  );
}

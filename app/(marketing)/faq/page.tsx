import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";

export const metadata = generateSEOMetadata({
  title: "Preguntas Frecuentes - Insquid | Costo del Caos Operativo",
  description:
    "Resuelve tus dudas sobre el costo del caos operativo, cómo Insquid te ayuda a ahorrar tiempo y dinero, y el ROI de implementar un software de gestión.",
});

export default function FAQPage() {
  const faqs = [
    {
      question: "¿Cómo sé si ya necesito un software como Insquid y no solo Excel?",
      answer:
        "Si reconoces estos síntomas, ya necesitas Insquid: pierdes horas buscando evidencias en WhatsApp o correos, servicios se olvidan o se duplican, no puedes cobrar a tiempo porque falta información, siempre estás apagando fuegos en lugar de prevenir problemas, o tu equipo crece pero la operación se vuelve más caótica. Excel funciona para 1-2 técnicos, pero cuando tienes más, el caos operativo te cuesta más de lo que crees. Un técnico puede perder 40-60 horas al mes en tareas no productivas. Insquid elimina ese tiempo perdido y te da control total.",
    },
    {
      question: "¿De verdad voy a ahorrar tiempo si mis técnicos no son tan tecnológicos?",
      answer:
        "Sí. Insquid está diseñado para ser simple. Los técnicos solo necesitan: abrir la app móvil, ver sus servicios asignados, tomar fotos y llenar campos básicos. No necesitan saber de tecnología. De hecho, ahorran tiempo porque no tienen que buscar información en WhatsApp, escribir correos largos o hacer reportes manuales. Todo se hace desde el celular en minutos. El ahorro real: 2-3 horas diarias por técnico que antes se perdían en tareas administrativas. Eso se traduce en más servicios completados, más ingresos y menos estrés operativo.",
    },
    {
      question: "¿Cómo me ayuda Insquid a cobrar más rápido?",
      answer:
        "El problema de cobrar tarde es que falta información: fotos, notas, firmas, tiempos. Con Insquid, cuando un técnico completa un servicio, toda la información está lista: fotos desde el campo, notas técnicas, firmas digitales del cliente, tiempos registrados. No más buscar evidencias en WhatsApp o correos. Con toda la información completa, puedes facturar inmediatamente. Además, puedes ver qué servicios están pendientes de facturación y priorizarlos. El resultado: facturación más rápida, menos servicios sin cobrar, mejor flujo de caja. Clientes reportan reducir el tiempo de facturación de semanas a días.",
    },
    {
      question: "¿Qué pasa si después de un mes no veo resultados?",
      answer:
        "Tenemos una garantía \"0 Riesgo\": si después de 30 días no ves valor en Insquid, te devolvemos tu dinero completo. Sin preguntas. Solo pedimos que completes el onboarding básico (1-2 semanas), cargues tu catálogo de clientes y activos, uses la plataforma para al menos 10 servicios y generes 2 reportes básicos. Si cumples esto y aún no ves valor, te devolvemos tu dinero. La mayoría de nuestros clientes ven resultados en las primeras semanas: menos tiempo perdido, evidencias completas, procesos más claros. Si no funciona para ti, no pierdes nada.",
    },
    {
      question: "¿Cómo calculan el impacto del caos operativo en mi empresa?",
      answer:
        "Calculamos tres tipos de pérdidas: 1) Pérdidas inmediatas: horas perdidas buscando información, servicios que no se hacen, retrabajos. Un técnico pierde 2-3 horas diarias = 40-60 horas/mes. Multiplica por tu costo por hora y número de técnicos. 2) Menos ingresos: servicios no cobrados a tiempo, ventas adicionales que no se cierran, margen menor por servicio. 3) Oportunidades perdidas: clientes que se van, empleados frustrados, incapacidad de crecer. En una sesión de diagnóstico, hacemos los números específicos de tu operación y te mostramos cuánto te está costando el caos. Agenda una llamada y lo calculamos juntos.",
    },
    {
      question: "¿Cuánto tiempo toma implementar Insquid?",
      answer:
        "La implementación básica toma 1-2 semanas. Incluye: configuración inicial, migración de datos (clientes, activos), capacitación del equipo, y primeros servicios en la plataforma. Nuestro equipo te guía paso a paso. Para operaciones más complejas (múltiples ubicaciones, muchos activos, procesos muy específicos), puede tomar 3-4 semanas. Lo importante: desde el primer día empiezas a ver beneficios. No esperas meses para ver resultados. Y todo está incluido en tu plan, sin costos adicionales de implementación.",
    },
    {
      question: "¿Qué tipo de soporte e implementación ofrecen?",
      answer:
        "Todos los planes incluyen implementación guiada sin costo adicional: migración de datos, configuración según tus procesos, capacitación del equipo. El soporte varía por plan: Micro tiene soporte por email, Pyme tiene soporte prioritario, y Empresarial tiene soporte 24/7 con gerente de cuenta dedicado. También ofrecemos documentación completa, videos tutoriales y sesiones de capacitación. No te dejamos solo. Nuestro objetivo es que veas resultados rápidamente, así que te acompañamos durante todo el proceso.",
    },
    {
      question: "¿Qué pasa si crezco 2x o 3x en servicios?",
      answer:
        "Insquid escala contigo. Puedes actualizar tu plan en cualquier momento para agregar más técnicos o servicios. No hay límites técnicos: la plataforma maneja desde 5 técnicos hasta cientos. Si creces, simplemente cambias de plan o agregas servicios adicionales (se facturan prorrateados). Lo mejor: el crecimiento es controlado. Con Insquid, puedes manejar 2x o 3x más servicios con el mismo equipo, porque eliminas el tiempo perdido y aumentas la productividad. Muchos clientes crecen sin contratar más gente, solo por ser más eficientes.",
    },
    {
      question: "¿Insquid se integra con otras herramientas que ya uso?",
      answer:
        "Sí. Insquid se integra con sistemas de facturación y contabilidad, plataformas de comunicación (WhatsApp, SMS), sistemas de GPS, herramientas de firma electrónica, y ofrecemos APIs para integraciones personalizadas. Si usas herramientas específicas, contáctanos y evaluamos cómo integrarlas. La idea es que Insquid se adapte a tu flujo de trabajo, no que tengas que cambiar todo lo que ya funciona.",
    },
    {
      question: "¿Mis datos están seguros en Insquid?",
      answer:
        "Sí. La seguridad de tus datos es nuestra prioridad. Utilizamos infraestructura en la nube con encriptación, respaldos automáticos diarios y cumplimiento con estándares de seguridad. Tus datos están protegidos y respaldados. Puedes exportar tus datos en cualquier momento. Revisa nuestra Política de Privacidad para más detalles. Nunca compartimos tus datos con terceros sin tu autorización.",
    },
  ];

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Resuelve tus dudas sobre el costo del caos operativo y cómo Insquid te
            ayuda a eliminarlo
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h2>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Tienes más preguntas?
            </h2>
            <p className="text-gray-700 mb-6">
              Agenda una llamada y hagamos los números de tu caos operativo. Te
              mostraremos cuánto te está costando y cómo Insquid lo elimina.
            </p>
            <CTAButton href="/contact" variant="primary">
              Agenda una llamada
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

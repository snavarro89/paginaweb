import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PricingCard from "@/components/ui/PricingCard";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = generateSEOMetadata({
  title: "Precios - Insquid | Menos Costoso que el Caos Operativo",
  description:
    "Insquid cuesta menos que las horas que pierdes en caos operativo. Planes flexibles para empresas de servicios en campo. Garantía \"0 Riesgo\".",
});

export default function PricingPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Precios que Cuestan Menos que el Caos Operativo
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Insquid cuesta menos que las horas que tus técnicos pierden cada mes en
            tareas no productivas. Menos que un solo servicio no cobrado. Menos que
            un cliente perdido.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              El Cálculo Real
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Un técnico promedio pierde 2-3 horas diarias en tareas no productivas:
              buscar evidencias, pasar información por WhatsApp, corregir errores,
              hacer reportes manuales. Eso son{" "}
              <strong className="text-gray-900">40-60 horas al mes</strong> por
              técnico.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">
                Insquid cuesta menos que esas horas perdidas.
              </strong>{" "}
              Y eso sin contar servicios no cobrados, clientes perdidos o
              oportunidades de crecimiento que nunca se materializan.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-8">
            <p className="text-center text-lg text-gray-700 mb-8">
              Todos nuestros planes incluyen usuarios ilimitados. Paga solo por lo que necesitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <PricingCard
              name="Plan Micro"
              price="$1,000"
              period="/mes"
              description="Ideal para empresas pequeñas que buscan orden y control"
              features={[
                "Hasta 30 órdenes de servicio activas",
                "Hasta 25 sistemas",
                "Hasta 5 checklists",
                "15 GB de almacenamiento",
                "1,000 tokens de IA",
                "Soporte por correo",
                "Usuarios ilimitados",
                "Actualizaciones incluidas",
                "Implementación guiada",
                "Orden extra: $15 MXN",
                "Sistema extra: $5 MXN",
                "Checklist extra: $25 MXN",
              ]}
              ctaText="Solicitar Plan Micro"
              ctaHref={getWhatsAppLink("Hola, estoy interesado en el Plan Micro de Insquid")}
            />
            <PricingCard
              name="Plan Pyme"
              price="$2,100"
              period="/mes"
              description="Para empresas en crecimiento que necesitan escalar"
              featured
              features={[
                "Hasta 150 órdenes de servicio activas",
                "Hasta 75 sistemas",
                "Hasta 25 checklists",
                "250 GB de almacenamiento",
                "15,000 tokens de IA",
                "1,000 APIs/Webhooks",
                "Soporte por WhatsApp",
                "Usuarios ilimitados",
                "Actualizaciones incluidas",
                "Implementación guiada",
                "Orden extra: $8 MXN",
                "Sistema extra: $4 MXN",
                "Checklist extra: $15 MXN",
              ]}
              ctaText="Solicitar Plan Pyme"
              ctaHref={getWhatsAppLink("Hola, estoy interesado en el Plan Pyme de Insquid")}
            />
            <PricingCard
              name="Plan Empresarial"
              price="$5,000"
              period="/mes"
              description="Para empresas grandes con operaciones complejas"
              features={[
                "Hasta 500 órdenes de servicio activas",
                "Hasta 350 sistemas",
                "Checklists ilimitados",
                "1 TB de almacenamiento",
                "75,000 tokens de IA",
                "APIs/Webhooks ilimitados",
                "Soporte por WhatsApp + Gerente",
                "Usuarios ilimitados",
                "Actualizaciones incluidas",
                "Implementación completa",
                "Orden extra: $4 MXN",
                "Sistema extra: $2 MXN",
              ]}
              ctaText="Solicitar Plan Empresarial"
              ctaHref={getWhatsAppLink("Hola, estoy interesado en el Plan Empresarial de Insquid")}
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Modelo de Precios por Volumen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Los usuarios son ilimitados</strong> en todos los planes (no distinguimos por tipo de usuario). 
              El precio de Insquid es por volumen, lo que significa que cada plan incluye límites base para:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>
                • <strong>Órdenes de servicio activas:</strong> Cada plan tiene un límite base de órdenes activas simultáneas
              </li>
              <li>
                • <strong>Sistemas:</strong> Cada plan incluye un número base de sistemas que puedes gestionar
              </li>
              <li>
                • <strong>Checklists:</strong> Cada plan incluye un límite base de checklists (Plan Micro: 5, Plan Pyme: 25, Plan Empresarial: ilimitados)
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Si necesitas más capacidad:</strong> Puedes agregar órdenes, sistemas o checklists de manera individual 
              según los precios mostrados en cada plan. Esto te permite escalar solo lo que necesitas, cuando lo necesitas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Cargos adicionales:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Órdenes extra más allá del límite base del plan</li>
              <li>• Sistemas extra más allá del límite base del plan</li>
              <li>• Checklists extra más allá del límite base del plan (Plan Micro: $25 MXN, Plan Pyme: $15 MXN, Plan Empresarial: ilimitados)</li>
              <li>• Almacenamiento adicional: <strong>$0.50 MXN por GB</strong></li>
              <li>• Tokens de IA para funcionalidades avanzadas (según límite del plan)</li>
            </ul>
            <div className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Descuentos en Planes Anuales
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Plan anual financiado:</strong> Descuento del <strong>20%</strong> sobre el precio mensual
                </li>
                <li>
                  • <strong>Plan anual de contado:</strong> Descuento del <strong>30%</strong> sobre el precio mensual
                </li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm">
                Todos los planes incluyen actualizaciones de software y mejoras continuas sin costo adicional.
              </p>
            </div>
          </div>

          {/* Garantía 0 riesgo */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 md:p-12 text-white mb-8">
            <h2 className="text-3xl font-bold mb-6">Garantía &quot;0 Riesgo&quot;</h2>
            <p className="text-xl text-primary-100 mb-6 leading-relaxed">
              Estamos tan seguros de que Insquid eliminará el caos operativo de tu
              empresa, que te ofrecemos esta garantía:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-3">
                  Implementación Guiada Sin Costo
                </h3>
                <p className="text-primary-100">
                  Nuestro equipo te ayuda a configurar Insquid según tus procesos.
                  Migración de datos, capacitación y soporte durante la
                  implementación, todo incluido.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-3">
                  Periodo de Garantía de 30 Días
                </h3>
                <p className="text-primary-100">
                  Si después de 30 días no ves valor en Insquid, te devolvemos tu
                  dinero completo. Sin preguntas. Solo pedimos una breve llamada de
                  feedback para mejorar.
                </p>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold mb-3">
                Condiciones Sencillas de Éxito
              </h3>
              <p className="text-primary-100 mb-3">
                Para que la garantía aplique, solo necesitas:
              </p>
              <ul className="space-y-2 text-primary-100">
                <li>• Completar el onboarding básico (1-2 semanas)</li>
                <li>• Cargar tu catálogo de clientes y activos</li>
                <li>• Usar la plataforma para al menos 10 servicios</li>
                <li>• Generar al menos 2 reportes básicos</li>
              </ul>
              <p className="text-primary-100 mt-4">
                Si cumples esto y aún no ves valor, te devolvemos tu dinero.
              </p>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Preguntas Frecuentes sobre Precios
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo cambiar de plan más adelante?
                </h3>
                <p className="text-gray-700">
                  Sí, puedes actualizar o cambiar de plan en cualquier momento.
                  Los cambios se reflejan en tu próximo ciclo de facturación.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Hay costos de implementación ocultos?
                </h3>
                <p className="text-gray-700">
                  No. Todos los planes incluyen implementación guiada sin costo
                  adicional. Para migraciones muy complejas o personalizaciones
                  extensas, podemos ofrecer servicios adicionales opcionales.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Qué pasa si excedo el límite de técnicos o servicios?
                </h3>
                <p className="text-gray-700">
                  Te notificaremos cuando te acerques al límite. Puedes agregar
                  técnicos o servicios adicionales (se facturan prorrateados) o
                  actualizar a un plan superior.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Los precios incluyen impuestos?
                </h3>
                <p className="text-gray-700">
                  Los precios mostrados no incluyen impuestos. Se aplicarán los
                  impuestos correspondientes según la legislación fiscal de tu
                  país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empieza Sin Riesgo
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Agenda una llamada y hagamos los números de tu caos operativo. Te
            mostraremos cuánto te está costando y cómo Insquid lo elimina.
          </p>
          <CTAButton href="/contact" variant="primary">
            Agenda una llamada
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}

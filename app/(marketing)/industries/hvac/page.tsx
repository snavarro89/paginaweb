import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = generateSEOMetadata({
  title: "HVAC - Del Caos al Control de Contratos | Insquid",
  description:
    "Elimina el caos operativo en empresas HVAC. Gestiona contratos automáticamente, optimiza rutas de técnicos y reduce servicios de emergencia mal coordinados.",
});

export default function HVACPage() {
  return (
    <>
      <SectionWrapper className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-accent-50 to-primary-200"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-300/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto text-center py-16 md:py-24">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-primary-600">Control Total</span>{" "}
              <span className="text-gray-900">para HVAC</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Gestiona contratos de mantenimiento, optimiza rutas y automatiza
            procesos de servicios HVAC con Insquid en una sola plataforma. Elige el
            control que se adapta a donde está tu negocio hoy.
          </p>
          <CTAButton href={getWhatsAppLink()} variant="primary" className="bg-primary-600 hover:bg-primary-700 text-white border-none shadow-lg">
            Agenda una demo
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Costo del Caos en HVAC */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              El Costo del Caos en HVAC
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En empresas HVAC, el caos operativo se traduce en: contratos de
              mantenimiento que no se cumplen, servicios de emergencia mal
              coordinados, técnicos perdiendo horas en desplazamientos
              innecesarios, filtros que no se cambian a tiempo, y clientes que se
              van por mal servicio.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">
                Insquid elimina ese caos:
              </strong>{" "}
              contratos gestionados automáticamente, rutas optimizadas para técnicos,
              mantenimientos preventivos programados, servicios de emergencia bien
              coordinados, y clientes satisfechos con servicio proactivo.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios Específicos para tu Industria
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Funcionalidades diseñadas para empresas de climatización y HVAC
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FeatureCard
              title="Gestión de Contratos de Mantenimiento"
              description="Administra contratos anuales, semestrales y mensuales de mantenimiento. Programa visitas automáticamente según frecuencia acordada y rastrea cumplimiento de SLA."
            />
            <FeatureCard
              title="Mantenimiento de Equipos HVAC"
              description="Rastrea cada unidad de aire acondicionado, sistema de ventilación y equipo de climatización. Mantén historial de limpiezas, filtros, refrigerante y reparaciones."
            />
            <FeatureCard
              title="Checklists de Mantenimiento Estacional"
              description="Crea checklists específicos para mantenimiento de verano e invierno. Los técnicos completan inspecciones detalladas con mediciones de temperatura, presión y flujo."
            />
            <FeatureCard
              title="Gestión de Refrigerante y Filtros"
              description="Controla inventario de refrigerante, filtros y repuestos. Programa reemplazos según uso y recibe alertas de niveles bajos o fechas de vencimiento."
            />
            <FeatureCard
              title="Optimización de Rutas de Técnicos"
              description="Agrupa servicios por zona geográfica y optimiza rutas para reducir tiempos de desplazamiento. Aumenta la cantidad de servicios completados por día."
            />
            <FeatureCard
              title="Reportes de Eficiencia Energética"
              description="Registra mediciones de consumo energético y eficiencia de equipos. Genera reportes que ayudan a tus clientes a optimizar costos operativos."
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Casos de Uso Comunes
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mantenimiento Preventivo de Aire Acondicionado
              </h3>
              <p className="text-gray-700">
                Programa limpiezas trimestrales, cambios de filtros mensuales y
                revisiones anuales. Los técnicos registran mediciones, toman fotos
                y documentan el estado de cada equipo.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Servicios de Emergencia 24/7
              </h3>
              <p className="text-gray-700">
                Gestiona llamadas de emergencia, asigna técnicos disponibles y
                rastrea tiempos de respuesta. Prioriza servicios críticos y mantén
                a clientes informados en tiempo real.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Instalación de Nuevos Sistemas
              </h3>
              <p className="text-gray-700">
                Gestiona proyectos de instalación desde la cotización hasta la
                puesta en marcha. Asigna equipos de técnicos, rastrea avances y
                documenta instalaciones completas.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para Optimizar tu Operación?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Descubre cómo Insquid puede transformar la gestión de tus servicios
            HVAC. Agenda una demo gratuita y conoce todas las funcionalidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={getWhatsAppLink()} variant="primary">
              Agenda una demo
            </CTAButton>
            <CTAButton href="/features" variant="secondary">
              Ver todas las funcionalidades
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}


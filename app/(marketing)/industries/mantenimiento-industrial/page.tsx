import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata = generateSEOMetadata({
  title: "Mantenimiento Industrial - Elimina Paradas No Programadas | Insquid",
  description:
    "Elimina el caos operativo en mantenimiento industrial. Reduce paradas no programadas, optimiza mantenimientos preventivos y controla inventario de repuestos.",
});

export default function MantenimientoIndustrialPage() {
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
              <span className="text-gray-900">para Mantenimiento Industrial</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Optimiza mantenimientos preventivos, gestiona repuestos y automatiza
            procesos de mantenimiento industrial con Insquid en una sola plataforma.
            Elige el control que se adapta a donde está tu negocio hoy.
          </p>
          <CTAButton href={getWhatsAppLink()} variant="primary" className="bg-primary-600 hover:bg-primary-700 text-white border-none shadow-lg">
            Agenda una demo
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Costo del Caos en Mantenimiento Industrial */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              El Costo del Caos en Mantenimiento Industrial
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En mantenimiento industrial, el caos operativo se traduce en:
              paradas no programadas que cuestan miles, mantenimientos preventivos
              que se olvidan, repuestos que no están cuando se necesitan, técnicos
              perdiendo horas buscando historial de equipos, y decisiones tomadas
              sin datos reales.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">
                Insquid elimina ese caos:
              </strong>{" "}
              mantenimientos programados automáticamente, control de inventario de
              repuestos, historial completo accesible desde el campo, datos reales
              para tomar decisiones, y reducción de paradas no programadas.
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
              Funcionalidades diseñadas para empresas de mantenimiento industrial
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FeatureCard
              title="Mantenimiento Preventivo Programado"
              description="Programa mantenimientos basados en horas de operación, ciclos de producción o tiempo calendario. Reduce paradas no programadas y extiende la vida útil de equipos."
            />
            <FeatureCard
              title="Gestión de Equipos Críticos"
              description="Identifica y prioriza equipos críticos para la producción. Establece planes de mantenimiento específicos y monitorea su estado constantemente."
            />
            <FeatureCard
              title="Control de Inventario de Repuestos"
              description="Gestiona stock de repuestos, filtros, lubricantes y partes críticas. Recibe alertas de niveles bajos y optimiza compras basadas en historial de uso."
            />
            <FeatureCard
              title="Análisis de Tiempos de Inactividad"
              description="Registra y analiza tiempos de parada por mantenimiento. Identifica patrones, causas raíz y oportunidades de mejora para aumentar disponibilidad."
            />
            <FeatureCard
              title="Historial Técnico Completo"
              description="Mantén registro detallado de todas las intervenciones: reparaciones, ajustes, calibraciones y reemplazos. Accede al historial completo de cada equipo."
            />
            <FeatureCard
              title="Reportes de Eficiencia y Costos"
              description="Analiza costos de mantenimiento por equipo, línea de producción o área. Calcula MTBF, MTTR y otros KPIs de mantenimiento industrial."
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
                Mantenimiento de Líneas de Producción
              </h3>
              <p className="text-gray-700">
                Programa mantenimientos preventivos de máquinas, transportadores y
                sistemas automatizados. Coordina paradas de producción y optimiza
                tiempos de mantenimiento para minimizar impacto en producción.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Gestión de Equipos Rotativos
              </h3>
              <p className="text-gray-700">
                Programa lubricaciones, cambios de filtros y revisiones de
                motores, bombas y compresores. Rastrea horas de operación y
                programa mantenimientos según uso real.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mantenimiento Correctivo y Emergencias
              </h3>
              <p className="text-gray-700">
                Gestiona órdenes de trabajo urgentes, asigna técnicos
                especializados y rastrea tiempos de respuesta. Documenta causas y
                soluciones para prevenir recurrencias.
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
            Descubre cómo Insquid puede transformar la gestión de tu mantenimiento
            industrial. Agenda una demo gratuita y conoce todas las
            funcionalidades.
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


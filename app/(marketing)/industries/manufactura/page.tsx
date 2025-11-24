import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import CTAButton from "@/components/ui/CTAButton";

export const metadata = generateSEOMetadata({
  title: "Manufactura - Reduce Paradas No Programadas | Insquid",
  description:
    "Elimina el caos operativo en manufactura. Coordina mantenimientos con producción, programa calibraciones automáticamente y reduce paradas costosas.",
});

export default function ManufacturaPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insquid para Manufactura
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Mantén tus líneas de producción operativas con gestión eficiente de
            servicios técnicos, mantenimiento de maquinaria y optimización de
            tiempos de inactividad.
          </p>
          <CTAButton href="/contact" variant="primary">
            Agenda una demo
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Costo del Caos en Manufactura */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-accent-50 border-l-4 border-accent-600 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              El Costo del Caos en Manufactura
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En manufactura, el caos operativo se traduce en: líneas de producción
              paradas por mantenimientos no programados, calibraciones que se
              olvidan y generan productos defectuosos, técnicos perdiendo horas
              buscando información de máquinas, y decisiones tomadas sin datos de
              disponibilidad real.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">
                Insquid elimina ese caos:
              </strong>{" "}
              mantenimientos coordinados con producción, calibraciones programadas
              automáticamente, historial técnico accesible, datos de disponibilidad
              en tiempo real, y reducción de paradas no programadas.
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
              Funcionalidades diseñadas para empresas manufactureras
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FeatureCard
              title="Mantenimiento de Líneas de Producción"
              description="Gestiona mantenimiento preventivo y correctivo de líneas de producción completas. Coordina paradas programadas y minimiza tiempos de inactividad."
            />
            <FeatureCard
              title="Gestión de Maquinaria Especializada"
              description="Rastrea cada máquina, herramienta y equipo de producción. Mantén historial de calibraciones, ajustes y reparaciones con documentación técnica completa."
            />
            <FeatureCard
              title="Control de Calibraciones y Metrología"
              description="Programa calibraciones periódicas de instrumentos de medición y equipos de control de calidad. Rastrea certificados y fechas de vencimiento."
            />
            <FeatureCard
              title="Gestión de Repuestos y Consumibles"
              description="Controla inventario de repuestos críticos, lubricantes, filtros y consumibles. Optimiza compras basadas en uso histórico y reduce costos."
            />
            <FeatureCard
              title="Análisis de Disponibilidad de Equipos"
              description="Monitorea tiempos de operación, paradas y disponibilidad de equipos. Calcula OEE (Overall Equipment Effectiveness) y otros KPIs de manufactura."
            />
            <FeatureCard
              title="Coordinación de Servicios Externos"
              description="Gestiona servicios de proveedores externos, calibraciones de terceros y reparaciones especializadas. Mantén registro completo de todos los servicios."
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
                Mantenimiento Preventivo de Máquinas CNC
              </h3>
              <p className="text-gray-700">
                Programa mantenimientos basados en horas de operación o ciclos de
                producción. Incluye limpieza, lubricación, cambio de herramientas y
                verificaciones de precisión.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Gestión de Paradas Programadas
              </h3>
              <p className="text-gray-700">
                Coordina paradas de producción para mantenimiento mayor. Asigna
                equipos de técnicos, gestiona repuestos necesarios y optimiza
                tiempos de parada.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Calibración de Equipos de Medición
              </h3>
              <p className="text-gray-700">
                Programa calibraciones periódicas de balanzas, medidores, calibres
                y equipos de control de calidad. Rastrea certificados y asegura
                cumplimiento de estándares.
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
            Descubre cómo Insquid puede transformar la gestión de servicios
            técnicos en tu planta manufacturera. Agenda una demo gratuita y conoce
            todas las funcionalidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">
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


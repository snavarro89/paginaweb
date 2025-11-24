import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import CTAButton from "@/components/ui/CTAButton";

export const metadata = generateSEOMetadata({
  title: "Sistemas Contra Incendios - Elimina el Caos Operativo | Insquid",
  description:
    "Elimina el caos operativo en empresas de sistemas contra incendios. Mantenimiento preventivo automático, cumplimiento normativo garantizado y control total de activos.",
});

export default function SistemasContraIncendiosPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insquid para Sistemas Contra Incendios
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Gestiona el mantenimiento preventivo y correctivo de sistemas de
            protección contra incendios con cumplimiento normativo garantizado y
            control total de tus activos.
          </p>
          <CTAButton href="/contact" variant="primary">
            Agenda una demo
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Costo del Caos en Sistemas Contra Incendios */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-accent-50 border-l-4 border-accent-600 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              El Costo del Caos en Sistemas Contra Incendios
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En empresas de sistemas contra incendios, el caos operativo se traduce
              en: mantenimientos que se olvidan y generan multas, extintores que
              vencen sin recargar, evidencias perdidas que impiden facturar,
              técnicos perdiendo horas buscando información de equipos, y clientes
              que se van por incumplimiento de normativas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">
                Insquid elimina ese caos:
              </strong>{" "}
              mantenimientos programados automáticamente, alertas antes de
              vencimientos, evidencias completas para auditorías, información
              accesible desde el campo, y cumplimiento normativo garantizado.
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
              Funcionalidades diseñadas para empresas de sistemas contra incendios
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FeatureCard
              title="Cumplimiento Normativo Automático"
              description="Programa mantenimientos preventivos según normativas (NOM-002-STPS, NFPA, etc.). Recibe alertas automáticas antes de vencimientos y mantén registros completos para auditorías."
            />
            <FeatureCard
              title="Gestión de Extintores y Equipos"
              description="Rastrea cada extintor, hidrante, sistema de rociadores y equipo de protección. Mantén historial de recargas, pruebas hidrostáticas y certificaciones con fechas de vencimiento."
            />
            <FeatureCard
              title="Inspecciones Programadas"
              description="Crea checklists personalizados para inspecciones mensuales, trimestrales y anuales. Los técnicos completan inspecciones desde el campo con evidencias fotográficas."
            />
            <FeatureCard
              title="Reportes para Clientes y Autoridades"
              description="Genera reportes detallados de mantenimientos realizados, certificaciones y cumplimiento normativo. Comparte documentación profesional con clientes y autoridades."
            />
            <FeatureCard
              title="Gestión de Repuestos y Recargas"
              description="Controla inventario de repuestos, recargas de extintores y partes de sistemas. Recibe alertas de stock bajo y gestiona proveedores de recargas."
            />
            <FeatureCard
              title="Historial Completo por Ubicación"
              description="Mantén un registro completo de todos los sistemas y equipos por cliente y ubicación. Accede al historial completo de mantenimientos y reparaciones."
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
                Mantenimiento Preventivo de Extintores
              </h3>
              <p className="text-gray-700">
                Programa recargas mensuales, inspecciones trimestrales y pruebas
                hidrostáticas anuales. El sistema crea órdenes de trabajo
                automáticamente y asigna técnicos según rutas optimizadas.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Inspección de Sistemas de Rociadores
              </h3>
              <p className="text-gray-700">
                Realiza inspecciones completas de sistemas de rociadores con
                checklists detallados. Registra presiones, válvulas, alarmas y
                documenta todo con fotos y notas técnicas.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cumplimiento con NOM y NFPA
              </h3>
              <p className="text-gray-700">
                Asegura el cumplimiento de normativas mexicanas e
                internacionales. Genera certificados y reportes que demuestran
                cumplimiento para clientes y autoridades.
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
            Descubre cómo Insquid puede transformar la gestión de tus sistemas
            contra incendios. Agenda una demo gratuita y conoce todas las
            funcionalidades.
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


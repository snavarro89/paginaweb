import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import CTAButton from "@/components/ui/CTAButton";

export const metadata = generateSEOMetadata({
  title: "Sistemas de Seguridad - Del Caos al Control | Insquid",
  description:
    "Elimina el caos operativo en empresas de seguridad. Control total de instalaciones, mantenimientos programados y evidencias completas para facturación.",
});

export default function SistemasSeguridadPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insquid para Sistemas de Seguridad
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Control total sobre instalación, mantenimiento y monitoreo de sistemas
            de seguridad, CCTV y control de acceso con visibilidad en tiempo real.
          </p>
          <CTAButton href="/contact" variant="primary">
            Agenda una demo
          </CTAButton>
        </div>
      </SectionWrapper>

      {/* Costo del Caos en Sistemas de Seguridad */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-accent-50 border-l-4 border-accent-600 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              El Costo del Caos en Sistemas de Seguridad
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En empresas de seguridad, el caos operativo se traduce en:
              instalaciones que se retrasan por falta de información, alarmas que
              no se prueban a tiempo, clientes frustrados por mal servicio,
              técnicos perdiendo horas buscando configuraciones, y servicios que no
              se cobran porque faltan evidencias.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-gray-900">
                Insquid elimina ese caos:
              </strong>{" "}
              proyectos gestionados desde inicio a fin, pruebas programadas
              automáticamente, clientes informados en tiempo real, información
              técnica accesible desde el campo, y evidencias completas para
              facturación inmediata.
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
              Funcionalidades diseñadas para empresas de seguridad y vigilancia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <FeatureCard
              title="Gestión de Instalaciones CCTV"
              description="Rastrea cada cámara, DVR, NVR y componente del sistema. Mantén registros de ubicación, modelos, números de serie y configuraciones técnicas de cada dispositivo."
            />
            <FeatureCard
              title="Mantenimiento Preventivo de Alarmas"
              description="Programa pruebas periódicas de sistemas de alarma, sensores y paneles de control. Verifica funcionamiento de baterías, comunicaciones y sensores."
            />
            <FeatureCard
              title="Control de Acceso y Credenciales"
              description="Gestiona instalación y mantenimiento de sistemas de control de acceso. Rastrea tarjetas, lectores, cerraduras electrónicas y software de gestión."
            />
            <FeatureCard
              title="Monitoreo y Respuesta a Incidentes"
              description="Registra y gestiona respuestas a alarmas y eventos de seguridad. Documenta tiempos de respuesta, acciones tomadas y resoluciones."
            />
            <FeatureCard
              title="Actualizaciones y Configuraciones"
              description="Mantén historial de actualizaciones de firmware, cambios de configuración y ajustes de sistemas. Documenta todos los cambios para referencia futura."
            />
            <FeatureCard
              title="Reportes de Servicio para Clientes"
              description="Genera reportes profesionales de instalaciones y mantenimientos realizados. Incluye evidencias fotográficas, configuraciones y recomendaciones."
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
                Instalación de Sistemas CCTV
              </h3>
              <p className="text-gray-700">
                Gestiona proyectos completos de instalación: asignación de técnicos,
                seguimiento de avances, registro de equipos instalados y
                documentación técnica completa con fotos y diagramas.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mantenimiento de Sistemas de Alarma
              </h3>
              <p className="text-gray-700">
                Programa pruebas mensuales y mantenimientos trimestrales. Los
                técnicos verifican sensores, baterías y comunicaciones desde el
                campo, registrando todo en tiempo real.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Soporte Técnico y Resolución de Problemas
              </h3>
              <p className="text-gray-700">
                Gestiona tickets de soporte, diagnostica problemas remotos y
                coordina visitas técnicas. Mantén historial completo de problemas
                y soluciones para referencia futura.
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
            Descubre cómo Insquid puede transformar la gestión de tus sistemas de
            seguridad. Agenda una demo gratuita y conoce todas las funcionalidades.
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


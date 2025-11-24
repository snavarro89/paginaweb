import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";

export const metadata = generateSEOMetadata({
  title: "Funcionalidades - Del Caos al Control | Insquid",
  description:
    "De la reacción al control total. Descubre cómo Insquid te da más control operativo, activos bajo control, evidencias claras y datos para crecer.",
});

export default function FeaturesPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            De la Reacción al Control Total
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Cada funcionalidad de Insquid está diseñada para darte control, no
            solo para hacer tareas. Aquí está lo que ganas, y cómo lo logramos.
          </p>
        </div>
      </SectionWrapper>

      {/* Más control de la operación diaria */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Más Control de la Operación Diaria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
              Ver todas tus órdenes de servicio, saber quién hace qué, evitar que
              servicios se pierdan. Deja de apagar fuegos y empieza a prevenir
              problemas.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <Image
                src="/images/web_calendar.png"
                alt="Control de Operación Diaria"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Funcionalidades que te dan control:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Tablero de servicios:</strong> Ve todas tus órdenes de
                    trabajo en un solo lugar, filtradas por estado, técnico, cliente
                    o fecha.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Calendario interactivo:</strong> Visualiza servicios
                    programados, asigna técnicos según disponibilidad y optimiza
                    rutas automáticamente.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Asignación inteligente:</strong> Asigna técnicos
                    basándote en ubicación, especialización y carga de trabajo.
                    Reduce tiempos de desplazamiento.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Notificaciones automáticas:</strong> Mantén a clientes y
                    técnicos informados sobre cambios de estado, sin depender de
                    WhatsApps o correos.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Activos y sistemas bajo control */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Activos y Sistemas Bajo Control
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
              Nunca más perder de vista qué equipo está dónde, qué mantenimiento le
              toca y cuándo. Todo tu inventario de activos, sistemas y equipos en
              un solo lugar, con historial completo.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <Image
                src="/images/web_customer.png"
                alt="Gestión de Activos y Sistemas"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Funcionalidades que te dan control:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Catálogo completo:</strong> Registra todos tus equipos
                    con números de serie, modelos, ubicaciones y especificaciones
                    técnicas. Organiza por clientes, sistemas o jerarquías.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Historial completo:</strong> Accede al historial de
                    servicios, reparaciones, partes reemplazadas y costos de cada
                    activo. Los técnicos consultan antes de ir al campo.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Checklists por tipo de activo:</strong> Crea checklists
                    específicos para cada tipo de equipo. Asegura que todos los
                    pasos se completen correctamente.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Documentación técnica:</strong> Adjunta manuales,
                    diagramas, certificados y cualquier documentación relevante
                    directamente a cada activo.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Evidencias claras, menos retrabajo */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Evidencias Claras, Menos Retrabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
              Menos tiempo buscando fotos en WhatsApp, correos o carpetas. Todo
              centralizado, accesible y completo. No más servicios sin evidencias o
              información incompleta que genera retrabajo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Image
                  src="/images/mobile_home.PNG"
                  alt="Aplicación móvil - Inicio"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Image
                  src="/images/mobile_check_in.PNG"
                  alt="Check-in en campo"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Image
                  src="/images/mobile_visit_detail.PNG"
                  alt="Detalle de visita"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Funcionalidades que eliminan retrabajo:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Carga de fotos desde el campo:</strong> Los técnicos
                    toman fotos directamente desde la app móvil. Se sincronizan
                    automáticamente y quedan asociadas al servicio.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Campos obligatorios:</strong> Define qué información es
                    obligatoria antes de cerrar un servicio. No más servicios
                    incompletos.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Comentarios y notas:</strong> Los técnicos registran
                    observaciones, mediciones y detalles técnicos. Todo queda
                    documentado.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Firmas digitales:</strong> Los clientes firman reportes
                    directamente desde la app móvil. Evidencias completas para
                    facturación y auditorías.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Datos para tomar decisiones y crecer */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Datos para Tomar Decisiones y Crecer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
              Ve tiempos muertos, utilización de técnicos, servicios más rentables,
              clientes problemáticos. Toma decisiones basadas en datos reales, no
              en suposiciones. Crecimiento inteligente, no a ciegas.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="/images/web_stats2_dashboard.png"
                  alt="Dashboard de Estadísticas"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="/images/web_stats.png"
                  alt="Estadísticas y Métricas"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Funcionalidades que te dan datos:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Reportes personalizables:</strong> Crea reportes con los
                    datos que necesitas: tiempos de respuesta, servicios
                    completados, productividad de técnicos, costos por servicio.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Dashboards básicos:</strong> Visualiza el estado de tu
                    operación en tiempo real. KPIs clave: backlog, utilización de
                    técnicos, servicios por día.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Exportación a Excel:</strong> Exporta datos para
                    análisis más profundos. Comparte información con tu equipo o
                    clientes.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    <strong>Análisis de tendencias:</strong> Identifica patrones:
                    qué servicios son más rentables, qué técnicos son más
                    productivos, qué clientes generan más valor.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Del Caos al Control, Paso a Paso
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Cada funcionalidad de Insquid está diseñada para darte control y
            eliminar el caos operativo. Agenda una demo y ve cómo funciona en tu
            operación.
          </p>
          <CTAButton href={getWhatsAppLink()} variant="primary">
            Agenda una demo
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}

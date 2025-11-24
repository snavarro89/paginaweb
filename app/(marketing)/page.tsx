import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import CTAButton from "@/components/ui/CTAButton";
import Image from "next/image";
import Link from "next/link";

export const metadata = generateSEOMetadata({
  title: "Insquid - Del Caos Operativo al Control Total | Software de Mantenimiento",
  description:
    "La plataforma que te lleva del caos operativo al control total en tus mantenimientos y servicios en campo. Elimina horas perdidas, servicios sin cobrar y clientes perdidos.",
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Del Caos Operativo al Control Total en tus Servicios en Campo
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            El problema no es tu gente, es la falta de sistema. Insquid es la
            plataforma que te lleva de Excel, WhatsApps y urgencias → a procesos
            claros, evidencias completas y crecimiento ordenado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <CTAButton href="/contact" variant="primary">
              Calcula el costo de tu caos operativo
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Agenda una demo
            </CTAButton>
          </div>
          <p className="text-sm text-gray-500">
            Hecho para empresas de mantenimiento e instalaciones en México y LATAM
          </p>
        </div>
      </SectionWrapper>

      {/* ¿Sucede esto en tu empresa? */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Sucede esto en tu empresa?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Si reconoces estos síntomas, el caos operativo te está costando más
              de lo que crees
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⏰",
                text: "No alcanza el tiempo",
              },
              {
                icon: "🔥",
                text: "Siempre están apagando fuegos",
              },
              {
                icon: "📋",
                text: "Se olvidan pendientes y servicios",
              },
              {
                icon: "📊",
                text: "Tienes excels y chats para todo",
              },
              {
                icon: "🚨",
                text: "Todo se hace de urgencia",
              },
              {
                icon: "💰",
                text: "No pueden cobrar a tiempo",
              },
            ].map((symptom, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent-500"
              >
                <div className="text-3xl mb-3">{symptom.icon}</div>
                <p className="text-lg font-semibold text-gray-900">
                  {symptom.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* El costo oculto del caos operativo */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              El Costo Oculto del Caos Operativo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hay tres tipos de pérdidas que no ves, pero que te están costando
              miles de pesos cada mes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pérdidas Inmediatas
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Horas perdidas buscando evidencias</li>
                <li>• Servicios que no se hacen a tiempo</li>
                <li>• Más correctivos que preventivos</li>
                <li>• Tiempo en WhatsApps y correos</li>
                <li>• Retrabajos por información incompleta</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Menos Ingresos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Servicios no cobrados a tiempo</li>
                <li>• Ventas adicionales que nunca se cierran</li>
                <li>• Margen menor por servicio</li>
                <li>• Oportunidades de upsell perdidas</li>
                <li>• Facturación retrasada</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Oportunidades Perdidas
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Clientes que se van por mal servicio</li>
                <li>• Empleados frustrados y rotación</li>
                <li>• Incapacidad de crecer con el mismo equipo</li>
                <li>• No puedes escalar sin descontrolarse</li>
                <li>• Competencia que te gana clientes</li>
              </ul>
            </div>
          </div>
          <div className="bg-accent-50 border-l-4 border-accent-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              El Número Real: Un Técnico Puede Perder Decenas de Horas al Mes
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Un técnico promedio pierde entre 2-3 horas diarias en tareas no
              productivas: buscar evidencias en WhatsApp, pasar información por
              correo, corregir errores, hacer reportes manuales, atender urgencias
              mal coordinadas.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong className="text-gray-900">
                Eso se traduce en miles de pesos al mes por técnico.
              </strong>{" "}
              Multiplica eso por tu equipo y verás el costo real del caos
              operativo.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Caso de Estudio Solinsa */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Caso de Estudio: Solinsa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la desorganización al crecimiento sostenible
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 md:p-12 shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  2 horas
                </div>
                <div className="text-gray-700">Ahorradas diarias por técnico</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  90%+
                </div>
                <div className="text-gray-700">
                  Evidencias capturadas correctamente
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  +25%
                </div>
                <div className="text-gray-700">Crecimiento anual sostenible</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Eficiencia Operativa
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Menos tiempo perdido buscando información, mejores evidencias
                  desde el campo, procesos estandarizados que todos siguen. El
                  equipo trabaja con claridad, no a base de urgencias.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Crecimiento Sostenible
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Operar con tranquilidad, crecer sin descontrolarse, escalar sin
                  depender de héroes. Con Insquid, el crecimiento viene del orden
                  y la visibilidad, no del caos y la improvisación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ¿Qué harías con 2 horas extra al día? */}
      <SectionWrapper className="bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Qué Harías con 2 Horas Extra al Día?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Imagina liberar esas horas que tus técnicos pierden en tareas no
            productivas. Ese tiempo se convierte en:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold mb-2">Más Ventas</h3>
              <p className="text-primary-100">
                Más servicios completados, más oportunidades de upsell, más
                clientes atendidos.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Más Control</h3>
              <p className="text-primary-100">
                Visibilidad total, menos urgencias, procesos claros que todos
                siguen.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-xl font-bold mb-2">Más Crecimiento</h3>
              <p className="text-primary-100">
                Aumentar ingresos sin contratar más gente, escalar sin
                descontrolarse.
              </p>
            </div>
          </div>
          <p className="text-lg text-primary-100">
            <strong>El freno no es tu capacidad, es el caos operativo.</strong>{" "}
            Insquid te regresa esas horas y las convierte en crecimiento.
          </p>
        </div>
      </SectionWrapper>

      {/* Beneficios Clave */}
      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios Clave de Insquid
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No son funcionalidades, son resultados de negocio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Acelera tu Facturación y Evita Servicios Sin Cobrar"
              description="Toda la información lista para facturar: evidencias completas, tiempos registrados, servicios documentados. No más servicios perdidos o facturación retrasada."
            />
            <FeatureCard
              title="Convierte tus Mantenimientos en un Plan Predecible y Rentable"
              description="De apagar fuegos a prevenir problemas. Programa mantenimientos preventivos, cumple con contratos y evita emergencias costosas."
            />
            <FeatureCard
              title="Haz que tu Equipo Trabaje con Claridad, no a Base de Urgencias"
              description="Tus técnicos saben qué hacer, cuándo y cómo. No más confusión, WhatsApps perdidos o información incompleta."
            />
            <FeatureCard
              title="Ten Evidencias Completas para Auditorías, Clientes y Certificaciones"
              description="Fotos, notas, firmas y documentación completa en un solo lugar. Nunca más buscar evidencias en WhatsApps o correos."
            />
            <FeatureCard
              title="Reduce Tiempos Muertos y Aumenta Servicios por Día"
              description="Optimiza rutas, elimina desplazamientos innecesarios y aumenta la productividad de tu equipo sin contratar más gente."
            />
            <FeatureCard
              title="Toma Decisiones con Datos Reales, no Suposiciones"
              description="Ve qué servicios son más rentables, qué técnicos son más productivos, qué clientes generan más valor. Datos para crecer inteligentemente."
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Para quién es Insquid */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Para Quién es Insquid
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Si tienes técnicos en campo y servicios recurrentes, Insquid es para
              ti
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Instalaciones Especializadas
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Paneles solares</li>
                <li>• CCTV y seguridad</li>
                <li>• Sistemas eléctricos</li>
                <li>• Sistemas contra incendio</li>
                <li>• Automatización</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Servicios Técnicos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• HVAC y climatización</li>
                <li>• Plomería</li>
                <li>• Mantenimiento industrial</li>
                <li>• Preventivo y correctivo</li>
                <li>• Reparaciones especializadas</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Operaciones Complejas
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Multiservicios</li>
                <li>• Mantenimiento integral</li>
                <li>• Operaciones con múltiples técnicos</li>
                <li>• Servicios recurrentes</li>
                <li>• Cualquier operación con campo</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Garantía 0 riesgo */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 md:p-12 text-white text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Garantía 0 Riesgo
            </h2>
            <p className="text-xl text-primary-100 mb-6 leading-relaxed">
              Implementación guiada sin costo. Si después de 30 días no ves valor,
              te devolvemos tu dinero. Sin preguntas.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Conoce nuestra garantía y precios
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="bg-gray-900 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tienes el Potencial de Crecer 2x, 5x o 10x
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            El freno no es tu capacidad ni tu equipo. El freno es el caos
            operativo. Insquid es el sistema que te regresa el control y hace que
            tu operación pueda crecer sin caos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">
              Agenda una demo
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Hablar con un especialista
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import AnimatedCard from "@/components/ui/AnimatedCard";
import BenefitsShowcase from "@/components/ui/BenefitsShowcase";
import { getWhatsAppLink } from "@/lib/whatsapp";
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
      <SectionWrapper className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-accent-50 to-primary-200"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-300/20 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-primary-600">Gestión de Servicios</span>{" "}
                  <span className="text-gray-900">en Campo</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                  con <AnimatedGradientText>IA⁺</AnimatedGradientText> para tu operación
                </p>
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Gestiona órdenes de servicio, asigna técnicos y automatiza procesos de
                servicios en campo con <AnimatedGradientText>IA⁺</AnimatedGradientText> en una sola plataforma. Elige el control
                que se adapta a donde está tu negocio hoy, y a donde va a crecer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CTAButton href={getWhatsAppLink()} variant="primary" className="bg-primary-600 hover:bg-primary-700 text-white border-none shadow-lg">
                  Agenda una demo
                </CTAButton>
              </div>
            </div>
            
            {/* Right Column - Video */}
            <div className="relative w-full rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '64.55089820359281%', height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/efcd379fdbbc4fe28db4125992db0eee"
                frameBorder="0"
                allowFullScreen
                allow="fullscreen"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Insquid - Gestión de Servicios en Campo con IA"
                loading="lazy"
              ></iframe>
            </div>
          </div>
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
                title: "No alcanza el tiempo",
                subtitle: "Tiempo perdido",
                content:
                  "Tus técnicos pierden horas buscando información, pasando datos por WhatsApp o corrigiendo errores. Ese tiempo no se recupera.",
              },
              {
                icon: "🔥",
                title: "Siempre están apagando fuegos",
                subtitle: "Reacción constante",
                content:
                  "Todo es urgente porque no hay plan. Los servicios preventivos se convierten en emergencias costosas que podrían haberse evitado.",
              },
              {
                icon: "📋",
                title: "Se olvidan pendientes y servicios",
                subtitle: "Falta de visibilidad",
                content:
                  "Sin un sistema centralizado, servicios se pierden, mantenimientos no se programan y clientes quedan sin atención.",
              },
              {
                icon: "📊",
                title: "Tienes excels y chats para todo",
                subtitle: "Información dispersa",
                content:
                  "La información está en múltiples lugares: Excel, WhatsApp, correos, carpetas. Buscar algo toma tiempo y a veces nunca se encuentra.",
              },
              {
                icon: "🚨",
                title: "Todo se hace de urgencia",
                subtitle: "Sin planificación",
                content:
                  "No hay procesos claros. Cada día es improvisar, resolver lo que surge y esperar que no se olvide nada importante.",
              },
              {
                icon: "💰",
                title: "No pueden cobrar a tiempo",
                subtitle: "Facturación retrasada",
                content:
                  "Faltan evidencias, información incompleta o servicios que nunca se facturan. El dinero se queda en el limbo.",
              },
            ].map((symptom, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{symptom.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {symptom.title}
                </h3>
                <p className="text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wide">
                  {symptom.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {symptom.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* El costo oculto del caos operativo */}
      <SectionWrapper className="bg-gray-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
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
            <AnimatedCard delay={0}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4 animate-bounce">💸</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pérdidas Inmediatas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Horas perdidas buscando evidencias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Servicios que no se hacen a tiempo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Más correctivos que preventivos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Tiempo en WhatsApps y correos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Retrabajos por información incompleta</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={200}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: "0.2s" }}>
                  📉
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Menos Ingresos
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Servicios no cobrados a tiempo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Ventas adicionales que nunca se cierran</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Margen menor por servicio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Oportunidades de upsell perdidas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Facturación retrasada</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={400}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4 animate-bounce" style={{ animationDelay: "0.4s" }}>
                  🚫
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Oportunidades Perdidas
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Clientes que se van por mal servicio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Empleados frustrados y rotación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Incapacidad de crecer con el mismo equipo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>No puedes escalar sin descontrolarse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Competencia que te gana clientes</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>

          {/* El Número Real - Redesigned Layout */}
          <AnimatedCard delay={600}>
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-400/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left: Text Content */}
                  <div>
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                      <span className="text-sm font-semibold">El Número Real</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                      Un Técnico Puede Perder Decenas de Horas al Mes
                    </h3>
                    <p className="text-lg text-primary-100 leading-relaxed mb-4">
                      Un técnico promedio pierde entre <strong className="text-white">2-3 horas diarias</strong> en tareas no
                      productivas: buscar evidencias en WhatsApp, pasar información por
                      correo, corregir errores, hacer reportes manuales, atender urgencias
                      mal coordinadas.
                    </p>
                    <p className="text-xl font-bold text-white">
                      Eso se traduce en miles de pesos al mes por técnico.
                    </p>
                    <p className="text-lg text-primary-100 mt-2">
                      Multiplica eso por tu equipo y verás el costo real del caos operativo.
                    </p>
                  </div>
                  
                  {/* Right: Visual Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                      <div className="text-4xl md:text-5xl font-bold mb-2">2-3</div>
                      <div className="text-sm text-primary-100">Horas perdidas diarias</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                      <div className="text-4xl md:text-5xl font-bold mb-2">60-90</div>
                      <div className="text-sm text-primary-100">Horas al mes</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 col-span-2">
                      <div className="text-3xl md:text-4xl font-bold mb-2">~$8,500</div>
                      <div className="text-sm text-primary-100">MXN perdidos por técnico</div>
                      <div className="text-xs text-primary-200 mt-1">(salario promedio en México)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios Clave de Insquid
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No son funcionalidades, son resultados de negocio
            </p>
          </div>
          <BenefitsShowcase
            benefits={[
              {
                title: "Acelera tu Facturación y Evita Servicios Sin Cobrar",
                description:
                  "Toda la información lista para facturar: evidencias completas, tiempos registrados, servicios documentados. No más servicios perdidos o facturación retrasada.",
                image: "/images/web_report.png",
                imageAlt: "Reportes y facturación en Insquid",
              },
              {
                title:
                  "Convierte tus Mantenimientos en un Plan Predecible y Rentable",
                description:
                  "De apagar fuegos a prevenir problemas. Programa mantenimientos preventivos, cumple con contratos y evita emergencias costosas.",
                image: "/images/web_calendar.png",
                imageAlt: "Calendario de mantenimientos preventivos",
              },
              {
                title:
                  "Haz que tu Equipo Trabaje con Claridad, no a Base de Urgencias",
                description:
                  "Tus técnicos saben qué hacer, cuándo y cómo. No más confusión, WhatsApps perdidos o información incompleta.",
                image: "/images/mobile_home.PNG",
                imageAlt: "App móvil para técnicos",
              },
              {
                title:
                  "Ten Evidencias Completas para Auditorías, Clientes y Certificaciones",
                description:
                  "Fotos, notas, firmas y documentación completa en un solo lugar. Nunca más buscar evidencias en WhatsApps o correos.",
                image: "/images/mobile_report_sign.PNG",
                imageAlt: "Evidencias y firmas digitales",
              },
              {
                title: "Reduce Tiempos Muertos y Aumenta Servicios por Día",
                description:
                  "Optimiza rutas, elimina desplazamientos innecesarios y aumenta la productividad de tu equipo sin contratar más gente.",
                image: "/images/web_stats.png",
                imageAlt: "Estadísticas y productividad",
              },
              {
                title: "Toma Decisiones con Datos Reales, no Suposiciones",
                description:
                  "Ve qué servicios son más rentables, qué técnicos son más productivos, qué clientes generan más valor. Datos para crecer inteligentemente.",
                image: "/images/web_stats2_dashboard.png",
                imageAlt: "Dashboard con datos y analytics",
              },
            ]}
          />
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
              Garantía &quot;0 Riesgo&quot;
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
            <CTAButton href={getWhatsAppLink()} variant="primary">
              Agenda una demo
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

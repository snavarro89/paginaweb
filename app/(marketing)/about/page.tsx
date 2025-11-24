import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";

export const metadata = generateSEOMetadata({
  title: "Acerca de Insquid - Eliminando el Caos Operativo",
  description:
    "Conoce la historia de Insquid: cómo nació para eliminar el caos operativo en empresas de mantenimiento y liberar su potencial de crecimiento. Del caos al control total.",
});

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acerca de Insquid
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nuestra misión es eliminar el caos operativo en empresas de mantenimiento
            y liberar su potencial de crecimiento.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Nuestra Historia
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Insquid nació de una observación simple pero poderosa: las empresas de
              mantenimiento y servicios en campo tienen un potencial enorme de
              crecimiento, pero están frenadas por el caos operativo.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Después de trabajar directamente con empresas de mantenimiento industrial
              en México y Latinoamérica, vimos el mismo patrón una y otra vez:
              técnicos perdiendo horas buscando información en WhatsApp, servicios que
              se olvidan, evidencias que se pierden, facturación retrasada, clientes
              frustrados. El problema no era la gente, era la falta de sistema.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Decidimos crear Insquid para cambiar eso. No queríamos solo otro
              software de gestión. Queríamos una plataforma que llevara a las empresas
              del caos operativo al control total: de Excel, WhatsApps y urgencias →
              a procesos claros, evidencias completas y crecimiento ordenado.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hoy, Insquid ayuda a empresas de mantenimiento a recuperar horas
              perdidas, eliminar servicios sin cobrar, y crecer sin descontrolarse.
              Nuestro objetivo es simple: liberar el potencial de crecimiento que
              está oculto detrás del caos operativo.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Misión, Visión y Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Misión
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Eliminar el caos operativo en empresas de mantenimiento y servicios
                en campo, liberando su potencial de crecimiento a través de
                tecnología simple y efectiva.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Visión
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ser la plataforma que transforma empresas de mantenimiento de
                operaciones caóticas a negocios escalables y rentables en
                Latinoamérica.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Valores
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Simplicidad sobre complejidad</li>
                <li>• Resultados de negocio, no solo features</li>
                <li>• Transparencia total</li>
                <li>• Compromiso con el éxito del cliente</li>
                <li>• Crecimiento sostenible, no a cualquier costo</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Nuestro Equipo
          </h2>
          <p className="text-gray-700 mb-8 text-center leading-relaxed">
            Un equipo comprometido con eliminar el caos operativo y liberar el
            potencial de crecimiento de nuestros clientes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Soporte
              </h3>
              <p className="text-gray-600">
                Equipo dedicado a asegurar que veas resultados rápidamente y
                elimines el caos operativo de tu empresa.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Producto
              </h3>
              <p className="text-gray-600">
                Desarrolladores y diseñadores enfocados en crear funcionalidades que
                eliminen el caos, no que lo compliquen.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Implementación
              </h3>
              <p className="text-gray-600">
                Especialistas que te guían paso a paso para que veas resultados
                rápidamente y elimines el caos desde el primer día.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Eliminar el Caos Operativo?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Agenda una llamada y hagamos los números de cuánto te está costando el
            caos. Te mostraremos cómo Insquid lo elimina.
          </p>
          <CTAButton href="/contact" variant="secondary">
            Agenda una llamada
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}

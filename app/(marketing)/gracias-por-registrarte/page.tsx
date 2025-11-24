import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";

export const metadata = generateSEOMetadata({
  title: "Gracias por Registrarte - Insquid",
  description:
    "Gracias por registrarte. Revisa tu correo, agenda una demo y prepara los datos de tu operación para el diagnóstico de caos operativo.",
});

export default function GraciasPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-primary-600"
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
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¡Gracias por Registrarte!
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Estamos emocionados de ayudarte a eliminar el caos operativo de tu
              empresa.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Próximos Pasos
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Revisa tu Correo
                  </h3>
                  <p>
                    Hemos enviado un correo de confirmación a tu dirección. Por
                    favor, revisa tu bandeja de entrada (y la carpeta de spam) y
                    haz clic en el enlace de verificación.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Agenda tu Sesión de Diagnóstico
                  </h3>
                  <p>
                    Nuestro equipo se pondrá en contacto contigo pronto para agendar
                    una sesión donde calcularemos el costo real del caos operativo en
                    tu empresa y te mostraremos cómo Insquid lo elimina.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Prepara los Datos de tu Operación
                  </h3>
                  <p>
                    Para hacer el diagnóstico más preciso, prepara información sobre
                    tu operación: número de técnicos, servicios mensuales, horas
                    perdidas buscando información, servicios sin cobrar, etc. Esto
                    nos ayudará a calcular el costo real del caos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <CTAButton href="/contact" variant="primary">
              Agendar Sesión Ahora
            </CTAButton>
            <CTAButton href="/features" variant="secondary">
              Ver Cómo Funciona
            </CTAButton>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              <strong>¿No recibiste el correo?</strong> Verifica tu carpeta de spam
              o contáctanos directamente.
            </p>
            <a
              href="mailto:soporte@insquid.com"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              soporte@insquid.com
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

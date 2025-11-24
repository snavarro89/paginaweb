import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata = generateSEOMetadata({
  title: "Términos y Condiciones - Insquid",
  description: "Términos y condiciones de uso de Insquid.",
});

export default function TermsConditionsPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al acceder y utilizar Insquid, usted acepta estar sujeto a estos Términos y Condiciones de Uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Insquid es una plataforma de software como servicio (SaaS) que proporciona herramientas de gestión de servicios en campo y activos. El servicio se proporciona según el plan seleccionado y está sujeto a las limitaciones y características descritas en cada plan.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cuentas de Usuario</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para utilizar Insquid, debe crear una cuenta proporcionando información precisa y completa. Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que ocurran bajo su cuenta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso Aceptable</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Usted se compromete a utilizar Insquid únicamente para fines legales y de acuerdo con estos términos. No debe:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Intentar acceder a áreas no autorizadas del servicio</li>
              <li>Interferir con el funcionamiento del servicio</li>
              <li>Utilizar el servicio para actividades ilegales o no autorizadas</li>
              <li>Compartir sus credenciales con terceros no autorizados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todos los derechos de propiedad intelectual sobre Insquid, incluyendo pero no limitado a software, diseño, textos, gráficos y logotipos, son propiedad de Insquid o sus licenciantes. Usted no adquiere ningún derecho de propiedad sobre el servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Datos del Usuario</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Usted conserva todos los derechos sobre los datos que ingrese en Insquid. Nos comprometemos a proteger la seguridad y privacidad de sus datos de acuerdo con nuestra Política de Privacidad. Usted es responsable de respaldar sus datos regularmente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Facturación y Pagos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los pagos se realizan según el plan seleccionado y la frecuencia acordada (mensual o anual). Los precios pueden cambiar con previo aviso. El incumplimiento en el pago puede resultar en la suspensión o terminación del servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Insquid se proporciona &quot;tal cual&quot; sin garantías de ningún tipo. No seremos responsables por daños indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de usar el servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modificaciones del Servicio</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento, con o sin previo aviso. Haremos esfuerzos razonables para notificar cambios significativos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Terminación</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cualquiera de las partes puede terminar el acuerdo en cualquier momento. Al terminar, su acceso al servicio será suspendido y puede solicitar una copia de sus datos según nuestras políticas de retención.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Ley Aplicable</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta en los tribunales competentes de Monterrey, Nuevo León, México.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Para preguntas sobre estos términos, puede contactarnos en{" "}
              <a href="mailto:legal@insquid.com" className="text-primary-600 hover:text-primary-700">
                legal@insquid.com
              </a>
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
}


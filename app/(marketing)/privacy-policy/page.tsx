import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata = generateSEOMetadata({
  title: "Política de Privacidad - Insquid",
  description: "Política de privacidad de Insquid.",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Política de Privacidad
          </h1>
          <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Insquid ("nosotros", "nuestro" o "la empresa") se compromete a proteger la privacidad de los usuarios de nuestro servicio. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información personal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Recopilamos diferentes tipos de información cuando utiliza Insquid:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Información de cuenta:</strong> nombre, correo electrónico, empresa, número de teléfono</li>
              <li><strong>Datos de uso:</strong> información sobre cómo utiliza el servicio, incluyendo acciones realizadas y características utilizadas</li>
              <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, sistema operativo, información del dispositivo</li>
              <li><strong>Datos de contenido:</strong> información que ingresa en la plataforma, incluyendo datos de clientes, activos y servicios</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Usamos su Información</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Proporcionar, mantener y mejorar nuestro servicio</li>
              <li>Procesar transacciones y enviar notificaciones relacionadas</li>
              <li>Enviar comunicaciones sobre el servicio, actualizaciones y soporte</li>
              <li>Detectar y prevenir fraudes o actividades no autorizadas</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir Información</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No vendemos su información personal. Podemos compartir información únicamente en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Con proveedores de servicios que nos ayudan a operar el servicio (bajo acuerdos de confidencialidad)</li>
              <li>Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
              <li>En caso de una fusión, adquisición o venta de activos (con notificación previa)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seguridad de los Datos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información, incluyendo encriptación, controles de acceso, respaldos regulares y monitoreo de seguridad. Sin embargo, ningún método de transmisión o almacenamiento es 100% seguro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Retención de Datos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conservamos su información mientras su cuenta esté activa o según sea necesario para proporcionar el servicio, cumplir con obligaciones legales o resolver disputas. Puede solicitar la eliminación de sus datos al cerrar su cuenta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Sus Derechos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Acceder a su información personal</li>
              <li>Corregir información inexacta</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
              <li>Exportar sus datos en formato estándar</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Para ejercer estos derechos, contáctenos en{" "}
              <a href="mailto:privacidad@insquid.com" className="text-primary-600 hover:text-primary-700">
                privacidad@insquid.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el uso del servicio y personalizar contenido. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Transferencias Internacionales</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sus datos pueden ser procesados y almacenados en servidores ubicados fuera de su país de residencia. Nos aseguramos de que estas transferencias cumplan con las leyes de protección de datos aplicables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Menores de Edad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Insquid no está dirigido a menores de 18 años. No recopilamos intencionalmente información de menores. Si descubrimos que hemos recopilado información de un menor, tomaremos medidas para eliminarla.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Cambios a esta Política</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos por correo electrónico o mediante un aviso en el servicio. La fecha de "Última actualización" indica cuándo se realizó la última modificación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Para preguntas sobre esta Política de Privacidad o sobre cómo manejamos su información, contáctenos en{" "}
              <a href="mailto:privacidad@insquid.com" className="text-primary-600 hover:text-primary-700">
                privacidad@insquid.com
              </a>
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
}


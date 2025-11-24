import { generateSEOMetadata } from "@/lib/seo";
import LPFormContent from "./LPFormContent";

export const metadata = generateSEOMetadata({
  title: "Diagnóstico de Caos Operativo - Insquid",
  description:
    "Calcula cuánto te está costando el caos operativo. Descubre el potencial de ahorro con Insquid. Diagnóstico gratuito.",
});

export default function LPFormPage() {
  return <LPFormContent />;
}
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    numeroTecnicos: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend implementation
    window.location.href = "/gracias-por-registrarte";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforma tu Operación de Servicios en Campo
          </h1>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Únete a empresas que ya están optimizando sus servicios con Insquid.
            Agenda una demo gratuita y descubre cómo aumentar tu productividad.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Beneficios Clave
              </h2>
              <div className="space-y-4">
                <FeatureCard
                  title="Control Total de Órdenes"
                  description="Gestiona todas tus órdenes de servicio desde un solo lugar con visibilidad en tiempo real."
                />
                <FeatureCard
                  title="Visibilidad de Activos"
                  description="Mantén un inventario completo de activos y programa mantenimientos preventivos automáticamente."
                />
                <FeatureCard
                  title="Mayor Productividad"
                  description="Optimiza rutas, reduce tiempos de desplazamiento y aumenta servicios completados por día."
                />
                <FeatureCard
                  title="Reportes y Análisis"
                  description="Toma decisiones informadas con reportes detallados y KPIs en tiempo real."
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Agenda tu Demo Gratuita
              </h2>
              <p className="text-gray-600 mb-6">
                Completa el formulario y nuestro equipo se pondrá en contacto
                contigo en menos de 24 horas.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="numeroTecnicos"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Número de Técnicos
                  </label>
                  <select
                    id="numeroTecnicos"
                    name="numeroTecnicos"
                    value={formData.numeroTecnicos}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="1-5">1-5 técnicos</option>
                    <option value="6-15">6-15 técnicos</option>
                    <option value="16-30">16-30 técnicos</option>
                    <option value="31-50">31-50 técnicos</option>
                    <option value="50+">Más de 50 técnicos</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Solicitar Demo Gratuita
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <a href="/privacy-policy" className="text-primary-600 hover:underline">
                    Política de Privacidad
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}


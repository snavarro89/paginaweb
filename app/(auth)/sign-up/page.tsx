import { generateSEOMetadata } from "@/lib/seo";
import SignUpForm from "./SignUpForm";

export const metadata = generateSEOMetadata({
  title: "Registrarse - Insquid",
  description: "Crea una cuenta en Insquid para comenzar a gestionar tus servicios en campo.",
});

export default function SignUpPage() {
  return <SignUpForm />;
}
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend implementation
    if (formData.contraseña !== formData.confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }
    window.location.href = "/gracias-por-registrarte";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Crear Cuenta
              </h1>
              <p className="text-gray-600">
                Comienza a optimizar tu operación hoy
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre Completo
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
                  Empresa
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
                  Correo Electrónico
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
                  htmlFor="contraseña"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="contraseña"
                  name="contraseña"
                  required
                  minLength={8}
                  value={formData.contraseña}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Mínimo 8 caracteres
                </p>
              </div>
              <div>
                <label
                  htmlFor="confirmarContraseña"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  id="confirmarContraseña"
                  name="confirmarContraseña"
                  required
                  value={formData.confirmarContraseña}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Crear Cuenta
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ¿Ya tienes una cuenta?{" "}
                <Link
                  href="/log-in"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Inicia sesión
                </Link>
              </p>
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center">
              Al registrarte, aceptas nuestros{" "}
              <Link href="/terms-conditions" className="text-primary-600 hover:underline">
                Términos y Condiciones
              </Link>{" "}
              y{" "}
              <Link href="/privacy-policy" className="text-primary-600 hover:underline">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}


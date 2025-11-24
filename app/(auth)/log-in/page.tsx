import { generateSEOMetadata } from "@/lib/seo";
import LoginForm from "./LoginForm";

export const metadata = generateSEOMetadata({
  title: "Iniciar Sesión - Insquid",
  description: "Inicia sesión en tu cuenta de Insquid.",
});

export default function LoginPage() {
  return <LoginForm />;
}
  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend implementation
    alert("Funcionalidad de inicio de sesión en desarrollo");
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
                Iniciar Sesión
              </h1>
              <p className="text-gray-600">
                Accede a tu cuenta de Insquid
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={formData.contraseña}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Recordarme
                  </label>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Iniciar Sesión
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ¿No tienes una cuenta?{" "}
                <Link
                  href="/sign-up"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Regístrate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}


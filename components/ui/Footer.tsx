import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Insquid Logo"
                width={120}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Software de gestión de servicios en campo y activos para empresas
              de mantenimiento industrial en México y Latinoamérica.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:ventas@insquid.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  ventas@insquid.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Teléfono:</span>{" "}
                <a
                  href="tel:+528112345678"
                  className="hover:text-primary-400 transition-colors"
                >
                  +52 81 1234 5678
                </a>
              </p>
              <p>
                <span className="font-semibold">Ubicación:</span> Monterrey,
                N.L., México
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-400 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-400 transition-colors"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-primary-400 transition-colors"
                >
                  Industrias
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-primary-400 transition-colors"
                >
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-primary-400 transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-conditions"
                  className="hover:text-primary-400 transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary-400 transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary-400 transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Insquid. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}


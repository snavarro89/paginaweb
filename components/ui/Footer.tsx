import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Insquid Logo"
                width={140}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm text-lg leading-relaxed">
              La plataforma inteligente para el control total de servicios en campo, mantenimiento y activos en México y LATAM.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <Zap className="w-5 h-5 text-primary-500 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">Impulsado por Agentes IA⁺</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight">Producto</h3>
            <ul className="space-y-4">
              <li><Link href="/product/service-management" className="hover:text-primary-400 transition-colors">Gestión de Servicios</Link></li>
              <li><Link href="/product/asset-management" className="hover:text-primary-400 transition-colors">Activos y Contratos</Link></li>
              <li><Link href="/product/inventory" className="hover:text-primary-400 transition-colors">Inventario</Link></li>
              <li><Link href="/product/reporting" className="hover:text-primary-400 transition-colors">Reportes y Analytics</Link></li>
              <li><Link href="/ai-agents" className="text-primary-400 font-bold hover:text-primary-300 transition-colors">Agentes IA⁺</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight">Industrias</h3>
            <ul className="space-y-4">
              <li><Link href="/industries/hvac" className="hover:text-primary-400 transition-colors">HVAC</Link></li>
              <li><Link href="/industries/sistemas-seguridad" className="hover:text-primary-400 transition-colors">Seguridad Electrónica</Link></li>
              <li><Link href="/industries/sistemas-contra-incendios" className="hover:text-primary-400 transition-colors">Contra Incendio</Link></li>
              <li><Link href="/industries/mantenimiento-industrial" className="hover:text-primary-400 transition-colors">Industrial</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-white transition-colors">Ver todas →</Link></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight">Compañía</h3>
            <ul className="space-y-4">
              <li><Link href="/pricing" className="hover:text-primary-400 transition-colors">Precios</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-primary-400 transition-colors">Términos</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacidad</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Insquid. Hecho en Monterrey, N.L.</p>
          <div className="flex space-x-6">
            <a href="mailto:ventas@insquid.com" className="hover:text-white transition-colors">ventas@insquid.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  Box, 
  Package, 
  Truck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRightLeft,
  Wrench,
  Zap
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Gestión de Inventario y Almacenes - Insquid",
  description: "Controla tu stock de refacciones, herramientas y materiales. Gestiona transferencias entre técnicos y almacenes en tiempo real.",
});

export default function InventoryPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Gestión de <span className="text-indigo-400">Inventario</span></h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                El control que necesitas sobre tus refacciones y herramientas. Evita paros por falta de material y mantén visibilidad total de lo que tus técnicos llevan en sus unidades.
              </p>
              <CTAButton href={getWhatsAppLink("Hola, quiero saber más sobre Inventario")} variant="primary" className="rounded-full px-8 py-4 text-lg bg-indigo-600 hover:bg-indigo-700 border-none">
                Probar ahora por WhatsApp
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Clusters */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Stock por Técnico y Almacén</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cada unidad de servicio es un almacén móvil. Conoce exactamente qué materiales tiene cada técnico y recibe alertas automáticas de reabastecimiento.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Inventarios múltiples (Almacén central, unidades, proyectos)",
                  "Alertas de stock mínimo y reorden",
                  "Escaneo de códigos de barras desde la app móvil",
                  "Consumo de materiales ligado a órdenes de servicio"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* 🔲 IMAGE: Inventory Stock View */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <Image 
                  src="/images/web_stats.png" 
                  alt="Gestión de stock" 
                  width={800} 
                  height={600} 
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
              {/* 🔲 IMAGE: Tool Tracking View */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2 text-center py-20 bg-gray-50">
                <div className="flex flex-col items-center justify-center">
                  <Wrench className="w-20 h-20 text-gray-300 mb-4" />
                  <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Visualizing Tool Tracking</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Control de Herramientas</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Asigna herramientas costosas a técnicos y mantén un registro de su estado y ubicación. Reduce pérdidas y asegura que el equipo reciba el mantenimiento adecuado.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Check-in / Check-out de herramientas",
                  "Programación de calibraciones y mantenimientos",
                  "Historial de uso por técnico",
                  "Reporte de daños o extravíos inmediato"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Optimización de Compras con IA⁺</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestro Agente de Inventario analiza la demanda histórica de refacciones para sugerir órdenes de compra optimizadas, evitando el exceso de stock o la falta de piezas críticas.
              </p>
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-indigo-600 fill-indigo-600" />
                  <span className="font-bold text-indigo-900 uppercase tracking-wider text-sm">IA⁺ de Suministros</span>
                </div>
                <p className="text-indigo-800 italic">"Se detecta un aumento del 40% en el uso de filtros tipo B en los últimos 15 días. Sugerimos adelantar la orden de compra programada para finales de mes."</p>
              </div>
            </div>
            <div className="relative">
              {/* 🔲 IMAGE: AI Inventory Suggestions View */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <Image 
                  src="/images/web_stats2_dashboard.png" 
                  alt="IA en Inventario" 
                  width={800} 
                  height={600} 
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Toma el control de tus materiales</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo de Inventario")} variant="primary" className="rounded-full px-10 py-5 text-xl bg-indigo-600 hover:bg-indigo-700 border-none">
            Hablar con un Experto
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


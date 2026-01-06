import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  CheckCircle2, 
  FileSearch, 
  Download,
  MousePointer2,
  Zap
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Reportes y Analytics - Insquid",
  description: "Visualiza el rendimiento de tu operación con dashboards en tiempo real. Crea reportes personalizados y toma decisiones basadas en datos.",
});

export default function ReportingPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Reportes y <span className="text-emerald-400">Analytics</span></h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                De la recolección de datos a la inteligencia de negocio. Entiende qué está pasando en tu operación en tiempo real y toma decisiones que impulsen tu rentabilidad.
              </p>
              <CTAButton href={getWhatsAppLink("Hola, quiero saber más sobre Reportes")} variant="primary" className="rounded-full px-8 py-4 text-lg bg-emerald-600 hover:bg-emerald-700 border-none">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Dashboards en Tiempo Real</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Visualiza tus KPIs críticos en un solo lugar. Desde la productividad de tus técnicos hasta la rentabilidad por cliente, todo actualizado al segundo.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Productividad de técnicos y cuadrillas",
                  "Status de órdenes de servicio en vivo",
                  "Cumplimiento de mantenimientos preventivos",
                  "Análisis de causas de falla recurrentes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* 🔲 IMAGE: Main Analytics Dashboard View */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <Image 
                  src="/images/web_stats2_dashboard.png" 
                  alt="Dashboard de analytics" 
                  width={800} 
                  height={600} 
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
              {/* 🔲 IMAGE: Custom Report Designer Interface */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <Image 
                  src="/images/web_report.png" 
                  alt="Diseñador de reportes" 
                  width={800} 
                  height={600} 
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Diseñador de Reportes</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                No te adaptes a reportes predefinidos. Nuestra interfaz "drag-and-drop" te permite crear exactamente los documentos que tus clientes y auditores necesitan.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Personalización con tu marca y logos",
                  "Inclusión dinámica de fotos y firmas",
                  "Exportación masiva a PDF y Excel",
                  "Envío automático por correo al finalizar"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Análisis Predictivo con IA⁺</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestro Agente de Reportes procesa miles de servicios para entregarte resúmenes ejecutivos y detectar tendencias que el ojo humano podría pasar por alto.
              </p>
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-emerald-600 fill-emerald-600" />
                  <span className="font-bold text-emerald-900 uppercase tracking-wider text-sm">Resumen Ejecutivo IA⁺</span>
                </div>
                <p className="text-emerald-800 italic">"Este mes, el margen promedio por servicio aumentó un 12%. El factor principal fue la optimización de rutas en la zona norte, reduciendo tiempos de traslado en un 25%."</p>
              </div>
            </div>
            <div className="relative">
              {/* 🔲 IMAGE: AI Business Insight View */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2 text-center py-20 bg-gray-50">
                <div className="flex flex-col items-center justify-center">
                  <BarChart3 className="w-20 h-20 text-gray-300 mb-4" />
                  <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">AI Business Insights Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Convierte tus datos en crecimiento</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo de Reportes y Analytics")} variant="primary" className="rounded-full px-10 py-5 text-xl bg-emerald-600 hover:bg-emerald-700 border-none">
            Ver Demo de Analytics
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  Shield, 
  History, 
  ClipboardCheck, 
  AlertTriangle, 
  CheckCircle2, 
  CalendarClock,
  FileText,
  Zap
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Gestión de Activos y Contratos - Insquid",
  description: "Controla el ciclo de vida de tus equipos, mantén historiales precisos y gestiona contratos de mantenimiento con facilidad.",
});

export default function AssetManagementPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-accent-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-500 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Gestión de <span className="text-accent-400">Activos y Contratos</span></h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                El corazón de tu operación industrial. Mantén un registro impecable de cada equipo, su historial de mantenimiento y los contratos que los protegen.
              </p>
              <CTAButton href={getWhatsAppLink("Hola, quiero saber más sobre Gestión de Activos")} variant="primary" className="rounded-full px-8 py-4 text-lg bg-accent-600 hover:bg-accent-700 border-none">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Historial Clínico de Equipos</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cada activo tiene una "hoja de vida" completa. Desde la instalación hasta el último mantenimiento correctivo, toda la información está centralizada.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Código QR por equipo para acceso rápido",
                  "Fotos históricas de cada intervención",
                  "Registro de partes reemplazadas",
                  "Documentación técnica y manuales adjuntos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-600" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* 🔲 IMAGE: Web Asset Detail View */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <Image 
                  src="/images/web_customer.png" 
                  alt="Detalle de activo en Insquid" 
                  width={800} 
                  height={600} 
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
              {/* 🔲 IMAGE: Contract/SLA Dashboard */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <Image 
                  src="/images/web_stats.png" 
                  alt="Gestión de contratos" 
                  width={800} 
                  height={600} 
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Gestión de Contratos y SLAs</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                No pierdas ni un solo mantenimiento preventivo. Insquid gestiona tus contratos recurrentes y te alerta cuando se acercan los tiempos de respuesta pactados (SLAs).
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Alertas de vencimiento de contratos",
                  "Cumplimiento automático de mantenimientos",
                  "Medición de tiempos de respuesta por cliente",
                  "Rentabilidad por contrato en tiempo real"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Mantenimiento Predictivo con IA⁺</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestro Agente de Activos analiza los patrones de falla y el historial de mantenimiento para predecir cuándo un equipo requerirá atención antes de que falle.
              </p>
              <div className="bg-accent-50 p-6 rounded-2xl border border-accent-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-accent-600 fill-accent-600" />
                  <span className="font-bold text-accent-900 uppercase tracking-wider text-sm">Insights de Activos</span>
                </div>
                <p className="text-accent-800 italic">"El compresor #042 ha presentado 3 fallas menores en los últimos 60 días. Se recomienda una revisión profunda para evitar un paro total el próximo mes."</p>
              </div>
            </div>
            <div className="relative">
              {/* 🔲 IMAGE: AI Asset Insights View */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <Image 
                  src="/images/web_stats2_dashboard.png" 
                  alt="IA en Activos" 
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
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Empieza a cuidar tus activos hoy</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo de Gestión de Activos")} variant="primary" className="rounded-full px-10 py-5 text-xl bg-accent-600 hover:bg-accent-700 border-none">
            Hablar con un Experto
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


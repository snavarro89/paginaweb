import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  Rocket, 
  Calendar, 
  CheckCircle2, 
  ClipboardCheck, 
  UserCheck, 
  Clock, 
  LayoutKanban,
  Zap
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Gestión de Servicios en Campo - Insquid",
  description: "Optimiza tus órdenes de servicio, técnicos y programación con la plataforma líder en Field Service Management.",
});

export default function ServiceManagementPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-primary-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Gestión de <span className="text-primary-400">Servicios en Campo</span></h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Toma el control total de tus órdenes de servicio, desde la programación automática hasta la firma del cliente. Elimina el papel y los errores manuales.
              </p>
              <CTAButton href={getWhatsAppLink("Hola, quiero saber más sobre la Gestión de Servicios")} variant="primary" className="rounded-full px-8 py-4 text-lg">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Programación Inteligente</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Asigna el técnico adecuado, en el momento justo. Nuestro calendario inteligente considera la ubicación, disponibilidad y habilidades de tu equipo.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Vista de Calendario y Kanban",
                  "Programación automática de preventivos",
                  "Asignación por geolocalización",
                  "Notificaciones push a técnicos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* 🔲 IMAGE: Web Calendar/Scheduler View */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <Image 
                  src="/images/web_calendar.png" 
                  alt="Calendario de Insquid" 
                  width={800} 
                  height={600} 
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
              {/* 🔲 IMAGE: Mobile App Order View */}
              <div className="max-w-sm mx-auto rounded-[3rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl bg-white aspect-[9/19]">
                <Image 
                  src="/images/mobile_visit_detail.PNG" 
                  alt="App móvil técnico" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ejecución en Campo (Mobile First)</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Tus técnicos tienen todo lo que necesitan en la palma de su mano. Sin conexión, con checklists dinámicos y captura de evidencias.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Checklists personalizados por servicio",
                  "Captura de fotos y videos ilimitados",
                  "Firma electrónica del cliente",
                  "Modo offline para zonas sin señal"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent-600" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Validación con IA⁺</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestro Agente IA⁺ revisa automáticamente los reportes generados por tus técnicos para asegurar que toda la información crítica esté presente y sea coherente.
              </p>
              <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-primary-600 fill-primary-600" />
                  <span className="font-bold text-primary-900 uppercase tracking-wider text-sm">IA⁺ en Acción</span>
                </div>
                <p className="text-primary-800 italic">"El Agente IA detectó que falta la foto del número de serie en el checklist de mantenimiento preventivo. Notificando al técnico..."</p>
              </div>
            </div>
            <div className="relative">
              {/* 🔲 IMAGE: Web Report Quality Check */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-2">
                <Image 
                  src="/images/web_report.png" 
                  alt="Validación de reportes" 
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
          <h2 className="text-3xl md:text-5xl font-bold mb-8">¿Listo para digitalizar tu operación?</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo de Gestión de Servicios")} variant="primary" className="rounded-full px-10 py-5 text-xl">
            Agendar Demo por WhatsApp
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


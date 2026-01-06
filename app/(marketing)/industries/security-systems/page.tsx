import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Video, 
  Lock, 
  Zap, 
  ArrowRight,
  MonitorDot,
  Smartphone
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Software para Seguridad Electrónica y CCTV - Insquid",
  description: "Gestiona instalaciones y mantenimientos de cámaras, alarmas y control de acceso. Evidencias digitales y firmas para cada servicio.",
});

export default function SecuritySystemsPage() {
  const points = [
    "Registro fotográfico de cada ángulo de cámara",
    "Checklists de validación de DVR/NVR y fuentes",
    "Gestión de mantenimientos preventivos a cercos eléctricos",
    "Historial de reparaciones por cliente y ubicación"
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-bold text-blue-400 uppercase tracking-widest">Seguridad Electrónica</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Operaciones de <span className="text-blue-400">Seguridad</span> Bajo Control</h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Desde la instalación inicial hasta el mantenimiento recurrente. Insquid es la plataforma para empresas de CCTV, alarmas y control de acceso.
            </p>
            <CTAButton href={getWhatsAppLink("Hola, me interesa Insquid para mi empresa de Seguridad Electrónica")} variant="primary" className="rounded-full px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 border-none">
              Demo para Seguridad por WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Evidencia digital de cada instalación</h2>
            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                  <p className="text-lg font-medium text-blue-900">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                <Image src="/images/mobile_report_sign.PNG" alt="App Seguridad" width={800} height={1200} className="object-cover" />
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* More info */}
      <SectionWrapper className="bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <Video className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Mantenimiento a CCTV</h3>
                <p className="text-gray-600">Asegura que cada lente esté limpio y cada grabación funcionando con checklists obligatorios.</p>
             </div>
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <Lock className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Control de Acceso</h3>
                <p className="text-gray-600">Gestión de electroimanes, lectoras y terminales biométricas con historial completo.</p>
             </div>
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <Smartphone className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">App para Técnicos</h3>
                <p className="text-gray-600">Tus técnicos reportan fallas y terminan instalaciones en segundos, con firma del cliente.</p>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Profesionaliza tu servicio técnico</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo para mi empresa de Seguridad")} className="rounded-full px-10 py-5 text-xl bg-blue-600 hover:bg-blue-700 border-none">
            Hablar con un Experto
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


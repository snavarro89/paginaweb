import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  CheckCircle2, 
  ShieldAlert, 
  Flame, 
  ClipboardCheck, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  FileText
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Software para Sistemas Contra Incendio - Insquid",
  description: "Cumple con las normas de seguridad (NFPA, NOM) sin errores manuales. Gestión de extintores, detectores, hidrantes y más.",
});

export default function FireSafetyPage() {
  const compliance = [
    "Cumplimiento 100% con normativas locales e internacionales",
    "Inventario detallado de extintores (fechas de recarga, presión)",
    "Pruebas de sistemas de bombeo e hidrantes con evidencias",
    "Generación de reportes de cumplimiento para autoridades"
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-red-900 text-white py-24 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600 to-black"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 px-3 py-1 rounded-full mb-6">
              <Flame className="w-4 h-4 text-red-400" />
              <span className="text-sm font-bold text-red-400 uppercase">Sistemas Contra Incendio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-balance">Seguridad que <span className="text-red-400">Salva Vidas</span> y Evita Multas</h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              No dejes el cumplimiento de seguridad al azar. Insquid garantiza que cada inspección se realice bajo norma y con evidencias inalterables.
            </p>
            <CTAButton href={getWhatsAppLink("Hola, me interesa Insquid para Sistemas Contra Incendio")} variant="primary" className="rounded-full px-8 py-4 text-lg bg-red-600 hover:bg-red-700 border-none shadow-xl shadow-red-500/20">
              Demo por WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Focus Area */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Cero errores en inspecciones críticas</h2>
            <div className="space-y-6">
              {compliance.map((point, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-red-600 shrink-0" />
                  <p className="text-lg font-medium text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="rounded-[2.5rem] bg-gray-900 p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center space-x-4 mb-8">
                   <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white">
                      <Zap className="w-6 h-6 fill-white" />
                   </div>
                   <div className="text-white font-bold">Validación IA⁺ de Extintores</div>
                </div>
                <div className="space-y-4">
                   <div className="h-4 bg-gray-800 rounded-full w-full"></div>
                   <div className="h-4 bg-gray-800 rounded-full w-3/4"></div>
                   <div className="h-32 bg-red-900/20 rounded-2xl border border-red-500/30 flex items-center justify-center">
                      <p className="text-red-400 text-sm font-mono tracking-tighter">"Escaneando QR y foto de presión... validado."</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Key Benefits */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Digitaliza tu cumplimiento</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Gestión de Extintores", desc: "Mapeo completo de ubicación, fecha de recarga y tipo de agente extintor por cliente.", icon: ShieldAlert },
              { title: "Checklists Normativos", desc: "Formularios diseñados bajo estándares NFPA y NOM para inspecciones de hidrantes y alarmas.", icon: ClipboardCheck },
              { title: "Historial por Activo", desc: "Accede al historial de mantenimiento de cada detector de humo o válvula en segundos.", icon: FileText }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 mb-6">
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="bg-red-600 py-24 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Protege a tus clientes con inteligencia</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo para Sistemas Contra Incendio")} className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-10 py-5 text-xl font-black">
            Solicitar Demo Gratuita
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


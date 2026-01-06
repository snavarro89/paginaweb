import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  CheckCircle2, 
  AlertTriangle, 
  Thermometer, 
  Clock, 
  Zap, 
  ArrowRight,
  TrendingUp,
  Snowflake
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Software para HVAC y Climatización - Insquid",
  description: "Optimiza tu operación de HVAC. Gestiona mantenimientos preventivos, correctivos y emergencias con Agentes IA⁺.",
});

export default function HVACIndustryPage() {
  const painPoints = [
    "Falta de seguimiento a mantenimientos preventivos",
    "Urgencias mal coordinadas y técnicos sin información",
    "Pérdida de historial de reparaciones por equipo",
    "Dificultad para documentar evidencias y firmas"
  ];

  const kpis = [
    { label: "Productividad", value: "+35%" },
    { label: "Correctivos", value: "-20%" },
    { label: "Tiempo de Reporte", value: "Real-time" }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-primary-900 text-white py-24 relative">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/web_calendar.png" alt="HVAC Background" fill className="object-cover blur-sm" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 px-3 py-1 rounded-full mb-6">
              <Snowflake className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-bold text-primary-400 uppercase">Solución para HVAC</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Mantenimiento de <span className="text-primary-400">Climatización</span> sin Caos</h1>
            <p className="text-xl text-gray-300 mb-10">
              Controla cada unidad condensadora, manejadora y chiller. Insquid es la plataforma que los técnicos de HVAC aman y los gerentes necesitan.
            </p>
            <CTAButton href={getWhatsAppLink("Hola, me interesa Insquid para mi empresa de HVAC")} variant="primary" className="rounded-full px-8 py-4 text-lg">
              Demo para HVAC por WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">¿El caos operativo frena tu crecimiento?</h2>
            <div className="space-y-6">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-red-50 rounded-2xl border border-red-100">
                  <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                  <p className="text-lg font-medium text-red-900">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative shadow-2xl">
                <Image src="/images/mobile_visit_detail.PNG" alt="App HVAC" fill className="object-cover" />
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Workflow */}
      <SectionWrapper className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Tu flujo ideal con Insquid</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Programación", desc: "Sube tu base de equipos y deja que la IA⁺ programe los preventivos del año según el contrato." },
              { title: "Ejecución", desc: "Técnicos llenan checklists de presión, amperaje y limpieza desde la app con fotos obligatorias." },
              { title: "Entrega", desc: "Reporte automático PDF enviado al cliente al terminar, validado por nuestro Agente IA⁺." }
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="text-6xl font-black text-white/5 absolute -top-4 -right-4">{i+1}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary-400">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* KPIs */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6">Resultados medibles para tu operación</h2>
              <p className="text-xl text-primary-100">Implementar Insquid no es solo digitalizar, es mejorar tus indicadores clave de negocio desde el primer mes.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {kpis.map((kpi, i) => (
                <div key={i}>
                  <div className="text-5xl font-black mb-2">{kpi.value}</div>
                  <div className="text-primary-100 font-medium uppercase tracking-widest text-sm">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Empieza a trabajar con orden</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo para mi empresa de HVAC")} className="rounded-full px-10 py-5 text-xl">
            Hablar con un Experto en HVAC
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

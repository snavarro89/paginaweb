import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  CheckCircle2, 
  Factory, 
  Settings2, 
  Wrench, 
  Zap, 
  ArrowRight,
  ClipboardCheck,
  AlertOctagon
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Software de Mantenimiento para Manufactura e Industria - Insquid",
  description: "Elimina paros de línea no programados. Gestiona el mantenimiento industrial con Agentes IA⁺ y mantén tu planta produciendo.",
});

export default function ManufacturingPage() {
  const points = [
    { title: "Paros de Línea", desc: "Reduce el tiempo de inactividad mediante mantenimiento preventivo riguroso." },
    { title: "Gestión de Repuestos", desc: "Stock crítico de piezas para evitar retrasos en reparaciones urgentes." },
    { title: "Seguridad Industrial", desc: "Checklists de seguridad y cumplimiento de normativas LOTO y más." }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-slate-900 via-transparent to-primary-600/20"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
              <Factory className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-bold text-primary-400 uppercase tracking-widest">Manufactura e Industria</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Cero Paros de Línea <span className="text-primary-400">No Programados</span></h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              La plataforma de gestión de mantenimiento industrial (CMMS) que conecta a tus operadores, técnicos y gerentes de planta en un solo lugar.
            </p>
            <CTAButton href={getWhatsAppLink("Hola, me interesa Insquid para mi planta de manufactura")} variant="primary" className="rounded-full px-8 py-4 text-lg">
              Demo Industrial por WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Industrial Features */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {points.map((p, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  {i === 0 ? <AlertOctagon className="w-8 h-8" /> : i === 1 ? <Settings2 className="w-8 h-8" /> : <ClipboardCheck className="w-8 h-8" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{p.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Interactive Section */}
      <SectionWrapper className="bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Estandarización de Procesos</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Crea checklists dinámicos para cada máquina. Asegura que cada preventivo se realice bajo los estándares de calidad requeridos por ISO y otras certificaciones.
            </p>
            <div className="space-y-4">
              {[
                "Registro de horas máquina automáticos",
                "Integración con sensores IoT (opcional)",
                "Asignación de cuadrillas especializadas",
                "Control de herramientas y materiales por orden"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-lg font-medium text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-primary-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             {/* 🔲 IMAGE: Industrial Plant Asset Map */}
             <div className="bg-white rounded-[3rem] p-4 shadow-2xl border border-gray-100">
                <Image src="/images/web_stats.png" alt="Industrial Dashboard" width={800} height={600} className="rounded-[2.5rem]" />
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Optimiza tu planta con Insquid</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo para el sector manufactura")} className="rounded-full px-10 py-5 text-xl">
            Hablar con un Consultor Industrial
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  CheckCircle2, 
  Zap, 
  Sun, 
  Battery, 
  LineChart, 
  ArrowRight,
  Settings,
  ShieldAlert
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Software para Energías Renovables y Solar - Insquid",
  description: "Gestiona plantas solares, subestaciones y parques eólicos. Optimiza el mantenimiento de activos críticos y maximiza la generación.",
});

export default function EnergyPage() {
  const features = [
    { title: "Geolocalización de Activos", desc: "Ubica cada panel, inversor o aerogenerador en un mapa preciso por proyecto." },
    { title: "Mantenimiento Preventivo", desc: "Programación basada en horas de uso o fechas para asegurar máxima eficiencia." },
    { title: "Reportes de Generación", desc: "Integra datos de generación con registros de mantenimiento para hallar correlaciones." }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-accent-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-accent-500/20 border border-accent-500/30 px-3 py-1 rounded-full mb-6">
              <Sun className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-bold text-accent-400 uppercase tracking-widest">Energía y Renovables</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Maximiza tu <span className="text-accent-400">Generación Energética</span></h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              La plataforma para gestionar el mantenimiento de activos críticos en el sector energético. De paneles solares a subestaciones de alta tensión.
            </p>
            <CTAButton href={getWhatsAppLink("Hola, me interesa Insquid para el sector energía")} variant="primary" className="rounded-full px-8 py-4 text-lg bg-accent-600 hover:bg-accent-700 border-none">
              Demo Sector Energía
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Control total sobre activos remotos</h2>
            <p className="text-xl text-gray-600">Insquid elimina la distancia entre tu oficina y tus técnicos en campo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-accent-50 flex items-center justify-center text-accent-600 mb-8">
                  <Settings className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* IA Section */}
      <SectionWrapper className="bg-gray-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             {/* 🔲 IMAGE: Solar Farm Monitoring UI */}
             <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
                <Image src="/images/web_stats2_dashboard.png" alt="Energy Dashboard" width={800} height={600} className="opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
             </div>
          </div>
          <div className="text-white">
            <div className="flex items-center space-x-3 text-accent-400 font-bold uppercase text-sm tracking-widest mb-6">
              <Zap className="w-5 h-5 fill-accent-400" />
              <span>Predicción IA⁺</span>
            </div>
            <h2 className="text-4xl font-bold mb-8">Detección de Degradación de Activos</h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Nuestro Agente IA⁺ analiza las tendencias de fallas recurrentes para alertar sobre degradación prematura de inversores o paneles, permitiendo reclamos de garantía fundamentados.
            </p>
            <Link href="/ai-agents" className="flex items-center space-x-2 text-accent-400 font-bold hover:text-accent-300 transition-colors group">
              <span>Ver más sobre Agentes IA⁺</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Energía más eficiente con Insquid</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo para el sector energía")} className="rounded-full px-10 py-5 text-xl bg-accent-600 hover:bg-accent-700 border-none">
            Hablar con un Consultor
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  CheckCircle2, 
  ArrowUpCircle, 
  Clock, 
  ClipboardCheck, 
  Zap, 
  ShieldCheck,
  LayoutDashboard,
  Timer
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Software para Mantenimiento de Elevadores y Escaleras Eléctricas - Insquid",
  description: "Optimiza las rutas de tus técnicos, reduce tiempos muertos y garantiza la seguridad de cada elevador con Agentes IA⁺.",
});

export default function ElevatorsPage() {
  const benefits = [
    "Programación automática de visitas mensuales obligatorias",
    "Registro preciso de marcas, modelos y número de paradas por unidad",
    "Gestión de fallas y tiempos de respuesta (SLA) críticos",
    "App móvil con checklists específicos para cada tipo de equipo"
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full mb-6 text-primary-400 font-bold uppercase text-xs tracking-widest">
                <ArrowUpCircle className="w-4 h-4" />
                <span>Elevadores y Movilidad</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">Operaciones que <span className="text-primary-400">Nunca se Detienen</span></h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Reduce las llamadas de emergencia en un 40% mediante un mantenimiento preventivo riguroso y una gestión de técnicos optimizada.
              </p>
              <CTAButton href={getWhatsAppLink("Hola, me interesa Insquid para mi empresa de elevadores")} variant="primary" className="rounded-full px-8 py-4 text-lg">
                Demo para Elevadores por WhatsApp
              </CTAButton>
            </div>
            <div className="relative">
              {/* 🔲 IMAGE: Elevator Dashboard / Mobile Interface */}
              <div className="bg-white/5 rounded-[3rem] p-4 border border-white/10 backdrop-blur-sm">
                <div className="aspect-[4/5] bg-gray-800 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                   <Image src="/images/mobile_home.PNG" alt="App Elevadores" fill className="object-cover opacity-60" />
                   <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center space-x-2 text-primary-400 mb-2">
                         <Timer className="w-5 h-5" />
                         <span className="font-bold">Urgencia Detectada</span>
                      </div>
                      <p className="text-white text-lg font-bold">Falla en Elevador Principal - Torre Norte</p>
                      <p className="text-gray-400 text-sm">Técnico más cercano: Juan Pérez (5 min)</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Insquid */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Diseñado para movilidad vertical</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Insquid entiende las complejidades del sector de elevadores, desde el cumplimiento normativo hasta la gestión de piezas críticas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start space-x-4 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-50 p-2 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-lg font-semibold text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* KPIs Section */}
      <SectionWrapper className="bg-primary-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Resultados Reales en Elevadores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-black text-primary-600 mb-4">98%</div>
              <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Disponibilidad de Unidades</p>
            </div>
            <div>
              <div className="text-6xl font-black text-primary-600 mb-4">-45%</div>
              <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Tiempo de Respuesta</p>
            </div>
            <div>
              <div className="text-6xl font-black text-primary-600 mb-4">+30%</div>
              <p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Margen por Contrato</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Eleva el nivel de tu servicio</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo para mi empresa de elevadores")} className="rounded-full px-10 py-5 text-xl">
            Hablar con un Experto
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


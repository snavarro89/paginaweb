import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  Zap, 
  UserCheck, 
  Search, 
  Settings, 
  MessageSquare, 
  ArrowRight,
  BrainCircuit,
  Microscope,
  FileBarChart
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Agentes IA⁺ - El futuro del Field Service - Insquid",
  description: "Conoce a tus nuevos empleados digitales. Agentes de IA entrenados para asistir a tus técnicos, implementar procesos y analizar tu negocio.",
});

export default function AIAgentsPage() {
  const agents = [
    {
      id: "technical",
      title: "Agente Técnico",
      role: "Asistente en Campo 24/7",
      icon: Microscope,
      desc: "Entrenado con manuales técnicos y bases de conocimiento industrial para guiar a tus técnicos en reparaciones complejas.",
      features: [
        "Diagnóstico guiado por voz o texto",
        "Resumen de manuales técnicos al instante",
        "Sugerencias de reparación basadas en historial",
        "Reconocimiento de piezas por fotografía"
      ],
      color: "from-blue-600 to-blue-400"
    },
    {
      id: "implementation",
      title: "Agente de Implementación",
      role: "Arquitecto de Procesos",
      icon: Settings,
      desc: "Digitaliza tu operación en días, no meses. Este agente carga tus datos y diseña tus checklists automáticamente.",
      features: [
        "Carga masiva inteligente de activos",
        "Creación automática de checklists dinámicos",
        "Mapeo de rutas y zonas de servicio",
        "Onboarding guiado para técnicos y admin"
      ],
      color: "from-primary-600 to-primary-400"
    },
    {
      id: "report",
      title: "Agente de Reportes",
      role: "Analista de Negocios",
      icon: FileBarChart,
      desc: "Transforma miles de datos operativos en decisiones estratégicas. Detecta fugas de dinero y oportunidades de mejora.",
      features: [
        "Generación de resúmenes ejecutivos",
        "Detección de anomalías en servicios",
        "Predicción de demanda de refacciones",
        "Benchmarking de productividad de técnicos"
      ],
      color: "from-accent-600 to-accent-400"
    }
  ];

  return (
    <div className="pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 px-4 py-1.5 rounded-full mb-8">
              <Zap className="w-5 h-5 text-primary-400 fill-primary-400" />
              <span className="text-sm font-bold text-primary-400 uppercase tracking-widest">Tecnología IA⁺ de Siguiente Generación</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Tu Equipo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Agentes Digitales</span></h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              No es solo "inteligencia artificial". Son herramientas entrenadas específicamente para el sector industrial que trabajan junto a tu equipo humano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href={getWhatsAppLink("Hola, quiero conocer más sobre los Agentes IA de Insquid")} variant="primary" className="rounded-full px-10 py-5 text-xl">
                Agendar Demo de IA⁺
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Deep Dive */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto space-y-32">
          {agents.map((agent, i) => (
            <div key={agent.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center text-white mb-8 shadow-lg`}>
                  <agent.icon className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{agent.title}</h2>
                <div className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-6">{agent.role}</div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {agent.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {agent.features.map((f, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                      <span className="font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <CTAButton href={getWhatsAppLink(`Hola, me interesa el ${agent.title}`)} className="text-primary-600 font-bold flex items-center space-x-2 group p-0 bg-transparent hover:bg-transparent border-none">
                  <span>Ver escenario de uso</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </CTAButton>
              </div>
              <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''} relative`}>
                {/* 🔲 IMAGE: AI Agent Interaction UI Mockup */}
                <div className="bg-gray-100 rounded-[2.5rem] p-4 shadow-inner border border-gray-200">
                   <div className="aspect-[4/3] bg-white rounded-[2rem] shadow-2xl relative overflow-hidden group">
                      <Image 
                        src="/images/web_stats2_dashboard.png" 
                        alt={agent.title} 
                        fill 
                        className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                         <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs transform group-hover:scale-110 transition-transform">
                            <div className="flex items-center space-x-3 mb-3">
                               <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${agent.color} flex items-center justify-center text-white`}>
                                  <Zap className="w-5 h-5 fill-white" />
                               </div>
                               <span className="font-bold text-gray-900">{agent.title}</span>
                            </div>
                            <p className="text-sm text-gray-600 italic">"Analizando datos de la orden #842... Se recomienda revisar la presión del refrigerante."</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* How it works Diagram (Conceptual) */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16">¿Cómo se integran en tu flujo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
            {/* Arrows for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-[30%] -translate-y-1/2 z-0 opacity-20">
               <ArrowRight className="w-20 h-20 text-primary-600" />
            </div>
            <div className="hidden md:block absolute top-1/2 right-[30%] -translate-y-1/2 z-0 opacity-20">
               <ArrowRight className="w-20 h-20 text-primary-600" />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative z-10">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-6 mx-auto">1</div>
              <h4 className="font-bold text-gray-900 mb-2">Input de Datos</h4>
              <p className="text-sm text-gray-500">Técnicos, sensores y documentos alimentan el sistema.</p>
            </div>
            <div className="bg-primary-600 p-10 rounded-[3rem] shadow-xl shadow-primary-500/20 relative z-10 text-white transform scale-110">
              <BrainCircuit className="w-16 h-16 mx-auto mb-6" />
              <h4 className="font-bold text-xl mb-2">Motor IA⁺</h4>
              <p className="text-sm text-primary-100">Procesamiento paralelo por agentes especializados.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative z-10">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mb-6 mx-auto">3</div>
              <h4 className="font-bold text-gray-900 mb-2">Acción Ejecutable</h4>
              <p className="text-sm text-gray-500">Reportes validados, alertas de falla y stock optimizado.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="bg-primary-600 py-24 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">El futuro de tu empresa empieza con IA⁺</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo de los Agentes IA")} className="bg-white text-primary-600 hover:bg-gray-100 rounded-full px-10 py-5 text-xl">
            Hablar con un Ingeniero de IA
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


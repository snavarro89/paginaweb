import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import Link from "next/link";
import { 
  Rocket, 
  Shield, 
  Box, 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  LayoutDashboard, 
  Smartphone,
  Users,
  Calendar,
  ClipboardCheck,
  ZapIcon
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Insquid - Control Total de Servicios en Campo con IA⁺",
  description:
    "La plataforma 2026-ready para HVAC, Seguridad e Industria. Pasa del caos operativo al control total con Agentes IA⁺. Gestión de activos, servicios e inventario.",
});

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 2026 Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Modern Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-100/40 via-white to-accent-50/30"></div>
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-300/10 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full mb-6">
                  <Zap className="w-4 h-4 text-primary-600 fill-primary-600" />
                  <span className="text-sm font-bold text-primary-700 uppercase tracking-wider">Nueva Era: IA⁺ para Field Service</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 text-balance">
                  Control Total de tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Servicios en Campo</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed text-balance">
                  La plataforma inteligente para HVAC, Seguridad e Industria. Elimina el caos operativo y escala tu empresa con Agentes IA⁺.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <CTAButton 
                    href={getWhatsAppLink()} 
                    variant="primary" 
                    className="px-8 py-4 text-lg rounded-full shadow-2xl shadow-primary-500/20 hover:scale-105 transition-transform"
                  >
                    Hablar por WhatsApp
                  </CTAButton>
                  <Link 
                    href="#demo"
                    className="flex items-center justify-center space-x-2 px-8 py-4 text-lg font-bold text-gray-700 border-2 border-gray-200 rounded-full hover:bg-gray-50 transition-all"
                  >
                    <span>Ver Demo (2 min)</span>
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* 🔲 IMAGE: Web Dashboard Main View */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                   <div className="aspect-[4/3] bg-gray-100 relative group">
                      <Image 
                        src="/images/web_calendar.png" 
                        alt="Dashboard de Insquid" 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                   </div>
                </div>

                {/* 🔲 IMAGE: Mobile Technician View */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-8 -left-8 md:-left-16 w-1/2 z-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <div className="aspect-[9/16] bg-gray-200 relative">
                    <Image 
                      src="/images/mobile_home.PNG" 
                      alt="App móvil para técnicos" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl animate-pulse"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Metrics Strip */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Impulsando empresas líderes en LATAM</span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {/* Logo Placeholders */}
              <div className="font-black text-2xl text-gray-300">HVAC CORP</div>
              <div className="font-black text-2xl text-gray-300">SECURE TECH</div>
              <div className="font-black text-2xl text-gray-300">INDUS SERV</div>
              <div className="font-black text-2xl text-gray-300">FIRE SYSTEMS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chaos to Control Flow */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Del <span className="text-red-500">Caos Manual</span> al <span className="text-primary-600">Control Inteligente</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Insquid digitaliza y automatiza cada etapa de tu operación para que el crecimiento no signifique más desorden.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { 
                step: "01", 
                title: "Planificación", 
                icon: Calendar, 
                desc: "Calendario inteligente y asignación de técnicos por zona y habilidad.",
                color: "bg-blue-500"
              },
              { 
                step: "02", 
                title: "Ejecución", 
                icon: Smartphone, 
                desc: "Técnicos con app móvil: checklists, fotos y firmas en tiempo real.",
                color: "bg-primary-500"
              },
              { 
                step: "03", 
                title: "Validación", 
                icon: ClipboardCheck, 
                desc: "Agentes IA⁺ revisan reportes para asegurar calidad y cumplimiento.",
                color: "bg-accent-500"
              },
              { 
                step: "04", 
                title: "Escalabilidad", 
                icon: BarChart3, 
                desc: "Dashboards en tiempo real para tomar decisiones basadas en datos.",
                color: "bg-purple-500"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${item.color}`}></div>
                <div className="text-5xl font-black text-gray-100 absolute top-4 right-6 group-hover:text-primary-50 transition-colors">{item.step}</div>
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-white mb-6`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* AI Agents High-Value Section */}
      <SectionWrapper className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 -z-10"></div>
        <div className="max-w-7xl mx-auto text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-900/50 border border-primary-500/30 px-3 py-1 rounded-full mb-6">
                <ZapIcon className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-bold text-primary-400 uppercase tracking-wider">Diferenciador 2026</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">No es solo software, son tus <span className="text-primary-400">Agentes IA⁺</span></h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Insquid incluye agentes de inteligencia artificial entrenados específicamente para el sector industrial que trabajan 24/7 en tu operación.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Agente Técnico", desc: "Asiste a tus técnicos en campo con manuales, solución de problemas y guías paso a paso." },
                  { title: "Agente de Implementación", desc: "Configura tus procesos, checklists y carga tus activos automáticamente." },
                  { title: "Agente de Reportes", desc: "Analiza miles de servicios para entregarte resúmenes ejecutivos y KPIs críticos." }
                ].map((agent, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1 bg-primary-600/20 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{agent.title}</h4>
                      <p className="text-gray-400">{agent.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link href="/ai-agents" className="inline-flex items-center space-x-2 text-primary-400 font-bold hover:text-primary-300 transition-colors group">
                  <span>Conoce a tus nuevos empleados digitales</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* 🔲 IMAGE: AI Agent Interface Interaction */}
              <div className="bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                <div className="aspect-square bg-gray-800 rounded-2xl relative overflow-hidden shadow-2xl">
                   <Image 
                    src="/images/web_stats2_dashboard.png" 
                    alt="Agentes IA en acción" 
                    fill 
                    className="object-cover opacity-80"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }} 
                        transition={{ duration: 4, repeat: Infinity }}
                        className="bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20"
                      >
                        <ZapIcon className="w-16 h-16 text-primary-400 fill-primary-400" />
                      </motion.div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Capabilities Grid */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Todo lo que necesitas para dominar tu operación</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Gestión de Servicios", icon: Rocket, href: "/product/service-management", desc: "Órdenes de servicio, programación automática y asignación de técnicos." },
              { title: "Activos y Contratos", icon: Shield, href: "/product/asset-management", desc: "Ciclo de vida de equipos, garantías y cumplimiento de SLAs." },
              { title: "Inventario Inteligente", icon: Box, href: "/product/inventory", desc: "Control de refacciones, herramientas y materiales por técnico o almacén." },
              { title: "Analytics Avanzado", icon: BarChart3, href: "/product/reporting", desc: "Crea tus propios reportes y dashboards con arrastrar y soltar." },
              { title: "Checklists & Firmas", icon: ClipboardCheck, href: "/product/service-management", desc: "Evidencias fotográficas, firmas digitales y formularios dinámicos." },
              { title: "Portal de Clientes", icon: Users, href: "/product/service-management", desc: "Tus clientes pueden ver el status de sus servicios y descargar reportes." }
            ].map((feature, i) => (
              <Link 
                key={i} 
                href={feature.href}
                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.desc}</p>
                <div className="flex items-center text-primary-600 font-bold">
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Industries Grid */}
      <SectionWrapper className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Construido para tu realidad industrial</h2>
            <p className="text-xl text-gray-600">Soluciones específicas para los retos de cada sector.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "HVAC", href: "/industries/hvac" },
              { name: "Seguridad", href: "/industries/sistemas-seguridad" },
              { name: "Incendio", href: "/industries/sistemas-contra-incendios" },
              { name: "Industrial", href: "/industries/mantenimiento-industrial" },
              { name: "Elevadores", href: "/industries/elevadores" },
              { name: "Energía", href: "/industries/energy" }
            ].map((ind, i) => (
              <Link 
                key={i} 
                href={ind.href}
                className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-primary-500 hover:shadow-lg transition-all"
              >
                <div className="font-bold text-gray-900 group-hover:text-primary-600">{ind.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-600 -z-10"></div>
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">¿Listo para recuperar el control de tu empresa?</h2>
            <p className="text-xl md:text-2xl text-primary-100 mb-12">
              Únete a las empresas que ya están escalando sin el freno del caos operativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                href={getWhatsAppLink()} 
                variant="primary" 
                className="bg-white text-primary-600 hover:bg-gray-100 px-10 py-5 text-xl rounded-full"
              >
                Empezar ahora por WhatsApp
              </CTAButton>
            </div>
            <p className="mt-8 text-primary-200 font-medium">Implementación guiada sin costo. Garantía de 30 días.</p>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Bubble (Global) */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <motion.a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center space-x-3 bg-white p-2 pr-6 rounded-full shadow-2xl border border-gray-100 group"
        >
          <div className="bg-green-500 p-3 rounded-full text-white shadow-lg shadow-green-500/30">
            <WhatsAppIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">¿Dudas? Habla con un experto</span>
            <span className="text-sm font-bold text-gray-900 group-hover:text-primary-600 transition-colors">WhatsApp Directo</span>
          </div>
        </motion.a>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

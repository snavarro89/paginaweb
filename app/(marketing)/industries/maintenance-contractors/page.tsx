import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Image from "next/image";
import { 
  CheckCircle2, 
  Users, 
  Briefcase, 
  MapPin, 
  Zap, 
  ArrowRight,
  TrendingUp,
  Clock
} from "lucide-react";
import * as motion from "framer-motion/client";

export const metadata = generateSEOMetadata({
  title: "Software para Contratistas de Mantenimiento - Insquid",
  description: "La herramienta definitiva para empresas que ofrecen servicios de mantenimiento a terceros. Gestiona múltiples clientes y sitios con facilidad.",
});

export default function MaintenanceContractorsPage() {
  const values = [
    { title: "Múltiples Clientes", desc: "Separa y gestiona activos de cientos de clientes en una sola plataforma." },
    { title: "Portal de Clientes", desc: "Dale a tus clientes acceso VIP para que vean el status de sus servicios y bajen reportes." },
    { title: "Rentabilidad Real", desc: "Conoce exactamente cuánto te cuesta cada servicio y cuál es tu margen real." }
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-primary-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 border border-white/30 px-3 py-1 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white uppercase tracking-widest">Para Contratistas de Mantenimiento</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Escala tu Empresa de <span className="text-primary-200">Servicios</span></h1>
            <p className="text-xl text-primary-50 mb-10 leading-relaxed">
              La plataforma que profesionaliza tu servicio, agiliza tu facturación y hace que tus clientes nunca quieran dejarte.
            </p>
            <CTAButton href={getWhatsAppLink("Hola, me interesa Insquid para mi empresa de mantenimiento")} variant="primary" className="rounded-full px-8 py-4 text-lg bg-white text-primary-600 hover:bg-gray-100 border-none shadow-xl">
              Demo por WhatsApp
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Contractor Features */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 mb-8">
                  {i === 0 ? <Users className="w-7 h-7" /> : i === 1 ? <TrendingUp className="w-7 h-7" /> : <Clock className="w-7 h-7" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{v.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Customer Portal Preview */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             {/* 🔲 IMAGE: Customer Portal Mockup */}
             <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 p-2 bg-gray-50">
                <Image src="/images/web_report.png" alt="Customer Portal" width={800} height={600} className="rounded-[2.5rem]" />
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Transparencia que genera confianza</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Tus clientes ya no tendrán que llamarte para saber el status de un servicio. Con el Portal de Clientes de Insquid, ellos tienen la información que necesitan, cuando la necesitan.
            </p>
            <div className="space-y-4">
              {[
                "Dashboard de status para clientes",
                "Descarga masiva de reportes históricos",
                "Solicitud de servicios desde el portal",
                "Firma y aprobación de presupuestos"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-lg font-medium text-gray-700">
                  <CheckCircle2 className="w-6 h-6 text-primary-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Profesionaliza tu empresa de servicios hoy</h2>
          <CTAButton href={getWhatsAppLink("Hola, quiero una demo para mi empresa de mantenimiento")} className="rounded-full px-10 py-5 text-xl">
            Empezar ahora por WhatsApp
          </CTAButton>
        </div>
      </section>
    </div>
  );
}


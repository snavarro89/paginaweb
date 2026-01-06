import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Zap, Target, Eye, Heart, Users2, Rocket } from "lucide-react";

export const metadata = generateSEOMetadata({
  title: "Acerca de Insquid - El Futuro de la Gestión Industrial",
  description:
    "Nuestra misión es eliminar el caos operativo y profesionalizar el servicio en campo mediante Agentes IA⁺. Conoce la visión 2026 de Insquid.",
});

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            Nuestra Misión: <span className="text-primary-600">Matar el Caos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance">
            Nacimos para que las empresas de mantenimiento industrial dejen de apagar fuegos y empiecen a escalar con inteligencia.
          </p>
        </div>
      </SectionWrapper>

      {/* Story */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-xl max-w-none">
            <p>
              Insquid nació de una realidad frustrante: ver a ingenieros y técnicos brillantes perder el 40% de su día buscando información en grupos de WhatsApp, llenando reportes manuales en Excel o buscando herramientas extraviadas.
            </p>
            <p>
              Entendimos que el problema en México y Latinoamérica no es la capacidad técnica de los equipos, sino la <strong>fricción operativa</strong>. El caos no solo quita tiempo, quita rentabilidad y quita vida.
            </p>
            <p>
              Decidimos construir algo diferente. No solo un software de tickets, sino una <strong>plataforma de control total</strong> impulsada por Agentes IA⁺ que actúan como un multiplicador de fuerza para tu equipo.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Vision/Values Grid */}
      <SectionWrapper className="bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misión</h3>
              <p className="text-gray-400 leading-relaxed">Eliminar el caos operativo en el sector industrial mediante tecnología IA⁺ de clase mundial, accesible para todos.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-accent-600 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visión 2026</h3>
              <p className="text-gray-400 leading-relaxed">Ser el estándar operativo para las empresas de servicios técnicos en LATAM, transformando cada visita en una experiencia premium.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-gray-400 leading-relaxed">Simplicidad radical, obsesión por los datos reales y compromiso inquebrantable con la seguridad industrial.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Team/Support Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Un equipo que entiende tu realidad</h2>
            <p className="text-xl text-gray-600">No somos solo desarrolladores, somos tus socios operativos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Soporte Proactivo", icon: Users2, desc: "Gente real que conoce tu industria y te ayuda a configurar tus procesos." },
              { title: "Innovación en IA⁺", icon: Zap, desc: "Ingenieros de datos enfocados en crear agentes que sí resuelvan problemas." },
              { title: "Éxito del Cliente", icon: Rocket, desc: "Acompañamiento constante para asegurar que recuperes tu inversión." }
            ].map((item, i) => (
              <div key={i} className="text-center p-10 rounded-[3rem] bg-gray-50 border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Únete a la revolución industrial</h2>
          <CTAButton href={getWhatsAppLink()} className="rounded-full px-12 py-6 text-xl">
            Hablar con el Equipo
          </CTAButton>
        </div>
      </section>
    </div>
  );
}

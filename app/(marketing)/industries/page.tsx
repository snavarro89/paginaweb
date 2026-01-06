import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import Link from "next/link";
import { 
  Snowflake, 
  Flame, 
  ArrowUpCircle, 
  Sun, 
  Factory, 
  Briefcase, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export const metadata = generateSEOMetadata({
  title: "Industrias - Insquid | Soluciones por Sector",
  description:
    "Soluciones especializadas para HVAC, Seguridad, Incendio, Elevadores, Energía y Manufactura. Descubre cómo Insquid optimiza tu sector.",
});

export default function IndustriesPage() {
  const industries = [
    {
      slug: "hvac",
      title: "HVAC",
      description: "Gestión de climatización, ventilación y refrigeración industrial.",
      icon: Snowflake,
      href: "/industries/hvac",
      color: "text-blue-600 bg-blue-50"
    },
    {
      slug: "fire-safety",
      title: "Contra Incendio",
      description: "Cumplimiento normativo y mantenimiento de sistemas de protección.",
      icon: Flame,
      href: "/industries/fire-safety",
      color: "text-red-600 bg-red-50"
    },
    {
      slug: "security-systems",
      title: "Seguridad Electrónica",
      description: "Instalación y mantenimiento de CCTV, alarmas y control de acceso.",
      icon: ShieldCheck,
      href: "/industries/security-systems",
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      slug: "elevators",
      title: "Elevadores",
      description: "Mantenimiento preventivo y atención de emergencias en movilidad vertical.",
      icon: ArrowUpCircle,
      href: "/industries/elevators",
      color: "text-primary-600 bg-primary-50"
    },
    {
      slug: "energy",
      title: "Energía",
      description: "Mantenimiento de activos críticos en plantas solares y eléctricas.",
      icon: Sun,
      href: "/industries/energy",
      color: "text-accent-600 bg-accent-50"
    },
    {
      slug: "manufacturing",
      title: "Manufactura",
      description: "Mantenimiento industrial para evitar paros de línea no programados.",
      icon: Factory,
      href: "/industries/manufacturing",
      color: "text-slate-600 bg-slate-50"
    },
    {
      slug: "maintenance-contractors",
      title: "Contratistas",
      description: "Profesionaliza tus servicios de mantenimiento a terceros.",
      icon: Briefcase,
      href: "/industries/maintenance-contractors",
      color: "text-emerald-600 bg-emerald-50"
    }
  ];

  return (
    <div className="pt-24">
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            Soluciones por <span className="text-primary-600">Industria</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance">
            Insquid ha sido diseñado bajo la realidad operativa de los sectores industriales más exigentes.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={industry.href}
                className="group block bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${industry.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                  {industry.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {industry.description}
                </p>
                <div className="flex items-center text-primary-600 font-bold group-hover:translate-x-2 transition-transform">
                  <span>Explorar solución</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            ¿Tu industria es diferente?
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Insquid es altamente configurable. Si tienes técnicos en campo y activos que mantener, podemos ayudarte.
          </p>
          <CTAButton href="https://wa.me/528112345678" variant="primary" className="rounded-full px-12 py-6 text-xl">
            Hablar con un consultor
          </CTAButton>
        </div>
      </SectionWrapper>
    </div>
  );
}

import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeatureCard from "@/components/ui/FeatureCard";
import CTAButton from "@/components/ui/CTAButton";
import Link from "next/link";

export const metadata = generateSEOMetadata({
  title: "Industrias - Insquid",
  description:
    "Insquid está diseñado para empresas de servicios en campo en diferentes industrias: sistemas contra incendio, seguridad, mantenimiento industrial, HVAC y manufactura.",
});

export default function IndustriesPage() {
  const industries = [
    {
      slug: "sistemas-contra-incendios",
      title: "Sistemas Contra Incendios",
      description:
        "Gestiona el mantenimiento preventivo y correctivo de sistemas de protección contra incendios con cumplimiento normativo garantizado.",
      icon: "🔥",
      href: "/industries/sistemas-contra-incendios",
    },
    {
      slug: "sistemas-seguridad",
      title: "Sistemas de Seguridad",
      description:
        "Control total sobre instalación, mantenimiento y monitoreo de sistemas de seguridad y CCTV.",
      icon: "🔒",
      href: "/industries/sistemas-seguridad",
    },
    {
      slug: "mantenimiento-industrial",
      title: "Mantenimiento Industrial",
      description:
        "Optimiza el mantenimiento de equipos industriales con programación preventiva y gestión de repuestos.",
      icon: "⚙️",
      href: "/industries/mantenimiento-industrial",
    },
    {
      slug: "hvac",
      title: "HVAC",
      description:
        "Gestiona servicios de climatización, ventilación y aire acondicionado con seguimiento de contratos de mantenimiento.",
      icon: "❄️",
      href: "/industries/hvac",
    },
    {
      slug: "manufactura",
      title: "Manufactura",
      description:
        "Mantén tus líneas de producción operativas con gestión eficiente de servicios técnicos y mantenimiento.",
      icon: "🏭",
      href: "/industries/manufactura",
    },
  ];

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluciones por Industria
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Insquid se adapta a las necesidades específicas de tu industria.
            Descubre cómo podemos ayudarte a optimizar tu operación.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={industry.href}
                className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h2>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <span className="text-primary-600 font-semibold hover:text-primary-700">
                  Ver más →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿No encuentras tu industria?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Insquid es flexible y se adapta a diferentes tipos de servicios en
            campo. Contáctanos para ver cómo podemos ayudarte.
          </p>
          <CTAButton href="/contact" variant="secondary">
            Hablar con un experto
          </CTAButton>
        </div>
      </SectionWrapper>
    </>
  );
}


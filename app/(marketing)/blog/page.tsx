import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

export const metadata = generateSEOMetadata({
  title: "Blog - Insquid",
  description:
    "Artículos y recursos sobre gestión de servicios en campo, mantenimiento preventivo y mejores prácticas para empresas de servicios técnicos.",
});

export default function BlogPage() {
  const dummyPosts = [
    {
      title: "5 Mejores Prácticas para la Gestión de Servicios en Campo",
      excerpt:
        "Descubre cómo optimizar tu operación de servicios en campo con estas estrategias probadas que aumentan la productividad y satisfacción del cliente.",
      date: "15 de marzo, 2024",
      slug: "#",
    },
    {
      title: "Cómo Implementar Mantenimientos Preventivos Efectivos",
      excerpt:
        "Aprende a diseñar y ejecutar programas de mantenimiento preventivo que reduzcan fallas costosas y mejoren la confiabilidad de tus activos.",
      date: "8 de marzo, 2024",
      slug: "#",
    },
    {
      title: "Tecnología y Productividad: El Futuro de los Servicios en Campo",
      excerpt:
        "Explora cómo la tecnología está transformando la industria de servicios en campo y qué herramientas pueden ayudar a tu empresa a destacar.",
      date: "1 de marzo, 2024",
      slug: "#",
    },
  ];

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Recursos, consejos y mejores prácticas para empresas de servicios en
            campo
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-50 rounded-lg p-8 text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Blog Próximamente
            </h2>
            <p className="text-gray-700">
              Estamos preparando contenido valioso sobre gestión de servicios en
              campo, mantenimiento preventivo y mejores prácticas. Muy pronto
              compartiremos artículos que te ayudarán a optimizar tu operación.
            </p>
          </div>

          <div className="space-y-8">
            {dummyPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time>{post.date}</time>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={post.slug}
                  className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                >
                  Leer más
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}


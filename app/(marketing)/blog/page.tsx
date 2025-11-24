import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const metadata = generateSEOMetadata({
  title: "Blog - Insquid",
  description:
    "Artículos y recursos sobre gestión de servicios en campo, mantenimiento preventivo y mejores prácticas para empresas de servicios técnicos.",
});

export default function BlogPage() {
  const posts = getAllPosts();

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
          {posts.length === 0 ? (
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
          ) : (
            <div className="space-y-8">
              {posts.map((post) => {
                const formattedDate = post.date
                  ? format(new Date(post.date), "d 'de' MMMM, yyyy", {
                      locale: es,
                    })
                  : "";

                return (
                  <article
                    key={post.slug}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center text-sm text-gray-500 mb-3 flex-wrap gap-2">
                      {formattedDate && (
                        <time dateTime={post.date}>{formattedDate}</time>
                      )}
                      {post.category && (
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      )}
                      {post.author && <span>Por {post.author}</span>}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {post.description}
                      </p>
                    )}
                    <Link
                      href={`/blog/${post.slug}`}
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
                );
              })}
            </div>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}


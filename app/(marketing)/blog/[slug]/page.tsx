import { generateSEOMetadata } from "@/lib/seo";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<any> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post no encontrado",
    };
  }

  return generateSEOMetadata({
    title: `${post.title} | Blog Insquid`,
    description: post.description || post.title,
    path: `/blog/${params.slug}`,
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.date
    ? format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })
    : "";

  return (
    <>
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center mb-6"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Volver al blog
          </Link>
          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              {formattedDate && (
                <time className="mr-4" dateTime={post.date}>
                  {formattedDate}
                </time>
              )}
              {post.author && (
                <span className="mr-4">Por {post.author}</span>
              )}
              {post.category && (
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              )}
            </div>
            {post.description && (
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {post.description}
              </p>
            )}
          </article>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </SectionWrapper>
    </>
  );
}


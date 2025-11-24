interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}
    >
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-primary-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">&quot;{quote}&quot;</p>
      <div>
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-sm text-gray-600">
          {role}, {company}
        </div>
      </div>
    </div>
  );
}


import CTAButton from "./CTAButton";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
  className?: string;
}

export default function PricingCard({
  name,
  price,
  period = "/mes",
  description,
  features,
  ctaText,
  ctaHref,
  featured = false,
  className = "",
}: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200 ${
        featured ? "ring-2 ring-primary-600 scale-105" : ""
      } ${className}`}
    >
      {featured && (
        <div className="inline-block bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Más Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {period && (
          <span className="text-gray-600 text-lg ml-2">{period}</span>
        )}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <CTAButton
        href={ctaHref}
        variant={featured ? "primary" : "secondary"}
        className="w-full"
      >
        {ctaText}
      </CTAButton>
    </div>
  );
}


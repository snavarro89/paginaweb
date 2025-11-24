import { ReactNode } from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon?: ReactNode;
  image?: string;
  imageAlt?: string;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  image,
  imageAlt,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}
    >
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      {icon && !image && (
        <div className="mb-4 text-primary-600 text-4xl">{icon}</div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface BenefitsShowcaseProps {
  benefits: Benefit[];
}

export default function BenefitsShowcase({ benefits }: BenefitsShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedBenefit = benefits[selectedIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Left Column - Benefits List */}
      <div className="space-y-3">
        {benefits.map((benefit, index) => {
          const isSelected = selectedIndex === index;
          return (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-full text-left p-5 rounded-lg border-2 transition-all duration-300 ${
                isSelected
                  ? "border-primary-600 bg-primary-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-primary-300 hover:shadow-sm"
              }`}
            >
              <h3
                className={`font-bold text-lg transition-colors ${
                  isSelected ? "text-primary-600" : "text-gray-900"
                }`}
              >
                {benefit.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Right Column - Selected Benefit Details */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        {selectedBenefit.image && (
          <div className="mb-6 rounded-lg overflow-hidden bg-gray-100">
            <div className="relative w-full aspect-video">
              <Image
                src={selectedBenefit.image}
                alt={selectedBenefit.imageAlt || selectedBenefit.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        )}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {selectedBenefit.title}
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          {selectedBenefit.description}
        </p>
      </div>
    </div>
  );
}


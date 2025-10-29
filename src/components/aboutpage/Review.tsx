"use client";

import Image from "next/image";
import React from "react";

interface Brand {
  id: number;
  image: {
    url: string;
    name?: string;
  };
}

interface ReviewCard {
  id: number;
  quote: string;
  author: string;
  designation: string;
  avatar: {
    url: string;
    name?: string;
  };
}

interface ReviewSectionProps {
  data: {
    subtitle: string;
    title: string;
    cards: ReviewCard[];
    brands: Brand[];
  };
}

export default function Review({ data }: ReviewSectionProps) {
  return (
    <section className="bg-black rounded-3xl px-6 py-16 md:px-12 md:py-20 flex flex-col items-center gap-10 w-full">
      {/* Tag */}
      <p className="text-white/70 text-sm border border-white/10 px-4 py-2 rounded-full">
        {data?.subtitle}
      </p>

      {/* Heading */}
      <h2 className="text-white text-3xl md:text-5xl font-semibold text-center max-w-2xl leading-snug">
        {data?.title}
      </h2>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
        {data?.cards?.map((card) => (
          <div
            key={card.id}
            className="bg-[#111] rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <p className="text-4xl mb-4">“</p>
            <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed">
              {card.quote}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={card.avatar.url}
                alt={card.avatar.name || card.author}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm text-white">{card.author}</p>
                <p className="text-xs text-white/60">{card.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Logos */}
      {data?.brands?.length > 0 && (
        <div className="w-full max-w-6xl mt-12">
          <p className="text-white/70 text-center text-sm mb-6">
            Working With Global Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {data.brands.map((brand) => (
              <div
                key={brand.id}
                className="bg-[#111] rounded-xl p-4 flex items-center justify-center w-16 h-16 md:w-20 md:h-20"
              >
                <Image
                  src={brand.image.url}
                  alt={brand.image.name || "brand"}
                  width={40}
                  height={40}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}


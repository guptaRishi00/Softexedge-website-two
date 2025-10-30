"use client";

import Image from "next/image";
import React from "react";
import LogoLoop from "@/components/LogoLoop"; // adjust path if different

interface Brand {
  id: number;
  image: {
    url: string;
    name?: string;
  };
}

interface ReviewCard {
  id: number;
  text: string;
  name: string;
  designation: string;
  profile: {
    url: string;
    name?: string;
  };
}

interface ReviewSectionProps {
  data: {
    tag: string;
    title: string;
    cards: ReviewCard[];
    brands: {
      title?: string;
      image: {
        url: string;
        name?: string;
      }[];
    };
  };
}

export default function Review({ data }: ReviewSectionProps) {
  return (
    <section className="bg-black rounded-3xl px-6 py-16 md:px-12 md:py-20 flex flex-col items-center gap-10 w-full">
      {/* Tag */}
      <p className="text-white/70 text-sm border border-white/10 px-4 py-2 rounded-full">
        {data?.tag}
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
            className="bg-white rounded-2xl p-6 text-black flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <p className="text-4xl mb-4">“</p>
            <p className="text-sm md:text-base text-black mb-6 leading-relaxed">
              {card.text}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              {card.profile?.url && (
                <Image
                  src={card.profile.url}
                  alt={card.profile.name || card.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-medium text-sm text-black">{card.name}</p>
                <p className="text-xs text-gray-500">{card.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Logos */}
      {data?.brands?.image?.length > 0 && (
  <div className="w-full mt-12">
    <h3 className="text-white text-center text-xl font-light mb-8">
      {data.brands?.title || "Working With Global Brands"}
    </h3>
    <LogoLoop
      logos={data.brands.image.map((img: any) => ({
        url: img?.url?.startsWith("http")
          ? img.url
          : `${
              process.env.NEXT_PUBLIC_STRAPI_URL ||
              "https://giving-feast-dfcaa21f17.media.strapiapp.com"
            }${img?.url}`,
        alt: img?.name || "brand logo",
      }))}
      speed={50}
      direction="left"
      logoHeight={55}
      gap={60}
      pauseOnHover
      scaleOnHover
      fadeOut
      fadeOutColor="#000000"
      ariaLabel="Partner brands"
    />
  </div>
      )}
    </section>
  );
}

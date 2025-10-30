"use client";

import React from "react";
import Image from "next/image";

interface Media {
  url: string;
  alternativeText?: string;
}

interface Card {
  id?: number;
  tag?: string;
  image?: Media;
  description?: string;
}

interface WhyChooseData {
  image?: Media;
  tag?: string;
  title?: string;
  description?: string;
  cards?: Card[];
}

interface WhyChooseProps {
  data?: WhyChooseData;
}

export default function WhyChoose({ data }: WhyChooseProps) {
  const imageUrl =
    data?.image?.url?.startsWith("http")
      ? data.image.url
      : data?.image?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL || "https://giving-feast-dfcaa21f17.media.strapiapp.com"}${data.image.url}`
      : "";

  return (
    <section className="bg-black text-white rounded-3xl px-5 py-10 lg:py-16 lg:px-20 my-10 space-y-10">
      {/* TOP SECTION: Image + Text */}
      <div className="lg:grid lg:grid-cols-2 items-center gap-10">
        {/* Left Image */}
        {imageUrl && (
          <div className="relative w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={data?.title || "Why Choose Us"}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Right Text */}
        <div className="flex flex-col justify-center gap-4">
          {data?.tag && (
            <span className="bg-white/10 text-white text-xs sm:text-sm px-4 py-2 rounded-full w-fit">
              {data.tag}
            </span>
          )}

          {data?.title && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              {data.title}
            </h2>
          )}

          {data?.description && (
            <p className="text-gray-400 text-sm sm:text-base max-w-lg">
              {data.description}
            </p>
          )}
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data?.cards?.map((card, index) => {
          const cardImageUrl =
            card?.image?.url?.startsWith("http")
              ? card.image.url
              : card?.image?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL || "https://giving-feast-dfcaa21f17.media.strapiapp.com"}${card.image.url}`
              : "";

          return (
            <div
              key={card.id || index}
              className="bg-[#0C0C0C] rounded-2xl px-6 py-8 flex flex-col items-center text-center border border-[#1E1E1E] hover:bg-[#121212] transition"
            >
              {cardImageUrl && (
                <Image
                  src={cardImageUrl}
                  alt={card.tag || "Card Icon"}
                  width={40}
                  height={40}
                  className="object-contain mb-4"
                />
              )}
              <h3 className="text-lg font-semibold mb-3">{card.tag}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

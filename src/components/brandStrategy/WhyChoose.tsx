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
  const imageUrl = data?.image?.url;

  return (
    <section className="bg-black h-screen text-white rounded-3xl px-5 py-10 lg:py-10 lg:px-10 my-10 space-y-10">
      <div className="lg:grid lg:grid-cols-2 flex flex-col items-center gap-16">
        <div className="lg:hidden flex flex-col items-center justify-center gap-4 mab-5">
          {data?.tag && (
            <span className="bg-white/10 text-white pt-3 pb-2 text-xs px-5 rounded-full w-fit">
              {data.tag}
            </span>
          )}

          {data?.title && (
            <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center max-w-xl font-medium leading-snug">
              {data.title}
            </h2>
          )}

          {data?.description && (
            <p className="text-[#ABABAB] text-sm sm:text-lg text-center font-medium max-w-xl">
              {data.description}
            </p>
          )}
        </div>
        {/* Left Image */}
        {imageUrl && (
          <div className="relative w-full h-[300px] lg:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={data?.title || "Why Choose Us"}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Right Text */}
        <div className="hidden lg:flex flex-col justify-center gap-4">
          {data?.tag && (
            <span className="bg-white/10 text-white pt-3 pb-2 px-5 rounded-full w-fit">
              {data.tag}
            </span>
          )}

          {data?.title && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:max-w-156 font-medium leading-snug">
              {data.title}
            </h2>
          )}

          {data?.description && (
            <p className="text-[#ABABAB] text-sm sm:text-lg font-medium max-w-xl">
              {data.description}
            </p>
          )}
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {data?.cards?.map((card, index) => {
          const cardImageUrl = card?.image?.url;

          return (
            <div className="flex flex-col items-center gap-5" key={card.id}>
              <div className="w-full h-px bg-[#FFFFFF80] hidden lg:inline-block"></div>
              <div
                key={card.id || index}
                className="bg-[#191919] rounded-2xl border border-[#FFFFFF26] px-6 py-8 flex flex-col items-center text-center  transition"
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
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";

interface Media {
  url: string;
  name?: string;
  alternativeText?: string;
}

interface Card {
  id?: number;
  tag?: string;
  description?: string;
  image?: { data?: { attributes: Media } } | Media;
}

interface OurMissionData {
  tag?: string;
  title?: string;
  cards?: Card[];
}

interface OurMissionProps {
  data?: OurMissionData;
}

export default function OurMission({ data }: OurMissionProps) {
  return (
    <section className="w-full bg-black text-white rounded-3xl flex flex-col items-center py-16 px-6 lg:px-20">
      {/* Tag */}
      {data?.tag && (
        <span className="bg-white/10 text-white text-xs sm:text-sm px-4 py-2 rounded-full mb-6">
          {data.tag}
        </span>
      )}

      {/* Title */}
      {data?.title && (
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl mb-14">
          {data.title}
        </h2>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-items-center">
        {data?.cards?.map((card, index) => {
          const imageUrl =
            (card.image as any)?.data?.attributes?.url ||
            (card.image as any)?.url ||
            "";

          return (
            <div
              key={card.id || index}
              className="bg-[#121212] h-full w-full max-w-[270px] flex flex-col items-center justify-start gap-5 px-6 py-8 rounded-2xl text-center transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Card Image */}
              {imageUrl ? (
                <div className="bg-[#1E1E1E] rounded-xl p-4 w-16 h-16 flex items-center justify-center">
                  <Image
                    src={imageUrl}
                    alt={card.tag || "Mission Icon"}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="bg-[#1E1E1E] rounded-xl p-4 w-16 h-16 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}

              {/* Card Title */}
              {card?.tag && (
                <h3 className="font-semibold text-lg">{card.tag}</h3>
              )}

              {/* Card Description */}
              {card?.description && (
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

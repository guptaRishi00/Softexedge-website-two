"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function OurMission({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === data?.cards?.length - 1) return 0;
      return index + 1;
    });
  }, [data?.cards?.length]);

  useEffect(() => {
    if (data?.cards?.length > 0) {
      const interval = setInterval(showNext, 5000);
      return () => clearInterval(interval);
    }
  }, [showNext, data?.cards?.length]);

  const renderCard = (card: any, index: number) => {
    const imageUrl =
      (card.image as any)?.data?.attributes?.url ||
      (card.image as any)?.url ||
      "";

    return (
      <div
        key={card.id || index}
        className="bg-[#121212] h-auto w-full border border-[#FFFFFF1A] flex flex-col items-center justify-start gap-5 px-4 py-8 rounded-2xl text-center "
      >
        {/* Card Image */}
        {imageUrl ? (
          <div className="flex items-center justify-center">
            <Image
              src={imageUrl}
              alt={card.tag || "Mission Icon"}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        ) : (
          <div className="bg-[#1E1E1E] rounded-xl p-4 w-16 h-16 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}

        {card?.tag && <h3 className="font-semibold lg:text-3xl">{card.tag}</h3>}

        {card?.description && (
          <p className="text-[#ABABAB] text-lg leading-relaxed w-full mt-2">
            {card.description}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="w-full lg:h-screen bg-black text-white rounded-3xl flex flex-col items-center overflow-hidden lg:justify-center lg:px-10 lg:py-10 py-8 px-6">
      {/* Tag */}
      {data?.tag && (
        <span className="bg-white/10 text-white text-xs sm:text-lg px-5 py-2 rounded-full mb-6">
          {data.tag}
        </span>
      )}

      {/* Title */}
      {data?.title && (
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-2xl mb-14">
          {data.title}
        </h2>
      )}

      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full justify-items-center">
        {data?.cards?.map((card: any, index: any) => renderCard(card, index))}
      </div>

      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out lg:hidden"
        style={{ transform: `translateX(${-100 * currentIndex}%)` }}
      >
        {data?.cards?.map((card: any, index: any) => (
          <div
            className="h-full w-full shrink-0 grow-0 flex items-center justify-center px-5"
            key={card.id || index}
          >
            {renderCard(card, index)}
          </div>
        ))}
      </div>

      <div className="flex lg:hidden justify-center items-center gap-3 mt-8">
        {data?.cards?.map((_: any, index: any) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-1 rounded-full border border-white transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`View item ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

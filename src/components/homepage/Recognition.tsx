"use client";

import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";

export default function Recognition({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = data?.cards || [];

  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === cards.length - 1) return 0;
      return index + 1;
    });
  }, [cards.length]);

  useEffect(() => {
    if (cards.length > 0) {
      const interval = setInterval(showNext, 5000); // 5 seconds interval
      return () => clearInterval(interval);
    }
  }, [showNext, cards.length]);

  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col lg:flex-row py-8 lg:gap-16 lg:py-10 lg:px-12 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center lg:items-start w-full">
        <div className="flex flex-col items-center justify-center lg:items-start gap-6 mb-10 lg:mb-16 px-5 lg:px-0">
          <span className="bg-white/10 text-white text-sm font-medium py-1.5 px-5 rounded-full backdrop-blur-sm">
            {data?.tag || "Recognition"}
          </span>
          <h2 className="text-white text-4xl lg:text-6xl font-medium text-center tracking-tight">
            {data?.title || "Certifications"}
          </h2>
        </div>

        {/* DESKTOP Cards Grid Section (Hidden on mobile) */}
        <div className="hidden lg:flex w-full items-center justify-between gap-10 lg:gap-0">
          {cards.map((card: any, index: number) => (
            <div
              key={index}
              className="relative flex flex-col justify-between h-full lg:px-6 first:pl-0 last:pr-0 gap-2"
            >
              {/* Card Text */}
              <p className="text-white font-light text-sm lg:text-[15px] lg:max-w-[200px] leading-relaxed">
                {card.text}
              </p>

              {/* Card Image */}
              <div className="relative w-full">
                <Image
                  src={card.image.url}
                  width={150}
                  height={150}
                  alt="award badge"
                  className="object-contain object-left h-12 w-auto"
                />
              </div>

              {/* Custom Short Divider Line */}
              {/* Only show if it's NOT the last item */}
              {index !== cards.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 mx-5 bg-white/20" />
              )}
            </div>
          ))}
        </div>

        {/* MOBILE Carousel Section (Hidden on desktop) */}
        <div className="w-full lg:hidden overflow-hidden">
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${-100 * currentIndex}%)` }}
          >
            {cards.map((card: any, index: number) => (
              <div
                key={index}
                className="w-full shrink-0 grow-0 flex flex-col items-start justify-start px-20 gap-6"
              >
                <p className="text-white font-light text-lg leading-relaxed text-start max-w-xs">
                  {card.text}
                </p>
                <div className="relative w-full flex justify-start">
                  <Image
                    src={card.image.url}
                    width={150}
                    height={150}
                    alt="award badge"
                    className="object-contain h-16 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex lg:hidden justify-center items-center gap-3 pt-8 w-full">
          {cards.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 w-1 rounded-full border border-white transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-transparent hover:bg-white/50"
              }`}
              aria-label={`View Certification ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

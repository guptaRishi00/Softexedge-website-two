"use client";
import React, { useState, useCallback, useEffect } from "react";

type Props = {};

export default function VideoWorks({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoized function to advance the carousel
  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      // Check against data.cards.length (which you use in your map)
      if (index === data?.cards?.length - 1) return 0;
      return index + 1;
    });
  }, [data?.cards?.length]);

  // useEffect to set up the auto-play interval
  useEffect(() => {
    // Only run the interval if there are cards
    if (data?.cards?.length > 0) {
      const interval = setInterval(showNext, 5000); // 5-second interval
      return () => clearInterval(interval);
    }
  }, [showNext, data?.cards?.length]);

  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-10 lg:gap-16 lg:py-10 lg:px-20 overflow-hidden">
      {/* 1. Title Section (Slightly modified with padding for mobile) */}
      <div className="flex flex-col items-center justify-center gap-5 px-5">
        <p className="bg-white/10 text-white pt-3 pb-2 px-4 rounded-full">
          {data?.tag}
        </p>
        <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
          {data?.title}
        </h1>
        {data?.description && (
          <p className="text-[#ABABAB] text-sm sm:text-lg text-center font-medium max-w-2xl">
            {data.description}
          </p>
        )}
      </div>

      {/* 2. Desktop View (Original flex row, hidden on mobile) */}
      <div className="w-full hidden lg:flex items-center gap-10 py-10">
        {data?.cards?.map((card: any, index: number) => (
          <div
            key={card?.text || index} // Added a key
            className="bg-[#121212] rounded-2xl w-full px-2 py-20 border border-[#FFFFFF1A] h-60 flex items-center justify-center"
          >
            <p className="font-medium text-4xl lg:text-2xl flex flex-col text-center items-center lg:gap-2 text-white">
              {card?.text}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Mobile View (Carousel, hidden on desktop) */}
      <div className="w-full flex flex-col items-center lg:hidden py-10">
        {/* Carousel Wrapper */}
        <div className="w-full overflow-hidden">
          {/* Carousel Track */}
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${-100 * currentIndex}%)` }}
          >
            {data?.cards?.map((card: any, index: number) => (
              <div
                className="w-full shrink-0 grow-0 flex items-center justify-center"
                key={card?.text || index}
              >
                {/* Card Content */}
                <div className="flex flex-col items-center gap-3 w-full px-5">
                  <div className="bg-[#121212] rounded-2xl w-full px-2 py-20 border border-[#FFFFFF1A] h-60 flex items-center justify-center">
                    <p className="font-medium text-4xl flex flex-col text-center items-center text-white">
                      {card?.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center items-center gap-3 pt-6">
          {data?.cards?.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full border border-white transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-transparent hover:bg-white/50"
              }`}
              aria-label={`View item ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 4. Second Description (Slightly modified with padding for mobile) */}
      <p className="text-[#ABABAB] text-sm sm:text-lg text-center font-medium max-w-2xl px-5">
        {data?.second_description}
      </p>
    </div>
  );
}

"use client";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Project({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Initialize with 4 visible items

  // Use 'cards' (plural) here to match your API
  const cards = data?.cards || [];

  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === cards.length - 1) return 0;
      return index + 1;
    });
  }, [cards.length]);

  useEffect(() => {
    if (cards.length > 0) {
      const interval = setInterval(showNext, 5000);
      return () => clearInterval(interval);
    }
  }, [showNext, cards.length]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 2); // Load 2 more on click
  };

  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-10 lg:gap-16 lg:py-10 lg:px-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="bg-white/10 text-white pt-3 pb-2 px-4 rounded-full">
          {data?.tag}
        </p>
        <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
          {data?.title}
        </h1>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex flex-col items-center w-full gap-10">
        <div className="grid grid-cols-2 gap-10 w-full">
          {/* Slice the array to show only 'visibleCount' items */}
          {cards.slice(0, visibleCount).map((card: any) => (
            <div className="flex flex-col items-center gap-3" key={card.id}>
              <div className="w-[640px] h-[500px] border border-[#2A2A2A] rounded-3xl overflow-hidden">
                <video width="700" autoPlay loop muted playsInline controls>
                  {/* Fixed: card.video?.url based on API */}
                  <source src={card.video?.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center gap-3 justify-between w-full px-2">
                <p className="text-white">{card.title}</p>
                <Link href={card.href || "/"}>
                  <GoArrowUpRight color="white" size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button - Only shows if there are more cards to display */}
        {visibleCount < cards.length && (
          <button
            onClick={handleViewMore}
            className="bg-white px-8 py-3 rounded-full font-medium hover:bg-gray-200 mt-4 cursor-pointer hover:bg-linear-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] text-black hover:text-white transition-all duration-300"
          >
            View More
          </button>
        )}
      </div>

      {/* MOBILE VIEW (Carousel) */}
      <div
        className="flex w-full transition-transform duration-500 ease-in-out lg:hidden"
        style={{ transform: `translateX(${-100 * currentIndex}%)` }}
      >
        {cards.map((card: any) => (
          <div
            className="w-full shrink-0 grow-0 flex items-center justify-center my-10"
            key={card.id}
          >
            <div className="flex flex-col items-center gap-3 w-full px-5">
              <div className="w-full h-auto border border-[#2A2A2A] rounded-3xl overflow-hidden">
                <video className="w-full" controls>
                  {/* Fixed: card.video?.url based on API */}
                  <source src={card.video?.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center gap-3 justify-between w-full px-2">
                <p className="text-white">{card.title}</p>
                <Link href={card.href || "/"}>
                  <GoArrowUpRight color="white" size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Pagination Dots */}
      <div className="flex lg:hidden justify-center items-center gap-3 pt-4">
        {cards.map((_: any, index: any) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-1 rounded-full border border-white transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`View Project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

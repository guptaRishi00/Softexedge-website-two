"use client";

import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import LogoLoop from "@/components/LogoLoop";
import { getStrapiMedia } from "@/lib/utils"; // 1. Import utility

export default function ClientReview({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = data?.reviews || data?.cards || []; // Handle both 'reviews' and 'cards' keys

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

  return (
    <section className="bg-black rounded-3xl px-6 py-16 md:px-12 md:py-20 flex flex-col items-center gap-10 w-full overflow-hidden">
      {data?.tag && (
        <p className="bg-white/10 text-white text-xs sm:text-lg px-4 py-2 rounded-full mb-4 w-fit">
          {data.tag}
        </p>
      )}

      <h2 className="text-white text-3xl md:text-6xl text-center max-w-2xl leading-snug">
        {data?.title}
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 w-full mt-6">
        {cards.map((card: any) => {
          // 2. Process URLs
          const iconUrl = getStrapiMedia(card.icon?.url);
          const profileUrl = getStrapiMedia(card.profile?.url);

          return (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 text-black h-auto flex flex-col justify-between items-start gap-5 shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              {iconUrl && (
                <div className="text-4xl mb-4 relative w-10 h-10">
                  <Image
                    src={iconUrl}
                    alt={card.icon?.name || "icon"}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <p className="text-lg max-w-sm font-medium md:text-md text-black mb-6 leading-relaxed">
                {card.text}
              </p>
              <div className="flex items-center gap-3">
                {profileUrl && (
                  <div className="overflow-hidden rounded-full w-12 h-12 relative">
                    <Image
                      src={profileUrl}
                      alt={card.profile?.name || card.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                )}
                <div>
                  <p className="font-medium text-md text-black">{card.name}</p>
                  <p className="text-sm text-gray-500">{card.designation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Carousel */}
      <div className="w-full md:hidden mt-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-100 * currentIndex}%)` }}
        >
          {cards.map((card: any) => {
            // 3. Process URLs for Mobile
            const iconUrl = getStrapiMedia(card.icon?.url);
            const profileUrl = getStrapiMedia(card.profile?.url);

            return (
              <div
                className="w-full shrink-0 grow-0 flex items-center justify-center px-4"
                key={card.id}
              >
                <div className="bg-white rounded-2xl p-6 text-black h-auto flex flex-col justify-between items-start gap-5 shadow-lg w-full">
                  {iconUrl && (
                    <div className="text-4xl mb-4 relative w-10 h-10">
                      <Image
                        src={iconUrl}
                        alt={card.icon?.name || "icon"}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <p className="text-sm max-w-sm font-medium md:text-lg text-black mb-6 leading-relaxed">
                    {card.text}
                  </p>
                  <div className="flex items-center gap-3">
                    {profileUrl && (
                      <div className="overflow-hidden rounded-full w-12 h-12 relative">
                        <Image
                          src={profileUrl}
                          alt={card.profile?.name || card.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-xs lg:text-md text-black">
                        {card.name}
                      </p>
                      <p className="lg:text-sm text-xs text-gray-500">
                        {card.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex md:hidden justify-center items-center gap-3 pt-4">
        {cards.map((_: any, index: any) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full border border-white transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`View Review ${index + 1}`}
          />
        ))}
      </div>

      {/* 4. Updated Brands Logic to match new JSON structure */}
      {data?.brands?.image?.length > 0 && (
        <div className="w-full mt-12">
          <h3 className="text-white text-center text-xl font-light mb-8">
            {data.brands.title || "Working With Global Brands"}
          </h3>
          <LogoLoop
            logos={data.brands.image.map((img: any) => ({
              // Use utility for absolute URL
              url: getStrapiMedia(img?.url) || "",
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

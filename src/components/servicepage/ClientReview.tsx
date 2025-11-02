"use client";

import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import LogoLoop from "@/components/LogoLoop";

export default function ClientReview({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("Client Review Data:", data.brands[0].image);

  const cards = data?.reviews || [];

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
      <p className="bg-white/10 text-white text-xs sm:text-lg px-4 py-2 rounded-full mb-4 w-fit">
        {data?.tag}
      </p>

      <h2 className="text-white text-3xl md:text-6xl text-center max-w-2xl leading-snug">
        {data?.title}
      </h2>

      <div className="hidden md:grid md:grid-cols-3 gap-6 w-full mt-6">
        {cards.map((card: any) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl p-6 text-black h-auto flex flex-col justify-between items-start gap-5 shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <p className="text-4xl mb-4">
              <Image
                src={card.icon.url}
                alt={card.icon.name || "icon"}
                width={40}
                height={40}
                className="object-contain"
              />
            </p>
            <p className="text-lg max-w-sm font-medium md:text-md text-black mb-6 leading-relaxed">
              {card.text}
            </p>
            <div className="flex items-center gap-3 ">
              {card.profile?.url && (
                <div className="overflow-hidden rounded-full w-12 h-12">
                  <Image
                    src={card.profile.url}
                    alt={card.profile.name || card.name}
                    width={30}
                    height={30}
                    className="w-full object-cover object-center"
                  />
                </div>
              )}
              <div className="">
                <p className="font-medium text-md text-black">{card.name}</p>
                <p className="text-sm text-gray-500">{card.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:hidden mt-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-100 * currentIndex}%)` }}
        >
          {cards.map((card: any) => (
            <div
              className="w-full shrink-0 grow-0 flex items-center justify-center px-4" // Added padding for spacing
              key={card.id}
            >
              <div className="bg-white rounded-2xl p-6 text-black h-auto flex flex-col justify-between items-start gap-5 shadow-lg w-full">
                <p className="text-4xl mb-4">
                  <Image
                    src={card.icon.url}
                    alt={card.icon.name || "icon"}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </p>
                <p className="text-sm max-w-sm font-medium md:text-lg text-black mb-6 leading-relaxed">
                  {card.text}
                </p>
                <div className="flex items-center gap-3 ">
                  {card.profile?.url && (
                    <div className="overflow-hidden rounded-full w-12 h-12">
                      <Image
                        src={card.profile.url}
                        alt={card.profile.name || card.name}
                        width={30}
                        height={30}
                        className="w-full object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="">
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
          ))}
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

      {data?.brands[0]?.image.length > 0 && (
        <div className="w-full mt-12">
          <h3 className="text-white text-center text-xl font-light mb-8">
            {data.brands?.title || "Working With Global Brands"}
          </h3>
          <LogoLoop
            logos={data.brands[0].image.map((img: any) => ({
              url: img?.url?.startsWith("http")
                ? img.url
                : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img?.url}`,
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

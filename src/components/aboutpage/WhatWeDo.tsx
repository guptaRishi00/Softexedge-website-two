"use client";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import LinkComp from "../LinkComp";

export default function WhatWeDo({ data }: any) {
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

  return (
    <div className="h-screen bg-black rounded-3xl flex flex-col items-center py-10 lg:justify-center lg:gap-16 lg:py-10 lg:px-20 overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="bg-white/10 text-white py-2 px-4 rounded-full">
          {data?.title}
        </p>
        <h1 className="font-medium text-xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
          {data?.description}
        </h1>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex items-center justify-between w-full gap-10">
        {data?.cards?.map((card: any) => (
          <div
            key={card.id}
            className="bg-[#0D0D0D] border border-[#1E1E1E] rounded-3xl p-10 flex flex-col justify-between items-center text-center gap-6 transition-transform hover:scale-[1.03] hover:border-[#2A2A2A]"
          >
            {/* Tag */}
            <p className="border border-[#FFFFFF1A] text-xs rounded-full py-2 px-5 text-white/90 tracking-wide">
              {card.tag}
            </p>

            {/* Icon */}
            <div className="flex justify-center">
              <Image
                src={card.image.url}
                width={80}
                height={80}
                alt="card image"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              {card?.description}
            </p>

            {/* Button */}
            <LinkComp
              href={card?.button.href || "/"}
              color={card?.button.theme}
              className="px-6 py-2.5 text-xs rounded-full border border-[#2C2C2C] bg-white/5 hover:bg-white/10 transition"
            >
              {card?.button.text}
            </LinkComp>
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out lg:hidden mt-6"
        style={{ transform: `translateX(${-100 * currentIndex}%)` }}
      >
        {data?.cards?.map((card: any) => (
          <div
            className="h-full w-full shrink-0 grow-0 flex items-center justify-center"
            key={card.id}
          >
            <div className="bg-[#0D0D0D] border border-[#1E1E1E] rounded-3xl p-10 flex flex-col justify-between items-center text-center gap-6 w-[90%] mx-auto">
              <p className="border border-[#FFFFFF1A] text-xs rounded-full py-2 px-5 text-white/90 tracking-wide">
                {card.tag}
              </p>

              <div className="flex justify-center">
                <Image
                  src={card.image.url}
                  width={80}
                  height={80}
                  alt="card image"
                  className="w-20 h-20 object-contain"
                />
              </div>

              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                {card?.description}
              </p>

              <LinkComp
                href={card?.button.href || "/"}
                color={card?.button.theme}
                className="px-6 py-2.5 text-xs rounded-full border border-[#2C2C2C] bg-white/5 hover:bg-white/10 transition"
              >
                {card?.button.text}
              </LinkComp>
            </div>
          </div>
        ))}
      </div>

      {/* Slider dots */}
      <div className="flex md:hidden justify-center items-center gap-3 mt-4">
        {data?.cards?.map((_: any, index: any) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full border border-white transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`View Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

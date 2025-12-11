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
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center lg:justify-center py-10 lg:gap-16 lg:py-10 lg:px-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="bg-white/10 text-white pb-2 pt-3 px-4 rounded-full">
          {data?.title}
        </p>
        <h1 className="font-medium text-xl lg:text-5xl flex flex-col text-center items-center lg:gap-2 text-white">
          {data?.description}
        </h1>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex items-center justify-between w-full gap-20 lg:px-20 lg:mb-2">
        {data?.cards?.map((card: any) => (
          <div
            className="bg-[#121212] overflow-hidden lg:min-h-[435px] lg:w-[350px] flex flex-col justify-around lg:px-5 lg:py-2 items-start gap-8 rounded-3xl"
            key={card.id}
          >
            <p className="border border-[#FFFFFF14] uppercase text-xs flex items-center rounded-full pt-2 pb-1 px-7 text-white">
              {card.tag}
            </p>
            <div className="w-full lg:h-35 overflow-hidden">
              <Image
                src={card.image.url}
                width={300}
                height={300}
                alt="card image"
                className="mx-auto object-cover object-center"
              />
            </div>
            <p className="text-white max-w-[18rem] font-medium text-sm">
              {card?.description}
            </p>

            <LinkComp
              href={card?.button.href || "/"}
              className="px-5 pt-3 pb-2 text-xs border text-white bg-black border-[#2C2C2C]"
            >
              {card?.button.text}
            </LinkComp>
          </div>
        ))}
      </div>

      {/* MOBILE VIEW */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out lg:hidden mt-6"
        style={{ transform: `translateX(${-100 * currentIndex}%)` }}
      >
        {data?.cards?.map((card: any) => (
          <div
            // Added px-4 here to ensure spacing from screen edges
            className="h-full w-full shrink-0 grow-0 flex items-center justify-center px-4"
            key={card.id}
          >
            {/* Removed mx-5 and used standard padding */}
            <div className="bg-[#121212] h-auto w-full flex flex-col px-6 py-8 items-start justify-between gap-6 rounded-3xl">
              <p className="border border-[#FFFFFF14] text-xs rounded-full py-2 px-5 text-white">
                {card.tag}
              </p>

              <div className="w-full flex justify-center">
                <Image
                  src={card.image.url}
                  width={300}
                  height={300}
                  alt="card image"
                  className="w-40 h-40 object-contain"
                />
              </div>

              <p className="text-white w-full font-medium text-sm leading-relaxed">
                {card?.description}
              </p>

              <LinkComp
                href={card?.button.href || "/"}
                color={card?.button.theme}
                className="px-6 py-3 text-xs border border-[#2C2C2C]"
              >
                {card?.button.text}
              </LinkComp>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex md:hidden justify-center items-center gap-3 mt-6">
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

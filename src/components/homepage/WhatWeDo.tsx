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
    <div className="h-screen bg-black rounded-3xl flex flex-col items-center lg:justify-center py-10 lg:gap-16 lg:py-10 lg:px-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="bg-white/10 text-white py-2 px-4 rounded-full">
          {data?.title}
        </p>
        <h1 className="font-medium text-xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
          {data?.description}
        </h1>
      </div>

      <div className="hidden lg:flex items-center justify-between w-full gap-20">
        {data?.cards?.map((card: any) => (
          <div
            className="bg-[#121212] h-full w-full flex flex-col px-5 py-5 items-start justify-around gap-8 rounded-3xl"
            key={card.id}
          >
            <p className="border border-[#FFFFFF14] text-xs rounded-full py-2 px-5 text-white">
              {card.tag}
            </p>
            <Image
              src={card.image.url}
              width={300}
              height={300}
              alt="card image"
              className="mx-auto w-40"
            />
            <p className="text-white max-w-[18rem] font-medium text-sm">
              {card?.description}
            </p>

            <LinkComp
              href={card?.button.href || "/"}
              color={card?.button.theme}
              className="px-5 p-3 text-xs border border-[#2C2C2C]"
            >
              {card?.button.text}
            </LinkComp>
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out lg:hidden"
        style={{ transform: `translateX(${-100 * currentIndex}%)` }}
      >
        {data?.cards?.map((card: any) => (
          <div
            className="h-full w-full shrink-0 grow-0 flex items-center justify-center"
            key={card.id}
          >
            <div className="bg-[#121212] h-auto w-full flex flex-col px-5 py-5 items-start justify-around gap-8 rounded-3xl mx-5 ">
              <p className="border border-[#FFFFFF14] text-xs rounded-full py-2 px-5 text-white">
                {card.tag}
              </p>
              <Image
                src={card.image.url}
                width={300}
                height={300}
                alt="card image"
                className="mx-auto w-40"
              />
              <p className="text-white max-w-[18rem] font-medium text-sm">
                {card?.description}
              </p>

              <LinkComp
                href={card?.button.href || "/"}
                color={card?.button.theme}
                className="px-5 p-3 text-xs border border-[#2C2C2C]"
              >
                {card?.button.text}
              </LinkComp>
            </div>
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-center items-center gap-3">
        {data?.cards?.map((_: any, index: any) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-1 rounded-full border border-white transition-colors ${
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

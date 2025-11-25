"use client";

import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import LinkComp from "../LinkComp";

export default function OurTeam({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const button = data?.button;
  const buttonTheme = button?.theme;

  const imagesLength = data?.images?.length || 0;

  const showNext = useCallback(() => {
    if (imagesLength > 0) {
      setCurrentIndex((index) => (index === imagesLength - 1 ? 0 : index + 1));
    }
  }, [imagesLength]);

  useEffect(() => {
    if (imagesLength > 0) {
      const interval = setInterval(showNext, 5000);

      return () => clearInterval(interval);
    }
  }, [showNext, imagesLength, currentIndex]);

  const renderTeamImage = (img: any) => (
    <div
      key={img.id}
      className="flex flex-col items-center justify-center rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={img.url}
        alt={img.alternativeText || "Team Member"}
        width={300}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
  );

  return (
    <section className="bg-black rounded-3xl px-6 py-16 md:px-12 md:py-20 flex flex-col items-center justify-center gap-10 w-full overflow-hidden">
      {data?.tag && (
        <p className="bg-white/10 text-white text-xs sm:text-lg px-4 py-2 rounded-full mb-4 w-fit">
          {data.tag}
        </p>
      )}

      {data?.title && (
        <h2 className="text-white text-3xl md:text-6xl text-center">
          {data.title}
        </h2>
      )}

      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-6 w-full">
        {data?.images?.map((img: any) => renderTeamImage(img))}
      </div>

      <div
        className="flex w-full transition-transform duration-500 ease-in-out md:hidden mt-6"
        style={{ transform: `translateX(${-100 * currentIndex}%)` }}
      >
        {data?.images?.map((img: any) => (
          <div
            className="h-full w-full shrink-0 grow-0 flex items-center justify-center px-4"
            key={`carousel-${img.id}`}
          >
            {renderTeamImage(img)}
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-center items-center gap-3">
        {data?.images?.map((_: any, index: any) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-1 rounded-full border border-white transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`View team member ${index + 1}`}
          />
        ))}
      </div>

      {data?.button?.text && (
        <LinkComp
          color={buttonTheme}
          href={button.href || "/"}
          className="flex items-center gap-3 text-black font-medium px-10 py-3 justify-center lg:w-fit"
        >
          {button.text}
        </LinkComp>
      )}
    </section>
  );
}

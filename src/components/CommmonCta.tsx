"use client";

import { useState } from "react";
import LinkComp from "./LinkComp";
import Image from "next/image";

export default function CommonCta() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const totalItems = 60;
  const columns = 10;

  const getIntensity = (index: any) => {
    if (hoveredIndex === null) return 0;

    const row = Math.floor(index / columns);
    const col = index % columns;

    const hoverRow = Math.floor(hoveredIndex / columns);
    const hoverCol = hoveredIndex % columns;

    const distance = Math.sqrt(
      Math.pow(row - hoverRow, 2) + Math.pow(col - hoverCol, 2)
    );

    if (distance > 3.5) return 0;
    return Math.max(0, 1 - distance / 1.79);
  };

  return (
    <div className="h-[60vh] bg-black rounded-3xl overflow-hidden relative flex items-center justify-center">
      <div
        className="grid gap-2 w-[120%] -ml-[5%]"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: totalItems }).map((_, index) => {
          const intensity = getIntensity(index);
          const colorVal = Math.round(10 * (1 - intensity));
          const bgColor = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-24 sm:h-32 rounded-2xl p-[0.8px] overflow-hidden transition-all duration-300 ease-out"
              style={{
                backgroundColor: intensity > 0 ? "transparent" : "#171717",
              }}
            >
              <div
                className="absolute inset-0 bg-linear-to-b from-[#3445E7] via-[#2F85EA] to-[#07D6F3]"
                style={{ opacity: intensity }}
              />

              <div
                className="relative w-full h-full rounded-2xl z-10 transition-colors duration-300"
                style={{ backgroundColor: bgColor }}
              />
            </div>
          );
        })}
      </div>

      <div className="w-fit h-full bg-transparent absolute z-10 flex flex-col items-center justify-center gap-2">
        <p className="bg-white/10 text-white text-xs sm:text-xs px-4 pb-2 pt-3 rounded-full mb-4 w-fit">
          Contact Us
        </p>

        <h2 className="text-white text-3xl md:text-2xl text-center max-w-2xl leading-snug">
          Start Growing With SoftEXedge
        </h2>

        <p className="text-sm max-w-xl text-center text-white">
          Digital marketing isn’t one-size-fits-all. Your business deserves
          strategies built for your audience, market, and growth goals.
        </p>

        <div className="lg:flex lg:gap-6 flex-col lg:flex-row flex items-center gap-4 mt-4">
          <LinkComp
            href={"/contact"}
            className="font-regular bg-white flex items-center lg:pb-2 lg:pt-3 lg:px-4 px-5 py-2 gap-3 lg:text-lg"
          >
            let's talk
            <Image
              src={"/button.svg"}
              width={60}
              height={60}
              alt="button logo"
              className="lg:w-20 lg:h-12"
            />
          </LinkComp>
          <LinkComp
            href={"/contact"}
            className="font-regular bg-white flex items-center lg:pt-5 lg:pb-4 lg:px-5 px-5 py-2 lg:py-8 gap-3 lg:text-lg"
          >
            View our work
          </LinkComp>
        </div>
      </div>
    </div>
  );
}

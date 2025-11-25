"use client";

import React from "react";
import Image from "next/image";
import LinkComp from "../LinkComp";

export default function HeroSectionService({ data }: any) {
  const letsTalkTheme = data?.letsTalk?.theme;

  return (
    <section className="w-full h-auto bg-white px-5 py-6 lg:pt-24 top-0 left-0 lg:px-18">
      <div className="w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-2 ">
        <div className="space-y-9 flex flex-col items-center lg:items-start justify-between text-center lg:text-start  h-full">
          <p className="inline-block bg-[#0000001A] text-black text-sm px-5 py-2 rounded-full w-fit">
            {data?.tag}
          </p>

          {/* Title */}
          <h1 className="text-2xl sm:text-5xl lg:text-8xl max-w-4xl font-medium text-black">
            {data?.title}
          </h1>

          <p className="text-black mx-auto lg:mx-0 text-xs lg:text-xl ">
            {data?.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
            <LinkComp
              href={data?.letsTalk?.href || "/"}
              color={letsTalkTheme}
              className="font-regular justify-center flex items-center border border-gray-300 lg:py-3 lg:px-5 px-5 py-2 gap-3 lg:text-lg"
            >
              {data?.letsTalk?.text}

              {data?.letsTalk?.image?.url && (
                <Image
                  src={data.letsTalk.image.url}
                  width={60}
                  height={60}
                  alt="button logo lg:w-26 lg:h-26"
                />
              )}

              {/* Optional: Keep array support if other pages use 'images' list */}
              {Array.isArray(data?.letsTalk?.images) &&
                data.letsTalk.images.map((img: any, index: number) => (
                  <Image
                    key={index}
                    src={img?.url}
                    width={60}
                    height={60}
                    alt="button logo"
                  />
                ))}
              {/* --- FIX END --- */}
            </LinkComp>

            <LinkComp
              href={data?.viewOurWork?.href || "#"}
              color={data?.viewOurWork?.theme || "outline"}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition font-medium"
            >
              {data?.viewOurWork?.text || "View Our Work"}
            </LinkComp>
          </div>
        </div>

        {/* RIGHT SINGLE IMAGE */}
        <div className=" mx-auto h-full overflow-hidden lg:flex items-center justify-end relative">
          {/* Added check to ensure image exists before rendering */}
          {data?.image?.url && (
            <Image
              src={data.image.url}
              alt={data?.title || "About Hero Image"}
              width={850}
              height={850}
              className="object-cover "
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}

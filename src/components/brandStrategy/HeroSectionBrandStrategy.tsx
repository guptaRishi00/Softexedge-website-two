"use client";

import React from "react";
import Image from "next/image";
import LinkComp from "../LinkComp";
import { getStrapiMedia } from "@/lib/utils"; // 1. Import utility

export default function HeroSectionBrandStrategy({ data }: any) {
  const letsTalkTheme = data?.letsTalk?.theme;

  // 2. Process the main hero image URL
  const heroImageUrl = getStrapiMedia(data?.image?.url);

  // 3. Process the 'Let's Talk' button image URL
  const letsTalkImageUrl = getStrapiMedia(data?.letsTalk?.image?.url);

  return (
    <section className="w-full h-auto bg-white px-5 py-6 lg:pt-24 top-0 left-0 lg:px-18">
      <div className="w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-2 ">
        <div className="space-y-9 flex flex-col items-center lg:items-start justify-between text-center lg:text-start h-full">
          <p className="inline-block bg-[#0000001A] text-black text-sm px-5 py-2 rounded-full w-fit">
            {data?.tag}{" "}
            {/* Changed from subtitle to tag based on common schema */}
          </p>

          {/* Title */}
          <h1 className="text-2xl sm:text-5xl lg:text-7xl max-w-4xl font-medium text-black">
            {data?.title}
          </h1>

          <p className="text-black mx-auto lg:mx-0 text-xs lg:max-w-7xl lg:text-xl ">
            {data?.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
            <LinkComp
              href={data?.letsTalk?.href || "/"}
              color={letsTalkTheme}
              className="font-regular justify-center flex items-center lg:py-3 lg:px-5 border border-gray-300 px-5 py-2 gap-3 lg:text-lg"
            >
              {data?.letsTalk?.text}

              {/* --- FIX START: Handle single image object --- */}
              {letsTalkImageUrl && (
                <Image
                  src={letsTalkImageUrl}
                  width={60}
                  height={60}
                  alt="button logo"
                  className="w-10 h-10 object-contain"
                />
              )}
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
          {heroImageUrl && (
            <Image
              src={heroImageUrl}
              alt={data?.title || "About Hero Image"}
              width={700}
              height={700}
              className="object-cover"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import LinkComp from "../LinkComp";

export default function HeroSectionAbout({ data }: any) {
  const letsTalkTheme = data?.letsTalk?.theme;

  return (
    <section className="w-full h-screen bg-white px-5 py-6 lg:pt-24 top-0 left-0 lg:px-19">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <div className=" space-y-5 text-center lg:text-left">
          <p className="inline-block bg-[#0000001A] text-black text-sm px-5 py-2 rounded-full">
            {data?.subtitle}
          </p>

          {/* Title */}
          <h1 className="text-2xl sm:text-5xl lg:text-8xl font-medium text-black">
            {data?.title}
          </h1>

          <p className="text-black mx-auto lg:mx-0 text-xs lg:text-xl">
            {data?.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
            <LinkComp
              href={data?.letsTalk?.href || "/"}
              color={letsTalkTheme}
              className="font-regular justify-center flex items-center lg:py-3 lg:px-5 px-5 py-2 gap-3 lg:text-lg border border-gray-300"
            >
              {data?.letsTalk?.text}

              {/* FIX: Check for singular 'image' object instead of mapping 'images' array */}
              {data?.letsTalk?.image && (
                <Image
                  src={data.letsTalk.image.url}
                  width={60}
                  height={60}
                  alt="button logo"
                />
              )}
            </LinkComp>

            <LinkComp
              /* FIX: Updated 'viewOurWork' to 'viewWork' to match your loader/JSON structure */
              href={data?.viewWork?.href || "#"}
              color={data?.viewWork?.theme || "outline"}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition font-medium"
            >
              {data?.viewWork?.text || "View Our Work"}
            </LinkComp>
          </div>
        </div>

        {/* RIGHT SINGLE IMAGE */}
        <div className=" w-full mx-auto relative">
          {data?.image?.url && (
            <Image
              src={data.image.url}
              alt={data?.title || "About Hero Image"}
              width={800}
              height={800}
              className="object-cover w-full h-auto"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}

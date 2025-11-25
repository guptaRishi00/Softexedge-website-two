"use client";

import React from "react";
import Image from "next/image";
import LinkComp from "../LinkComp";

export default function HeroSection({ data }: any) {
  const letsTalkTheme = data?.letsTalk?.theme;

  // Normalize images to an array to handle both 'image' (single) and 'images' (array)
  const letsTalkImages = data?.letsTalk?.images
    ? data.letsTalk.images
    : data?.letsTalk?.image
    ? [data.letsTalk.image]
    : [];

  return (
    <section className="w-full h-auto bg-white px-5 py-6 lg:pt-24 top-0 left-0 lg:px-18">
      <div className="w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
        <div className="space-y-9 flex flex-col items-center lg:items-start justify-between text-center lg:text-start h-full">
          {data?.tag && (
            <p className="inline-block bg-[#0000001A] text-black text-sm px-5 py-2 rounded-full w-fit">
              {data.tag}
            </p>
          )}

          <h1 className="text-2xl sm:text-5xl lg:text-6xl max-w-4xl font-medium text-black">
            {data?.title}
          </h1>

          <p className="text-black mx-auto lg:mx-0 text-xs lg:max-w-6xl lg:text-xl">
            {data?.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
            <LinkComp
              href={data?.letsTalk?.href || "/"}
              color={letsTalkTheme}
              className="font-regular justify-center flex items-center border border-gray-300 lg:py-3 lg:px-5 px-5 py-2 gap-3 lg:text-lg"
            >
              {data?.letsTalk?.text}

              {/* Render mapped images safely */}
              {letsTalkImages.map((img: any, index: number) => (
                <Image
                  key={index}
                  src={img?.url}
                  width={60}
                  height={60}
                  alt="button logo"
                  className="w-auto h-auto"
                />
              ))}
            </LinkComp>

            <LinkComp
              href={data?.viewWork?.href || data?.viewOurWork?.href || "#"}
              color={
                data?.viewWork?.theme || data?.viewOurWork?.theme || "outline"
              }
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition font-medium"
            >
              {data?.viewWork?.text ||
                data?.viewOurWork?.text ||
                "View Our Work"}
            </LinkComp>
          </div>
        </div>

        <div className="mx-auto h-full overflow-hidden lg:flex items-center justify-end relative">
          {data?.image?.url && (
            <Image
              src={data.image.url}
              alt={data?.title || "Hero Image"}
              width={600}
              height={600}
              className="object-cover"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}

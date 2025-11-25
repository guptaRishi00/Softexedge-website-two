"use client";

import React from "react";
import Image from "next/image";
import LinkComp from "../LinkComp";

export default function OurStory({ data }: any) {
  const imageUrl = data?.image?.url || (data as any)?.image?.url || "";

  const button = data?.button;
  const buttonTheme = button?.theme;

  return (
    <section className="w-full lg:h-screen bg-black text-white rounded-3xl flex flex-col gap-5 lg:gap-12 lg:flex-row items-center overflow-hidden lg:justify-center lg:px-10 lg:py-10 py-8 px-6">
      <div className="flex flex-col lg:hidden items-center">
        {data?.tag && (
          <span className="bg-white/10 text-white font-medium text-xs sm:text-lg px-4 py-2 rounded-full mb-4 w-fit">
            {data.tag}
          </span>
        )}

        {data?.title && (
          <h2 className="text-2xl sm:text-3xl text-center lg:text-6xl font-semibold mb-5 leading-snug">
            {data.title}
          </h2>
        )}
      </div>

      <div className="relative w-full h-[400px] lg:h-full rounded-2xl overflow-hidden">
        {imageUrl ? (
          <Image
            src={data?.image.url}
            alt={data?.title || "Our Story"}
            fill
            className="object-cover object-center"
            priority
          />
        ) : (
          <div className="bg-neutral-800 w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      <div className="w-full lg:w-full flex flex-col justify-center h-full mt-2 lg:mt-0 gap-5">
        {data?.tag && (
          <span className="bg-white/10 hidden lg:inline-block text-white font-medium text-xs sm:text-lg px-4 py-2 rounded-full mb-4 w-fit">
            {data.tag}
          </span>
        )}

        {data?.title && (
          <h2 className="text-2xl sm:text-3xl hidden lg:inline-block lg:text-5xl font-semibold mb-5 leading-snug">
            {data.title}
          </h2>
        )}

        {data?.description && (
          <p className="text-[#ABABAB] text-sm sm:text-lg leading-relaxed text-center lg:text-start mb-8 ">
            {data.description}
          </p>
        )}

        {button && (
          <LinkComp
            color={buttonTheme}
            href={button.href || "/"}
            className="flex items-center gap-3  text-black font-medium px-10 py-3 justify-center lg:w-fit"
          >
            {button.text}
          </LinkComp>
        )}
      </div>
    </section>
  );
}

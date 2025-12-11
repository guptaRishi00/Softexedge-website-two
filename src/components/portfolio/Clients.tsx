"use client";

import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function Clients({ data }: any) {
  if (!data) return null;

  return (
    <section className="bg-black h-auto text-white rounded-3xl py-16 px-5 lg:px-30 my-20">
      <div className="flex flex-col items-center justify-center gap-6 ">
        {/* Tag */}
        {data?.tag && (
          <span className="bg-white/10 text-white py-2 px-6 rounded-full text-sm font-medium">
            {data.tag}
          </span>
        )}

        {/* Title */}
        {data?.title && (
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-center">
            {data.title}
          </h2>
        )}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data?.images?.map((image: any, index: number) => {
          const imageUrl = getStrapiMedia(image?.url);

          if (!imageUrl) return null;

          return (
            <div
              key={image.id || index}
              className="bg-[#121212] rounded-2xl border border-[#FFFFFF0D] aspect-[4/3] flex items-center justify-center p-8 hover:border-[#FFFFFF26] transition-colors duration-300 group"
            >
              {/* Added flex, items-center, and justify-center here */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={imageUrl}
                  alt={image.name || "Client Logo"}
                  width={200}
                  height={200}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 w-10"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface ListItem {
  id: number | string;
  text: string;
}

interface ServiceHighlightProps {
  data: {
    tag?: string;
    title: string;
    description: string;
    image?: {
      url: string;
      alternativeText?: string;
    };
    lists?: ListItem[];
  };
}

export default function ServiceHighlightAlternate({
  data,
}: ServiceHighlightProps) {
  if (!data) return null;

  const imageUrl = data.image?.url
    ? getStrapiMedia(data.image.url) || data.image.url
    : null;

  return (
    <section className="w-full bg-black text-white rounded-[2rem] px-6 py-10 lg:p-16 overflow-hidden">
      {/* Header / Tag Section */}
      <div className="flex flex-col items-start gap-6 mb-12">
        {data.tag && (
          <span className="bg-[#1A1A1A] text-white/90 text-sm font-medium px-6 py-2.5 rounded-full border border-white/5">
            {data.tag}
          </span>
        )}
        {/* Horizontal Divider */}
        <div className="w-full h-px bg-white/20" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* LEFT COLUMN: Feature List (Order 2 on mobile to show text first, or Order 1 to match image exactly) */}
        {/* Based on the image, the list is on the left visually. Standard practice usually puts title first on mobile, 
            but I will follow the visual desktop layout order here. */}
        <div className="flex flex-col gap-4 justify-center order-2 lg:order-1">
          {data.lists?.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-[#111111] border border-white/5 rounded-full px-6 py-5 md:py-6 md:px-8 flex items-center gap-5 transition-colors hover:bg-[#161616] group"
            >
              {/* Blue Dot Indicator */}
              <div className="shrink-0 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] shadow-[0_0_10px_rgba(47,133,234,0.5)]" />

              {/* Text */}
              <p className="text-[#D9D9D9] text-sm md:text-base font-medium leading-snug group-hover:text-white transition-colors">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Title, Desc, Image */}
        <div className="flex flex-col gap-8 order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1]">
            {data.title}
          </h2>

          <p className="text-[#ABABAB] text-base md:text-lg leading-relaxed max-w-xl">
            {data.description}
          </p>

          {imageUrl && (
            <div className="relative w-full h-[250px] md:h-[350px] mt-4 rounded-3xl overflow-hidden">
              <Image
                src={imageUrl}
                alt={data.image?.alternativeText || data.title}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

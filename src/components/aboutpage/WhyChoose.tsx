"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Media {
  url: string;
  alternativeText?: string;
}

interface Point {
  id?: number;
  text?: string;
  icon?: { data?: { attributes: Media } } | Media;
}

interface WhyChooseData {
  tag?: string;
  title?: string;
  image?: { data?: { attributes: Media } } | Media;
  points?: Point[];
  button?: {
    text?: string;
    link?: string;
  };
}

interface WhyChooseProps {
  data?: WhyChooseData;
}

export default function WhyChoose({ data }: WhyChooseProps) {
  const imageUrl =
    (data?.image as any)?.data?.attributes?.url ||
    (data?.image as any)?.url ||
    "";

  return (
    <section className="w-full bg-black text-white rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch my-10">
      {/* Left: Image */}
      {imageUrl && (
        <div className="w-full lg:w-1/2 relative h-[300px] lg:h-auto">
          <Image
            src={imageUrl}
            alt={data?.title || "Why Choose Us"}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Right: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 lg:p-16 bg-gradient-to-b from-[#0A0A0A] to-[#000000]">
        {/* Tag */}
        {data?.tag && (
          <span className="bg-white/10 text-white text-xs sm:text-sm px-4 py-2 rounded-full w-fit mb-6">
            {data.tag}
          </span>
        )}

        {/* Title */}
        {data?.title && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 leading-snug">
            {data.title}
          </h2>
        )}

        {/* Points */}
        <ul className="flex flex-col gap-4 mb-8">
          {data?.points?.map((point, index) => {
            const iconUrl =
              (point.icon as any)?.data?.attributes?.url ||
              (point.icon as any)?.url ||
              "/icons/check.svg"; // fallback icon

            return (
              <li
                key={point.id || index}
                className="flex items-start gap-3 text-gray-300"
              >
                <Image
                  src={iconUrl}
                  alt="icon"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                <span className="text-sm sm:text-base leading-relaxed">
                  {point.text}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Button */}
        {data?.button?.text && (
          <Link
            href={data?.button?.link || "#"}
            className="w-fit bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            {data.button.text}
          </Link>
        )}
      </div>
    </section>
  );
}

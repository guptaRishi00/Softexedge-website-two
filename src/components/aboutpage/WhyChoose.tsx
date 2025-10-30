"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Media {
  url: string;
  alternativeText?: string;
}

interface List {
  id?: number;
  text?: string;
  icon?: { url?: string; name?: string };
}

interface Card {
  id?: number;
  title?: string;
  description?: string;
  icon?: { url?: string; name?: string };
}

interface WhyChooseData {
  tag?: string;
  title?: string;
  image?: { url?: string; name?: string };
  lists?: List[];
  cards?: Card[]; // added for services variant
  button?: {
    text?: string;
    link?: string;
  };
}

interface WhyChooseProps {
  data?: WhyChooseData;
}

export default function WhyChoose({ data }: any) {
  const imageUrl =
    data?.image?.url?.startsWith("http")
      ? data?.image?.url
      : data?.image?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL || "https://giving-feast-dfcaa21f17.media.strapiapp.com"}${data.image.url}`
      : "";

  return (
    <section className="lg:grid min-h-screen lg:grid-cols-2 items-center gap-10 bg-black px-5 text-white rounded-3xl my-10">
      {/* Left: Image */}
      {imageUrl && (
        <div className="w-full relative h-[300px] lg:h-full">
          <Image
            src={imageUrl}
            alt={data?.title || "Why Choose Us"}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Right: Content */}
      <div className="w-full flex flex-col justify-center p-10 lg:p-16 bg-gradient-to-b from-[#0A0A0A] to-[#000000]">
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

        {/* Lists (About Page) */}
        {data?.lists && data?.lists?.length > 0 && (
          <ul className="flex flex-col gap-4 mb-8">
            {data?.lists?.map((list: any, index: any) => (
              <li
                key={list.id || index}
                className="flex items-start gap-3 text-gray-300"
              >
                {list?.icon?.map?.((icon: any) => (
                  <Image
                    key={icon.id}
                    src={icon?.url}
                    alt={list.icon?.name || "icon"}
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                ))}
                <span className="text-sm sm:text-base leading-relaxed">
                  {list.text}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Cards (Services Page) */}
        {data?.cards && data?.cards?.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {data.cards.map((card: any, index: any) => (
              <div
                key={card.id || index}
                className="bg-white/10 p-6 rounded-2xl flex flex-col gap-3 hover:bg-white/20 transition"
              >
                {card?.icon?.url && (
                  <Image
                    src={
                      card.icon.url.startsWith("http")
                        ? card.icon.url
                        : `${process.env.NEXT_PUBLIC_STRAPI_URL || "https://giving-feast-dfcaa21f17.media.strapiapp.com"}${card.icon.url}`
                    }
                    alt={card.icon?.name || "icon"}
                    width={30}
                    height={30}
                  />
                )}
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-300">{card.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Button (About Page only) */}
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

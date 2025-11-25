"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkComp from "../LinkComp";

export default function WhyChoose({ data }: any) {
  const imageUrl = data?.image?.url;
  const button = data?.button;
  const buttonTheme = button?.theme;

  return (
    <section className="w-full lg:h-screen bg-black text-white rounded-3xl flex flex-col gap-5 lg:gap-12 lg:flex-row items-center overflow-hidden lg:justify-center lg:px-10 lg:py-10 py-8 px-6">
      {/* Left: Image */}
      {imageUrl && (
        <div className="w-full relative h-full lg:h-full">
          <Image
            src={imageUrl}
            alt={"Why Choose Us"}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      )}

      {/* Right: Content */}
      <div className="w-full lg:w-full flex flex-col justify-center h-full mt-2 lg:mt-0 ">
        {/* Tag */}
        {data?.tag && (
          <span className="bg-white/10 hidden lg:inline-block text-white text-xs sm:text-lg px-4 py-2 rounded-full mb-4 w-fit">
            {data.tag}
          </span>
        )}

        {/* Title */}
        {data?.title && (
          <h2 className="text-2xl sm:text-3xl hidden lg:inline-block lg:text-5xl mb-5 leading-snug">
            {data.title}
          </h2>
        )}

        {/* Lists (About Page) */}
        {data?.lists && data?.lists?.length > 0 && (
          <ul className="flex flex-col gap-4 mb-8">
            {data?.lists?.map((list: any, index: any) => (
              <li
                key={list.id || index}
                className="flex items-start gap-5 text-gray-300"
              >
                {list?.icon?.map?.((icon: any) => (
                  <Image
                    key={icon.id}
                    src={icon?.url}
                    alt={list.icon?.name || "icon"}
                    width={25}
                    height={25}
                    className="mt-1"
                  />
                ))}
                <span className="text-sm sm:text-lg leading-relaxed">
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
                className="p-6 rounded-2xl flex flex-col gap-3 hover:bg-white/20 transition"
              >
                {card?.icon?.url && (
                  <Image
                    src={
                      card.icon.url.startsWith("http")
                        ? card.icon.url
                        : `${
                            process.env.NEXT_PUBLIC_STRAPI_URL ||
                            "https://giving-feast-dfcaa21f17.media.strapiapp.com"
                          }${card.icon.url}`
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
          <LinkComp
            color={buttonTheme}
            href={button.href || "/"}
            className="flex items-center gap-3  text-black font-medium px-10 py-3 justify-center lg:w-fit"
          >
            {data?.button.text}
          </LinkComp>
        )}
      </div>
    </section>
  );
}

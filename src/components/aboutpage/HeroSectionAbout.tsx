"use client";

import React from "react";
import Image from "next/image";
import LinkComp from "../LinkComp";

export default function HeroSectionAbout({ data }: any) {
  const imageUrl =
    data?.image?.data?.attributes?.url ||
    data?.image?.url ||
    "/placeholder.jpg"; // fallback

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 gap-10 lg:gap-16">
        {/* LEFT TEXT SECTION */}
        <div className="flex-1 space-y-5 text-center lg:text-left">
          {/* Tagline */}
          <p className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-5 py-2 rounded-full">
            {data?.subtitle || "Some Think About Us"}
          </p>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Design that <br className="hidden lg:block" /> demands{" "}
            <span className="text-gray-900">attention</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 text-base lg:text-lg">
            {data?.description ||
              "We help your brand get found, remembered, and chosen — through SEO, social media, paid ads, influencer marketing, and content creation."}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
            <LinkComp
              href={data?.letsTalk?.href || "#"}
              color={data?.letsTalk?.theme || "primary"}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              {data?.letsTalk?.text || "Let's Talk"}
              {data?.letsTalk?.images?.map((img: any, i: number) => (
                <Image
                  key={i}
                  src={img?.url}
                  alt="avatar"
                  width={28}
                  height={28}
                  className="rounded-full border-2 border-white"
                />
              ))}
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
        <div className="flex-1 w-full max-w-lg mx-auto relative">
          {imageUrl && (
            <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={imageUrl}
                alt={data?.title || "About Hero Image"}
                width={600}
                height={500}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Subtle 3D shadow base */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-2/3 bg-gray-100 rounded-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Media {
  url: string;
  name?: string;
  alternativeText?: string;
}

interface Button {
  text?: string;
  href?: string;
  images?: { data?: { attributes: Media }[] };
  logo?: { data?: { attributes: Media } };
}

interface OurStoryData {
  tag?: string;
  title?: string;
  description?: string;
  button?: Button;
  image?: { data?: { attributes: Media } };
}

interface OurStoryProps {
  data?: OurStoryData;
}

export default function OurStory({ data }: OurStoryProps) {
  const imageUrl =
    data?.image?.data?.attributes?.url || (data as any)?.image?.url || ""; // fallback if structure differs

  const button = data?.button;
  const buttonLogo = button?.logo?.data?.attributes;
  const buttonImage = button?.images?.data?.[0]?.attributes;

  return (
    <section className="w-full bg-black text-white rounded-3xl flex flex-col lg:flex-row items-center overflow-hidden lg:justify-between lg:px-20 lg:py-16 py-10 px-6">
      {/* LEFT SIDE IMAGE */}
      <div className="relative w-full lg:w-1/2 h-[280px] sm:h-[350px] lg:h-[480px] rounded-2xl overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={data?.title || "Our Story"}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="bg-neutral-800 w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-16 mt-10 lg:mt-0">
        {data?.tag && (
          <span className="bg-white/10 text-white text-xs sm:text-sm px-4 py-2 rounded-full mb-4 w-fit">
            {data.tag}
          </span>
        )}

        {data?.title && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5 leading-snug">
            {data.title}
          </h2>
        )}

        {data?.description && (
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            {data.description}
          </p>
        )}

        {/* Button Section */}
        {button?.href && (
          <Link
            href={button.href}
            className="flex items-center gap-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium px-6 py-2 rounded-full hover:opacity-90 transition w-fit"
          >
            {/* Logo if available */}
            {buttonLogo?.url && (
              <Image
                src={buttonLogo.url}
                alt={buttonLogo.alternativeText || "Logo"}
                width={20}
                height={20}
                className="rounded-full object-contain"
              />
            )}
            {button.text || "Learn More"}
          </Link>
        )}

        {/* Optional images inside the button */}
        {buttonImage?.url && (
          <div className="mt-6 flex gap-3">
            {button?.images?.data?.map((imgObj, index) => (
              <Image
                key={index}
                src={imgObj.attributes.url}
                alt={imgObj.attributes.name || "Button Image"}
                width={50}
                height={50}
                className="rounded-md object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

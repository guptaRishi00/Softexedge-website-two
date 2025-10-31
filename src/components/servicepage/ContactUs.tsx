"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ContactUsProps {
  data: {
    bg?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
    letsTalk?: {
      text?: string;
      link?: string;
      images?: {
        data?: {
          attributes?: { url?: string; name?: string };
        }[];
      };
      logo?: {
        data?: {
          attributes?: { url?: string; name?: string };
        };
      };
    };
    viewWork?: {
      text?: string;
      link?: string;
    };
  };
}

export default function ContactUs({ data }: ContactUsProps) {
  if (!data) return null;

  const strapiUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL || "https://your-strapi-domain.com";

  // ✅ Background image
  const bgUrl = data?.bg?.data?.attributes?.url
    ? data.bg.data.attributes.url.startsWith("http")
      ? data.bg.data.attributes.url
      : `${strapiUrl}${data.bg.data.attributes.url}`
    : "/fallback-bg.jpg";

  // ✅ LetsTalk (button + avatars)
  const letsTalk = data.letsTalk || {};
  const letsTalkImages =
    letsTalk?.images?.data?.map((img) => {
      const url = img?.attributes?.url || "";
      return url.startsWith("http") ? url : `${strapiUrl}${url}`;
    }) || [];

  const letsTalkLogoUrl = letsTalk?.logo?.data?.attributes?.url
    ? letsTalk.logo.data.attributes.url.startsWith("http")
      ? letsTalk.logo.data.attributes.url
      : `${strapiUrl}${letsTalk.logo.data.attributes.url}`
    : null;

  // ✅ View Work Button
  const viewWork = data.viewWork || {};

  return (
    <section
      className="relative w-full overflow-hidden rounded-2xl py-20 px-6 text-center text-white"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-3xl mx-auto">
        {/* Small Tag */}
        {letsTalkLogoUrl && (
          <div className="flex justify-center mb-3">
            <Image
              src={letsTalkLogoUrl}
              alt="Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        )}

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Start Growing With <span className="text-blue-400">SoftXedge</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg max-w-xl">
          Digital Marketing isn’t One-Size-Fits-All. Your Business Deserves
          Strategies Built For Your Audience, Market, And Growth Goals.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Let’s Talk Button with Avatars */}
          {letsTalk?.text && (
            <Link
              href={letsTalk.link || "#"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition"
            >
              {letsTalk.text}
              {letsTalkImages.length > 0 && (
                <div className="flex -space-x-3 ml-2">
                  {letsTalkImages.map((url, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={url}
                        alt={`Avatar ${i + 1}`}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </Link>
          )}

          {/* View Our Work Button */}
          {viewWork?.text && (
            <Link
              href={viewWork.link || "#"}
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
            >
              {viewWork.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

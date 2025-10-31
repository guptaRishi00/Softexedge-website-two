"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface OurServicesProps {
  data: {
    title?: string;
    description?: string;
    cards?: {
      id?: number;
      title?: string;
      description?: string;
      image?: {
        data?: {
          attributes?: { url?: string; name?: string };
        };
      };
      button?: {
        text?: string;
        link?: string;
      };
      lists?: {
        id?: number;
        text?: string;
        icon?: {
          data?: { attributes?: { url?: string; name?: string } };
        };
      }[];
    }[];
  };
}

export default function OurServices({ data }: OurServicesProps) {
  if (!data) return null;

  const strapiUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL || "https://your-strapi-domain.com";

  const cards = data?.cards || [];

  return (
    <section className="w-full bg-black text-white rounded-2xl py-20 px-6 md:px-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
          Our Service
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Our core digital marketing services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Get discovered where it matters most — our SEO and digital marketing
          services are designed for long-term visibility and credibility.
        </p>
      </div>

      {/* Cards Grid (Desktop) */}
      <div className="hidden md:grid md:grid-cols-2 gap-10">
        {cards.map((card) => {
          const imgUrl = card?.image?.data?.attributes?.url
            ? card.image.data.attributes.url.startsWith("http")
              ? card.image.data.attributes.url
              : `${strapiUrl}${card.image.data.attributes.url}`
            : "/placeholder.png";

          return (
            <div
              key={card.id}
              className="bg-[#111111] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start"
            >
              {/* Left: Image */}
              <div className="md:w-1/2 w-full">
                <Image
                  src={imgUrl}
                  alt={card.title || "Service"}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Right: Content */}
              <div className="md:w-1/2 w-full p-6 flex flex-col space-y-4">
                {card.title && (
                  <span className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full w-fit">
                    {card.title}
                  </span>
                )}

                {card.description && (
                  <h3 className="text-2xl font-semibold">{card.description}</h3>
                )}

                {/* Lists */}
                {card.lists && card.lists.length > 0 && (
                  <ul className="space-y-2 mt-2">
                    {card.lists.map((item) => {
                      const iconUrl =
                        item.icon?.data?.attributes?.url &&
                        (item.icon.data.attributes.url.startsWith("http")
                          ? item.icon.data.attributes.url
                          : `${strapiUrl}${item.icon.data.attributes.url}`);
                      return (
                        <li
                          key={item.id}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          {iconUrl && (
                            <Image
                              src={iconUrl}
                              alt={item.text || "icon"}
                              width={18}
                              height={18}
                            />
                          )}
                          <span>{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Button */}
                {card.button?.text && (
                  <Link
                    href={card.button.link || "#"}
                    className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition"
                  >
                    {card.button.text}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
        {cards.map((card) => {
          const imgUrl = card?.image?.data?.attributes?.url
            ? card.image.data.attributes.url.startsWith("http")
              ? card.image.data.attributes.url
              : `${strapiUrl}${card.image.data.attributes.url}`
            : "/placeholder.png";

          return (
            <div
              key={card.id}
              className="min-w-[85%] bg-[#111111] rounded-2xl overflow-hidden flex-shrink-0 snap-start"
            >
              <Image
                src={imgUrl}
                alt={card.title || "Service"}
                width={600}
                height={400}
                className="object-cover w-full h-52"
              />
              <div className="p-6 space-y-3">
                {card.title && (
                  <span className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full w-fit">
                    {card.title}
                  </span>
                )}
                {card.description && (
                  <h3 className="text-xl font-semibold">{card.description}</h3>
                )}
                {card.lists && card.lists.length > 0 && (
                  <ul className="space-y-2 mt-2">
                    {card.lists.map((item) => {
                      const iconUrl =
                        item.icon?.data?.attributes?.url &&
                        (item.icon.data.attributes.url.startsWith("http")
                          ? item.icon.data.attributes.url
                          : `${strapiUrl}${item.icon.data.attributes.url}`);
                      return (
                        <li
                          key={item.id}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          {iconUrl && (
                            <Image
                              src={iconUrl}
                              alt={item.text || "icon"}
                              width={18}
                              height={18}
                            />
                          )}
                          <span>{item.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {card.button?.text && (
                  <Link
                    href={card.button.link || "#"}
                    className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition"
                  >
                    {card.button.text}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

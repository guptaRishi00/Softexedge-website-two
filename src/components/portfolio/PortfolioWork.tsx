"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/utils";
import { Search } from "lucide-react";

export default function PortfolioWork({ data }: any) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [{ id: 0, text: "All" }, ...(data?.categories || [])];

  const filteredCards = data?.cards?.filter((card: any) => {
    const matchesCategory =
      activeCategory === "All" || card.categories === activeCategory;

    const matchesSearch = card.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (!data) return null;

  return (
    <section className="bg-black h-auto text-white rounded-3xl px-5 py-10 lg:py-10 lg:px-10 my-10 space-y-10">
      <div className="flex items-center justify-center mb-10">
        <span className="bg-white/10 text-white pt-5 pb-4 text-md px-8 rounded-full w-fit font-semibold text-center  mx-auto">
          Portfolio Work
        </span>
      </div>
      <div className="w-full flex flex-col items-center gap-10">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
            {categories.map((cat: any) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.text)}
                className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                  activeCategory === cat.text
                    ? "bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white cursor-pointer border-transparent"
                    : "bg-transparent text-[#ABABAB] border-[#FFFFFF1A] hover:border-white cursor-pointer hover:text-white"
                }`}
              >
                {cat.text}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-auto min-w-[300px]">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-[#FFFFFF26] text-white rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-[#2F85EA] transition-colors placeholder:text-[#ABABAB]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ABABAB]" />
          </div>
        </div>

        <div className="w-full flex flex-col gap-8">
          {filteredCards?.map((card: any) => {
            const imageUrl = getStrapiMedia(card?.image?.url);

            return (
              <div
                key={card.id}
                className="bg-[#121212] rounded-2xl border border-[#FFFFFF1A] p-4 lg:p-6 flex flex-col lg:flex-row gap-8 hover:border-[#FFFFFF40] transition-colors duration-300"
              >
                <div className="w-full lg:w-1/2 h-[300px] lg:h-[450px] relative rounded-3xl overflow-hidden bg-black/50">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={card.title || "Project Image"}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  )}
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-6 lg:pr-10 py-4">
                  <span className="bg-[#1F1F1F] text-[#ABABAB] text-xs font-medium px-4 py-1.5 rounded-full border border-[#FFFFFF1A]">
                    {card.tag}
                  </span>

                  <h3 className="text-3xl lg:text-5xl font-medium text-white leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-[#ABABAB] text-sm lg:text-base leading-relaxed max-w-xl">
                    {card.description}
                  </p>

                  {card.lists && card.lists.length > 0 && (
                    <ul className="flex flex-col gap-2 pl-1">
                      {card.lists.map((item: any) => (
                        <li
                          key={item.id}
                          className="flex items-start gap-3 text-[#ABABAB] text-sm lg:text-base"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ABABAB] shrink-0" />
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  )}

                  {card.button && (
                    <div className="mt-4">
                      <Link
                        href={card.button.href || "#"}
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white font-medium text-sm lg:text-base hover:opacity-90 transition-opacity shadow-lg shadow-blue-900/20"
                      >
                        {card.button.text}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCards?.length === 0 && (
          <div className="text-[#ABABAB] py-20 text-lg text-center w-full bg-[#121212] rounded-3xl border border-[#FFFFFF1A]">
            No projects found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
}

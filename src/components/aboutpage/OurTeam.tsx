"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TeamImage {
  id: number;
  url: string;
  alternativeText?: string;
}

interface ButtonData {
  text?: string;
  href?: string;
}

interface OurTeamProps {
  data: {
    tag?: string;
    title?: string;
    images?: TeamImage[];
    button?: ButtonData;
    theme?: string;
  };
}

export default function OurTeam({ data }: OurTeamProps) {
  return (
    <section className="bg-black rounded-3xl px-6 py-16 md:px-12 md:py-20 flex flex-col items-center justify-center gap-10 w-full">
      {/* Tag */}
      {data?.tag && (
        <p className="text-white/70 text-sm border border-white/10 px-4 py-2 rounded-full">
          {data.tag}
        </p>
      )}

      {/* Title */}
      {data?.title && (
        <h2 className="text-white text-3xl md:text-5xl font-semibold text-center">
          {data.title}
        </h2>
      )}

      {/* Team Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-6 w-full max-w-6xl">
        {data?.images?.map((img) => (
          <div
            key={img.id}
            className="flex flex-col items-center justify-center  rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full aspect-[3/4]">
              {img.url && (
                <Image
                  src={img.url}
                  alt={img.alternativeText || "Team Member"}
                  fill
                   className="object-cover inset-0 w-full h-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {data?.button?.text && (
        <Link
          href={data.button.href || "#"}
          className="mt-8 bg-gradient-to-r from-[#007CF0] to-[#00DFD8] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {data.button.text}
        </Link>
      )}
    </section>
  );
}

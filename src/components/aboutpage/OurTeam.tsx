"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TeamMember {
  id: number;
  name: string;
  image: {
    url: string;
    alternativeText?: string;
  };
}

interface OurTeamProps {
  data: {
    title: string;
    subtitle: string;
    button?: {
      text: string;
      href: string;
      theme?: string;
    };
    members: TeamMember[];
  };
}

export default function OurTeam({ data }: OurTeamProps) {
  return (
    <section className="bg-black rounded-3xl px-6 py-16 md:px-12 md:py-20 flex flex-col items-center justify-center gap-10 w-full">
      {/* Tag */}
      <p className="text-white/70 text-sm border border-white/10 px-4 py-2 rounded-full">
        {data?.subtitle}
      </p>

      {/* Heading */}
      <h2 className="text-white text-3xl md:text-5xl font-semibold text-center">
        {data?.title}
      </h2>

      {/* Team Members */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-6 w-full max-w-6xl">
        {data?.members?.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center justify-center bg-[#111] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={member.image.url}
                alt={member.image.alternativeText || member.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <p className="text-white text-base font-medium py-4">
              {member.name}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {data?.button && (
        <Link
          href={data.button.href || "/"}
          className="mt-8 bg-gradient-to-r from-[#007CF0] to-[#00DFD8] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {data.button.text}
        </Link>
      )}
    </section>
  );
}

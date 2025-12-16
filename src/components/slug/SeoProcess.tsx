"use client";

import React from "react";
import Link from "next/link";
import { Globe, Shapes, Trophy, Rocket } from "lucide-react";
import Image from "next/image";

const features = [
  "Live performance dashboards",
  "Detailed monthly reports with actionable insights",
  "Proactive consultations to stay ahead of competitors",
];

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    icon: Globe,
    description:
      "We design complete brand identities, craft compelling messaging, and create visuals that make you stand out.",
  },
  {
    id: 2,
    title: "Strategy",
    icon: Shapes,
    description:
      "We design complete brand identities, craft compelling messaging, and create visuals that make you stand out.",
  },
  {
    id: 3,
    title: "Execution",
    icon: Trophy,
    description:
      "We design complete brand identities, craft compelling messaging, and create visuals that make you stand out.",
  },
  {
    id: 4,
    title: "Reporting",
    icon: Rocket,
    description:
      "We design complete brand identities, craft compelling messaging, and create visuals that make you stand out.",
  },
];

export default function SeoProcess({ data }: any) {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-10 lg:px-16 rounded-[3rem] overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* Top Tag */}
        <div className="bg-[#1A1A1A] px-6 py-2 rounded-full border border-white/10 mb-8">
          <span className="text-xs md:text-sm text-gray-300 font-medium">
            {data?.tag}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-12">
          {data?.title}
        </h2>

        {/* Features Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 w-full">
          {data?.lists?.map((feature: any, index: any) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#111] border border-white/10 px-6 py-3 rounded-full"
            >
              {/* Updated Dot with Gradient */}
              <Image
                src={feature.icon.url}
                width={16}
                height={16}
                alt="icon"
                className="w-4 h-4 object-contain"
              />

              <span className="text-sm text-gray-300">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {data?.cards?.map((step: any) => (
            <div
              key={step.id}
              className="bg-[#0D0D0D] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-[#141414] transition-colors duration-300 group"
            >
              {/* Icon Box with New Gradient */}
              <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] flex items-center justify-center mb-8 group-hover:scale-105 transition-transform">
                <Image
                  src={step.icon.url}
                  width={30}
                  height={30}
                  alt="icon"
                  className="object-cover object-center"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button with New Gradient */}
        <Link
          href="/services"
          className="inline-block bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity "
        >
          View More Services
        </Link>
      </div>
    </section>
  );
}

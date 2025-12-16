import React from "react";
import Image from "next/image";
import { Share2, Megaphone, Globe } from "lucide-react";

export default function SeoApproach({ data }: any) {
  return (
    <section className="bg-black h-auto text-white rounded-3xl px-5 py-10 lg:py-10 lg:px-10 my-10 space-y-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        {/* Top Tag */}
        <div className="bg-[#1A1A1A] px-5 py-2 rounded-full border border-white/10">
          <span className="text-xs text-gray-300 font-medium">{data?.tag}</span>
        </div>

        <div className="bg-[#FFFFFF80] h-px w-full"></div>

        {/* Main Hero Image */}
        <div className="w-full relative h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden border border-white/5">
          <Image
            // Using a placeholder image similar to the reference (man in suit looking at papers)
            src={data?.image?.url}
            alt="SEO Approach Analysis"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Headings */}
        <div className="text-center max-w-3xl space-y-4 mt-4">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            {data?.title}
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light">
            {data?.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
          {data?.cards.map((item: any, index: any) => (
            <div
              key={index}
              className="bg-[#111111] p-8 md:p-10 rounded-xl flex flex-col items-center text-center gap-5 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="mb-2 text-white">
                <Image
                  src={item.icon.url}
                  width={60}
                  height={60}
                  alt="icon"
                  className="lg:w-10 lg:h-10"
                />
              </div>

              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

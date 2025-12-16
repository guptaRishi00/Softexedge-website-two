"use client";
import Image from "next/image";

export default function SeoMetrics({ data }: any) {
  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-8 lg:px-0 rounded-[3rem] overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center">
        {/* Top Tag */}
        <div className="bg-[#1A1A1A] px-5 py-2 rounded-full border border-white/10 mb-10">
          <span className="text-xs text-gray-300 font-medium tracking-wide">
            {data.tag}
          </span>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-white/10 mb-12 max-w-4xl" />

        {/* Header Text */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight">
            {data.title}
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light">
            {data.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full w-full lg:px-20">
          {data?.cards?.map((item: any) => (
            <div
              key={item.id}
              className="bg-[#0A0A0A] border border-white/10 rounded-xl h-64 flex flex-col items-center justify-center gap-6 hover:bg-[#111] transition-colors duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={item.icon.url}
                  width={30}
                  height={30}
                  alt="icon"
                  className="object-cover object-center"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-medium text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

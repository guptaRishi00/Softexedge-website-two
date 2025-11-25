import Image from "next/image";
import React from "react";

type Props = {
  data: any; // You can refine this type later based on your actual data structure
};

export default function OurValues({ data }: Props) {
  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-8 px-4 gap-6 lg:gap-10 lg:py-10 lg:px-10 overflow-hidden">
      {/* Tag */}
      <p className="bg-white/10 text-white pt-2 pb-1 px-4 text-sm lg:text-base rounded-full">
        {data?.tag}
      </p>

      {/* Divider */}
      <div className="bg-[#E5E5E5] h-px w-full opacity-20"></div>

      {/* Title */}
      <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl flex flex-col text-center items-center gap-2 text-white">
        {data?.title}
      </h1>

      {/* Description */}
      <p className="text-[#ABABAB] text-base md:text-lg lg:text-xl text-center max-w-3xl">
        {data?.description}
      </p>

      {/* Cards Grid */}
      {/* Changed to grid-cols-1 for mobile, 2 for tablet+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-4 lg:gap-5 w-full">
        {data?.cards?.map((card: any) => (
          <div
            className="w-full h-full bg-[#121212] border border-[#FFFFFF26] flex flex-col items-center justify-center text-center rounded-2xl gap-4 p-8 md:p-10 lg:p-20 transition-colors hover:bg-[#1a1a1a]"
            key={card.id}
          >
            <div className="relative w-16 h-16 lg:w-20 lg:h-20">
              <Image
                src={card.image.url}
                fill
                sizes="(max-width: 768px) 64px, 80px"
                alt="card image"
                className="object-contain rounded-2xl"
              />
            </div>

            <p className="text-white text-lg md:text-xl lg:text-2xl font-medium">
              {card.tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";

type Props = {
  data: any;
};

export default function Application({ data }: Props) {
  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-8 px-4 gap-8 lg:gap-10 lg:py-10 lg:px-10 overflow-hidden">
      {/* Title */}
      <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl flex flex-col text-center items-center gap-2 text-white">
        {data?.title}
      </h1>

      {/* Description */}
      <p className="text-[#ABABAB] text-base md:text-xl text-center max-w-3xl">
        {data?.description}
      </p>

      {/* Cards Grid */}
      {/* Uses grid-cols-1 for mobile, 2 for tablet/desktop. 
          If you have exactly 3 cards, change md:grid-cols-2 to md:grid-cols-3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
        {data?.cards?.map((card: any) => (
          <div
            className="w-full h-full bg-[#121212] border border-[#FFFFFF26] flex flex-col items-center justify-center text-center p-8 md:p-14 lg:p-20 rounded-2xl gap-6 transition-colors hover:bg-[#1a1a1a]"
            key={card.id}
          >
            <div className="relative w-20 h-20">
              <Image
                src={card.image.url}
                width={100}
                height={100}
                alt="card image"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>

            <p className="text-white text-xl lg:text-2xl font-medium">
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

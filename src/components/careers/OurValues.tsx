import Image from "next/image";
import React from "react";

type Props = {};

export default function OurValues({ data }: any) {
  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-10 lg:gap-10 lg:py-10 lg:px-10 overflow-hidden">
      <p className="bg-white/10 text-white pt-3 pb-2 px-4 rounded-full">
        {data?.tag}
      </p>
      <div className="bg-[#E5E5E5] h-px w-full"></div>
      <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
        {data?.title}
      </h1>

      <p className="text-[#ABABAB] text-xl text-center lg:text-center">
        {data?.description}
      </p>

      <div className="grid grid-cols-2 items-center gap-5 w-full">
        {data?.cards?.map((card: any) => (
          <div
            className="w-full h-full bg-[#121212] border border-[#FFFFFF26] flex flex-col items-center justify-center p-20 rounded-2xl gap-5"
            key={card.id}
          >
            <Image
              src={card.image.url}
              width={100}
              height={100}
              alt="card image"
              className="w-20 rounded-2xl"
            />
            <p className="text-white text-2xl">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

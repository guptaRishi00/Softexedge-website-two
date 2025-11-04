import Image from "next/image";
import React from "react";

type Props = {};

export default function Application({ data }: any) {
  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-10 lg:gap-10 lg:py-10 lg:px-10 overflow-hidden">
      <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
        {data?.title}
      </h1>

      <p className="text-[#ABABAB] text-xl text-center lg:text-center">
        {data?.description}
      </p>

      <div className="flex items-center gap-8 w-full">
        {data?.cards?.map((card: any) => (
          <div
            className="w-full h-full bg-[#121212] border border-[#FFFFFF26] flex flex-col items-center justify-center p-20 rounded-2xl gap-8"
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

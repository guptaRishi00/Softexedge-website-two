import Image from "next/image";
import React from "react";

type Props = {};

export default function WhyWork({ data }: any) {
  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-start py-10 lg:gap-10 lg:py-10 lg:px-10 overflow-hidden">
      <p className="bg-white/10 text-white pt-3 pb-2 px-4 rounded-full">
        {data?.tag}
      </p>
      <div className="bg-[#E5E5E5] h-px w-full"></div>

      <div className="flex items-center justify-between gap-10 w-full">
        <div className="flex flex-col items-start gap-10 w-full">
          <p className="text-white font-medium text-5xl">{data?.title}</p>
          <p className="text-white text-lg max-w-xl">{data?.description}</p>
          <Image
            src={data?.image.url}
            width={500}
            height={500}
            alt="card image"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full flex flex-col justify-between items-start gap-6">
          {data.lists?.map((list: any, index: number) => (
            <div
              className="flex items-center gap-5 bg-[#121212] py-8 rounded-4xl px-8 w-full"
              key={index}
            >
              {list.icon.map((ico: any) => (
                <Image
                  key={ico.id}
                  src={ico?.url}
                  width={20}
                  height={20}
                  alt="card image"
                  className="w-5 rounded-2xl"
                />
              ))}
              <p className="text-white text-xl">{list.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

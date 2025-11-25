import Image from "next/image";
import React from "react";

type Props = {
  data: any;
};

export default function WhyWork({ data }: Props) {
  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-start py-8 px-5 gap-8 lg:gap-10 lg:py-10 lg:px-10 overflow-hidden">
      {/* Tag */}
      <p className="bg-white/10 text-white pt-2 pb-1 px-4 text-sm lg:text-base rounded-full">
        {data?.tag}
      </p>

      {/* Divider */}
      <div className="bg-[#E5E5E5] h-px w-full opacity-20"></div>

      {/* Main Content Wrapper: Stacks on mobile, Row on Desktop */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 w-full">
        {/* Left Column: Title, Desc, Image */}
        <div className="flex flex-col items-start gap-6 lg:gap-10 w-full lg:w-1/2">
          <h2 className="text-white font-medium text-3xl md:text-4xl lg:text-5xl">
            {data?.title}
          </h2>
          <p className="text-white text-base md:text-lg max-w-xl text-[#ABABAB]">
            {data?.description}
          </p>

          {data?.image?.url && (
            <div className="w-full relative h-auto">
              <Image
                src={data.image.url}
                width={500}
                height={500}
                alt="section image"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          )}
        </div>

        {/* Right Column: List Items */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-4 lg:gap-6">
          {data.lists?.map((list: any, index: number) => {
            // Normalize 'icon' to an array
            const icons = list.icon
              ? Array.isArray(list.icon)
                ? list.icon
                : [list.icon]
              : [];

            return (
              <div
                className="flex items-center gap-4 lg:gap-5 bg-[#121212] py-5 px-6 lg:py-8 lg:px-8 rounded-2xl lg:rounded-[2rem] w-full transition-colors hover:bg-[#1a1a1a]"
                key={index}
              >
                {/* Icon Wrapper: Prevent shrinking if text is long */}
                <div className="flex shrink-0 gap-2">
                  {icons.map((ico: any) => (
                    <Image
                      key={ico.id}
                      src={ico?.url}
                      width={24}
                      height={24}
                      alt="icon"
                      className="w-5 h-5 lg:w-6 lg:h-6 rounded-full object-contain"
                    />
                  ))}
                </div>

                <p className="text-white text-lg lg:text-xl font-medium leading-tight">
                  {list.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

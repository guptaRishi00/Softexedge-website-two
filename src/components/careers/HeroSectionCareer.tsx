import Image from "next/image";
import React from "react";

export default async function HeroSectionCareer({ data }: any) {
  return (
    <section className="w-full h-auto bg-white px-5 py-6 lg:pt-24 top-0 left-0 lg:px-18">
      <div className="w-full flex flex-col items-center justify-center gap-10 lg:gap-10 ">
        <div className="space-y-9 flex flex-col items-center lg:items-center justify-between text-center lg:text-start  h-full">
          <p className="inline-block bg-[#0000001A] text-black text-sm px-5 py-2 rounded-full w-fit">
            {data?.tag}
          </p>

          {/* Title */}
          <h1 className="text-2xl sm:text-5xl lg:text-7xl lg:text-center max-w-5xl font-medium text-black">
            {data?.title}
          </h1>

          <p className="text-black mx-auto lg:mx-0 text-xs lg:max-w-xl text-center lg:text-xl ">
            {data?.description}
          </p>
        </div>

        {/* RIGHT SINGLE IMAGE */}
        <div className="mx-auto h-full overflow-hidden lg:flex items-center justify-end relative w-full">
          <Image
            src={data?.image?.url}
            alt={data?.title || "About Hero Image"}
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

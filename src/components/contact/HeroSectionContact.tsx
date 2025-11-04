import Image from "next/image";
import React from "react";

export default function HeroSectionContact({ data }: any) {
  return (
    <section className="w-full h-screen bg-white px-5 py-6 lg:pt-24 top-0 left-0 lg:px-18 ">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10">
        <div className="space-y-9 flex flex-col items-center lg:items-start justify-between text-center lg:text-start  h-full">
          {/* Title */}
          <h1 className="text-2xl sm:text-5xl lg:text-8xl max-w-3xl font-medium text-black">
            {data?.title}
          </h1>

          <p className="text-black mx-auto lg:mx-0 text-xs lg:max-w-xl  lg:text-xl ">
            {data?.description}
          </p>
        </div>

        {/* RIGHT SINGLE IMAGE */}
        <div className="overflow-hidden lg:flex items-center justify-end relative ">
          <div className="lg:w-[600px] lg:h-full overflow-hidden rounded-2xl">
            <Image
              src={data?.image?.url}
              alt={data?.title || "About Hero Image"}
              width={700}
              height={700}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"; // Required for useState

import Image from "next/image";
import React, { useState } from "react"; // Import useState
import { HiOutlineArrowSmUp } from "react-icons/hi";

export default function WhyChoose({ data }: any) {
  const [openIndex, setOpenIndex] = useState<any>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col lg:flex-row py-8 lg:gap-16 lg:py-10 lg:px-12 overflow-hidden">
      {/* Text Content Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start justify-center gap-8 px-5 lg:px-0">
          <p className="bg-white/10 text-white lg:text-base text-sm py-2 px-4 rounded-full">
            {data?.tag}
          </p>
          <h1 className="font-medium text-2xl lg:text-5xl flex flex-col text-center items-center lg:text-start lg:items-start gap-2 lg:gap-5 text-white">
            {data?.title}
          </h1>
        </div>

        <div className="mt-10 lg:mt-16 px-5 lg:px-0">
          {data?.textBlock?.map((faq: any, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-white/20 last:border-b-0"
              >
                <div
                  className="flex items-center justify-between py-5 cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  <p className="text-white font-medium text-xl lg:text-2xl pr-4">
                    {faq.title}
                  </p>
                  <span
                    className={`transform transition-transform duration-300 border border-white p-3 rounded-full ${
                      isOpen ? "bg-white text-black" : "rotate-180 text-white"
                    }`}
                  >
                    <HiOutlineArrowSmUp size={30} />
                  </span>
                </div>

                {isOpen && (
                  <div className="pb-5 pr-8">
                    <p className="text-[#ABABAB] lg:max-w-xl lg:text-xl">
                      {faq.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 px-5 lg:px-0">
        {data?.image?.map((img: any, index: number) => (
          <Image
            key={index}
            src={img.url}
            width={700}
            height={700}
            alt="card image"
            className="w-full h-full object-cover object-center mx-auto rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
}

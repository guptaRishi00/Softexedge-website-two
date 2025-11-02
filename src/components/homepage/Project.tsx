"use client";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Project({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === data?.cards?.length - 1) return 0;
      return index + 1;
    });
  }, [data?.cards?.length]);

  useEffect(() => {
    if (data?.cards?.length > 0) {
      const interval = setInterval(showNext, 5000);
      return () => clearInterval(interval);
    }
  }, [showNext, data?.cards?.length]);

  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-10 lg:gap-16 lg:py-10 lg:px-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="bg-white/10 text-white pt-3 pb-2 px-4 rounded-full">
          {data?.tag}
        </p>
        <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
          {data?.title}
        </h1>
      </div>

      <div className="hidden lg:grid grid-cols-2 gap-10">
        {data?.card?.map((card: any) => (
          <div className="flex flex-col items-center gap-3" key={card.id}>
            <div className="w-[640px] h-[500px] border border-[#2A2A2A] rounded-3xl overflow-hidden">
              <video width="700" autoPlay loop muted playsInline controls>
                <source src={card.image.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex items-center gap-3 justify-between w-full px-2">
              <p className="text-white">{card.tag}</p>
              <Link href={card.href || "/"}>
                <GoArrowUpRight color="white" size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex w-full transition-transform duration-500  ease-in-out lg:hidden"
        style={{ transform: `translateX(${-100 * currentIndex}%)` }}
      >
        {data?.card?.map((card: any) => (
          <div
            className="w-full shrink-0 grow-0 flex items-center justify-center my-10"
            key={card.id}
          >
            <div className="flex flex-col items-center gap-3 w-full px-5">
              <div className="w-full h-auto border border-[#2A2A2A] rounded-3xl overflow-hidden">
                <video className="w-full" controls>
                  <source src={card.image.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center gap-3 justify-between w-full px-2">
                <p className="text-white">{card.tag}</p>
                <Link href={card.href || "/"}>
                  <GoArrowUpRight color="white" size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex lg:hidden justify-center items-center gap-3 pt-4">
        {data?.card?.map((_: any, index: any) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-1 rounded-full border border-white transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`View Project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

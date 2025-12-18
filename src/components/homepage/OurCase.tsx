"use client";
import React, { useState, useEffect } from "react";
import Button from "../Button";
import Image from "next/image";
import LinkComp from "../LinkComp";
import { motion, AnimatePresence } from "framer-motion";

export default function OurCase({ data }: any) {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // State for vertical text carousel
  const [textIndex, setTextIndex] = useState(0);
  const textArray = data?.textArray || [];

  useEffect(() => {
    if (textArray.length <= 1) return;
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [textArray]);

  const cards = data?.cards[activeTab];
  const theme = cards?.button?.theme;

  // Handler for mobile dot navigation
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-auto bg-black rounded-3xl lg:grid lg:grid-cols-2 py-10 lg:gap-16 lg:py-10 lg:px-12 overflow-hidden">
      <div className="flex flex-col items-start justify-between h-full">
        <div className="flex flex-col items-center lg:items-start justify-center gap-8 px-5 lg:px-0">
          <p className="bg-white/10 text-white pt-3 pb-2 px-4 rounded-full">
            {data?.tag}
          </p>
          <h1 className="font-medium text-2xl lg:text-6xl flex flex-col text-center items-center lg:items-start gap-2 lg:gap-5 text-white">
            {data?.title.split(" ").slice(0, 3).join(" ")}
            <div className="flex gap-2 items-center justify-center lg:justify-start">
              {data?.title.split(" ").slice(3, 4).join(" ")}

              <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white rounded-md px-1.5 py-[0.5px] leading-none inline-flex flex-col h-[1.2em] overflow-hidden relative min-w-[100px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={textIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="whitespace-nowrap"
                  >
                    {textArray[textIndex]?.text}
                  </motion.span>
                </AnimatePresence>
              </span>

              {data?.title.split(" ").slice(5, 6).join(" ")}
            </div>
          </h1>

          <p className="text-[#ABABAB] max-w-lg text-center lg:text-start">
            {data?.description}
          </p>
        </div>

        <div className="relative hidden lg:flex items-center gap-5 border-b-2 transition-all border-white/30 py-2">
          {data?.tabs?.map((tab: any, index: number) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="relative pb-2 text-white cursor-pointer"
            >
              {tab?.text}
              {activeTab === index && (
                <motion.span
                  layoutId="activeTabUnderline"
                  className="absolute bottom-[-9px] left-0 w-full h-px bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Card Section with Framer Motion */}
      <div className="bg-[#121212] rounded-2xl px-5 py-8 hidden lg:flex flex-col gap-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-medium">{cards.title}</h1>
              <LinkComp
                href={cards?.button?.href || "/"}
                color={theme}
                className="px-5 pb-2 pt-3 bg-white"
              >
                {cards?.button?.text}
              </LinkComp>
            </div>
            <div className="w-full lg:h-[330px] p-2 overflow-hidden rounded-sm">
              {cards?.image?.url && (
                <Image
                  src={cards.image.url}
                  width={300}
                  height={300}
                  alt="card image"
                  className="w-full object-cover object-center mx-auto"
                />
              )}
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5 text-lg">
                <p className="text-white font-medium shrink-0">
                  {cards?.challenge?.title}
                </p>
                <p className="text-[#ABABAB]">
                  {cards?.challenge?.description}
                </p>
              </div>
              <div className="flex gap-8 text-lg">
                <p className="text-white font-medium shrink-0">
                  {cards?.solution?.title}
                </p>
                <p className="text-[#ABABAB] max-w-lg">
                  {cards?.solution?.description}
                </p>
              </div>
              <div className="flex gap-12 text-lg">
                <p className="text-white font-medium shrink-0">Result:</p>
                <div className="flex flex-col gap-2">
                  {cards?.result?.lists.map((list: any, index: number) => (
                    <p className="text-[#ABABAB]" key={index}>
                      {list?.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Carousel Section */}
      <div className="lg:hidden w-full mt-10">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${-100 * currentIndex}%)` }}
          >
            {/* Note: Mobile carousel usually renders all cards 
              so users can swipe/navigate through them.
            */}
            {data?.cards?.map((card: any, index: number) => (
              <div className="w-full shrink-0 grow-0 px-5" key={index}>
                <div className="bg-[#121212] rounded-2xl px-5 py-8 flex flex-col gap-8">
                  <div className="flex items-center justify-between">
                    <h1 className="text-white font-medium">{card.title}</h1>

                    <LinkComp
                      href={card?.button?.href || "/"}
                      color={card?.button?.theme || "blue"}
                      className="text-xs px-5 "
                    >
                      {card?.button?.text}
                    </LinkComp>
                  </div>
                  <div className="w-full h-auto p-2 overflow-hidden">
                    {card?.image?.url && (
                      <Image
                        src={card.image.url}
                        width={300}
                        height={300}
                        alt="card image"
                        className="w-full object-cover object-center mx-auto"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-5">
                      <p className="text-white font-medium shrink-0">
                        {card?.challenge?.title}
                      </p>
                      <p className="text-[#ABABAB] text-sm">
                        {card?.challenge?.description}
                      </p>
                    </div>
                    <div className="flex gap-8">
                      <p className="text-white font-medium shrink-0">
                        {card?.solution?.title}
                      </p>
                      <p className="text-[#ABABAB] text-sm">
                        {card?.solution?.description}
                      </p>
                    </div>
                    <div className="flex gap-12">
                      <p className="text-white font-medium shrink-0">Result:</p>
                      <div className="flex flex-col gap-2">
                        {card?.result?.lists.map(
                          (list: any, resIndex: number) => (
                            <p
                              className="text-[#ABABAB] text-sm"
                              key={resIndex}
                            >
                              {list?.text}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center items-center gap-3 pt-4">
          {data?.cards?.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-1.5 w-1.5 rounded-full border border-white transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-transparent hover:bg-white/50"
              }`}
              aria-label={`View Project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

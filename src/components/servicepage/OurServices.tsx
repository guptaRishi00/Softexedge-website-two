"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import LinkComp from "../LinkComp";

export default function OurServices({ data }: any) {
  if (!data) return null;

  const cards = data?.cards || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === cards.length - 1) return 0;
      return index + 1;
    });
  }, [cards.length]);

  useEffect(() => {
    if (cards.length > 0) {
      const interval = setInterval(showNext, 5000);
      return () => clearInterval(interval);
    }
  }, [showNext, cards.length]);

  const MobileCard = ({ card }: any) => (
    <div className="flex flex-col gap-6 p-2 w-full items-center">
      <span className="bg-white/10 text-white pt-2 pb-1 px-5 text-xs rounded-full w-fit">
        {card?.tag}
      </span>

      <h2 className="text-xl font-medium text-center">{card?.title}</h2>

      <p className="text-gray-400 text-center">{card?.description}</p>

      <div className="rounded-lg w-full bg-[#1A1A1A] overflow-hidden">
        <Image
          src={card?.image?.url}
          alt={card?.title}
          width={700}
          height={700}
          className="object-cover w-full"
        />
      </div>

      <div className="flex flex-col gap-4">
        {card?.lists.map((list: any) => (
          <div className="flex items-center gap-3" key={list.id}>
            <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]"></div>
            <p>{list.text}</p>
          </div>
        ))}
      </div>

      <LinkComp
        color={card?.button?.theme || "blue"}
        href={card?.button?.href || "/"}
        className="flex items-center gap-3 text-white font-medium px-10 text-xs text-center py-3 justify-center w-full"
      >
        {card?.button?.text}
      </LinkComp>
    </div>
  );

  const DesktopCard = ({ card }: any) => (
    <div className="flex items-center justify-center gap-10">
      <div className="relative rounded-lg w-auto bg-[#1A1A1A] overflow-hidden">
        <Image
          src={card?.image?.url}
          alt={card?.title}
          width={700}
          height={700}
          className="object-cover w-[700px] h-[700px] rounded-2xl"
        />
      </div>

      <div className="flex flex-col gap-8 items-start">
        <span className="bg-white/10 text-white pt-2 pb-1 px-5 rounded-full">
          {card?.tag}
        </span>
        <h2 className="text-6xl max-w-2xl font-medium">{card?.title}</h2>
        <p className="text-gray-400 max-w-2xl text-lg">{card?.description}</p>

        {card?.lists.map((list: any) => (
          <div className="flex items-center gap-3" key={list.id}>
            <div className="w-2 h-2 rounded-full bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3]"></div>
            <div className="flex flex-col">
              <p>{list.text}</p>
              {list.description && (
                <p className="text-[#FFFFFF] text-xs">{list.description}</p>
              )}
            </div>
          </div>
        ))}

        <LinkComp
          color={card?.button?.theme || "blue"}
          href={card?.button?.href || "/"}
          className="flex items-center gap-3 text-black font-medium px-10 py-3 justify-center w-fit"
        >
          {card?.button?.text}
        </LinkComp>
      </div>
    </div>
  );

  return (
    <section className="w-full h-auto bg-black text-white rounded-2xl py-20 px-6 md:px-12 space-y-10 overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center gap-10">
        <span className="bg-white/10 text-white pt-3 pb-2 px-5 rounded-full">
          {data?.tag}
        </span>
        <h2 className="text-3xl lg:text-6xl font-medium">{data?.title}</h2>
        <p className="text-gray-400 lg:max-w-5xl mx-auto lg:text-lg">
          {data?.description}
        </p>
      </div>

      <div className="hidden lg:flex flex-col w-full items-start justify-center gap-10">
        {cards.map((card: any) => (
          <DesktopCard key={card.id} card={card} />
        ))}
      </div>

      <div className="lg:hidden w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${-100 * currentIndex}%)` }}
        >
          {cards.map((card: any) => (
            <div className="w-full shrink-0 grow-0" key={card.id}>
              <MobileCard card={card} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex lg:hidden justify-center items-center gap-3 pt-4">
        {cards.map((_: any, index: any) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full border border-white transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-transparent hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

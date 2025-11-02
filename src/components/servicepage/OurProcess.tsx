"use client";

// 1. Import React hooks
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface ListItem {
  text: string;
  icon?: { url: string; name: string }[];
}

interface Card {
  image?: { url: string; name: string };
  tag?: string;
  title: string;
  description: string;
  lists?: ListItem[];
}

interface TagItem {
  text: string;
  icon?: { url: string; name: string }[];
}

interface OurProcessProps {
  data: {
    tag?: string;
    title: string;
    tags?: TagItem[];
    cards?: Card[];
  };
}

export default function OurProcess({ data }: OurProcessProps) {
  if (!data) return null;

  const { tag, title, tags, cards } = data;

  // 2. Add carousel state and logic
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === (cards?.length || 0) - 1) return 0;
      return index + 1;
    });
  }, [cards?.length]);

  useEffect(() => {
    if (cards && cards.length > 0) {
      const interval = setInterval(showNext, 5000);
      return () => clearInterval(interval);
    }
  }, [showNext, cards?.length]);

  // Re-usable function to render a single card
  const renderCard = (card: Card, index: number) => (
    <div
      key={index}
      className="bg-[#121212] p-6 rounded-xl flex flex-col items-center text-center hover:bg-gray-800 transition-all h-full"
    >
      {/* Card Image */}
      {card.image?.url && (
        <div className="mb-4">
          <Image
            src={card.image.url}
            alt={card.image.name || "card image"}
            width={50}
            height={50}
          />
        </div>
      )}

      {/* Card Title */}
      <h3 className="text-2xl mb-5 font-medium">{card.title}</h3>

      {/* Card Description */}
      <p className="text-gray-400 text-lg mb-4">{card.description}</p>

      {/* Card Lists */}
      {card.lists && card.lists.length > 0 && (
        <div className="flex flex-col gap-2">
          {card.lists.map((list, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-gray-300 text-sm justify-center"
            >
              {list.icon && list.icon[0]?.url && (
                <Image
                  src={list.icon[0].url}
                  alt={list.icon[0].name || "icon"}
                  width={16}
                  height={16}
                />
              )}
              <span>{list.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    // 3. Add overflow-hidden to the main section
    <section className="bg-black text-white py-20 px-6 md:px-12 rounded-2xl overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center text-center gap-10">
        {/* Section Tag */}
        {tag && (
          <p className="bg-white/10 text-white pt-3 pb-2 px-5 rounded-full w-fit">
            {tag}
          </p>
        )}

        {/* Title */}
        <h2 className="text-3xl lg:text-6xl font-medium leading-snug">
          {title}
        </h2>

        {/* Tags Row */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tags.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-[#121212] px-5 border border-[#FFFFFF1A] py-4 rounded-full text-sm text-gray-200"
              >
                {item.icon && item.icon[0]?.url && (
                  <Image
                    src={item.icon[0].url}
                    alt={item.icon[0].name || "icon"}
                    width={13}
                    height={13}
                  />
                )}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* 4. DESKTOP Cards Grid (hidden on mobile) */}
        {cards && cards.length > 0 && (
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {cards.map((card, index) => renderCard(card, index))}
          </div>
        )}

        {/* 5. MOBILE Carousel (hidden on lg) */}
        <div className="w-full lg:hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${-100 * currentIndex}%)` }}
          >
            {cards?.map((card, index) => (
              <div
                key={`mobile-${index}`}
                className="w-full shrink-0 grow-0 flex items-center justify-center px-2" // Added px-2 for spacing
              >
                {renderCard(card, index)}
              </div>
            ))}
          </div>
        </div>

        {/* 6. DOTS (hidden on lg) */}
        <div className="flex lg:hidden justify-center items-center gap-3 pt-4">
          {cards?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full border border-white transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-transparent hover:bg-white/50"
              }`}
              aria-label={`View Process Step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

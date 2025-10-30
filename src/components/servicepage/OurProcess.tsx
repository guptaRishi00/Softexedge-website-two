"use client";

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

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Tag */}
        {tag && (
          <p className="inline-block bg-gray-900 text-gray-300 text-sm px-4 py-1 rounded-full mb-4">
            {tag}
          </p>
        )}

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-snug">
          {title}
        </h2>

        {/* Tags Row */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tags.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full text-sm text-gray-200"
              >
                {item.icon && item.icon[0]?.url && (
                  <Image
                    src={item.icon[0].url}
                    alt={item.icon[0].name || "icon"}
                    width={16}
                    height={16}
                  />
                )}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Cards Grid */}
        {cards && cards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl flex flex-col items-center text-center hover:bg-gray-800 transition-all"
              >
                {/* Card Image */}
                {card.image?.url && (
                  <div className="mb-4">
                    <Image
                      src={card.image.url}
                      alt={card.image.name || "card image"}
                      width={48}
                      height={48}
                    />
                  </div>
                )}

                {/* Card Tag */}
                {card.tag && (
                  <p className="text-sm text-blue-400 mb-1">{card.tag}</p>
                )}

                {/* Card Title */}
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>

                {/* Card Description */}
                <p className="text-gray-400 text-sm mb-4">{card.description}</p>

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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

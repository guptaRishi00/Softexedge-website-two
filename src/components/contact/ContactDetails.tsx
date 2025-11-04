import Image from "next/image";
import React from "react";

export default function ContactDetails({ data, contact }: any) {
  console.log(data);

  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-10 px-4 lg:gap-16 lg:py-10 lg:px-12 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="bg-white/10 text-white pt-3 pb-2 px-5 rounded-full">
          Contact
        </p>
        <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
          Have a chat with us for next project
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch w-full h-full gap-8 lg:gap-10 mt-10">
        <div
          className="relative w-full h-auto min-h-[500px] lg:h-screen bg-cover bg-center rounded-3xl flex flex-col"
          style={{ backgroundImage: `url(${contact.image?.url})` }}
        >
          {/* <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>{" "} */}

          {/* Added responsive padding */}
          <div className="relative z-10 flex flex-col items-start justify-center gap-8 p-6 lg:p-12 h-full">
            <p className="bg-white/10 text-white pt-3 pb-2 px-5 rounded-full">
              {contact.tag}
            </p>
            <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-start lg:gap-2 text-white">
              {contact.title}
            </h1>
            <p className="text-white max-w-md">{contact.description}</p>
          </div>
        </div>

        <div className="w-full h-auto lg:h-auto bg-[#121212] rounded-3xl lg:flex lg:flex-col items-center py-8 px-6 lg:py-10 lg:px-12 space-y-8 lg:space-y-10">
          <h1 className="text-white text-3xl lg:text-4xl font-medium">
            {data?.title}
          </h1>

          <div className="flex flex-col gap-8 w-full">
            {data?.cards.map((card: any, index: number) => (
              <div className="space-y-8" key={card.id}>
                <div className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] p-px rounded-xl">
                  <div
                    className="bg-[#191919] px-8 py-10 rounded-xl space-y-3"
                    key={card.id}
                  >
                    <p className="text-[#D9D9D9CC] font-medium text-2xl">
                      {card.tag}
                    </p>
                    <div className="flex items-center gap-3">
                      <p className="text-white text-lg font-medium">
                        {card.text}
                      </p>
                      {card.icon && card.icon.url && (
                        <Image
                          src={card.icon.url}
                          alt={card.icon.name || card.tag}
                          width={20}
                          height={20}
                        />
                      )}
                    </div>
                  </div>
                </div>
                {index !== data?.cards.length - 1 ? (
                  <div className="h-px bg-[#403B60] w-full"></div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

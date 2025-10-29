import Image from "next/image";
import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function Contact({ data }: any) {
  return (
    // Added mobile-first padding `px-4`
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-10 px-4 lg:gap-16 lg:py-10 lg:px-12 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="bg-white/10 text-white py-2 px-5 rounded-full">
          {data?.tag}
        </p>
        <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
          {data?.title}
        </h1>
      </div>

      {/* Main container set to flex-col (mobile) and lg:flex-row (desktop) */}
      <div className="flex flex-col lg:flex-row items-stretch w-full h-full gap-8 lg:gap-10 mt-10">
        {/* image */}
        <div
          className="relative w-full h-auto min-h-[500px] lg:h-screen bg-cover bg-center rounded-3xl flex flex-col"
          style={{ backgroundImage: `url(${data?.leftCard?.image?.url})` }}
        >
          {/* <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>{" "} */}

          {/* Added responsive padding */}
          <div className="relative z-10 flex flex-col items-start justify-center gap-8 p-6 lg:p-12 h-full">
            <p className="bg-white/10 text-white py-2 px-5 rounded-full">
              {data?.leftCard?.tag}
            </p>
            <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-start lg:gap-2 text-white">
              {data?.leftCard.title}
            </h1>
            <p className="text-white max-w-md">{data?.leftCard?.description}</p>
          </div>

          {/* <div className="absolute inset-0 flex items-center justify-around w-full gap-5 ">
            {data?.cards.map((card: any) => (
              <div
                className=" bg-white flex flex-col items-start p-5 "
                key={card.id}
              >
                <BiSolidQuoteAltLeft />
                <p className="">{card?.text}</p>
                <div className="flex ">
                  <Image
                    src={card?.profile?.url}
                    width={50}
                    height={50}
                    alt="card image"
                    className="mx-auto w-5"
                  />
                  <div className="">
                    <p className="text-white">{card?.name}</p>
                    <p className="text-white">{card?.designation}</p>
                  </div>
          _       </div>
              </div>
  nbsp;         ))}
          </div> */}
        </div>

        {/* form */}
        {/* Adjusted height to h-auto (mobile) and lg:h-screen (desktop) */}
        {/* Adjusted padding for mobile */}
        <div className="w-full h-auto lg:h-screen bg-[#121212] rounded-3xl py-8 px-6 lg:py-10 lg:px-12 space-y-8 lg:space-y-10">
          {/* Adjusted font size for mobile */}
          <p className="text-white text-3xl lg:text-4xl font-medium">
            Help us get to know you.
          </p>
          <form action="" className="w-full flex flex-col gap-5">
            {/* This flex container is now col on mobile, row on desktop */}
            <div className="flex flex-col lg:flex-row items-center w-full gap-5 lg:gap-10">
              <div className="flex flex-col gap-2 w-full">
                <p className="text-white">Full Name*</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#000000] px-4 py-3 rounded-full text-white"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="text-white">Last Name*</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#000000] px-4 py-3 rounded-full text-white"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-white">Work Email*</p>
              <input
                type="text"
                placeholder="Name"
                className="bg-[#000000] px-4 py-3 rounded-full text-white"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-white">Phone Number*</p>
              <input
                type="text"
                placeholder="Name"
                className="bg-[#000000] px-4 py-3 rounded-full text-white"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-white">Add Service*</p>
              <input
                type="text"
                placeholder="Name"
                className="bg-[#000000] px-4 py-3 rounded-full text-white"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-white">How did you hear about Us?*</p>
              <input
                type="text"
                placeholder="Name"
                className="bg-[#000000] px-4 py-3 rounded-full text-white"
              />
            </div>
            {/* Added text-white for the button text */}
            <button className="w-full bg-linear-to-r px-4 py-3 rounded-full from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white font-medium">
              Contact us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

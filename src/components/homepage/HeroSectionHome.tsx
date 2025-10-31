"use client";

import React, { use, useState } from "react";
import Header from "../layout/Header";
import Image from "next/image";
import Button from "../Button";

import LinkComp from "../LinkComp";

export default function HeroSection({ data, headerData }: any) {
  const bacgroundImage = {
    backgroundImage: `url(${data?.image?.url})`,
  };

  const text = data?.title;
  const bookCallTheme = data?.bookCall.theme;
  const letsTalkTheme = data?.letsTalk.theme;
  const viewOurWorkTheme = data?.viewOurWork.theme;

  const words = text.split(" ");

  const part1 = words.slice(0, 4).join(" ");
  const part2 = words.slice(4, 6).join(" ");
  const part3 = words.slice(6, 7).join(" ");
  const part4 = words.slice(7, 10).join(" ");

  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      className="w-full lg:h-[96vh] h-[600px] bg-cover bg-center top-0 left-0 rounded-3xl relative overflow-hidden"
      style={bacgroundImage}
    >
      {dropdown && (
        <div className="absolute z-5 w-full backdrop-blur-lg h-screen"></div>
      )}

      <div className="absolute top-0 left-0 w-full z-10 px-5 py-6 lg:py-6 lg:px-10">
        <Header data={headerData} setDropdown={setDropdown} />
      </div>

      <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-sm flex flex-col justify-between gap-8 px-5 py-6 lg:p-10">
        <div className=""></div>
        <div className="flex flex-col items-center gap-10 text-center lg:gap-5">
          <p className="bg-white/10 text-white py-2 px-4 rounded-full">
            {data?.subtitle}
          </p>
          <h1 className="font-medium text-2xl lg:text-7xl flex flex-col items-center lg:gap-1 text-white">
            <span className="">{part1}</span>
            <span className="flex items-center lg:gap-2">
              <span className="">{part2}</span>
              <Image
                src={data?.titleImage.url}
                width={36}
                height={36}
                alt="title image"
                className="lg:w-20 lg:h-20"
              />
              <span className="">{part3}</span>
            </span>
            <span className="">{part4}</span>
          </h1>

          <div className="lg:flex lg:gap-6 flex-col lg:flex-row flex items-center gap-4 mt-4">
            <LinkComp
              href={data?.letsTalk?.href}
              color={letsTalkTheme}
              className="font-regular flex items-center lg:py-3 lg:px-5 px-5 py-2 gap-3 lg:text-lg"
            >
              {data?.letsTalk?.text}
              {data?.letsTalk?.images.map((img: any, index: number) => (
                <Image
                  key={index}
                  src={img?.url}
                  width={60}
                  height={60}
                  alt="button logo lg:w-26 lg:h-26"
                />
              ))}
            </LinkComp>
            <LinkComp
              href={data?.viewOurWork?.href}
              color={viewOurWorkTheme}
              className="font-regular flex items-center lg:py-3 lg:px-5 px-5 py-2 gap-3 lg:text-lg"
            >
              {data?.viewOurWork?.text}
            </LinkComp>
          </div>
        </div>

        <div className="flex items-center lg:justify-between">
          <p className="text-white text-center lg:text-start lg:text-base text-xs lg:max-w-md">
            {data?.description}
          </p>
          <Button
            color={bookCallTheme}
            className="lg:flex items-center gap-2 pl-2 pr-3 py-2 hidden"
          >
            <Image
              src={data?.bookCall.logo.url}
              width={30}
              height={30}
              alt="button logo"
              className="inline-block bg-[#04034C] p-1 rounded-full"
            />
            {data?.bookCall.text}
          </Button>
        </div>
      </div>
    </div>
  );
}

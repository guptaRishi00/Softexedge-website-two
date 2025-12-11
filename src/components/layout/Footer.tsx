import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  data: any;
};

export default function Footer({ data }: Props) {
  return (
    <div className="h-auto bg-black rounded-3xl overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between py-10 px-6 gap-10 lg:gap-16 lg:py-10 lg:px-10">
        {/* LINKS SECTION */}
        {/* Changed to Grid for mobile responsiveness */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-auto">
          {/* Column 1: Cases */}
          <div className="flex items-start gap-5">
            {/* Vertical Line: Hidden on mobile */}
            <div className="hidden lg:block w-px self-stretch border border-[#FFFFFF29]"></div>
            <div className="flex flex-col gap-4 lg:gap-5">
              <p className="text-white text-lg lg:text-xl font-medium">Cases</p>
              {data?.cases?.map((item: any, index: number) => (
                <Link
                  key={item.id || index}
                  href={item.href || "/"}
                  className="text-[#878787] text-sm hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex items-start gap-5">
            <div className="hidden lg:block w-px self-stretch border border-[#FFFFFF29]"></div>
            <div className="flex flex-col gap-4 lg:gap-5">
              <p className="text-white text-lg lg:text-xl font-medium">
                Services
              </p>
              {data?.services?.map((item: any, index: number) => (
                <Link
                  key={item.id || index}
                  href={item.href || "/"}
                  className="text-[#878787] text-sm hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: About Us */}
          <div className="flex items-start gap-5">
            <div className="hidden lg:block w-px self-stretch border border-[#FFFFFF29]"></div>
            <div className="flex flex-col gap-4 lg:gap-5">
              <p className="text-white text-lg lg:text-xl font-medium">
                About Us
              </p>
              {data?.aboutUs?.map((item: any, index: number) => (
                <Link
                  key={item.id || index}
                  href={item.href || "/"}
                  className="text-[#878787] text-sm hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* INFO & SUBSCRIBE SECTION */}
        <div className="flex flex-col gap-6 w-full lg:max-w-xs">
          {/* SAFEGUARD: Only render Image if URL exists */}
          {data?.logo?.url && (
            <div className="relative w-24 h-auto">
              <Image
                src={data.logo.url}
                alt="Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          )}

          <p className="text-[#ABABAB] text-lg lg:max-w-[260px] leading-relaxed w-full">
            {data?.description}
          </p>

          <div className="flex flex-col gap-3 w-full">
            <input
              type="text"
              placeholder="Email address"
              className="bg-[#FFFFFF1A] px-5 py-3 rounded-full text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            />
            <button className="px-5 py-3 font-medium rounded-full cursor-pointer shadow-sm bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white w-full hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>

          <div className="flex items-center gap-4 w-full px-2">
            {data?.socials?.map((item: any, index: number) => (
              <div
                className="bg-white p-1 w-full flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                key={item.id || index}
              >
                {/* SAFEGUARD: Only render Social Icon if URL exists */}
                {item?.icon?.url && (
                  <Image
                    src={item.icon.url}
                    alt="Social Icon"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#FFFFFF26]"></div>

      <p className="text-[#878787] text-xs sm:text-sm w-full text-center py-6 px-4">
        {data?.copyright}
      </p>
    </div>
  );
}

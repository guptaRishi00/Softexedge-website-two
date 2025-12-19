import { getGlobalData } from "@/data/loader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavLinkItem from "./NavLinkItem";
import LinkComp from "../LinkComp";

type link = {
  id: string;
  name: string;
  href: string;
  isExternal: boolean;
};

export default function Header({ data, setDropdown }: any) {
  // Define icons for the first two links (Company and Services)
  const arrow = [{ icon: <IoIosArrowDown /> }, { icon: <IoIosArrowDown /> }];

  return (
    <>
      <div className="flex md:hidden items-center justify-between w-full">
        <Link href="/">
          <Image src={data.logo.url} alt="Logo" width={80} height={80} />
        </Link>

        <button className="text-white p-2" aria-label="Menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex items-center gap-8 justify-between w-full">
        <Link href="/" className="">
          <Image src={data.logo.url} alt="Logo" width={120} height={120} />
        </Link>

        <div className="flex items-center gap-10">
          {data.links.map((link: link, index: number) => {
            // Logic to determine which dropdown content to provide
            let currentMenus = null;
            if (link.name === "Company") {
              currentMenus = data?.companyDropdown;
            } else if (link.name === "Services") {
              currentMenus = data?.serviceDropdown;
            }

            return (
              <NavLinkItem
                key={link.id}
                link={link}
                // Arrow icon is applied based on the index
                arrowIcon={arrow[index] && arrow[index].icon}
                className="text-white"
                setDropdown={setDropdown}
                menus={currentMenus} // Pass the specific dropdown data
              />
            );
          })}
        </div>

        <LinkComp
          href={`/${data.cta.href}`}
          className="text-black bg-white lg:pb-3 lg:pt-4 lg:px-7 rounded-full text-sm font-regular"
        >
          {data.cta.name}
        </LinkComp>
      </div>
    </>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavLinkItem from "./NavLinkItem";
import { usePathname } from "next/navigation";

type link = {
  id: string;
  name: string;
  href: string;
  isExternal: boolean;
};

export default function PageHeader({ data }: any) {
  const arrow = [{ icon: <IoIosArrowDown /> }, { icon: <IoIosArrowDown /> }];

  const pathname = usePathname();

  console.log("pathname", pathname);

  const wrapperClassName = pathname === "/" ? "hidden" : "flex";

  return (
    <>
      <div
        className={`${wrapperClassName} md:hidden items-center gap-8 justify-between w-full`}
      >
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
      {/* 3. APPLIED the same logic here */}
      <div
        className={`${wrapperClassName} hidden md:flex items-center gap-8 justify-between w-full`}
      >
        <Link href="/" className="">
          <Image src={data.logo.url} alt="Logo" width={120} height={120} />
        </Link>

        <div className="flex items-center gap-10">
          {data.links.map((link: link, index: number) => (
            <NavLinkItem
              key={link.id}
              link={link}
              arrowIcon={arrow[index] && arrow[index].icon}
              // 4. FIXED to text-black for non-homepage pages
              className="text-black"
              // 5. REMOVED setDropdown
              menus={data?.serviceDropdown}
            />
          ))}
        </div>

        <Link
          href={`/${data.cta.href}`}
          className="text-black bg-white py-3 px-5 rounded-full text-sm font-medium"
        >
          {data.cta.name}
        </Link>
      </div>
    </>
  );
}

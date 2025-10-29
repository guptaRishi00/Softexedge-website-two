import { getGlobalData } from "@/data/loader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type link = {
  id: string;
  name: string;
  href: string;
  isExternal: boolean;
};

export default async function Header() {
  const response = await getGlobalData();
  const data = response.data.header;

  return (
    <>
      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between w-full">
        <Image src={data.logo.url} alt="Logo" width={80} height={80} />

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
        <Image src={data.logo.url} alt="Logo" width={100} height={100} />

        <div className="flex items-center gap-10">
          {data.links.map((link: link) => (
            <Link href={`/${link.href}`} key={link.id} className="text-white">
              <span className="">{link.name}</span>
            </Link>
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

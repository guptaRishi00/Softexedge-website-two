import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Dropdown({ menus }: any) {
  return (
    <div className="w-[280px] h-auto bg-white rounded-xl absolute top-full left-0 mt-5 z-50 shadow-lg p-4 flex flex-col gap-2">
      {menus.map((menu: any) => (
        <div className="flex items-center gap-px group " key={menu.id}>
          <Image
            src={menu.logo.url}
            width={36}
            height={36}
            alt="button logo"
            className="inline-block p-2 rounded-lg bg-[#04034C] group-hover:bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] transition-all duration-400 ease-in-out cursor-pointer"
          />
          <Link
            href={`${menu.href || "/"}`}
            className="text-gray-900 cursor-pointer font-medium w-full py-1 px-2 rounded-md transition-all duration-400 ease-in-out"
          >
            {menu?.text}
          </Link>
        </div>
      ))}
    </div>
  );
}

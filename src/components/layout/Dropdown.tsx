import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Dropdown({ menus }: any) {
  return (
    <div className="w-[280px] min-h-[150px] bg-white rounded-xl absolute top-full left-0 mt-5 z-50 shadow-lg p-4 flex flex-col gap-1">
      {menus.map((menu: any) => (
        <div className="flex items-center gap-px" key={menu.id}>
          <Image
            src={menu.logo.url}
            width={40}
            height={40}
            alt="button logo"
            className="inline-block p-1 rounded-lg"
          />
          <Link
            href={`${menu.href || "/"}`}
            className="text-gray-900 cursor-pointer font-medium hover:text-black hover:bg-gray-200 w-full py-1 px-2 rounded-md"
          >
            {menu?.text}
          </Link>
        </div>
      ))}
    </div>
  );
}

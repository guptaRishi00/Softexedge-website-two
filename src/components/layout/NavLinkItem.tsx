"use client";

import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

type link = {
  id: string;
  name: string;
  href: string;
  isExternal: boolean;
};

interface NavLinkItemProps {
  link: link;
  arrowIcon: React.ReactNode;
  className?: string;
}

export default function NavLinkItem({
  link,
  arrowIcon,
  className,
  setDropdown,
  menus,
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  const hasDropdown = !!arrowIcon;

  const toggleDropdown = () => {
    const newIsOpen = !isOpen;
    if (hasDropdown) {
      setIsOpen(newIsOpen);
    }

    setDropdown?.(newIsOpen);
  };

  return (
    <div className="relative">
      <div className={`flex items-center gap-2 ${className}`}>
        <Link href={`/${link.href}`} key={link.id}>
          <span className="">{link.name}</span>
        </Link>

        {hasDropdown && (
          <span className="pt-1 cursor-pointer" onClick={toggleDropdown}>
            {arrowIcon}
          </span>
        )}
      </div>

      {hasDropdown && isOpen && <Dropdown menus={menus} />}
    </div>
  );
}

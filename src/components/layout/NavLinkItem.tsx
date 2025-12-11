"use client";

import React, { useState, useRef } from "react";
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
  setDropdown?: (value: boolean) => void;
  menus?: any;
}

export default function NavLinkItem({
  link,
  arrowIcon,
  className,
  setDropdown,
  menus,
}: NavLinkItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hasDropdown = !!arrowIcon;

  const handleMouseEnter = () => {
    if (hasDropdown) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      setIsOpen(true);
      if (setDropdown) setDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (hasDropdown) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
        if (setDropdown) setDropdown(false);
      }, 200);
    }
  };

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex items-center gap-2 ${className} cursor-pointer`}>
        <Link href={`/${link.href}`} key={link.id}>
          <span className=" inline-block">{link.name}</span>
        </Link>

        {hasDropdown && <span className="text-xl">{arrowIcon}</span>}
      </div>

      {hasDropdown && isOpen && (
        <div className="absolute top-full left-0">
          <Dropdown menus={menus} />
        </div>
      )}
    </div>
  );
}

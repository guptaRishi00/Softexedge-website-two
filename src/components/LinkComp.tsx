import Link, { LinkProps } from "next/link";
import React from "react";

type ButtonColor = "black" | "white" | "blue";

interface LinkButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  color: ButtonColor;
}

const colorMap: Record<ButtonColor, string> = {
  black: "bg-black text-white hover:bg-gray-800",
  white: "bg-white text-[#111212] ",
  blue: "bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white",
};

const LinkComp: React.FC<LinkButtonProps> = ({
  color,
  children,
  className,
  href,
  ...rest
}) => {
  const baseStyles = "rounded-full cursor-pointer shadow-sm";

  const colorStyles = colorMap[color];

  const combinedStyles = `${baseStyles} ${colorStyles} ${className || ""}`;

  return (
    <Link href={href} className={combinedStyles} {...rest}>
      {children}
    </Link>
  );
};

export default LinkComp;

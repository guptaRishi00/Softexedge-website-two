import Link, { LinkProps } from "next/link";
import React from "react";

interface LinkButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {}

const LinkComp: React.FC<LinkButtonProps> = ({
  children,
  className,
  href,
  ...rest
}) => {
  const baseStyles =
    "rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-[#3445E7] hover:via-[#2F85EA] hover:to-[#07D6F3] text-black hover:text-white transition-all duration-300";

  const combinedStyles = `${baseStyles} ${className || ""}`;

  return (
    <Link href={href} className={combinedStyles} {...rest}>
      {children}
    </Link>
  );
};

export default LinkComp;

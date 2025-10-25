import React from "react";

type ButtonColor = "black" | "white" | "blue";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColor;
}

const colorMap: Record<ButtonColor, string> = {
  black: "bg-black text-white hover:bg-gray-800",
  white: "bg-white text-[#111212] ",
  blue: "bg-gradient-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white",
};

const Button: React.FC<ButtonProps> = ({
  color,
  children,
  className,
  ...rest
}) => {
  const baseStyles =
    "px-2 py-2 font-medium rounded-full cursor-pointer shadow-sm";

  const colorStyles = colorMap[color];

  const combinedStyles = `${baseStyles} ${colorStyles} ${className || ""}`;

  return (
    <button className={combinedStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;

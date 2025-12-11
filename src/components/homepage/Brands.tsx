import React from "react";
import LogoLoop from "../LogoLoop";

export default function Brands({ data }: any) {
  return (
    <div className="p-10 flex flex-col gap-10">
      <h1 className="lg:text-2xl text-center font-regular">{data?.title}</h1>
      <LogoLoop
        logos={data?.image || []}
        speed={50}
        direction="left"
        logoHeight={60}
        gap={20}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
        className=""
      />
    </div>
  );
}

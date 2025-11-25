import LinkComp from "@/components/LinkComp";
import React from "react";

type Props = {};

export default function SeoServicePage({}: Props) {
  return (
    <div className="w-full h-auto bg-white px-5 py-6 lg:pt-24 top-0 left-0 lg:px-18">
      <div className="flex lg:flex-col lg:items-start lg:gap-8">
        <p className="font-medium bg-[#0000001A] w-fit rounded-full lg:px-8 lg:p-2">
          SEO Services
        </p>

        <p className="lg:text-7xl leading-tight font-medium">
          Global SEO Services Built for Visibility, Built for Growth
        </p>

        <p className="lg:text-xl font-medium">
          We don’t just rank you — we elevate your brand across borders. Our SEO
          strategies are crafted to drive traffic, convert leads, and deliver
          measurable results for brands worldwide.
        </p>

        <div className="w-full flex lg:flex-row lg:gap-5 items-center ">
          <LinkComp
            href="/contact"
            className="text-white lg:py-5 lg:text-xl lg:px-20 rounded-full text-sm font-medium w-fit"
            color="blue"
          >
            Let's Talk
          </LinkComp>
          <LinkComp
            href="/contact"
            className="text-black lg:py-5 lg:text-xl lg:px-20 rounded-full text-sm font-medium border border-[#00000033] w-fit"
            color="white"
          >
            View Work
          </LinkComp>
        </div>

        <div className="card"></div>
      </div>
    </div>
  );
}

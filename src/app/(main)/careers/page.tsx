import Application from "@/components/careers/Application";
import HeroSectionCareer from "@/components/careers/HeroSectionCareer";
import OurValues from "@/components/careers/OurValues";
import Positions from "@/components/careers/Positions";
import ReadyToGrow from "@/components/careers/ReadyToGrow";
import WhyWork from "@/components/careers/WhyWork";
import { getPageData } from "@/data/loader";
import React from "react";

type Props = {};

export default async function Careers({}: Props) {
  try {
    const response = await getPageData("careers");

    const page = response?.data?.[0];
    if (!page) {
      return <div className="text-center py-20 text-xl">Page not found</div>;
    }

    const blocks = page?.attributes?.blocks || page?.blocks || [];

    const careerBlock = blocks.find(
      (block: any) => block.__component === "page.careers"
    );

    if (!careerBlock) {
      return (
        <div className="text-center py-20 text-xl">
          No Services block found.
        </div>
      );
    }

    // Extract section data
    const heroSectionData = careerBlock.herosection;
    const whyWorkData = careerBlock.whyWorkWithUs;
    const ourValues = careerBlock.howWeWork;
    const positionsData = careerBlock.positions;
    const ourProcessData = careerBlock.ourProcess;

    return (
      <main className="p-3 space-y-10">
        {heroSectionData && <HeroSectionCareer data={heroSectionData} />}
        {whyWorkData && <WhyWork data={whyWorkData} />}
        {ourValues && <OurValues data={ourValues} />}
        {positionsData && <Positions data={positionsData} />}
        {ourProcessData && <Application data={ourProcessData} />}
        <ReadyToGrow />
      </main>
    );
  } catch (error) {
    console.error("❌ Failed to load Services page:", error);
    return (
      <div className="text-center py-20 text-xl text-red-600">
        Failed to load Services page.
      </div>
    );
  }
}

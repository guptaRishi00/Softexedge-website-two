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

    // --- FIX START ---
    // Map individual blocks instead of looking for one "page.careers" wrapper

    const heroSectionData = blocks.find(
      (block: any) => block.__component === "digital-marketing.hero-section"
    );

    const whyWorkData = blocks.find(
      (block: any) => block.__component === "careerpage.why-work"
    );

    const ourValues = blocks.find(
      (block: any) => block.__component === "careerpage.our-values"
    );

    const positionsData = blocks.find(
      (block: any) => block.__component === "careerpage.position"
    );

    // Based on your JSON, the Application Process uses "videography.we-work"
    const ourProcessData = blocks.find(
      (block: any) => block.__component === "videography.we-work"
    );
    // --- FIX END ---

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
    console.error("❌ Failed to load Careers page:", error);
    return (
      <div className="text-center py-20 text-xl text-red-600">
        Failed to load Careers page.
      </div>
    );
  }
}

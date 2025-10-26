import Brands from "@/components/homepage/Brands";
import HeroSection from "@/components/homepage/HeroSection";
import Project from "@/components/homepage/Project";
import WhatWeDo from "@/components/homepage/WhatWeDo";

import { getHomepageData } from "@/data/loader";

export default async function Home() {
  const response = await getHomepageData();

  const heroSectionData = response.data.blocks.find(
    (block: any) => block.__component === "shared-components.hero-section"
  );
  const brands = response.data.blocks.find(
    (block: any) => block.__component === "shared-components.brands"
  );

  const whatWeDo = response.data.blocks.find(
    (block: any) => block.__component === "homepage.what-we-do"
  );

  const projects = response.data.blocks.find(
    (block: any) => block.__component === "homepage.our-project"
  );

  console.log(projects);

  return (
    <div className="p-3 space-y-10">
      <HeroSection data={heroSectionData} />
      <Brands data={brands} />
      <WhatWeDo data={whatWeDo} />
      <Project data={projects} />
    </div>
  );
}

import About from "@/components/homepage/About";
import Brands from "@/components/homepage/Brands";
import Contact from "@/components/homepage/Contact";
import HeroSection from "@/components/shared/HeroSection";
import OurCase from "@/components/homepage/OurCase";
import Project from "@/components/homepage/Project";
import WhatWeDo from "@/components/homepage/WhatWeDo";
import WhyChoose from "@/components/homepage/WhyChoose";

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

  const ourCase = response.data.blocks.find(
    (block: any) => block.__component === "homepage.our-case"
  );
  const whyChoose = response.data.blocks.find(
    (block: any) => block.__component === "homepage.why-choose"
  );
  const contact = response.data.blocks.find(
    (block: any) => block.__component === "homepage.contact"
  );
  const about = response.data.blocks.find(
    (block: any) => block.__component === "homepage.about"
  );

  return (
    <div className="p-3 space-y-10">
      <HeroSection data={heroSectionData} />
      <Brands data={brands} />
      <About data={about} />
      <WhatWeDo data={whatWeDo} />
      <Project data={projects} />
      <OurCase data={ourCase} />
      <WhyChoose data={whyChoose} />
      <Contact data={contact} />
    </div>
  );
}

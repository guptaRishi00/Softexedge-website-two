import { getPageData } from "@/data/loader";
import HeroSection from "@/components/shared/HeroSection";
import OurStory from "@/components/aboutpage/OurStory";
import OurMission from "@/components/aboutpage/OurMission";
import WhyChoose from "@/components/aboutpage/WhyChoose";
import OurTeam from "@/components/aboutpage/OurTeam";
import Review from "@/components/aboutpage/Review";
import WhatWeDo from "@/components/homepage/WhatWeDo";

export default async function DynamicPage({ params }: { params: { slug: string } }) {
  // Fetch page data from Strapi based on slug
  const response = await getPageData(params.slug);
  const page = response?.data?.[0];

  if (!page) {
    return <div className="text-center py-20 text-xl">Page not found</div>;
  }

  const blocks = page.attributes?.blocks || [];

  return (
    <main>
      {blocks.map((block: any, index: number) => {
        switch (block.__component) {
          case "shared-components.hero-section":
            return <HeroSection key={index} data={block} />;

          case "aboutpage.our-story":
            return <OurStory key={index} data={block} />;

          case "aboutpage.our-mission":
            return <OurMission key={index} data={block} />;

          case "homepage.what-we-do":
            return <WhatWeDo key={index} data={block} />;

          case "aboutpage.why-choose":
            return <WhyChoose key={index} data={block} />;

          case "aboutpage.our-team":
            return <OurTeam key={index} data={block} />;

          case "aboutpage.review":
            return <Review key={index} data={block} />;

          default:
            return null;
        }
      })}
    </main>
  );
}

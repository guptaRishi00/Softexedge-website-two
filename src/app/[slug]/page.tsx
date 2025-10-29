// app/[slug]/page.tsx

import { getPageData } from "@/data/loader";
import HeroSection from "@/components/aboutpage/HeroSectionAbout";
import OurStory from "@/components/aboutpage/OurStory";
import OurMission from "@/components/aboutpage/OurMission";
import WhyChoose from "@/components/aboutpage/WhyChoose";
import OurTeam from "@/components/aboutpage/OurTeam";
import Review from "@/components/aboutpage/Review";

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const response = await getPageData(slug);
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

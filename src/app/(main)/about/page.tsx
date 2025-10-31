import HeroSection from "@/components/aboutpage/HeroSectionAbout";
import OurStory from "@/components/aboutpage/OurStory";
import OurMission from "@/components/aboutpage/OurMission";
import WhyChoose from "@/components/aboutpage/WhyChoose";
import OurTeam from "@/components/aboutpage/OurTeam";
import Review from "@/components/aboutpage/Review";
import WhatWeDo from "@/components/homepage/WhatWeDo";
import { getPageData } from "@/data/loader";

export default async function AboutPage() {
  try {
    const response = await getPageData("about");

    const page = response?.data?.[0];
    if (!page) {
      return <div className="text-center py-20 text-xl">Page not found</div>;
    }

    const blocks = page?.attributes?.blocks || page?.blocks || [];

    // Find the "page.about" component
    const aboutBlock = blocks.find(
      (block: any) => block.__component === "page.about"
    );

    if (!aboutBlock) {
      return (
        <div className="text-center py-20 text-xl">No About block found.</div>
      );
    }

    // Extract nested component data
    const heroSectionData = aboutBlock.herosection;
    const ourStoryData = aboutBlock.ourStory;
    const ourMissionData = aboutBlock.ourMission;
    const whatWeDoData = aboutBlock.whatWeDo; 
    const whyChooseData = aboutBlock.whyChoose;
    const ourTeamData = aboutBlock.ourTeam;
    const reviewData = aboutBlock.review;

    return (
      <main className="p-3 space-y-10">
        {heroSectionData && <HeroSection data={heroSectionData} />}
        {ourStoryData && <OurStory data={ourStoryData} />}
        {ourMissionData && <OurMission data={ourMissionData} />}

        {whatWeDoData && <WhatWeDo data={whatWeDoData} />}

        {whyChooseData && <WhyChoose data={whyChooseData} />}
        {ourTeamData && <OurTeam data={ourTeamData} />}
        {reviewData && <Review data={reviewData} />}
      </main>
    );
  } catch (error) {
    console.error("❌ Failed to load About page:", error);
    return (
      <div className="text-center py-20 text-xl text-red-600">
        Failed to load About page.
      </div>
    );
  }
}

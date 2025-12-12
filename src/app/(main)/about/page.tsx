import HeroSection from "@/components/aboutpage/HeroSectionAbout";
import OurStory from "@/components/aboutpage/OurStory";
import OurMission from "@/components/aboutpage/OurMission";
import WhyChoose from "@/components/aboutpage/WhyChoose";
import OurTeam from "@/components/aboutpage/OurTeam";
import Review from "@/components/aboutpage/Review";
import WhatWeDo from "@/components/homepage/WhatWeDo";
import { getHomepageData, getPageData } from "@/data/loader";
import Recognition from "@/components/homepage/Recognition";
import CommmonCta from "@/components/CommmonCta";

export default async function AboutPage() {
  try {
    const response = await getPageData("about");

    const Homepageresponse = await getHomepageData();

    const page = response?.data?.[0];
    if (!page) {
      return <div className="text-center py-20 text-xl">Page not found</div>;
    }

    const blocks = page?.attributes?.blocks || page?.blocks || [];

    const heroSectionData = blocks.find(
      (block: any) => block.__component === "aboutpage.hero-section"
    );

    const ourStoryData = blocks.find(
      (block: any) => block.__component === "aboutpage.our-story"
    );

    const ourMissionData = blocks.find(
      (block: any) => block.__component === "aboutpage.our-mission"
    );

    const whatWeDoData = blocks.find(
      (block: any) => block.__component === "aboutpage.what-we-do"
    );

    const whyChooseData = blocks.find(
      (block: any) => block.__component === "aboutpage.why-choose"
    );

    const ourTeamData = blocks.find(
      (block: any) => block.__component === "aboutpage.our-team"
    );

    const reviewData = blocks.find(
      (block: any) => block.__component === "aboutpage.review"
    );

    const recognition = Homepageresponse.data.blocks.find(
      (block: any) => block.__component === "homepage.recognition"
    );

    return (
      <main className="p-3 space-y-10">
        {heroSectionData && <HeroSection data={heroSectionData} />}
        {ourStoryData && <OurStory data={ourStoryData} />}
        {ourMissionData && <OurMission data={ourMissionData} />}

        {whatWeDoData && <WhatWeDo data={whatWeDoData} />}

        {whyChooseData && <WhyChoose data={whyChooseData} />}
        {ourTeamData && <OurTeam data={ourTeamData} />}
        {reviewData && <Review data={reviewData} />}
        {recognition && <Recognition data={recognition} />}
        <CommmonCta />
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

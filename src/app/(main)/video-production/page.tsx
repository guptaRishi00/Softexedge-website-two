import OurServices from "@/components/servicepage/OurServices";
import OurCase from "@/components/homepage/OurCase";
import OurProcess from "@/components/servicepage/OurProcess";
import ClientReview from "@/components/servicepage/ClientReview";
import ContactUs from "@/components/servicepage/ContactUs";
import { getPageData } from "@/data/loader";
import HeroSection from "@/components/videoProduction/HeroSection";
import WhyChoose from "@/components/videoProduction/WhyChoose";
import VideoWorks from "@/components/videoProduction/VideoWorks";

export default async function VideoProduction() {
  try {
    const response = await getPageData("video-production");

    const page = response?.data?.[0];
    if (!page) {
      return <div className="text-center py-20 text-xl">Page not found</div>;
    }

    const blocks = page?.attributes?.blocks || page?.blocks || [];

    // --- FIX START ---
    // Instead of looking for a wrapper "page.service" block, we find specific
    // components directly in the blocks array based on your JSON structure.

    const heroSectionData = blocks.find(
      (block: any) => block.__component === "digital-marketing.hero-section"
    );

    const whyChooseData = blocks.find(
      (block: any) => block.__component === "videography.video-matters"
    );

    const ourServicesData = blocks.find(
      (block: any) => block.__component === "shared.our-services"
    );

    const videoWorksData = blocks.find(
      (block: any) => block.__component === "videography.video-works"
    );

    // Mapping "videography.we-work" to the OurProcess component
    const ourProcessData = blocks.find(
      (block: any) => block.__component === "videography.we-work"
    );

    const clientReviewData = blocks.find(
      (block: any) => block.__component === "aboutpage.review"
    );

    // These components were not in your provided JSON, but I'm keeping the logic
    // to look for them in case they are added later or named differently.
    const ourCaseData = blocks.find(
      (block: any) => block.__component === "homepage.our-case"
    );

    const contactUsData = blocks.find(
      (block: any) => block.__component === "shared.contact-us"
    );
    // --- FIX END ---

    return (
      <main className="p-3 space-y-10">
        {heroSectionData && <HeroSection data={heroSectionData} />}
        {whyChooseData && <WhyChoose data={whyChooseData} />}
        {ourServicesData && <OurServices data={ourServicesData} />}
        {videoWorksData && <VideoWorks data={videoWorksData} />}
        {ourCaseData && <OurCase data={ourCaseData} />}
        {ourProcessData && <OurProcess data={ourProcessData} />}
        {clientReviewData && <ClientReview data={clientReviewData} />}
        {contactUsData && <ContactUs data={contactUsData} />}
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

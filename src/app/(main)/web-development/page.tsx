import OurServices from "@/components/servicepage/OurServices";
import OurCase from "@/components/homepage/OurCase";
import OurProcess from "@/components/servicepage/OurProcess";
import ClientReview from "@/components/servicepage/ClientReview";
import ContactUs from "@/components/servicepage/ContactUs";
import { getPageData } from "@/data/loader";
import HeroSection from "@/components/videoProduction/HeroSection";
import WhyChoose from "@/components/videoProduction/WhyChoose"; // Ensures 'lists' support
import VideoWorks from "@/components/videoProduction/VideoWorks";
import CommonCta from "@/components/CommmonCta";

export default async function WebDevelopment() {
  try {
    const response = await getPageData("web-development");

    const page = response?.data?.[0];
    if (!page) {
      return <div className="text-center py-20 text-xl">Page not found</div>;
    }

    // 1. Get the flat list of blocks
    const blocks = page?.attributes?.blocks || page?.blocks || [];

    // 2. Find specific blocks by their "__component" name
    const heroSectionData = blocks.find(
      (block: any) => block.__component === "digital-marketing.hero-section"
    );

    // Maps "web.our-development" (which has 'lists') to WhyChoose
    const whyChooseData = blocks.find(
      (block: any) => block.__component === "web.our-development"
    );

    const ourServicesData = blocks.find(
      (block: any) => block.__component === "shared.our-services"
    );

    // Maps "videography.we-work" to OurProcess
    const ourProcessData = blocks.find(
      (block: any) => block.__component === "videography.we-work"
    );

    const ourCaseData = blocks.find(
      (block: any) => block.__component === "homepage.our-case"
    );

    const clientReviewData = blocks.find(
      (block: any) => block.__component === "aboutpage.review"
    );

    const contactUsData = blocks.find(
      (block: any) => block.__component === "shared.contact-us"
    );

    return (
      <main className="p-3 space-y-10">
        {heroSectionData && <HeroSection data={heroSectionData} />}
        {whyChooseData && <WhyChoose data={whyChooseData} />}
        {ourServicesData && <OurServices data={ourServicesData} />}

        {/* Only render if data exists to prevent crashes */}
        {ourCaseData && <OurCase data={ourCaseData} />}
        {ourProcessData && <OurProcess data={ourProcessData} />}
        {clientReviewData && <ClientReview data={clientReviewData} />}
        {contactUsData && <ContactUs data={contactUsData} />}
        <CommonCta />
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

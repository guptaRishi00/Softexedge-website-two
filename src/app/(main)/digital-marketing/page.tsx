import HeroSection from "@/components/servicepage/HeroSectionService";
import WhyChoose from "@/components/servicepage/WhyChoose";
import OurServices from "@/components/servicepage/OurServices";
import OurCase from "@/components/homepage/OurCase";
import OurProcess from "@/components/servicepage/OurProcess";
import ClientReview from "@/components/servicepage/ClientReview";
import ContactUs from "@/components/servicepage/ContactUs";
import { getPageData } from "@/data/loader";
import CommonCta from "@/components/CommmonCta";

export default async function DigitalMarketingPage() {
  try {
    const response = await getPageData("digital-marketing");

    const page = response?.data?.[0];
    if (!page) {
      return <div className="text-center py-20 text-xl">Page not found</div>;
    }

    const blocks = page?.attributes?.blocks || page?.blocks || [];

    // --- FIXED LOGIC STARTS HERE ---
    // Instead of looking for one "page.service" block, we look for specific
    // components in the blocks array based on your API response.

    const heroSectionData = blocks.find(
      (block: any) => block.__component === "digital-marketing.hero-section"
    );

    const whyChooseData = blocks.find(
      (block: any) => block.__component === "digital-marketing.why-choose"
    );

    const ourServicesData = blocks.find(
      (block: any) => block.__component === "shared.our-services"
    );

    const ourCaseData = blocks.find(
      (block: any) => block.__component === "homepage.our-case"
    );

    const ourProcessData = blocks.find(
      (block: any) => block.__component === "digital-marketing.our-process"
    );

    // Note: These were not in your provided JSON snippet, so I used
    // generic names. Verify these component names in your Strapi API if they don't show up.
    const clientReviewData = blocks.find(
      (block: any) =>
        block.__component === "digital-marketing.client-review" ||
        block.__component === "aboutpage.review"
    );

    const contactUsData = blocks.find(
      (block: any) =>
        block.__component === "digital-marketing.contact-us" ||
        block.__component === "shared.contact-us"
    );
    // --- FIXED LOGIC ENDS HERE ---

    return (
      <main className="p-3 space-y-10">
        {heroSectionData && <HeroSection data={heroSectionData} />}
        {whyChooseData && <WhyChoose data={whyChooseData} />}
        {ourServicesData && <OurServices data={ourServicesData} />}
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

import OurServices from "@/components/servicepage/OurServices";
import OurCase from "@/components/homepage/OurCase";
import OurProcess from "@/components/servicepage/OurProcess";
import ClientReview from "@/components/servicepage/ClientReview";
import ContactUs from "@/components/servicepage/ContactUs";
import { getPageData } from "@/data/loader";
import HeroSectionBrandStrategy from "@/components/brandStrategy/HeroSectionBrandStrategy";
import WhyChoose from "@/components/brandStrategy/WhyChoose";

export default async function BrandStrategy() {
  try {
    const response = await getPageData("brand-strategy");

    const page = response?.data?.[0];
    if (!page) {
      return <div className="text-center py-20 text-xl">Page not found</div>;
    }

    // Access the blocks array directly
    const blocks = page?.attributes?.blocks || page?.blocks || [];

    const heroSectionData = blocks.find(
      (block: any) => block.__component === "digital-marketing.hero-section"
    );

    // Updated to match your API response for this page
    const whyChooseData = blocks.find(
      (block: any) => block.__component === "brand-strategy.branding-matters"
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

    const clientReviewData = blocks.find(
      (block: any) =>
        block.__component === "aboutpage.review" ||
        block.__component === "digital-marketing.client-review"
    );

    const contactUsData = blocks.find(
      (block: any) =>
        block.__component === "shared.contact-us" ||
        block.__component === "digital-marketing.contact-us"
    );

    return (
      <main className="p-3 space-y-10">
        {heroSectionData && <HeroSectionBrandStrategy data={heroSectionData} />}
        {whyChooseData && <WhyChoose data={whyChooseData} />}
        {ourServicesData && <OurServices data={ourServicesData} />}
        {ourCaseData && <OurCase data={ourCaseData} />}
        {ourProcessData && <OurProcess data={ourProcessData} />}
        {clientReviewData && <ClientReview data={clientReviewData} />}
        {contactUsData && <ContactUs data={contactUsData} />}
      </main>
    );
  } catch (error) {
    console.error("❌ Failed to load Brand Strategy page:", error);
    return (
      <div className="text-center py-20 text-xl text-red-600">
        Failed to load Brand Strategy page.
      </div>
    );
  }
}

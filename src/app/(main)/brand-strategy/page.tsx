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

    const blocks = page?.attributes?.blocks || page?.blocks || [];

    const servicesBlock = blocks.find(
      (block: any) => block.__component === "page.service"
    );

    if (!servicesBlock) {
      return (
        <div className="text-center py-20 text-xl">
          No Services block found.
        </div>
      );
    }

    // Extract section data
    const heroSectionData = servicesBlock.herosection;
    const whyChooseData = servicesBlock.whyChoose;
    const ourServicesData = servicesBlock.ourServices;
    const ourCaseData = servicesBlock.ourCase;
    const ourProcessData = servicesBlock.ourProcess;
    const clientReviewData = servicesBlock.clientReview;
    const contactUsData = servicesBlock.contactUs;

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
    console.error("❌ Failed to load Services page:", error);
    return (
      <div className="text-center py-20 text-xl text-red-600">
        Failed to load Services page.
      </div>
    );
  }
}

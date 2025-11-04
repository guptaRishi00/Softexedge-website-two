import Contact from "@/components/contact/Contact";
import ContactDetails from "@/components/contact/ContactDetails";
import HeroSectionContact from "@/components/contact/HeroSectionContact";
import BrandComponet from "@/components/shared-components/BrandComponet";
import ClientReviewComponent from "@/components/shared-components/ClientReviewComponent";
import { getPageData } from "@/data/loader";
import React from "react";

export default async function ContactUs({}: any) {
  try {
    const response = await getPageData("contact");

    const page = response?.data?.[0];
    if (!page) {
      return <div className="text-center py-20 text-xl">Page not found</div>;
    }

    const blocks = page?.blocks || [];

    const contactBlock = blocks.find(
      (block: any) => block.__component === "page.contact"
    );

    const heroSectionData = contactBlock.herosection;

    const ConatctDetailsData = contactBlock.contactInfo;

    const contact = contactBlock.contact;

    return (
      <main className="p-3 space-y-10">
        {heroSectionData && <HeroSectionContact data={heroSectionData} />}
        <Contact />
        <ContactDetails data={ConatctDetailsData} contact={contact} />
        <BrandComponet />
        <ClientReviewComponent />
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

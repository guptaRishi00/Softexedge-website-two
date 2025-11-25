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

    const blocks = page?.attributes?.blocks || page?.blocks || [];

    // 1. Search for the specific Hero component defined in your loader.ts
    const heroSectionData = blocks.find(
      (block: any) => block.__component === "digital-marketing.hero-section"
    );

    const contactData = blocks.find(
      (block: any) => block.__component === "contactpage.contact"
    );

    const contactDetailsData = blocks.find(
      (block: any) => block.__component === "contactpage.contact-info"
    );

    return (
      <main className="p-3 space-y-10">
        {heroSectionData && <HeroSectionContact data={heroSectionData} />}

        <Contact />

        {(contactDetailsData || contactData) && (
          <ContactDetails data={contactDetailsData} contact={contactData} />
        )}

        <BrandComponet />
        <ClientReviewComponent />
      </main>
    );
  } catch (error) {
    console.error("❌ Failed to load Contact page:", error);
    return (
      <div className="text-center py-20 text-xl text-red-600">
        Failed to load Contact page.
      </div>
    );
  }
}

import OurCase from "@/components/homepage/OurCase";
import ClientReviewComponent from "@/components/shared-components/ClientReviewComponent";
import HeroSectionSlug from "@/components/slug/HeroSectionSlug";
import InternationalSeo from "@/components/slug/InternationalSeo";
import SeoApproach from "@/components/slug/SeoApproach";
import SeoMetrics from "@/components/slug/SeoMetrics";
import SeoProcess from "@/components/slug/SeoProcess";
import ServiceHighlight from "@/components/slug/ServiceHighlight";
import ServiceHighlightAlternate from "@/components/slug/ServiceHighlightAlternate";
import TechnicalSeo from "@/components/slug/TechnicalSeo";
import { getHomepageData, getPageData } from "@/data/loader";
import React from "react";

type Props = {};

const dummyData = {
  tag: "Our SEO Services",
  title: "Keyword Research & Intent Mapping",
  description:
    "Lorem ipsum is a dummy or placeholder text commonly used in graphic design",
  image: {
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
  },
  lists: [
    {
      id: 1,
      text: "Comprehensive keyword discovery (short-tail, long-tail, and LSI)",
    },
    { id: 2, text: "Competitor keyword gap and opportunity analysis" },
    { id: 3, text: "Search volume, CPC, and difficulty benchmarking" },
    {
      id: 4,
      text: "Keyword clustering by buyer journey stage (awareness → consideration → decision)",
    },
    { id: 5, text: "Seasonal and trending keyword identification" },
    { id: 6, text: "Global, regional, and multilingual keyword lists" },
  ],
};

const ServiceHighlightAlternateData = {
  tag: "Our SEO Services",
  title: "On-Page Optimization",
  description:
    "Lorem ipsum is a dummy or placeholder text commonly used in graphic design",
  image: {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Team working image
  },
  lists: [
    {
      id: 1,
      text: "Comprehensive keyword discovery (short-tail, long-tail, and LSI)",
    },
    { id: 2, text: "Competitor keyword gap and opportunity analysis" },
    { id: 3, text: "Search volume, CPC, and difficulty benchmarking" },
    {
      id: 4,
      text: "Keyword clustering by buyer journey stage (awareness → consideration → decision)",
    },
    { id: 5, text: "Seasonal and trending keyword identification" },
    { id: 6, text: "Global, regional, and multilingual keyword lists" },
  ],
};

const technicalSeoData = {
  tag: "Our SEO Services",
  title: "Technical SEO",
  description:
    "Lorem ipsum is a dummy or placeholder text commonly used in graphic design",
  image: {
    // Use the URL for the tech team image shown
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  lists: [
    {
      id: 1,
      text: "Comprehensive keyword discovery (short-tail, long-tail, and LSI)",
    },
    { id: 2, text: "Competitor keyword gap and opportunity analysis" },
    { id: 3, text: "Search volume, CPC, and difficulty benchmarking" },
    {
      id: 4,
      text: "Keyword clustering by buyer journey stage (awareness → consideration → decision)",
    },
    { id: 5, text: "Seasonal and trending keyword identification" },
    { id: 6, text: "Global, regional, and multilingual keyword lists" },
  ],
};

const internationalSeoData = {
  tag: "Our SEO Services",
  title: "International & Multilingual SEO",
  description:
    "Lorem ipsum is a dummy or placeholder text commonly used in graphic design",
  image: {
    // Image of two people looking at a monitor
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  lists: [
    {
      id: 1,
      text: "Comprehensive keyword discovery (short-tail, long-tail, and LSI)",
    },
    { id: 2, text: "Competitor keyword gap and opportunity analysis" },
    { id: 3, text: "Search volume, CPC, and difficulty benchmarking" },
    {
      id: 4,
      text: "Keyword clustering by buyer journey stage (awareness → consideration → decision)",
    },
    { id: 5, text: "Seasonal and trending keyword identification" },
    { id: 6, text: "Global, regional, and multilingual keyword lists" },
  ],
};

export default async function NewSlugaPage({}: Props) {
  const response = await getHomepageData();

  const ourCase = response.data.blocks.find(
    (block: any) => block.__component === "homepage.our-case"
  );

  return (
    <div className="p-3 space-y-10">
      <HeroSectionSlug />
      <SeoApproach />
      <ServiceHighlight data={dummyData} />
      <ServiceHighlightAlternate data={ServiceHighlightAlternateData} />
      <TechnicalSeo data={technicalSeoData} />
      <InternationalSeo data={internationalSeoData} />
      <SeoMetrics />
      <OurCase data={ourCase} />
      <SeoProcess />
      <ClientReviewComponent />
    </div>
  );
}

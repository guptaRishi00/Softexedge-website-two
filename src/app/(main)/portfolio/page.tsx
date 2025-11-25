import HeroSectionCareer from "@/components/careers/HeroSectionCareer";
import Clients from "@/components/portfolio/Clients";
import PortfolioWork from "@/components/portfolio/PortfolioWork";
import { getPageData } from "@/data/loader";

export default async function Portfolio() {
  try {
    const response = await getPageData("portfolio");

    const page = response?.data?.[0];
    if (!page) {
      return <div className="text-center py-20 text-xl">Page not found</div>;
    }

    const blocks = page?.attributes?.blocks || page?.blocks || [];

    const heroSectionData = blocks.find(
      (block: any) => block.__component === "digital-marketing.hero-section"
    );
    const portfolioWork = blocks.find(
      (block: any) => block.__component === "portfoliopage.portfolio-work"
    );
    const clients = blocks.find(
      (block: any) => block.__component === "portfoliopage.clients"
    );

    return (
      <main className="p-3 space-y-10">
        {heroSectionData && <HeroSectionCareer data={heroSectionData} />}
        {portfolioWork && <PortfolioWork data={portfolioWork} />}
        {clients && <Clients data={clients} />}
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

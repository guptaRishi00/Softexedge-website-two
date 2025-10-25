import HeroSection from "@/components/homepage/HeroSection";
import { getHomepageData } from "@/data/loader";

export default async function Home() {
  const response = await getHomepageData();

  const heroSectionData = response.data.blocks.find(
    (block: any) => block.__component === "shared-components.hero-section"
  );

  console.log(heroSectionData);

  return (
    <div className="p-3">
      <HeroSection data={heroSectionData} />
    </div>
  );
}

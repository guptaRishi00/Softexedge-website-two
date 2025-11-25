import { getHomepageData } from "@/data/loader";
import React from "react";
import Brands from "../homepage/Brands";

type Props = {};

export default async function BrandComponet({}: Props) {
  const response = await getHomepageData();

  // FIX 1: Use the correct component name "homepage.brands"
  const brands = response.data.blocks.find(
    (block: any) => block.__component === "homepage.brands"
  );

  // FIX 2: Return null if no brands block is found to prevent passing undefined
  if (!brands) return null;

  return <Brands data={brands} />;
}

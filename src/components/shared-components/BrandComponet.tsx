import { getHomepageData } from "@/data/loader";
import React from "react";
import Brands from "../homepage/Brands";

type Props = {};

export default async function BrandComponet({}: Props) {
  const response = await getHomepageData();

  const brands = response.data.blocks.find(
    (block: any) => block.__component === "shared-components.brands"
  );
  return <Brands data={brands} />;
}

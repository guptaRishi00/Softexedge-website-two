import { getPageData } from "@/data/loader";
import React from "react";
import Review from "../aboutpage/Review";

type Props = {};

export default async function ClientReviewComponent({}: Props) {
  const response = await getPageData("about");

  const page = response?.data?.[0];
  if (!page) {
    return <div className="text-center py-20 text-xl">Page not found</div>;
  }
  const blocks = page?.attributes?.blocks || page?.blocks || [];

  // FIX: Find the specific review component directly
  const reviewData = blocks.find(
    (block: any) => block.__component === "aboutpage.review"
  );

  return <>{reviewData && <Review data={reviewData} />}</>;
}

"use client";
import React, { useCallback, useEffect, useState } from "react";
import TextSlider from "./TextSlider";
import ImageSlider from "./ImageSlider";

export default function About({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract images for ImageSlider: [{ url: string, alt: string, text: string }]
  const IMAGES = data?.carousel?.map((item: any) => ({
    url: item.image.url,
    alt: item.text, // Use text as alt
    text: item.text,
  }));

  // Extract text strings for TextSlider: [string]
  const phrases = data?.carousel?.map((item: any) => item.text);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === IMAGES?.length - 1) return 0;
      return index + 1;
    });
  }, [IMAGES?.length]);

  useEffect(() => {
    if (IMAGES?.length > 0) {
      const interval = setInterval(showNext, 3000);
      return () => clearInterval(interval);
    }
  }, [showNext, IMAGES?.length]);

  return (
    // Updated: Added 'flex flex-col' to ensure vertical stacking on mobile
    <div className="flex flex-col lg:grid min-h-screen lg:grid-cols-2 items-center gap-10 bg-black px-5 text-white rounded-3xl">
      {/* Updated: Removed 'hidden md:block' to make text visible on mobile */}
      <div className="w-full lg:w-full">
        <TextSlider texts={phrases} currentIndex={currentIndex} />
      </div>

      <div className="w-full">
        <ImageSlider
          images={IMAGES}
          currentIndex={currentIndex}
          onIndexChange={setCurrentIndex}
        />
      </div>
    </div>
  );
}

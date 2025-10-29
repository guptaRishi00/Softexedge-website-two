"use client";
import React, { useCallback, useEffect, useState } from "react";
import TextSlider from "./TextSlider";
import ImageSlider from "./ImageSlider";

export default function About({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract images for ImageSlider: [{ url: string, alt: string, text: string }]
  // Updated based on the data structure
  const IMAGES = data?.carousel?.map((item: any) => ({
    url: item.image.url,
    alt: item.text, // Use text as alt
    text: item.text,
  }));

  // Extract text strings for TextSlider: [string]
  // Updated based on the data structure
  const phrases = data?.carousel?.map((item: any) => item.text);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === IMAGES?.length - 1) return 0; // Use IMAGES.length

      return index + 1;
    });
  }, [IMAGES?.length]); // Depend on IMAGES.length

  useEffect(() => {
    if (IMAGES?.length > 0) {
      // Check IMAGES.length
      const interval = setInterval(showNext, 3000);
      return () => clearInterval(interval);
    }
  }, [showNext, IMAGES?.length]); // Depend on IMAGES.length

  return (
    <div className="lg:grid min-h-screen lg:grid-cols-2 items-center gap-10 bg-black px-5 text-white rounded-3xl">
      <div className="lg:w-full hidden md:block">
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

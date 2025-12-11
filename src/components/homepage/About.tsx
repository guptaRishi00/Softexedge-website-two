"use client";
import React, { useCallback, useEffect, useState } from "react";
import TextSlider from "./TextSlider";
import ImageSlider from "./ImageSlider";

export default function About({ data }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract images for ImageSlider
  const IMAGES = data?.carousel?.map((item: any) => ({
    url: item.image.url,
    alt: item.text,
    text: item.text,
  }));

  // Extract text strings for TextSlider
  const phrases = data?.carousel?.map((item: any) => item.text);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === (IMAGES?.length || 0) - 1) return 0;
      return index + 1;
    });
  }, [IMAGES?.length]);

  useEffect(() => {
    if (IMAGES?.length > 0) {
      const interval = setInterval(showNext, 4000); // Adjusted speed to 4s
      return () => clearInterval(interval);
    }
  }, [showNext, IMAGES?.length]);

  return (
    <section className="relative w-full h-screen bg-black text-white rounded-3xl overflow-hidden px-6 lg:px-16 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full h-full items-center">
        {/* LEFT COLUMN: Tag + Text Slider */}
        <div className="flex flex-col justify-center h-full relative">
          {/* Tag */}

          {/* Text Slider Component */}
          <div className="w-full">
            <TextSlider texts={phrases} currentIndex={currentIndex} />
          </div>
        </div>

        {/* RIGHT COLUMN: Image Slider */}
        <div className="w-full h-full flex items-center justify-center relative">
          <ImageSlider
            images={IMAGES}
            currentIndex={currentIndex}
            onIndexChange={setCurrentIndex}
          />
        </div>
      </div>
    </section>
  );
}

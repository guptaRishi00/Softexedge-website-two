"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageProp {
  url: string;
  alt?: string;
  text: string;
}

interface ImageSliderProps {
  images: ImageProp[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export default function ImageSlider({
  images,
  currentIndex,
  onIndexChange,
}: ImageSliderProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const listener = () => setIsDesktop(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  if (!images || images.length === 0) return null;

  /**
   * This function determines exactly where each image should sit
   * relative to the current active index.
   */
  const getSlideStyle = (index: number) => {
    const len = images.length;

    // 1. Calculate basic distance (e.g., if current is 2 and this is 3, dist is 1)
    let distance = index - currentIndex;

    // 2. Handle the "Wrap Around" logic for infinite scrolling
    // If we are at the last slide, the first slide (index 0) should appear as "Next" (+1)
    if (index === 0 && currentIndex === len - 1) {
      distance = 1;
    }
    // If we are at the first slide, the last slide should appear as "Previous" (-1)
    else if (index === len - 1 && currentIndex === 0) {
      distance = -1;
    }

    // 3. Determine visibility
    // We only care about the Current (0), Next (+1), and Previous (-1) slides.
    // Everything else gets hidden far away to prevent glitches.
    const isActive = distance === 0;
    const isNear = Math.abs(distance) === 1;

    // 4. Calculate Transform
    // Desktop moves Y axis, Mobile moves X axis
    const translateValue = distance * 100; // 100% distance
    const transform = isDesktop
      ? `translateY(${translateValue}%)`
      : `translateX(${translateValue}%)`;

    return {
      transform,
      opacity: isActive ? 1 : 0.4, // Fade out non-active images
      zIndex: isActive ? 10 : 0, // Keep active on top
      visibility: isActive || isNear ? "visible" : "hidden", // Hide others
      transition: "all 0.7s cubic-bezier(0.25, 1, 0.5, 1)", // Smooth ease
    } as React.CSSProperties;
  };

  return (
    <div className="w-full h-full flex flex-col justify-center relative">
      {/* Container Frame 
        - h-[350px] to h-[500px]: Keeps the visual "window" smaller than the screen
        - overflow-hidden: Hides the slides waiting above/below
      */}
      <div className="relative w-full h-[350px] lg:h-[100vh] rounded-[2.5rem] overflow-hidden bg-transparent">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full flex items-center justify-center p-2"
            style={getSlideStyle(index)}
          >
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={image.url}
                alt={image.alt || "Slider Image"}
                fill
                className="object-cover"
                priority={index === currentIndex}
              />

              {/* Optional: Dark overlay on inactive slides for extra focus */}
              {index !== currentIndex && (
                <div className="absolute inset-0 bg-black/40 transition-colors duration-700" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Dots */}
      <div className="flex lg:hidden justify-center items-center gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => onIndexChange(index)}
            className={`h-2 w-2 rounded-full border border-white transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-6"
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

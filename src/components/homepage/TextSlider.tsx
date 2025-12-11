"use client";

import { memo } from "react";

interface TextSliderProps {
  texts: string[];
  currentIndex: number;
}

export default memo(function TextSlider({
  texts,
  currentIndex,
}: TextSliderProps) {
  if (!texts || texts.length === 0) {
    return <div>No texts to display.</div>;
  }

  const prevTextIndex =
    currentIndex === 0 ? texts.length - 1 : currentIndex - 1;
  const nextTextIndex =
    currentIndex === texts.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
      {/* Previous Text (Faded Above) */}
      <div
        key={`prev-${prevTextIndex}`}
        className={`absolute top-1/2 left-0 w-full transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${
            currentIndex === prevTextIndex + 1 ||
            (prevTextIndex === texts.length - 1 && currentIndex === 0)
              ? "opacity-0 -translate-y-[150%]" // Exit animation
              : "opacity-40 -translate-y-[120%]" // Resting position
          }`}
      >
        <p className="text-3xl lg:text-5xl font-medium text-neutral-600 text-left">
          {texts[prevTextIndex]}
        </p>
      </div>

      {/* Current Text (Active Center) */}
      <div
        key={`curr-${currentIndex}`}
        className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-10"
      >
        <p className="text-4xl lg:text-6xl font-medium text-white text-left leading-[1.1]">
          {texts[currentIndex]}
        </p>
      </div>

      {/* Next Text (Faded Below) */}
      <div
        key={`next-${nextTextIndex}`}
        className={`absolute top-1/2 left-0 w-full transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${
            currentIndex === nextTextIndex - 1 ||
            (nextTextIndex === 0 && currentIndex === texts.length - 1)
              ? "opacity-0 translate-y-[150%]" // Exit animation
              : "opacity-40 translate-y-[120%]" // Resting position
          }`}
      >
        <p className="text-3xl lg:text-5xl font-medium text-neutral-600 text-left">
          {texts[nextTextIndex]}
        </p>
      </div>
    </div>
  );
});

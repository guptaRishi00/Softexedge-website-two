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
    <div className="relative h-screen  flex flex-col gap-10 justify-center overflow-hidden">
      {/* Previous Text (faded out) */}
      <div
        key={prevTextIndex}
        className={`absolute text-5xl font-bold transition-all duration-500 ease-in-out
                    ${
                      currentIndex === prevTextIndex + 1 ||
                      (prevTextIndex === texts.length - 1 && currentIndex === 0)
                        ? "opacity-0 -translate-y-full"
                        : "opacity-50 -translate-y-full" // Changed from -translate-y-1/2
                    }
                    `}
        style={{
          color: "rgb(60, 60, 60)",
        }}
      >
        {texts[prevTextIndex]}
      </div>

      {/* Current Text */}
      <div
        key={currentIndex}
        className={`absolute text-5xl font-bold transition-all duration-500 ease-in-out ${"opacity-100 translate-y-0"}`}
        style={{
          color: "white",
        }}
      >
        {texts[currentIndex]}
      </div>

      {/* Next Text (faded out) */}
      <div
        key={nextTextIndex}
        className={`absolute text-5xl font-bold transition-all duration-500 ease-in-out
                    ${
                      currentIndex === nextTextIndex - 1 ||
                      (nextTextIndex === 0 && currentIndex === texts.length - 1)
                        ? "opacity-0 translate-y-full"
                        : "opacity-50 translate-y-full" // Changed from translate-y-1/2
                    }
                    `}
        style={{
          color: "rgba(255, 255, 255, 0.2)",
        }}
      >
        {texts[nextTextIndex]}
      </div>
    </div>
  );
});

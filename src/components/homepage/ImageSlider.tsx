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
    const media = window.matchMedia("(min-width: 768px)");
    const listener = () => setIsDesktop(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  const transformValue = isDesktop
    ? `translateY(${-101 * currentIndex}%)`
    : `translateX(${-102 * currentIndex}%)`;

  return (
    <div className="flex flex-col w-full h-screen gap-5">
      <div className="flex-1 relative overflow-hidden p-5">
        <div
          className={`flex h-full w-full transition-transform duration-500 ease-in-out gap-2 ${
            isDesktop ? "flex-col" : "flex-row"
          }`}
          style={{ transform: transformValue }}
        >
          {images.map((image: ImageProp, index: number) => (
            <div
              className="h-full w-full shrink-0 grow-0 flex flex-col md:flex-row items-center justify-center"
              key={index}
            >
              <div className="w-full h-3/4 md:w-[660px] md:h-[660px] p-5 lg:p-8 relative ">
                <Image
                  src={image.url}
                  alt={image.alt || "Image Slider"}
                  fill
                  className="object-cover object-center rounded-3xl "
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:hidden justify-center items-center gap-3">
        {images.map((_, index: number) => (
          <button
            key={index}
            onClick={() => onIndexChange(index)}
            className={`h-1 w-1 rounded-full border border-white transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`View Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

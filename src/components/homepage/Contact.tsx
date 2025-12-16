"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Contact({ data }: any) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonials = data?.leftCard?.testimonials || [];

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentTestimonialIndex((prev: any) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-10 px-4 lg:gap-16 lg:py-10 lg:px-12 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="bg-white/10 text-white pt-3 pb-2 px-5 rounded-full">
          {data?.tag}
        </p>
        <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
          {data?.title}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch w-full h-full gap-8 lg:gap-10 mt-10">
        {/* === Left Card (Image) === */}
        <div
          className="relative w-full h-auto min-h-[600px] lg:h-auto bg-cover border border-gray-800 bg-center rounded-3xl flex flex-col justify-between overflow-hidden"
          style={{ backgroundImage: `url(${data?.leftCard?.image?.url})` }}
        >
          {/* Black gradient overlay for better text readability and style */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>

          <div className="relative z-10 flex flex-col items-start justify-center gap-8 p-6 lg:p-12">
            <p className="bg-white/10 text-white pt-3 pb-2 px-5 rounded-full">
              {data?.leftCard?.tag}
            </p>
            <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-start lg:gap-2 text-white">
              {data?.leftCard.title}
            </h1>
            <p className="text-white max-w-md">{data?.leftCard?.description}</p>
          </div>

          {/* === CAROUSEL SECTION === */}
          <div className="relative z-10 w-full p-6 lg:p-12">
            {testimonials.length > 0 && (
              <div className="w-full max-w-xl mx-auto  lg:mx-0">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial: any) => (
                    <div key={testimonial.id} className="w-full shrink-0 px-2">
                      <div className="bg-white rounded-2xl p-6 text-black h-full flex flex-col justify-between items-start gap-5 shadow-lg">
                        <p className="text-4xl mb-4">
                          <Image
                            src={testimonial.icon.url}
                            alt={testimonial.icon.name || "icon"}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </p>
                        <p className="text-sm lg:text-lg w-full font-medium md:text-md text-black mb-6 leading-relaxed">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center gap-3">
                          {testimonial.profile?.url && (
                            <div className="overflow-hidden rounded-full w-12 h-12 shrink-0">
                              <Image
                                src={testimonial.profile.url}
                                alt={
                                  testimonial.profile.name || testimonial.name
                                }
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div>
                            <p className="font-medium text-md text-black">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {testimonial.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* === Right Card (Form) === */}
        <div className="w-full h-auto lg:h-auto bg-[#121212] rounded-3xl py-8 px-6 lg:py-10 lg:px-12 space-y-8 lg:space-y-10">
          <p className="text-white text-3xl lg:text-4xl font-medium">
            Help us get to know you.
          </p>
          <form action="" className="w-full flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row items-center w-full gap-5 lg:gap-10">
              <div className="flex flex-col gap-3 w-full">
                <p className="text-white">Full Name*</p>
                <input
                  type="text"
                  className="bg-[#000000] px-4 py-5 rounded-full text-white outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <p className="text-white">Last Name*</p>
                <input
                  type="text"
                  className="bg-[#000000] px-4 py-5 rounded-full text-white outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p className="text-white">Work Email*</p>
              <input
                type="text"
                className="bg-[#000000] px-4 py-5 rounded-full text-white outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p className="text-white">Phone Number*</p>
              <input
                type="text"
                className="bg-[#000000] px-4 py-5 rounded-full text-white outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p className="text-white">Add Service*</p>
              <input
                type="text"
                className="bg-[#000000] px-4 py-5 rounded-full text-white outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-white">How did you hear about Us?*</p>
              <input
                type="text"
                className="bg-[#000000] px-4 py-5 rounded-full text-white outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button className="w-full bg-linear-to-r px-4 py-3 rounded-full from-[#3445E7] via-[#2F85EA] to-[#07D6F3] text-white font-medium hover:opacity-90 transition-opacity">
              Contact us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

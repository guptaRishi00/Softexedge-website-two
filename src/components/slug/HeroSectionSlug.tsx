import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const HeroSectionSlug: React.FC = () => {
  return (
    <section className="w-full bg-white min-h-screen px-4 py-12 md:px-8 lg:px-12 font-sans selection:bg-blue-100">
      <div className="w-full mx-auto">
        {/* Top Tag */}
        <div className="mb-8">
          <span className="inline-block px-6 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
            SEO Services
          </span>
        </div>

        {/* Hero Text Content */}
        <div className="w-full mb-12">
          <h1 className="text-4xl md:text-7xl font-medium text-gray-900 tracking-tight leading-none mb-6">
            Global SEO Services Built for Visibility,{" "}
            <br className="hidden md:block" />
            Built for Growth
          </h1>
          <p className="text-lg md:text-xl text-black leading-relaxed w-full">
            We don't just rank you — we elevate your brand across borders. Our
            SEO strategies are crafted to drive traffic, convert leads, and
            deliver measurable results for brands worldwide.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* Left Column (Main Image + CTAs) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              {/* Blue "Let's Talk" Button with Avatars */}
              <button className="group relative bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] transition-all duration-300 rounded-[2rem] pl-8 pr-2 py-2 flex items-center gap-4 h-16">
                <span className="text-white font-medium text-lg ml-2">
                  let's talk
                </span>
                <div className="flex -space-x-3 p-1.5 rounded-full backdrop-blur-sm">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              </button>

              {/* Secondary Button */}
              <button className="h-16 px-8 rounded-[2rem] border border-gray-200 text-gray-800 font-medium hover:bg-gray-50 transition-colors bg-white shadow-sm">
                View Our Work
              </button>
            </div>

            {/* Main Team Image with Clip Path */}
            <div className="relative w-full h-[300px] md:h-[450px] bg-gray-200 mt-2 group overflow-hidden">
              {/* Using clip-path for a custom super-ellipse/squircle mask */}
              <div
                className="w-full h-full absolute inset-0"
                style={{
                  clipPath: "inset(0% round 40px)", // Creates the smooth rounded corners
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-[40px] pointer-events-none" />
            </div>
          </div>

          {/* Right Column (Stats & Charts) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Black Card */}
            <div className="bg-[#111] rounded-[2.5rem] p-8 text-white h-[240px] flex flex-col justify-between relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>

              <div className="flex justify-between items-start">
                <div className="">
                  <h3 className="text-6xl font-bold mb-2">100+</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[270px] mt-10">
                    Trusted by over 100+ top companies that rely on our services
                    to grow and succeed.
                  </p>
                </div>

                <button className="w-18 h-18 rounded-full bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowUpRight className="text-white w-8 h-8" />
                </button>
              </div>
            </div>

            {/* Chart Card */}
            <div className="bg-gray-50 rounded-[2.5rem] p-8 h-auto flex flex-col justify-between gap-12 border border-gray-100">
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  SEO That Moves the Metrics
                </h4>
                <h4 className="text-xl font-bold text-gray-900">That Matter</h4>
              </div>

              {/* Bar Chart Visualization using Clip-Path */}
              <div className="flex items-end justify-between gap-2 h-24 mt-4 px-2">
                <Image
                  src="/graph.svg"
                  alt="Bar Chart"
                  width={150}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSlug;

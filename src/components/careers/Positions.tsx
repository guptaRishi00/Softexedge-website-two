import React from "react";
import LinkComp from "../LinkComp";

type Props = {
  data: any;
};

export default function Positions({ data }: Props) {
  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-8 px-4 gap-8 lg:gap-10 lg:py-10 lg:px-10 overflow-hidden">
      {/* Tag */}
      <p className="bg-white/10 text-white pt-2 pb-1 px-4 text-sm lg:text-base rounded-full">
        {data?.tag}
      </p>

      {/* Title */}
      <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
        {data?.title}
      </h1>

      {/* Job List Container */}
      <div className="w-full flex flex-col">
        {data?.jobs?.map((job: any) => (
          <div
            className="border-b border-white/20 last:border-0 py-6 lg:py-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-4"
            key={job.id}
          >
            {/* Job Name */}
            <p className="text-white text-xl lg:text-2xl font-medium shrink-0">
              {job?.name}
            </p>

            {/* Tags Wrapper - Added flex-wrap for mobile */}
            <div className="flex flex-wrap items-center gap-3 lg:gap-5">
              {job.tags.map((tag: any, index: number) => (
                <div
                  key={index}
                  className="border border-white/40 px-4 py-2 lg:px-5 lg:py-4 rounded-xl flex items-center"
                >
                  <p className="text-white text-xs lg:text-sm whitespace-nowrap">
                    {tag.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="w-full lg:w-auto">
              <LinkComp
                color="blue"
                href={"/"}
                className="px-6 py-3 text-center block w-full lg:w-auto lg:inline-block"
              >
                {job.button.text}
              </LinkComp>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

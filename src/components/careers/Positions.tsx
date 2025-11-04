import React from "react";
import LinkComp from "../LinkComp";

type Props = {};

export default function Positions({ data }: any) {
  return (
    <div className="h-auto bg-black rounded-3xl flex flex-col items-center py-10 lg:gap-10 lg:py-10 lg:px-10 overflow-hidden">
      <p className="bg-white/10 text-white pt-3 pb-2 px-4 rounded-full">
        {data?.tag}
      </p>

      <h1 className="font-medium text-4xl lg:text-6xl flex flex-col text-center items-center lg:gap-2 text-white">
        {data?.title}
      </h1>

      <div className="w-full">
        {data?.jobs?.map((job: any) => (
          <div
            className="border-b border-white py-5 flex items-center justify-between"
            key={job.id}
          >
            <p className="text-white text-2xl">{job?.name}</p>

            <div className="flex items-center gap-5">
              {job.tags.map((tag: any) => (
                <div className="border border-white px-5 py-4 rounded-xl flex items-center">
                  <p className="text-white text-sm ">{tag.text}</p>
                </div>
              ))}
            </div>

            <LinkComp color="blue" href={"/"} className="px-5 py-3">
              {job.button.text}
            </LinkComp>
          </div>
        ))}
      </div>
    </div>
  );
}

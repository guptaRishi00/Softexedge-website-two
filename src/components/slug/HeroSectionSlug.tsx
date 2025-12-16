import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import UniqueDiv from "../UniqueDiv";
import LinkComp from "../LinkComp";

export default function HeroSectionSlug({ data }: any) {
  return (
    <section className="w-full bg-white min-h-screen px-4 py-12 md:px-8 lg:px-18 font-sans selection:bg-blue-100">
      <div className="">
        <div className="flex items-start flex-col gap-8">
          <p className="font-medium bg-[#0000001A] px-8 py-3 rounded-full">
            {data.tag}
          </p>
          <p className="lg:text-7xl font-medium">{data.title}</p>
          <p className="font-medium text-xl">{data.description}</p>

          <div className="lg:flex lg:gap-6 flex-col lg:flex-row flex items-center gap-4">
            <LinkComp
              href={data?.letsTalk?.href}
              className="font-regular bg-white flex items-center lg:pb-2 lg:pt-3 lg:px-4 px-5 py-2 gap-3 lg:text-lg border border-gray-300"
            >
              {data?.letsTalk?.text}
              {data?.letsTalk?.image && (
                <Image
                  src={data.letsTalk.image.url}
                  width={60}
                  height={60}
                  alt="button logo"
                  className="lg:w-23 lg:h-12"
                />
              )}
            </LinkComp>
            <LinkComp
              href={data?.viewOurWork?.href}
              className="font-regular bg-white flex items-center lg:pt-5 lg:pb-4 lg:px-5 px-5 py-2 lg:py-8 gap-3 lg:text-lg border border-gray-300"
            >
              {data?.viewOurWork?.text}
            </LinkComp>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <UniqueDiv data={data} className="relative" />

          <div className="flex flex-col justify-between items-center gap-8">
            <div className="bg-black w-full h-auto py-8 px-7 flex flex-col items-start gap-8 rounded-4xl">
              <div className="flex items-start justify-between w-full">
                <p className="text-6xl text-white">{data.cardOne.count}</p>
                <div className="bg-linear-to-r from-[#07D6F3] via-[#2F85EA] to-[#3445E7] p-5 rounded-full">
                  <ArrowUpRight size={30} color="white" />
                </div>
              </div>
              <p className="text-white text-xl max-w-xl">
                {data.cardOne.description}
              </p>
            </div>
            <div className="bg-[#F8F8F8] w-full rounded-4xl py-8 px-7">
              <p className="font-medium text-2xl">{data.cardTwo.title}</p>

              <Image
                src={data.cardTwo.image.url}
                width={500}
                height={500}
                alt="card image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

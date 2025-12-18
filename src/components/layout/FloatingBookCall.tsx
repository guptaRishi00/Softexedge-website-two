import Image from "next/image";
import LinkComp from "../LinkComp";

export default function FloatingBookCall({ data }: { data: any }) {
  if (!data?.bookCall) return null;

  return (
    <div className="fixed bottom-6 right-6 z-9999 group">
      <LinkComp
        href={data.bookCall.href}
        className="flex items-center bg-white p-2 rounded-full shadow-2xl transition-all duration-500 ease-in-out hover:scale-105"
      >
        {/* Icon Container */}
        <div className="shrink-0">
          {data.bookCall.image?.url && (
            <Image
              src={data.bookCall.image.url}
              width={40}
              height={40}
              alt="book call"
              className="bg-[#04034C] p-2 rounded-full"
            />
          )}
        </div>

        <div className="max-w-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-w-[200px] group-hover:ml-3 group-hover:pr-4">
          <span className="text-black font-medium text-sm whitespace-nowrap">
            {data.bookCall.text}
          </span>
        </div>
      </LinkComp>
    </div>
  );
}

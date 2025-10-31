import type { Metadata } from "next";
import "../globals.css";

import PageHeader from "@/components/layout/PageHeader";
import { getGlobalData } from "@/data/loader";

export const metadata: Metadata = {
  title: "Softexedge",
  description: "We Help Brands Scale",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await getGlobalData();
  const data = response.data.header;

  // Do NOT include <html> or <body> tags here
  return (
    <>
      <div className="relative top-0 left-0 w-full z-10 px-5 py-6 lg:py-6 lg:px-20">
        <PageHeader data={data} />
      </div>
      {children}
    </>
  );
}

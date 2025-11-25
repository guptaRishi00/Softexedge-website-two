import type { Metadata } from "next";
import "../globals.css";

import PageHeader from "@/components/layout/PageHeader";
import { getGlobalData } from "@/data/loader";
import Footer from "@/components/layout/Footer";

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

  const headerData = response.data.blocks.find(
    (block: any) => block.__component === "layout.header"
  );

  const footerData = response.data.blocks.find(
    (block: any) => block.__component === "layout.footer"
  );

  return (
    <>
      <div className="relative top-0 left-0 w-full z-10 px-5 py-6 lg:py-6 lg:px-20">
        <PageHeader data={headerData} />
      </div>
      {children}
      <div className="p-3">
        <Footer data={footerData} />
      </div>
    </>
  );
}

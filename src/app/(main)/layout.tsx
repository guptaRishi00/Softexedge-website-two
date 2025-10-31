import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import PageHeader from "@/components/layout/PageHeader";
import { getGlobalData } from "@/data/loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute top-0 left-0 w-full z-10 px-5 py-6 lg:py-6 lg:px-10">
          <PageHeader data={data} />
        </div>
        {children}
      </body>
    </html>
  );
}

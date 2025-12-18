import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getGlobalData, getHomepageData } from "@/data/loader";
import Footer from "@/components/layout/Footer";
import FloatingBookCall from "@/components/layout/FloatingBookCall";

export const metadata: Metadata = {
  title: "Softexedge",
  description: "We Help Brands Scale",
};

const itcAvg = localFont({
  src: [
    {
      path: "./fonts/ITC Avant Garde Gothic CE Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ITC Avant Garde Gothic CE Book Oblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/ITC Avant Garde Gothic Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ITC Avant Garde Gothic Medium Oblique.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/ITC Avant Garde Gothic CE Demi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ITC Avant Garde Gothic CE Demi Oblique.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/ITC Avant Garde Gothic Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ITC Avant Garde Gothic Bold Oblique.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-itc-avg",
});

const itcAvgCondensed = localFont({
  src: [
    {
      path: "./fonts/ITC Avant Garde Gothic Book Condensed.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ITC Avant Garde Gothic Medium Condensed.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/ITC Avant Garde Gothic Demi Condensed.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ITC Avant Garde Gothic Bold Condensed.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-itc-avg-condensed",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await getGlobalData();

  const footerData = response.data.blocks.find(
    (block: any) => block.__component === "layout.footer"
  );

  const HomePageResponse = await getHomepageData();

  const heroSectionData = HomePageResponse.data.blocks.find(
    (block: any) => block.__component === "homepage.hero-section" // Was "shared-components.hero-section"
  );
  return (
    <html lang="en">
      <body
        className={`${itcAvg.variable} ${itcAvgCondensed.variable} antialiased`}
      >
        {children}

        <FloatingBookCall data={heroSectionData} />

        <div className="p-3">
          <Footer data={footerData} />
        </div>
      </body>
    </html>
  );
}

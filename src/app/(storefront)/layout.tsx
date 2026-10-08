import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComparisonBar } from "@/components/car/ComparisonBar";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { AutoDealerSchema } from "@/components/seo/AutoDealerSchema";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white pb-14 md:pb-0">
      <AutoDealerSchema />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ComparisonBar />
      <MobileContactBar />
    </div>
  );
}

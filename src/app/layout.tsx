import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://toyotabienhoa.com.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Toyota Biên Hòa | Xe Đã Qua Sử Dụng Chính Hãng Toyota Sure",
    template: "%s | Toyota Biên Hòa",
  },
  description:
    "Cổng thông tin xe ô tô đã qua sử dụng chính hãng tại đại lý Toyota Biên Hòa (Đồng Nai & Tiền Giang). Xe được kiểm định 176 hạng mục, bảo hành 1 năm hoặc 20.000km, cam kết không đâm đụng, hỗ trợ trả góp TFS lãi suất ưu đãi.",
  keywords: [
    "Toyota Biên Hòa",
    "xe cũ Biên Hòa",
    "xe đã qua sử dụng",
    "Toyota Sure Đồng Nai",
    "Camry cũ",
    "Fortuner cũ",
    "Vios cũ",
    "Corolla Cross cũ",
    "thu mua xe cũ",
  ],
  authors: [{ name: "Toyota Biên Hòa" }],
  creator: "Toyota Biên Hòa",
  publisher: "Toyota Biên Hòa",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "Toyota Biên Hòa",
    title: "Toyota Biên Hòa | Xe Đã Qua Sử Dụng Chính Hãng Toyota Sure",
    description:
      "Kiểm định 176 hạng mục kỹ thuật, bảo hành chính hãng toàn quốc 1 năm hoặc 20.000 km. Hỗ trợ thu mua xe cũ giá cao & đổi xe mới.",
    images: [
      {
        url: "/images/showroom-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Showroom Toyota Biên Hòa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toyota Biên Hòa | Xe Đã Qua Sử Dụng Chính Hãng Toyota Sure",
    description:
      "Kiểm định 176 hạng mục kỹ thuật, bảo hành chính hãng toàn quốc 1 năm hoặc 20.000 km.",
    images: ["/images/showroom-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="bg-surface text-charcoal-body antialiased min-h-screen flex flex-col font-sans selection:bg-toyota-red selection:text-white">
        {children}
      </body>
    </html>
  );
}

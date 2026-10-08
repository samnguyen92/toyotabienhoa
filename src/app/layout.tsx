import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toyota Biên Hoà | Xe Đã Qua Sử Dụng Chính Hãng",
  description:
    "Cổng thông tin xe ô tô đã qua sử dụng chính hãng tại đại lý Toyota Biên Hoà (Đồng Nai). Xe được kiểm tra 176 hạng mục, cam kết chất lượng, bảo hành chính hãng và hỗ trợ trả góp lãi suất ưu đãi.",
  keywords: [
    "Toyota Biên Hoà",
    "xe cũ Biên Hoà",
    "xe đã qua sử dụng",
    "Toyota Sure",
    "Camry cũ",
    "Fortuner cũ",
    "Vios cũ",
    "Corolla Cross cũ",
  ],
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

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Clock, ShieldCheck, Menu, X, Scale } from "lucide-react";
import { useCompareStore } from "@/store/useCompareStore";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const compareItems = useCompareStore((state) => state.selectedCarIds);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Xe đã qua sử dụng", href: "/xe-cu" },
    { name: "Dịch vụ", href: "/dich-vu" },
    { name: "Tư vấn tài chính", href: "/tu-van-tai-chinh" },
    { name: "Tin tức", href: "/tin-tuc" },
    { name: "Về chúng tôi", href: "/ve-chung-toi" },
    { name: "Liên hệ", href: "/lien-he" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/98 backdrop-blur-md border-b border-gray-150 shadow-sm transition-all">
      {/* Top Bar - Thông tin đại lý & Hotline 24/7 */}
      <div className="bg-[#111418] text-gray-300 text-[11px] py-1.5 px-4 border-b border-zinc-800 hidden xl:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-toyota-red" />
              96 ẤP TÂY, XÃ HOÀ HƯNG, HUYỆN CÁI BÈ, TỈNH TIỀN GIANG, TP. BIÊN HÒA, ĐỒNG NAI
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-toyota-red" />
              Thứ 2 - Chủ Nhật: 07:30 - 17:30
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Chúng tôi hỗ trợ 24/7 - Toyota Biên Hòa
            </span>
          </div>

          <a
            href="tel:0938820355"
            className="flex items-center gap-1.5 font-bold text-white hover:text-toyota-red transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-toyota-red" />
            Hotline: 24/7: 0938 820 355
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Toyota Biên Hoà */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-11 w-44 sm:h-12 sm:w-52 transition-transform duration-200 hover:scale-[1.01]">
              <Image
                src="/logo-tbh.png"
                alt="Toyota Biên Hoà"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 176px, 208px"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/";

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-gray-900 font-bold"
                      : "text-gray-600 hover:text-toyota-red"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-toyota-red rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Phone Hotline Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Compare Quick Icon (if items selected) */}
            {compareItems.length > 0 && (
              <Link
                href="/so-sanh"
                className="relative p-2 rounded-lg border border-gray-200 text-gray-600 hover:text-toyota-red hover:border-toyota-red transition-all"
                title="So sánh xe"
              >
                <Scale className="w-4 h-4" />
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-toyota-red text-[10px] font-bold text-white">
                  {compareItems.length}
                </span>
              </Link>
            )}

            {/* Red Phone Hotline Button matching mockup */}
            <a
              href="tel:0938820355"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-toyota-red text-white hover:bg-toyota-hover active:scale-[0.98] transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 fill-white text-white" />
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-bold leading-tight tracking-tight">
                  0938 820 355
                </span>
                <span className="text-[10px] text-white/90 leading-tight">
                  Tư vấn & hỗ trợ
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-3">
            {compareItems.length > 0 && (
              <Link
                href="/so-sanh"
                className="relative p-2 text-gray-700 hover:text-toyota-red"
              >
                <Scale className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-toyota-red text-[10px] font-bold text-white">
                  {compareItems.length}
                </span>
              </Link>
            )}
            <a
              href="tel:0938820355"
              className="p-2 text-toyota-red"
              title="Gọi hotline"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-toyota-red focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-5 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                pathname === link.href
                  ? "text-toyota-red bg-red-50 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span>{link.name}</span>
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href="tel:0938820355"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-toyota-red text-white font-bold text-sm shadow hover:bg-toyota-hover"
            >
              <Phone className="w-4 h-4" />
              Hotline: 0938 820 355 (Tư vấn & hỗ trợ)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

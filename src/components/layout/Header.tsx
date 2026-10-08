"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Clock, MapPin, Menu, X, Car, Scale, ShieldCheck } from "lucide-react";
import { useCompareStore } from "@/store/useCompareStore";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const compareItems = useCompareStore((state) => state.selectedCarIds);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Xe đã qua sử dụng", href: "/xe-cu" },
    { name: "So sánh xe", href: "/so-sanh", badge: compareItems.length },
    { name: "Cam kết chất lượng", href: "/#cam-ket" },
    { name: "Dự toán trả góp", href: "/#tinh-tra-gop" },
    { name: "Quản trị CMS", href: "/studio", isExternal: false },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      {/* Top Bar - Thông tin đại lý */}
      <div className="bg-charcoal-heading text-gray-300 text-xs py-2 px-4 border-b border-zinc-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-toyota-red" />
              Số A17, Xa lộ Hà Nội, KP 5, P. Tân Hiệp, TP. Biên Hoà, Đồng Nai
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-toyota-red" />
              Thứ 2 - Chủ Nhật: 07:30 - 17:30
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Chương trình Toyota Sure - 176 hạng mục kiểm tra
            </span>
            <a
              href="tel:0918565656"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-toyota-red transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-toyota-red" />
              Hotline 24/7: 0918 565 656
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Toyota Biên Hoà */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/logo-tbh.png"
                alt="Toyota Biên Hoà"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 192px, 224px"
              />
            </div>
            <div className="hidden xl:flex flex-col border-l border-gray-200 pl-3">
              <span className="text-xs font-bold tracking-wider text-charcoal uppercase">
                Trung Tâm Xe Đã Qua Sử Dụng
              </span>
              <span className="text-[10px] text-gray-500 font-medium">
                Chính Hãng - Uy Tín - An Tâm
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-toyota-red bg-toyota-light"
                      : "text-charcoal-body hover:text-toyota-red hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    {link.badge !== undefined && link.badge > 0 && (
                      <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-toyota-red rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/so-sanh"
              className="relative p-2.5 rounded-lg border border-gray-200 text-charcoal-muted hover:text-toyota-red hover:border-toyota-red transition-all"
              title="So sánh xe"
            >
              <Scale className="w-5 h-5" />
              {compareItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-toyota-red text-[11px] font-bold text-white animate-pulse">
                  {compareItems.length}
                </span>
              )}
            </Link>

            <a
              href="tel:0918565656"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-toyota-red text-white text-sm font-bold shadow-md hover:bg-toyota-hover active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>0918 565 656</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden gap-2">
            <Link
              href="/so-sanh"
              className="relative p-2 text-charcoal hover:text-toyota-red"
            >
              <Scale className="w-6 h-6" />
              {compareItems.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-toyota-red text-[10px] font-bold text-white">
                  {compareItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-charcoal hover:text-toyota-red hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          <div className="py-2 text-xs text-gray-500 border-b border-gray-100 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-toyota-red flex-shrink-0" />
            <span>Biên Hoà, Đồng Nai • Mở cửa 07:30 - 17:30</span>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-semibold ${
                pathname === link.href
                  ? "text-toyota-red bg-toyota-light"
                  : "text-charcoal hover:bg-gray-50"
              }`}
            >
              <span>{link.name}</span>
              {link.badge !== undefined && link.badge > 0 && (
                <span className="px-2 py-0.5 text-xs font-bold text-white bg-toyota-red rounded-full">
                  {link.badge} xe
                </span>
              )}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-100">
            <a
              href="tel:0918565656"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-toyota-red text-white font-bold text-sm shadow hover:bg-toyota-hover"
            >
              <Phone className="w-4 h-4" />
              Gọi Hotline: 0918 565 656
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

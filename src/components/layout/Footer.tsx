"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#111418] text-gray-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-zinc-800/80">
          {/* Column 1: Brand & Contact Info (span 4 on lg) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-48 sm:h-12 sm:w-52">
                <Image
                  src="/logo-tbh.png"
                  alt="Toyota Biên Hoà"
                  fill
                  className="object-contain object-left invert contrast-200 brightness-200"
                />
              </div>
            </div>

            <div className="text-xs text-gray-400 space-y-0.5 pt-1">
              <p className="font-semibold text-gray-200">Công ty TNHH Toyota Biên Hòa</p>
              <p className="text-gray-400">Đại lý Toyota chính hãng • Uy tín — Chất lượng — Tận tâm</p>
            </div>

            <div className="space-y-2.5 pt-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-red-950/60 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-toyota-red" />
                </div>
                <span className="leading-relaxed text-gray-300">
                  96 Ấp Tây, Xã Hòa Hưng, Huyện Cái Bè, Tỉnh Tiền Giang, TP. Biên Hòa, Đồng Nai
                </span>
              </div>

              <a
                href="tel:0938820355"
                className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-6 h-6 rounded-full bg-red-950/60 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-toyota-red" />
                </div>
                <span className="font-bold text-white tracking-wide">
                  0938 820 355
                </span>
              </a>

              <a
                href="mailto:info@toyotabienhoa.com.vn"
                className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-6 h-6 rounded-full bg-red-950/60 flex items-center justify-center shrink-0">
                  <span className="text-xs text-toyota-red font-bold">@</span>
                </div>
                <span className="text-gray-300">
                  info@toyotabienhoa.com.vn
                </span>
              </a>

              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-red-950/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-toyota-red" />
                </div>
                <span className="text-gray-300">
                  7:30 - 17:30 (Thứ 2 - Chủ Nhật)
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Danh mục xe (span 2 on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Danh mục xe
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/xe-cu" className="hover:text-white transition-colors">
                  Xe đã qua sử dụng
                </Link>
              </li>
              <li>
                <Link href="/xe-cu?type=moi" className="hover:text-white transition-colors">
                  Xe mới
                </Link>
              </li>
              <li>
                <Link href="/xe-cu?body=SUV" className="hover:text-white transition-colors">
                  Xe SUV
                </Link>
              </li>
              <li>
                <Link href="/xe-cu?body=Sedan" className="hover:text-white transition-colors">
                  Xe Sedan
                </Link>
              </li>
              <li>
                <Link href="/xe-cu?body=MPV" className="hover:text-white transition-colors">
                  Xe MPV
                </Link>
              </li>
              <li>
                <Link href="/xe-cu?body=Hatchback" className="hover:text-white transition-colors">
                  Xe Hatchback
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Dịch vụ khách hàng (span 2 on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Dịch vụ khách hàng
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/tu-van-tai-chinh" className="hover:text-white transition-colors">
                  Tư vấn tài chính TFS
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-white transition-colors">
                  Bảo dưỡng & Kiểm định 176 điểm
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="hover:text-white transition-colors">
                  Đổi xe cũ lấy xe mới (Trade-in)
                </Link>
              </li>
              <li>
                <Link href="/ve-chung-toi" className="hover:text-white transition-colors">
                  Về Toyota Biên Hòa
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-white transition-colors">
                  Liên hệ & Địa chỉ showroom
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Thông tin hữu ích (span 2 on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Thông tin hữu ích
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <Link href="/tin-tuc" className="hover:text-white transition-colors">
                  Tin tức Toyota
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc#khuyen-mai" className="hover:text-white transition-colors">
                  Khuyến mãi
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc#faq" className="hover:text-white transition-colors">
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc#bao-hanh" className="hover:text-white transition-colors">
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc#thanh-toan" className="hover:text-white transition-colors">
                  Chính sách thanh toán
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc#tuyen-dung" className="hover:text-white transition-colors">
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Kết nối với chúng tôi & Đăng ký nhận tin (span 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide mb-3">
                Kết nối với chúng tôi
              </h4>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-toyota-red transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-toyota-red transition-all"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-toyota-red transition-all"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.87c.01 2.37-.8 4.75-2.39 6.44-1.6 1.69-3.9 2.64-6.21 2.64-2.52 0-4.96-1.07-6.66-2.92-1.7-1.85-2.54-4.38-2.3-6.9.23-2.52 1.48-4.85 3.49-6.38 2.01-1.53 4.62-2.16 7.1-1.72v4.16c-1.35-.45-2.88-.33-4.1.34-1.22.67-2.02 1.95-2.14 3.35-.12 1.41.48 2.81 1.58 3.69 1.11.88 2.61 1.1 3.97.6 1.36-.5 2.29-1.81 2.33-3.26V.02z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-toyota-red transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <h5 className="text-xs font-bold text-white mb-1">
                Đăng ký nhận tin
              </h5>
              <p className="text-[11px] text-gray-400 mb-2.5">
                Cập nhật khuyến mãi, sự kiện và thông tin mới nhất.
              </p>

              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn"
                  required
                  className="w-full bg-[#1b2028] text-white text-xs px-3 py-2 pr-9 rounded-md border border-zinc-700 focus:outline-none focus:border-toyota-red placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2 bg-toyota-red hover:bg-toyota-hover text-white rounded flex items-center justify-center transition-colors"
                  aria-label="Gửi đăng ký"
                >
                  {subscribed ? (
                    <Check className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-3">
          <p>© 2026 Toyota Biên Hòa. Tất cả quyền được bảo lưu.</p>
          <div className="flex items-center gap-3">
            <Link href="/chinh-sach-bao-mat" className="hover:text-gray-400 transition-colors">
              Chính sách bảo mật
            </Link>
            <span>|</span>
            <Link href="/dieu-khoan-su-dung" className="hover:text-gray-400 transition-colors">
              Điều khoản sử dụng
            </Link>
            <span>|</span>
            <Link href="/sitemap.xml" className="hover:text-gray-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

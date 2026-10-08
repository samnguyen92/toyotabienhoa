import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, Wrench, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-gray-300 border-t border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-zinc-800">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="p-3 rounded-lg bg-toyota-red/10 text-toyota-red">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-1">Kiểm tra 176 hạng mục</h4>
              <p className="text-xs text-gray-400">Cam kết không đâm đụng, không ngập nước, keo chỉ nguyên bản.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="p-3 rounded-lg bg-toyota-red/10 text-toyota-red">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-1">Bảo hành chính hãng</h4>
              <p className="text-xs text-gray-400">Bảo hành động cơ & hộp số lên đến 1 năm hoặc 20.000 km.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="p-3 rounded-lg bg-toyota-red/10 text-toyota-red">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-1">Hỗ trợ trả góp 80%</h4>
              <p className="text-xs text-gray-400">Gói vay TFS Toyota lãi suất ưu đãi, duyệt hồ sơ nhanh trong ngày.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <div className="p-3 rounded-lg bg-toyota-red/10 text-toyota-red">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm mb-1">Thu mua xe cũ giá tốt</h4>
              <p className="text-xs text-gray-400">Định giá miễn phí tận nơi, đổi xe cũ lấy xe mới nhanh gọn.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-12">
          {/* Cột 1: Thông tin đại lý & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-14 w-60 bg-white p-2 rounded-lg">
              <Image
                src="/logo-tbh.png"
                alt="Toyota Biên Hoà Logo"
                fill
                className="object-contain object-left px-2"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              <strong className="text-white">TOYOTA BIÊN HOÀ</strong> là đại lý uỷ quyền 3S chính hãng của Toyota Việt Nam tại tỉnh Đồng Nai. Chúng tôi chuyên phân phối xe mới, dịch vụ bảo dưỡng và kinh doanh xe đã qua sử dụng chính hãng (Toyota Sure) với tiêu chuẩn chất lượng cao nhất.
            </p>

            <div className="space-y-2 text-xs text-gray-400 pt-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-toyota-red flex-shrink-0 mt-0.5" />
                <span><strong>Trụ sở chính:</strong> Số A17, Xa Lộ Hà Nội, Khu Phố 5, Phường Tân Hiệp, TP. Biên Hoà, Đồng Nai</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-toyota-red flex-shrink-0" />
                <span><strong>Hotline Xe Cũ / Định Giá:</strong> <span className="text-white font-bold">0918 565 656</span></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-toyota-red flex-shrink-0" />
                <span><strong>Email:</strong> cskh@toyotabienhoa.com.vn</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-toyota-red flex-shrink-0" />
                <span><strong>Giờ mở cửa:</strong> 07:30 – 17:30 (Tất cả các ngày trong tuần)</span>
              </p>
            </div>
          </div>

          {/* Cột 2: Danh mục xe phổ biến */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide uppercase border-l-2 border-toyota-red pl-3">
              Dòng Xe Đang Bán
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/xe-cu?model=Camry" className="hover:text-toyota-red transition-colors">
                  Toyota Camry cũ lướt
                </Link>
              </li>
              <li>
                <Link href="/xe-cu?model=Fortuner" className="hover:text-toyota-red transition-colors">
                  Toyota Fortuner dầu / xăng
                </Link>
              </li>
              <li>
                <Link href="/xe-cu?model=Corolla+Cross" className="hover:text-toyota-red transition-colors">
                  Toyota Corolla Cross Hybrid / 1.8V
                </Link>
              </li>
              <li>
                <Link href="/xe-cu?model=Vios" className="hover:text-toyota-red transition-colors">
                  Toyota Vios số sàn / tự động
                </Link>
              </li>
              <li>
                <Link href="/xe-cu?model=Veloz+Cross" className="hover:text-toyota-red transition-colors">
                  Toyota Veloz Cross 7 chỗ
                </Link>
              </li>
              <li>
                <Link href="/xe-cu?model=Innova" className="hover:text-toyota-red transition-colors">
                  Toyota Innova Cross / 2.0E
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ khách hàng & Dịch vụ */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-white font-bold text-base tracking-wide uppercase border-l-2 border-toyota-red pl-3">
              Dịch Vụ & Tư Vấn
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>
                <Link href="/so-sanh" className="hover:text-toyota-red transition-colors">
                  Công cụ so sánh thông số xe (Tối đa 3 xe)
                </Link>
              </li>
              <li>
                <Link href="/xe-cu#bang-tinh-tra-gop" className="hover:text-toyota-red transition-colors">
                  Bảng tính ước tính khoản vay trả góp
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-toyota-red transition-colors">
                  Trang quản trị Sanity Studio dành cho tư vấn viên
                </Link>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700/60">
              <h5 className="text-sm font-bold text-white mb-1">Cần bán lại hoặc đổi xe?</h5>
              <p className="text-xs text-gray-300 mb-3">
                Toyota Biên Hoà thu mua xe cũ giá cạnh tranh, giải ngân ngay trong ngày.
              </p>
              <a
                href="tel:0918565656"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-bold text-white bg-toyota-red rounded-lg hover:bg-toyota-hover transition-colors shadow"
              >
                Yêu cầu định giá xe miễn phí
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Toyota Biên Hoà. Bản quyền thuộc về Công ty TNHH Toyota Biên Hoà.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Chính sách bảo mật</span>
            <span className="hover:text-gray-400 cursor-pointer">Quy trình thẩm định 176 hạng mục</span>
            <span className="hover:text-gray-400 cursor-pointer">Điều khoản dịch vụ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

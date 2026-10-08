import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ShieldCheck,
  Car,
  Calendar,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { ContactInquiryForm } from "@/components/forms/ContactInquiryForm";

export const metadata = {
  title: "Liên Hệ | Toyota Biên Hòa - Tư Vấn & Định Giá Xe Chính Hãng",
  description:
    "Liên hệ Toyota Biên Hòa qua Hotline 0938 820 355. Hệ thống showroom và xưởng dịch vụ tại TP. Biên Hòa (Đồng Nai) và Cái Bè (Tiền Giang). Hỗ trợ xem xe và định giá tận nơi 24/7.",
};

const BRANCHES = [
  {
    name: "Showroom Chính & Xưởng Dịch Vụ Biên Hòa",
    tag: "Trụ Sở Chính",
    address: "Số 01/1A, Xa lộ Hà Nội, Phường Tam Hòa, TP. Biên Hòa, Tỉnh Đồng Nai",
    phone: "0938 820 355",
    time: "07:30 - 18:00 (Thứ 2 - Chủ Nhật)",
    mapUrl: "https://maps.google.com/?q=Toyota+Bien+Hoa",
  },
  {
    name: "Chi Nhánh Giao Nhận & Dịch Vụ Cái Bè",
    tag: "Chi Nhánh Tiền Giang",
    address: "96 Ấp Tây, Xã Hòa Hưng, Huyện Cái Bè, Tỉnh Tiền Giang",
    phone: "0938 820 355",
    time: "08:00 - 17:30 (Thứ 2 - Thứ 7)",
    mapUrl: "https://maps.google.com/?q=Cai+Be+Tien+Giang",
  },
];

const FAQS = [
  {
    q: "Tôi có thể xem xe hoặc yêu cầu lái thử tận nhà không?",
    a: "Hoàn toàn được! Toyota Biên Hòa hỗ trợ dịch vụ mang xe tận nhà cho khách hàng trong bán kính 100km (Đồng Nai, Bình Dương, TP.HCM, Tiền Giang, Long An) để quý khách trực tiếp trải nghiệm và kiểm tra thực tế.",
  },
  {
    q: "Thủ tục thẩm định và bán xe cũ diễn ra trong bao lâu?",
    a: "Quy trình kiểm định 176 hạng mục mất từ 45 - 60 phút. Sau khi hai bên thống nhất giá, hợp đồng mua bán và thủ tục giải ngân tài chính được hoàn tất ngay trong ngày.",
  },
  {
    q: "Xe mua tại Toyota Biên Hòa được bảo hành như thế nào?",
    a: "Tất cả xe đạt chứng chỉ Toyota Sure được cấp sổ bảo hành chính hãng 1 năm hoặc 20.000 km áp dụng cho động cơ và hộp số tại bất kỳ đại lý ủy quyền của Toyota trên toàn quốc.",
  },
  {
    q: "Đại lý có hỗ trợ làm thủ tục sang tên và rút hồ sơ gốc không?",
    a: "Có! Bộ phận pháp lý của Toyota Biên Hòa hỗ trợ trọn gói thủ tục công chứng, rút gốc hồ sơ và đăng ký sang tên chính chủ cho khách hàng nhanh gọn và đúng quy định pháp luật.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center space-x-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#EB0A1E] transition">
              Trang chủ
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-800 font-medium">Liên hệ</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#111418] via-[#1a1f26] to-[#0A0D14] text-white py-14 sm:py-20 relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block bg-[#EB0A1E]/20 text-[#EB0A1E] border border-[#EB0A1E]/30 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Trung Tâm Hỗ Trợ Khách Hàng 24/7
          </span>
          <h1 className="text-3xl sm:text-4.5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4">
            Kết Nối Cùng Đội Ngũ <span className="text-[#EB0A1E]">Toyota Biên Hòa</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe mọi yêu cầu tư vấn mua xe lướt, thẩm định xe cũ, bảo dưỡng hoặc hỗ trợ tài chính trả góp của quý khách.
          </p>
        </div>
      </section>

      {/* 3 Quick Action Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="tel:0938820355"
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:border-[#EB0A1E]/40 transition group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EB0A1E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#EB0A1E] group-hover:text-white transition">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Hotline Tư Vấn 24/7</p>
              <h3 className="text-lg font-black text-gray-900 mt-0.5 group-hover:text-[#EB0A1E] transition">
                0938 820 355
              </h3>
              <p className="text-xs text-gray-600 mt-1">Hỗ trợ kỹ thuật, xem xe & cứu hộ</p>
            </div>
          </a>

          <a
            href="https://zalo.me/0938820355"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:border-emerald-400 transition group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Zalo Doanh Nghiệp</p>
              <h3 className="text-lg font-black text-gray-900 mt-0.5 group-hover:text-emerald-600 transition">
                0938 820 355
              </h3>
              <p className="text-xs text-gray-600 mt-1">Gửi ảnh xe nhận báo giá tức thì</p>
            </div>
          </a>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Thời Gian Phục Vụ</p>
              <h3 className="text-base font-black text-gray-900 mt-0.5">
                07:30 - 18:00 Mọi Ngày
              </h3>
              <p className="text-xs text-gray-600 mt-1">Mở cửa cả Thứ 7 & Chủ Nhật</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Showroom Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
            <div className="mb-8">
              <span className="text-[#EB0A1E] text-xs font-bold uppercase tracking-wider">
                Gửi Yêu Cầu Trực Tuyến
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-1">
                Để Lại Thông Tin, Chúng Tôi Sẽ Gọi Lại Trong 5 Phút
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                Thông tin của quý khách được bảo mật tuyệt đối theo chính sách bảo vệ dữ liệu khách hàng Toyota.
              </p>
            </div>

            <ContactInquiryForm />
          </div>

          {/* Right Column: Branch Cards & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="text-[#EB0A1E] text-xs font-bold uppercase tracking-wider">
                Hệ Thống Địa Chỉ
              </span>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                Địa Điểm Đón Tiếp
              </h2>
            </div>

            {BRANCHES.map((branch, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#EB0A1E]/30 transition space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-900 text-base">
                    {branch.name}
                  </h3>
                  <span className="bg-red-50 text-[#EB0A1E] text-[10px] font-bold px-2.5 py-0.5 rounded border border-red-200">
                    {branch.tag}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#EB0A1E] flex-shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                      className="font-bold text-gray-900 hover:text-[#EB0A1E]"
                    >
                      Hotline: {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span>{branch.time}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href="tel:0938820355"
                    className="text-xs font-bold text-[#EB0A1E] hover:underline flex items-center gap-1"
                  >
                    Gọi chỉ đường ngay →
                  </a>
                  <a
                    href="https://zalo.me/0938820355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 hover:underline"
                  >
                    Chat Zalo
                  </a>
                </div>
              </div>
            ))}

            {/* Visual showroom callout */}
            <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/images/showroom-hero.jpg"
                alt="Showroom Toyota Biên Hòa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                <div className="text-white">
                  <p className="text-xs font-bold text-[#EB0A1E] uppercase">Toyota Sure Certified</p>
                  <p className="text-sm font-bold">Showroom Đạt Chuẩn Nhận Diện Thương Hiệu Toàn Cầu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#EB0A1E] text-xs font-bold uppercase tracking-wider">
              Hỏi Đáp Thường Gặp
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-1">
              Câu Hỏi Khách Hàng Thường Quan Tâm
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAFBFD] border border-gray-200"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#EB0A1E] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standardized Bottom Dark Valuation Banner */}
      <section className="bg-gradient-to-r from-[#111418] via-[#1a1f26] to-[#111418] text-white py-14 sm:py-16 relative overflow-hidden border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block bg-[#EB0A1E] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                Dịch Vụ Thu Mua Xe Cũ Chính Hãng
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-black text-white tracking-tight leading-snug">
                Bạn Đang Muốn Bán Xe Cũ Hoặc Lên Đời Xe Toyota Mới?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Toyota Biên Hòa cam kết thẩm định minh bạch theo 176 hạng mục kỹ thuật, định giá cao hơn thị trường 10 - 20 triệu, thanh toán giải ngân ngay trong ngày.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:0938820355"
                  className="bg-[#EB0A1E] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition flex items-center gap-2 text-sm shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hotline Thẩm Định: 0938 820 355</span>
                </a>
                <a
                  href="https://zalo.me/0938820355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition border border-white/20 text-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Định Giá Qua Zalo</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/cta-camry.jpg"
                  alt="Định giá xe Toyota"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

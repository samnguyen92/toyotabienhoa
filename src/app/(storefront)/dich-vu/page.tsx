import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  Calendar,
  Sparkles,
  Award,
  Zap,
  Car,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const metadata = {
  title: "Dịch Vụ Chính Hãng & Kiểm Định 176 Hạng Mục | Toyota Biên Hòa",
  description:
    "Trung tâm dịch vụ bảo dưỡng, sửa chữa và kiểm định xe đã qua sử dụng Toyota Sure 176 hạng mục tại Toyota Biên Hòa. Phụ tùng chính hãng 100%, kỹ thuật viên chuẩn Toyota toàn cầu.",
};

export default function ServicesPage() {
  const inspectionGroups = [
    {
      title: "Động Cơ & Hộp Số",
      count: "42 hạng mục",
      desc: "Kiểm tra bugi, dây curoa, áp suất nén buồng đốt, tình trạng dầu máy, dầu hộp số, hệ thống làm mát và độ êm ái khi chuyển số.",
      icon: "⚙️",
    },
    {
      title: "Khung Gầm & Hệ Treo",
      count: "38 hạng mục",
      desc: "Thẩm định độ chuẩn xác sắt-xi, giảm xóc, rô-tuyn lái, càng A, gầm bệ và độ mòn hệ thống phanh trước sau.",
      icon: "🚗",
    },
    {
      title: "Thân Vỏ & Nước Sơn",
      count: "36 hạng mục",
      desc: "Đo độ dày lớp sơn bằng máy điện tử, kiểm tra keo chỉ 4 cánh cửa, nắp capo, cốp sau và cam kết không đâm đụng tai nạn.",
      icon: "🛡️",
    },
    {
      title: "Hệ Thống Điện & Cảm Biến",
      count: "28 hạng mục",
      desc: "Quét lỗi ECU bằng máy chuyên dụng Toyota GTS, kiểm tra ắc quy, hệ thống đèn chiếu sáng, camera 360, radar an toàn TSS.",
      icon: "⚡",
    },
    {
      title: "Nội Thất & Tiện Nghi",
      count: "32 hạng mục",
      desc: "Kiểm tra chất liệu ghế da, hệ thống túi khí an toàn, điều hòa tự động, màn hình giải trí, trần xe và sàn xe cam kết không ngập nước.",
      icon: "🛋️",
    },
  ];

  const coreServices = [
    {
      title: "Bảo Dưỡng Nhanh 60 Phút (EM60)",
      desc: "Quy trình bảo dưỡng tiêu chuẩn Toyota do 2 kỹ thuật viên phối hợp thực hiện cùng lúc, hoàn tất chỉ trong 60 phút tiết kiệm tối đa thời gian.",
      icon: <Clock className="w-6 h-6 text-toyota-red" />,
    },
    {
      title: "Đồng Sơn Nhanh Trong Ngày",
      desc: "Phòng sơn sấy khép kín công nghệ cao gốc nước thân thiện môi trường, phục hồi màu sơn nguyên bản 99% theo mã màu xe xuất xưởng.",
      icon: <Sparkles className="w-6 h-6 text-toyota-red" />,
    },
    {
      title: "Phụ Tùng & Phụ Kiện Chính Hãng",
      desc: "100% phụ tùng thay thế nhập khẩu trực tiếp từ Toyota Nhật Bản, Thái Lan và Indonesia. Được bảo hành chính hãng theo tiêu chuẩn toàn cầu.",
      icon: <Award className="w-6 h-6 text-toyota-red" />,
    },
    {
      title: "Định Giá Xe Cũ & Đổi Xe Mới (Trade-in)",
      desc: "Hỗ trợ thu mua xe cũ giá cạnh tranh nhất thị trường, bù trừ chênh lệch nhận xe mới hoặc xe lướt Toyota Sure nhanh chóng trong ngày.",
      icon: <Car className="w-6 h-6 text-toyota-red" />,
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#FAFAFC] border-b border-gray-150 overflow-hidden pt-8 pb-14">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] pointer-events-none z-0">
          <Image
            src="/images/showroom-hero.jpg"
            alt="Toyota Biên Hòa Showroom"
            fill
            priority
            className="object-cover object-right-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFC] via-[#FAFAFC]/90 to-transparent lg:from-[#FAFAFC] lg:via-[#FAFAFC]/60 lg:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
            <Link href="/" className="hover:text-toyota-red transition-colors">
              Trang chủ
            </Link>
            <span>&gt;</span>
            <span className="text-gray-900 font-semibold">Dịch vụ</span>
            <span className="text-gray-400">—</span>
          </div>

          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-toyota-red uppercase">
              <span className="w-5 h-0.5 bg-toyota-red inline-block" />
              <span>DỊCH VỤ CHÍNH HÃNG TOYOTA BIÊN HÒA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Chăm Sóc & Bảo Dưỡng Xe<br />
              <span className="text-toyota-red">Đạt Chuẩn Toyota Toàn Cầu</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Xưởng dịch vụ quy mô hơn 5.000m² tại Biên Hòa được đầu tư trang thiết bị hiện đại bậc nhất, phục vụ tận tâm hơn 30.000 lượt xe mỗi năm.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#dat-lich"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-toyota-red hover:bg-toyota-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Đặt lịch hẹn dịch vụ</span>
              </a>

              <a
                href="tel:0938820355"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 bg-white hover:border-toyota-red hover:text-toyota-red text-gray-700 text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-toyota-red" />
                <span>Hotline dịch vụ: 0938 820 355</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOYOTA SURE 176 INSPECTION POINTS BREAKDOWN */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-toyota-red uppercase block mb-2">
              TIÊU CHUẨN VÀNG TOYOTA SURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              Quy Trình Kiểm Định 176 Hạng Mục
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Mỗi chiếc xe đã qua sử dụng bán ra tại Toyota Biên Hòa đều phải trải qua 176 bước kiểm tra nghiêm ngặt bởi các chuyên gia kỹ thuật được đào tạo bài bản.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionGroups.map((group, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-150 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{group.icon}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-toyota-red border border-red-100">
                    {group.count}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 pt-1">
                  {group.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {group.desc}
                </p>
              </div>
            ))}

            {/* Thẻ cam kết bảo hành */}
            <div className="bg-gradient-to-br from-charcoal to-zinc-900 rounded-2xl p-6 sm:p-7 text-white shadow-md flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-toyota-red uppercase tracking-wider block mb-1">
                  ĐẶC QUYỀN TOYOTA SURE
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Bảo Hành Chính Hãng 1 Năm / 20.000 KM
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Áp dụng bảo hành toàn quốc tại bất kỳ đại lý ủy quyền Toyota nào trên toàn lãnh thổ Việt Nam.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/xe-cu"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-toyota-red hover:text-white transition-colors"
                >
                  <span>Xem xe có chứng nhận ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="py-16 sm:py-20 bg-white border-y border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-toyota-red uppercase block mb-2">
              DỊCH VỤ CHUYÊN NGHIỆP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              Dịch Vụ Hậu Mãi Toàn Diện
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Chúng tôi luôn nỗ lực mang lại sự thuận tiện và an tâm tuyệt đối cho khách hàng trong suốt vòng đời sử dụng xe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((srv, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-150 hover:bg-white hover:border-toyota-red/50 hover:shadow-md transition-all space-y-3 group"
              >
                <div className="p-3 rounded-xl bg-white w-fit shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  {srv.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 pt-1">
                  {srv.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ONLINE APPOINTMENT FORM */}
      <section id="dat-lich" className="py-16 sm:py-20 bg-[#FAFBFD] scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold tracking-widest text-toyota-red uppercase block mb-2">
                TIẾT KIỆM THỜI GIAN CHỜ ĐỢI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Đặt Lịch Hẹn Bảo Dưỡng Trực Tuyến
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Đặt hẹn trước ít nhất 4 tiếng để được ưu tiên tiếp nhận và phục vụ không phải chờ đợi.
              </p>
            </div>

            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* 5. BOTTOM VALUATION BANNER */}
      <section className="relative overflow-hidden bg-[#0A0D14] text-white py-14 sm:py-18">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none">
          <Image
            src="/images/cta-camry.jpg"
            alt="Toyota Camry Headlight"
            fill
            className="object-cover object-center lg:object-right opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/85 to-transparent lg:from-[#0A0D14] lg:via-[#0A0D14]/50 lg:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-toyota-red uppercase">
              <span className="w-5 h-0.5 bg-toyota-red inline-block" />
              <span>TOYOTA BIÊN HÒA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bạn Có Nhu Cầu Định Giá Hoặc Bán Lại Chiếc Xe Của Mình?
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Toyota Biên Hòa hỗ trợ định giá xe nhanh chóng, minh bạch và chuyên nghiệp. Liên hệ ngay để được tư vấn và hỗ trợ tốt nhất.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
              <a
                href="tel:0938820355"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-toyota-red hover:bg-toyota-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Hotline: 0938 820 355</span>
              </a>

              <Link
                href="/xe-cu#dinh-gia"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-700 bg-black/40 hover:bg-white/10 text-gray-200 hover:text-white text-xs sm:text-sm font-semibold transition-all group"
              >
                <MessageSquare className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span>Được tư vấn miễn phí</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

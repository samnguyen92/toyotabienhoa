import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  FileText,
  BadgePercent,
  Coins,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import { InstallmentCalculator } from "@/components/car/InstallmentCalculator";

export const metadata = {
  title: "Tư Vấn Tài Chính & Vay Trả Góp Xe Toyota | Toyota Biên Hòa",
  description:
    "Gói vay tài chính TFS Toyota lãi suất ưu đãi chỉ từ 6.99%/năm tại Toyota Biên Hòa. Hỗ trợ vay 80% giá trị xe, thời hạn đến 7 năm, thủ tục nhanh chóng duyệt trong ngày.",
};

export default function FinancialConsultingPage() {
  const loanPackages = [
    {
      name: "Gói Truyền Thống",
      badge: "Phổ biến nhất",
      rate: "Từ 6.99%/năm",
      maxLoan: "Đến 80% giá trị xe",
      maxTerm: "Lên đến 7 năm (84 tháng)",
      desc: "Phù hợp cho khách hàng có thu nhập ổn định hàng tháng. Tiền gốc được chia đều hàng tháng, tiền lãi giảm dần theo dư nợ thực tế.",
      features: [
        "Lãi suất cố định 6 hoặc 12 tháng đầu",
        "Phương thức trả góp gốc đều hàng tháng",
        "Được trả trước hạn linh hoạt",
        "Thủ tục thẩm định nhanh trong 24h",
      ],
      recommended: true,
    },
    {
      name: "Gói Balloon",
      badge: "Nhẹ gánh hàng tháng",
      rate: "Từ 7.49%/năm",
      maxLoan: "Đến 85% giá trị xe",
      maxTerm: "Lên đến 7 năm (84 tháng)",
      desc: "Phù hợp cho khách hàng muốn giảm tối đa số tiền trả mỗi tháng. Giữ lại tới 25% giá trị xe (khoản Balloon) thanh toán vào kỳ cuối cùng.",
      features: [
        "Số tiền trả góp mỗi tháng thấp hơn 20-30%",
        "Tối ưu dòng tiền cho kinh doanh",
        "Dễ dàng đổi xe mới sau 3-5 năm",
        "Có thể tái cấp vốn cho khoản Balloon",
      ],
      recommended: false,
    },
    {
      name: "Gói 50/50",
      badge: "Không lo trả hàng tháng",
      rate: "Chỉ 7.99%/năm cố định",
      maxLoan: "Đến 50% giá trị xe",
      maxTerm: "12 tháng duy nhất",
      desc: "Dành cho khách hàng có sẵn nguồn tài chính hoặc đang chờ đáo hạn tài khoản ngân hàng. Thanh toán 50% ban đầu và 50% vào cuối kỳ.",
      features: [
        "Không phải thanh toán bất kỳ khoản nào hàng tháng",
        "Thanh toán toàn bộ gốc và lãi vào tháng thứ 12",
        "Không phạt trả trước hạn sau 6 tháng",
        "Thủ tục hồ sơ đơn giản nhất",
      ],
      recommended: false,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Chọn Xe & Lập Dự Toán",
      desc: "Lựa chọn chiếc xe ưng ý và chọn phương án trả trước (20% - 70%) cùng thời hạn vay phù hợp với ngân sách.",
    },
    {
      step: "02",
      title: "Nộp Hồ Sơ Đơn Giản",
      desc: "Chụp ảnh CCCD, giấy xác nhận tình trạng hôn nhân và chứng minh thu nhập gửi trực tuyến qua Zalo hoặc showroom.",
    },
    {
      step: "03",
      title: "Duyệt Hồ Sơ Nhanh Chóng",
      desc: "Chuyên viên tài chính TFS Toyota thẩm định và ra thông báo chấp thuận tín dụng chỉ trong 2 - 4 giờ làm việc.",
    },
    {
      step: "04",
      title: "Giải Ngân & Nhận Xe",
      desc: "Ký hợp đồng tín dụng tại đại lý Toyota Biên Hòa và nhận bàn giao xe ngay cùng bộ hồ sơ pháp lý hoàn chỉnh.",
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#FAFAFC] border-b border-gray-150 overflow-hidden pt-8 pb-14">
        {/* Dealership Showroom Background on right */}
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
            <span className="text-gray-900 font-semibold">Tư vấn tài chính</span>
            <span className="text-gray-400">—</span>
          </div>

          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-toyota-red uppercase">
              <span className="w-5 h-0.5 bg-toyota-red inline-block" />
              <span>TÀI CHÍNH TOYOTA CHÍNH HÃNG (TFS)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Gói Vay Tài Chính Linh Hoạt<br />
              <span className="text-toyota-red">Lãi Suất Chỉ Từ 6.99%/Năm</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Toyota Biên Hòa đồng hành cùng Công ty Tài chính Toyota Việt Nam (TFS) hỗ trợ quý khách hàng sở hữu xe đã qua sử dụng chính hãng nhanh chóng, đơn giản và minh bạch nhất.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#bang-tinh"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-toyota-red hover:bg-toyota-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
              >
                <Calculator className="w-4 h-4" />
                <span>Tính dự toán khoản vay</span>
              </a>

              <a
                href="tel:0938820355"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 bg-white hover:border-toyota-red hover:text-toyota-red text-gray-700 text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-toyota-red" />
                <span>Hotline: 0938 820 355</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE TFS PACKAGES */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-toyota-red uppercase block mb-2">
              LỰA CHỌN PHÙ HỢP VỚI MỌI NHU CẦU
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              3 Gói Vay Ưu Đãi Tại Toyota Biên Hòa
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Được thiết kế riêng theo thói quen chi tiêu của người tiêu dùng Việt Nam, giúp tối ưu hóa ngân sách của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 ${
                  pkg.recommended
                    ? "border-2 border-toyota-red shadow-xl shadow-red-500/10 -translate-y-1"
                    : "border border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-toyota-red text-white text-[11px] font-bold shadow-md uppercase tracking-wider">
                    {pkg.badge}
                  </div>
                )}

                <div className="mb-4">
                  {!pkg.recommended && (
                    <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-600 mb-2">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="text-2xl font-black text-toyota-red mt-2">
                    {pkg.rate}
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {pkg.desc}
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700 flex-1">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-gray-500">Hạn mức vay:</span>
                    <span className="text-gray-900">{pkg.maxLoan}</span>
                  </div>
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-gray-500">Thời hạn vay:</span>
                    <span className="text-gray-900">{pkg.maxTerm}</span>
                  </div>

                  <div className="pt-3 space-y-2">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-gray-600">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-auto">
                  <a
                    href="tel:0938820355"
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      pkg.recommended
                        ? "bg-toyota-red hover:bg-toyota-hover text-white shadow-md"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    <span>Tư vấn gói này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CALCULATOR */}
      <section id="bang-tinh" className="py-16 bg-white border-y border-gray-150 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-toyota-red uppercase block mb-2">
              DỰ TOÁN TRẢ GÓP TRỰC TUYẾN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Bảng Tính Khoản Vay Trả Góp
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Ước tính số tiền thanh toán ban đầu và lịch trả góp hàng tháng chi tiết.
            </p>
          </div>

          <InstallmentCalculator carPrice={765000000} carTitle="Toyota Corolla Cross 1.8V 2023" />
        </div>
      </section>

      {/* 4. 4-STEP PROCEDURE */}
      <section className="py-16 sm:py-20 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-toyota-red uppercase block mb-2">
              QUY TRÌNH TINH GỌN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              4 Bước Vay Mua Xe Nhanh Chóng
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Nhận thông báo duyệt vay trong ngày với sự hỗ trợ tận tâm của chuyên viên tài chính Toyota.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, sIdx) => (
              <div
                key={sIdx}
                className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm relative group hover:shadow-md transition-all"
              >
                <div className="text-3xl font-black text-red-100 group-hover:text-toyota-red transition-colors mb-4">
                  {st.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DOCUMENTS REQUIRED */}
      <section className="py-16 bg-white border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold tracking-widest text-toyota-red uppercase block">
                HỒ SƠ VAY MUA XE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Giấy Tờ Cần Chuẩn Bị
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Thủ tục tại Toyota Biên Hòa được tối giản hóa tối đa. Khách hàng chỉ cần chụp ảnh hồ sơ và gửi trực tuyến để được xét duyệt trước khi đến ký hợp đồng.
              </p>
              <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-xs text-toyota-red font-semibold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Cam kết bảo mật 100% thông tin cá nhân và tài chính khách hàng.</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Khách hàng cá nhân */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                  <FileText className="w-4 h-4 text-toyota-red" />
                  <h4>Khách Hàng Cá Nhân</h4>
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>CCCD gắn chip (chụp 2 mặt rõ nét)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Giấy đăng ký kết hôn hoặc Giấy xác nhận độc thân</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hợp đồng lao động hoặc Quyết định bổ nhiệm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Sao kê tài khoản ngân hàng nhận lương 3 - 6 tháng gần nhất (hoặc nguồn thu kinh doanh khác)</span>
                  </li>
                </ul>
              </div>

              {/* Khách hàng doanh nghiệp */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                  <FileText className="w-4 h-4 text-toyota-red" />
                  <h4>Khách Hàng Doanh Nghiệp</h4>
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Giấy chứng nhận đăng ký kinh doanh (ĐKKD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>CCCD của người đại diện theo pháp luật</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Báo cáo tài chính năm gần nhất</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Sao kê tài khoản ngân hàng của công ty 6 tháng gần nhất</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM TRADE-IN VALUATION BANNER */}
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

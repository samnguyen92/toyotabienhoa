import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Users,
  Wrench,
  CheckCircle2,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Building2,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Về Chúng Tôi | Toyota Biên Hòa - Đại Lý Xe Đã Qua Sử Dụng Chính Hãng",
  description:
    "Tìm hiểu về Toyota Biên Hòa - Trung tâm xe đã qua sử dụng Toyota Sure uy tín hàng đầu miền Nam. Hơn 15 năm kinh nghiệm, kiểm định 176 hạng mục, cam kết không đâm đụng ngập nước.",
};

const STATS = [
  { value: "15+", label: "Năm kinh nghiệm uy tín", desc: "Đồng hành cùng khách hàng phía Nam" },
  { value: "10.000+", label: "Xe đã bàn giao", desc: "Được khách hàng toàn quốc tin cậy" },
  { value: "176", label: "Hạng mục kiểm định", desc: "Quy chuẩn kỹ thuật Toyota toàn cầu" },
  { value: "99.8%", label: "Tỷ lệ khách hàng hài lòng", desc: "Chất lượng dịch vụ hậu mãi 5 sao" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Chính Trực & Minh Bạch",
    desc: "Mọi thông tin về lịch sử xe, số km thực tế và biên bản kiểm định 176 hạng mục đều được công khai rõ ràng, không giấu giếm bất kỳ chi tiết kỹ thuật nào.",
  },
  {
    icon: Award,
    title: "Chất Lượng Vượt Trội",
    desc: "Chỉ những chiếc xe đáp ứng đầy đủ tiêu chuẩn khắt khe mới được cấp chứng chỉ Toyota Sure và lưu thông tại showroom, mang lại trải nghiệm tiệm cận xe mới.",
  },
  {
    icon: Users,
    title: "Khách Hàng Là Trọng Tâm",
    desc: "Chúng tôi không chỉ bán một chiếc xe, chúng tôi mang đến sự an tâm dài lâu với chế độ bảo hành chính hãng toàn quốc và dịch vụ đồng hành 24/7.",
  },
  {
    icon: TrendingUp,
    title: "Giá Trị Bền Vững",
    desc: "Chính sách thu mua minh bạch, định giá sát thị trường và hỗ trợ thủ tục sang tên, vay tài chính TFS nhanh chóng trong ngày.",
  },
];

const FACILITIES = [
  {
    title: "Showroom Trưng Bày Đạt Chuẩn Toyota Toàn Cầu",
    desc: "Không gian máy lạnh tiện nghi rộng hơn 1.000m² với sức chứa hàng chục mẫu xe lướt cao cấp sẵn sàng cho khách hàng trải nghiệm và lái thử.",
    image: "/images/showroom-hero.jpg",
  },
  {
    title: "Xưởng Dịch Vụ & Khoang Kiểm Định 176 Điểm",
    desc: "Được đầu tư trang thiết bị chẩn đoán điện tử Toyota Techstream, cầu nâng hiện đại cùng đội ngũ kỹ thuật viên đạt chứng chỉ TMV Master.",
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Phòng Chờ Khách Hàng Chuẩn 5 Sao",
    desc: "Không gian sang trọng phục vụ cafe, trà hảo hạng, wifi tốc độ cao và khu vực làm việc riêng tư trong thời gian tiếp đón quý khách.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
];

const BRANCHES = [
  {
    name: "Showroom Chính & Trung Tâm Dịch Vụ Biên Hòa",
    address: "Số 01/1A, Xa lộ Hà Nội, Khu phố 3, Phường Tam Hòa, TP. Biên Hòa, Tỉnh Đồng Nai",
    hotline: "0938 820 355",
    time: "Thứ 2 - Chủ Nhật: 07:30 - 18:00",
    isPrimary: true,
  },
  {
    name: "Chi Nhánh Giao Nhận & Hỗ Trợ Kỹ Thuật Cái Bè",
    address: "96 Ấp Tây, Xã Hòa Hưng, Huyện Cái Bè, Tỉnh Tiền Giang",
    hotline: "0938 820 355",
    time: "Thứ 2 - Thứ 7: 08:00 - 17:30",
    isPrimary: false,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#111418] via-[#1a1f26] to-[#0A0D14] text-white py-20 lg:py-28 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/showroom-hero.jpg"
            alt="Toyota Biên Hòa Showroom"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111418] via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#EB0A1E]/20 text-[#EB0A1E] border border-[#EB0A1E]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Đại Lý Ủy Quyền Toyota Sure Chính Hãng</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Kiến Tạo Niềm Tin Trên Mọi Chặng Đường Cùng <span className="text-[#EB0A1E]">Toyota Biên Hòa</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Hơn 15 năm kinh nghiệm dẫn đầu trong lĩnh vực xe ô tô đã qua sử dụng chính hãng tại Đông Nam Bộ và Tây Nam Bộ, cam kết chất lượng chuẩn mực Nhật Bản.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/xe-cu"
              className="bg-[#EB0A1E] hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2 text-sm"
            >
              <span>Khám Phá Kho Xe Lướt</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0938820355"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition border border-white/20 text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Hotline: 0938 820 355</span>
            </a>
          </div>
        </div>
      </section>

      {/* Numbers / Stats Bar */}
      <section className="bg-white border-b border-gray-200 py-12 relative shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center pt-4 lg:pt-0">
                <p className="text-3xl sm:text-4.5xl font-black text-[#EB0A1E] tracking-tight">
                  {stat.value}
                </p>
                <h4 className="text-sm sm:text-base font-bold text-gray-900 mt-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story & Vision */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[360px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/images/camry-2022.jpg"
                alt="Xe Toyota Sure chính hãng"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EB0A1E] flex items-center justify-center font-bold">
                  <BadgeCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-900">
                    Bảo Hành Chính Hãng
                  </h4>
                  <p className="text-xs text-gray-500">1 Năm hoặc 20.000 Km toàn quốc</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[#EB0A1E] text-xs font-bold uppercase tracking-wider">
                Câu Chuyện Thương Hiệu
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-black text-gray-900 tracking-tight leading-snug">
                Đồng Hành Cùng Khách Hàng Bằng Giá Trị Thật Và Sự Minh Bạch
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Thành lập với sứ mệnh mang đến sự bình an và thỏa mãn cao nhất cho những ai yêu mến thương hiệu Toyota, <strong>Toyota Biên Hòa</strong> tự hào là điểm đến tin cậy khi quý khách muốn tìm kiếm một chiếc xe lướt chất lượng như mới, hoặc muốn chuyển nhượng lại chiếc xe thân yêu với mức giá xứng đáng.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Mỗi nhân sự tại đại lý – từ tư vấn bán hàng đến kỹ sư thẩm định – đều được đào tạo theo văn hóa <em>“Khách hàng là trên hết”</em> của tập đoàn Toyota Nhật Bản, luôn đặt chữ TÍN làm kim chỉ nam trong từng hợp đồng chuyển nhượng.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  🎯 Sứ Mệnh
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Bảo vệ tối đa quyền lợi của người tiêu dùng xe cũ thông qua chuẩn hóa quy trình thẩm định 176 hạng mục.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  🌟 Tầm Nhìn
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Trở thành tổ hợp đại lý xe đã qua sử dụng chính hãng quy mô và được yêu thích nhất khu vực phía Nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 sm:py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#EB0A1E] text-xs font-bold uppercase tracking-wider">
              Giá Trị Cốt Lõi
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-gray-900 tracking-tight mt-1 mb-3">
              4 Trụ Cột Vững Chắc Tạo Nên Uy Tín Toyota Sure
            </h2>
            <p className="text-gray-500 text-sm">
              Chúng tôi luôn nỗ lực không ngừng để tạo ra trải nghiệm mua sắm ô tô an tâm và thảnh thơi nhất cho mọi gia đình.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAFBFD] p-6 rounded-2xl border border-gray-200 hover:border-[#EB0A1E]/40 hover:shadow-lg transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EB0A1E] flex items-center justify-center mb-5 group-hover:bg-[#EB0A1E] group-hover:text-white transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#EB0A1E] text-xs font-bold uppercase tracking-wider">
            Cơ Sở Vật Chất
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-black text-gray-900 tracking-tight mt-1 mb-3">
            Hệ Thống Showroom & Xưởng Kỹ Thuật Đạt Chuẩn
          </h2>
          <p className="text-gray-500 text-sm">
            Quy mô hiện đại phục vụ từ khâu thẩm định, bảo dưỡng, làm đẹp xe đến bàn giao chìa khóa trao tay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FACILITIES.map((fac, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col group hover:shadow-md transition"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-gray-900 mb-2 group-hover:text-[#EB0A1E] transition">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Branch & Showroom Locations */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#EB0A1E] text-xs font-bold uppercase tracking-wider">
              Mạng Lưới Phục Vụ
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-white tracking-tight mt-1 mb-3">
              Hệ Thống Trụ Sở & Điểm Tiếp Nhận
            </h2>
            <p className="text-gray-400 text-sm">
              Sẵn sàng tiếp đón và phục vụ khách hàng trên toàn địa bàn Đồng Nai, Tiền Giang và các tỉnh lân cận.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {BRANCHES.map((b, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[#EB0A1E]/50 transition space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-base">
                    {b.name}
                  </h3>
                  {b.isPrimary && (
                    <span className="bg-[#EB0A1E] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Trụ Sở Chính
                    </span>
                  )}
                </div>

                <div className="space-y-3 text-xs text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#EB0A1E] flex-shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <a href={`tel:${b.hotline.replace(/\s+/g, "")}`} className="hover:text-white font-semibold">
                      Hotline: {b.hotline}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span>{b.time}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:0938820355"
                    className="w-full bg-white/10 hover:bg-[#EB0A1E] text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition"
                  >
                    <span>Liên Hệ Ngay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
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

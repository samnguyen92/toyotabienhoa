import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle,
  FileCheck,
  Wrench,
  ArrowRight,
  Search,
  Phone,
  Sparkles,
  Award,
  ChevronRight,
} from "lucide-react";
import { getFeaturedCars, getAllCars } from "@/services/carService";
import { CarCard } from "@/components/car/CarCard";

export default async function HomePage() {
  const allCars = await getAllCars();
  const featuredCars = await getFeaturedCars(6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative bg-gradient-to-br from-charcoal-dark via-charcoal to-zinc-900 text-white overflow-hidden py-16 sm:py-24">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#EB0A1E_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Decorative ambient glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-toyota-red/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Quick Search */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold backdrop-blur-md text-gray-200">
                <Sparkles className="w-3.5 h-3.5 text-toyota-red" />
                <span>Toyota Sure • Trung Tâm Xe Cũ Chính Hãng Biên Hoà</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                An Tâm Mua Bán Xe{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-toyota-red to-red-400">
                  Đã Qua Sử Dụng
                </span>{" "}
                Tại Toyota Biên Hoà
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed">
                Mỗi chiếc xe bán ra đều trải qua quy trình kiểm định nghiêm ngặt 176 hạng mục bởi kỹ sư Toyota Việt Nam. Bảo hành chính hãng lên tới 1 năm, hỗ trợ trả góp đến 80%.
              </p>

              {/* Quick Search Form */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/95 text-charcoal shadow-2xl backdrop-blur-md border border-white/20">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Tìm kiếm nhanh theo nhu cầu:
                </div>
                <form
                  action="/xe-cu"
                  method="GET"
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                >
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Dòng xe
                    </label>
                    <select
                      name="model"
                      className="w-full h-11 px-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-toyota-red font-medium"
                      defaultValue=""
                    >
                      <option value="">Tất cả dòng xe</option>
                      <option value="Camry">Toyota Camry</option>
                      <option value="Fortuner">Toyota Fortuner</option>
                      <option value="Corolla Cross">Toyota Corolla Cross</option>
                      <option value="Vios">Toyota Vios</option>
                      <option value="Veloz Cross">Toyota Veloz Cross</option>
                      <option value="Innova">Toyota Innova</option>
                      <option value="Raize">Toyota Raize</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Mức giá tối đa
                    </label>
                    <select
                      name="maxPrice"
                      className="w-full h-11 px-3 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-toyota-red font-medium"
                      defaultValue=""
                    >
                      <option value="">Tất cả mức giá</option>
                      <option value="550000000">Dưới 550 triệu</option>
                      <option value="750000000">Dưới 750 triệu</option>
                      <option value="900000000">Dưới 900 triệu</option>
                      <option value="1200000000">Dưới 1.2 tỷ</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full h-11 inline-flex items-center justify-center gap-2 px-4 rounded-lg bg-toyota-red text-white text-sm font-bold shadow-md hover:bg-toyota-hover active:scale-[0.98] transition-all"
                    >
                      <Search className="w-4 h-4" />
                      <span>Tìm xe</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Fast links */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-gray-300">
                <span className="text-gray-400">Dòng xe được tìm nhiều:</span>
                {["Camry", "Fortuner", "Corolla Cross", "Vios"].map((m) => (
                  <Link
                    key={m}
                    href={`/xe-cu?model=${encodeURIComponent(m)}`}
                    className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-toyota-red hover:text-white transition-colors border border-white/10"
                  >
                    {m}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80"
                    alt="Toyota Camry Showroom"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-toyota-red font-bold">
                        Đang có tại showroom
                      </span>
                      <h4 className="text-lg font-bold">Toyota Camry 2.0Q 2022</h4>
                      <p className="text-xs text-gray-300">Chỉ từ 920.000.000 VNĐ • Trả trước 20%</p>
                    </div>
                    <Link
                      href="/xe-cu/toyota-camry-2-0q-2022"
                      className="p-2.5 rounded-full bg-toyota-red text-white hover:bg-white hover:text-toyota-red transition-all shadow-md"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white text-charcoal shadow-xl border border-gray-100">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Chuẩn 176 hạng mục</div>
                  <div className="text-[11px] text-gray-500">Bảo hành chính hãng Toyota</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DÒNG XE NỔI BẬT (FEATURED CARS) */}
      <section className="py-16 sm:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-toyota-red text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                Kho xe tuyển chọn
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-charcoal-heading">
                Xe Đã Qua Sử Dụng Mới Về Showroom
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Tất cả các dòng xe đều có sẵn tại showroom Toyota Biên Hoà, sẵn sàng giao ngay.
              </p>
            </div>

            <Link
              href="/xe-cu"
              className="inline-flex items-center gap-2 text-sm font-bold text-toyota-red hover:text-toyota-hover group"
            >
              <span>Xem tất cả kho xe ({allCars.length} xe)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>

          {/* Bottom CTA to View All */}
          <div className="mt-12 text-center">
            <Link
              href="/xe-cu"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-toyota-red text-white font-bold text-sm shadow-md hover:bg-toyota-hover active:scale-[0.98] transition-all"
            >
              <span>Xem toàn bộ danh sách xe đã qua sử dụng</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CAM KẾT CHẤT LƯỢNG TOYOTA SURE (176 HẠNG MỤC) */}
      <section id="cam-ket" className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-toyota-light text-toyota-red text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              Tiêu Chuẩn Toyota Sure Toàn Quốc
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal-heading">
              4 Cam Kết Vàng Khi Mua Xe Tại Toyota Biên Hoà
            </h2>
            <p className="text-sm sm:text-base text-gray-500">
              Mỗi chiếc xe mang logo Toyota Sure là lời khẳng định uy tín vững chắc từ đội ngũ kỹ sư chuyên môn cao.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cam kết 1 */}
            <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-toyota-red/30 transition-all hover:shadow-card">
              <div className="w-12 h-12 rounded-xl bg-toyota-red/10 text-toyota-red flex items-center justify-center mb-5">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal-heading mb-2">
                176 Hạng Mục Kiểm Tra
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Được kiểm định chi tiết từ động cơ, hộp số, khung gầm, hệ thống điện đến nội ngoại thất bởi chuyên viên kỹ thuật chuẩn Toyota.
              </p>
            </div>

            {/* Cam kết 2 */}
            <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-toyota-red/30 transition-all hover:shadow-card">
              <div className="w-12 h-12 rounded-xl bg-toyota-red/10 text-toyota-red flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal-heading mb-2">
                Không Đâm Đụng & Thủy Kích
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Cam kết bằng văn bản xe không tai nạn ảnh hưởng kết cấu khung xe, không ngập nước, keo chỉ nguyên bản 100%.
              </p>
            </div>

            {/* Cam kết 3 */}
            <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-toyota-red/30 transition-all hover:shadow-card">
              <div className="w-12 h-12 rounded-xl bg-toyota-red/10 text-toyota-red flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal-heading mb-2">
                Bảo Hành Chính Hãng
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Bảo hành động cơ và hộp số lên tới 1 năm hoặc 20.000 km. Hỗ trợ cứu hộ 24/7 trên toàn quốc thông qua hệ thống đại lý.
              </p>
            </div>

            {/* Cam kết 4 */}
            <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-toyota-red/30 transition-all hover:shadow-card">
              <div className="w-12 h-12 rounded-xl bg-toyota-red/10 text-toyota-red flex items-center justify-center mb-5">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-charcoal-heading mb-2">
                Pháp Lý Rõ Ràng & Minh Bạch
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Hồ sơ pháp lý hợp lệ, không tranh chấp, không phạt nguội. Hỗ trợ rút hồ sơ gốc và thủ tục sang tên bấm biển nhanh chóng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION & DỊCH VỤ THU MUA */}
      <section className="py-16 bg-charcoal text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-toyota-red text-xs font-bold uppercase tracking-wider">
                Thu Mua & Đổi Xe Cũ Lấy Xe Mới
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Bạn Có Nhu Cầu Định Giá Hoặc Bán Lại Chiếc Xe Của Mình?
              </h2>
              <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
                Toyota Biên Hoà nhận thu mua tất cả các dòng xe đã qua sử dụng với mức giá tốt nhất thị trường Đồng Nai và Đông Nam Bộ. Định giá miễn phí tận nơi, giải ngân tiền mặt ngay trong ngày.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="tel:0918565656"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-toyota-red text-white text-sm font-bold shadow-lg hover:bg-toyota-hover transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Hotline: 0918 565 656</span>
              </a>

              <Link
                href="/xe-cu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 text-white text-sm font-bold border border-zinc-700 hover:bg-zinc-700 transition-all"
              >
                <span>Xem danh mục xe hiện có</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

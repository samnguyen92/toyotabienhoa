import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Phone,
  ArrowRight,
  Calendar,
  Car as CarIcon,
  Gauge,
  Shield,
  ShieldCheck,
  Target,
  Headphones,
  MessageSquare,
} from "lucide-react";
import { getFeaturedCars } from "@/services/carService";
import { CarCard } from "@/components/car/CarCard";

export default async function HomePage() {
  const featuredCars = await getFeaturedCars(6);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* =========================================================================
          SECTION 1: HERO BANNER WITH SHOWROOM BACKDROP & FLOATING CAR SPOTLIGHT
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFAFA] border-b border-gray-100">
        {/* Architectural Showroom Background (Right side) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 pointer-events-none">
          <Image
            src="/images/showroom-hero.jpg"
            alt="Toyota Biên Hoà Showroom"
            fill
            priority
            className="object-cover object-right opacity-90"
          />
          {/* Subtle gradient to seamlessly blend text on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent lg:from-[#FAFAFA] lg:via-[#FAFAFA]/65 lg:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle & Floating Search Box */}
            <div className="lg:col-span-7 space-y-6">
              {/* Red tag line */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-toyota-red uppercase">
                <span className="w-5 h-0.5 bg-toyota-red inline-block" />
                <span>UY TÍN • CHẤT LƯỢNG • AN TÂM</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
                Xe Đã Qua Sử Dụng<br />
                <span className="text-toyota-red">Toyota Chính Hãng</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                Chọn xe đã qua sử dụng tại Toyota Biên Hòa để tận hưởng chất lượng, sự an tâm và giá trị bền vững từ thương hiệu Toyota.
              </p>

              {/* Floating Search Filter Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-gray-100 max-w-2xl">
                <form
                  action="/xe-cu"
                  method="GET"
                  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 items-end"
                >
                  {/* Select Hãng xe */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                      Hãng xe
                    </label>
                    <select
                      name="brand"
                      defaultValue=""
                      className="w-full h-10 px-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-toyota-red"
                    >
                      <option value="">Tất cả hãng xe</option>
                      <option value="Toyota">Toyota</option>
                    </select>
                  </div>

                  {/* Select Dòng xe */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                      Dòng xe
                    </label>
                    <select
                      name="model"
                      defaultValue=""
                      className="w-full h-10 px-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-toyota-red"
                    >
                      <option value="">Tất cả dòng xe</option>
                      <option value="Camry">Camry</option>
                      <option value="Fortuner">Fortuner</option>
                      <option value="Corolla Cross">Corolla Cross</option>
                      <option value="Veloz Cross">Veloz Cross</option>
                      <option value="Wigo">Wigo</option>
                      <option value="Yaris Cross">Yaris Cross</option>
                    </select>
                  </div>

                  {/* Select Năm sản xuất */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                      Năm sản xuất
                    </label>
                    <select
                      name="year"
                      defaultValue=""
                      className="w-full h-10 px-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-toyota-red"
                    >
                      <option value="">Tất cả năm</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                    </select>
                  </div>

                  {/* Select Mức giá */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                      Mức giá
                    </label>
                    <select
                      name="maxPrice"
                      defaultValue=""
                      className="w-full h-10 px-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-toyota-red"
                    >
                      <option value="">Tất cả mức giá</option>
                      <option value="500000000">Dưới 500 triệu</option>
                      <option value="700000000">500 - 700 triệu</option>
                      <option value="1000000000">700 - 1 tỷ</option>
                      <option value="1500000000">Trên 1 tỷ</option>
                    </select>
                  </div>

                  {/* Search CTA */}
                  <div className="col-span-2 md:col-span-4 lg:col-span-1">
                    <button
                      type="submit"
                      className="w-full h-10 px-3 bg-toyota-red hover:bg-toyota-hover text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all"
                    >
                      <Search className="w-3.5 h-3.5" />
                      <span>Tìm xe</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Spotlight Featured Card (Toyota Camry 2.5Q) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-gray-200/80 bg-zinc-950 group">
                {/* Badge top-left: Xe nổi bật */}
                <div className="absolute top-3.5 left-3.5 z-20">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-toyota-red text-white shadow-md">
                    Xe nổi bật
                  </span>
                </div>

                {/* Car Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="/images/camry-2022.jpg"
                    alt="Toyota Camry 2.5Q 2022"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay at bottom for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                </div>

                {/* Spotlight Overlay Content */}
                <div className="p-4 sm:p-5 text-white">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    Toyota Camry 2.5Q 2022
                  </h3>

                  {/* Spec Row */}
                  <div className="flex items-center gap-4 text-xs text-gray-300 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      2022
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CarIcon className="w-3.5 h-3.5 text-gray-400" />
                      Sedan
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Gauge className="w-3.5 h-3.5 text-gray-400" />
                      45.000 km
                    </span>
                  </div>

                  {/* Price & Red Arrow Button */}
                  <div className="flex items-center justify-between pt-1 border-t border-zinc-800">
                    <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      920.000.000 đ
                    </span>
                    <Link
                      href="/xe-cu/toyota-camry-2-5q-2022"
                      className="w-9 h-9 rounded-full bg-toyota-red hover:bg-toyota-hover flex items-center justify-center text-white transition-all shadow-md group-hover:scale-105 active:scale-95"
                      aria-label="Xem chi tiết Toyota Camry 2.5Q"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SHOWROOM INVENTORY (XE ĐÃ QUA SỬ DỤNG MỚI VỀ SHOWROOM)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-toyota-red uppercase mb-2">
                <span className="w-5 h-0.5 bg-toyota-red inline-block" />
                <span>XE ĐÃ QUA SỬ DỤNG</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Xe Đã Qua Sử Dụng Mới Về Showroom
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5 max-w-xl">
                Đa dạng mẫu mã, kiểm định chất lượng, bảo hành chính hãng, hỗ trợ tài chính linh hoạt.
              </p>
            </div>

            <Link
              href="/xe-cu"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-toyota-red hover:underline shrink-0 group"
            >
              <span>Xem tất cả xe đã qua sử dụng</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 6 Car Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12">
            {featuredCars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>

          {/* Center CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/xe-cu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-toyota-red hover:bg-toyota-hover text-white text-xs sm:text-sm font-bold shadow-md active:scale-[0.98] transition-all group"
            >
              <CarIcon className="w-4 h-4" />
              <span>Xem thêm xe đã qua sử dụng khác</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: 4 CAM KẾT VÀNG KHI MUA XE TẠI TOYOTA BIÊN HÒA
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-toyota-red uppercase block mb-2">
              VÌ SAO NÊN CHỌN TOYOTA BIÊN HÒA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              4 Cam Kết Vàng Khi Mua Xe Tại Toyota Biên Hòa
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Mỗi chiếc xe đã qua sử dụng tại Toyota Biên Hòa đều được kiểm tra kỹ lưỡng và cam kết chất lượng, mang đến sự an tâm tuyệt đối cho khách hàng.
            </p>
          </div>

          {/* 4 Commitments Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cam kết 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-toyota-red flex items-center justify-center border border-red-100/60 mb-5">
                <Shield className="w-6 h-6 text-toyota-red" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Xe Chính Hãng Toyota
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Tất cả xe đều là xe Toyota chính hãng, nguồn gốc rõ ràng, minh bạch, được kiểm định chất lượng nghiêm ngặt.
              </p>
            </div>

            {/* Cam kết 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-toyota-red flex items-center justify-center border border-red-100/60 mb-5">
                <ShieldCheck className="w-6 h-6 text-toyota-red" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Bảo Hành Chính Hãng
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Áp dụng chế độ bảo hành chính hãng và hỗ trợ kỹ thuật từ đội ngũ chuyên nghiệp, tận tâm.
              </p>
            </div>

            {/* Cam kết 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-toyota-red flex items-center justify-center border border-red-100/60 mb-5">
                <Target className="w-6 h-6 text-toyota-red" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Hỗ Trợ Tài Chính Linh Hoạt
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Hỗ trợ vay ngân hàng với lãi suất ưu đãi, thủ tục đơn giản, nhanh chóng.
              </p>
            </div>

            {/* Cam kết 4 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-toyota-red flex items-center justify-center border border-red-100/60 mb-5">
                <Headphones className="w-6 h-6 text-toyota-red" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Dịch Vụ Hậu Mãi Chu Đáo
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Đội ngũ kỹ thuật viên giàu kinh nghiệm, phụ tùng chính hãng, chăm sóc xe trọn đời.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TRADE-IN / CAR VALUATION BANNER
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0A0D14] text-white py-14 sm:py-18">
        {/* Background Car Headlight Image on right */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none">
          <Image
            src="/images/cta-camry.jpg"
            alt="Toyota Camry Headlight"
            fill
            className="object-cover object-center lg:object-right opacity-85"
          />
          {/* Smooth black gradient fade to left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/85 to-transparent lg:from-[#0A0D14] lg:via-[#0A0D14]/50 lg:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-xl space-y-4">
            {/* Tag line */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-toyota-red uppercase">
              <span className="w-5 h-0.5 bg-toyota-red inline-block" />
              <span>SẴN SÀNG ĐỒNG HÀNH CÙNG BẠN</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bạn Có Nhu Cầu Định Giá Hoặc Bán Lại Chiếc Xe Của Mình?
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Toyota Biên Hòa hỗ trợ định giá xe nhanh chóng, minh bạch và chuyên nghiệp. Liên hệ ngay để được tư vấn và hỗ trợ tốt nhất.
            </p>

            {/* CTA Buttons */}
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

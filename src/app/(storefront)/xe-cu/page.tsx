import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { FilterSidebar } from "@/components/car/FilterSidebar";
import { CarCard } from "@/components/car/CarCard";
import { getAllCars } from "@/services/carService";
import { Search, ChevronLeft, ChevronRight, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { CarFilterParams } from "@/types/car";

interface ListingPageProps {
  searchParams: CarFilterParams & { page?: string };
}

export const metadata = {
  title: "Kho Xe Đã Qua Sử Dụng Chính Hãng Toyota | Toyota Biên Hòa",
  description:
    "Kho xe ô tô đã qua sử dụng chính hãng Toyota Sure tại Toyota Biên Hòa. Chất lượng được kiểm định 176 hạng mục, bảo hành uy tín, hỗ trợ tài chính linh hoạt.",
};

export default async function CarListingPage({ searchParams }: ListingPageProps) {
  const {
    model,
    brand,
    minPrice,
    maxPrice,
    transmission,
    fuel_type,
    body_style,
    year,
    status,
    sort,
    page = "1",
  } = searchParams;

  const allFilteredCars = await getAllCars(searchParams);
  const totalCount = allFilteredCars.length;

  // Pagination (9 cars per page as shown in mockup 3x3)
  const pageSize = 9;
  const currentPage = Math.max(1, parseInt(page, 10) || 1);
  const totalPages = Math.ceil(totalCount / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedCars = allFilteredCars.slice(startIndex, startIndex + pageSize);

  // Helper to build pagination links keeping query parameters
  const getPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    if (model) params.set("model", model);
    if (brand) params.set("brand", brand);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (transmission) params.set("transmission", transmission);
    if (fuel_type) params.set("fuel_type", fuel_type);
    if (body_style) params.set("body_style", body_style);
    if (year) params.set("year", year);
    if (status) params.set("status", status);
    if (sort) params.set("sort", sort);
    params.set("page", pageNum.toString());
    return `/xe-cu?${params.toString()}`;
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* =========================================================================
          1. HEADER BANNER: BREADCRUMB, TITLE, CALLIGRAPHY SLOGAN & SHOWROOM IMAGE
          ========================================================================= */}
      <section className="relative bg-white border-b border-gray-150 overflow-hidden pt-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
            <Link href="/" className="hover:text-toyota-red transition-colors">
              Trang chủ
            </Link>
            <span>&gt;</span>
            <span className="text-gray-900 font-semibold">Xe đã qua sử dụng</span>
            <span className="text-gray-400">—</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* Title & Description (Left) */}
            <div className="lg:col-span-7 space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
                Kho Xe Đã Qua Sử Dụng<br />
                <span className="text-toyota-red">Chính Hãng Toyota</span>
              </h1>
              <div className="text-xs sm:text-sm text-gray-600 space-y-1 max-w-xl leading-relaxed">
                <p>Chất lượng được kiểm định, bảo hành uy tín, hỗ trợ tài chính linh hoạt.</p>
                <p>Tất cả xe đều có lịch sử bảo dưỡng rõ ràng, minh bạch.</p>
              </div>
            </div>

            {/* Calligraphy Quote & Showroom Backdrop (Right) */}
            <div className="lg:col-span-5 relative flex items-center justify-end">
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/showroom-hero.jpg"
                  alt="Showroom Toyota Biên Hòa"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />

                {/* Elegant Handwritten / Script Slogan */}
                <div className="absolute top-4 left-4 z-10 flex flex-col font-serif italic text-gray-800 drop-shadow-sm select-none">
                  <span className="text-lg font-bold text-gray-900 transform -rotate-3">
                    Xe đẹp
                  </span>
                  <span className="text-base font-semibold text-toyota-red pl-2 transform -rotate-2">
                    Chất lượng thật
                  </span>
                  <span className="text-sm font-medium text-gray-700 pl-4 transform -rotate-1">
                    Hành trình an tâm
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Search Floating Filter Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-200">
            <form
              action="/xe-cu"
              method="GET"
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 items-end"
            >
              <div>
                <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                  Hãng xe
                </label>
                <select
                  name="brand"
                  defaultValue={brand || ""}
                  className="w-full h-10 px-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-toyota-red"
                >
                  <option value="">Tất cả hãng xe</option>
                  <option value="Toyota">Toyota</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                  Dòng xe
                </label>
                <select
                  name="model"
                  defaultValue={model || ""}
                  className="w-full h-10 px-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-toyota-red"
                >
                  <option value="">Tất cả dòng xe</option>
                  <option value="Camry">Camry</option>
                  <option value="Fortuner">Fortuner</option>
                  <option value="Corolla Cross">Corolla Cross</option>
                  <option value="Veloz Cross">Veloz Cross</option>
                  <option value="Yaris Cross">Yaris Cross</option>
                  <option value="Corolla Altis">Corolla Altis</option>
                  <option value="Innova">Innova</option>
                  <option value="Hilux">Hilux</option>
                  <option value="Raize">Raize</option>
                  <option value="Vios">Vios</option>
                  <option value="Wigo">Wigo</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                  Năm sản xuất
                </label>
                <select
                  name="year"
                  defaultValue={year || ""}
                  className="w-full h-10 px-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-toyota-red"
                >
                  <option value="">Tất cả năm</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                  Mức giá
                </label>
                <select
                  name="maxPrice"
                  defaultValue={maxPrice || ""}
                  className="w-full h-10 px-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-toyota-red"
                >
                  <option value="">Tất cả mức giá</option>
                  <option value="500000000">Dưới 500 triệu</option>
                  <option value="700000000">500 - 700 triệu</option>
                  <option value="1000000000">700 - 1 tỷ</option>
                  <option value="1500000000">Trên 1 tỷ</option>
                </select>
              </div>

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
      </section>

      {/* =========================================================================
          2. MAIN CONTENT: RESULT COUNT, SORTING, SIDEBAR FILTER & 3X3 GRID
          ========================================================================= */}
      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar above Grid: Results count (Left) & Sort dropdown (Right) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <p className="text-xs sm:text-sm text-gray-600">
              Tìm thấy{" "}
              <span className="text-toyota-red font-bold text-sm sm:text-base">
                {totalCount} xe
              </span>{" "}
              phù hợp với tiêu chí của bạn
            </p>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
                Sắp xếp:
              </span>
              <form method="GET" action="/xe-cu" className="inline">
                {model && <input type="hidden" name="model" value={model} />}
                {brand && <input type="hidden" name="brand" value={brand} />}
                {minPrice && <input type="hidden" name="minPrice" value={minPrice} />}
                {maxPrice && <input type="hidden" name="maxPrice" value={maxPrice} />}
                {transmission && <input type="hidden" name="transmission" value={transmission} />}
                {fuel_type && <input type="hidden" name="fuel_type" value={fuel_type} />}
                {body_style && <input type="hidden" name="body_style" value={body_style} />}
                {year && <input type="hidden" name="year" value={year} />}

                <select
                  name="sort"
                  defaultValue={sort || "default"}
                  className="h-9 px-3 text-xs font-medium bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-toyota-red text-gray-700 shadow-sm"
                >
                  <option value="default">Mới nhất / Đang bán</option>
                  <option value="price-asc">Giá: Thấp đến Cao</option>
                  <option value="price-desc">Giá: Cao đến Thấp</option>
                  <option value="year-desc">Đời xe: Mới nhất</option>
                  <option value="mileage-asc">ODO: Ít nhất</option>
                </select>
              </form>
            </div>
          </div>

          {/* 2 Columns: Filter Sidebar (Left) & Cars Grid (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Filter (Left - 3.5 cols on lg) */}
            <div className="lg:col-span-4 xl:col-span-3">
              <Suspense fallback={<div className="h-96 bg-white rounded-2xl animate-pulse" />}>
                <FilterSidebar />
              </Suspense>
            </div>

            {/* Right Cars 3x3 Grid & Pagination (8.5 cols on lg) */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-8">
              {paginatedCars.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedCars.map((car) => (
                    <CarCard key={car._id} car={car} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-red-50 text-toyota-red mx-auto flex items-center justify-center">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Không tìm thấy xe phù hợp
                  </h3>
                  <p className="text-xs text-gray-500 max-w-sm mx-auto">
                    Hiện chưa có xe nào thoả mãn toàn bộ tiêu chí lọc của bạn. Bạn vui lòng thử giảm bớt các tiêu chí lọc.
                  </p>
                  <Link
                    href="/xe-cu"
                    className="inline-block px-5 py-2.5 rounded-lg bg-toyota-red text-white text-xs font-semibold hover:bg-toyota-hover shadow-sm"
                  >
                    Xem tất cả xe
                  </Link>
                </div>
              )}

              {/* Pagination Controls matching mockup: [ < ] [ 1 ] [ 2 ] [ > ] */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-4">
                  {currentPage > 1 ? (
                    <Link
                      href={getPageUrl(currentPage - 1)}
                      className="w-8 h-8 rounded-md border border-gray-200 bg-white text-gray-600 hover:border-gray-300 flex items-center justify-center text-xs transition-colors shadow-sm"
                      aria-label="Trang trước"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="w-8 h-8 rounded-md border border-gray-150 bg-gray-50 text-gray-300 flex items-center justify-center text-xs cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  )}

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isActive = pageNum === currentPage;
                    return isActive ? (
                      <span
                        key={pageNum}
                        className="w-8 h-8 rounded-md bg-toyota-red text-white font-bold flex items-center justify-center text-xs shadow-sm"
                      >
                        {pageNum}
                      </span>
                    ) : (
                      <Link
                        key={pageNum}
                        href={getPageUrl(pageNum)}
                        className="w-8 h-8 rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center text-xs font-semibold transition-colors shadow-sm"
                      >
                        {pageNum}
                      </Link>
                    );
                  })}

                  {currentPage < totalPages ? (
                    <Link
                      href={getPageUrl(currentPage + 1)}
                      className="w-8 h-8 rounded-md border border-gray-200 bg-white text-gray-600 hover:border-gray-300 flex items-center justify-center text-xs transition-colors shadow-sm"
                      aria-label="Trang tiếp"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="w-8 h-8 rounded-md border border-gray-150 bg-gray-50 text-gray-300 flex items-center justify-center text-xs cursor-not-allowed"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. BOTTOM TRADE-IN VALUATION BANNER MATCHING MOCKUP
          ========================================================================= */}
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

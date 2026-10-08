import React, { Suspense } from "react";
import Link from "next/link";
import { FilterSidebar } from "@/components/car/FilterSidebar";
import { CarCard } from "@/components/car/CarCard";
import { getAllCars } from "@/services/carService";
import { ArrowUpDown, Car, X, RotateCcw, Sparkles } from "lucide-react";
import { CarFilterParams } from "@/types/car";

interface ListingPageProps {
  searchParams: CarFilterParams;
}

export const metadata = {
  title: "Danh Sách Xe Cũ Đang Bán | Toyota Biên Hoà",
  description:
    "Kho xe ô tô đã qua sử dụng chính hãng tại Toyota Biên Hoà. Cam kết chuẩn 176 hạng mục kiểm tra, hỗ trợ trả góp lãi suất ưu đãi.",
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
  } = searchParams;

  const sortedCars = await getAllCars(searchParams);

  const activeFilters = [
    model && { label: `Dòng xe: ${model}`, key: "model" },
    minPrice && { label: `Giá từ: ${Number(minPrice) / 1000000}tr`, key: "minPrice" },
    maxPrice && { label: `Giá đến: ${Number(maxPrice) / 1000000}tr`, key: "maxPrice" },
    transmission && { label: `Hộp số: ${transmission}`, key: "transmission" },
    fuel_type && { label: `Nhiên liệu: ${fuel_type}`, key: "fuel_type" },
    body_style && { label: `Kiểu dáng: ${body_style}`, key: "body_style" },
    year && { label: `Năm: ${year}`, key: "year" },
  ].filter(Boolean) as { label: string; key: string }[];

  return (
    <div className="bg-gray-50/50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-6">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Link href="/" className="hover:text-toyota-red">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-charcoal font-semibold">Xe đã qua sử dụng</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-charcoal-heading">
                Kho Xe Đã Qua Sử Dụng Chính Hãng
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Chứng nhận kiểm tra 176 hạng mục tiêu chuẩn Toyota Sure • Hỗ trợ sang tên & trả góp ngân hàng
              </p>
            </div>

            {/* Sắp xếp dropdown */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <label htmlFor="sort-select" className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
                Sắp xếp:
              </label>
              <form method="GET" action="/xe-cu" className="inline">
                {/* Giữ lại các param hiện tại */}
                {model && <input type="hidden" name="model" value={model} />}
                {minPrice && <input type="hidden" name="minPrice" value={minPrice} />}
                {maxPrice && <input type="hidden" name="maxPrice" value={maxPrice} />}
                {transmission && <input type="hidden" name="transmission" value={transmission} />}
                {fuel_type && <input type="hidden" name="fuel_type" value={fuel_type} />}
                {body_style && <input type="hidden" name="body_style" value={body_style} />}
                {year && <input type="hidden" name="year" value={year} />}

                <select
                  id="sort-select"
                  name="sort"
                  defaultValue={sort || "default"}
                  // Auto submit on change
                  className="h-10 px-3 text-xs font-semibold bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-toyota-red"
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
        </div>

        {/* Active Filter Badges */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-white rounded-xl border border-gray-200/80">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Đang lọc:
            </span>
            {activeFilters.map((filter) => (
              <span
                key={filter.key}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-toyota-light text-toyota-red border border-toyota-subtle"
              >
                <span>{filter.label}</span>
              </span>
            ))}
            <Link
              href="/xe-cu"
              className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-toyota-red ml-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Xoá tất cả</span>
            </Link>
          </div>
        )}

        {/* Main Grid: Sidebar + Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Filter Sidebar */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="p-4 bg-white rounded-xl">Đang tải bộ lọc...</div>}>
              <FilterSidebar />
            </Suspense>
          </div>

          {/* Right Column: Car Grid */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 pb-2">
              <span>
                Tìm thấy{" "}
                <strong className="text-toyota-red text-sm font-extrabold">
                  {sortedCars.length}
                </strong>{" "}
                xe phù hợp tiêu chí
              </span>
            </div>

            {sortedCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedCars.map((car) => (
                  <CarCard key={car._id} car={car} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="p-12 text-center bg-white rounded-2xl border border-gray-200/80 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400">
                  <Car className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-heading">
                  Không tìm thấy xe phù hợp
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                  Hiện chưa có xe nào khớp hoàn toàn với bộ lọc của bạn. Bạn có thể thử bỏ bớt điều kiện lọc hoặc liên hệ trực tiếp với tư vấn viên.
                </p>
                <div className="pt-2">
                  <Link
                    href="/xe-cu"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-toyota-red text-white text-xs font-bold hover:bg-toyota-hover shadow"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Xem toàn bộ kho xe</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

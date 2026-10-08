"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Filter, RotateCcw } from "lucide-react";

export function FilterSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Current values
  const currentModel = searchParams.get("model") || "";
  const currentMinPrice = searchParams.get("minPrice") || "";
  const currentMaxPrice = searchParams.get("maxPrice") || "";
  const currentTransmission = searchParams.get("transmission") || "";
  const currentFuelType = searchParams.get("fuel_type") || "";
  const currentBodyStyle = searchParams.get("body_style") || "";
  const currentYear = searchParams.get("year") || "";

  // Helper function to update search params
  const updateQuery = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    // Reset to page 1 on filter change
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handlePriceRange = (min: string, max: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (min === "" && max === "") {
      params.delete("minPrice");
      params.delete("maxPrice");
    } else {
      if (min) params.set("minPrice", min);
      else params.delete("minPrice");

      if (max) params.set("maxPrice", max);
      else params.delete("maxPrice");
    }
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const resetFilters = () => {
    router.push(pathname, { scroll: false });
  };

  const models = [
    "Camry",
    "Fortuner",
    "Corolla Cross",
    "Vios",
    "Veloz Cross",
    "Innova",
    "Raize",
    "Hilux",
  ];

  const priceRanges = [
    { label: "Tất cả", min: "", max: "" },
    { label: "Dưới 500 triệu", min: "0", max: "500000000" },
    { label: "500 – 700 triệu", min: "500000000", max: "700000000" },
    { label: "700 triệu – 1 tỷ", min: "700000000", max: "1000000000" },
    { label: "Trên 1 tỷ", min: "1000000000", max: "3000000000" },
  ];

  const bodyStyles = ["Sedan", "SUV", "MPV"];
  const transmissions = ["Số tự động", "Số sàn", "CVT"];
  const fuelTypes = ["Xăng", "Dầu", "Hybrid"];
  const years = ["2023", "2022", "2021", "2020"];

  const isPriceAll = !currentMinPrice && !currentMaxPrice;

  return (
    <aside className="w-full bg-white rounded-2xl border border-gray-150 p-5 shadow-sm space-y-6">
      {/* Header filter title */}
      <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
        <Filter className="w-4 h-4 text-toyota-red" />
        <h3 className="font-extrabold text-xs sm:text-sm text-gray-900 uppercase tracking-wider">
          BỘ LỌC TÌM KIẾM
        </h3>
      </div>

      {/* 1. Dòng xe (Model) */}
      <div className="space-y-2.5">
        <h4 className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
          DÒNG XE (MODEL)
        </h4>
        <div className="grid grid-cols-2 gap-y-2 gap-x-3 pt-0.5">
          {models.map((m) => {
            const isChecked = currentModel.toLowerCase() === m.toLowerCase();
            return (
              <label
                key={m}
                onClick={() => updateQuery("model", m)}
                className="flex items-center gap-2 cursor-pointer group text-xs text-gray-700 select-none"
              >
                <input
                  type="checkbox"
                  readOnly
                  checked={isChecked}
                  className="w-3.5 h-3.5 rounded border-gray-300 text-toyota-red focus:ring-toyota-red cursor-pointer accent-toyota-red"
                />
                <span
                  className={`group-hover:text-toyota-red transition-colors ${
                    isChecked ? "text-toyota-red font-semibold" : ""
                  }`}
                >
                  {m}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 2. Khoảng giá */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
          KHOẢNG GIÁ
        </h4>
        <div className="space-y-1.5 pt-0.5">
          {priceRanges.map((range, idx) => {
            const isSelected =
              range.label === "Tất cả"
                ? isPriceAll
                : range.min === currentMinPrice && range.max === currentMaxPrice;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handlePriceRange(range.min, range.max)}
                className={`w-full px-3 py-2 text-xs rounded-lg transition-all flex items-center gap-2.5 text-left ${
                  isSelected
                    ? "bg-toyota-red text-white font-bold shadow-sm"
                    : "border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                    isSelected
                      ? "border-white bg-white text-toyota-red"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isSelected && (
                    <div className="w-1.5 h-1.5 rounded-full bg-toyota-red" />
                  )}
                </div>
                <span>{range.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Kiểu dáng xe */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
          KIỂU DÁNG XE
        </h4>
        <div className="flex items-center gap-2 pt-0.5">
          {bodyStyles.map((style) => {
            const isSelected = currentBodyStyle.toLowerCase() === style.toLowerCase();
            return (
              <label
                key={style}
                onClick={() => updateQuery("body_style", style)}
                className={`flex-1 px-2.5 py-1.5 text-xs rounded-md border flex items-center justify-center gap-1.5 cursor-pointer select-none transition-all ${
                  isSelected
                    ? "border-toyota-red bg-red-50 text-toyota-red font-semibold"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  readOnly
                  checked={isSelected}
                  className="w-3 h-3 rounded accent-toyota-red cursor-pointer"
                />
                <span>{style}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 4. Hộp số */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
          HỘP SỐ
        </h4>
        <div className="flex items-center gap-2 pt-0.5">
          {transmissions.map((trans) => {
            const isSelected = currentTransmission.toLowerCase() === trans.toLowerCase();
            return (
              <label
                key={trans}
                onClick={() => updateQuery("transmission", trans)}
                className={`flex-1 px-2 py-1.5 text-[11px] rounded-md border flex items-center justify-center gap-1.5 cursor-pointer select-none transition-all ${
                  isSelected
                    ? "border-toyota-red bg-red-50 text-toyota-red font-semibold"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  readOnly
                  checked={isSelected}
                  className="w-3 h-3 rounded accent-toyota-red cursor-pointer"
                />
                <span className="truncate">{trans}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 5. Nhiên liệu */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
          NHIÊN LIỆU
        </h4>
        <div className="flex items-center gap-2 pt-0.5">
          {fuelTypes.map((fuel) => {
            const isSelected = currentFuelType.toLowerCase() === fuel.toLowerCase();
            return (
              <label
                key={fuel}
                onClick={() => updateQuery("fuel_type", fuel)}
                className={`flex-1 px-2.5 py-1.5 text-xs rounded-md border flex items-center justify-center gap-1.5 cursor-pointer select-none transition-all ${
                  isSelected
                    ? "border-toyota-red bg-red-50 text-toyota-red font-semibold"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  readOnly
                  checked={isSelected}
                  className="w-3 h-3 rounded accent-toyota-red cursor-pointer"
                />
                <span>{fuel}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 6. Năm sản xuất */}
      <div className="space-y-2 pt-3 border-t border-gray-100">
        <h4 className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
          NĂM SẢN XUẤT
        </h4>
        <div className="grid grid-cols-4 gap-2 pt-0.5">
          {years.map((y) => {
            const isSelected = currentYear === y;
            return (
              <button
                key={y}
                type="button"
                onClick={() => updateQuery("year", y)}
                className={`py-1.5 text-xs rounded-md border text-center transition-all ${
                  isSelected
                    ? "border-toyota-red bg-red-50 text-toyota-red font-bold"
                    : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                }`}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Button: Đặt lại bộ lọc */}
      <div className="pt-2 border-t border-gray-100">
        <button
          onClick={resetFilters}
          type="button"
          className="w-full py-2.5 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-gray-500" />
          <span>Đặt lại bộ lọc</span>
        </button>
      </div>
    </aside>
  );
}

"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Filter, RotateCcw, ChevronDown, Check } from "lucide-react";

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
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handlePriceRange = (min: string, max: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("minPrice") === min && params.get("maxPrice") === max) {
      params.delete("minPrice");
      params.delete("maxPrice");
    } else {
      if (min) params.set("minPrice", min);
      else params.delete("minPrice");

      if (max) params.set("maxPrice", max);
      else params.delete("maxPrice");
    }
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
    { label: "500 - 700 triệu", min: "500000000", max: "700000000" },
    { label: "700 triệu - 1 tỷ", min: "700000000", max: "1000000000" },
    { label: "Trên 1 tỷ", min: "1000000000", max: "3000000000" },
  ];

  const transmissions = ["Số tự động", "Số sàn", "CVT"];
  const fuelTypes = ["Xăng", "Dầu", "Hybrid"];
  const bodyStyles = ["Sedan", "SUV", "MPV"];
  const years = ["2023", "2022", "2021", "2020"];

  const hasActiveFilters =
    Boolean(currentModel) ||
    Boolean(currentMinPrice) ||
    Boolean(currentMaxPrice) ||
    Boolean(currentTransmission) ||
    Boolean(currentFuelType) ||
    Boolean(currentBodyStyle) ||
    Boolean(currentYear);

  return (
    <aside className="w-full bg-white rounded-2xl border border-gray-200/80 p-5 shadow-sm space-y-6">
      {/* Header filter & Reset */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-toyota-red" />
          <h3 className="font-bold text-sm text-charcoal uppercase tracking-wider">
            Bộ Lọc Tìm Kiếm
          </h3>
        </div>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            type="button"
            className="flex items-center gap-1 text-xs font-semibold text-toyota-red hover:underline"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Xoá lọc</span>
          </button>
        )}
      </div>

      {/* Dòng xe (Model) */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
          Dòng xe (Model)
        </h4>
        <div className="grid grid-cols-2 gap-1.5 pt-1">
          {models.map((model) => {
            const isSelected = currentModel.toLowerCase() === model.toLowerCase();
            return (
              <button
                key={model}
                type="button"
                onClick={() => updateQuery("model", model)}
                className={`px-3 py-2 text-xs rounded-lg font-medium text-left transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-toyota-red text-white font-bold shadow-sm"
                    : "bg-gray-50 text-charcoal-body hover:bg-gray-100"
                }`}
              >
                <span>{model}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mức giá */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
          Khoảng giá
        </h4>
        <div className="space-y-1.5 pt-1">
          {priceRanges.map((range, index) => {
            const isSelected =
              range.min === currentMinPrice && range.max === currentMaxPrice;
            return (
              <button
                key={index}
                type="button"
                onClick={() => handlePriceRange(range.min, range.max)}
                className={`w-full px-3 py-2 text-xs rounded-lg font-medium text-left transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-toyota-red text-white font-bold shadow-sm"
                    : "bg-gray-50 text-charcoal-body hover:bg-gray-100"
                }`}
              >
                <span>{range.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Kiểu dáng */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
          Kiểu dáng xe
        </h4>
        <div className="grid grid-cols-3 gap-1.5 pt-1">
          {bodyStyles.map((style) => {
            const isSelected = currentBodyStyle.toLowerCase() === style.toLowerCase();
            return (
              <button
                key={style}
                type="button"
                onClick={() => updateQuery("body_style", style)}
                className={`px-2 py-2 text-xs rounded-lg font-medium text-center transition-all ${
                  isSelected
                    ? "bg-toyota-red text-white font-bold shadow-sm"
                    : "bg-gray-50 text-charcoal-body hover:bg-gray-100"
                }`}
              >
                {style}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hộp số */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
          Hộp số
        </h4>
        <div className="grid grid-cols-3 gap-1.5 pt-1">
          {transmissions.map((trans) => {
            const isSelected = currentTransmission.toLowerCase() === trans.toLowerCase();
            return (
              <button
                key={trans}
                type="button"
                onClick={() => updateQuery("transmission", trans)}
                className={`px-2 py-2 text-xs rounded-lg font-medium text-center transition-all ${
                  isSelected
                    ? "bg-toyota-red text-white font-bold shadow-sm"
                    : "bg-gray-50 text-charcoal-body hover:bg-gray-100"
                }`}
              >
                {trans}
              </button>
            );
          })}
        </div>
      </div>

      {/* Nhiên liệu */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
          Nhiên liệu
        </h4>
        <div className="grid grid-cols-3 gap-1.5 pt-1">
          {fuelTypes.map((fuel) => {
            const isSelected = currentFuelType.toLowerCase() === fuel.toLowerCase();
            return (
              <button
                key={fuel}
                type="button"
                onClick={() => updateQuery("fuel_type", fuel)}
                className={`px-2 py-2 text-xs rounded-lg font-medium text-center transition-all ${
                  isSelected
                    ? "bg-toyota-red text-white font-bold shadow-sm"
                    : "bg-gray-50 text-charcoal-body hover:bg-gray-100"
                }`}
              >
                {fuel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Năm sản xuất */}
      <div className="space-y-2 pt-2 border-t border-gray-100">
        <h4 className="text-xs font-bold text-charcoal uppercase tracking-wider">
          Năm sản xuất
        </h4>
        <div className="grid grid-cols-4 gap-1.5 pt-1">
          {years.map((y) => {
            const isSelected = currentYear === y;
            return (
              <button
                key={y}
                type="button"
                onClick={() => updateQuery("year", y)}
                className={`px-2 py-2 text-xs rounded-lg font-medium text-center transition-all ${
                  isSelected
                    ? "bg-toyota-red text-white font-bold shadow-sm"
                    : "bg-gray-50 text-charcoal-body hover:bg-gray-100"
                }`}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

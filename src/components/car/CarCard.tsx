"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Gauge, Fuel, Cog, ShieldCheck, Scale, Check, ArrowRight } from "lucide-react";
import { Car } from "@/types/car";
import { formatVND, formatMileage, getCarImageUrl } from "@/data/mockCars";
import { useCompareStore } from "@/store/useCompareStore";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { isInCompare, toggleCar } = useCompareStore();
  const inCompare = isInCompare(car._id);

  const getStatusBadge = (status: Car["status"]) => {
    switch (status) {
      case "Đang bán":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-sm">
            Đang bán
          </span>
        );
      case "Đã nhận cọc":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500 text-white shadow-sm">
            Đã nhận cọc
          </span>
        );
      case "Đã bán":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-500 text-white shadow-sm">
            Đã bán
          </span>
        );
      default:
        return null;
    }
  };

  const imageUrl = getCarImageUrl(car.images?.[0]);

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image Thumbnail Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Link href={`/xe-cu/${car.slug}`} className="block w-full h-full">
          <Image
            src={imageUrl}
            alt={car.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {getStatusBadge(car.status)}
          {car.certified176 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-black/75 backdrop-blur-sm text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Toyota Sure
            </span>
          )}
        </div>

        {/* Year & Body Style Badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-white/90 backdrop-blur-sm text-charcoal shadow-sm">
            {car.year} • {car.body_style}
          </span>
        </div>

        {/* Quick Compare Toggle */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleCar(car._id);
          }}
          type="button"
          aria-label={inCompare ? "Bỏ so sánh" : "Thêm vào so sánh"}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-200 shadow-md ${
            inCompare
              ? "bg-toyota-red text-white ring-2 ring-white"
              : "bg-white/80 text-charcoal-body hover:bg-white hover:text-toyota-red"
          }`}
          title={inCompare ? "Bỏ so sánh" : "So sánh xe này"}
        >
          {inCompare ? <Check className="w-4 h-4" /> : <Scale className="w-4 h-4" />}
        </button>
      </div>

      {/* Car Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <Link href={`/xe-cu/${car.slug}`} className="block mb-3">
          <h3 className="text-base sm:text-lg font-bold text-charcoal-heading group-hover:text-toyota-red transition-colors line-clamp-1">
            {car.title}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {car.origin || "Chính hãng Toyota"} • {car.color || "Nguyên bản"}
          </p>
        </Link>

        {/* Key Specs Pills */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 text-xs text-charcoal-muted mb-4 bg-gray-50/50 rounded-xl px-2.5">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="flex items-center gap-1 text-gray-400 mb-0.5">
              <Gauge className="w-3.5 h-3.5 text-toyota-red" />
              ODO
            </span>
            <span className="font-semibold text-charcoal-body">{formatMileage(car.mileage)}</span>
          </div>

          <div className="flex flex-col items-center justify-center text-center border-x border-gray-200">
            <span className="flex items-center gap-1 text-gray-400 mb-0.5">
              <Cog className="w-3.5 h-3.5 text-toyota-red" />
              Hộp số
            </span>
            <span className="font-semibold text-charcoal-body">{car.transmission}</span>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="flex items-center gap-1 text-gray-400 mb-0.5">
              <Fuel className="w-3.5 h-3.5 text-toyota-red" />
              Nhiên liệu
            </span>
            <span className="font-semibold text-charcoal-body">{car.fuel_type}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block">
              Giá ưu đãi
            </span>
            <span className="text-lg sm:text-xl font-extrabold text-toyota-red">
              {formatVND(car.price)}
            </span>
          </div>

          <Link
            href={`/xe-cu/${car.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-charcoal text-white text-xs font-bold hover:bg-toyota-red transition-all duration-200 shadow-sm"
          >
            <span>Chi tiết</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

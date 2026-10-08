"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Gauge, Fuel, Cog, ShieldCheck, ArrowRight } from "lucide-react";
import { Car } from "@/types/car";
import { getCarImageUrl } from "@/data/mockCars";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const imageUrl = getCarImageUrl(car.images?.[0]);
  const formattedPrice = `${(car.price || 0).toLocaleString("vi-VN")} đ`;
  const formattedMileage = `${(car.mileage || 0).toLocaleString("vi-VN")} km`;

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300">
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

        {/* Top-left Badges: Status & Toyota Sure */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10 flex-wrap">
          <span
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${
              car.status === "Đã bán"
                ? "bg-zinc-600 text-white"
                : car.status === "Đã nhận cọc"
                ? "bg-amber-500 text-white"
                : "bg-emerald-500 text-white"
            }`}
          >
            {car.status || "Đang bán"}
          </span>

          {car.certified176 !== false && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/75 backdrop-blur-sm text-white flex items-center gap-1 shadow-sm">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Toyota Sure</span>
            </span>
          )}
        </div>

        {/* Top-right: Year badge */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-black/75 backdrop-blur-sm text-white shadow-sm">
            {car.year}
          </span>
        </div>
      </div>

      {/* Car Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Title */}
        <Link href={`/xe-cu/${car.slug}`} className="block mb-2">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-toyota-red transition-colors line-clamp-1">
            {car.title}
          </h3>
        </Link>

        {/* Key Specs Row */}
        <div className="flex items-center gap-3.5 text-xs text-gray-500 mb-4 flex-wrap">
          <span className="inline-flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5 text-gray-400" />
            {formattedMileage}
          </span>
          <span className="inline-flex items-center gap-1">
            <Fuel className="w-3.5 h-3.5 text-gray-400" />
            {car.fuel_type || "Xăng"}
          </span>
          <span className="inline-flex items-center gap-1">
            <Cog className="w-3.5 h-3.5 text-gray-400" />
            {car.transmission || "Tự động"}
          </span>
        </div>

        {/* Price & Action */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="text-base sm:text-lg font-bold text-toyota-red">
            {formattedPrice}
          </span>

          <Link
            href={`/xe-cu/${car.slug}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md border border-gray-200 text-xs font-semibold text-gray-700 hover:text-toyota-red hover:border-toyota-red transition-all duration-200"
          >
            <span>Chi tiết</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

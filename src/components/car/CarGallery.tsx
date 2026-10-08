"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck, Eye } from "lucide-react";
import { getCarImageUrl } from "@/data/mockCars";

interface CarGalleryProps {
  images: any[];
  title: string;
  status: string;
  certified176?: boolean;
}

export function CarGallery({ images, title, status, certified176 }: CarGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const imageList = images && images.length > 0 ? images : [
    "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
  ];

  const currentImage = getCarImageUrl(imageList[selectedIndex]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Large Image Container */}
      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/80 shadow-sm group">
        <Image
          src={currentImage}
          alt={`${title} - Hình ảnh ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover transition-all duration-300"
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${
              status === "Đang bán"
                ? "bg-emerald-500 text-white"
                : status === "Đã nhận cọc"
                ? "bg-amber-500 text-white"
                : "bg-zinc-500 text-white"
            }`}
          >
            {status}
          </span>

          {certified176 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/75 backdrop-blur-md text-white shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Chuẩn 176 hạng mục Toyota Sure
            </span>
          )}
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
          {selectedIndex + 1} / {imageList.length} ảnh
        </div>

        {/* Navigation Arrows */}
        {imageList.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-charcoal shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              aria-label="Ảnh trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-charcoal shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              aria-label="Ảnh kế tiếp"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails list */}
      {imageList.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {imageList.map((img, idx) => {
            const url = getCarImageUrl(img);
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`relative w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                  isSelected
                    ? "border-toyota-red ring-2 ring-toyota-red/30 scale-95"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={url}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

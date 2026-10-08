"use client";

import React from "react";
import { Scale, Check } from "lucide-react";
import { useCompareStore } from "@/store/useCompareStore";

export function DetailCompareButton({ carId }: { carId: string }) {
  const { isInCompare, toggleCar } = useCompareStore();
  const inCompare = isInCompare(carId);

  return (
    <button
      onClick={() => toggleCar(carId)}
      type="button"
      className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold border transition-all ${
        inCompare
          ? "bg-zinc-900 text-white border-zinc-900"
          : "bg-white text-charcoal border-gray-300 hover:border-toyota-red hover:text-toyota-red"
      }`}
    >
      {inCompare ? (
        <>
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Đã thêm vào danh sách so sánh</span>
        </>
      ) : (
        <>
          <Scale className="w-4 h-4" />
          <span>So sánh xe này với xe khác</span>
        </>
      )}
    </button>
  );
}

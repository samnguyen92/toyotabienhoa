"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Scale, ArrowRight, X, Trash2 } from "lucide-react";
import { useCompareStore } from "@/store/useCompareStore";

export function ComparisonBar() {
  const [mounted, setMounted] = useState(false);
  const { selectedCarIds, clearCompare } = useCompareStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || selectedCarIds.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center shadow-2xl animate-bounce-subtle">
      <div className="flex items-center gap-3 bg-charcoal text-white pl-4 pr-3 py-3 rounded-full border border-zinc-700 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-toyota-red flex items-center justify-center font-bold text-xs text-white">
            {selectedCarIds.length}/3
          </div>
          <span className="text-sm font-semibold hidden sm:inline">
            Đã chọn {selectedCarIds.length} xe so sánh
          </span>
        </div>

        <div className="h-5 w-[1px] bg-zinc-700 hidden sm:block" />

        <div className="flex items-center gap-2">
          <Link
            href="/so-sanh"
            className="flex items-center gap-1.5 px-4 py-2 bg-toyota-red text-white text-xs font-bold rounded-full hover:bg-toyota-hover transition-colors shadow-sm"
          >
            <Scale className="w-4 h-4" />
            <span>So sánh ngay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => clearCompare()}
            title="Xoá tất cả"
            className="p-2 rounded-full hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

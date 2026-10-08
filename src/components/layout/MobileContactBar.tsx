"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, CalendarCheck, Sparkles } from "lucide-react";
import { ConsultationModal } from "@/components/common/ConsultationModal";

export function MobileContactBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-3 py-2 flex items-center justify-between gap-2 md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        {/* Nút Gọi Ngay */}
        <a
          href="tel:0918565656"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-toyota-red text-white shadow-sm active:scale-95 transition-transform"
        >
          <span className="flex items-center gap-1 text-xs font-bold">
            <Phone className="w-3.5 h-3.5 fill-current" />
            0918 565 656
          </span>
          <span className="text-[10px] text-red-100 font-medium">Gọi Hotline 24/7</span>
        </a>

        {/* Nút Chat Zalo */}
        <a
          href="https://zalo.me/0918565656"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#0068FF] text-white shadow-sm active:scale-95 transition-transform"
        >
          <span className="flex items-center gap-1 text-xs font-bold">
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            Chat Zalo
          </span>
          <span className="text-[10px] text-blue-100 font-medium">Tư vấn báo giá</span>
        </a>

        {/* Nút Đặt Lịch Lái Thử */}
        <button
          onClick={() => setModalOpen(true)}
          type="button"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-charcoal text-white shadow-sm active:scale-95 transition-transform"
        >
          <span className="flex items-center gap-1 text-xs font-bold">
            <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
            Lái Thử
          </span>
          <span className="text-[10px] text-gray-300 font-medium">Xem xe tại nhà</span>
        </button>
      </div>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

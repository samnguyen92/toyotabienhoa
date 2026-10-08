"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h4 className="text-lg font-bold text-gray-900">
          Đặt Hẹn Thành Công!
        </h4>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          Toyota Biên Hòa đã tiếp nhận thông tin lịch hẹn của bạn. Cố vấn dịch vụ sẽ gọi điện thoại xác nhận trong vòng 10 phút.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold text-emerald-700 underline mt-2 hover:text-emerald-800"
        >
          Đặt lịch hẹn khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          Họ và tên của bạn *
        </label>
        <input
          type="text"
          required
          placeholder="Ví dụ: Nguyễn Văn A"
          className="w-full h-11 px-3.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-toyota-red"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          Số điện thoại liên hệ *
        </label>
        <input
          type="tel"
          required
          placeholder="09xx xxx xxx"
          className="w-full h-11 px-3.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-toyota-red"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          Dòng xe & Đời xe *
        </label>
        <input
          type="text"
          required
          placeholder="Ví dụ: Toyota Vios 2021"
          className="w-full h-11 px-3.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-toyota-red"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          Dịch vụ yêu cầu *
        </label>
        <select className="w-full h-11 px-3.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-toyota-red text-gray-700">
          <option>Kiểm định 176 hạng mục xe cũ</option>
          <option>Bảo dưỡng định kỳ nhanh (EM60)</option>
          <option>Sơn sấy & Đồng sơn nhanh</option>
          <option>Định giá thu mua xe cũ (Trade-in)</option>
          <option>Khác / Sửa chữa chung</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
          Ngày & Giờ mong muốn tiếp nhận
        </label>
        <input
          type="text"
          placeholder="Ví dụ: Sáng mai lúc 9:00 hoặc Thứ 7 tuần này"
          className="w-full h-11 px-3.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-toyota-red"
        />
      </div>

      <div className="sm:col-span-2 pt-2">
        <button
          type="submit"
          className="w-full h-12 bg-toyota-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Xác Nhận Đặt Lịch Tiếp Nhận Ưu Tiên</span>
        </button>
      </div>
    </form>
  );
}

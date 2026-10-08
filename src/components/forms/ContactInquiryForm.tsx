"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactInquiryForm() {
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
          Gửi Yêu Cầu Thành Công!
        </h4>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          Cảm ơn quý khách! Chuyên viên tư vấn Toyota Biên Hòa đã nhận được thông tin và sẽ liên hệ hỗ trợ trong vòng 5 phút.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold text-emerald-700 underline mt-2 hover:text-emerald-800"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Họ và tên của bạn *
          </label>
          <input
            type="text"
            required
            placeholder="Nguyễn Văn A"
            className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#EB0A1E] focus:ring-1 focus:ring-[#EB0A1E]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Số điện thoại liên hệ *
          </label>
          <input
            type="tel"
            required
            placeholder="09xx xxx xxx"
            className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#EB0A1E] focus:ring-1 focus:ring-[#EB0A1E]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Nhu cầu của bạn *
          </label>
          <select className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#EB0A1E] bg-white">
            <option>Tìm mua xe ô tô đã qua sử dụng</option>
            <option>Định giá & Bán xe cũ (Thu cũ đổi mới)</option>
            <option>Đặt hẹn bảo dưỡng / Sửa chữa xưởng dịch vụ</option>
            <option>Tư vấn vay tài chính mua xe trả góp TFS</option>
            <option>Khác</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Chi nhánh tiếp nhận gần bạn
          </label>
          <select className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#EB0A1E] bg-white">
            <option>Showroom TP. Biên Hòa (Đồng Nai)</option>
            <option>Chi nhánh Cái Bè (Tiền Giang)</option>
            <option>Xem xe & Hỗ trợ tận nhà</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
          Dòng xe quan tâm hoặc chi tiết yêu cầu
        </label>
        <textarea
          rows={4}
          placeholder="Ví dụ: Tôi đang tìm xe Toyota Camry hoặc Corolla Cross đời 2021-2023 tầm giá dưới 800 triệu..."
          className="w-full text-sm px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#EB0A1E] focus:ring-1 focus:ring-[#EB0A1E]"
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto bg-[#EB0A1E] hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm"
        >
          <Send className="w-4 h-4" />
          <span>Gửi Yêu Cầu Ngay</span>
        </button>
      </div>
    </form>
  );
}

"use client";

import React, { useState } from "react";
import { X, Phone, Calendar, User, CheckCircle2, ShieldCheck, Car } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  carTitle?: string;
}

export function ConsultationModal({ isOpen, onClose, carTitle }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-charcoal hover:bg-gray-100 transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-toyota-light text-toyota-red">
                <ShieldCheck className="w-3.5 h-3.5" />
                Toyota Sure Biên Hoà
              </span>
              <h3 className="text-xl font-black text-charcoal-heading">
                Đăng Ký Tư Vấn & Lái Thử
              </h3>
              <p className="text-xs text-gray-500">
                {carTitle ? (
                  <span>
                    Quý khách đang quan tâm xe: <strong className="text-toyota-red">{carTitle}</strong>
                  </span>
                ) : (
                  "Chuyên viên sẽ liên hệ gửi hình ảnh chi tiết và bảng giá lăn bánh trong 5 phút."
                )}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Họ và tên của bạn
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Anh Tuấn / Chị Lan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 pl-10 pr-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-toyota-red font-medium"
                  />
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Số điện thoại nhận tư vấn (Zalo) *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 pl-10 pr-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-toyota-red font-medium"
                  />
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Nhu cầu cụ thể
                </label>
                <textarea
                  rows={2}
                  placeholder="Ví dụ: Cần tính phương án trả góp 5 năm, lái thử tại nhà Biên Hoà..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-toyota-red font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-12 inline-flex items-center justify-center gap-2 px-6 rounded-xl bg-toyota-red text-white text-sm font-bold shadow-lg hover:bg-toyota-hover active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
            </button>

            <p className="text-[11px] text-gray-400 text-center">
              Cam kết bảo mật thông tin 100%. Không gọi làm phiền ngoài giờ làm việc.
            </p>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-black text-charcoal-heading">
              Đăng Ký Thành Công!
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
              Cảm ơn quý khách <strong className="text-charcoal">{formData.name || "quý khách"}</strong>. Chuyên viên tư vấn Toyota Biên Hoà sẽ liên hệ qua số điện thoại <strong className="text-toyota-red">{formData.phone}</strong> trong ít phút!
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                type="button"
                className="px-6 py-2.5 rounded-xl bg-charcoal text-white text-xs font-bold hover:bg-zinc-800 transition-colors"
              >
                Đóng thông báo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

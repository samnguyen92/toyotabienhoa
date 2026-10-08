"use client";

import React, { useState, useId } from "react";
import { Calculator, ShieldCheck, PhoneCall } from "lucide-react";
import { formatVND } from "@/data/mockCars";

interface InstallmentCalculatorProps {
  carPrice: number;
  carTitle?: string;
}

export function InstallmentCalculator({ carPrice, carTitle }: InstallmentCalculatorProps) {
  const downPaymentSliderId = useId();
  const loanTermSelectId = useId();
  const interestRateInputId = useId();

  // Down payment percentage (default 20% as per TFS Toyota)
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  // Loan term in months (default 60 months = 5 years)
  const [loanTermMonths, setLoanTermMonths] = useState<number>(60);
  // Interest rate per year (default 7.99% per year)
  const [interestRateYear, setInterestRateYear] = useState<number>(7.99);

  // Calculations
  const downPaymentAmount = Math.round((carPrice * downPaymentPercent) / 100);
  const loanAmount = carPrice - downPaymentAmount;

  // Monthly principal (gốc hàng tháng)
  const monthlyPrincipal = loanTermMonths > 0 ? Math.round(loanAmount / loanTermMonths) : 0;

  // Monthly interest for first month (lãi tháng đầu theo dư nợ giảm dần)
  const monthlyInterestFirst = Math.round((loanAmount * (interestRateYear / 100)) / 12);

  // Total monthly payment for first month (gốc + lãi tháng đầu)
  const totalMonthlyFirst = monthlyPrincipal + monthlyInterestFirst;

  return (
    <div id="bang-tinh-tra-gop" className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
        <div className="p-3 rounded-xl bg-toyota-red/10 text-toyota-red">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-black text-charcoal-heading">
            Dự Toán Trả Góp Toyota Financial Services (TFS)
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Ước tính số tiền trả trước và chi phí gốc + lãi hàng tháng với lãi suất ưu đãi đại lý
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left: Input controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Giá xe (Cố định) */}
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Giá niêm yết xe
            </span>
            <span className="text-base sm:text-lg font-extrabold text-charcoal-heading">
              {formatVND(carPrice)}
            </span>
          </div>

          {/* 2. Tỷ lệ trả trước (Slider & Quick Buttons) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-semibold">
              <label htmlFor={downPaymentSliderId} className="text-gray-700">
                Tỷ lệ trả trước: <strong className="text-toyota-red text-sm">{downPaymentPercent}%</strong>
              </label>
              <span className="text-gray-500 font-bold">
                = {formatVND(downPaymentAmount)}
              </span>
            </div>

            <input
              id={downPaymentSliderId}
              type="range"
              min="15"
              max="80"
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-toyota-red"
            />

            <div className="flex flex-wrap gap-2 pt-1">
              {[20, 30, 40, 50, 70].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => setDownPaymentPercent(pct)}
                  className={`px-2.5 py-1 text-xs rounded-md font-semibold transition-colors ${
                    downPaymentPercent === pct
                      ? "bg-toyota-red text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* 3. Thời hạn vay (Select) */}
          <div className="space-y-2">
            <label htmlFor={loanTermSelectId} className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              Thời gian vay vốn
            </label>
            <select
              id={loanTermSelectId}
              value={loanTermMonths}
              onChange={(e) => setLoanTermMonths(Number(e.target.value))}
              className="w-full h-11 px-3 text-sm font-semibold bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-toyota-red"
            >
              <option value={12}>12 tháng (1 năm)</option>
              <option value={24}>24 tháng (2 năm)</option>
              <option value={36}>36 tháng (3 năm)</option>
              <option value={48}>48 tháng (4 năm)</option>
              <option value={60}>60 tháng (5 năm) - Đề xuất</option>
              <option value={72}>72 tháng (6 năm)</option>
              <option value={84}>84 tháng (7 năm) - Tối đa</option>
            </select>
          </div>

          {/* 4. Lãi suất (%/năm) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-gray-700 uppercase tracking-wider">
              <label htmlFor={interestRateInputId}>Lãi suất năm (%/năm)</label>
              <span className="text-[11px] text-emerald-600 font-semibold">Gói ưu đãi Toyota TFS ~7.99%</span>
            </div>
            <div className="relative">
              <input
                id={interestRateInputId}
                type="number"
                step="0.1"
                min="0"
                max="25"
                value={interestRateYear}
                onChange={(e) => setInterestRateYear(Number(e.target.value))}
                className="w-full h-11 pl-3 pr-10 text-sm font-bold bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-toyota-red"
              />
              <span className="absolute right-3 top-3 text-sm font-bold text-gray-400">%</span>
            </div>
          </div>
        </div>

        {/* Right: Estimated Output Result Box */}
        <div className="lg:col-span-5 bg-gradient-to-br from-charcoal to-zinc-900 rounded-2xl p-6 text-white flex flex-col justify-between shadow-xl">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-gray-200 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Kết quả ước tính
            </span>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-gray-400 block font-medium">
                Gốc + Lãi trả tháng đầu ước tính
              </span>
              <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                {formatVND(totalMonthlyFirst)}
                <span className="text-xs text-gray-300 font-normal"> /tháng</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-1">
                *Theo phương thức dư nợ giảm dần (tiền lãi sẽ giảm dần qua các tháng tiếp theo).
              </p>
            </div>

            <div className="space-y-3 py-4 border-y border-zinc-700/80 text-xs">
              <div className="flex justify-between text-gray-300">
                <span>Số tiền trả trước ({downPaymentPercent}%):</span>
                <span className="font-bold text-white">{formatVND(downPaymentAmount)}</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <span>Số tiền vay ngân hàng:</span>
                <span className="font-bold text-white">{formatVND(loanAmount)}</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <span>Tiền gốc trả hàng tháng:</span>
                <span className="font-bold text-white">{formatVND(monthlyPrincipal)}</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <span>Tiền lãi tháng đầu:</span>
                <span className="font-bold text-white">{formatVND(monthlyInterestFirst)}</span>
              </div>
            </div>
          </div>

            <div className="pt-4 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const text = `DỰ TOÁN TRẢ GÓP TOYOTA BIÊN HOÀ:
Xe: ${carTitle || "Xe Toyota Sure"}
Giá niêm yết: ${formatVND(carPrice)}
Trả trước (${downPaymentPercent}%): ${formatVND(downPaymentAmount)}
Khoản vay: ${formatVND(loanAmount)} (${loanTermMonths} tháng)
Lãi suất: ${interestRateYear}%/năm
Ước tính tháng đầu: ${formatVND(totalMonthlyFirst)}/tháng (gốc ${formatVND(monthlyPrincipal)} + lãi ${formatVND(monthlyInterestFirst)})`;
                    navigator.clipboard.writeText(text);
                    alert("Đã sao chép bảng tính dự toán vào clipboard!");
                  }}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs rounded-xl border border-zinc-700 transition-colors"
                >
                  <span>📋 Sao chép dự toán</span>
                </button>

                <a
                  href={`https://zalo.me/0938820355`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#0068FF] hover:bg-blue-600 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  <span>💬 Gửi qua Zalo</span>
                </a>
              </div>

              <a
                href="tel:0938820355"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-toyota-red text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-toyota-hover active:scale-[0.98] transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Gọi Tư Vấn Gói Vay: 0938 820 355</span>
              </a>
              <p className="text-[10px] text-gray-400 text-center mt-1">
                Chuyên viên tín dụng Toyota Biên Hoà sẽ hỗ trợ hồ sơ miễn phí trong 15 phút.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

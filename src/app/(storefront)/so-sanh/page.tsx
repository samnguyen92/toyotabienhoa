"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  Trash2,
  Plus,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Phone,
  RotateCcw,
} from "lucide-react";
import { useCompareStore } from "@/store/useCompareStore";
import { MOCK_CARS, formatVND, formatMileage, getCarImageUrl } from "@/data/mockCars";
import { Car } from "@/types/car";

export default function ComparePage() {
  const [mounted, setMounted] = useState(false);
  const { selectedCarIds, removeCar, clearCompare, addCar } = useCompareStore();
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center bg-gray-50">
        <div className="text-gray-400 text-sm font-semibold animate-pulse">
          Đang tải bảng so sánh xe...
        </div>
      </div>
    );
  }

  // Get selected cars from mock data
  const comparedCars: Car[] = selectedCarIds
    .map((id) => MOCK_CARS.find((car) => car._id === id))
    .filter(Boolean) as Car[];

  // Cars that are available to be added
  const availableToAdd = MOCK_CARS.filter(
    (car) => !selectedCarIds.includes(car._id)
  );

  return (
    <div className="bg-gray-50/50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb & Header */}
        <div>
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <Link href="/" className="hover:text-toyota-red">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-charcoal font-semibold">So sánh xe</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-charcoal-heading flex items-center gap-3">
                <Scale className="w-7 h-7 text-toyota-red" />
                So Sánh Chi Tiết Thông Số Xe
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Đặt lên bàn cân các dòng xe đã qua sử dụng để chọn ra chiếc xe tối ưu nhất cho bạn (Tối đa 3 xe).
              </p>
            </div>

            {comparedCars.length > 0 && (
              <button
                onClick={() => clearCompare()}
                type="button"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-gray-600 bg-white border border-gray-200 hover:text-toyota-red hover:border-toyota-red transition-all self-start sm:self-auto"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xoá tất cả so sánh</span>
              </button>
            )}
          </div>
        </div>

        {/* Comparison Content */}
        {comparedCars.length === 0 ? (
          /* Empty comparison state */
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200/80 shadow-sm max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-red-50 text-toyota-red flex items-center justify-center mx-auto">
              <Scale className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-charcoal-heading">
              Chưa có xe nào trong danh sách so sánh
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
              Bạn có thể duyệt qua danh sách xe đã qua sử dụng và bấm vào biểu tượng cán cân để thêm tối đa 3 xe vào bảng so sánh này.
            </p>
            <div className="pt-2">
              <Link
                href="/xe-cu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-toyota-red text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-toyota-hover shadow transition-all"
              >
                <span>Xem danh sách xe để so sánh</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Comparison Table */
          <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/60">
                    <th className="p-4 sm:p-6 w-48 min-w-[160px] text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Thông số kỹ thuật
                    </th>
                    {comparedCars.map((car) => (
                      <th
                        key={car._id}
                        className="p-4 sm:p-6 min-w-[260px] w-1/3 align-top border-l border-gray-100"
                      >
                        <div className="space-y-3">
                          {/* Image preview */}
                          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-gray-100">
                            <Image
                              src={getCarImageUrl(car.images?.[0])}
                              alt={car.title}
                              fill
                              className="object-cover"
                              sizes="300px"
                            />
                            <button
                              onClick={() => removeCar(car._id)}
                              type="button"
                              className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-toyota-red transition-colors"
                              title="Bỏ xe này"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Title & Price */}
                          <div>
                            <Link
                              href={`/xe-cu/${car.slug}`}
                              className="font-bold text-sm sm:text-base text-charcoal-heading hover:text-toyota-red transition-colors line-clamp-1"
                            >
                              {car.title}
                            </Link>
                            <div className="text-lg font-black text-toyota-red mt-1">
                              {formatVND(car.price)}
                            </div>
                          </div>

                          {/* CTAs */}
                          <div className="flex gap-2">
                            <Link
                              href={`/xe-cu/${car.slug}`}
                              className="flex-1 py-2 px-3 text-center text-xs font-bold bg-zinc-900 text-white rounded-lg hover:bg-toyota-red transition-colors"
                            >
                              Xem chi tiết
                            </Link>
                            <a
                              href="tel:0918565656"
                              className="p-2 rounded-lg bg-toyota-red/10 text-toyota-red hover:bg-toyota-red hover:text-white transition-colors"
                              title="Gọi tư vấn"
                            >
                              <Phone className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </th>
                    ))}

                    {/* Slot for adding more cars if < 3 */}
                    {comparedCars.length < 3 && (
                      <th className="p-4 sm:p-6 min-w-[240px] align-middle text-center border-l border-dashed border-gray-200 bg-gray-50/30">
                        <div className="space-y-3">
                          <button
                            onClick={() => setShowAddModal(true)}
                            type="button"
                            className="w-14 h-14 rounded-full bg-toyota-light text-toyota-red hover:bg-toyota-red hover:text-white transition-all flex items-center justify-center mx-auto shadow-sm"
                          >
                            <Plus className="w-6 h-6" />
                          </button>
                          <div className="text-xs font-bold text-gray-600">
                            Thêm xe so sánh ({comparedCars.length}/3)
                          </div>
                          <button
                            onClick={() => setShowAddModal(true)}
                            type="button"
                            className="text-xs text-toyota-red font-semibold hover:underline"
                          >
                            + Chọn từ kho xe
                          </button>
                        </div>
                      </th>
                    )}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                  {/* Trạng thái xe */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Tình trạng xe
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            car.status === "Đang bán"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {car.status}
                        </span>
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* Năm sản xuất */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Năm sản xuất
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100 font-semibold">
                        {car.year}
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* ODO */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Số KM đã đi (ODO)
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100 font-semibold text-toyota-red">
                        {formatMileage(car.mileage)}
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* Hộp số */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Hộp số
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100">
                        {car.transmission}
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* Nhiên liệu */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Nhiên liệu
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100 font-medium">
                        {car.fuel_type}
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* Kiểu dáng */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Kiểu dáng
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100">
                        {car.body_style}
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* Động cơ */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Động cơ
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100">
                        {car.engine || "Tiêu chuẩn Toyota"}
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* Xuất xứ */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Xuất xứ
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100">
                        {car.origin || "Chính hãng"}
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* Màu ngoại thất */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Màu ngoại thất
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100">
                        {car.color || "Nguyên bản"}
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* Số chỗ ngồi */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Số chỗ ngồi
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100">
                        {car.seats ? `${car.seats} chỗ` : "5 chỗ"}
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* 176 Hạng mục Toyota Sure */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Kiểm định 176 mục
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100">
                        <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                          <CheckCircle2 className="w-4 h-4" />
                          Đạt chứng nhận
                        </span>
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>

                  {/* Bảo hành */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-500 bg-gray-50/40">
                      Chế độ bảo hành
                    </td>
                    {comparedCars.map((car) => (
                      <td key={car._id} className="p-4 sm:p-5 border-l border-gray-100 font-medium">
                        {car.warranty || "Toyota Sure 1 năm"}
                      </td>
                    ))}
                    {comparedCars.length < 3 && <td className="border-l border-gray-100" />}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal chọn xe thêm vào so sánh */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <h3 className="font-bold text-base text-charcoal-heading">
                Chọn xe để thêm vào bảng so sánh
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-charcoal text-sm font-bold"
              >
                Đóng ✕
              </button>
            </div>

            <div className="overflow-y-auto space-y-2 flex-1 pr-1">
              {availableToAdd.length === 0 ? (
                <div className="text-center py-6 text-gray-400 text-xs">
                  Không còn xe nào khác để thêm.
                </div>
              ) : (
                availableToAdd.map((car) => (
                  <div
                    key={car._id}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-200/80 hover:border-toyota-red/50 hover:bg-gray-50/50 transition-all gap-3"
                  >
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={getCarImageUrl(car.images?.[0])}
                        alt={car.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-charcoal line-clamp-1">{car.title}</h4>
                      <p className="text-[11px] text-toyota-red font-bold">{formatVND(car.price)}</p>
                    </div>
                    <button
                      onClick={() => {
                        addCar(car._id);
                        setShowAddModal(false);
                      }}
                      className="px-3 py-1.5 text-xs font-bold bg-toyota-red text-white rounded-lg hover:bg-toyota-hover flex-shrink-0"
                    >
                      Thêm
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

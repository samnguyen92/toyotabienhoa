import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Gauge,
  Cog,
  Fuel,
  Users,
  Award,
  Phone,
  MessageSquare,
  FileCheck2,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { getCarBySlug, getAllCars } from "@/services/carService";
import { formatVND, formatMileage, getCarImageUrl } from "@/data/mockCars";
import { CarGallery } from "@/components/car/CarGallery";
import { InstallmentCalculator } from "@/components/car/InstallmentCalculator";
import { DetailCompareButton } from "@/components/car/DetailCompareButton";
import { CarCard } from "@/components/car/CarCard";

interface CarDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CarDetailPageProps) {
  const car = await getCarBySlug(params.slug);
  if (!car) {
    return { title: "Không tìm thấy xe | Toyota Biên Hoà" };
  }
  const imgUrl = getCarImageUrl(car.images?.[0]);
  return {
    title: `${car.title} | Xe Cũ Chính Hãng Toyota Biên Hoà`,
    description: `Mua bán ${car.title} tại Toyota Biên Hoà. Giá bán ${formatVND(
      car.price
    )}, ODO ${formatMileage(car.mileage)}. Đạt chuẩn 176 hạng mục kiểm tra Toyota Sure.`,
    openGraph: {
      title: `${car.title} - ${formatVND(car.price)} | Toyota Biên Hoà`,
      description: `Xe ${car.year}, ODO ${formatMileage(car.mileage)}, hộp số ${car.transmission}, bảo hành chính hãng Toyota Sure.`,
      images: [{ url: imgUrl, width: 1200, height: 630, alt: car.title }],
    },
  };
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    notFound();
  }

  const allCars = await getAllCars();
  const relatedCars = allCars
    .filter((c) => c._id !== car._id && (c.model === car.model || c.body_style === car.body_style))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: car.title,
    description: car.description,
    image: getCarImageUrl(car.images?.[0]),
    brand: {
      "@type": "Brand",
      name: car.brand || "Toyota",
    },
    model: car.model,
    vehicleModelDate: String(car.year),
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: car.mileage,
      unitCode: "KMT",
    },
    vehicleTransmission: car.transmission,
    fuelType: car.fuel_type,
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: car.price,
      itemCondition: "https://schema.org/UsedCondition",
      availability:
        car.status === "Đang bán" ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
      seller: {
        "@type": "AutoDealer",
        name: "Toyota Biên Hoà",
        telephone: "0938820355",
        address: "96 Ấp Tây, Xã Hòa Hưng, Huyện Cái Bè, Tiền Giang & TP. Biên Hoà, Đồng Nai",
      },
    },
  };

  const specRows = [
    { label: "Năm sản xuất", value: car.year },
    { label: "Số Kilomet (ODO)", value: formatMileage(car.mileage) },
    { label: "Hộp số", value: car.transmission },
    { label: "Nhiên liệu", value: car.fuel_type },
    { label: "Kiểu dáng", value: car.body_style },
    { label: "Xuất xứ", value: car.origin || "Chính hãng Toyota" },
    { label: "Màu ngoại thất", value: car.color || "Nguyên bản" },
    { label: "Động cơ", value: car.engine || "Tiêu chuẩn Toyota" },
    { label: "Số chỗ ngồi", value: car.seats ? `${car.seats} chỗ` : "5 chỗ" },
    { label: "Đăng ký lần đầu", value: car.registrationDate || "Hợp lệ" },
    { label: "Bảo hành", value: car.warranty || "Toyota Sure 1 năm / 20.000 km" },
    { label: "Tình trạng pháp lý", value: "Sổ gốc sẵn sàng, công chứng ngay" },
  ];

  return (
    <div className="bg-gray-50/50 min-h-screen py-8">
      {/* Schema.org Structured Data cho Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-toyota-red">
            Trang chủ
          </Link>
          <span>/</span>
          <Link href="/xe-cu" className="hover:text-toyota-red">
            Xe đã qua sử dụng
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">{car.title}</span>
        </nav>

        {/* Main Grid: Detail Content & Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Gallery, Specs, Commitments, Calculator */}
          <div className="lg:col-span-8 space-y-8">
            {/* Title Header (Mobile & Desktop) */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-toyota-light text-toyota-red">
                  Toyota Sure
                </span>
                <span className="text-xs text-gray-400">• Biển số sạch, không tai nạn thủy kích</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-charcoal-heading">
                {car.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Mã tin: {car._id} • Cập nhật hôm nay tại Showroom Toyota Biên Hoà
              </p>
            </div>

            {/* 1. Photo Gallery Component */}
            <CarGallery
              images={car.images}
              title={car.title}
              status={car.status}
              certified176={car.certified176}
            />

            {/* 2. Key Specs Quick Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white rounded-2xl border border-gray-200/80 shadow-sm text-center">
              <div className="p-2">
                <span className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-1">
                  <Gauge className="w-4 h-4 text-toyota-red" />
                  ODO
                </span>
                <span className="font-bold text-sm sm:text-base text-charcoal-heading">
                  {formatMileage(car.mileage)}
                </span>
              </div>

              <div className="p-2 border-l border-gray-100">
                <span className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-1">
                  <Calendar className="w-4 h-4 text-toyota-red" />
                  Năm SX
                </span>
                <span className="font-bold text-sm sm:text-base text-charcoal-heading">{car.year}</span>
              </div>

              <div className="p-2 border-l border-gray-100">
                <span className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-1">
                  <Cog className="w-4 h-4 text-toyota-red" />
                  Hộp số
                </span>
                <span className="font-bold text-sm sm:text-base text-charcoal-heading">
                  {car.transmission}
                </span>
              </div>

              <div className="p-2 border-l border-gray-100">
                <span className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-1">
                  <Fuel className="w-4 h-4 text-toyota-red" />
                  Nhiên liệu
                </span>
                <span className="font-bold text-sm sm:text-base text-charcoal-heading">
                  {car.fuel_type}
                </span>
              </div>
            </div>

            {/* 3. Cam kết kiểm định 176 hạng mục Toyota Sure */}
            <div className="bg-gradient-to-r from-red-50/70 via-white to-red-50/40 rounded-2xl p-6 border border-toyota-subtle space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-toyota-red text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-charcoal-heading">
                    Chứng Nhận Kiểm Định 176 Hạng Mục Kỹ Thuật
                  </h3>
                  <p className="text-xs text-gray-500">
                    Xe đã được kiểm tra bởi chuyên gia kỹ thuật Toyota Biên Hoà
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-charcoal-body">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Không đâm đụng ảnh hưởng kết cấu sắt-xi khung gầm</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Không bị ngập nước hay thủy kích động cơ</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Động cơ & Hộp số nguyên bản, keo chỉ nguyên bản 100%</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Hồ sơ pháp lý hợp lệ, đủ điều kiện sang tên ngay</span>
                </div>
              </div>
            </div>

            {/* 4. Mô tả chi tiết xe */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-charcoal-heading border-l-4 border-toyota-red pl-3">
                Mô Tả Tình Trạng & Lịch Sử Xe
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {car.description}
              </p>
            </div>

            {/* 5. Bảng thông số kỹ thuật chi tiết */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-charcoal-heading border-l-4 border-toyota-red pl-3">
                Thông Số Kỹ Thuật Chi Tiết
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-2">
                {specRows.map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-gray-100 text-xs sm:text-sm"
                  >
                    <span className="text-gray-500">{spec.label}:</span>
                    <span className="font-semibold text-charcoal-heading">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Bảng tính trả góp Installment Calculator */}
            <InstallmentCalculator carPrice={car.price} carTitle={car.title} />
          </div>

          {/* Right Column: Sticky Pricing & Action Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-lg space-y-6">
              {/* Price display */}
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">
                  Giá bán niêm yết
                </span>
                <div className="text-2xl sm:text-3xl font-black text-toyota-red mt-1">
                  {formatVND(car.price)}
                </div>
                <div className="text-xs text-emerald-600 font-semibold mt-1">
                  ✓ Hỗ trợ vay trả góp 80% chỉ từ {formatVND(Math.round(car.price * 0.2))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2 border-t border-gray-100">
                <a
                  href="tel:0938820355"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-toyota-red text-white text-sm font-bold rounded-xl shadow-md hover:bg-toyota-hover active:scale-[0.98] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hotline: 0938 820 355</span>
                </a>

                <a
                  href="#bang-tinh-tra-gop"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 text-charcoal text-sm font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-toyota-red" />
                  <span>Xem dự toán trả góp</span>
                </a>

                {/* Compare Toggle Button */}
                <DetailCompareButton carId={car._id} />
              </div>

              {/* Showroom & Dealer Info */}
              <div className="p-4 bg-gray-50 rounded-xl space-y-3 text-xs text-gray-600 border border-gray-100">
                <div className="font-bold text-charcoal text-xs uppercase tracking-wider">
                  Địa điểm xem xe thực tế:
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-toyota-red flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Toyota Biên Hoà:</strong> 96 Ấp Tây, Xã Hòa Hưng, Huyện Cái Bè, Tiền Giang & TP. Biên Hoà, Đồng Nai
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-toyota-red flex-shrink-0" />
                  <span>Giờ làm việc: 07:30 - 17:30 hằng ngày</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-charcoal to-zinc-900 rounded-2xl p-6 text-white space-y-3 shadow-md">
              <span className="text-[11px] font-bold text-toyota-red uppercase tracking-wider">
                Tư vấn mua xe trả góp
              </span>
              <h4 className="font-bold text-base">Cần Xem Xe & Lái Thử Tại Nhà?</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Toyota Biên Hoà hỗ trợ mang xe tới tận nhà khách hàng tại Biên Hoà, Bình Dương, Long Thành để lái thử và trải nghiệm.
              </p>
              <a
                href="tel:0938820355"
                className="inline-flex items-center gap-2 text-xs font-bold text-white underline hover:text-toyota-red transition-colors"
              >
                Đặt hẹn lái thử ngay →
              </a>
            </div>
          </div>
        </div>

        {/* Related Cars Grid */}
        {relatedCars.length > 0 && (
          <div className="pt-12 border-t border-gray-200 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl sm:text-2xl font-black text-charcoal-heading">
                Xe Cùng Phân Khúc Đang Có Tại Showroom
              </h3>
              <Link
                href="/xe-cu"
                className="text-xs sm:text-sm font-bold text-toyota-red hover:underline"
              >
                Xem tất cả kho xe →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCars.map((relatedCar) => (
                <CarCard key={relatedCar._id} car={relatedCar} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Valuation / Trade-in Banner */}
      <section className="mt-16 relative overflow-hidden bg-[#0A0D14] text-white py-14 sm:py-18">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none">
          <Image
            src="/images/cta-camry.jpg"
            alt="Toyota Camry Headlight"
            fill
            className="object-cover object-center lg:object-right opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/85 to-transparent lg:from-[#0A0D14] lg:via-[#0A0D14]/50 lg:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-toyota-red uppercase">
              <span className="w-5 h-0.5 bg-toyota-red inline-block" />
              <span>TOYOTA BIÊN HÒA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bạn Có Nhu Cầu Định Giá Hoặc Bán Lại Chiếc Xe Của Mình?
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Toyota Biên Hòa hỗ trợ định giá xe nhanh chóng, minh bạch và chuyên nghiệp. Liên hệ ngay để được tư vấn và hỗ trợ tốt nhất.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
              <a
                href="tel:0938820355"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-toyota-red hover:bg-toyota-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Hotline: 0938 820 355</span>
              </a>

              <Link
                href="/xe-cu#dinh-gia"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-700 bg-black/40 hover:bg-white/10 text-gray-200 hover:text-white text-xs sm:text-sm font-semibold transition-all group"
              >
                <MessageSquare className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span>Được tư vấn miễn phí</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

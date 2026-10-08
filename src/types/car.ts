export type Transmission = "Số tự động" | "Tự động" | "Số sàn" | "CVT";
export type FuelType = "Xăng" | "Dầu" | "Hybrid";
export type BodyStyle = "Sedan" | "SUV" | "Hatchback" | "MPV";
export type CarStatus = "Đang bán" | "Đã nhận cọc" | "Đã bán";

export interface SanityImageItem {
  _key?: string;
  _type?: "image";
  asset?: {
    _ref?: string;
    _type?: "reference";
    url?: string;
  };
  url?: string;
  alt?: string;
}

export interface Car {
  _id: string;
  title: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: number; // Raw number in VND (e.g. 850000000)
  mileage: number; // in km
  transmission: Transmission;
  fuel_type: FuelType;
  body_style: BodyStyle;
  status: CarStatus;
  images: Array<SanityImageItem | string>;
  description: string;
  // Extended helpful specs for Toyota showroom
  origin?: string; // "Lắp ráp trong nước" | "Nhập khẩu Thái Lan" | "Nhập khẩu Nhật Bản"
  color?: string; // "Trắng ngọc trai", "Đen", "Bạc", v.v.
  engine?: string; // "2.0L Dynamic Force", "2.4L Diesel Turbo"
  seats?: number; // 5 hoặc 7 chỗ
  registrationDate?: string; // "Tháng 06/2022"
  warranty?: string; // "Toyota Sure 1 năm / 20.000 km"
  certified176?: boolean; // Đạt chuẩn 176 hạng mục
}

export interface CarFilterParams {
  brand?: string;
  model?: string;
  minPrice?: string;
  maxPrice?: string;
  transmission?: string;
  fuel_type?: string;
  body_style?: string;
  year?: string;
  status?: string;
  sort?: string;
}

import { Car } from "@/types/car";

export const MOCK_CARS: Car[] = [
  {
    _id: "car-camry-2022-25q",
    title: "Toyota Camry 2.5Q 2022",
    slug: "toyota-camry-2-5q-2022",
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    price: 920000000, // 920.000.000 VNĐ
    mileage: 45000,
    transmission: "Tự động",
    fuel_type: "Xăng",
    body_style: "Sedan",
    status: "Đang bán",
    origin: "Nhập khẩu Thái Lan",
    color: "Đen ánh kim",
    engine: "2.5L Dynamic Force",
    seats: 5,
    registrationDate: "10/2022",
    warranty: "Toyota Sure 1 năm / 20.000 km",
    certified176: true,
    images: [
      "/images/camry-2022.jpg",
      "/images/cta-camry.jpg",
    ],
    description:
      "Xe một chủ từ đầu, biển số Đồng Nai đẹp. Bảo dưỡng định kỳ 100% tại chính hãng Toyota Biên Hoà, sổ bảo dưỡng đầy đủ. Sơn zin 98%, nội thất da cao cấp còn mới nguyên. Trang bị gói công nghệ an toàn Toyota Safety Sense 2.0.",
  },
  {
    _id: "car-fortuner-24g-2021",
    title: "Toyota Fortuner 2.4G 2021",
    slug: "toyota-fortuner-2-4g-2021",
    brand: "Toyota",
    model: "Fortuner",
    year: 2021,
    price: 1043000000, // 1.043.000.000 VNĐ
    mileage: 62000,
    transmission: "Tự động",
    fuel_type: "Dầu",
    body_style: "SUV",
    status: "Đang bán",
    origin: "Lắp ráp trong nước",
    color: "Trắng ngọc trai",
    engine: "2.4L Diesel Turbo",
    seats: 7,
    registrationDate: "05/2021",
    warranty: "Toyota Sure 1 năm / 20.000 km",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Ngoại hình thể thao hầm hố với đèn LED full projector kép, mâm 18 inch phay xước. Nội thất phối 2 tông màu cá tính. Xe cam kết không cấn đụng, máy móc êm ru, tiết kiệm nhiên liệu.",
  },
  {
    _id: "car-corolla-cross-18v-2023",
    title: "Toyota Corolla Cross 1.8V 2023",
    slug: "toyota-corolla-cross-1-8v-2023",
    brand: "Toyota",
    model: "Corolla Cross",
    year: 2023,
    price: 765000000, // 765.000.000 VNĐ
    mileage: 28000,
    transmission: "Tự động",
    fuel_type: "Xăng",
    body_style: "Crossover",
    status: "Đang bán",
    origin: "Nhập khẩu Thái Lan",
    color: "Xanh xám đá",
    engine: "1.8L Dual VVT-i",
    seats: 5,
    registrationDate: "02/2023",
    warranty: "Bảo hành chính hãng đến 2026",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Xe siêu lướt đời 2023 nhập khẩu nguyên chiếc từ Thái Lan. Đầy đủ gói Toyota Safety Sense thế hệ mới: Cảnh báo tiền va chạm PCS, Ga tự động thích ứng DRCC, Giữ làn đường LTA.",
  },
  {
    _id: "car-veloz-cross-15v-2022",
    title: "Toyota Veloz Cross 1.5V 2022",
    slug: "toyota-veloz-cross-1-5v-2022",
    brand: "Toyota",
    model: "Veloz Cross",
    year: 2022,
    price: 615000000, // 615.000.000 VNĐ
    mileage: 37000,
    transmission: "Tự động",
    fuel_type: "Xăng",
    body_style: "MPV",
    status: "Đang bán",
    origin: "Lắp ráp trong nước",
    color: "Trắng ngọc trai",
    engine: "1.5L DOHC Dual VVT-i",
    seats: 7,
    registrationDate: "03/2022",
    warranty: "Toyota Sure 1 năm / 20.000 km",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Xe 7 chỗ rộng rãi gầm cao phong cách Crossover, phanh tay điện tử kèm Auto Hold, màn hình 9 inch, sạc không dây. Phù hợp tuyệt vời cho gia đình.",
  },
  {
    _id: "car-wigo-12g-2022",
    title: "Toyota Wigo 1.2G 2022",
    slug: "toyota-wigo-1-2g-2022",
    brand: "Toyota",
    model: "Wigo",
    year: 2022,
    price: 486000000, // 486.000.000 VNĐ
    mileage: 52000,
    transmission: "Tự động",
    fuel_type: "Xăng",
    body_style: "Hatchback",
    status: "Đang bán",
    origin: "Nhập khẩu Indonesia",
    color: "Xanh rêu kim loại",
    engine: "1.2L Dual VVT-i",
    seats: 5,
    registrationDate: "06/2022",
    warranty: "Toyota Sure 1 năm / 20.000 km",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Hatchback đô thị nhỏ gọn, cực kỳ tiết kiệm xăng, bán kính quay vòng nhỏ giúp luồn lách phố xá Biên Hoà cực linh hoạt. Máy móc bảo dưỡng định kỳ hãng.",
  },
  {
    _id: "car-yaris-cross-15v-2023",
    title: "Toyota Yaris Cross 1.5V 2023",
    slug: "toyota-yaris-cross-1-5v-2023",
    brand: "Toyota",
    model: "Yaris Cross",
    year: 2023,
    price: 635000000, // 635.000.000 VNĐ
    mileage: 18000,
    transmission: "Tự động",
    fuel_type: "Xăng",
    body_style: "Hatchback",
    status: "Đang bán",
    origin: "Nhập khẩu nguyên chiếc",
    color: "Xanh lam ngọc",
    engine: "1.5L 2NR-VE",
    seats: 5,
    registrationDate: "09/2023",
    warranty: "Bảo hành chính hãng đến 2026",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Dòng SUV cỡ B trẻ trung năng động, mâm 18 inch thể thao, đèn LED hiện đại. Xe chạy lướt 18.000 km như mới xuất xưởng.",
  },
  {
    _id: "car-innova-20e-2020",
    title: "Toyota Innova 2.0E 2020",
    slug: "toyota-innova-2-0e-2020",
    brand: "Toyota",
    model: "Innova",
    year: 2020,
    price: 540000000, // 540.000.000 VNĐ
    mileage: 65000,
    transmission: "Số sàn",
    fuel_type: "Xăng",
    body_style: "MPV",
    status: "Đang bán",
    origin: "Lắp ráp trong nước",
    color: "Bạc",
    engine: "2.0L 1TR-FE Dual VVT-i",
    seats: 8,
    registrationDate: "11/2020",
    warranty: "Toyota Sure 6 tháng / 10.000 km",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Dòng xe MPV 8 chỗ huyền thoại độ bền vô địch. Khung gầm rời GOA vững chắc, dẫn động cầu sau leo dốc khỏe khoắn. Xe được kỹ thuật viên Toyota Biên Hoà kiểm định kỹ lưỡng, cam kết keo chỉ chuẩn, máy êm, gầm bệ chắc chắn.",
  },
  {
    _id: "car-raize-10-turbo-2023",
    title: "Toyota Raize 1.0 Turbo 2023",
    slug: "toyota-raize-1-0-turbo-2023",
    brand: "Toyota",
    model: "Raize",
    year: 2023,
    price: 508000000, // 508.000.000 VNĐ
    mileage: 14000,
    transmission: "CVT",
    fuel_type: "Xăng",
    body_style: "SUV",
    status: "Đang bán",
    origin: "Nhập khẩu Indonesia",
    color: "Xanh ngọc nóc đen",
    engine: "1.0L Turbo 1KR-VET",
    seats: 5,
    registrationDate: "06/2023",
    warranty: "Bảo hành chính hãng đến 2026",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Mẫu xe đô thị cỡ nhỏ gầm cao cực kỳ linh hoạt, thời trang với thiết kế 2 tông màu. Động cơ Turbo tăng tốc bốc, trang bị cảnh báo điểm mù BSM và cảnh báo phương tiện cắt ngang khi lùi RCTA.",
  },
  {
    _id: "car-hilux-24e-2021",
    title: "Toyota Hilux 2.4E 4x2 AT 2021",
    slug: "toyota-hilux-2-4e-4x2-at-2021",
    brand: "Toyota",
    model: "Hilux",
    year: 2021,
    price: 625000000, // 625.000.000 VNĐ
    mileage: 51000,
    transmission: "Số tự động",
    fuel_type: "Dầu",
    body_style: "SUV",
    status: "Đã bán",
    origin: "Nhập khẩu Thái Lan",
    color: "Trắng",
    engine: "2.4L Diesel 2GD-FTV",
    seats: 5,
    registrationDate: "01/2021",
    warranty: "Đã bàn giao khách hàng",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Vua bán tải nhập Thái bền bỉ vô song. Đã lắp sẵn nắp thùng cuộn cao cấp và lót thùng chính hãng. Đã hoàn tất thủ tục bàn giao xe.",
  },
];

// Helper format tiền tệ VNĐ chuẩn
export function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}

// Helper format số km ODO
export function formatMileage(km: number): string {
  return `${new Intl.NumberFormat("vi-VN").format(km)} km`;
}

// Helper lấy URL ảnh an toàn
export function getCarImageUrl(image: any): string {
  if (typeof image === "string") return image;
  if (image?.url) return image.url;
  if (image?.asset?.url) return image.asset.url;
  return "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80";
}

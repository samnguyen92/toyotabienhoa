import { Car } from "@/types/car";

export const MOCK_CARS: Car[] = [
  {
    _id: "car-camry-2022-20q",
    title: "Toyota Camry 2.0Q 2022",
    slug: "toyota-camry-2-0q-2022",
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    price: 920000000, // 920.000.000 VNĐ
    mileage: 28500,
    transmission: "Số tự động",
    fuel_type: "Xăng",
    body_style: "Sedan",
    status: "Đang bán",
    origin: "Nhập khẩu Thái Lan",
    color: "Trắng ngọc trai",
    engine: "2.0L Dynamic Force (170 mã lực)",
    seats: 5,
    registrationDate: "10/2022",
    warranty: "Toyota Sure 1 năm / 20.000 km",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Xe một chủ từ đầu, biển số Đồng Nai đẹp. Bảo dưỡng định kỳ 100% tại chính hãng Toyota Biên Hoà, sổ bảo dưỡng đầy đủ. Sơn zin 98%, nội thất da cao cấp còn mới nguyên. Trang bị gói công nghệ an toàn Toyota Safety Sense 2.0, màn hình giải trí 9 inch hỗ trợ Apple CarPlay, sạc không dây, cửa sổ trời.",
  },
  {
    _id: "car-fortuner-legender-2021",
    title: "Toyota Fortuner Legender 2.4AT 2021",
    slug: "toyota-fortuner-legender-2-4at-2021",
    brand: "Toyota",
    model: "Fortuner",
    year: 2021,
    price: 1045000000, // 1.045.000.000 VNĐ
    mileage: 42000,
    transmission: "Số tự động",
    fuel_type: "Dầu",
    body_style: "SUV",
    status: "Đang bán",
    origin: "Lắp ráp trong nước",
    color: "Đen ánh kim",
    engine: "2.4L Diesel Turbo 2GD-FTV",
    seats: 7,
    registrationDate: "05/2021",
    warranty: "Toyota Sure 1 năm / 20.000 km",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Phiên bản Legender cao cấp bậc nhất của dòng Fortuner. Ngoại hình thể thao hầm hố với đèn LED full projector kép, mâm 18 inch phay xước. Nội thất phối 2 tông màu đỏ-đen cá tính, dàn 11 loa JBL cực đã. Xe cam kết không cấn đụng, máy móc êm ru, tiết kiệm nhiên liệu chỉ ~7.2L dầu / 100km.",
  },
  {
    _id: "car-corolla-cross-18v-2023",
    title: "Toyota Corolla Cross 1.8V 2023",
    slug: "toyota-corolla-cross-1-8v-2023",
    brand: "Toyota",
    model: "Corolla Cross",
    year: 2023,
    price: 785000000, // 785.000.000 VNĐ
    mileage: 16800,
    transmission: "CVT",
    fuel_type: "Xăng",
    body_style: "SUV",
    status: "Đang bán",
    origin: "Nhập khẩu Thái Lan",
    color: "Xám bạc kim loại",
    engine: "1.8L 2ZR-FE Dual VVT-i",
    seats: 5,
    registrationDate: "02/2023",
    warranty: "Bảo hành chính hãng đến 2026",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Xe siêu lướt đời 2023 nhập khẩu nguyên chiếc từ Thái Lan. Đầy đủ gói Toyota Safety Sense thế hệ mới: Cảnh báo tiền va chạm PCS, Ga tự động thích ứng DRCC, Giữ làn đường LTA. Camera 360 toàn cảnh, cửa sổ trời toàn cảnh, cốp điện rảnh tay.",
  },
  {
    _id: "car-corolla-cross-hybrid-2022",
    title: "Toyota Corolla Cross 1.8HV Hybrid 2022",
    slug: "toyota-corolla-cross-1-8hv-hybrid-2022",
    brand: "Toyota",
    model: "Corolla Cross",
    year: 2022,
    price: 815000000, // 815.000.000 VNĐ
    mileage: 31000,
    transmission: "CVT",
    fuel_type: "Hybrid",
    body_style: "SUV",
    status: "Đã nhận cọc",
    origin: "Nhập khẩu Thái Lan",
    color: "Đỏ ánh kim",
    engine: "1.8L Xăng lai Điện Hybrid (4.2L/100km)",
    seats: 5,
    registrationDate: "08/2022",
    warranty: "Pin Hybrid bảo hành đến 2029",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Phiên bản Hybrid tiên tiến, khởi động và vận hành êm ái tuyệt đối, mức tiêu hao nhiên liệu chỉ 4.2 lít xăng / 100km đường hỗn hợp. Pin Hybrid được kiểm tra dung lượng đạt 100% qua máy chuyên dụng của Toyota Biên Hoà.",
  },
  {
    _id: "car-vios-15g-2022",
    title: "Toyota Vios 1.5G CVT 2022",
    slug: "toyota-vios-1-5g-cvt-2022",
    brand: "Toyota",
    model: "Vios",
    year: 2022,
    price: 495000000, // 495.000.000 VNĐ
    mileage: 36000,
    transmission: "CVT",
    fuel_type: "Xăng",
    body_style: "Sedan",
    status: "Đang bán",
    origin: "Lắp ráp trong nước",
    color: "Vàng cát",
    engine: "1.5L 2NR-FE (107 mã lực)",
    seats: 5,
    registrationDate: "04/2022",
    warranty: "Toyota Sure 1 năm / 20.000 km",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Vua phân khúc B-Sedan bản G cao cấp nhất. Trang bị đèn pha LED full, 7 túi khí an toàn cao cấp, cảm biến lùi quanh xe, điều hoà tự động mát sâu. Chi phí nuôi xe cực rẻ, phụ tùng sẵn có, động cơ bền bỉ danh tiếng của Toyota.",
  },
  {
    _id: "car-veloz-cross-top-2023",
    title: "Toyota Veloz Cross Top 2023",
    slug: "toyota-veloz-cross-top-2023",
    brand: "Toyota",
    model: "Veloz Cross",
    year: 2023,
    price: 638000000, // 638.000.000 VNĐ
    mileage: 15200,
    transmission: "CVT",
    fuel_type: "Xăng",
    body_style: "MPV",
    status: "Đang bán",
    origin: "Lắp ráp trong nước",
    color: "Trắng ngọc trai",
    engine: "1.5L DOHC Dual VVT-i",
    seats: 7,
    registrationDate: "03/2023",
    warranty: "Bảo hành chính hãng đến 2026",
    certified176: true,
    images: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Xe 7 chỗ rộng rãi gầm cao phong cách Crossover, phiên bản TOP cao cấp nhất có mâm 17 inch, phanh tay điện tử kèm Auto Hold, màn hình 9 inch, sạc không dây và gói an toàn chủ động TSS. Phù hợp tuyệt vời cho gia đình.",
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

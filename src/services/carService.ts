import { client } from "../../sanity/sanity.client";
import { Car, CarFilterParams } from "@/types/car";
import { MOCK_CARS } from "@/data/mockCars";

// Helper chuyển đổi document từ Sanity sang Car interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityCar(item: any): Car {
  return {
    _id: item._id,
    title: item.title,
    slug: item.slug?.current || item.slug || "",
    brand: item.brand || "Toyota",
    model: item.model,
    year: Number(item.year),
    price: Number(item.price),
    mileage: Number(item.mileage),
    transmission: item.transmission,
    fuel_type: item.fuel_type,
    body_style: item.body_style,
    status: item.status || "Đang bán",
    images: item.images || [],
    description: typeof item.description === "string" ? item.description : "Xe chính hãng Toyota Sure đã qua kiểm định.",
    origin: item.origin,
    engine: item.engine,
    seats: item.seats || 5,
    certified176: item.certified176 ?? true,
    warranty: item.warranty || "Toyota Sure 1 năm / 20.000 km",
    color: item.color,
    registrationDate: item.registrationDate,
  };
}

// Lấy danh sách tất cả xe (ưu tiên Sanity, fallback về Mock)
export async function getAllCars(params?: CarFilterParams): Promise<Car[]> {
  try {
    const query = `*[_type == "car"] | order(year desc, _createdAt desc) {
      _id,
      title,
      slug,
      brand,
      model,
      year,
      price,
      mileage,
      transmission,
      fuel_type,
      body_style,
      status,
      "images": images[].asset->url,
      description,
      origin,
      engine,
      seats,
      certified176,
      warranty,
      color,
      registrationDate
    }`;

    const sanityCars = await client.fetch(query, {}, { next: { revalidate: 60 } });

    if (Array.isArray(sanityCars) && sanityCars.length > 0) {
      const mapped = sanityCars.map(mapSanityCar);
      return filterAndSortCars(mapped, params);
    }
  } catch (err) {
    // Sanity cloud chưa có dữ liệu hoặc offline -> tự động fallback về Mock Data
    console.warn("[CarService] Sanity fetch fallback to mock:", err);
  }

  return filterAndSortCars(MOCK_CARS, params);
}

// Lấy chi tiết xe theo Slug
export async function getCarBySlug(slug: string): Promise<Car | null> {
  try {
    const query = `*[_type == "car" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      brand,
      model,
      year,
      price,
      mileage,
      transmission,
      fuel_type,
      body_style,
      status,
      "images": images[].asset->url,
      description,
      origin,
      engine,
      seats,
      certified176,
      warranty,
      color,
      registrationDate
    }`;

    const car = await client.fetch(query, { slug }, { next: { revalidate: 60 } });
    if (car) {
      return mapSanityCar(car);
    }
  } catch (err) {
    console.warn("[CarService] Sanity single car fallback to mock:", err);
  }

  const mock = MOCK_CARS.find((c) => c.slug === slug);
  return mock || null;
}

// Lấy xe nổi bật cho Trang chủ
export async function getFeaturedCars(limit = 6): Promise<Car[]> {
  const allCars = await getAllCars();
  return allCars.filter((c) => c.status !== "Đã bán").slice(0, limit);
}

// Helper lọc và sắp xếp dữ liệu xe
function filterAndSortCars(cars: Car[], params?: CarFilterParams): Car[] {
  if (!params) return cars;

  const {
    model,
    brand,
    minPrice,
    maxPrice,
    transmission,
    fuel_type,
    body_style,
    year,
    status,
    sort,
  } = params;

  const filtered = cars.filter((car) => {
    if (model && !car.model.toLowerCase().includes(model.toLowerCase())) return false;
    if (brand && car.brand.toLowerCase() !== brand.toLowerCase()) return false;
    if (minPrice && car.price < Number(minPrice)) return false;
    if (maxPrice && car.price > Number(maxPrice)) return false;
    if (transmission && car.transmission.toLowerCase() !== transmission.toLowerCase()) return false;
    if (fuel_type && car.fuel_type.toLowerCase() !== fuel_type.toLowerCase()) return false;
    if (body_style && car.body_style.toLowerCase() !== body_style.toLowerCase()) return false;
    if (year && car.year !== Number(year)) return false;
    if (status && car.status.toLowerCase() !== status.toLowerCase()) return false;
    return true;
  });

  return [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "year-desc") return b.year - a.year;
    if (sort === "mileage-asc") return a.mileage - b.mileage;
    if (a.status === "Đang bán" && b.status !== "Đang bán") return -1;
    if (a.status !== "Đang bán" && b.status === "Đang bán") return 1;
    return b.year - a.year;
  });
}

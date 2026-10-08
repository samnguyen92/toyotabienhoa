import { createClient } from "@sanity/client";
import { MOCK_CARS } from "../src/data/mockCars.js";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "vio8qowo";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

console.log(`🚀 Bắt đầu nạp dữ liệu mẫu lên Sanity Project: ${projectId} (${dataset})...`);

if (!token) {
  console.log(`
ℹ️ Lưu ý: Để ghi dữ liệu trực tiếp vào Sanity Cloud bằng script, bạn cần tạo 1 Token có quyền Write tại:
👉 https://manage.sanity.io/projects/${projectId}/api#tokens
Sau đó chạy lệnh:
SANITY_API_TOKEN="your_token" node scripts/seed-sanity.mjs
Hoặc thêm dữ liệu xe trực quan qua giao diện Studio tại: http://localhost:3000/studio
`);
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function seed() {
  for (const car of MOCK_CARS) {
    const doc = {
      _type: "car",
      _id: car._id,
      title: car.title,
      slug: { _type: "slug", current: car.slug },
      brand: car.brand,
      model: car.model,
      year: car.year,
      price: car.price,
      mileage: car.mileage,
      transmission: car.transmission,
      fuel_type: car.fuel_type,
      body_style: car.body_style,
      status: car.status,
      origin: car.origin,
      engine: car.engine,
      certified176: car.certified176 ?? true,
      warranty: car.warranty,
      color: car.color,
      description: car.description,
    };

    console.log(`Đang nạp xe: ${car.title}...`);
    await client.createOrReplace(doc);
  }
  console.log("✅ Đã nạp thành công toàn bộ kho xe vào Sanity!");
}

seed().catch(console.error);

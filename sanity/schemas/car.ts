import { defineField, defineType } from "sanity";

export const carSchema = defineType({
  name: "car",
  title: "Xe Đã Qua Sử Dụng (Toyota Sure)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề tin đăng",
      type: "string",
      description: "Ví dụ: Toyota Camry 2.0Q 2022 Siêu Lướt",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn tĩnh (Slug)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Hãng xe",
      type: "string",
      initialValue: "Toyota",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "model",
      title: "Dòng xe (Model)",
      type: "string",
      description: "Ví dụ: Camry, Fortuner, Corolla Cross, Vios, Veloz Cross, Innova",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Năm sản xuất",
      type: "number",
      validation: (Rule) => Rule.required().min(2010).max(2026),
    }),
    defineField({
      name: "price",
      title: "Giá bán niêm yết (VNĐ)",
      type: "number",
      description: "Nhập số nguyên dạng VNĐ, ví dụ: 850000000 cho 850 triệu",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "mileage",
      title: "Số Kilomet đã đi (ODO - km)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "transmission",
      title: "Hộp số",
      type: "string",
      options: {
        list: [
          { title: "Số tự động", value: "Số tự động" },
          { title: "Số sàn", value: "Số sàn" },
          { title: "CVT", value: "CVT" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fuel_type",
      title: "Loại nhiên liệu",
      type: "string",
      options: {
        list: [
          { title: "Xăng", value: "Xăng" },
          { title: "Dầu", value: "Dầu" },
          { title: "Hybrid", value: "Hybrid" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body_style",
      title: "Kiểu dáng xe",
      type: "string",
      options: {
        list: [
          { title: "Sedan", value: "Sedan" },
          { title: "SUV", value: "SUV" },
          { title: "Hatchback", value: "Hatchback" },
          { title: "MPV", value: "MPV" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Tình trạng xe",
      type: "string",
      initialValue: "Đang bán",
      options: {
        list: [
          { title: "Đang bán", value: "Đang bán" },
          { title: "Đã nhận cọc", value: "Đã nhận cọc" },
          { title: "Đã bán", value: "Đã bán" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Bộ sưu tập ảnh xe",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Mô tả hình ảnh (Alt)",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "description",
      title: "Mô tả chi tiết & Tình trạng xe",
      type: "text",
      description: "Thông tin chi tiết về lịch sử bảo dưỡng, trang bị thêm, cam kết kiểm tra.",
    }),
    defineField({
      name: "origin",
      title: "Xuất xứ",
      type: "string",
      options: {
        list: ["Lắp ráp trong nước", "Nhập khẩu Thái Lan", "Nhập khẩu Nhật Bản", "Nhập khẩu Indonesia"],
      },
    }),
    defineField({
      name: "engine",
      title: "Động cơ",
      type: "string",
      description: "Ví dụ: 2.0L Xăng, 2.4L Diesel Turbo, 1.8L Xăng lai Điện Hybrid",
    }),
    defineField({
      name: "certified176",
      title: "Đạt chuẩn 176 hạng mục Toyota Sure",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "price",
      media: "images.0",
    },
    prepare({ title, subtitle, media }) {
      const formattedPrice = subtitle
        ? new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(subtitle)
        : "Chưa có giá";
      return {
        title,
        subtitle: formattedPrice,
        media,
      };
    },
  },
});

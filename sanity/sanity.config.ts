import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "vio8qowo";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "toyota-bien-hoa-studio",
  title: "Toyota Biên Hoà - Quản Trị Xe Đã Qua Sử Dụng",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});

import type { Metadata } from "next";

import { InnerPage } from "@/components/layout/inner-page";

export const metadata: Metadata = { title: "Dự án" };

export default function ProjectsPage() {
  return (
    <InnerPage
      eyebrow="Dự án"
      title="Kết quả được kể bằng những dự án thật"
      description="Nền tảng cho portfolio và case study, sẵn sàng kết nối với dữ liệu dự án từ API."
    />
  );
}

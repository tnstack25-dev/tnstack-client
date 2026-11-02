import type { Metadata } from "next";

import { InnerPage } from "@/components/layout/inner-page";

export const metadata: Metadata = { title: "Bài viết" };

export default function BlogPage() {
  return (
    <InnerPage
      eyebrow="Bài viết"
      title="Kiến thức thiết kế và marketing thực chiến"
      description="Nền tảng cho danh sách bài viết SEO, sẵn sàng kết nối module bài viết từ server."
    />
  );
}

import type { Metadata } from "next";

import { InnerPage } from "@/components/layout/inner-page";

export const metadata: Metadata = { title: "Chính sách bảo mật" };

export default function PrivacyPage() {
  return (
    <InnerPage
      eyebrow="Pháp lý"
      title="Chính sách bảo mật"
      description="Nội dung chính sách sẽ được cập nhật trước khi website chính thức thu thập thông tin khách hàng."
    />
  );
}

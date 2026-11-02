import type { Metadata } from "next";

import { InnerPage } from "@/components/layout/inner-page";

export const metadata: Metadata = { title: "Điều khoản sử dụng" };

export default function TermsPage() {
  return (
    <InnerPage
      eyebrow="Pháp lý"
      title="Điều khoản sử dụng"
      description="Nội dung điều khoản sẽ được cập nhật trước khi website chính thức vận hành."
    />
  );
}

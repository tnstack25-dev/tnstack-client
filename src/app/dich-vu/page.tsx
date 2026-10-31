import type { Metadata } from "next";
import { ServicesCTA } from "@/components/services/services-cta";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesHero } from "@/components/services/services-hero";
import { WhyChooseUs } from "@/components/services/why-choose-us";
import { WorkProcess } from "@/components/services/work-process";

export const metadata: Metadata = {
  title: "Dịch vụ website toàn diện | TNStack",
  description:
    "Thiết kế website, tối ưu SEO và hiệu suất, bảo mật, quảng cáo, hosting và quản trị website cùng TNStack.",
  alternates: { canonical: "/dich-vu" },
};

export default function ServicesPage() {
  return (
    <main className="service-theme overflow-hidden">
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseUs />
      <WorkProcess />
      <ServicesCTA />
    </main>
  );
}

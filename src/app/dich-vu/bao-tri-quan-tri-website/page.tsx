import type { Metadata } from "next";

import { MaintenanceBenefits } from "@/components/services/website-maintenance/maintenance-benefits";
import { MaintenanceConsultationForm } from "@/components/services/website-maintenance/maintenance-consultation-form";
import { MaintenanceCTA } from "@/components/services/website-maintenance/maintenance-cta";
import { MaintenanceDashboard } from "@/components/services/website-maintenance/maintenance-dashboard";
import { MaintenanceFAQ } from "@/components/services/website-maintenance/maintenance-faq";
import { MaintenanceHero } from "@/components/services/website-maintenance/maintenance-hero";
import { MaintenanceProcess } from "@/components/services/website-maintenance/maintenance-process";
import { MaintenanceProjects } from "@/components/services/website-maintenance/maintenance-projects";
import { MaintenanceTasks } from "@/components/services/website-maintenance/maintenance-tasks";
import { QuickSupport } from "@/components/services/website-design/quick-support";
import { ServiceSidebar } from "@/components/services/website-design/service-sidebar";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dịch Vụ Bảo Trì & Quản Trị Website Chuyên Nghiệp",
  description:
    "TNSTACK cung cấp dịch vụ bảo trì và quản trị website chuyên nghiệp: cập nhật hệ thống, sao lưu dữ liệu, giám sát uptime, bảo mật, tối ưu tốc độ và hỗ trợ kỹ thuật.",
  alternates: { canonical: "/dich-vu/bao-tri-quan-tri-website" },
  openGraph: {
    title: "Dịch Vụ Bảo Trì & Quản Trị Website Chuyên Nghiệp | TNSTACK",
    description:
      "Bảo trì, quản trị, sao lưu và hỗ trợ vận hành website theo nhu cầu doanh nghiệp.",
    url: "/dich-vu/bao-tri-quan-tri-website",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Bảo trì & quản trị website",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      areaServed: "VN",
      description: metadata.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Dịch vụ",
          item: `${siteConfig.url}/dich-vu`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bảo trì & quản trị website",
          item: `${siteConfig.url}/dich-vu/bao-tri-quan-tri-website`,
        },
      ],
    },
  ];

  return (
    <main className="service-theme overflow-x-clip bg-[var(--service-bg)] py-8 text-[var(--service-heading)] sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Container className="max-w-[1440px] px-4 md:px-6 xl:px-10">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,3fr)_minmax(17rem,1fr)]">
          <div className="min-w-0">
            <MaintenanceHero />
            <MaintenanceBenefits />
            <MaintenanceProcess />
            <MaintenanceTasks />
            <MaintenanceDashboard />
            <MaintenanceProjects />
          </div>
          <aside className="space-y-4">
            <ServiceSidebar activeTitle="Bảo trì & quản trị website" />
            <MaintenanceConsultationForm />
            <MaintenanceFAQ />
            <QuickSupport />
          </aside>
        </div>
        <div className="mt-6">
          <MaintenanceCTA />
        </div>
      </Container>
    </main>
  );
}

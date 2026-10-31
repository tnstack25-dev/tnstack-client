import type { Metadata } from "next";

import { OtherServicesBenefits } from "@/components/services/other-services/other-services-benefits";
import { OtherServicesConsultationForm } from "@/components/services/other-services/other-services-consultation-form";
import { OtherServicesCTA } from "@/components/services/other-services/other-services-cta";
import { OtherServicesGrid } from "@/components/services/other-services/other-services-grid";
import { OtherServicesHero } from "@/components/services/other-services/other-services-hero";
import { ServiceSidebar } from "@/components/services/website-design/service-sidebar";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Các Dịch Vụ Website Khác – Hỗ Trợ & Tư Vấn",
  description:
    "TNSTACK cung cấp dịch vụ khôi phục dữ liệu website, tích hợp công cụ marketing, tư vấn giải pháp website và hỗ trợ kỹ thuật chuyên nghiệp.",
  alternates: { canonical: "/dich-vu/cac-dich-vu-khac" },
  openGraph: {
    title: "Các Dịch Vụ Website Khác – Hỗ Trợ & Tư Vấn | TNSTACK",
    description:
      "Khôi phục dữ liệu, tích hợp marketing, tư vấn giải pháp và hỗ trợ kỹ thuật website.",
    url: "/dich-vu/cac-dich-vu-khac",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Các dịch vụ website khác",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      areaServed: "VN",
      description: metadata.description,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dịch vụ website bổ trợ",
        itemListElement: [
          "Khôi phục dữ liệu website",
          "Tích hợp công cụ marketing",
          "Tư vấn giải pháp website",
          "Hỗ trợ kỹ thuật",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
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
          name: "Các dịch vụ khác",
          item: `${siteConfig.url}/dich-vu/cac-dich-vu-khac`,
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
            <OtherServicesHero />
            <OtherServicesBenefits />
            <OtherServicesGrid />
            <OtherServicesCTA />
          </div>
          <aside className="space-y-4">
            <ServiceSidebar activeTitle="Các dịch vụ khác" />
            <OtherServicesConsultationForm />
          </aside>
        </div>
      </Container>
    </main>
  );
}

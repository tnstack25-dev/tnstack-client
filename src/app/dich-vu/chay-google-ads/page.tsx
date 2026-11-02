import type { Metadata } from "next";

import { GoogleAdsBenefits } from "@/components/services/google-ads/google-ads-benefits";
import { GoogleAdsConsultationForm } from "@/components/services/google-ads/google-ads-consultation-form";
import { GoogleAdsCTA } from "@/components/services/google-ads/google-ads-cta";
import { GoogleAdsDashboard } from "@/components/services/google-ads/google-ads-dashboard";
import { GoogleAdsFAQ } from "@/components/services/google-ads/google-ads-faq";
import { GoogleAdsHero } from "@/components/services/google-ads/google-ads-hero";
import { GoogleAdsProcess } from "@/components/services/google-ads/google-ads-process";
import { GoogleAdsProjects } from "@/components/services/google-ads/google-ads-projects";
import { GoogleAdsTypes } from "@/components/services/google-ads/google-ads-types";
import { QuickSupport } from "@/components/services/website-design/quick-support";
import { ServiceSidebar } from "@/components/services/website-design/service-sidebar";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dịch Vụ Chạy Google Ads Chuyên Nghiệp, Hiệu Quả",
  description:
    "TNSTACK cung cấp dịch vụ chạy Google Ads chuyên nghiệp, tối ưu ngân sách, tiếp cận khách hàng tiềm năng, theo dõi chuyển đổi và báo cáo hiệu quả minh bạch.",
  alternates: { canonical: "/dich-vu/chay-google-ads" },
  openGraph: {
    title: "Dịch Vụ Chạy Google Ads Chuyên Nghiệp, Hiệu Quả | TNSTACK",
    description:
      "Tư vấn chiến lược, triển khai, đo lường và tối ưu chiến dịch Google Ads.",
    url: "/dich-vu/chay-google-ads",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Chạy Google Ads",
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
          name: "Chạy Google Ads",
          item: `${siteConfig.url}/dich-vu/chay-google-ads`,
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
            <GoogleAdsHero />
            <GoogleAdsBenefits />
            <GoogleAdsProcess />
            <GoogleAdsTypes />
            <GoogleAdsDashboard />
            <GoogleAdsProjects />
          </div>
          <aside className="space-y-4">
            <ServiceSidebar activeTitle="Chạy Google Ads" />
            <GoogleAdsConsultationForm />
            <GoogleAdsFAQ />
            <QuickSupport />
          </aside>
        </div>
        <div className="mt-6">
          <GoogleAdsCTA />
        </div>
      </Container>
    </main>
  );
}

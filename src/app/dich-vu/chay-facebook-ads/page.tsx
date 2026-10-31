import type { Metadata } from "next";
import { FacebookAdsBenefits } from "@/components/services/facebook-ads/facebook-ads-benefits";
import { FacebookAdsConsultationForm } from "@/components/services/facebook-ads/facebook-ads-consultation-form";
import { FacebookAdsCTA } from "@/components/services/facebook-ads/facebook-ads-cta";
import { FacebookAdsDashboard } from "@/components/services/facebook-ads/facebook-ads-dashboard";
import { FacebookAdsFAQ } from "@/components/services/facebook-ads/facebook-ads-faq";
import { FacebookAdsHero } from "@/components/services/facebook-ads/facebook-ads-hero";
import { FacebookAdsProcess } from "@/components/services/facebook-ads/facebook-ads-process";
import { FacebookAdsTypes } from "@/components/services/facebook-ads/facebook-ads-types";
import { QuickSupport } from "@/components/services/website-design/quick-support";
import { ServiceSidebar } from "@/components/services/website-design/service-sidebar";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dịch Vụ Chạy Facebook Ads Chuyên Nghiệp",
  description:
    "TNSTACK cung cấp dịch vụ chạy Facebook Ads chuyên nghiệp, tiếp cận khách hàng tiềm năng, tối ưu ngân sách quảng cáo, tăng chuyển đổi và báo cáo minh bạch.",
  alternates: { canonical: "/dich-vu/chay-facebook-ads" },
  openGraph: {
    title: "Dịch Vụ Chạy Facebook Ads Chuyên Nghiệp | TNSTACK",
    description:
      "Tư vấn chiến lược, triển khai, đo lường và tối ưu chiến dịch Facebook Ads.",
    url: "/dich-vu/chay-facebook-ads",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Chạy Facebook Ads",
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
          name: "Chạy Facebook Ads",
          item: `${siteConfig.url}/dich-vu/chay-facebook-ads`,
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
            <FacebookAdsHero />
            <FacebookAdsBenefits />
            <FacebookAdsProcess />
            <FacebookAdsTypes />
            <FacebookAdsDashboard />
          </div>
          <aside className="space-y-4">
            <ServiceSidebar activeTitle="Chạy Facebook Ads" />
            <FacebookAdsConsultationForm />
            <FacebookAdsFAQ />
            <QuickSupport />
          </aside>
        </div>
        <div className="mt-6">
          <FacebookAdsCTA />
        </div>
      </Container>
    </main>
  );
}

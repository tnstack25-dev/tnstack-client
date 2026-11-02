import type { Metadata } from "next";

import { HostingConsultationForm } from "@/components/services/hosting/hosting-consultation-form";
import { HostingCTA } from "@/components/services/hosting/hosting-cta";
import { HostingFAQ } from "@/components/services/hosting/hosting-faq";
import { HostingHero } from "@/components/services/hosting/hosting-hero";
import { HostingPricing } from "@/components/services/hosting/hosting-pricing";
import { HostingTechnologies } from "@/components/services/hosting/hosting-technologies";
import { QuickSupport } from "@/components/services/website-design/quick-support";
import { ServiceSidebar } from "@/components/services/website-design/service-sidebar";
import { Container } from "@/components/ui/container";
import { hostingPlans } from "@/config/hosting-service";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Hosting Website Tốc Độ Cao, Giá Từ 89K/Tháng",
  description:
    "TNSTACK cung cấp hosting website tốc độ cao, SSD NVMe, SSL miễn phí, quản lý FastPanel. Gói hosting từ 89.000đ/tháng, phù hợp cá nhân và doanh nghiệp.",
  alternates: { canonical: "/dich-vu/hosting-website" },
  openGraph: {
    title: "Hosting Website Tốc Độ Cao, Giá Từ 89K/Tháng | TNSTACK",
    description:
      "Hosting website với SSD NVMe, ZeroSSL, FastPanel và các gói tài nguyên rõ ràng.",
    url: "/dich-vu/hosting-website",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Hosting Website",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      areaServed: "VN",
      description: metadata.description,
      offers: hostingPlans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.price,
        priceCurrency: plan.currency,
        url: `${siteConfig.url}/dich-vu/hosting-website#bang-gia-hosting`,
      })),
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
          name: "Hosting Website",
          item: `${siteConfig.url}/dich-vu/hosting-website`,
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
            <HostingHero />
            <HostingPricing />
            <HostingTechnologies />
          </div>
          <aside className="space-y-4">
            <ServiceSidebar activeTitle="Hosting website" />
            <HostingConsultationForm />
            <HostingFAQ />
            <QuickSupport />
          </aside>
        </div>
        <div className="mt-6">
          <HostingCTA />
        </div>
      </Container>
    </main>
  );
}

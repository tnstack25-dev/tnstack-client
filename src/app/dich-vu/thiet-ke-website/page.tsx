import type { Metadata } from "next";
import { ConsultationForm } from "@/components/services/website-design/consultation-form";
import { QuickSupport } from "@/components/services/website-design/quick-support";
import { ServiceFAQ } from "@/components/services/website-design/service-faq";
import { ServiceSidebar } from "@/components/services/website-design/service-sidebar";
import { WebsiteBenefits } from "@/components/services/website-design/website-benefits";
import { WebsiteDesignCTA } from "@/components/services/website-design/website-design-cta";
import { WebsiteDesignHero } from "@/components/services/website-design/website-design-hero";
import { WebsiteFeatures } from "@/components/services/website-design/website-features";
import { WebsiteProcess } from "@/components/services/website-design/website-process";
import { WebsiteProjects } from "@/components/services/website-design/website-projects";
import { Container } from "@/components/ui/container";
import { websiteDesignService } from "@/config/website-design-service";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Thiết Kế Website Chuyên Nghiệp, Chuẩn SEO",
  description:
    "TNSTACK cung cấp dịch vụ thiết kế website theo yêu cầu, giao diện hiện đại, chuẩn SEO, tối ưu tốc độ và tương thích mọi thiết bị. Liên hệ tư vấn ngay.",
  alternates: { canonical: "/dich-vu/thiet-ke-website" },
  openGraph: {
    title: "Thiết Kế Website Chuyên Nghiệp, Chuẩn SEO | TNSTACK",
    description:
      "Dịch vụ thiết kế website theo yêu cầu, giao diện hiện đại và tương thích mọi thiết bị.",
    url: "/dich-vu/thiet-ke-website",
    type: "website",
  },
};

export default function WebsiteDesignServicePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Thiết kế website theo yêu cầu",
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
          name: "Thiết kế website theo yêu cầu",
          item: `${siteConfig.url}/dich-vu/thiet-ke-website`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: websiteDesignService.faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
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
            <WebsiteDesignHero />
            <div className="mt-5">
              <WebsiteBenefits />
            </div>
            <WebsiteFeatures />
            <WebsiteProcess />
            <WebsiteProjects />
          </div>
          <aside className="space-y-4">
            <ServiceSidebar />
            <ConsultationForm />
            <ServiceFAQ />
            <QuickSupport />
          </aside>
        </div>
        <div className="mt-6">
          <WebsiteDesignCTA />
        </div>
      </Container>
    </main>
  );
}

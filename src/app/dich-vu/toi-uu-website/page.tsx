import type { Metadata } from "next";
import { BeforeAfterComparison } from "@/components/services/website-optimization/before-after-comparison";
import { OptimizationBenefits } from "@/components/services/website-optimization/optimization-benefits";
import { OptimizationCategories } from "@/components/services/website-optimization/optimization-categories";
import { OptimizationConsultationForm } from "@/components/services/website-optimization/optimization-consultation-form";
import { OptimizationCTA } from "@/components/services/website-optimization/optimization-cta";
import { OptimizationFAQ } from "@/components/services/website-optimization/optimization-faq";
import { OptimizationHero } from "@/components/services/website-optimization/optimization-hero";
import { OptimizationProcess } from "@/components/services/website-optimization/optimization-process";
import { OptimizationProjects } from "@/components/services/website-optimization/optimization-projects";
import { QuickSupport } from "@/components/services/website-design/quick-support";
import { ServiceSidebar } from "@/components/services/website-design/service-sidebar";
import { Container } from "@/components/ui/container";
import { websiteOptimizationService } from "@/config/website-optimization-service";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dịch Vụ Tối Ưu Website, Tăng Tốc & Chuẩn SEO",
  description:
    "TNSTACK cung cấp dịch vụ tối ưu website toàn diện: tăng tốc tải trang, cải thiện Core Web Vitals, tối ưu SEO kỹ thuật, mã nguồn và trải nghiệm người dùng.",
  alternates: { canonical: "/dich-vu/toi-uu-website" },
  openGraph: {
    title: "Dịch Vụ Tối Ưu Website, Tăng Tốc & Chuẩn SEO | TNSTACK",
    description:
      "Tối ưu tốc độ, Core Web Vitals, SEO kỹ thuật và trải nghiệm người dùng.",
    url: "/dich-vu/toi-uu-website",
    type: "website",
  },
};
export default function OptimizationPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Tối ưu Website (SEO & Hiệu suất)",
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
          name: "Tối ưu website",
          item: `${siteConfig.url}/dich-vu/toi-uu-website`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: websiteOptimizationService.faqs.map(
        ({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        }),
      ),
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
            <OptimizationHero />
            <OptimizationBenefits />
            <OptimizationProcess />
            <OptimizationCategories />
            <BeforeAfterComparison />
            <OptimizationProjects />
          </div>
          <aside className="space-y-4">
            <ServiceSidebar activeTitle="Tối ưu website (SEO & Hiệu suất)" />
            <OptimizationConsultationForm />
            <OptimizationFAQ />
            <QuickSupport />
          </aside>
        </div>
        <div className="mt-6">
          <OptimizationCTA />
        </div>
      </Container>
    </main>
  );
}

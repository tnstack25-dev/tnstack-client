import type { Metadata } from "next";
import { MalwareBeforeAfter } from "@/components/services/malware-removal/malware-before-after";
import { MalwareConsultationForm } from "@/components/services/malware-removal/malware-consultation-form";
import { MalwareFAQ } from "@/components/services/malware-removal/malware-faq";
import { MalwareProjects } from "@/components/services/malware-removal/malware-projects";
import { MalwareRemovalCTA } from "@/components/services/malware-removal/malware-removal-cta";
import { MalwareRemovalHero } from "@/components/services/malware-removal/malware-removal-hero";
import { MalwareRemovalProcess } from "@/components/services/malware-removal/malware-removal-process";
import { MalwareTypes } from "@/components/services/malware-removal/malware-types";
import { MalwareWarningSigns } from "@/components/services/malware-removal/malware-warning-signs";
import { QuickSupport } from "@/components/services/website-design/quick-support";
import { ServiceSidebar } from "@/components/services/website-design/service-sidebar";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: "Dịch Vụ Xử Lý Mã Độc Website, Khôi Phục Web",
  description:
    "TNSTACK cung cấp dịch vụ xử lý mã độc website, quét virus, xóa backdoor, khắc phục website bị hack, chuyển hướng lạ và tăng cường bảo mật.",
  alternates: { canonical: "/dich-vu/xu-ly-ma-doc" },
  openGraph: {
    title: "Dịch Vụ Xử Lý Mã Độc Website, Khôi Phục Web | TNSTACK",
    description: "Quét, xử lý mã độc và tăng cường bảo mật website.",
    url: "/dich-vu/xu-ly-ma-doc",
    type: "website",
  },
};
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Xử lý mã độc website",
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
          name: "Xử lý mã độc website",
          item: `${siteConfig.url}/dich-vu/xu-ly-ma-doc`,
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
            <MalwareRemovalHero />
            <MalwareWarningSigns />
            <MalwareRemovalProcess />
            <MalwareTypes />
            <MalwareBeforeAfter />
            <MalwareProjects />
          </div>
          <aside className="space-y-4">
            <ServiceSidebar activeTitle="Xử lý mã độc website" />
            <MalwareConsultationForm />
            <MalwareFAQ />
            <QuickSupport />
          </aside>
        </div>
        <div className="mt-6">
          <MalwareRemovalCTA />
        </div>
      </Container>
    </main>
  );
}

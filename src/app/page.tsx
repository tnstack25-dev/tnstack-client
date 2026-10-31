import { BenefitTicker } from "@/components/home/benefit-ticker";
import { CtaSection } from "@/components/home/cta-section";
import { CommitmentSection } from "@/components/home/commitment-section";
import { FaqSection } from "@/components/home/faq-section";
import { GrowthSystemSection } from "@/components/home/growth-system-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProcessSection } from "@/components/home/process-section";
import { ServicesSection } from "@/components/home/services-section";
import { WorkSection } from "@/components/home/work-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitTicker />
      <GrowthSystemSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <CommitmentSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

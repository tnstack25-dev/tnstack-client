import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { googleAdsService as data } from "@/config/google-ads-service";

export function GoogleAdsProcess() {
  return (
    <section className="border-y border-[var(--service-accent)]/10 py-12">
      <Reveal>
        <ServicesSectionLabel>Quy trình chạy Google Ads</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Quy trình triển khai chuyên nghiệp, rõ ràng
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-5 md:grid-cols-5">
        {data.process.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className="relative grid grid-cols-[3.5rem_1fr] gap-4 md:block"
          >
            <span className="grid size-14 place-items-center rounded-full border border-[var(--service-accent)]/35 bg-[var(--service-surface-strong)] font-bold text-[var(--service-accent)] shadow-[0_0_25px_rgba(37,99,235,.08)]">
              0{index + 1}
            </span>
            {index < data.process.length - 1 ? (
              <ArrowRight className="absolute top-5 -right-4 hidden size-4 text-[var(--service-accent)]/45 md:block" />
            ) : null}
            <div className="md:mt-5">
              <Icon className="mb-3 hidden size-5 text-[var(--service-accent)] md:block" />
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--service-muted)]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { googleAdsService as data } from "@/config/google-ads-service";

export function GoogleAdsTypes() {
  return (
    <section id="loai-hinh-quang-cao" className="py-12">
      <Reveal>
        <ServicesSectionLabel>
          Các loại quảng cáo Google Ads
        </ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Triển khai đa dạng hình thức quảng cáo
        </h2>
      </Reveal>
      <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.adTypes.map(
          ({ title, subtitle, description, icon: Icon, accent }) => (
            <StaggerItem key={title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--service-accent)]/45">
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${accent} p-5`}
                >
                  <div className="absolute inset-4 rounded-xl border border-white/10 bg-[var(--service-bg)]/75 p-4 transition duration-300 group-hover:scale-[1.03]">
                    <div className="flex items-center gap-2">
                      <span className="grid size-10 place-items-center rounded-xl bg-white text-[#0f172a]">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-[10px] text-[var(--service-muted)]">
                        {subtitle}
                      </span>
                    </div>
                    <div className="mt-5 h-3 w-3/4 rounded-full bg-white/12" />
                    <div className="mt-2 h-3 w-1/2 rounded-full bg-[var(--service-accent)]/30" />
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((item) => (
                        <div key={item} className="h-8 rounded bg-white/8" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-5 text-[var(--service-muted)]">
                    {description}
                  </p>
                  <a
                    href="#tu-van-google-ads"
                    className="mt-4 inline-flex items-center gap-1 text-xs text-[var(--service-accent)]"
                  >
                    Xem chi tiết <ArrowRight className="size-3" />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ),
        )}
      </Stagger>
    </section>
  );
}

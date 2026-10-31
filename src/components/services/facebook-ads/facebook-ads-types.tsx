import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";
import { facebookAdsService as data } from "@/config/facebook-ads-service";

export function FacebookAdsTypes() {
  return (
    <section id="loai-hinh-facebook-ads" className="py-12">
      <Reveal>
        <ServicesSectionLabel>
          Các loại hình quảng cáo Facebook Ads
        </ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Triển khai đa dạng hình thức quảng cáo
        </h2>
      </Reveal>
      <Stagger className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.adTypes.map(
          ({ title, subtitle, description, icon: Icon }, index) => (
            <StaggerItem key={title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--service-accent)]/14 bg-[var(--service-card)] transition duration-300 hover:-translate-y-1 hover:border-[var(--service-accent)]/45">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e293b] to-[var(--service-card)] p-4">
                  <div className="absolute inset-4 rounded-xl border border-white/10 bg-[var(--service-bg)]/85 p-3 transition duration-300 group-hover:scale-[1.03]">
                    <div className="flex items-center justify-between">
                      <span className="grid size-9 place-items-center rounded-lg bg-white text-[#1877f2]">
                        <Icon className="size-5" />
                      </span>
                      <span className="grid size-7 place-items-center rounded-full bg-[#1877f2] font-black text-white">
                        f
                      </span>
                    </div>
                    <div
                      className={`mt-4 rounded-lg ${index === 3 ? "bg-[#1877f2]/18" : "bg-gradient-to-br from-[var(--service-accent)]/15 to-[#1877f2]/15"} p-3`}
                    >
                      <div className="h-2 w-3/4 rounded bg-white/18" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-white/10" />
                      <div className="mt-4 h-10 rounded bg-white/8" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] tracking-wider text-[var(--service-accent)] uppercase">
                    {subtitle}
                  </p>
                  <h3 className="mt-2 text-sm font-bold">{title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-5 text-[var(--service-muted)]">
                    {description}
                  </p>
                  <a
                    href="#tu-van-facebook-ads"
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

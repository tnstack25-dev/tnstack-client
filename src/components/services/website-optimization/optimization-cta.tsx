import { ArrowRight, Gauge, Rocket, SearchCheck } from "lucide-react";
import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";

export function OptimizationCTA() {
  return (
    <Reveal className="relative overflow-hidden rounded-2xl border border-[var(--service-accent)]/30 bg-[linear-gradient(105deg,var(--service-card),var(--service-surface-strong))] p-7 sm:p-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.07)_1px,transparent_1px)] [mask-image:linear-gradient(to_right,transparent,black)] [background-size:28px_28px]" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_.75fr]">
        <div>
          <p className="text-xs font-bold tracking-[.14em] text-[var(--service-accent)] uppercase">
            Bắt đầu tối ưu website ngay hôm nay
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-.045em] sm:text-4xl">
            Website nhanh hơn, hiệu quả hơn cho doanh nghiệp của bạn
          </h2>
          <p className="mt-4 text-sm text-[var(--service-muted-strong)]">
            Liên hệ TNSTACK để được tư vấn giải pháp tối ưu phù hợp nhất.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ContactDialogTrigger className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)]">
              Nhận tư vấn miễn phí <ArrowRight className="size-4" />
            </ContactDialogTrigger>
            <ContactDialogTrigger className="h-12 rounded-full border border-[var(--service-accent)]/40 px-6 text-sm font-semibold">
              Xem bảng giá
            </ContactDialogTrigger>
          </div>
        </div>
        <div className="relative hidden h-44 lg:block">
          <div className="absolute right-12 bottom-0 grid h-36 w-56 rotate-[-5deg] place-items-center rounded-2xl border border-[var(--service-accent)]/25 bg-[var(--service-bg)]">
            <Gauge className="size-16 text-[var(--service-accent)]" />
          </div>
          <Rocket className="absolute right-0 bottom-6 size-24 -rotate-12 text-[var(--service-accent)] drop-shadow-[0_0_18px_rgba(37,99,235,.35)]" />
          <div className="absolute top-2 left-0 flex items-center gap-2 rounded-xl border border-[var(--service-accent)]/25 bg-[var(--service-card)] px-3 py-2 text-[10px]">
            <SearchCheck className="size-4 text-[var(--service-accent)]" />
            Chuẩn SEO
          </div>
        </div>
      </div>
    </Reveal>
  );
}

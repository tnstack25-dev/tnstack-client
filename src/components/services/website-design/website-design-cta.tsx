import {
  ArrowRight,
  LayoutDashboard,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";

export function WebsiteDesignCTA() {
  return (
    <Reveal className="relative overflow-hidden rounded-2xl border border-[var(--service-accent)]/30 bg-[linear-gradient(105deg,var(--service-card),var(--service-surface-strong))] p-7 sm:p-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.07)_1px,transparent_1px)] [mask-image:linear-gradient(to_right,transparent,black)] [background-size:28px_28px]" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="text-xs font-bold tracking-[.16em] text-[var(--service-accent)] uppercase">
            Sẵn sàng bắt đầu?
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-.045em] text-[var(--service-heading)] sm:text-4xl">
            Sẵn sàng sở hữu một website chuyên nghiệp?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--service-muted-strong)]">
            Liên hệ ngay với TNSTACK để được tư vấn giải pháp thiết kế website
            phù hợp với nhu cầu và định hướng phát triển của doanh nghiệp.
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
          <div className="absolute right-5 bottom-0 h-36 w-[78%] rotate-[-5deg] rounded-2xl border border-[var(--service-accent)]/25 bg-[var(--service-bg)] p-4 shadow-2xl">
            <div className="h-full rounded-xl bg-gradient-to-br from-[#1e3a8a] to-[var(--service-bg)] p-4">
              <LayoutDashboard className="size-8 text-[var(--service-accent)]" />
              <div className="mt-6 h-3 w-3/4 rounded bg-white/20" />
              <div className="mt-2 h-3 w-1/2 rounded bg-[var(--service-accent)]/30" />
            </div>
          </div>
          <div className="absolute right-[66%] bottom-0 grid size-20 place-items-center rounded-2xl border border-[var(--service-accent)]/25 bg-[var(--service-card)]">
            <MonitorSmartphone className="size-8 text-[var(--service-accent)]" />
          </div>
          <div className="absolute top-0 right-2 flex items-center gap-2 rounded-xl border border-[var(--service-accent)]/25 bg-[var(--service-card)] px-3 py-2 text-[10px]">
            <Sparkles className="size-4 text-[var(--service-accent)]" />
            Khởi tạo website
          </div>
        </div>
      </div>
    </Reveal>
  );
}

import {
  ArrowRight,
  Cloud,
  Database,
  Headphones,
  MonitorCog,
  Wrench,
} from "lucide-react";
import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";

const cards = [
  ["top-0 left-0", MonitorCog, "Giải pháp tối ưu"],
  ["right-0 top-2", Headphones, "Hỗ trợ chuyên sâu"],
  ["bottom-0 left-2", Wrench, "Triển khai phù hợp"],
] as const;

export function OtherServicesCTA() {
  return (
    <Reveal className="relative overflow-hidden rounded-2xl border border-[var(--service-accent)]/30 bg-gradient-to-r from-[var(--service-card)] to-[var(--service-surface-strong)] p-7 sm:p-9">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(37,99,235,.22),transparent_35%),linear-gradient(rgba(37,99,235,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.07)_1px,transparent_1px)] [background-size:auto,28px_28px,28px_28px]" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="text-xs font-bold tracking-[.14em] text-[var(--service-accent)] uppercase">
            Đồng hành cùng TNSTACK
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
            Tìm giải pháp phù hợp cho nhu cầu của bạn{" "}
            <span className="text-[var(--service-accent)]">ngay hôm nay</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--service-muted-strong)]">
            Liên hệ TNSTACK để được tư vấn chi tiết và lựa chọn giải pháp phù
            hợp với mục tiêu kinh doanh của bạn.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ContactDialogTrigger className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)]">
              Nhận tư vấn miễn phí <ArrowRight className="size-4" />
            </ContactDialogTrigger>
            <a
              href="#tu-van-dich-vu-khac"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--service-accent)]/40 px-6 text-sm font-semibold"
            >
              Xem báo giá
            </a>
          </div>
        </div>
        <div className="relative hidden h-48 lg:block" aria-hidden="true">
          <Cloud className="absolute top-0 left-[40%] size-24 text-[var(--service-accent)]/35" />
          <div className="absolute inset-5 grid place-items-center rounded-3xl border border-[var(--service-accent)]/25 bg-[var(--service-bg)] shadow-[0_0_48px_rgba(37,99,235,.12)]">
            <div className="relative grid size-28 place-items-center rounded-[2rem] border border-[var(--service-accent)]/25 bg-[var(--service-accent)]/8">
              <MonitorCog className="size-16 text-[var(--service-accent)]" />
              <Database className="absolute -right-4 -bottom-4 size-12 rounded-xl bg-[var(--service-card)] p-2 text-[var(--service-accent)]" />
            </div>
          </div>
          {cards.map(([position, Icon, title]) => (
            <div
              key={title}
              className={`absolute ${position} flex items-center gap-2 rounded-xl border border-[var(--service-accent)]/25 bg-[var(--service-card)] px-3 py-2 text-[10px]`}
            >
              <Icon className="size-4 text-[var(--service-accent)]" />
              {title}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

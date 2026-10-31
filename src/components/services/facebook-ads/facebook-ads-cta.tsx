import {
  ArrowRight,
  BadgeDollarSign,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";

const cards = [
  ["top-0 left-0", Users, "Khách hàng tiềm năng"],
  ["right-0 top-3", TrendingUp, "Cơ hội tăng trưởng"],
  ["bottom-0 left-5", BadgeDollarSign, "Tối ưu ngân sách"],
] as const;

export function FacebookAdsCTA() {
  return (
    <Reveal className="relative overflow-hidden rounded-2xl border border-[var(--service-accent)]/30 bg-gradient-to-r from-[var(--service-card)] to-[var(--service-surface-strong)] p-7 sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(37,99,235,.2),transparent_34%),linear-gradient(rgba(37,99,235,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.07)_1px,transparent_1px)] [background-size:auto,28px_28px,28px_28px]" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="text-xs font-bold tracking-[.14em] text-[var(--service-accent)] uppercase">
            Tăng trưởng doanh nghiệp với Facebook Ads
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
            Bắt đầu chạy Facebook Ads để tăng{" "}
            <span className="text-[var(--service-accent)]">
              khách hàng và cơ hội doanh thu
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--service-muted-strong)]">
            Liên hệ TNSTACK để được tư vấn chiến lược và phương án triển khai
            Facebook Ads phù hợp với mục tiêu kinh doanh.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ContactDialogTrigger className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)]">
              Nhận tư vấn miễn phí <ArrowRight className="size-4" />
            </ContactDialogTrigger>
            <Link
              href="/lien-he"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--service-accent)]/40 px-6 text-sm font-semibold"
            >
              Xem bảng giá
            </Link>
          </div>
        </div>
        <div className="relative hidden h-48 lg:block" aria-hidden="true">
          <div className="absolute inset-5 grid place-items-center rounded-3xl border border-[var(--service-accent)]/25 bg-[var(--service-bg)] shadow-[0_0_48px_rgba(37,99,235,.12)]">
            <div className="relative grid size-28 place-items-center rounded-[2rem] border border-[var(--service-accent)]/25 bg-[var(--service-accent)]/8">
              <Target className="size-16 text-[var(--service-accent)]" />
              <span className="absolute -right-4 -bottom-4 grid size-12 place-items-center rounded-full bg-[#1877f2] text-3xl font-black text-white shadow-xl">
                f
              </span>
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

import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  ChevronRight,
  FileChartColumn,
  Goal,
  Home,
  MousePointerClick,
  Users,
} from "lucide-react";
import Link from "next/link";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";
import { googleAdsService as data } from "@/config/google-ads-service";

export function GoogleAdsHero() {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-xs text-[var(--service-muted)]"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1 hover:text-[var(--service-accent)]"
        >
          <Home className="size-3.5" />
          Trang chủ
        </Link>
        <ChevronRight className="size-3" />
        <Link href="/dich-vu" className="hover:text-[var(--service-accent)]">
          Dịch vụ
        </Link>
        <ChevronRight className="size-3" />
        <span className="text-white">Chạy Google Ads</span>
      </nav>

      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-surface)] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(37,99,235,.18),transparent_38%),linear-gradient(rgba(37,99,235,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.04)_1px,transparent_1px)] [background-size:auto,34px_34px,34px_34px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal direction="right">
            <p className="inline-flex rounded-full border border-[var(--service-accent)]/40 px-4 py-2 text-[10px] font-bold tracking-[.13em] text-[var(--service-accent)] uppercase">
              Chạy Google Ads
            </p>
            <h1 className="mt-6 text-[clamp(2rem,3vw,2.625rem)] leading-[1.13] font-bold tracking-[-.055em] text-balance">
              Chạy Google Ads hiệu quả,{" "}
              <span className="text-[var(--service-accent)]">
                tăng khách hàng
              </span>{" "}
              và doanh thu
            </h1>
            <p className="mt-6 text-sm leading-7 text-[var(--service-muted-strong)] sm:text-base">
              TNSTACK tư vấn và triển khai Google Ads giúp doanh nghiệp tiếp cận
              khách hàng tiềm năng đúng thời điểm, kiểm soát chi phí và đo lường
              hiệu quả theo mục tiêu đã thống nhất.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactDialogTrigger className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)]">
                Nhận tư vấn miễn phí <ArrowRight className="size-4" />
              </ContactDialogTrigger>
              <Link
                href="/lien-he"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--service-accent)]/40 px-6 text-sm font-semibold transition hover:bg-[var(--service-accent)]/8"
              >
                Xem bảng giá
              </Link>
            </div>
          </Reveal>
          <Reveal direction="left">
            <GoogleAdsHeroMockup />
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Lợi ích nhanh của Google Ads"
        className="mt-5 grid overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-card)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {data.highlights.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex gap-3 border-[var(--service-accent)]/10 p-5 lg:not-last:border-r"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--service-accent)]/10 text-[var(--service-accent)]">
              <Icon className="size-5" />
            </span>
            <div>
              <h2 className="text-sm font-bold">{title}</h2>
              <p className="mt-1 text-xs leading-5 text-[var(--service-muted)]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

function GoogleAdsHeroMockup() {
  return (
    <div
      className="relative mx-auto aspect-[1.15/1] max-w-[38rem]"
      aria-label="Dashboard Google Ads minh họa"
    >
      <div className="absolute inset-x-[6%] top-[12%] bottom-[8%] -rotate-2 rounded-2xl border border-[var(--service-accent)]/25 bg-[var(--service-bg)] p-3 shadow-[0_0_48px_rgba(37,99,235,.14)]">
        <div className="h-full rounded-xl border border-[var(--service-accent)]/15 bg-[#f1f5f9] p-4 text-[#0f172a]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GoogleAdsMark />
              <b className="text-xs">Google Ads · Minh họa</b>
            </div>
            <span className="rounded bg-[var(--service-accent)] px-2 py-1 text-[7px] font-bold">
              Campaign
            </span>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {["Hiển thị", "Lượt nhấp", "CTR", "Chi phí"].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-slate-200 bg-white p-2"
              >
                <p className="text-[7px] text-slate-500">{label}</p>
                <div className="mt-2 h-2 rounded-full bg-blue-200" />
              </div>
            ))}
          </div>
          <svg
            viewBox="0 0 320 120"
            className="mt-4 h-[48%] w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ads-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#16a34a" stopOpacity=".25" />
                <stop offset="1" stopColor="#16a34a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 96 C40 82 62 96 98 70 S154 88 188 52 S240 72 278 37 S302 38 320 20 V120 H0Z"
              fill="url(#ads-area)"
            />
            <path
              d="M0 96 C40 82 62 96 98 70 S154 88 188 52 S240 72 278 37 S302 38 320 20"
              fill="none"
              stroke="#16a34a"
              strokeWidth="3"
            />
            <path
              d="M0 105 C44 96 76 102 110 84 S166 96 200 77 S262 82 320 61"
              fill="none"
              stroke="#4285f4"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="absolute right-[3%] bottom-[2%] w-[24%] rounded-2xl border border-[var(--service-accent)]/25 bg-[var(--service-card)] p-3 shadow-xl">
        <div className="mx-auto grid aspect-square place-items-center rounded-xl bg-[#f1f5f9]">
          <BarChart3 className="size-10 text-[#16a34a]" />
        </div>
      </div>
      {(
        [
          ["top-0 left-0", Goal, "Chiến lược theo ngành"],
          ["top-1 right-0", Users, "Đúng đối tượng"],
          ["bottom-0 left-0", BadgeDollarSign, "Tối ưu chi phí"],
          ["right-0 bottom-[20%]", FileChartColumn, "Báo cáo rõ ràng"],
        ] as const
      ).map(([position, Icon, title]) => (
        <div
          key={title}
          className={`absolute ${position} flex items-center gap-2 rounded-xl border border-[var(--service-accent)]/25 bg-[var(--service-card)]/95 px-3 py-2 text-[9px] shadow-xl`}
        >
          <Icon className="size-4 text-[var(--service-accent)]" />
          {title}
        </div>
      ))}
      <MousePointerClick className="absolute right-[27%] bottom-[12%] size-7 text-[var(--service-accent)]" />
    </div>
  );
}

function GoogleAdsMark() {
  return (
    <span className="relative block size-7" aria-label="Google Ads">
      <i className="absolute top-0 left-2 h-7 w-2 -rotate-[28deg] rounded-full bg-[#4285f4]" />
      <i className="absolute top-0 right-1 h-7 w-2 rotate-[28deg] rounded-full bg-[#34a853]" />
      <i className="absolute bottom-0 left-0 size-2.5 rounded-full bg-[#fbbc04]" />
    </span>
  );
}

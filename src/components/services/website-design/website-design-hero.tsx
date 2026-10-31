import {
  ArrowRight,
  Gauge,
  Home,
  Monitor,
  SearchCheck,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";

export function WebsiteDesignHero() {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-xs text-[var(--service-muted)]"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 hover:text-[var(--service-accent)]"
        >
          <Home className="size-3.5" />
          Trang chủ
        </Link>
        <span>›</span>
        <Link href="/dich-vu" className="hover:text-[var(--service-accent)]">
          Dịch vụ
        </Link>
        <span>›</span>
        <span className="text-white">Thiết kế website theo yêu cầu</span>
      </nav>
      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-surface)] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(37,99,235,.18),transparent_35%),linear-gradient(rgba(37,99,235,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.04)_1px,transparent_1px)] [background-size:auto,36px_36px,36px_36px]" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr]">
          <Reveal direction="right">
            <p className="inline-flex rounded-full border border-[var(--service-accent)]/40 px-4 py-2 text-[10px] font-bold tracking-[.14em] text-[var(--service-accent)] uppercase">
              Thiết kế website theo yêu cầu
            </p>
            <h1 className="mt-6 text-[clamp(2rem,3vw,2.625rem)] leading-[1.13] font-bold tracking-[-.055em] text-balance text-[var(--service-heading)]">
              Thiết kế website chuyên nghiệp,{" "}
              <span className="text-[var(--service-accent)]">hiện đại</span> cho
              mọi lĩnh vực kinh doanh
            </h1>
            <p className="mt-6 text-sm leading-7 text-[var(--service-muted-strong)] sm:text-base">
              TNSTACK cung cấp dịch vụ thiết kế website theo yêu cầu, giao diện
              hiện đại, chuẩn SEO, tối ưu trải nghiệm người dùng và phù hợp với
              đặc thù từng ngành nghề, giúp doanh nghiệp xây dựng hình ảnh
              chuyên nghiệp và tăng trưởng bền vững.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactDialogTrigger className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)] shadow-[0_0_28px_rgba(37,99,235,.15)] transition hover:-translate-y-1 hover:bg-[var(--service-accent-hover)]">
                Nhận tư vấn miễn phí <ArrowRight className="size-4" />
              </ContactDialogTrigger>
              <ContactDialogTrigger className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--service-accent)]/45 px-6 text-sm font-semibold text-white transition hover:bg-[var(--service-accent)]/8">
                Xem báo giá
              </ContactDialogTrigger>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <HeroMockup />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto aspect-[1.12/1] w-full max-w-[36rem]">
      <div className="absolute inset-x-[8%] top-[12%] bottom-[12%] rotate-[3deg] rounded-2xl border border-[var(--service-accent)]/25 bg-[var(--service-bg)] p-3 shadow-[0_30px_70px_rgba(0,0,0,.6),0_0_40px_rgba(37,99,235,.08)]">
        <div className="h-full overflow-hidden rounded-xl bg-[#f1f5f9]">
          <div className="flex h-8 items-center gap-2 bg-[var(--service-bg)] px-4">
            <i className="size-1.5 rounded-full bg-[var(--service-accent)]" />
            <span className="ml-auto h-2 w-20 rounded bg-white/15" />
          </div>
          <div className="grid h-[calc(100%-2rem)] grid-cols-[1.1fr_.9fr] bg-gradient-to-br from-[#1e293b] to-[#2563eb] p-6">
            <div>
              <span className="block h-2 w-16 rounded bg-[var(--service-accent)]" />
              <span className="mt-4 block h-6 w-full rounded bg-white/90" />
              <span className="mt-2 block h-6 w-4/5 rounded bg-white/90" />
              <span className="mt-5 block h-2 w-4/5 rounded bg-white/20" />
              <span className="mt-2 block h-2 w-3/5 rounded bg-white/20" />
              <span className="mt-6 block h-7 w-24 rounded-full bg-[var(--service-accent)]" />
            </div>
            <div className="rounded-xl bg-[radial-gradient(circle_at_50%_30%,var(--service-accent),#1e3a8a_50%,var(--service-bg))]" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[5%] left-[2%] h-[52%] w-[26%] -rotate-2 rounded-[1.4rem] border-[5px] border-[#0f172a] bg-[#dbeafe] p-2 shadow-2xl">
        <div className="mx-auto h-3 w-8 rounded-full bg-[#0f172a]" />
        <div className="mt-3 h-16 rounded-lg bg-gradient-to-br from-[#1e40af] to-[var(--service-accent)]/50" />
        <div className="mt-3 h-2 w-4/5 rounded bg-[var(--service-card)]/20" />
        <div className="mt-2 h-2 w-3/5 rounded bg-[var(--service-card)]/15" />
      </div>
      {[
        { c: "top-[1%] left-[2%]", I: Gauge, t: "Tốc độ tải trang" },
        { c: "top-[1%] right-[5%]", I: SearchCheck, t: "Chuẩn SEO" },
        { c: "top-[36%] right-0", I: Smartphone, t: "Responsive" },
        { c: "bottom-[3%] right-[5%]", I: ShieldCheck, t: "Bảo mật SSL" },
      ].map(({ c, I, t }) => (
        <div
          key={t}
          className={`absolute ${c} flex items-center gap-2 rounded-xl border border-[var(--service-accent)]/25 bg-[var(--service-card)]/95 px-3 py-2 text-[10px] font-semibold shadow-xl backdrop-blur`}
        >
          <I className="size-4 text-[var(--service-accent)]" />
          {t}
        </div>
      ))}
      <Monitor className="absolute bottom-0 left-1/2 size-7 -translate-x-1/2 text-[var(--service-accent)]/30" />
    </div>
  );
}

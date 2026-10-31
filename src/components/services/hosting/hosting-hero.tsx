import {
  ChevronRight,
  Cloud,
  CloudUpload,
  Database,
  HardDrive,
  Home,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { hostingService as data } from "@/config/hosting-service";

export function HostingHero() {
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
        <span className="text-white">Hosting Website</span>
      </nav>

      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-surface)] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(37,99,235,.2),transparent_38%),linear-gradient(rgba(37,99,235,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.04)_1px,transparent_1px)] [background-size:auto,34px_34px,34px_34px]" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal direction="right">
            <p className="inline-flex rounded-full border border-[var(--service-accent)]/40 px-4 py-2 text-[10px] font-bold tracking-[.13em] text-[var(--service-accent)] uppercase">
              Hosting Website
            </p>
            <h1 className="mt-6 text-[clamp(2rem,3vw,2.625rem)] leading-[1.13] font-bold tracking-[-.055em] text-balance">
              Hosting tốc độ cao,{" "}
              <span className="text-[var(--service-accent)]">
                ổn định và bảo mật
              </span>{" "}
              cho mọi website
            </h1>
            <p className="mt-6 text-sm leading-7 text-[var(--service-muted-strong)] sm:text-base">
              TNSTACK cung cấp dịch vụ hosting chất lượng cao, giúp website hoạt
              động ổn định, an toàn và sẵn sàng phát triển.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#bang-gia-hosting"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)]"
              >
                Đăng ký ngay <span aria-hidden="true">→</span>
              </a>
              <a
                href="#tu-van-hosting"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--service-accent)]/40 px-6 text-sm font-semibold transition hover:bg-[var(--service-accent)]/8"
              >
                Tư vấn miễn phí
              </a>
            </div>
          </Reveal>
          <Reveal direction="left">
            <HostingInfrastructureMockup />
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Lợi ích Hosting"
        className="mt-5 grid overflow-hidden rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-card)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {data.benefits.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex gap-3 border-[var(--service-accent)]/10 p-5 transition hover:bg-[var(--service-accent)]/4 lg:not-last:border-r"
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

function HostingInfrastructureMockup() {
  return (
    <div
      className="relative mx-auto aspect-[1.18/1] max-w-[38rem]"
      aria-label="Hạ tầng máy chủ Hosting minh họa"
    >
      <Cloud className="absolute top-[15%] left-[4%] size-16 text-[var(--service-accent)]/45" />
      <Cloud className="absolute top-[10%] right-[7%] size-20 text-[var(--service-accent)]/55" />
      <div className="absolute inset-x-[13%] top-[8%] bottom-[7%] flex items-end justify-center gap-3">
        {["h-[68%]", "h-[88%]", "h-[76%]"].map((height, rack) => (
          <div
            key={rack}
            className={`${height} w-[29%] rounded-xl border border-[var(--service-accent)]/30 bg-gradient-to-b from-[#1e3a8a] to-[var(--service-bg)] p-2 shadow-[0_0_35px_rgba(37,99,235,.12)]`}
          >
            <div className="mb-2 flex justify-between px-1 text-[var(--service-accent)]">
              <Server className="size-4" />
              <i className="size-1.5 rounded-full bg-[var(--service-accent)] shadow-[0_0_8px_var(--service-accent)]" />
            </div>
            <div className="space-y-2">
              {[0, 1, 2, 3, 4, 5].map((slot) => (
                <div
                  key={slot}
                  className="flex h-4 items-center justify-between rounded border border-[var(--service-accent)]/15 bg-black/25 px-1.5"
                >
                  <span className="h-1 w-2/3 rounded-full bg-[var(--service-accent)]/25" />
                  <i className="size-1 rounded-full bg-[var(--service-accent)]" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-[7%] bottom-[4%] grid size-28 place-items-center rounded-[2rem] border border-[var(--service-accent)]/35 bg-[#1e3a8a]/95 shadow-[0_0_40px_rgba(37,99,235,.16)]">
        <ShieldCheck className="size-16 text-[var(--service-accent)]" />
      </div>
      {(
        [
          ["top-0 left-1", Zap, "Tốc độ vượt trội"],
          ["top-1 right-0", ShieldCheck, "Bảo mật website"],
          ["bottom-0 left-0", HardDrive, "Hạ tầng lưu trữ"],
          ["right-0 bottom-[24%]", CloudUpload, "Sao lưu dữ liệu"],
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
      <Database className="absolute bottom-[18%] left-[9%] size-7 text-[var(--service-accent)]" />
    </div>
  );
}

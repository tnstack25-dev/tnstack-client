import {
  ArrowRight,
  Cloud,
  CloudUpload,
  HardDrive,
  Server,
  Settings,
  ShieldCheck,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

const cards = [
  ["top-0 left-0", HardDrive, "SSD NVMe"],
  ["right-0 top-3", ShieldCheck, "ZeroSSL"],
  ["bottom-0 left-5", Settings, "FastPanel"],
  ["right-0 bottom-2", CloudUpload, "Sao lưu dữ liệu"],
] as const;

export function HostingCTA() {
  return (
    <Reveal className="relative overflow-hidden rounded-2xl border border-[var(--service-accent)]/30 bg-gradient-to-r from-[var(--service-card)] to-[var(--service-surface-strong)] p-7 sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(37,99,235,.2),transparent_34%),linear-gradient(rgba(37,99,235,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.07)_1px,transparent_1px)] [background-size:auto,28px_28px,28px_28px]" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="text-xs font-bold tracking-[.14em] text-[var(--service-accent)] uppercase">
            Sẵn sàng cho website của bạn
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
            Đăng ký hosting ngay hôm nay để website luôn{" "}
            <span className="text-[var(--service-accent)]">
              ổn định và an toàn
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--service-muted-strong)]">
            Trải nghiệm dịch vụ hosting từ TNSTACK với giải pháp lưu trữ phù
            hợp, dễ quản lý và hỗ trợ tận tâm.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#bang-gia-hosting"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--service-accent)] px-6 text-sm font-bold text-[var(--service-on-accent)]"
            >
              Đăng ký ngay <ArrowRight className="size-4" />
            </a>
            <a
              href="#tu-van-hosting"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--service-accent)]/40 px-6 text-sm font-semibold"
            >
              Tư vấn miễn phí
            </a>
          </div>
        </div>
        <div className="relative hidden h-52 lg:block" aria-hidden="true">
          <Cloud className="absolute top-2 left-1/2 size-20 -translate-x-1/2 text-[var(--service-accent)]/45" />
          <div className="absolute inset-x-[27%] top-[23%] bottom-0 rounded-xl border border-[var(--service-accent)]/30 bg-gradient-to-b from-[#1e3a8a] to-[var(--service-bg)] p-3 shadow-[0_0_48px_rgba(37,99,235,.14)]">
            <div className="flex items-center justify-between text-[var(--service-accent)]">
              <Server className="size-5" />
              <i className="size-2 rounded-full bg-[var(--service-accent)]" />
            </div>
            <div className="mt-3 space-y-2">
              {[0, 1, 2, 3, 4].map((slot) => (
                <div
                  key={slot}
                  className="h-5 rounded border border-[var(--service-accent)]/15 bg-black/25"
                />
              ))}
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

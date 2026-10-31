import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const services = [
  "Thiết kế website",
  "UI/UX Design",
  "Quảng cáo đa nền tảng",
  "SEO & tối ưu chuyển đổi",
] as const;

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0f172a] text-white">
      <div
        className="grid-pattern absolute inset-0 -z-20 opacity-[0.06]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 right-0 -z-10 size-[32rem] rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid gap-12 border-b border-[#334155] py-14 sm:py-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-2xl font-bold tracking-[-0.04em]"
              aria-label={`${siteConfig.name} — Trang chủ`}
            >
              <span className="grid size-10 place-items-center rounded-xl bg-primary text-sm font-black text-primary-foreground">
                TN
              </span>
              <span>
                {siteConfig.name}
                <span className="text-accent">.</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              Thiết kế website và chiến dịch marketing kết hợp tư duy chiến
              lược, thẩm mỹ và công nghệ để tạo ra tăng trưởng bền vững.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#334155] bg-white/[0.04] px-4 py-2.5 text-xs text-slate-300">
              <MapPin className="size-4 text-[var(--brand-on-dark)]" /> Việt Nam
              · Làm việc toàn quốc
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="text-xs font-bold tracking-[0.16em] text-white uppercase">
              Khám phá
            </p>
            <nav
              className="mt-6 grid gap-3.5"
              aria-label="Điều hướng chân trang"
            >
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-300 transition-colors hover:text-[#38bdf8]"
                >
                  <span className="h-px w-0 bg-[var(--brand-on-dark)] transition-all duration-300 group-hover:w-4" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-bold tracking-[0.16em] text-white uppercase">
              Dịch vụ
            </p>
            <div className="mt-6 grid gap-3.5">
              {services.map((service) => (
                <Link
                  key={service}
                  href="/dich-vu"
                  className="group flex w-fit items-center gap-2 text-sm text-slate-300 transition-colors hover:text-[#38bdf8]"
                >
                  {service}
                  <ArrowUpRight className="size-3.5 translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-bold tracking-[0.16em] text-white uppercase">
              Liên hệ
            </p>
            <div className="mt-6 grid gap-3 text-sm">
              <a
                className="group flex items-center justify-between gap-4 rounded-xl border border-[#334155] px-4 py-3.5 text-slate-300 transition-all hover:border-[#38bdf8]/40 hover:bg-white/[0.05] hover:text-[#38bdf8]"
                href={`mailto:${siteConfig.contact.email}`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Mail className="size-4 shrink-0 text-[var(--brand-on-dark)]" />
                  <span className="truncate">{siteConfig.contact.email}</span>
                </span>
                <ArrowUpRight className="size-3.5 shrink-0 opacity-35 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                className="group flex items-center justify-between gap-4 rounded-xl border border-[#334155] px-4 py-3.5 text-slate-300 transition-all hover:border-[#38bdf8]/40 hover:bg-white/[0.05] hover:text-[#38bdf8]"
                href={`tel:${siteConfig.contact.phone.replaceAll(" ", "")}`}
              >
                <span className="flex items-center gap-3">
                  <Phone className="size-4 text-[var(--brand-on-dark)]" />
                  {siteConfig.contact.phone}
                </span>
                <ArrowUpRight className="size-3.5 opacity-35 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                className="group flex items-center justify-between gap-4 rounded-xl border border-[#0068ff]/20 bg-[#0068ff]/8 px-4 py-3.5 text-slate-300 transition-all hover:border-[#0068ff]/40 hover:bg-[#0068ff]/15 hover:text-[#38bdf8]"
                href={siteConfig.contact.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-3">
                  <MessageCircleMore className="size-4 text-[#61a4ff]" />
                  Nhắn tin qua Zalo
                </span>
                <ArrowUpRight className="size-3.5 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Mọi quyền được bảo
            lưu.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/chinh-sach-bao-mat"
              className="transition-colors hover:text-[#38bdf8]"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/dieu-khoan"
              className="transition-colors hover:text-[#38bdf8]"
            >
              Điều khoản sử dụng
            </Link>
            <a
              href="#top"
              className="flex items-center gap-1.5 transition-colors hover:text-[#38bdf8]"
            >
              Lên đầu trang <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

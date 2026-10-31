import {
  Activity,
  CheckCircle2,
  FileChartColumn,
  Gauge,
  LayoutDashboard,
  LockKeyhole,
  RefreshCcw,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";

const menu = [
  ["Tổng quan", LayoutDashboard],
  ["Hiệu suất", Gauge],
  ["Bảo mật", LockKeyhole],
  ["Cập nhật", RefreshCcw],
  ["Giám sát", Activity],
  ["Báo cáo", FileChartColumn],
] as const;

export function MaintenanceDashboard() {
  return (
    <section className="border-t border-[var(--service-accent)]/10 py-12">
      <Reveal>
        <ServicesSectionLabel>Bảng quản trị & giám sát</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Hệ thống giám sát website chuyên nghiệp
        </h2>
        <p className="mt-2 text-xs text-[var(--service-muted)]">
          Dashboard và dữ liệu bên dưới chỉ dùng để minh họa giao diện báo cáo.
        </p>
      </Reveal>
      <Reveal className="mt-7 overflow-hidden rounded-2xl border border-[var(--service-accent)]/18 bg-[var(--service-surface-strong)] shadow-[0_24px_80px_rgba(0,0,0,.24)]">
        <div className="overflow-x-auto">
          <div className="grid min-w-[760px] grid-cols-[130px_1fr_190px]">
            <aside className="border-r border-[var(--service-accent)]/10 bg-[var(--service-bg)] p-4">
              <p className="mb-5 text-[10px] font-bold tracking-[.16em] text-[var(--service-accent)] uppercase">
                Demo monitor
              </p>
              {menu.map(([label, Icon], index) => (
                <div
                  key={label}
                  className={`mb-2 flex items-center gap-2 rounded-lg px-3 py-2 text-[10px] ${index === 0 ? "bg-[var(--service-accent)]/12 text-[var(--service-accent)]" : "text-[var(--service-muted)]"}`}
                >
                  <Icon className="size-3.5" />
                  {label}
                </div>
              ))}
            </aside>
            <div className="p-5">
              <div className="grid grid-cols-4 gap-3">
                {[
                  "Thời gian hoạt động",
                  "Tốc độ tải trang",
                  "Lượt truy cập",
                  "Yêu cầu hỗ trợ",
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[var(--service-accent)]/10 bg-[var(--service-card)] p-3"
                  >
                    <p className="text-[9px] text-[var(--service-muted)]">
                      {label}
                    </p>
                    <div className="mt-3 h-2 w-2/3 rounded-full bg-[var(--service-accent)]/30" />
                    <p className="mt-2 text-[8px] text-[var(--service-accent)]">
                      Dữ liệu minh họa
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-[var(--service-accent)]/10 bg-[var(--service-card)] p-4">
                <div className="flex justify-between text-[9px] text-[var(--service-muted)]">
                  <span>Lưu lượng truy cập</span>
                  <span>Minh họa</span>
                </div>
                <svg
                  viewBox="0 0 620 180"
                  className="mt-3 h-40 w-full"
                  role="img"
                  aria-label="Biểu đồ lượt truy cập minh họa"
                >
                  <defs>
                    <linearGradient
                      id="dashboard-area"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop
                        offset="0"
                        stopColor="var(--service-accent)"
                        stopOpacity=".32"
                      />
                      <stop
                        offset="1"
                        stopColor="var(--service-accent)"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                  {[35, 75, 115, 155].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      x2="620"
                      y1={y}
                      y2={y}
                      stroke="rgba(148,163,184,.1)"
                    />
                  ))}
                  <path
                    d="M0 145 C50 112 92 142 140 108 S220 126 270 73 S350 111 404 62 S500 82 620 26 V180 H0Z"
                    fill="url(#dashboard-area)"
                  />
                  <path
                    d="M0 145 C50 112 92 142 140 108 S220 126 270 73 S350 111 404 62 S500 82 620 26"
                    fill="none"
                    stroke="var(--service-accent)"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
            <aside className="border-l border-[var(--service-accent)]/10 p-5">
              <h3 className="text-sm font-bold">Trạng thái website</h3>
              <p className="mt-1 text-[9px] text-[var(--service-muted)]">
                Dữ liệu minh họa
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Website hoạt động",
                  "Chứng chỉ SSL",
                  "Sao lưu theo lịch",
                  "Kiểm tra mã độc",
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-lg border border-[var(--service-accent)]/10 bg-[var(--service-card)] p-3 text-[10px]"
                  >
                    <CheckCircle2 className="size-4 text-[var(--service-accent)]" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

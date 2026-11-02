import { BadgeDollarSign, Eye, MousePointerClick, Percent } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { ServicesSectionLabel } from "@/components/services/section-label";

const kpis = [
  { label: "Lượt hiển thị", value: "125.4K", icon: Eye },
  { label: "Lượt nhấp", value: "12.8K", icon: MousePointerClick },
  { label: "Tỷ lệ nhấp CTR", value: "10.2%", icon: Percent },
  { label: "Chi phí quảng cáo", value: "8.5M đ", icon: BadgeDollarSign },
] as const;

export function GoogleAdsDashboard() {
  return (
    <section className="border-t border-[var(--service-accent)]/10 py-12">
      <Reveal>
        <ServicesSectionLabel>Kết quả đạt được</ServicesSectionLabel>
        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Hiệu quả quảng cáo rõ ràng, minh bạch
        </h2>
        <p className="mt-2 text-xs text-[var(--service-muted)]">
          Toàn bộ số liệu bên dưới chỉ dùng để minh họa giao diện báo cáo và có
          thể thay thế bằng API thực tế.
        </p>
      </Reveal>
      <Reveal className="mt-7 rounded-2xl border border-[var(--service-accent)]/18 bg-[var(--service-surface-strong)] p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[.72fr_1.28fr]">
          <div className="grid grid-cols-2 gap-3">
            {kpis.map(({ label, value, icon: Icon }) => (
              <article
                key={label}
                className="rounded-xl border border-[var(--service-accent)]/12 bg-[var(--service-card)] p-4"
              >
                <Icon className="size-5 text-[var(--service-accent)]" />
                <p className="mt-4 text-xl font-bold sm:text-2xl">{value}</p>
                <h3 className="mt-1 text-[10px] text-[var(--service-muted-strong)]">
                  {label}
                </h3>
                <p className="mt-3 text-[9px] text-[var(--service-accent)]">
                  Số liệu minh họa
                </p>
              </article>
            ))}
          </div>
          <div className="min-w-0 overflow-hidden rounded-xl border border-[var(--service-accent)]/12 bg-[var(--service-card)] p-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-[10px]">
              <span className="font-semibold">
                Lượt nhấp theo ngày · Minh họa
              </span>
              <div className="flex gap-4 text-[var(--service-muted)]">
                <span className="before:mr-1 before:inline-block before:size-2 before:rounded-full before:bg-[var(--service-accent)]">
                  Tháng này
                </span>
                <span className="before:mr-1 before:inline-block before:size-2 before:rounded-full before:bg-[#4285f4]">
                  Tháng trước
                </span>
              </div>
            </div>
            <div className="mt-4 overflow-x-auto">
              <svg
                viewBox="0 0 680 240"
                className="h-56 w-full min-w-[620px]"
                role="img"
                aria-label="Biểu đồ hiệu suất Google Ads minh họa"
              >
                <defs>
                  <linearGradient
                    id="google-ads-chart-area"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0"
                      stopColor="var(--service-accent)"
                      stopOpacity=".3"
                    />
                    <stop
                      offset="1"
                      stopColor="var(--service-accent)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                {[36, 82, 128, 174, 220].map((y) => (
                  <line
                    key={y}
                    x1="20"
                    x2="660"
                    y1={y}
                    y2={y}
                    stroke="rgba(148,163,184,.1)"
                  />
                ))}
                <path
                  d="M20 190 C90 178 112 206 170 150 S252 178 306 116 S396 154 452 92 S548 111 660 42 V230 H20Z"
                  fill="url(#google-ads-chart-area)"
                />
                <path
                  d="M20 190 C90 178 112 206 170 150 S252 178 306 116 S396 154 452 92 S548 111 660 42"
                  fill="none"
                  stroke="var(--service-accent)"
                  strokeWidth="3"
                />
                <path
                  d="M20 205 C80 192 124 185 176 178 S266 168 322 156 S416 146 480 130 S574 122 660 102"
                  fill="none"
                  stroke="#4285f4"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                {[1, 5, 10, 15, 20, 25, 30].map((day, index) => (
                  <text
                    key={day}
                    x={26 + index * 103}
                    y="238"
                    fill="var(--service-muted)"
                    fontSize="10"
                  >
                    {day}
                  </text>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

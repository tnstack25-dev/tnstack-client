import { Check } from "lucide-react";

import { HostingPlanButton } from "@/components/services/hosting/hosting-plan-button";
import { formatHostingPrice, type HostingPlan } from "@/config/hosting-service";

export function HostingPricingCard({ plan }: { plan: HostingPlan }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 sm:p-6 ${plan.popular ? "border-[var(--service-accent)]/75 bg-gradient-to-b from-[var(--service-surface-strong)] to-[var(--service-card)] shadow-[0_0_38px_rgba(37,99,235,.1)] xl:-translate-y-2" : "border-[var(--service-accent)]/15 bg-[var(--service-card)] hover:border-[var(--service-accent)]/40"}`}
    >
      <div className="flex min-h-8 flex-wrap items-start justify-between gap-2">
        <h3 className="text-xl font-bold">{plan.name}</h3>
        {plan.popular ? (
          <span className="rounded-full bg-[var(--service-accent)] px-3 py-1 text-[9px] font-bold text-[var(--service-on-accent)]">
            PHỔ BIẾN NHẤT
          </span>
        ) : null}
      </div>
      <p className="mt-4 min-h-20 text-xs leading-5 text-[var(--service-muted)]">
        {plan.description}
      </p>
      <div className="my-5 border-t border-[var(--service-accent)]/10" />
      <div className="flex items-end gap-2 whitespace-nowrap">
        <strong className="text-3xl tracking-tight sm:text-4xl">
          {formatHostingPrice(plan.price)}đ
        </strong>
        <span className="pb-1 text-xs text-[var(--service-muted-strong)]">
          / tháng
        </span>
      </div>
      <p className="mt-2 text-xs text-[var(--service-muted)]">
        Thanh toán theo tháng.
      </p>
      <div className="mt-6">
        <HostingPlanButton planId={plan.id} />
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-xs leading-5 text-[var(--service-muted-strong)]"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-[var(--service-accent)]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

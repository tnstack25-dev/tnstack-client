"use client";

import { ArrowRight } from "lucide-react";

export const HOSTING_PLAN_EVENT = "tnstack:hosting-plan-selected";

export function HostingPlanButton({ planId }: { planId: string }) {
  function selectPlan() {
    window.dispatchEvent(
      new CustomEvent(HOSTING_PLAN_EVENT, { detail: { planId } }),
    );
    document
      .getElementById("tu-van-hosting")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <button
      type="button"
      onClick={selectPlan}
      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--service-accent)] text-sm font-bold text-[var(--service-on-accent)] transition hover:bg-[var(--service-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--service-accent)]"
    >
      Bắt đầu ngay <ArrowRight className="size-4" />
    </button>
  );
}

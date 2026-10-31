"use client";

import { ArrowRight } from "lucide-react";
import type { OtherService } from "@/config/other-services";

export const OTHER_SERVICE_EVENT = "tnstack:select-other-service";

export function OtherServiceButton({
  service,
}: {
  service: Pick<OtherService, "id" | "title">;
}) {
  function selectService() {
    window.dispatchEvent(
      new CustomEvent(OTHER_SERVICE_EVENT, {
        detail: { serviceId: service.id },
      }),
    );
    document
      .getElementById("tu-van-dich-vu-khac")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  return (
    <button
      type="button"
      onClick={selectService}
      className="group/button mt-auto inline-flex items-center gap-1 pt-6 text-xs font-semibold text-[var(--service-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--service-accent)]"
    >
      Xem chi tiết{" "}
      <ArrowRight className="size-3 transition group-hover/button:translate-x-1" />
    </button>
  );
}

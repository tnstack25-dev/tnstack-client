import type { ReactNode } from "react";

export function ServicesSectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center rounded-full border border-[var(--service-accent)]/30 bg-[var(--service-accent)]/6 px-4 py-2 text-[11px] font-bold tracking-[0.13em] text-[var(--service-accent)] uppercase">
      {children}
    </p>
  );
}

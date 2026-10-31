import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function QuickSupport() {
  return (
    <section className="rounded-2xl border border-[var(--service-accent)]/15 bg-[var(--service-card)] p-5">
      <h2 className="text-lg font-bold text-[var(--service-heading)]">
        Bạn cần hỗ trợ nhanh?
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-3 rounded-xl border border-[var(--service-accent)]/25 bg-[var(--service-accent)]/5 p-3 text-xs font-semibold hover:bg-[var(--service-accent)]/10"
        >
          <Phone className="size-5 text-[var(--service-accent)]" />
          <span>
            Hotline
            <br />
            <small className="font-normal text-[var(--service-muted)]">
              {siteConfig.contact.phone}
            </small>
          </span>
        </a>
        <a
          href={siteConfig.contact.zaloUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-[var(--service-accent)]/25 bg-[var(--service-accent)]/5 p-3 text-xs font-semibold hover:bg-[var(--service-accent)]/10"
        >
          <MessageCircle className="size-5 text-[var(--service-accent)]" />
          <span>
            Zalo
            <br />
            <small className="font-normal text-[var(--service-muted)]">
              Chat ngay
            </small>
          </span>
        </a>
      </div>
    </section>
  );
}

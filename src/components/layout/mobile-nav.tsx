"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="grid size-10 place-items-center rounded-full border border-border bg-background"
        aria-label={isOpen ? "Đóng menu" : "Mở menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {isOpen ? (
        <div className="absolute inset-x-4 top-[4.5rem] rounded-3xl border border-border bg-background p-3 shadow-2xl shadow-dark/10">
          <nav aria-label="Điều hướng di động">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 font-medium hover:bg-surface"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <ContactDialogTrigger
              className="mt-2 block w-full rounded-2xl bg-[#2563eb] px-4 py-3 text-center font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Nhận tư vấn miễn phí
            </ContactDialogTrigger>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

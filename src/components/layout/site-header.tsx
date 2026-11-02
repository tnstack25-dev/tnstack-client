import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/85 backdrop-blur-xl dark:bg-background/85">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid size-9 rotate-3 place-items-center rounded-xl bg-dark text-sm font-black text-white transition-transform group-hover:rotate-0">
            TN
          </span>
          <span className="text-xl font-bold tracking-[-0.045em]">
            {siteConfig.name}
            <span className="text-accent">.</span>
          </span>
        </Link>
        <nav
          className="hidden items-center gap-4 lg:flex xl:gap-6"
          aria-label="Điều hướng chính"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground uppercase transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <ContactDialogTrigger className={buttonVariants({ variant: "dark" })}>
            Trao đổi dự án
            <ArrowUpRight />
          </ContactDialogTrigger>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

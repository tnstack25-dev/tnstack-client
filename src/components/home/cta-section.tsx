import { ArrowRight, Mail } from "lucide-react";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#2563eb] px-7 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute -top-24 -left-24 -z-10 size-72 rounded-full border-[50px] border-white/5" />
          <div className="pulse-soft absolute -right-20 -bottom-28 -z-10 size-80 rounded-full bg-accent/40 blur-3xl" />
          <div className="shine absolute inset-y-0 left-0 -z-10 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="text-sm font-bold tracking-[0.18em] text-white/65 uppercase">
            Dự án tiếp theo có thể là của bạn
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(1.875rem,3.5vw,2.75rem)] leading-[1.18] font-semibold tracking-[-0.03em] text-balance">
            Sẵn sàng biến ý tưởng thành kết quả?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Kể cho chúng tôi về mục tiêu của bạn. Buổi trao đổi đầu tiên hoàn
            toàn miễn phí và không ràng buộc.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ContactDialogTrigger
              className={buttonVariants({ variant: "light", size: "lg" })}
            >
              Bắt đầu trao đổi <ArrowRight />
            </ContactDialogTrigger>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/25 px-7 font-semibold hover:bg-white/10"
            >
              <Mail className="size-4" /> {siteConfig.contact.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

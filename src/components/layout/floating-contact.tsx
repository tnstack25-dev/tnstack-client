"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MessageCircleMore } from "lucide-react";
import { usePathname } from "next/navigation";

import { ContactDialogTrigger } from "@/components/contact/contact-dialog";
export function FloatingContact() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {pathname !== "/lien-he" ? (
        <motion.div
          className="fixed right-5 bottom-5 z-50 sm:right-7 sm:bottom-7"
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContactDialogTrigger className="group relative flex items-center gap-3 rounded-full border border-white/15 bg-dark py-2 pr-4 pl-2 text-sm font-semibold text-white shadow-2xl shadow-dark/25 transition-transform hover:-translate-y-1">
            <span className="ping-contact absolute top-2 left-2 size-10 rounded-full bg-primary/40" />
            <span className="relative grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
              <MessageCircleMore className="size-5 transition-transform group-hover:scale-110 group-hover:rotate-6" />
            </span>
            <span className="hidden sm:inline">Trao đổi dự án</span>
          </ContactDialogTrigger>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

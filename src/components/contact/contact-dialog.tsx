"use client";

import { X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

import { ContactForm } from "@/components/contact/contact-form";
import { cn } from "@/lib/utils";

const ContactDialogContext = createContext<(() => void) | null>(null);

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openDialog = useCallback(() => dialogRef.current?.showModal(), []);
  const closeDialog = useCallback(() => dialogRef.current?.close(), []);

  return (
    <ContactDialogContext value={openDialog}>
      {children}
      <dialog
        ref={dialogRef}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[min(46rem,calc(100%-2rem))] overflow-y-auto rounded-4xl bg-transparent p-0 text-foreground shadow-2xl backdrop:bg-dark/75 backdrop:backdrop-blur-sm"
        aria-labelledby="contact-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <div className="relative">
          <h2 id="contact-dialog-title" className="sr-only">
            Gửi yêu cầu tư vấn
          </h2>
          <button
            type="button"
            className="absolute top-5 right-5 z-10 grid size-10 cursor-pointer place-items-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:rotate-90 hover:bg-surface"
            aria-label="Đóng biểu mẫu"
            onClick={closeDialog}
          >
            <X className="size-4" />
          </button>
          <ContactForm />
        </div>
      </dialog>
    </ContactDialogContext>
  );
}

export function ContactDialogTrigger({
  children,
  className,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const openDialog = useContext(ContactDialogContext);

  if (!openDialog) {
    throw new Error(
      "ContactDialogTrigger must be used inside ContactDialogProvider.",
    );
  }

  return (
    <button
      type="button"
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) openDialog();
      }}
      {...props}
    >
      {children}
    </button>
  );
}

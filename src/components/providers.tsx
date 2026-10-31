"use client";

import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { Toaster } from "sonner";

import { ScrollProgress } from "@/components/motion/scroll-progress";
import { CursorGlow } from "@/components/motion/cursor-glow";
import { FloatingContact } from "@/components/layout/floating-contact";
import { ContactDialogProvider } from "@/components/contact/contact-dialog";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ContactDialogProvider>
        <ScrollProgress />
        <CursorGlow />
        {children}
        <FloatingContact />
      </ContactDialogProvider>
      <ThemeToaster />
    </ThemeProvider>
  );
}

function ThemeToaster() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      position="top-right"
      richColors
      closeButton
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}

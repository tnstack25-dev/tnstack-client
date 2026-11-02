"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { MouseEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 20 });
  const rotateY = useTransform(smoothX, [0, 1], [-4, 4]);
  const rotateX = useTransform(smoothY, [0, 1], [4, -4]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  }

  function resetTilt() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      style={
        reduceMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 900 }
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {children}
    </motion.div>
  );
}

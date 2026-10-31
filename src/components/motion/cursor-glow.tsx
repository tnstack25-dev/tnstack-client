"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect } from "react";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-400);
  const pointerY = useMotionValue(-400);
  const x = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 90, damping: 24 });

  useEffect(() => {
    if (reduceMotion) return;

    function handlePointerMove(event: PointerEvent) {
      pointerX.set(event.clientX - 160);
      pointerY.set(event.clientY - 160);
    }

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[45] hidden size-80 rounded-full bg-primary/[0.055] blur-3xl lg:block dark:bg-primary/[0.035]"
      style={{ x, y }}
      aria-hidden="true"
    />
  );
}

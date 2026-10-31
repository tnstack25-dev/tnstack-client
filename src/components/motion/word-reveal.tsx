"use client";

import { motion, useReducedMotion } from "motion/react";

export function WordReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.055, delayChildren: 0.08 },
        },
      }}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="-mb-[0.08em] inline-block overflow-hidden pb-[0.08em]"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "105%", opacity: 0, rotate: 2 },
              visible: {
                y: 0,
                opacity: 1,
                rotate: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </motion.span>
  );
}

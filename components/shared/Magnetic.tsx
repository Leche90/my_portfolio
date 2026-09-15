"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MagneticProps = {
  children: React.ReactNode;
  strength?: number; // 0-1, how far it travels toward the cursor
  className?: string;
};

/**
 * Wraps a button/badge/link so it drifts toward the cursor within its own
 * bounding box, and snaps back on mouse leave. Used for the hero CTA and
 * the social badges.
 */
export default function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 14, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 14, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
      data-cursor-pointer
    >
      {children}
    </motion.div>
  );
}

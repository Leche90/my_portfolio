"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Renders a two-part custom cursor (a tight dot + a lagging ring) on
 * fine-pointer devices that haven't asked for reduced motion. Falls back
 * to the native cursor everywhere else (touch, trackpad-less precision
 * pointers, prefers-reduced-motion).
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 260, mass: 0.4 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 260, mass: 0.4 });

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const handleMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        const target = e.target as HTMLElement;
        setIsPointer(!!target.closest("[data-cursor-pointer]"));
      });
    };
    const handleDown = () => setIsDown(true);
    const handleUp = () => setIsDown(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.classList.remove("custom-cursor");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-cyan"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-cyan/60"
        animate={{
          width: isPointer ? 52 : isDown ? 22 : 32,
          height: isPointer ? 52 : isDown ? 22 : 32,
          opacity: isPointer ? 0.9 : 0.5
        }}
        transition={{ duration: 0.2 }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}

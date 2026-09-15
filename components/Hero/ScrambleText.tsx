"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#";

type ScrambleTextProps = {
  words: string[];
  className?: string;
  holdMs?: number;
  scrambleMs?: number;
};

/**
 * Cycles through `words`, scrambling characters in and out on each swap.
 * Respects prefers-reduced-motion by just cross-fading text instantly.
 */
export default function ScrambleText({
  words,
  className,
  holdMs = 1800,
  scrambleMs = 500
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(words[0]);
  const indexRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cancelled = false;

    function scrambleTo(target: string) {
      const start = display;
      const maxLen = Math.max(start.length, target.length);
      const startTime = performance.now();

      function tick(now: number) {
        if (cancelled) return;
        const progress = Math.min(1, (now - startTime) / scrambleMs);
        let output = "";
        for (let i = 0; i < maxLen; i++) {
          const revealPoint = (i / maxLen) * 0.8;
          if (progress > revealPoint + 0.2) {
            output += target[i] ?? "";
          } else if (progress > revealPoint) {
            output += CHARS[Math.floor(Math.random() * CHARS.length)];
          } else {
            output += target[i] ? CHARS[Math.floor(Math.random() * CHARS.length)] : "";
          }
        }
        setDisplay(output.slice(0, Math.max(target.length, Math.floor(progress * maxLen))));
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setDisplay(target);
        }
      }
      frameRef.current = requestAnimationFrame(tick);
    }

    if (reduced) {
      const interval = setInterval(() => {
        indexRef.current = (indexRef.current + 1) % words.length;
        setDisplay(words[indexRef.current]);
      }, holdMs + scrambleMs);
      return () => clearInterval(interval);
    }

    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      scrambleTo(words[indexRef.current]);
    }, holdMs + scrambleMs);

    return () => {
      cancelled = true;
      clearInterval(interval);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, holdMs, scrambleMs]);

  return (
    <span className={className} aria-live="polite">
      {display}
    </span>
  );
}

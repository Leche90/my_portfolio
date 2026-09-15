"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

function useAnimatedNumber(target: number, duration = 700) {
  const [value, setValue] = useState(target);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const from = value;
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(from + (target - from) * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);
  return value;
}

function scoreColor(score: number) {
  if (score >= 90) return "#3DDC84";
  if (score >= 70) return "#FFB454";
  return "#FF6B7A";
}

export default function PerformanceToggle({ project }: { project: Project }) {
  const [optimized, setOptimized] = useState(false);
  const target = optimized ? project.performance.lighthouseAfter : project.performance.lighthouseBefore;
  const animatedScore = useAnimatedNumber(target);
  const circumference = 2 * Math.PI * 34;

  return (
    <div className="rounded-xl border border-line bg-bg/60 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-display text-sm font-semibold text-ink">Performance impact</h4>
        <button
          type="button"
          data-cursor-pointer
          role="switch"
          aria-checked={optimized}
          onClick={() => setOptimized((v) => !v)}
          className="flex items-center gap-2 rounded-full border border-line bg-elevated px-1 py-1 text-xs"
        >
          <span
            className={cn(
              "rounded-full px-3 py-1 transition-colors",
              !optimized ? "bg-line-soft text-ink" : "text-faint"
            )}
          >
            Standard Setup
          </span>
          <span
            className={cn(
              "rounded-full px-3 py-1 transition-colors",
              optimized ? "bg-cyan/20 text-cyan" : "text-faint"
            )}
          >
            My Optimization
          </span>
        </button>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative h-24 w-24 shrink-0">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="34" fill="none" stroke="#212838" strokeWidth="6" />
            <motion.circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              stroke={scoreColor(animatedScore)}
              strokeDasharray={circumference}
              animate={{ strokeDashoffset: circumference - (animatedScore / 100) * circumference }}
              transition={{ duration: 0.1 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xl font-semibold text-ink mono-tabular">
              {Math.round(animatedScore)}
            </span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-3">
          {project.performance.metrics.map((metric) => {
            const value = optimized ? metric.after : metric.before;
            return (
              <div key={metric.label} className="rounded-lg border border-line-soft bg-elevated px-3 py-2">
                <div className="text-[10px] uppercase tracking-wide text-faint">{metric.label}</div>
                <motion.div
                  key={`${metric.label}-${optimized}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-0.5 font-mono text-sm text-ink mono-tabular"
                >
                  {value}
                  <span className="text-faint">{metric.unit}</span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

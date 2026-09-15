"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { techMatrix, stackCategoryMeta, type TechItem } from "@/lib/data";
import { cn } from "@/lib/utils";

const masteryLabel: Record<TechItem["mastery"], string> = {
  core: "Core / daily driver",
  advanced: "Advanced / production use",
  working: "Working knowledge"
};

const masteryDot: Record<TechItem["mastery"], string> = {
  core: "bg-cyan",
  advanced: "bg-indigo-soft",
  working: "bg-faint"
};

export default function TechStackMatrix() {
  const [hovered, setHovered] = useState<string | null>(null);

  const relatedIds = useMemo(() => {
    if (!hovered) return new Set<string>();
    const item = techMatrix.find((t) => t.id === hovered);
    if (!item) return new Set<string>();
    const ids = new Set<string>([item.id, ...item.dependsOn]);
    // also include items that depend on the hovered one
    techMatrix.forEach((t) => {
      if (t.dependsOn.includes(hovered)) ids.add(t.id);
    });
    return ids;
  }, [hovered]);

  const categories = Object.keys(stackCategoryMeta) as TechItem["category"][];
  const hoveredItem = hovered ? techMatrix.find((t) => t.id === hovered) : null;

  return (
    <section id="stack" className="border-b border-line px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            The stack, and how it fits together
          </h2>
          <p className="mt-4 text-balance text-muted">
            Hover any technology to see what it depends on and where it shows
            up in production — this isn&apos;t a list of logos, it&apos;s a system.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4">
          {categories.map((category) => {
            const meta = stackCategoryMeta[category];
            const Icon = meta.icon;
            const items = techMatrix.filter((t) => t.category === category);
            return (
              <div key={category} className="rounded-2xl border border-line bg-panel p-5">
                <div className="mb-4 flex items-center gap-2 text-sm font-medium text-ink">
                  <Icon className="h-4 w-4 text-cyan" />
                  {meta.label}
                </div>
                <div className="flex flex-col gap-2">
                  {items.map((tech) => {
                    const isRelated = hovered ? relatedIds.has(tech.id) : true;
                    const isHovered = hovered === tech.id;
                    return (
                      <div key={tech.id} className="relative">
                        <button
                          type="button"
                          data-cursor-pointer
                          onMouseEnter={() => setHovered(tech.id)}
                          onMouseLeave={() => setHovered(null)}
                          onFocus={() => setHovered(tech.id)}
                          onBlur={() => setHovered(null)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-left text-sm transition-all duration-200",
                            isHovered
                              ? "border-cyan/50 bg-cyan/10 text-ink"
                              : isRelated
                              ? "border-line-soft bg-elevated text-ink/90"
                              : "border-line-soft bg-elevated text-faint opacity-40"
                          )}
                        >
                          <span>{tech.label}</span>
                          <span className={cn("h-1.5 w-1.5 rounded-full", masteryDot[tech.mastery])} />
                        </button>

                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-full z-10 mt-1 w-64 rounded-lg border border-cyan/30 bg-elevated p-3 shadow-glow-cyan"
                          >
                            <p className="text-xs font-semibold text-cyan">
                              {masteryLabel[tech.mastery]}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-muted">
                              {tech.useCase}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 min-h-[1.5rem] text-center font-mono text-xs text-faint">
          {hoveredItem ? `${hoveredItem.label} → ${hoveredItem.dependsOn.length} connected technologies` : ""}
        </div>
      </div>
    </section>
  );
}

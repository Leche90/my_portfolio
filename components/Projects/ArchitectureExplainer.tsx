"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ArchitectureExplainer({ project }: { project: Project }) {
  const { nodes, edges } = project.architecture;
  const [activeId, setActiveId] = useState<string | null>(null);

  const findNode = (id: string) => nodes.find((n) => n.id === id)!;
  const activeNode = activeId ? findNode(activeId) : null;

  return (
    <div className="rounded-xl border border-line bg-bg/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-display text-sm font-semibold text-ink">System data flow</h4>
        <span className="font-mono text-[11px] text-faint">hover a node</span>
      </div>

      <div className="relative h-[260px] w-full overflow-hidden rounded-lg border border-line-soft bg-panel">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {edges.map((edge, i) => {
            const from = findNode(edge.from);
            const to = findNode(edge.to);
            const isActive =
              activeId === edge.from || activeId === edge.to;
            return (
              <line
                key={i}
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke={isActive ? "#33E6C6" : "#212838"}
                strokeWidth={isActive ? 1.5 : 1}
                className="transition-colors duration-200"
              />
            );
          })}
        </svg>

        {nodes.map((node) => {
          const Icon = node.icon;
          const isActive = activeId === node.id;
          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <button
                type="button"
                data-cursor-pointer
                onMouseEnter={() => setActiveId(node.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(node.id)}
                onBlur={() => setActiveId(null)}
                className="relative flex flex-col items-center gap-1.5 focus-visible:outline-none"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.12 : 1,
                    borderColor: isActive ? "#33E6C6" : "#212838"
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border bg-elevated"
                >
                  <Icon className={isActive ? "h-4 w-4 text-cyan" : "h-4 w-4 text-muted"} />
                </motion.div>
                <span className="whitespace-nowrap font-mono text-[10px] text-faint">
                  {node.label}
                </span>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full z-20 mt-2 w-52 -translate-x-1/2 rounded-lg border border-cyan/30 bg-elevated p-3 text-left shadow-glow-cyan"
                  >
                    <p className="text-[11px] font-semibold text-cyan">{node.sublabel}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted">
                      {node.tooltip}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-faint">
        {activeNode ? activeNode.label : "Frontend → API Gateway → Services → Data layer"}
      </p>
    </div>
  );
}

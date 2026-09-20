"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  onOpen
}: {
  project: Project;
  onOpen: () => void;
}) {
  const accentText = project.accent === "indigo" ? "text-indigo-soft" : "text-cyan";
  const accentBorder = project.accent === "indigo" ? "hover:border-indigo/50" : "hover:border-cyan/50";

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      data-cursor-pointer
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group relative flex min-h-[220px] h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-panel p-6 text-left transition-colors",
        accentBorder
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20",
          project.accent === "indigo" ? "bg-indigo" : "bg-cyan"
        )}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            {project.name}
          </h3>
          <ArrowUpRight
            className={cn(
              "h-5 w-5 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
              "group-hover:text-ink"
            )}
          />
        </div>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{project.tagline}</p>
      </div>

      <div className="relative mt-6 flex flex-wrap items-center gap-2">
        <span className={cn("rounded-full border border-line px-3 py-1 text-xs font-mono", accentText)}>
          {project.metricBadge}
        </span>
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line-soft px-3 py-1 text-xs text-faint"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/lib/data";
import ArchitectureExplainer from "./ArchitectureExplainer";
import PerformanceToggle from "./PerformanceToggle";
import MiniLab from "./MiniLab";

export default function ProjectModal({
  project,
  onClose
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-bg/80 px-4 py-8 backdrop-blur-sm sm:items-center sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl rounded-2xl border border-line bg-panel"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
          <div>
            <p className="font-mono text-xs text-cyan">{project.metricBadge}</p>
            <h3 id="project-modal-title" className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            data-cursor-pointer
            onClick={onClose}
            aria-label="Close project details"
            className="shrink-0 rounded-full border border-line p-2 text-muted transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 px-6 pt-5 sm:px-8">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-line-soft px-3 py-1 text-xs text-faint">
              {tech}
            </span>
          ))}
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
          <div className="sm:col-span-2">
            <ArchitectureExplainer project={project} />
          </div>
          <PerformanceToggle project={project} />
          <MiniLab project={project} />
        </div>
      </motion.div>
    </div>
  );
}

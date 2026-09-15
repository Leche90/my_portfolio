"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Loader2, CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/data";

type Status = "idle" | "loading" | "done";

export default function MiniLab({ project }: { project: Project }) {
  const [status, setStatus] = useState<Status>("idle");
  const [latency, setLatency] = useState<number | null>(null);

  const runRequest = () => {
    if (status === "loading") return;
    setStatus("loading");
    const start = performance.now();
    setTimeout(() => {
      setLatency(Math.round(performance.now() - start));
      setStatus("done");
    }, project.miniLab.responseDelayMs);
  };

  const formatted = JSON.stringify(project.miniLab.mockResponse, null, 2);

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg/60">
      <div className="flex items-center justify-between border-b border-line bg-elevated px-4 py-2.5">
        <h4 className="font-display text-sm font-semibold text-ink">Mini-lab: live call</h4>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
        </div>
      </div>

      <div className="flex items-center gap-3 border-b border-line-soft px-4 py-3">
        <span className="rounded bg-indigo/20 px-2 py-0.5 font-mono text-[11px] font-semibold text-indigo-soft">
          {project.miniLab.method}
        </span>
        <span className="flex-1 truncate font-mono text-xs text-muted">
          {project.miniLab.endpoint}
        </span>
        <button
          type="button"
          data-cursor-pointer
          onClick={runRequest}
          disabled={status === "loading"}
          className="flex items-center gap-1.5 rounded-md bg-cyan/15 px-3 py-1.5 font-mono text-xs font-medium text-cyan transition-colors hover:bg-cyan/25 disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Play className="h-3.5 w-3.5" />
          )}
          {status === "loading" ? "Sending" : "Run request"}
        </button>
      </div>

      <div className="min-h-[160px] px-4 py-3 font-mono text-[11px] leading-relaxed">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.p
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-faint"
            >
              // click &quot;Run request&quot; to simulate this endpoint
            </motion.p>
          )}

          {status === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              <div className="h-2.5 w-3/4 animate-pulse rounded bg-line-soft" />
              <div className="h-2.5 w-1/2 animate-pulse rounded bg-line-soft" />
              <div className="h-2.5 w-5/6 animate-pulse rounded bg-line-soft" />
            </motion.div>
          )}

          {status === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-2 flex items-center gap-1.5 text-[11px] text-green">
                <CheckCircle2 className="h-3.5 w-3.5" />
                200 OK · {latency}ms
              </div>
              <pre className="overflow-x-auto text-ink">
                <code>{formatted}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

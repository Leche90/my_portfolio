"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"]
  });
  const progressHeight = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3
  });

  return (
    <section id="timeline" className="border-b border-line px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Career &amp; system milestones
          </h2>
          <p className="mt-4 max-w-xl text-balance text-muted">
            Every role, distilled to the breakthrough that mattered most.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute left-0 top-0 h-full w-px bg-line" />
          <motion.div
            className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-cyan to-indigo"
            style={{ scaleY: progressHeight, height: "100%" }}
          />

          <div className="flex flex-col gap-16">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-[35px] top-1 h-3 w-3 rounded-full border-2 border-cyan bg-bg sm:-left-[43px]" />

                <div className="font-mono text-xs text-faint">{entry.period}</div>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                  {entry.role}
                  <span className="text-muted"> · {entry.company}</span>
                </h3>
                <p className="mt-3 text-balance text-sm leading-relaxed text-cyan/90 sm:text-base">
                  {entry.breakthrough}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {entry.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

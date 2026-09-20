"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectGallery() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.slug === activeSlug) ?? null;

  return (
    <section id="projects" className="border-b border-line px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Projects I've Built
          </h2>
          <p className="mt-4 text-balance text-muted">
            AI matching for Nigerian teachers seeking jobs abroad. A website for a snack brand sells from. A church site with events, giving, and live stream.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={project.size === "lg" ? "sm:col-span-4 sm:row-span-2" : project.size === "md" ? "sm:col-span-2 sm:row-span-2" : "sm:col-span-2"}
            >
              <ProjectCard project={project} onOpen={() => setActiveSlug(project.slug)} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveSlug(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

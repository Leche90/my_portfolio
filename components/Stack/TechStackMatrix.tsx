"use client";

import { motion } from "framer-motion";

const tools = ["Next.js", "React", "TypeScript", "Tailwind", "Node", "PostgreSQL"];

const steps = [
  {
    n: "01",
    title: "We agree the first version",
    body: "A short call. You show the current site or Instagram. We write down the pages and the one action a visitor must be able to take.",
  },
  {
    n: "02",
    title: "You get a live draft",
    body: "I send a working URL, not a slide deck. You click through it on your phone and tell me what is off.",
  },
  {
    n: "03",
    title: "We launch that version",
    body: "The first release does the job we wrote down. Extra ideas wait until people are actually using the site.",
  },
  {
    n: "04",
    title: "You can run it after",
    body: "You get a site you can update. Small copy and image changes should not require a new project.",
  },
];

export default function TechStackMatrix() {
  return (
    <section id="stack" className="border-b border-line px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            From First Call to a Site You Can Use
          </h2>
          <p className="mt-4 text-muted">
            I work with businesses, and brands that need a public site that looks considered and works on a phone. This is how a project with me usually goes.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-line bg-panel p-6"
            >
              <p className="font-mono text-xs text-cyan">{step.n}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-muted">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-cyan">Stacks I Build With</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line-soft px-3 py-1.5 text-sm text-ink"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
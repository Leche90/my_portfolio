'use client';

import { motion } from 'framer-motion';

export default function Correspondence() {
  return (
    <section
      id="correspondence"
      className="relative py-32 md:py-40 border-t border-ink-line"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 gap-6 mb-16 md:mb-20 pb-6 border-b border-ink"
        >
          <div className="col-span-12 md:col-span-2">
            <span className="page-marker">v.</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="marginalia mb-4">Section v · Correspondence</div>
            <h2 className="editorial-title">
              Begin a letter,
              <br />
              <em className="font-serif italic font-light text-blood">
                begin a project.
              </em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-2 flex md:justify-end items-end">
            <span className="marginalia">page xi</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-12">
          {/* Letter intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-12 lg:col-span-7"
          >
            <p className="font-serif italic text-2xl text-ink-muted mb-2">
              Dear visitor,
            </p>
            <p className="text-lg text-ink-soft leading-relaxed mb-6">
              If you have a project in mind — a website to build, a redesign to
              undertake, an idea you'd like to talk through — write to me. I
              read every message and reply within twenty-four hours. The first
              call is always free, and there's no pressure to commit.
            </p>
            <p className="text-lg text-ink-soft leading-relaxed mb-6">
              Tell me what you're trying to make, who it's for, and what you'd
              like the web to do for you. We'll go from there.
            </p>
            <p className="font-serif italic text-2xl text-ink mt-8">
              Yours,<br />
              <span className="text-blood">L. Leche.</span>
            </p>
          </motion.div>

          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="col-span-12 lg:col-span-5 flex flex-col gap-3"
          >
            {/* Primary — email */}
            <a
              href="mailto:oldigital07@gmail.com"
              className="group flex items-center justify-between p-6 bg-ink text-paper hover:bg-blood transition-colors duration-300"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-micro tracking-wider-mono text-blood-soft group-hover:text-paper">
                  ※ best for project enquiries
                </span>
                <span className="font-display text-2xl font-light tracking-tightest mt-1">
                  hello@yourdomain.com
                </span>
              </div>
              <span className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </a>

            {/* Secondary channels */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/Leche90"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-5 border border-ink-line hover:border-ink hover:bg-paper-soft transition-all duration-300"
              >
                <span className="marginalia mb-1">GitHub</span>
                <span className="font-serif text-lg group-hover:text-blood transition-colors">
                  @Leche90 ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/lanzemaleche"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-5 border border-ink-line hover:border-ink hover:bg-paper-soft transition-all duration-300"
              >
                <span className="marginalia mb-1">LinkedIn</span>
                <span className="font-serif text-lg group-hover:text-blood transition-colors">
                  L. Leche ↗
                </span>
              </a>
            </div>

            {/* Address card */}
            <div className="flex flex-col p-5 border border-ink-line bg-paper-soft">
              <span className="marginalia mb-2">Posted from</span>
              <div className="font-serif text-lg text-ink leading-snug">
                Winnipeg, Manitoba<br />
                Canada · 49.8951°N
              </div>
              <div className="mt-3 marginalia text-blood flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blood animate-pulse" />
                Open for new commissions
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

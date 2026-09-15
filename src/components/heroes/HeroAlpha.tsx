'use client';

import { motion } from 'framer-motion';

export default function HeroAlpha() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Page edge — left margin like a real book */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-ink-line hidden lg:block" />
      <div className="absolute left-12 top-32 hidden lg:flex flex-col gap-1 items-start">
        <span className="marginalia rotate-[-90deg] origin-top-left translate-y-32 whitespace-nowrap">
          ◆ Volume I · First Edition · MMXXVI ◆
        </span>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        {/* Top metadata strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between flex-wrap gap-4 pb-12 border-b border-ink-line"
        >
          <div className="flex items-center gap-6 marginalia">
            <span>Vol. I</span>
            <span className="text-ink-line">·</span>
            <span>No. 01</span>
            <span className="text-ink-line">·</span>
            <span>Winnipeg</span>
            <span className="text-ink-line">·</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blood animate-pulse" />
              Available for commissions
            </span>
          </div>
          <div className="marginalia">
            ※ Established Anno Domini MMXXIV
          </div>
        </motion.div>

        {/* Big title block — set like a book cover */}
        <div className="grid grid-cols-12 gap-6 pt-16 md:pt-24">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="marginalia mb-6 flex items-center gap-3"
            >
              <span>A treatise on building</span>
              <span className="flex-1 h-px bg-ink-line max-w-32" />
              <span className="text-blood">PART ONE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="font-display font-light text-[clamp(3rem,11vw,11rem)] leading-[0.85] tracking-tightest text-ink mb-2"
            >
              The Index
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif italic font-light text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] text-blood -mt-2 tracking-tightest"
            >
              of a working developer.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="h-px flex-1 max-w-24 bg-ink" />
              <span className="font-display text-2xl tracking-tightest">by</span>
              <span className="font-serif italic text-3xl">Lanzema Leche</span>
              <div className="h-px flex-1 max-w-24 bg-ink" />
            </motion.div>
          </div>

          {/* Right-side: card details (like a Library of Congress catalog) */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-12 lg:col-span-3 lg:pt-12"
          >
            <div className="border border-ink p-6 bg-paper-soft relative">
              <div className="absolute -top-3 left-4 bg-paper-soft px-2">
                <span className="marginalia">Catalog Card №.001</span>
              </div>

              <dl className="space-y-3 text-sm font-sans">
                <div className="flex items-baseline justify-between gap-2 border-b border-ink-line pb-2">
                  <dt className="marginalia">Author</dt>
                  <dd className="font-serif italic">L. Leche</dd>
                </div>
                <div className="flex items-baseline justify-between gap-2 border-b border-ink-line pb-2">
                  <dt className="marginalia">Subject</dt>
                  <dd className="font-mono text-meta">WEB / DEV</dd>
                </div>
                <div className="flex items-baseline justify-between gap-2 border-b border-ink-line pb-2">
                  <dt className="marginalia">Trade</dt>
                  <dd className="text-right">React, TS, Next</dd>
                </div>
                <div className="flex items-baseline justify-between gap-2 border-b border-ink-line pb-2">
                  <dt className="marginalia">Region</dt>
                  <dd>Winnipeg, CA</dd>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <dt className="marginalia">Status</dt>
                  <dd className="text-blood font-medium">Open</dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>

        {/* Bottom epigraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-24 lg:mt-32 grid grid-cols-12 gap-6"
        >
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <p className="font-serif italic font-light text-2xl md:text-3xl leading-snug text-ink-soft">
              "I make websites the way an old printer set type — slowly, with
              care, page by page. <span className="text-blood not-italic font-display font-light">No filler. No
              waste. Just the work.</span>"
            </p>
            <div className="mt-6 marginalia">— from the preface</div>
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-4 lg:col-start-9 flex flex-col gap-4">
            <a
              href="#cabinet"
              className="group flex items-center justify-between p-5 border border-ink bg-ink text-paper hover:bg-blood transition-colors duration-300"
            >
              <div className="flex flex-col gap-1">
                <span className="marginalia text-paper/60">III</span>
                <span className="font-display text-xl">View the Cabinet</span>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#correspondence"
              className="group flex items-center justify-between p-5 border border-ink bg-paper hover:bg-paper-deep transition-colors duration-300"
            >
              <div className="flex flex-col gap-1">
                <span className="marginalia text-blood">V</span>
                <span className="font-display text-xl">Begin a project</span>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </motion.div>

        {/* Footer note — like a book footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-24 pt-6 border-t border-ink-line flex items-center justify-between marginalia"
        >
          <span>※ Continue reading below</span>
          <span className="font-serif italic">page 1 of vi</span>
          <span className="hidden md:block">↓ Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

const indexEntries = [
  { num: 'i',   name: 'Colophon',      desc: 'On the author & method',         page: '02', href: '#colophon' },
  { num: 'ii',  name: 'Cabinet',       desc: 'Selected works to date',         page: '04', href: '#cabinet' },
  { num: 'iii', name: 'Tariff',        desc: 'Pricing & engagement',           page: '08', href: '#pricing' },
  { num: 'iv',  name: 'Correspondence', desc: 'How to begin a project',         page: '11', href: '#correspondence' },
];

export default function Index() {
  return (
    <section
      id="index"
      className="relative py-32 md:py-40 bg-ink text-paper border-t border-ink"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 gap-6 mb-12 md:mb-20 pb-6 border-b border-paper/15"
        >
          <div className="col-span-12 md:col-span-2">
            <span className="font-mono text-micro tracking-wider-mono text-paper/60 px-2 py-1 border border-paper/20">
              ii.
            </span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-micro tracking-wider-mono text-paper/60 mb-4">
              Section ii · Index of Contents
            </div>
            <h2 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest text-paper">
              An index<br />
              <span className="font-serif italic font-light text-blood-soft">
                of what follows.
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-2 flex md:justify-end items-end">
            <span className="font-mono text-micro tracking-wider-mono text-paper/60">
              page iii
            </span>
          </div>
        </motion.div>

        {/* Table of contents */}
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {indexEntries.map((entry, i) => (
            <motion.li
              key={entry.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <a
                href={entry.href}
                className="group flex items-baseline gap-4 md:gap-6 py-5 border-b border-paper/15 transition-all duration-500 ease-editorial hover:pl-3"
              >
                {/* Roman numeral */}
                <span className="font-mono text-micro tracking-wider-mono text-blood w-10 flex-shrink-0">
                  {entry.num}
                </span>

                {/* Title */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-display font-light text-2xl md:text-3xl text-paper group-hover:text-blood transition-colors duration-300">
                      {entry.name}
                    </span>
                    <span className="font-serif italic text-paper/50 text-base hidden sm:inline">
                      — {entry.desc}
                    </span>
                  </div>
                </div>

                {/* Dots leader and page number */}
                <span
                  className="hidden md:block flex-1 mx-3 border-b border-dotted border-paper/25 mb-1.5"
                  aria-hidden
                />
                <span className="font-mono text-meta text-paper/60 group-hover:text-blood transition-colors duration-300">
                  {entry.page}
                </span>
              </a>
            </motion.li>
          ))}
        </ol>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-6 border-t border-paper/15 flex items-center justify-between flex-wrap gap-4"
        >
          <span className="font-mono text-micro tracking-wider-mono text-paper/60">
            ※ Click any entry to navigate
          </span>
          <span className="font-serif italic text-paper/50">
            iv chapters in total
          </span>
        </motion.div>
      </div>
    </section>
  );
}

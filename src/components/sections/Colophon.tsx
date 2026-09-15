'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'React',           years: 'V years', tier: 'fluent' },
  { name: 'TypeScript',      years: 'III years', tier: 'fluent' },
  { name: 'Next.js',         years: 'II years', tier: 'fluent' },
  { name: 'Vite',            years: 'II years', tier: 'fluent' },
  { name: 'Node.js',         years: 'IV years', tier: 'fluent' },
  { name: 'Tailwind CSS',    years: 'III years', tier: 'fluent' },
  { name: 'Framer Motion',   years: 'II years', tier: 'comfortable' },
  { name: 'Three.js',        years: 'I year',  tier: 'comfortable' },
  { name: 'Git / GitHub',    years: 'V years', tier: 'fluent' },
  { name: 'Figma',           years: 'II years', tier: 'comfortable' },
];

export default function Colophon() {
  return (
    <section
      id="colophon"
      className="relative py-32 md:py-40 border-t border-ink-line"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 gap-6 mb-16 md:mb-24 pb-6 border-b border-ink"
        >
          <div className="col-span-12 md:col-span-2">
            <span className="page-marker">i.</span>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="marginalia mb-4">Section i ·  Colophon</div>
            <h2 className="editorial-title">
              Notes on the
              <br />
              <em className="font-serif italic font-light text-blood">
                author &amp; method.
              </em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-end">
            <span className="marginalia">page ii of vi</span>
          </div>
        </motion.div>

        {/* Two-column body */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-12 lg:col-span-7 lg:col-start-3"
          >
            {/* Drop cap first paragraph */}
            <p className="text-ink-soft text-lg md:text-xl leading-relaxed">
              <span className="float-left font-display font-medium text-7xl md:text-8xl leading-[0.8] mr-3 mt-1 text-blood">
                I
              </span>
              {' '}
              came to web development the way most self-taught people do —
              tinkering, breaking, fixing. What started as a curiosity turned
              into shipping real production sites for real businesses, and
              somewhere along the way it became a craft.
            </p>

            <p className="mt-8 text-ink-soft text-lg leading-relaxed">
              I work mostly in <strong className="text-ink font-medium">React</strong> and{' '}
              <strong className="text-ink font-medium">TypeScript</strong>, with
              <strong className="text-ink font-medium"> Next.js</strong> as my
              preferred frame. I care about clean code, clear communication,
              and websites that don't waste a visitor's time. When something is
              worth saying, I want to say it well — in code as in writing.
            </p>

            <p className="mt-6 text-ink-soft text-lg leading-relaxed">
              I'm based in Winnipeg, but I work with anyone who has good ideas
              and treats their visitors with respect. The web is at its best
              when it serves real people doing real things.
            </p>

            {/* Pull quote */}
            <div className="mt-12 pl-6 border-l-2 border-blood">
              <p className="font-serif italic font-light text-2xl md:text-3xl text-ink leading-snug">
                "Make it small. Make it fast. Make it true. The rest is decoration."
              </p>
              <div className="mt-3 marginalia">— working principle</div>
            </div>
          </motion.div>

          {/* Toolkit column */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="col-span-12 lg:col-span-2 lg:col-start-10 lg:row-start-1 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="marginalia mb-6 pb-3 border-b border-ink">
              ﹝Toolkit﹞
            </div>
            <ul className="space-y-1">
              {skills.map((skill, i) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.04 }}
                  className="flex items-baseline justify-between gap-2 py-1.5 border-b border-ink-line/60"
                >
                  <span className="font-sans text-sm text-ink">
                    {skill.name}
                  </span>
                  <span className="font-mono text-micro text-ink-faded">
                    {skill.years}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

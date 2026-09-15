'use client';

import { motion } from 'framer-motion';

interface Project {
  num: string;
  name: string;
  type: string;
  year: string;
  description: string;
  longDescription?: string;
  tags: string[];
  url: string;
  status: 'shipped' | 'in-progress' | 'placeholder';
  highlight?: string;
}

const projects: Project[] = [
  {
    num: '001',
    name: 'Kingmakers International Ministries',
    type: 'Church Website',
    year: 'MMXXVI',
    description:
      'Full redesign for a Winnipeg-based ministry. Cinematic dark heroes with custom design system across five pages.',
    longDescription:
      'Built from scratch with React, TypeScript, and Vite. Features include lightbox photo galleries, multi-section layouts, custom typography pairing of Archivo Black + Instrument Serif, and deployment to Vercel with custom domain.',
    tags: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    url: 'https://www.kingmakersinternationalministries.com',
    status: 'shipped',
    highlight: 'Five pages · 22MB → 3MB optimized',
  },
  {
    num: '002',
    name: 'Project Two — replace this',
    type: 'Coming soon',
    year: 'MMXXVI',
    description:
      'Add your second project here. Edit src/components/sections/Cabinet.tsx and replace this card.',
    tags: ['React', 'Tailwind'],
    url: '#',
    status: 'placeholder',
  },
  {
    num: '003',
    name: 'Project Three — replace this',
    type: 'Coming soon',
    year: 'MMXXVI',
    description:
      'Add your third project here. Edit src/components/sections/Cabinet.tsx and replace this card.',
    tags: ['Next.js', 'TypeScript'],
    url: '#',
    status: 'placeholder',
  },
];

export default function Cabinet() {
  return (
    <section
      id="cabinet"
      className="relative py-32 md:py-40 border-t border-ink-line"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 gap-6 mb-16 md:mb-24 pb-6 border-b border-ink"
        >
          <div className="col-span-12 md:col-span-2">
            <span className="page-marker">iii.</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="marginalia mb-4">Section iii · The Cabinet</div>
            <h2 className="editorial-title">
              Selected works,
              <br />
              <em className="font-serif italic font-light text-blood">
                catalogued.
              </em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-2 flex md:justify-end items-end">
            <span className="marginalia">page iv–vii</span>
          </div>
        </motion.div>

        {/* Project list — like museum specimens */}
        <ol className="space-y-0">
          {projects.map((project, i) => (
            <ProjectCard key={project.num} project={project} index={i} />
          ))}
        </ol>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <span className="h-px flex-1 bg-ink-line max-w-32" />
          <span className="marginalia">end of catalog · iii items</span>
          <span className="h-px flex-1 bg-ink-line max-w-32" />
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPlaceholder = project.status === 'placeholder';
  const isExternal = project.url.startsWith('http');

  const Wrapper = isPlaceholder ? 'div' : 'a';
  const wrapperProps = isPlaceholder
    ? {}
    : {
        href: project.url,
        target: isExternal ? '_blank' : undefined,
        rel: isExternal ? 'noopener noreferrer' : undefined,
      };

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <Wrapper
        {...wrapperProps}
        className={`group block py-12 md:py-16 border-t border-ink-line transition-all duration-500 ease-editorial ${
          isPlaceholder ? 'opacity-50' : 'hover:bg-paper-soft'
        }`}
      >
        <div className="grid grid-cols-12 gap-6">
          {/* Roman numeral / specimen number */}
          <div className="col-span-12 md:col-span-2">
            <div className="font-display font-light text-7xl md:text-8xl tracking-tightest text-ink-faded group-hover:text-blood transition-colors duration-500">
              {project.num}
            </div>
            <div className="marginalia mt-2">{project.year}</div>
          </div>

          {/* Project body */}
          <div className="col-span-12 md:col-span-7">
            <div className="marginalia mb-3 flex items-center gap-3">
              <span>{project.type}</span>
              {project.status === 'shipped' && (
                <>
                  <span className="text-ink-line">·</span>
                  <span className="text-blood flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blood" />
                    Shipped
                  </span>
                </>
              )}
              {project.status === 'in-progress' && (
                <>
                  <span className="text-ink-line">·</span>
                  <span className="text-ink-muted">In progress</span>
                </>
              )}
            </div>

            <h3 className="font-display font-light text-3xl md:text-5xl tracking-tightest text-ink leading-[1.05] mb-4">
              {project.name}
            </h3>

            <p className="font-serif text-lg text-ink-soft leading-relaxed max-w-2xl mb-6">
              {project.description}
            </p>

            {project.longDescription && (
              <p className="text-base text-ink-muted leading-relaxed max-w-2xl mb-6">
                {project.longDescription}
              </p>
            )}

            <div className="flex items-center gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-micro tracking-wider-mono text-ink-muted px-2.5 py-1 border border-ink-line"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right side — visit prompt */}
          <div className="col-span-12 md:col-span-3 flex md:justify-end md:items-start">
            {!isPlaceholder ? (
              <div className="flex flex-col gap-2 md:items-end">
                {project.highlight && (
                  <div className="marginalia md:text-right">
                    {project.highlight}
                  </div>
                )}
                <span className="font-mono text-meta uppercase tracking-wider-mono text-ink group-hover:text-blood transition-colors duration-300 inline-flex items-center gap-2 mt-2">
                  Visit specimen
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </span>
              </div>
            ) : (
              <span className="marginalia">— awaiting addition</span>
            )}
          </div>
        </div>
      </Wrapper>
    </motion.li>
  );
}

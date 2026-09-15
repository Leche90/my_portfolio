'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function HeroBeta() {
  const volumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!volumeRef.current) return;
      const rect = volumeRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = ((e.clientY - cy) / 30).toFixed(1);
      const ry = ((e.clientX - cx) / 30).toFixed(1);
      volumeRef.current.style.setProperty('--rx', `${-rx}deg`);
      volumeRef.current.style.setProperty('--ry', `${ry}deg`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-12 overflow-hidden">
      {/* Background grid — like a type-specimen sheet */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(theme('colors.ink.DEFAULT') 1px, transparent 1px),
            linear-gradient(90deg, theme('colors.ink.DEFAULT') 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        {/* Header strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-ink"
        >
          <div className="marginalia flex items-center gap-3">
            <span className="text-blood font-medium">SPECIMEN №.001</span>
            <span className="text-ink-line">/</span>
            <span>Set in Bricolage & Newsreader</span>
          </div>
          <div className="marginalia">MMXXVI · WINNIPEG</div>
        </motion.div>

        {/* Main display */}
        <div className="grid grid-cols-12 gap-6 mt-12 md:mt-16">
          {/* Left — typographic display */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="marginalia mb-6"
            >
              ﹝Display Sans · 12pt → 240pt﹞
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="font-display font-light text-[clamp(4rem,16vw,16rem)] leading-[0.82] tracking-tightest text-ink"
            >
              Aa
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-2 -ml-1 grid grid-cols-12"
            >
              <div className="col-span-9">
                <h2 className="font-serif italic font-light text-[clamp(2rem,7vw,6rem)] leading-[0.9] text-ink tracking-tightest">
                  building <span className="text-blood">things</span>
                </h2>
                <h2 className="font-display font-light text-[clamp(2rem,7vw,6rem)] leading-[0.9] tracking-tightest text-ink mt-1">
                  on the open web.
                </h2>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 max-w-xl font-sans text-lg text-ink-soft leading-relaxed"
            >
              I'm <strong className="font-medium text-ink">Lanzema</strong> — an
              independent web developer in Winnipeg. I build small, careful
              websites for businesses, churches, and creators who'd rather
              ship something good than something flashy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#cabinet"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-ink text-paper font-mono text-meta uppercase tracking-wider-mono hover:bg-blood transition-colors duration-300"
              >
                Browse the cabinet
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#correspondence"
                className="group inline-flex items-center gap-3 px-7 py-4 border border-ink text-ink font-mono text-meta uppercase tracking-wider-mono hover:bg-ink hover:text-paper transition-colors duration-300"
              >
                Send a note
              </a>
            </motion.div>
          </div>

          {/* Right — 3D specimen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-5 flex items-start justify-center lg:justify-end pt-8 lg:pt-0"
            style={{ perspective: '1400px' }}
          >
            <div className="relative">
              {/* Crosshair register marks */}
              <div className="absolute -top-4 -left-4 w-3 h-3 border-l border-t border-ink" />
              <div className="absolute -top-4 -right-4 w-3 h-3 border-r border-t border-ink" />
              <div className="absolute -bottom-4 -left-4 w-3 h-3 border-l border-b border-ink" />
              <div className="absolute -bottom-4 -right-4 w-3 h-3 border-r border-b border-ink" />

              {/* The volume */}
              <div
                ref={volumeRef}
                className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(var(--rx, -8deg)) rotateY(var(--ry, 18deg))',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  animation: 'specimen-rotate 30s linear infinite',
                }}
              >
                <style>{`
                  @keyframes specimen-rotate {
                    0% { transform: rotateX(-8deg) rotateY(0deg); }
                    100% { transform: rotateX(-8deg) rotateY(360deg); }
                  }
                `}</style>

                {/* Front — book cover */}
                <div
                  className="absolute inset-0 bg-paper-deep border border-ink p-8 flex flex-col justify-between"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <div className="marginalia">VOL · I</div>
                  <div>
                    <div className="font-display font-light text-6xl md:text-7xl leading-[0.85] tracking-tightest">
                      The
                      <br />
                      <span className="text-blood font-serif italic">Index</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="marginalia">L. Leche</span>
                    <span className="font-mono text-meta">№.001</span>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 bg-ink border border-ink p-8 flex flex-col justify-center items-center"
                  style={{ transform: 'translateZ(-40px) rotateY(180deg)' }}
                >
                  <span className="font-serif italic text-paper text-5xl">
                    fin.
                  </span>
                </div>

                {/* Right edge */}
                <div
                  className="absolute top-0 right-0 h-full bg-paper-aged border-y border-ink"
                  style={{
                    width: '80px',
                    transform: 'rotateY(90deg) translateZ(220px)',
                    transformOrigin: 'right',
                  }}
                />
                {/* Left edge — book spine */}
                <div
                  className="absolute top-0 left-0 h-full bg-blood border-y border-ink flex items-center justify-center"
                  style={{
                    width: '80px',
                    transform: 'rotateY(-90deg) translateZ(140px)',
                    transformOrigin: 'left',
                  }}
                >
                  <span
                    className="font-display font-medium text-paper text-xl tracking-wider whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    L. LECHE · MMXXVI
                  </span>
                </div>

                {/* Top */}
                <div
                  className="absolute top-0 left-0 w-full bg-paper border-x border-ink"
                  style={{
                    height: '80px',
                    transform: 'rotateX(90deg) translateZ(40px)',
                    transformOrigin: 'top',
                  }}
                />
                {/* Bottom */}
                <div
                  className="absolute bottom-0 left-0 w-full bg-paper-deep border-x border-ink"
                  style={{
                    height: '80px',
                    transform: 'rotateX(-90deg) translateZ(40px)',
                    transformOrigin: 'bottom',
                  }}
                />
              </div>

              {/* Bottom caption */}
              <div className="mt-8 marginalia text-center">
                ﹝Fig. 1 — Drag mouse to inspect specimen﹞
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 pt-6 border-t border-ink flex items-center justify-between flex-wrap gap-4 marginalia"
        >
          <span>↓ The colophon follows</span>
          <span>SPECIMEN №.001 · printed at Winnipeg, MMXXVI</span>
        </motion.div>
      </div>
    </section>
  );
}

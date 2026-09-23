"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/shared/Magnetic";
import { heroContent } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden border-b border-line px-6 sm:px-10"
    >
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_50%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center pt-32"
      >
        
      <motion.div 
        variants={item} 
        className="mb-6 flex items-center gap-3 font-sans text-sm font-semibold uppercase tracking-wider text-cyan"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-cyan animate-pulse" />
        <div className="h-5 overflow-hidden relative flex flex-col justify-start">
          <motion.div
            animate={{ y: ["0%", "-33.3%", "-66.6%", "0%"] }}
            transition={{ 
              duration: 9, 
              repeat: Infinity, 
              ease: [0.76, 0, 0.24, 1],
              times: [0, 0.33, 0.66, 1] 
            }}
            className="flex flex-col gap-2"
          >
            <span className="block h-5">Cross-Platform Digital Products</span>
            <span className="block h-5">Full-Stack Solutions</span>
            <span className="block h-5">Fast & Secure Systems</span>
          </motion.div>
        </div>
      </motion.div>


        <h1 className="max-w-3xl font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {heroContent.headlineLines.map((line, i) => (
            <motion.span key={line} variants={item} className="block text-balance">
              {i === 1 ? (
                <span className="bg-gradient-to-r from-indigo-soft to-cyan bg-clip-text text-transparent">
                  {line}
                </span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
        >
          {heroContent.subhead}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo px-8 py-4 font-semibold text-ink shadow-glow-indigo transition-all hover:scale-[1.02] hover:bg-indigo-soft"
              >
              View My Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              Let's Talk
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl pb-10"
      >
        {/* <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4 shadow-xl">
          {heroContent.metrics.map((metric) => (
            <div key={metric.label} className="bg-panel/95 px-6 py-6 backdrop-blur-sm transition-colors hover:bg-panel/50">
              <div className="font-display text-3xl font-bold text-ink sm:text-4xl">
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-muted">{metric.label}</div>
            </div>
          ))}
        </div> */}

        <div className="mt-8 flex justify-center text-faint">
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

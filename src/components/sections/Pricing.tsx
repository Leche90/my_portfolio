'use client';

import { motion } from 'framer-motion';

interface Tariff {
  num: string;
  name: string;
  tagline: string;
  price: string;
  delivery: string;
  includes: string[];
  notable?: boolean;
}

const tariffs: Tariff[] = [
  {
    num: 'I',
    name: 'A Page',
    tagline: 'A single, polished landing page.',
    price: 'from CAD $800',
    delivery: 'i — ii weeks',
    includes: [
      'Custom design from scratch',
      'Mobile responsive build',
      'Contact form integration',
      'Search engine basics',
      'Hosting & domain setup',
      'One round of revisions',
    ],
  },
  {
    num: 'II',
    name: 'A Site',
    tagline: 'A multi-page website for businesses, churches, & creators.',
    price: 'from CAD $2,000',
    delivery: 'iii — v weeks',
    includes: [
      'Up to viii custom pages',
      'Bespoke design system',
      'Mobile responsive build',
      'Contact form & integrations',
      'Performance optimisation',
      'Hosting & domain setup',
      'XXX days of post-launch care',
    ],
    notable: true,
  },
  {
    num: 'III',
    name: 'An Atelier',
    tagline: 'Larger commissions, applications, anything bespoke.',
    price: "let's discuss",
    delivery: 'project-based',
    includes: [
      'Discovery & scoping call',
      'Custom design & development',
      'API & service integrations',
      'Database / backend if required',
      'Ongoing care arrangements',
      'Senior-level attention',
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-32 md:py-40 bg-paper-deep border-t border-ink-line"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-12 gap-6 mb-16 md:mb-24 pb-6 border-b border-ink"
        >
          <div className="col-span-12 md:col-span-2">
            <span className="page-marker">iv.</span>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="marginalia mb-4">Section iv · Tariff &amp; Engagement</div>
            <h2 className="editorial-title">
              An honest list
              <br />
              <em className="font-serif italic font-light text-blood">
                of prices.
              </em>
            </h2>
            <p className="mt-8 max-w-2xl font-serif text-lg text-ink-soft leading-relaxed">
              Three engagement tiers. Clear timelines. No hidden fees. Every
              project begins with a discovery call so we're aligned before a
              single line of code is written.
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 flex md:justify-end items-end">
            <span className="marginalia">page viii–x</span>
          </div>
        </motion.div>

        {/* Tariff cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tariffs.map((tariff, i) => (
            <TariffCard key={tariff.num} tariff={tariff} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 marginalia text-center"
        >
          ※ All prices in Canadian dollars. Payment: 50% upon engagement, 50%
          upon delivery. Discounts available for non-profits &amp; churches.
        </motion.p>
      </div>
    </section>
  );
}

function TariffCard({ tariff, index }: { tariff: Tariff; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex flex-col p-8 border ${
        tariff.notable
          ? 'border-ink bg-ink text-paper -translate-y-2'
          : 'border-ink-line bg-paper text-ink hover:border-ink'
      } transition-colors duration-300`}
    >
      {tariff.notable && (
        <div className="absolute -top-3 left-6 bg-blood text-paper px-3 py-1 font-mono text-micro tracking-wider-mono">
          ◆ MOST CHOSEN
        </div>
      )}

      {/* Top */}
      <div className="flex items-baseline justify-between border-b pb-4 mb-6 ${tariff.notable ? 'border-paper/15' : 'border-ink-line'}">
        <span
          className={`font-display font-light text-5xl tracking-tightest ${
            tariff.notable ? 'text-blood-soft' : 'text-blood'
          }`}
        >
          {tariff.num}
        </span>
        <span
          className={`font-mono text-micro tracking-wider-mono ${
            tariff.notable ? 'text-paper/60' : 'text-ink-muted'
          }`}
        >
          {tariff.delivery}
        </span>
      </div>

      {/* Name */}
      <h3
        className={`font-display font-light text-3xl md:text-4xl tracking-tightest mb-3 ${
          tariff.notable ? 'text-paper' : 'text-ink'
        }`}
      >
        {tariff.name}
      </h3>

      <p
        className={`font-serif italic text-lg leading-snug mb-8 ${
          tariff.notable ? 'text-paper/70' : 'text-ink-muted'
        }`}
      >
        {tariff.tagline}
      </p>

      {/* Price */}
      <div className="mb-8">
        <div
          className={`font-display font-light text-3xl tracking-tightest ${
            tariff.notable ? 'text-blood-soft' : 'text-ink'
          }`}
        >
          {tariff.price}
        </div>
      </div>

      {/* Includes */}
      <ul className="space-y-3 flex-1 mb-8">
        {tariff.includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed"
          >
            <span
              className={`flex-shrink-0 mt-0.5 ${
                tariff.notable ? 'text-blood-soft' : 'text-blood'
              }`}
            >
              ✓
            </span>
            <span
              className={tariff.notable ? 'text-paper/85' : 'text-ink-soft'}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#correspondence"
        className={`group inline-flex items-center justify-center gap-2 px-6 py-4 font-mono text-meta uppercase tracking-wider-mono transition-colors duration-300 ${
          tariff.notable
            ? 'bg-paper text-ink hover:bg-blood hover:text-paper'
            : 'bg-ink text-paper hover:bg-blood'
        }`}
      >
        Begin
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </motion.div>
  );
}

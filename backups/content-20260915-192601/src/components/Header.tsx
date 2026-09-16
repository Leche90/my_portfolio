'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-editorial ${
        scrolled
          ? 'py-3 bg-paper/90 backdrop-blur-md border-b border-ink-line'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between gap-6">
        {/* Brand mark — like a book spine label */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="page-marker !p-0 !border-0 font-display font-bold text-base tracking-tightest text-ink">
            ﹝LL﹞
          </span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-medium text-sm text-ink">
              Lanzema Leche
            </span>
            <span className="marginalia">The Index · MMXXVI</span>
          </div>
        </a>

        {/* Nav — index entries */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Colophon', href: '#colophon', num: 'i' },
            { label: 'Index', href: '#index', num: 'ii' },
            { label: 'Cabinet', href: '#cabinet', num: 'iii' },
            { label: 'Tariff', href: '#pricing', num: 'iv' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-baseline gap-2 editorial-link"
            >
              <span className="marginalia text-blood">{item.num}</span>
              <span className="font-sans text-sm text-ink hover:text-blood transition-colors duration-300">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#correspondence"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-paper font-mono text-meta uppercase tracking-wider-mono hover:bg-blood transition-colors duration-300 ease-editorial"
        >
          Correspondence
          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            →
          </span>
        </a>
      </div>
    </header>
  );
}

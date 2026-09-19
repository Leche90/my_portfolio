'use client';

export default function Footer() {
  const year = new Date().getFullYear();
  const romanYear = 'MMXXVI'; // For 2026

  return (
    <footer className="bg-ink text-paper border-t border-ink">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24 py-20">
        {/* Top: large imprint */}
        <div className="grid grid-cols-12 gap-6 mb-16 pb-12 border-b border-paper/15">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-micro tracking-wider-mono text-blood-soft mb-6">
              ◆ End of Volume I ◆
            </div>
            <h3 className="font-display font-light text-5xl md:text-7xl tracking-tightest text-paper leading-[0.95] mb-6">
              The Index of <br />
              <span className="font-serif italic text-blood-soft">L. Leche</span>
            </h3>
            <p className="font-serif italic text-paper/70 text-xl">
              First edition · printed digitally · open for revision.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="font-mono text-micro tracking-wider-mono text-paper/50 mb-4">
                  Navigate
                </div>
                <ul className="space-y-2">
                  {[
                    { label: 'Colophon', href: '#colophon' },
                    { label: 'Index', href: '#index' },
                    { label: 'Cabinet', href: '#cabinet' },
                    { label: 'Tariff', href: '#pricing' },
                    { label: 'Letters', href: '#correspondence' },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-paper/80 hover:text-blood-soft transition-colors text-sm"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-mono text-micro tracking-wider-mono text-paper/50 mb-4">
                  Elsewhere
                </div>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:oldigital07@gmail.com"
                      className="text-paper/80 hover:text-blood-soft transition-colors text-sm"
                    >
                      Email ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Leche90"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/80 hover:text-blood-soft transition-colors text-sm"
                    >
                      GitHub ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/lanzemaleche"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper/80 hover:text-blood-soft transition-colors text-sm"
                    >
                      LinkedIn ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: imprint info */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-micro tracking-wider-mono text-paper/50 mb-2">
              Composed in
            </div>
            <div className="font-serif text-paper/80">
              Bricolage Grotesque<br />
              &amp; Newsreader
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-micro tracking-wider-mono text-paper/50 mb-2">
              Built with
            </div>
            <div className="font-serif text-paper/80">
              Next.js · TypeScript<br />
              &amp; Tailwind CSS
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-micro tracking-wider-mono text-paper/50 mb-2">
              Hosted at
            </div>
            <div className="font-serif text-paper/80">
              Vercel · global edge<br />
              from Winnipeg, CA
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 md:text-right">
            <div className="font-display font-light text-3xl tracking-tightest text-paper">
              {romanYear}
            </div>
            <div className="font-mono text-micro tracking-wider-mono text-paper/50 mt-2">
              © {year} L. Leche · all rights reserved
            </div>
          </div>
        </div>

        {/* Final mark */}
        <div className="mt-16 pt-6 border-t border-paper/15 flex items-center justify-center">
          <span className="font-serif italic text-paper/40 text-2xl">fin.</span>
        </div>
      </div>
    </footer>
  );
}

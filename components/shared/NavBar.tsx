"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" }
];

export default function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-bg/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#home" data-cursor-pointer className="font-display text-sm font-semibold tracking-tight text-ink">
          Lanzema Leche
        </a>
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor-pointer
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          data-cursor-pointer
          className="rounded-full border border-line px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-cyan/50 hover:text-cyan sm:hidden"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}

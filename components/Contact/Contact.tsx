"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import MagneticSocials from "./MagneticSocials";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Building something that needs to scale?
          </h2>
          <p className="mt-4 max-w-md text-balance text-muted">
            I&apos;m open to full-stack and backend-leaning roles, and to
            select contract work on systems with real engineering problems.
            Reach out directly, or find me here.
          </p>
          <div className="mt-8">
            <MagneticSocials />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-line bg-panel p-6 sm:p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

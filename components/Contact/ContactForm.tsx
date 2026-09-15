"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FieldState = "empty" | "invalid" | "valid";
type SubmitState = "idle" | "sending" | "sent";

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const nameState: FieldState = !touched.name ? "empty" : name.trim().length > 1 ? "valid" : "invalid";
  const emailState: FieldState = !touched.email ? "empty" : validateEmail(email) ? "valid" : "invalid";
  const messageState: FieldState = !touched.message ? "empty" : message.trim().length > 9 ? "valid" : "invalid";

  const isValid = nameState === "valid" && emailState === "valid" && messageState === "valid";

  const fieldClasses = (state: FieldState) =>
    cn(
      "w-full rounded-lg border bg-elevated px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-faint",
      state === "invalid" && "border-rose/60 focus:border-rose",
      state === "valid" && "border-green/50 focus:border-green",
      state === "empty" && "border-line focus:border-cyan/50"
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;

    // ---------------------------------------------------------------------
    // SWAP-IN: replace with a real submission (API route, Formspree, email
    // service, etc). This mock just simulates network latency.
    // ---------------------------------------------------------------------
    setSubmitState("sending");
    setTimeout(() => {
      setSubmitState("sent");
    }, 1200);
  };

  if (submitState === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-green/30 bg-green/5 px-6 py-14 text-center"
      >
        <CheckCircle2 className="h-8 w-8 text-green" />
        <p className="font-display text-lg font-semibold text-ink">Message sent</p>
        <p className="max-w-xs text-sm text-muted">
          Thanks for reaching out — I read every message and reply within a
          couple of days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-muted">
          Name
        </label>
        <div className="relative">
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            placeholder="Jordan Lee"
            className={fieldClasses(nameState)}
          />
          {nameState === "invalid" && (
            <AlertCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-rose" />
          )}
          {nameState === "valid" && (
            <CheckCircle2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green" />
          )}
        </div>
        {nameState === "invalid" && (
          <p className="mt-1.5 text-xs text-rose">Enter your name.</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-muted">
          Email
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            placeholder="jordan@company.com"
            className={fieldClasses(emailState)}
          />
          {emailState === "invalid" && (
            <AlertCircle className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-rose" />
          )}
          {emailState === "valid" && (
            <CheckCircle2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green" />
          )}
        </div>
        {emailState === "invalid" && (
          <p className="mt-1.5 text-xs text-rose">Enter a valid email address.</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          placeholder="Tell me about the system you're building..."
          className={cn(fieldClasses(messageState), "resize-none")}
        />
        {messageState === "invalid" && (
          <p className="mt-1.5 text-xs text-rose">Say a little more — at least 10 characters.</p>
        )}
      </div>

      <button
        type="submit"
        data-cursor-pointer
        disabled={submitState === "sending"}
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-indigo px-6 py-3 font-medium text-ink shadow-glow-indigo transition-colors hover:bg-indigo-soft disabled:opacity-70"
      >
        {submitState === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send message
          </>
        )}
      </button>
    </form>
  );
}

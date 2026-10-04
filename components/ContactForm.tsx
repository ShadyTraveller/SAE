"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inputClass =
  "w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[15px] text-ink placeholder:text-neutral-400 outline-none transition-all duration-200 focus:border-brand-deep focus:bg-white focus:ring-4 focus:ring-brand/30";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    // Front-end demo: swap in a real endpoint (Formspree, Resend, etc.) later.
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="flex min-h-[380px] flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.1 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-brand"
            >
              <span className="material-symbols-outlined text-3xl font-bold text-ink">
                check
              </span>
            </motion.span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight">
              Message received
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">
              Thanks for reaching out — we&apos;ll reply within one business day.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-medium text-neutral-500 underline-offset-4 hover:text-ink hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">Name</span>
                <input required name="name" placeholder="Jane Doe" className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Company</span>
              <input name="company" placeholder="Company Inc." className={inputClass} />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                What are you deciding on?
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us about the decision in front of you…"
                className={`${inputClass} resize-none`}
              />
            </label>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-white transition-opacity disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-xl">
                    progress_activity
                  </span>
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </>
              )}
            </motion.button>

            <p className="text-center text-xs text-neutral-400">
              Prefer email?{" "}
              <a href="mailto:hello@sae.llc" className="font-medium text-ink underline-offset-2 hover:underline">
                hello@sae.llc
              </a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

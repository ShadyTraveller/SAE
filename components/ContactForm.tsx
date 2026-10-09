"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Icon } from "./Icon";

const inputClass =
  "w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[15px] text-ink placeholder:text-neutral-400 outline-none transition-all duration-200 focus:border-brand-deep focus:bg-white focus:ring-4 focus:ring-brand/30";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    setError(null);
    try {
      if (!supabase) throw new Error("Form backend is not configured.");
      const formData = new FormData(e.currentTarget);
      const payload = {
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        company: String(formData.get("company") ?? "").trim() || null,
        message: String(formData.get("message") ?? "").trim(),
      };
      const { error: insertError } = await supabase
        .from("contact_submissions")
        .insert(payload);
      if (insertError) throw insertError;
      // Fire-and-forget email notification to the team inbox.
      // The submission is already saved; a notification failure shouldn't
      // block the success state.
      fetch("/api/contact/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
      setStatus("sent");
    } catch {
      setError(
        "Something went wrong sending your message. Please try again or email us directly at info@sae.llc."
      );
      setStatus("idle");
    }
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
              <Icon name="check" className="h-8 w-8 text-ink" />
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

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                  role="alert"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-white transition-opacity disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Icon name="progress_activity" className="h-5 w-5 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Icon name="arrow_forward" className="h-5 w-5" />
                </>
              )}
            </motion.button>

            <p className="text-center text-xs text-neutral-400">
              Prefer email?{" "}
              <a href="mailto:info@sae.llc" className="font-medium text-ink underline-offset-2 hover:underline">
                info@sae.llc
              </a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "@/lib/site";

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: (index % 3) * 0.08,
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      whileHover={{ y: -4, boxShadow: "0 14px 34px rgba(0,0,0,0.08)" }}
      onClick={() => setOpen((o) => !o)}
      className={`cursor-pointer rounded-3xl border bg-white p-6 transition-colors duration-200 ${
        open ? "border-brand" : "border-neutral-200 hover:border-neutral-300"
      }`}
      aria-expanded={open}
    >
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand/25">
        <span className="material-symbols-outlined text-[26px] text-ink">
          {service.icon}
        </span>
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        {service.blurb}
      </p>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink">
        What&apos;s included
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="material-symbols-outlined text-xl"
        >
          expand_more
        </motion.span>
      </span>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2.5 border-t border-neutral-100 pt-4">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand">
                    <span className="material-symbols-outlined text-[14px] font-bold text-ink">
                      check
                    </span>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

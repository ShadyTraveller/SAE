"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STEPS } from "@/lib/site";
import { Icon } from "./Icon";

export function ProcessTabs() {
  const [activeId, setActiveId] = useState(STEPS[0].id);
  const step = STEPS.find((s) => s.id === activeId) ?? STEPS[0];

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Our process"
        className="flex gap-1 overflow-x-auto rounded-full border border-neutral-200 bg-neutral-50 p-1.5"
      >
        {STEPS.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(s.id)}
              className="relative min-w-[104px] flex-1 rounded-full px-3 py-2.5 text-sm font-medium whitespace-nowrap"
            >
              {isActive && (
                <motion.span
                  layoutId="process-tab-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  className="absolute inset-0 rounded-full bg-ink"
                />
              )}
              <span
                className={`relative z-10 flex items-center justify-center gap-1.5 ${
                  isActive ? "text-white" : "text-neutral-500"
                }`}
              >
                <span className="text-xs opacity-60 tabular-nums">{s.index}</span>
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          role="tabpanel"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm sm:p-10"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-7xl font-extrabold tracking-tighter text-ink tabular-nums">
                {step.index}
              </p>
              <div className="mt-3 h-1.5 w-14 rounded-full bg-brand" />
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                {step.title}
              </h2>
              <p className="mt-1 text-[15px] font-medium text-brand-deep">
                {step.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600">
                <Icon name="schedule" className="h-4 w-4" />
                {step.duration}
              </span>
            </div>

            <div>
              <p className="leading-relaxed text-neutral-600">{step.description}</p>
              <p className="mt-6 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                You get
              </p>
              <ul className="mt-3 space-y-2.5">
                {step.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-[15px] text-ink">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand">
                      <Icon name="check" className="h-3.5 w-3.5 text-ink" />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

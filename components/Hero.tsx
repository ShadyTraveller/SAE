"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 20 } as const,
  },
};

const METRICS = [
  { icon: "trending_up", label: "Revenue growth", value: "+38%", width: "76%" },
  { icon: "savings", label: "Cost efficiency", value: "+24%", width: "58%" },
  { icon: "groups", label: "Team capacity", value: "+51%", width: "86%" },
];

function SnapshotCard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 34, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
        className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-900/[0.07]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-deep opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-deep" />
            </span>
            <p className="text-sm font-semibold text-ink">Q3 Growth Sprint</p>
          </div>
          <span className="rounded-full bg-brand/30 px-2.5 py-1 text-xs font-semibold text-ink">
            Live
          </span>
        </div>

        <div className="mt-6 space-y-5">
          {METRICS.map((m, i) => (
            <div key={m.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-medium text-neutral-600">
                  <span className="material-symbols-outlined text-xl text-neutral-400">
                    {m.icon}
                  </span>
                  {m.label}
                </span>
                <span className="font-semibold text-ink tabular-nums">{m.value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: m.width }}
                  transition={{
                    delay: 0.8 + i * 0.15,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full rounded-full bg-brand"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
          <p className="text-xs text-neutral-400">Updated 2 hours ago</p>
          <div className="flex -space-x-2">
            {["AK", "JM", "RS"].map((initials) => (
              <span
                key={initials}
                className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-ink text-[9px] font-bold text-white"
              >
                {initials}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute -top-5 -right-2 flex items-center gap-1.5 rounded-2xl border border-neutral-200 bg-white px-3.5 py-2.5 shadow-lg shadow-neutral-900/10 sm:-right-5"
      >
        <span className="material-symbols-outlined icon-filled text-xl text-brand-deep">
          bolt
        </span>
        <span className="text-sm font-semibold text-ink">ROI +38%</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.6 }}
        className="absolute -bottom-5 -left-2 flex items-center gap-1.5 rounded-2xl border border-neutral-200 bg-white px-3.5 py-2.5 shadow-lg shadow-neutral-900/10 sm:-left-5"
      >
        <span className="material-symbols-outlined text-xl text-ink">
          shield
        </span>
        <span className="text-sm font-semibold text-ink">Risk: low</span>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-80 w-80 rounded-full bg-brand/25 blur-3xl"
      />
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Consulting for ambitious teams
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-[44px] leading-[1.04] font-semibold tracking-tight text-ink sm:text-6xl"
          >
            Decisions,
            <br />
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-[-6px] bottom-[4%] -z-10 h-[36%] rounded-md bg-brand"
              />
              made clear.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg leading-relaxed text-neutral-500"
          >
            SAE Consulting helps you cut through the noise — sharp strategy,
            leaner operations, and practical AI. Senior advice, no bloated decks.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-shadow hover:shadow-lg"
              >
                Start a project
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
              >
                Our services
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>

        <SnapshotCard />
      </div>
    </section>
  );
}

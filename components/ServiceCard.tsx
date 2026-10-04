"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "@/lib/site";
import { Icon } from "./Icon";

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
      onClick={() => setOpen((o) => !o)}
      className={`cursor-pointer overflow-hidden rounded-3xl border bg-white transition-all duration-200 ${
        open
          ? "border-brand shadow-lg shadow-neutral-900/[0.06]"
          : "border-neutral-200 hover:border-neutral-300 hover:shadow-md hover:shadow-neutral-900/[0.05]"
      }`}
      aria-expanded={open}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-50">
        <Image
          src={service.image}
          alt={`${service.title} illustration`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/25">
            <Icon name={service.icon} className="h-5 w-5 text-ink" />
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-ink">
            {service.title}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-neutral-500">
          {service.blurb}
        </p>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink">
          What&apos;s included
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="inline-flex"
          >
            <Icon name="expand_more" className="h-5 w-5" />
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
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-neutral-600"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand">
                      <Icon name="check" className="h-3.5 w-3.5 text-ink" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

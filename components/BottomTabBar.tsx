"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/site";

const spring = { type: "spring", stiffness: 500, damping: 38 } as const;

export function BottomTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/92 backdrop-blur-lg md:hidden"
    >
      <div className="grid grid-cols-4 px-2 pt-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))]">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="relative flex flex-col items-center gap-1 rounded-2xl px-2 py-2"
            >
              {active && (
                <motion.span
                  layoutId="mobile-tab-pill"
                  transition={spring}
                  className="absolute inset-0 rounded-2xl bg-brand/25"
                />
              )}
              <span
                className={`material-symbols-outlined relative z-10 text-[26px] ${
                  active ? "icon-filled text-ink" : "text-neutral-400"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`relative z-10 text-[11px] font-medium ${
                  active ? "text-ink" : "text-neutral-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

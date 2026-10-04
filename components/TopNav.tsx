"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/site";
import { Logo } from "./Logo";

const spring = { type: "spring", stiffness: 420, damping: 34 } as const;

export function TopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 hidden border-b border-neutral-100 bg-white/85 backdrop-blur-md md:block">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="flex items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="desktop-nav-pill"
                    transition={spring}
                    className="absolute inset-0 rounded-full bg-ink"
                  />
                )}
                <span
                  className={`relative z-10 ${
                    active ? "text-white" : "text-neutral-500 hover:text-ink"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}

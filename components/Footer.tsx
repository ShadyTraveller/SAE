import Link from "next/link";
import { NAV_ITEMS, CONTACT_EMAIL, CONTACT_LOCATION } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto w-full max-w-6xl px-4 pt-12 pb-28 sm:px-6 md:pb-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              Clarity for complex decisions. Senior advice, simple process,
              straight answers.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-300">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-brand"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="text-neutral-400">{CONTACT_LOCATION}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SAE Consulting · sae.llc</p>
          <p>Built simple, on purpose.</p>
        </div>
      </div>
    </footer>
  );
}

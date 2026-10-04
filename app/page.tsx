import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { Stat } from "@/components/Stat";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES, STATS } from "@/lib/site";

const WHY_SAE = [
  {
    icon: "workspace_premium",
    title: "Senior only",
    text: "You work directly with experienced advisors — never handed off to juniors learning on your budget.",
  },
  {
    icon: "contract",
    title: "Fixed scope, fixed price",
    text: "We agree on outcomes and cost up front. No hourly meters running, no surprise invoices.",
  },
  {
    icon: "school",
    title: "We leave you stronger",
    text: "Every engagement ends with your team trained and systems documented, so gains stick.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats band */}
      <section className="mt-16 md:mt-24" aria-label="Results">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-10 md:px-12 md:py-14">
            <div aria-hidden className="absolute inset-0 bg-dots-light opacity-30" />
            <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {STATS.map((s) => (
                <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services preview */}
      <section className="mt-16 md:mt-24" aria-label="Services preview">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                What we do
              </h2>
              <p className="mt-3 max-w-lg text-neutral-500">
                Six practices, one goal: better decisions, faster. Tap any card
                to see what&apos;s inside.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden shrink-0 items-center gap-1.5 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink sm:inline-flex"
            >
              All services
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <Reveal className="mt-6 text-center sm:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-ink"
          >
            All services
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </Reveal>
      </section>

      {/* Why SAE */}
      <section className="mt-16 md:mt-24" aria-label="Why SAE">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Why teams pick SAE
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {WHY_SAE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand">
                  <span className="material-symbols-outlined text-2xl text-ink">
                    {item.icon}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 md:mt-24" aria-label="Get started">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-brand px-6 py-12 text-center md:py-16">
            <div aria-hidden className="absolute inset-0 bg-dots opacity-40" />
            <h2 className="relative text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Have a decision to make?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-ink/70">
              Book a free 30-minute intro call. We&apos;ll tell you honestly
              whether we can help — and if not, point you the right way.
            </p>
            <Magnetic className="relative mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-[15px] font-semibold text-white transition-shadow hover:shadow-xl"
              >
                Book a free intro call
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  );
}

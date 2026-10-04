import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ProcessTabs } from "@/components/ProcessTabs";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How SAE Consulting works: Discover, Define, Deliver, Scale — a simple four-phase process with weekly demos and fixed scope.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="Simple on purpose."
        sub="Four phases, weekly demos, zero mystery. You'll always know what's happening, what it costs, and what comes next."
      />

      <ProcessTabs />

      <Reveal className="mt-12">
        <div className="rounded-[28px] bg-ink px-8 py-10 text-center md:py-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-neutral-400">
            Most engagements kick off within two weeks of the first call.
          </p>
          <Magnetic className="mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-[15px] font-semibold text-ink"
            >
              Start with Discover
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </Magnetic>
        </div>
      </Reveal>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/Icon";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, operations, digital & AI, financial advisory, growth, and leadership — six consulting practices from SAE Consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to decide well."
        sub="Six focused practices. Mix and match, or start with one — every engagement is scoped to the decision in front of you."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[28px] border border-neutral-200 bg-neutral-50 p-8 text-center sm:p-10 md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              Not sure which one fits?
            </h2>
            <p className="mt-2 max-w-md text-neutral-500">
              Describe the decision you&apos;re facing — we&apos;ll recommend the
              right starting point, free.
            </p>
          </div>
          <Magnetic className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white"
            >
              Ask us
              <Icon name="arrow_forward" className="h-5 w-5" />
            </Link>
          </Magnetic>
        </div>
      </Reveal>
    </>
  );
}

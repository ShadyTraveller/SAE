import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT_EMAIL, CONTACT_LOCATION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with SAE Consulting — book a free 30-minute intro call or send us a message. Replies within one business day.",
};

const INFO_CARDS = [
  {
    icon: "mail",
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: "location_on",
    label: "Based in",
    value: CONTACT_LOCATION,
  },
  {
    icon: "schedule",
    label: "Response time",
    value: "Within one business day",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your next move."
        sub="Tell us what you're deciding on. We'll reply within one business day — and if we're not the right fit, we'll say so."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {INFO_CARDS.map((card, i) => (
            <Reveal key={card.label} delay={i * 0.07}>
              <div className="flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand/25">
                  <span className="material-symbols-outlined text-2xl text-ink">
                    {card.icon}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium tracking-wide text-neutral-400 uppercase">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="truncate text-[15px] font-semibold text-ink hover:underline"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-[15px] font-semibold text-ink">{card.value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.21}>
            <div className="rounded-3xl bg-ink p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="material-symbols-outlined text-xl text-brand">
                  lightbulb
                </span>
                Good to know
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                The free intro call is 30 minutes, no pitch decks. Bring one
                decision you&apos;re wrestling with — you&apos;ll leave with at
                least one useful idea, whether we work together or not.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-3">
          <ContactForm />
        </Reveal>
      </div>
    </>
  );
}

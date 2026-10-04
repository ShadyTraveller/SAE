import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-deep" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-4 text-lg leading-relaxed text-neutral-500">{sub}</p>
      </Reveal>
    </div>
  );
}

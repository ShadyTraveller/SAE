import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="SAE Consulting home">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-[13px] font-extrabold tracking-tight text-ink">
        SAE
      </span>
      <span
        className={`text-[15px] font-semibold tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        SAE Consulting
      </span>
    </Link>
  );
}

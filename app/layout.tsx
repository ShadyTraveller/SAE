import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sae.llc"),
  title: {
    default: "SAE Consulting — Management, Security & AI Integration",
    template: "%s · SAE Consulting",
  },
  description:
    "SAE Consulting helps ambitious teams make sharper decisions — management consulting, business security, and practical AI integration. Senior advice, simple process, straight answers. Based in Toronto.",
  keywords: [
    "sae c",
    "sae",
    "sae la vie",
    "how to use ai",
    "how to best use ai",
    "best way to use ai",
    "management consult toronto",
    "management consult ontario",
    "management consulting vaughan",
    "management consult gta",
    "management consult forest hill",
    "ai integration toronto",
    "ai integration gta",
    "ai integration cedarvale",
    "ai integration forest hill",
    "ai integration vaughan",
    "ai integration thornhill",
    "ai integration maple",
    "ai integration aurora",
    "ai integration newmarket",
    "ai integration barrie",
    "ai integration mississauga",
    "ai integration kitchener",
    "ai integration oakville",
    "ai integration hamilton",
    "ai integration espanola",
    "ai integration canada",
    "ai integration florida",
    "ai integration boca raton",
    "ai integration aventura",
    "ai integration miami",
    "ai integration cooper city",
    "management consulting Toronto",
    "business security consulting",
    "AI integration consulting",
    "AI automation consultant",
    "operations consulting",
    "physical security assessment",
  ],
  openGraph: {
    title: "SAE Consulting — Management, Security & AI Integration",
    description:
      "Clarity for complex decisions. Management consulting, business security, and AI integration for ambitious teams.",
    url: "https://sae.llc",
    siteName: "SAE Consulting",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SAE Consulting — Management, Security & AI Integration",
    description:
      "Clarity for complex decisions. Management consulting, business security, and AI integration.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-dvh bg-white font-sans text-ink">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

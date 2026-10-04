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
    default: "SAE Consulting — Clarity for complex decisions",
    template: "%s · SAE Consulting",
  },
  description:
    "SAE Consulting helps ambitious teams make sharper decisions — strategy, operations, digital & AI, and growth. Senior advice, simple process, straight answers.",
  openGraph: {
    title: "SAE Consulting",
    description:
      "Clarity for complex decisions. Strategy, operations, digital & AI, and growth consulting.",
    url: "https://sae.llc",
    siteName: "SAE Consulting",
    type: "website",
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

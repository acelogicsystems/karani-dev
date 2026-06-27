import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "karani.dev — Brian Karani Gicovi",
  description:
    "Founder, full-stack developer, and disaster risk specialist based in Nairobi, Kenya. Building resilience solutions for African communities.",
  openGraph: {
    title: "karani.dev — Brian Karani Gicovi",
    description: "Building tech forged for the field.",
    url: "https://karani.dev",
    siteName: "karani.dev",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

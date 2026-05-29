import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foxencreekrescue.org"),
  title: {
    default: "Foxen Creek Rescue — Second chances on the Central Coast",
    template: "%s · Foxen Creek Rescue",
  },
  description:
    "A small, self-funded volunteer animal rescue in California's Santa Maria Valley. We help dogs and cats find their next chapter — one foster home at a time.",
  openGraph: {
    title: "Foxen Creek Rescue",
    description:
      "A small place for second chances on the Central Coast. Self-funded, foster-based animal rescue.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

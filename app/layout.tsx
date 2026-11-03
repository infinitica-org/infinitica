import type { Metadata, Viewport } from "next";
import { Antonio, Geist_Mono, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const antonio = Antonio({ variable: "--font-antonio", subsets: ["latin"], weight: ["400"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.title, template: "%s — Infinitica" },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: ["Infinitica", "product company", "SaaS", "software products", "AI products", "product studio"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: SITE.name, title: SITE.title, description: SITE.description, locale: "en_US" },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#07060b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} ${antonio.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

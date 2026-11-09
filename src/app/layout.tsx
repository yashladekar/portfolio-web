import type { Metadata, Viewport } from "next";
import { Anton, Archivo } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/config";
import Footer from "@/components/footer";
import SiteHeader from "@/components/navbar";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import { Cursor } from "@/components/cursor";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.author.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.author.name}, full-stack engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2ede0" },
    { media: "(prefers-color-scheme: dark)", color: "#1b2a6b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${anton.variable} ${archivo.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            id="skip-link"
            href="#main"
            className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-volt focus:px-4 focus:py-3 focus:text-volt-ink"
          >
            Skip to content
          </a>

          <header>
            <SiteHeader />
          </header>
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>

        <Cursor />
      </body>
    </html>
  );
}

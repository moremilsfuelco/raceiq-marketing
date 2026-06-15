import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "RaceIQ | The Running Coach That Adapts to Real Life",
    template: "%s | RaceIQ",
  },
  description: site.description,
  alternates: { canonical: "/" },
  icons: {
    icon: site.favicon,
    shortcut: site.favicon,
    apple: site.icon,
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "RaceIQ | The Running Coach That Adapts to Real Life",
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1024,
        height: 1024,
        alt: "RaceIQ app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaceIQ | The Running Coach That Adapts to Real Life",
    description: site.description,
    images: [site.ogImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

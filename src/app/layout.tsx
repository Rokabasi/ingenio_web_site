import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothMotion } from "@/components/SmoothMotion";
import { site } from "@/data/site";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: site.slogan,
  metadataBase: new URL("https://ingenioconsulting.com"),
  openGraph: {
    title: site.name,
    description: site.slogan,
    locale: "fr_CD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} h-full overflow-x-clip`}
    >
      <body className="page-shell flex min-h-full max-w-full flex-col overflow-x-clip antialiased">
        <SmoothMotion>
          <Header />
          <main className="min-w-0 flex-1">{children}</main>
          <Footer />
        </SmoothMotion>
      </body>
    </html>
  );
}

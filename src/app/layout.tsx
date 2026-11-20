import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BuxyDigital – Experiențe digitale premium",
    template: "%s | BuxyDigital",
  },
  description:
    "Studio digital premium din România. Site-uri, magazine online, randări 3D și automatizări AI care arată profesionist și aduc rezultate.",
  keywords: [
    "site web",
    "web design",
    "magazin online",
    "randări 3D",
    "automatizări",
    "BuxyDigital",
    "România",
  ],
  openGraph: {
    title: "BuxyDigital – Experiențe digitale premium",
    description:
      "Construim prezențe digitale care arată premium și muncesc pentru business-ul tău.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

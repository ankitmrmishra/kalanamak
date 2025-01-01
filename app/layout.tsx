import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kalanamak Rice - Ancient Aroma, Modern Cultivation",
  description:
    "Discover the exquisite Kalanamak rice, a heritage variety from Uttar Pradesh. Learn about its unique aroma, cultivation methods, and the efforts to preserve this ancient grain.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kalanamak.vercel.app/",
    title: "Kalanamak Rice - Ancient Aroma, Modern Cultivation",
    description:
      "Discover the exquisite Kalanamak rice, a heritage variety from Uttar Pradesh. Learn about its unique aroma, cultivation methods, and the efforts to preserve this ancient grain.",
    images: [
      {
        url: "https://kalanamak.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kalanamak Rice Fields",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalanamak Rice - Ancient Aroma, Modern Cultivation",
    description:
      "Discover the exquisite Kalanamak rice, a heritage variety from Uttar Pradesh. Learn about its unique aroma, cultivation methods, and the efforts to preserve this ancient grain.",
    images: ["https://kalanamak.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
            <Toaster richColors />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Dancing_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import data from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(data.restaurantInfo.siteUrl),

  title: {
    default: `${data.restaurantInfo.name} | Digital Menu`,
    template: `%s | ${data.restaurantInfo.name}`,
  },

  description:
    "Explore our digital restaurant menu — burgers, pizza, pasta, coffee & more. Fast, mobile-first, and inspired by Feane & Koppee.",

  keywords: [
    "restaurant",
    "menu",
    "digital menu",
    "QR menu",
    "Feane",
    "Koppee",
    "coffee shop",
    "pizza",
    "burger",
    "pasta",
    "salads",
    "responsive",
  ],

  openGraph: {
    title: `${data.restaurantInfo.name} | Digital Menu`,
    description:
      "Scan & browse our menu — mobile-friendly, beautifully designed, and lightning fast.",
    url: data.restaurantInfo.siteUrl,
    siteName: data.restaurantInfo.name,
    images: [
      {
        url: `${data.restaurantInfo.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${data.restaurantInfo.name} — Digital Menu`,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${data.restaurantInfo.name} | Digital Menu`,
    description:
      "Scan & browse our menu — mobile-first, visually rich, and powered by ElixFlare.",
    images: [`${data.restaurantInfo.siteUrl}/og-image.jpg`],
  },

  alternates: {
    canonical: data.restaurantInfo.siteUrl,
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${dancing.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

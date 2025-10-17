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
    "Feane/Koppee-inspired digital restaurant menu. Browse burgers, pizza, pasta, salads & more.",
  keywords: [
    "restaurant",
    "menu",
    "pizza",
    "burger",
    "pasta",
    "coffee",
    "qr menu",
    "feane",
    "koppee",
    "digital menu",
  ],
  openGraph: {
    title: `${data.restaurantInfo.name} | Digital Menu`,
    description: "Scan & browse our menu – fast, mobile-first, and delicious.",
    url: data.restaurantInfo.siteUrl,
    siteName: data.restaurantInfo.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.restaurantInfo.name} | Digital Menu`,
    description: "Scan & browse our menu – fast, mobile-first, and delicious.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/" },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
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

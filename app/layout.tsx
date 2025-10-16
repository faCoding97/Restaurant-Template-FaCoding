import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Dancing_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://example.com"),
  title: {
    default: "ElixCode Restaurant | Digital Menu",
    template: "%s | ElixCode Restaurant",
  },
  description:
    "ElixCode-style digital restaurant menu. Browse burgers, pizza, pasta, salads & more.",
  keywords: [
    "restaurant",
    "menu",
    "pizza",
    "burger",
    "pasta",
    "qr menu",
    "ElixCode",
  ],
  openGraph: {
    title: "ElixCode Restaurant | Digital Menu",
    description: "Scan & browse our menu – fast, mobile-first, and delicious.",
    url: "https://example.com",
    siteName: "ElixCode Restaurant",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElixCode Restaurant | Digital Menu",
    description: "Scan & browse our menu – fast, mobile-first, and delicious.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
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
        {/* Header/Nav across the site */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

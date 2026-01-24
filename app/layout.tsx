import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aung Kyaw Oo | Backend & Web Developer",
  description: "Portfolio of Aung Kyaw Oo - Backend/Web Developer specializing in Java, Go, and PHP applications. Experienced in secure financial systems and administrative dashboards.",
  keywords: [
    "Aung Kyaw Oo",
    "Backend Developer",
    "Web Developer",
    "Java Developer",
    "Go Developer",
    "PHP Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Aung Kyaw Oo" }],
  creator: "Aung Kyaw Oo",
  publisher: "Aung Kyaw Oo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.aungkyahoo.com",
    title: "Aung Kyaw Oo | Backend & Web Developer",
    description: "Portfolio of Aung Kyaw Oo - Backend/Web Developer specializing in Java, Go, and PHP applications.",
    siteName: "Aung Kyaw Oo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aung Kyaw Oo | Backend & Web Developer",
    description: "Portfolio of Aung Kyaw Oo - Backend/Web Developer specializing in Java, Go, and PHP applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ibiimemon.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

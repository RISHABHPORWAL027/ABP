import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  style: ["normal", "italic"],
});

const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const fontSyne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fontDmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://allbyplay.com"),
  title: {
    default: "All By Play | Music-First Marketing & Creative Strategy",
    template: "%s | All By Play",
  },
  description:
    "All By Play helps artists, labels, and festivals build music campaigns that feel clear, creative, and effective. Release campaigns, Spotify growth, PR, and branding.",
  applicationName: "All By Play",
  authors: [{ name: "All By Play", url: "https://allbyplay.com" }],
  keywords: [
    "All By Play",
    "Music Marketing Agency",
    "Release Campaigns",
    "Spotify Growth Strategy",
    "Music PR Activation",
    "Artist Branding",
    "Independent Music Marketing",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/abp_gradientwhite_opacity.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allbyplay.com",
    siteName: "All By Play",
    title: "All By Play | Music-First Marketing & Creative Strategy",
    description:
      "All By Play helps artists, labels, and festivals build music campaigns that feel clear, creative, and effective. Release campaigns, Spotify growth, PR, and branding.",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "All By Play — Music-First Marketing & Creative Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All By Play | Music-First Marketing & Creative Strategy",
    description:
      "All By Play helps artists, labels, and festivals build music campaigns that feel clear, creative, and effective.",
    images: ["/og-preview.png"],
    creator: "@allbyplay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontMontserrat.variable} ${fontPlayfair.variable} ${fontSyne.variable} ${fontDmSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white selection:bg-[#FF0043] selection:text-white overflow-x-hidden w-full max-w-full">
        {children}
      </body>
    </html>
  );
}


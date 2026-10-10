import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const fontSatoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Variable.woff2",
      style: "normal",
      weight: "300 900",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-VariableItalic.woff2",
      style: "italic",
      weight: "300 900",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const fontPlayfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
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
      className={`${fontSatoshi.variable} ${fontPlayfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white selection:bg-[#FF0043] selection:text-white">
        {children}
      </body>
    </html>
  );
}


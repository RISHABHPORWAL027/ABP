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
  title: "ABP | Visual Portfolio & Digital Experiences",
  description: "Modern, premium digital experiences, creative direction, and high-impact visual design.",
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


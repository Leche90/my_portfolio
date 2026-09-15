import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/shared/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap"
});

// ---------------------------------------------------------------------------
// SWAP-IN: update with your real name, role, and social preview details.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Lanzema Leche — Full-Stack Full-Stack Web Developer",
  description:
    "I build websites and apps from start to finish — the parts you see and the parts that make them work behind the scenes.",
  openGraph: {
    title: "Lanzema Leche — Full-Stack Web Developer",
    description:
      "I build websites and apps from start to finish — the parts you see and the parts that make them work behind the scenes.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-canvas font-sans antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

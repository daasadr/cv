import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display"
});

export const metadata: Metadata = {
  title: "Dagmar Drbálková - Full Stack Developer",
  description: "Full Stack Developer s 2+ lety zkušeností v IT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${inter.className} ${poppins.variable} ${playfairDisplay.variable}`}>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "traintogo.de – Flexibles Training ohne Vertrag | Pay-per-Minute Fitness-App",
  description: "Trainiere spontan, wann und wo du willst – ohne Mitgliedschaft! Minutengenaue Abrechnung, QR-Code Check-in, viele Studios. Die flexible Fitness-App für alle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}

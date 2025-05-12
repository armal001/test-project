import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple (Deutschland)",
  description: "Entdecken Sie die innovative Welt von Apple. Kaufen Sie iPhone, iPad, Apple Watch, Mac und Apple TV, und finden Sie Zubehör, Entertainment und Produktsupport.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Madendev Rental Cars",
  description:
    "Web desarrollada por Madendev con Next.js, Tailwind CSS y TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={`${outfit.variable} antialiased`}>
          <NextTopLoader color="#000" />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// components
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

// RootLayout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <header>
          <Navbar />
        </header>
        <main className="bg-gray-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felizey",
  description: "Discover Festivals & Events Worldwide with Felizey!",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
    shortcut: "/favicon-32x32.png", // Optional, if you have a specific shortcut icon
    apple: "/apple-touch-icon.png", // Optional, for Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

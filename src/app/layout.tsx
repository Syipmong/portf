import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yipmong | Home",
  description: "Website build by Dev Yipmong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <nav className="flex justify-between p-4 bg-blue-500 text-white">
        <div>Logo</div>
        <div className="space-x-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        </nav>
        {children}
        </body>
    </html>
  );
}

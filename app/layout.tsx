import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marketing Agency Business Plan - India 2025",
  description: "Complete business setup guide for launching a modern marketing agency in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {children}
      </body>
    </html>
  );
}

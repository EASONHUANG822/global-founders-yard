import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Founders Yard | Shenzhen Landing Program",
  description:
    "A Shenzhen landing program for robotics, AI hardware, overseas, and cross-border founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

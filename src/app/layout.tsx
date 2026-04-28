import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathify PDF Generator",
  description: "Internal Web-to-PDF factory for MDX content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}

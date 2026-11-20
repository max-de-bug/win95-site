import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Windows 95 - HTTP & HTTPS Protocol Guide",
  description:
    "Interactive Windows 95 style network guide exploring HTTP, HTTPS, TLS 1.3 handshake, and packet inspection with Arcade Classic styling.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="antialiased min-h-screen bg-[#008080] selection:bg-[#000080] selection:text-white">
        {children}
      </body>
    </html>
  );
}

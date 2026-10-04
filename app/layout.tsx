import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "כלכלת המשפחה",
  description: "ניהול פיננסי אישי חכם, ברור ומאובטח",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Thermometer } from "lucide-react";

// فونت محلی: بدون نیاز به دانلود از اینترنت
const vazir = localFont({
  src: "./fonts/Vazirmatn[wght].woff2",
  variable: "--font-vazir",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "سامانه مدیریت رویدادها",
  description: "از گفتگو تا تصمیم، از تصمیم تا اجرا",
};
export const viewport = {
  themeColor: "#0369A1",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}

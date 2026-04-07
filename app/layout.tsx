import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const naur = localFont({
  src: '../public/fonts/NAURYZREDKEDS.woff2',
  variable: "--font-naur",
  fallback: ["Georgia", "Times New Roman", "serif"],
})

const involve = localFont({
  src: [
    {
      path: '../public/fonts/Involve-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Involve-Oblique.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Involve-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Involve-MediumOblique.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Involve-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Involve-SemiBoldOblique.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/Involve-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Involve-BoldOblique.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: "--font-involve",
  fallback: ["Inter", "Arial", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Приглашение на свадьбу",
  description: "Приглашаем вас на наше свадьбу 09.07.2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${naur.variable} ${involve.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

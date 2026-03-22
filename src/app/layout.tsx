import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Лендинг бесплатно за 3 дня | 247System.ru — Маркетинг с гарантией результата",
  description: "Получите лендинг бесплатно за 3 дня. Оплачивайте только продвижение в Яндекс.Директ или ВК-таргет. 15 лет опыта, работа со сложными B2B-продуктами, бюджеты 20+ млн ₽.",
  keywords: ["лендинг бесплатно", "создание лендинга", "яндекс директ", "вк таргет", "маркетолог", "B2B маркетинг", "продвижение бизнеса", "247System"],
  authors: [{ name: "247System.ru" }],
  openGraph: {
    title: "Лендинг бесплатно за 3 дня | 247System.ru",
    description: "Платите только за результат — продвижение, которое приводит клиентов",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}


import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Providers from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'বাজার দর - নিত্যপ্রয়োজনীয় পণ্যের সঠিক দাম',
  description: 'বাংলাদেশের বাজারের বিভিন্ন পণ্যের বর্তমান দাম ও দামের পরিবর্তন জানুন',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
        <Providers>
          {/* টোস্টগুলো ঠিক মাঝখানে (Top Center) দেখানোর জন্য */}
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          <main className="flex-grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
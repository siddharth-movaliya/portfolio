import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import Head from 'next/head';
import NavigationMenu from '@/components/navigation/navigation-menu';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Siddharth Movaliya',
  description:
    'Portfolio of Siddharth Movaliya — Software Engineer skilled in building modern, performant, and user-focused web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col scroll-smooth antialiased`}
      >
        <NavigationMenu />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

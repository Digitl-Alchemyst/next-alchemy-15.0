// src/app/(user)/layout.tsx
import type { Metadata } from 'next';

import '../globals.css';

import { Toaster } from '@/components/ui/toaster';
import  Footer  from '@/components/global/Footer';
import  Header  from '@/components/global/Header';

export const metadata: Metadata = {
  title: 'Palestine Campaigns Tracker',
  description: 'Track grassroots campaigns, protests, and aid initiatives for Palestine and Gaza',
  keywords: 'Palestine, Gaza, protests, campaigns, aid, grassroots, activism, freedom flotilla',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'Next.js 15 Boilerplate',
    description: 'A comprehensive Next.js 15 boilerplate',
    siteName: 'Next.js 15 Boilerplate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js 15 Boilerplate',
    description: 'A comprehensive Next.js 15 boilerplate',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default HomeLayout;
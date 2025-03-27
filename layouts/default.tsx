import { Metadata } from 'next';

import { Head } from './head';

import { Navbar } from '@/components/navbar';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}`),
  title: siteConfig.name,
  description: siteConfig.openGraph,
  keywords: siteConfig.keyword,
  openGraph: {
    title: siteConfig.openGraph,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.url + '/images/opengraph.png',
        alt: siteConfig.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-svh justify-between">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 w-full flex-col flex items-center justify-center">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <span className="text-xs text-default-600 pr-2">Copyright © 2025</span>
        <p className="text-xs text-cyan-700">DevGotGun all rights reserved</p>
      </footer>
    </div>
  );
}

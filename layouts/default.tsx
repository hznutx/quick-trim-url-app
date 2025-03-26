import {Head} from './head';

import {Navbar} from '@/components/navbar';

export default function DefaultLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='relative flex flex-col h-screen'>
      <Head />
      <Navbar />
      <main className='container mx-auto max-w-7xl px-6 flex-grow pt-16'>{children}</main>
      <footer className='w-full flex items-center justify-center py-3'>
        <span className='text-xs text-default-600 pr-2'>Copyright © 2025</span>
        <p className='text-xs text-cyan-700'>DevGotGun all rights reserved</p>
      </footer>
    </div>
  );
}

import {Html, Head, Main, NextScript} from 'next/document';
import clsx from 'clsx';

import {fontSans} from '@/config/fonts';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className={clsx('fixed inset-0 bg-background font-sans antialiased', fontSans.variable)}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import components from '@/components/components';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Chatiko AI - Your virtual companion | Home',
  description: 'Chatiko AI - Your virtual companion | Home',
};

const { Navbar } = components.Layout;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <aside>Side bar</aside>

        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

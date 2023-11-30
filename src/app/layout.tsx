import 'react-toastify/dist/ReactToastify.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import components from '@/components/components';

import '@/styles/globals.scss';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: 'Chatiko AI - Your virtual companion | Home',
  description: 'Chatiko AI - Your virtual companion | Home',
};

const { Navbar } = components.Layouts;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  let child = null;

  if (!session || !session.user) {
    child = children;
  } else {
    child = (
      <>
        <aside data-authentication="true">Side bar</aside>

        <main data-authentication="true">
          <Navbar />
          {children}
        </main>
      </>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>{child}</body>
    </html>
  );
}

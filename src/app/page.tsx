import type { Metadata } from 'next';

import styles from '@/styles/page.module.scss';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Chatiko AI - Your virtual companion',
  description: 'Chatiko AI - Your virtual companion',
};

export default async function Home() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/auth');
  }
  return <main className={styles.main}></main>;
}

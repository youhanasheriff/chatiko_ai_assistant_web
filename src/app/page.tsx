import type { Metadata } from 'next';

import styles from '@/styles/page.module.scss';

export const metadata: Metadata = {
  title: 'Chatiko AI - Your virtual companion',
  description: 'Chatiko AI - Your virtual companion',
};

export default function Home() {
  return <main className={styles.main}></main>;
}

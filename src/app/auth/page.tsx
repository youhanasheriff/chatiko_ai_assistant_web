import { Metadata, NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';

import constants from '@/constants/constants';

import style from '@/styles/auth/auth.module.scss';
import components from '@/components/components';
import AuthForm from './(components)/AuthForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const { WelcomeTitle } = components.Texts;

export const metadata: Metadata = {
  title: 'Sign In | Chatiko AI - Chatbot as your friend',
  description:
    'Sign in to your account | CHatiko AI - Chatbot as your friend | Sign in to your account.',
};

const Home: NextPage = async () => {
  const session = await getServerSession();

  if (session && session.user) {
    redirect('/');
  }

  return (
    <section className={style.page}>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign in to your account" />
      </Head>
      <main className={style.main}>
        <h1>Sign In</h1>
        <div className={style.content}>
          <div className={style.form}>
            <WelcomeTitle />
            <AuthForm />
          </div>
          <div className={style.laptop}>
            <Image src={constants.IMAGES.laptop} alt="Laptop" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;

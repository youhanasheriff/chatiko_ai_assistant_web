import { Metadata, NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';

import constants from '@/constants/constants';

import style from '@/styles/auth/auth.module.scss';
import components from '@/components/components';
import Link from 'next/link';

const { WelcomeTitle } = components.Texts;
const { TextInputField } = components.Forms;

export const metadata: Metadata = {
  title: 'Sign In | CHatiko AI - Chatbot as your friend',
  description:
    'Sign in to your account | CHatiko AI - Chatbot as your friend | Sign in to your account.',
};

const Home: NextPage = () => {
  return (
    <section className={style.page}>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign in to your account" />
      </Head>
      <main className={style.main}>
        <h1>Sign In</h1>
        <div className={style.content}>
          <form className={style.form}>
            <WelcomeTitle />
            <div className={style.box}>
              <TextInputField
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <br />
              <br />
              <TextInputField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <br />
              <Link href="/auth/forgot-password" className={style.forgot}>
                Forgot Password?
              </Link>
            </div>
          </form>
          <div className={style.laptop}>
            <Image src={constants.IMAGES.laptop} alt="Laptop" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;

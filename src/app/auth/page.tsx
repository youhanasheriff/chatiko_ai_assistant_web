'use client';

import { NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

import constants from '@/constants/constants';
import utils from '@/utils/utils';

import style from '@/styles/auth/auth.module.scss';

// export const metadata: Metadata = {
//   title: 'Sign In',
//   description: 'Sign in to your account',
// };

const Home: NextPage = () => {
  useEffect(() => {
    utils.styles.setAuthBackgroundStyle();
  }, []);

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign in to your account" />
      </Head>
      <main className={style.main}>
        <h1>Sign In</h1>
        <div className={style.content}>
          <form className={style.form}>
            <h1>form</h1>
          </form>
          <div className={style.laptop}>
            <Image src={constants.IMAGES.laptop} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

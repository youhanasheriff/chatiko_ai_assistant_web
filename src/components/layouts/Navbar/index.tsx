'use client';

import React from 'react';

import { signOut } from 'next-auth/react';

import WordsLeftBar from '@/components/WordsLeftBar';

import style from './style.module.scss';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <WordsLeftBar />
      <button onClick={(e) => signOut()}> Sign Out </button>
    </nav>
  );
};

export default Navbar;
